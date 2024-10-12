# openapi_client.MetricNamespacesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metric_namespaces_list**](MetricNamespacesApi.md#metric_namespaces_list) | **GET** /{resourceUri}/providers/microsoft.insights/metricNamespaces | 


# **metric_namespaces_list**
> MetricNamespaceCollection metric_namespaces_list(resource_uri, api_version, start_time=start_time)



Lists the metric namespaces for the resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_namespace_collection import MetricNamespaceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetricNamespacesApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    start_time = 'start_time_example' # str | The ISO 8601 conform Date start time from which to query for metric namespaces. (optional)

    try:
        api_response = api_instance.metric_namespaces_list(resource_uri, api_version, start_time=start_time)
        print("The response of MetricNamespacesApi->metric_namespaces_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricNamespacesApi->metric_namespaces_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **start_time** | **str**| The ISO 8601 conform Date start time from which to query for metric namespaces. | [optional] 

### Return type

[**MetricNamespaceCollection**](MetricNamespaceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get the list of metric namespaces |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

