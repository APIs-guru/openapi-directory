# openapi_client.EndpointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**digital_twins_endpoint_create_or_update**](EndpointsApi.md#digital_twins_endpoint_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName} | 
[**digital_twins_endpoint_delete**](EndpointsApi.md#digital_twins_endpoint_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName} | 
[**digital_twins_endpoint_get**](EndpointsApi.md#digital_twins_endpoint_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName} | 
[**digital_twins_endpoint_list**](EndpointsApi.md#digital_twins_endpoint_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints | 


# **digital_twins_endpoint_create_or_update**
> DigitalTwinsEndpointResource digital_twins_endpoint_create_or_update(api_version, subscription_id, resource_group_name, resource_name, endpoint_name, endpoint_description)



Create or update DigitalTwinsInstance endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.digital_twins_endpoint_resource import DigitalTwinsEndpointResource
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
    api_instance = openapi_client.EndpointsApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.
    resource_name = 'resource_name_example' # str | The name of the DigitalTwinsInstance.
    endpoint_name = 'endpoint_name_example' # str | Name of Endpoint Resource.
    endpoint_description = openapi_client.DigitalTwinsEndpointResource() # DigitalTwinsEndpointResource | The DigitalTwinsInstance endpoint metadata and security metadata.

    try:
        api_response = api_instance.digital_twins_endpoint_create_or_update(api_version, subscription_id, resource_group_name, resource_name, endpoint_name, endpoint_description)
        print("The response of EndpointsApi->digital_twins_endpoint_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->digital_twins_endpoint_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 
 **resource_name** | **str**| The name of the DigitalTwinsInstance. | 
 **endpoint_name** | **str**| Name of Endpoint Resource. | 
 **endpoint_description** | [**DigitalTwinsEndpointResource**](DigitalTwinsEndpointResource.md)| The DigitalTwinsInstance endpoint metadata and security metadata. | 

### Return type

[**DigitalTwinsEndpointResource**](DigitalTwinsEndpointResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**201** | Created - Put request accepted; the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **digital_twins_endpoint_delete**
> digital_twins_endpoint_delete(api_version, subscription_id, resource_group_name, resource_name, endpoint_name)



Delete a DigitalTwinsInstance endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.EndpointsApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.
    resource_name = 'resource_name_example' # str | The name of the DigitalTwinsInstance.
    endpoint_name = 'endpoint_name_example' # str | Name of Endpoint Resource.

    try:
        api_instance.digital_twins_endpoint_delete(api_version, subscription_id, resource_group_name, resource_name, endpoint_name)
    except Exception as e:
        print("Exception when calling EndpointsApi->digital_twins_endpoint_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 
 **resource_name** | **str**| The name of the DigitalTwinsInstance. | 
 **endpoint_name** | **str**| Name of Endpoint Resource. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**202** | Accepted - Delete request accepted; the operation will complete asynchronously. |  -  |
**204** | Once the long running delete operation completes successfully, a 204 No Content status code is returned when the status polling request finds the DigitalTwins service metadata in the service and the status of the delete operation is set to a completed state. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **digital_twins_endpoint_get**
> DigitalTwinsEndpointResource digital_twins_endpoint_get(api_version, subscription_id, resource_group_name, resource_name, endpoint_name)



Get DigitalTwinsInstances Endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.digital_twins_endpoint_resource import DigitalTwinsEndpointResource
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
    api_instance = openapi_client.EndpointsApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.
    resource_name = 'resource_name_example' # str | The name of the DigitalTwinsInstance.
    endpoint_name = 'endpoint_name_example' # str | Name of Endpoint Resource.

    try:
        api_response = api_instance.digital_twins_endpoint_get(api_version, subscription_id, resource_group_name, resource_name, endpoint_name)
        print("The response of EndpointsApi->digital_twins_endpoint_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->digital_twins_endpoint_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 
 **resource_name** | **str**| The name of the DigitalTwinsInstance. | 
 **endpoint_name** | **str**| Name of Endpoint Resource. | 

### Return type

[**DigitalTwinsEndpointResource**](DigitalTwinsEndpointResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains all the non-security properties of the DigitalTwinsInstance. Security-related properties are set to null. |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **digital_twins_endpoint_list**
> DigitalTwinsEndpointResourceListResult digital_twins_endpoint_list(api_version, subscription_id, resource_group_name, resource_name)



Get DigitalTwinsInstance Endpoints.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.digital_twins_endpoint_resource_list_result import DigitalTwinsEndpointResourceListResult
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
    api_instance = openapi_client.EndpointsApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.
    resource_name = 'resource_name_example' # str | The name of the DigitalTwinsInstance.

    try:
        api_response = api_instance.digital_twins_endpoint_list(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of EndpointsApi->digital_twins_endpoint_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->digital_twins_endpoint_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 
 **resource_name** | **str**| The name of the DigitalTwinsInstance. | 

### Return type

[**DigitalTwinsEndpointResourceListResult**](DigitalTwinsEndpointResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains all the non-security properties of the DigitalTwinsInstance. Security-related properties are set to null. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

