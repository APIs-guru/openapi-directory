# openapi_client.CharityOrgApi

All URIs are relative to *https://api.ebay.com/commerce/charity/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_charity_org**](CharityOrgApi.md#get_charity_org) | **GET** /charity_org/{charity_org_id} | 
[**get_charity_orgs**](CharityOrgApi.md#get_charity_orgs) | **GET** /charity_org | 


# **get_charity_org**
> CharityOrg get_charity_org(charity_org_id, x_ebay_c_marketplace_id)



This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.charity_org import CharityOrg
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/charity/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/charity/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CharityOrgApi(api_client)
    charity_org_id = 'charity_org_id_example' # str | The unique ID of the charitable organization.
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | A header used to specify the eBay marketplace ID.<br /><br /><b>Valid Values:</b> <code>EBAY_GB</code> and <code>EBAY_US</code>

    try:
        api_response = api_instance.get_charity_org(charity_org_id, x_ebay_c_marketplace_id)
        print("The response of CharityOrgApi->get_charity_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CharityOrgApi->get_charity_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charity_org_id** | **str**| The unique ID of the charitable organization. | 
 **x_ebay_c_marketplace_id** | **str**| A header used to specify the eBay marketplace ID.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt; &lt;code&gt;EBAY_GB&lt;/code&gt; and &lt;code&gt;EBAY_US&lt;/code&gt; | 

### Return type

[**CharityOrg**](CharityOrg.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_charity_orgs**
> CharitySearchResponse get_charity_orgs(x_ebay_c_marketplace_id, limit=limit, offset=offset, q=q, registration_ids=registration_ids)



This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.charity_search_response import CharitySearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/charity/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/charity/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CharityOrgApi(api_client)
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | A header used to specify the eBay marketplace ID.<br /><br /><b>Valid Values:</b> <code>EBAY_GB</code> and <code>EBAY_US</code>
    limit = 'limit_example' # str | The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code> (optional)
    offset = 'offset_example' # str | The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code> (optional)
    q = 'q_example' # str | A query string that matches the keywords in name, mission statement, or description. (optional)
    registration_ids = 'registration_ids_example' # str | A comma-separated list of charitable organization registration IDs.<br /><br /><span class=\"tablenote\"><b>Note: </b>Do not specify this parameter for query-based searches. Specify either the <b>q</b> or <b>registration_ids</b> parameter, but not both.</span><br /><br /><b>Maximum Limit:</b> <code>20</code> (optional)

    try:
        api_response = api_instance.get_charity_orgs(x_ebay_c_marketplace_id, limit=limit, offset=offset, q=q, registration_ids=registration_ids)
        print("The response of CharityOrgApi->get_charity_orgs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CharityOrgApi->get_charity_orgs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_ebay_c_marketplace_id** | **str**| A header used to specify the eBay marketplace ID.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt; &lt;code&gt;EBAY_GB&lt;/code&gt; and &lt;code&gt;EBAY_US&lt;/code&gt; | 
 **limit** | **str**| The number of items, from the result set, returned in a single page.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt; &lt;code&gt;1-100&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default:&lt;/b&gt; &lt;code&gt;20&lt;/code&gt; | [optional] 
 **offset** | **str**| The number of items that will be skipped in the result set. This is used with the &lt;b&gt;limit&lt;/b&gt; field to control the pagination of the output.&lt;br /&gt;&lt;br /&gt;For example, if the &lt;b&gt;offset&lt;/b&gt; is set to &lt;code&gt;0&lt;/code&gt; and the &lt;b&gt;limit&lt;/b&gt; is set to &lt;code&gt;10&lt;/code&gt;, the method will retrieve items 1 through 10 from the list of items returned. If the &lt;b&gt;offset&lt;/b&gt; is set to &lt;code&gt;10&lt;/code&gt; and the &lt;b&gt;limit&lt;/b&gt; is set to &lt;code&gt;10&lt;/code&gt;, the method will retrieve items 11 through 20 from the list of items returned.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt; &lt;code&gt;0-10,000&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default:&lt;/b&gt; &lt;code&gt;0&lt;/code&gt; | [optional] 
 **q** | **str**| A query string that matches the keywords in name, mission statement, or description. | [optional] 
 **registration_ids** | **str**| A comma-separated list of charitable organization registration IDs.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt;Do not specify this parameter for query-based searches. Specify either the &lt;b&gt;q&lt;/b&gt; or &lt;b&gt;registration_ids&lt;/b&gt; parameter, but not both.&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum Limit:&lt;/b&gt; &lt;code&gt;20&lt;/code&gt; | [optional] 

### Return type

[**CharitySearchResponse**](CharitySearchResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

