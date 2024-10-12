# openapi_client.ResourcesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_json_get**](ResourcesApi.md#resources_json_get) | **GET** /resources.json | Get Resources by search query


# **resources_json_get**
> List[object] resources_json_get(q)

Get Resources by search query

Global search

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    q = 'q_example' # str | The search query supplied by the user

    try:
        # Get Resources by search query
        api_response = api_instance.resources_json_get(q)
        print("The response of ResourcesApi->resources_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->resources_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| The search query supplied by the user | 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | \&quot;Returns the list of Resources matching the search query &#39;q&#39;.&lt;p&gt;The search query &#39;q&#39; is a Lucene query.&lt;br&gt;The syntax for a Lucene query can be found &lt;a href&#x3D;\&quot;http://lucene.apache.org/core/2_9_4/queryparsersyntax.html\&quot;&gt;here&lt;/a&gt;.\&quot; |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

