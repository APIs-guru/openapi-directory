# openapi_client.CaseClassificationsApi

All URIs are relative to *https://cloudsupport.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudsupport_case_classifications_search**](CaseClassificationsApi.md#cloudsupport_case_classifications_search) | **GET** /v2beta/caseClassifications:search | 


# **cloudsupport_case_classifications_search**
> SearchCaseClassificationsResponse cloudsupport_case_classifications_search(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, product_product_line=product_product_line, product_product_subline=product_product_subline, query=query)



Retrieve valid classifications to use when creating a support case. Classifications are hierarchical. Each classification is a string containing all levels of the hierarchy separated by `\" > \"`. For example, `\"Technical Issue > Compute > Compute Engine\"`. Classification IDs returned by this endpoint are valid for at least six months. When a classification is deactivated, this endpoint immediately stops returning it. After six months, `case.create` requests using the classification will fail. EXAMPLES: cURL: ```shell curl \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ 'https://cloudsupport.googleapis.com/v2/caseClassifications:search?query=display_name:\"*Compute%20Engine*\"' ``` Python: ```python import googleapiclient.discovery supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=\"v2\", discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version=v2\", ) request = supportApiService.caseClassifications().search( query='display_name:\"*Compute Engine*\"' ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.search_case_classifications_response import SearchCaseClassificationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CaseClassificationsApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    page_size = 56 # int | The maximum number of classifications fetched with each request. (optional)
    page_token = 'page_token_example' # str | A token identifying the page of results to return. If unspecified, the first page is retrieved. (optional)
    product_product_line = 'product_product_line_example' # str | The Product Line of the Product. (optional)
    product_product_subline = 'product_product_subline_example' # str | The Product Subline of the Product, such as \"Maps Billing\". (optional)
    query = 'query_example' # str | An expression used to filter case classifications. If it's an empty string, then no filtering happens. Otherwise, case classifications will be returned that match the filter. (optional)

    try:
        api_response = api_instance.cloudsupport_case_classifications_search(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, product_product_line=product_product_line, product_product_subline=product_product_subline, query=query)
        print("The response of CaseClassificationsApi->cloudsupport_case_classifications_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CaseClassificationsApi->cloudsupport_case_classifications_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **page_size** | **int**| The maximum number of classifications fetched with each request. | [optional] 
 **page_token** | **str**| A token identifying the page of results to return. If unspecified, the first page is retrieved. | [optional] 
 **product_product_line** | **str**| The Product Line of the Product. | [optional] 
 **product_product_subline** | **str**| The Product Subline of the Product, such as \&quot;Maps Billing\&quot;. | [optional] 
 **query** | **str**| An expression used to filter case classifications. If it&#39;s an empty string, then no filtering happens. Otherwise, case classifications will be returned that match the filter. | [optional] 

### Return type

[**SearchCaseClassificationsResponse**](SearchCaseClassificationsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

