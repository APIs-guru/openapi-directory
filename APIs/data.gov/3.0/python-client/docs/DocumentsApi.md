# openapi_client.DocumentsApi

All URIs are relative to *https://api.data.gov/regulations/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**document**](DocumentsApi.md#document) | **GET** /document.{response_format} | Returns Document information
[**documents**](DocumentsApi.md#documents) | **GET** /documents.{response_format} | Search for Documents


# **document**
> document(response_format, document_id=document_id, federal_register_number=federal_register_number)

Returns Document information

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.data.gov/regulations/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.data.gov/regulations/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    response_format = json # str | Format (default to json)
    document_id = 'EPA-HQ-OAR-2011-0028-0108' # str | FDMS Document ID (optional) (default to 'EPA-HQ-OAR-2011-0028-0108')
    federal_register_number = 'federal_register_number_example' # str | Federal Register Document Number (optional)

    try:
        # Returns Document information
        api_instance.document(response_format, document_id=document_id, federal_register_number=federal_register_number)
    except Exception as e:
        print("Exception when calling DocumentsApi->document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **response_format** | **str**| Format | [default to json]
 **document_id** | **str**| FDMS Document ID | [optional] [default to &#39;EPA-HQ-OAR-2011-0028-0108&#39;]
 **federal_register_number** | **str**| Federal Register Document Number | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**400** | Bad request. The document is only available for comment via Regulations.gov. |  -  |
**404** | File not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents**
> documents(response_format, counts_only=counts_only, encoded=encoded, s=s, dct=dct, dktid=dktid, dkt=dkt, cp=cp, a=a, rpp=rpp, po=po, cs=cs, np=np, cmsd=cmsd, cmd=cmd, crd=crd, rd=rd, pd=pd, cat=cat, sb=sb, so=so, dktst=dktst, dktst2=dktst2, docst=docst)

Search for Documents

This API allows users to build a query based on any of the parameters below.  If you have trouble building queries, you may wish to try them through the <a href=\"http://www.regulations.gov/#!advancedSearch\">Advanced Search</a> page on the Regulations.gov website.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.data.gov/regulations/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.data.gov/regulations/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    response_format = json # str | Format (default to json)
    counts_only = 56 # int | Counts Only: <ul><li>1 (will return only the document count for a search query)</li><li>0 (will return documents as well)</li></ul> (optional)
    encoded = 56 # int | Encoded: <ul><li>1 (will accept Regulations.gov style encoded parameters)</li><li>0 (will not accept such encoded parameters)</li></ul> (optional)
    s = 's_example' # str | Keyword(s) (optional)
    dct = 'dct_example' # str | Document Type: <ul><li>N: Notice</li><li>PR: Proposed Rule</li><li>FR: Rule</li><li>O: Other</li><li>SR: Supporting & Related Material</li><li>PS: Public Submission</li></ul> (optional)
    dktid = 'dktid_example' # str | Valid Docket ID (ex. SEC-2012-0044) (optional)
    dkt = 'dkt_example' # str | Docket Type: <ul><li>R: Rulemaking</li><li>N: Nonrulemaking</li></ul><p>A Docket Type is either Rulemaking or Nonrulemaking. A Rulemaking docket includes the type of regulation that establishes a rule. While a Non-Rulemaking docket does not include a rule.</p> (optional)
    cp = 'cp_example' # str | Comment Period: <ul><li>O: Open</li><li>C: Closed</li></ul> (optional)
    a = 'a_example' # str | Federal Agency: List of accepted Federal Agency values. This field allows multiple values. Ex. a=FMCSA%252BEPA%252BFDA (optional)
    rpp = 'rpp_example' # str | Results Per Page 10, 25, 100, 500, 1,000.  Results per page may not exceed 1,000. (optional)
    po = 56 # int | Enter the page offset (always starts with 0). This is used in conjunction with results per page to provide large data sets. For example, if a search produces 82 results and the result per page is set to 25, this will generate 4 pages. 3 pages will have 25 results and the last page will have 7 results. Page offset values for each page will be: <pre>Page 1: po=0 Page 2: po=25 Page 3: po=50 Page 4: po=75</pre> The total number of pages is [total results/results per page] and page offset for page X is [X-1 * results per page] (optional)
    cs = 56 # int | Comment Period Closing Soon: <ul><li>0 (closing today)</li><li>3 (closing within 3 days)</li><li>15 (closing within 15 days)</li><li>30 (closing within 30 days)</li><li>90 (closing within 90 days)</li></ul> (optional)
    np = 56 # int | Newly Posted: <ul><li>0 (posted today)</li><li>3 (posted within last 3 days)</li><li>15 (posted within last 15 days)</li><li>30 (posted within last 30 days)</li><li>90 (posted within last 90 days)</li></ul>  For periods of time beyond 90-days, please use a date range with the Posted Date parameter. (optional)
    cmsd = '2013-10-20' # date | Comment Period Start Date: Enter a date in the form of MM/DD/YY. Note: If the Comment Period End Date is also provided, then ensure the Comment Period Start date is earlier. (optional)
    cmd = '2013-10-20' # date | Comment Period End Date: Enter a date in the form of MM/DD/YY. Note: If the Comment Period Start Date is also provided, then ensure the Comment Period End date is after.<br/>* Comment Period Start and End Dates are mutually exclusive with the 'closing soon' parameter. If both are provided, 'closing soon' will be ignored. (optional)
    crd = '2013-10-20' # date | Creation Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. <code>crd=11/06/13-03/06/14</code> (optional)
    rd = '2013-10-20' # date | Received Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. <code>rd=11/06/13-03/06/14</code> (optional)
    pd = '2013-10-20' # date | Posted Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. <code>pd=11/06/13-03/06/14</code> (optional)
    cat = 'cat_example' # str | Document Category: <ul><li>AD (Aerospace and Transportation)</li> <li>AEP (Agriculture, Environment, and Public Lands)</li> <li>BFS (Banking and Financial)</li> <li>CT (Commerce and International)</li> <li>LES (Defense, Law Enforcement, and Security)</li> <li>EELS (Education, Labor, Presidential, and Government Services)</li> <li>EUMM (Energy, Natural Resources, and Utilities)</li> <li>HCFP (Food Safety, Health, and Pharmaceutical)</li> <li>PRE (Housing, Development, and Real Estate)</li> <li>ITT (Technology and Telecommunications)</li></ul> (optional)
    sb = 'sb_example' # str | Sort By: <ul><li>docketId (Docket ID)</li><li>docId (Document ID)</li><li>title (Title)</li><li>postedDate (Posted Date)</li><li>agency (Agency)</li><li>documentType (Document Type)</li><li>submitterName (Submitter Name)</li><li>organization (Organization)</li></ul> Sort Order is REQUIRED if this parameter is included. (optional)
    so = 'so_example' # str | Sort Order: <ul><li>ASC: Ascending</li><li>DESC: Descending</li></ul> (optional)
    dktst = 'dktst_example' # str | Docket Subtype: Only one docket subtype at a time may be selected. One or more agency values must be part of the request. Only values valid for the selected agency will be returned. (optional)
    dktst2 = 'dktst2_example' # str | Docket Sub-subtype: Only one docket sub-subtype at a time may be selected. One or more agency values must be part of the request. Only values valid for the selected agency will be returned. (optional)
    docst = 'docst_example' # str | Document Subtype: Single or multiple document subtypes may be included.  Multiple values should be passed as follows: <code>docst=%20Certificate+of+Service%252BCorrespondence</code> (optional)

    try:
        # Search for Documents
        api_instance.documents(response_format, counts_only=counts_only, encoded=encoded, s=s, dct=dct, dktid=dktid, dkt=dkt, cp=cp, a=a, rpp=rpp, po=po, cs=cs, np=np, cmsd=cmsd, cmd=cmd, crd=crd, rd=rd, pd=pd, cat=cat, sb=sb, so=so, dktst=dktst, dktst2=dktst2, docst=docst)
    except Exception as e:
        print("Exception when calling DocumentsApi->documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **response_format** | **str**| Format | [default to json]
 **counts_only** | **int**| Counts Only: &lt;ul&gt;&lt;li&gt;1 (will return only the document count for a search query)&lt;/li&gt;&lt;li&gt;0 (will return documents as well)&lt;/li&gt;&lt;/ul&gt; | [optional] 
 **encoded** | **int**| Encoded: &lt;ul&gt;&lt;li&gt;1 (will accept Regulations.gov style encoded parameters)&lt;/li&gt;&lt;li&gt;0 (will not accept such encoded parameters)&lt;/li&gt;&lt;/ul&gt; | [optional] 
 **s** | **str**| Keyword(s) | [optional] 
 **dct** | **str**| Document Type: &lt;ul&gt;&lt;li&gt;N: Notice&lt;/li&gt;&lt;li&gt;PR: Proposed Rule&lt;/li&gt;&lt;li&gt;FR: Rule&lt;/li&gt;&lt;li&gt;O: Other&lt;/li&gt;&lt;li&gt;SR: Supporting &amp; Related Material&lt;/li&gt;&lt;li&gt;PS: Public Submission&lt;/li&gt;&lt;/ul&gt; | [optional] 
 **dktid** | **str**| Valid Docket ID (ex. SEC-2012-0044) | [optional] 
 **dkt** | **str**| Docket Type: &lt;ul&gt;&lt;li&gt;R: Rulemaking&lt;/li&gt;&lt;li&gt;N: Nonrulemaking&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;A Docket Type is either Rulemaking or Nonrulemaking. A Rulemaking docket includes the type of regulation that establishes a rule. While a Non-Rulemaking docket does not include a rule.&lt;/p&gt; | [optional] 
 **cp** | **str**| Comment Period: &lt;ul&gt;&lt;li&gt;O: Open&lt;/li&gt;&lt;li&gt;C: Closed&lt;/li&gt;&lt;/ul&gt; | [optional] 
 **a** | **str**| Federal Agency: List of accepted Federal Agency values. This field allows multiple values. Ex. a&#x3D;FMCSA%252BEPA%252BFDA | [optional] 
 **rpp** | **str**| Results Per Page 10, 25, 100, 500, 1,000.  Results per page may not exceed 1,000. | [optional] 
 **po** | **int**| Enter the page offset (always starts with 0). This is used in conjunction with results per page to provide large data sets. For example, if a search produces 82 results and the result per page is set to 25, this will generate 4 pages. 3 pages will have 25 results and the last page will have 7 results. Page offset values for each page will be: &lt;pre&gt;Page 1: po&#x3D;0 Page 2: po&#x3D;25 Page 3: po&#x3D;50 Page 4: po&#x3D;75&lt;/pre&gt; The total number of pages is [total results/results per page] and page offset for page X is [X-1 * results per page] | [optional] 
 **cs** | **int**| Comment Period Closing Soon: &lt;ul&gt;&lt;li&gt;0 (closing today)&lt;/li&gt;&lt;li&gt;3 (closing within 3 days)&lt;/li&gt;&lt;li&gt;15 (closing within 15 days)&lt;/li&gt;&lt;li&gt;30 (closing within 30 days)&lt;/li&gt;&lt;li&gt;90 (closing within 90 days)&lt;/li&gt;&lt;/ul&gt; | [optional] 
 **np** | **int**| Newly Posted: &lt;ul&gt;&lt;li&gt;0 (posted today)&lt;/li&gt;&lt;li&gt;3 (posted within last 3 days)&lt;/li&gt;&lt;li&gt;15 (posted within last 15 days)&lt;/li&gt;&lt;li&gt;30 (posted within last 30 days)&lt;/li&gt;&lt;li&gt;90 (posted within last 90 days)&lt;/li&gt;&lt;/ul&gt;  For periods of time beyond 90-days, please use a date range with the Posted Date parameter. | [optional] 
 **cmsd** | **date**| Comment Period Start Date: Enter a date in the form of MM/DD/YY. Note: If the Comment Period End Date is also provided, then ensure the Comment Period Start date is earlier. | [optional] 
 **cmd** | **date**| Comment Period End Date: Enter a date in the form of MM/DD/YY. Note: If the Comment Period Start Date is also provided, then ensure the Comment Period End date is after.&lt;br/&gt;* Comment Period Start and End Dates are mutually exclusive with the &#39;closing soon&#39; parameter. If both are provided, &#39;closing soon&#39; will be ignored. | [optional] 
 **crd** | **date**| Creation Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. &lt;code&gt;crd&#x3D;11/06/13-03/06/14&lt;/code&gt; | [optional] 
 **rd** | **date**| Received Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. &lt;code&gt;rd&#x3D;11/06/13-03/06/14&lt;/code&gt; | [optional] 
 **pd** | **date**| Posted Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. &lt;code&gt;pd&#x3D;11/06/13-03/06/14&lt;/code&gt; | [optional] 
 **cat** | **str**| Document Category: &lt;ul&gt;&lt;li&gt;AD (Aerospace and Transportation)&lt;/li&gt; &lt;li&gt;AEP (Agriculture, Environment, and Public Lands)&lt;/li&gt; &lt;li&gt;BFS (Banking and Financial)&lt;/li&gt; &lt;li&gt;CT (Commerce and International)&lt;/li&gt; &lt;li&gt;LES (Defense, Law Enforcement, and Security)&lt;/li&gt; &lt;li&gt;EELS (Education, Labor, Presidential, and Government Services)&lt;/li&gt; &lt;li&gt;EUMM (Energy, Natural Resources, and Utilities)&lt;/li&gt; &lt;li&gt;HCFP (Food Safety, Health, and Pharmaceutical)&lt;/li&gt; &lt;li&gt;PRE (Housing, Development, and Real Estate)&lt;/li&gt; &lt;li&gt;ITT (Technology and Telecommunications)&lt;/li&gt;&lt;/ul&gt; | [optional] 
 **sb** | **str**| Sort By: &lt;ul&gt;&lt;li&gt;docketId (Docket ID)&lt;/li&gt;&lt;li&gt;docId (Document ID)&lt;/li&gt;&lt;li&gt;title (Title)&lt;/li&gt;&lt;li&gt;postedDate (Posted Date)&lt;/li&gt;&lt;li&gt;agency (Agency)&lt;/li&gt;&lt;li&gt;documentType (Document Type)&lt;/li&gt;&lt;li&gt;submitterName (Submitter Name)&lt;/li&gt;&lt;li&gt;organization (Organization)&lt;/li&gt;&lt;/ul&gt; Sort Order is REQUIRED if this parameter is included. | [optional] 
 **so** | **str**| Sort Order: &lt;ul&gt;&lt;li&gt;ASC: Ascending&lt;/li&gt;&lt;li&gt;DESC: Descending&lt;/li&gt;&lt;/ul&gt; | [optional] 
 **dktst** | **str**| Docket Subtype: Only one docket subtype at a time may be selected. One or more agency values must be part of the request. Only values valid for the selected agency will be returned. | [optional] 
 **dktst2** | **str**| Docket Sub-subtype: Only one docket sub-subtype at a time may be selected. One or more agency values must be part of the request. Only values valid for the selected agency will be returned. | [optional] 
 **docst** | **str**| Document Subtype: Single or multiple document subtypes may be included.  Multiple values should be passed as follows: &lt;code&gt;docst&#x3D;%20Certificate+of+Service%252BCorrespondence&lt;/code&gt; | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**400** | Bad request. The document is only available for comment via Regulations.gov. |  -  |
**404** | File not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

