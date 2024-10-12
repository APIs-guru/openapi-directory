# openapi_client.ContainerHostMappingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**container_host_mappings_get_container_host_mapping**](ContainerHostMappingsApi.md#container_host_mappings_get_container_host_mapping) | **POST** /providers/Microsoft.DevSpaces/locations/{location}/checkContainerHostMapping | Returns container host mapping object for a container host resource ID if an associated controller exists.


# **container_host_mappings_get_container_host_mapping**
> object container_host_mappings_get_container_host_mapping(api_version, location, container_host_mapping)

Returns container host mapping object for a container host resource ID if an associated controller exists.

### Example


```python
import openapi_client
from openapi_client.models.container_host_mapping import ContainerHostMapping
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContainerHostMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    location = 'location_example' # str | Location of the container host.
    container_host_mapping = openapi_client.ContainerHostMapping() # ContainerHostMapping | 

    try:
        # Returns container host mapping object for a container host resource ID if an associated controller exists.
        api_response = api_instance.container_host_mappings_get_container_host_mapping(api_version, location, container_host_mapping)
        print("The response of ContainerHostMappingsApi->container_host_mappings_get_container_host_mapping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainerHostMappingsApi->container_host_mappings_get_container_host_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **location** | **str**| Location of the container host. | 
 **container_host_mapping** | [**ContainerHostMapping**](ContainerHostMapping.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

