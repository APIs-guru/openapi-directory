
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/cloudsearchdomain/ - Amazon Web Services documentation"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://cloudsearchdomain.{region}.amazonaws.com",
	"https://cloudsearchdomain.{region}.amazonaws.com",
	"http://cloudsearchdomain.{region}.amazonaws.com.cn",
	"https://cloudsearchdomain.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/cloudsearchdomain/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def search(self, request: operations.SearchRequest) -> operations.SearchResponse:
        r"""<p>Retrieves a list of documents that match the specified search criteria. How you specify the search criteria depends on which query parser you use. Amazon CloudSearch supports four query parsers:</p> <ul> <li><code>simple</code>: search all <code>text</code> and <code>text-array</code> fields for the specified string. Search for phrases, individual terms, and prefixes. </li> <li><code>structured</code>: search specific fields, construct compound queries using Boolean operators, and use advanced features such as term boosting and proximity searching.</li> <li><code>lucene</code>: specify search criteria using the Apache Lucene query parser syntax.</li> <li><code>dismax</code>: specify search criteria using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser.</li> </ul> <p>For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html\">Searching Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p> <p>The endpoint for submitting <code>Search</code> requests is domain-specific. You submit search requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2013-01-01/search#format=sdk&pretty=true&q"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchException])
                res.search_exception = out

        return res

    
    def suggest(self, request: operations.SuggestRequest) -> operations.SuggestResponse:
        r"""<p>Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match. </p> <p>For more information about configuring suggesters and retrieving suggestions, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\">Getting Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p> <p>The endpoint for submitting <code>Suggest</code> requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2013-01-01/suggest#format=sdk&pretty=true&q&suggester"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SuggestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SuggestResponse])
                res.suggest_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchException])
                res.search_exception = out

        return res

    
    def upload_documents(self, request: operations.UploadDocumentsRequest) -> operations.UploadDocumentsResponse:
        r"""<p>Posts a batch of documents to a search domain for indexing. A document batch is a collection of add and delete operations that represent the documents you want to add, update, or delete from your domain. Batches can be described in either JSON or XML. Each item that you want Amazon CloudSearch to return as a search result (such as a product) is represented as a document. Every document has a unique ID and one or more fields that contain the data that you want to search and return in results. Individual documents cannot contain more than 1 MB of data. The entire batch cannot exceed 5 MB. To get the best possible upload performance, group add and delete operations in batches that are close the 5 MB limit. Submitting a large volume of single-document batches can overload a domain's document service. </p> <p>The endpoint for submitting <code>UploadDocuments</code> requests is domain-specific. To get the document endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p> <p>For more information about formatting your data for Amazon CloudSearch, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/preparing-data.html\">Preparing Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>. For more information about uploading data for indexing, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/uploading-data.html\">Uploading Data</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2013-01-01/documents/batch#format=sdk&Content-Type"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadDocumentsResponse])
                res.upload_documents_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DocumentServiceException])
                res.document_service_exception = out

        return res

    