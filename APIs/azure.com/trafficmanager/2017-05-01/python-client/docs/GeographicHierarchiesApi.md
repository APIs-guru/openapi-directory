# openapi_client.GeographicHierarchiesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geographic_hierarchies_get_default**](GeographicHierarchiesApi.md#geographic_hierarchies_get_default) | **GET** /providers/Microsoft.Network/trafficManagerGeographicHierarchies/default | 


# **geographic_hierarchies_get_default**
> TrafficManagerGeographicHierarchy geographic_hierarchies_get_default(api_version)



Gets the default Geographic Hierarchy used by the Geographic traffic routing method.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.traffic_manager_geographic_hierarchy import TrafficManagerGeographicHierarchy
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
    api_instance = openapi_client.GeographicHierarchiesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.geographic_hierarchies_get_default(api_version)
        print("The response of GeographicHierarchiesApi->geographic_hierarchies_get_default:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeographicHierarchiesApi->geographic_hierarchies_get_default: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 

### Return type

[**TrafficManagerGeographicHierarchy**](TrafficManagerGeographicHierarchy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The default Geographic Hierarchy. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

