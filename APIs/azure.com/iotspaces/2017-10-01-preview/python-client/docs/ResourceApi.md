# openapi_client.ResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**io_t_spaces_create_or_update**](ResourceApi.md#io_t_spaces_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph/{resourceName} | 
[**io_t_spaces_delete**](ResourceApi.md#io_t_spaces_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph/{resourceName} | 
[**io_t_spaces_get**](ResourceApi.md#io_t_spaces_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph/{resourceName} | 
[**io_t_spaces_update**](ResourceApi.md#io_t_spaces_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph/{resourceName} | 


# **io_t_spaces_create_or_update**
> IoTSpacesDescription io_t_spaces_create_or_update(api_version, subscription_id, resource_group_name, resource_name, iot_space_description)



Create or update the metadata of an IoTSpaces instance. The usual pattern to modify a property is to retrieve the IoTSpaces instance metadata and security metadata, and then combine them with the modified values in a new body to update the IoTSpaces instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_spaces_description import IoTSpacesDescription
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
    api_instance = openapi_client.ResourceApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoTSpaces instance.
    resource_name = 'resource_name_example' # str | The name of the IoTSpaces instance.
    iot_space_description = openapi_client.IoTSpacesDescription() # IoTSpacesDescription | The IoTSpaces instance metadata and security metadata.

    try:
        api_response = api_instance.io_t_spaces_create_or_update(api_version, subscription_id, resource_group_name, resource_name, iot_space_description)
        print("The response of ResourceApi->io_t_spaces_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->io_t_spaces_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoTSpaces instance. | 
 **resource_name** | **str**| The name of the IoTSpaces instance. | 
 **iot_space_description** | [**IoTSpacesDescription**](IoTSpacesDescription.md)| The IoTSpaces instance metadata and security metadata. | 

### Return type

[**IoTSpacesDescription**](IoTSpacesDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**202** | Accepted - Put request accepted; the operation will complete asynchronously. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_spaces_delete**
> IoTSpacesDescription io_t_spaces_delete(api_version, subscription_id, resource_group_name, resource_name)



Delete an IoTSpaces instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_spaces_description import IoTSpacesDescription
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
    api_instance = openapi_client.ResourceApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoTSpaces instance.
    resource_name = 'resource_name_example' # str | The name of the IoTSpaces instance.

    try:
        api_response = api_instance.io_t_spaces_delete(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of ResourceApi->io_t_spaces_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->io_t_spaces_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoTSpaces instance. | 
 **resource_name** | **str**| The name of the IoTSpaces instance. | 

### Return type

[**IoTSpacesDescription**](IoTSpacesDescription.md)

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
**204** | Once the long running delete operation completes successfully, a 204 No Content status code is returned when the status polling request finds the IoTSpaces service metadata in the service and the status of the delete operation is set to a completed state. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_spaces_get**
> IoTSpacesDescription io_t_spaces_get(api_version, subscription_id, resource_group_name, resource_name)



Get the metadata of a IoTSpaces instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_spaces_description import IoTSpacesDescription
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
    api_instance = openapi_client.ResourceApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoTSpaces instance.
    resource_name = 'resource_name_example' # str | The name of the IoTSpaces instance.

    try:
        api_response = api_instance.io_t_spaces_get(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of ResourceApi->io_t_spaces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->io_t_spaces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoTSpaces instance. | 
 **resource_name** | **str**| The name of the IoTSpaces instance. | 

### Return type

[**IoTSpacesDescription**](IoTSpacesDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains all the non-security properties of the IoTSpaces instance. Security-related properties are set to null. |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_spaces_update**
> IoTSpacesDescription io_t_spaces_update(api_version, subscription_id, resource_group_name, resource_name, iot_space_patch_description)



Update the metadata of a IoTSpaces instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_spaces_description import IoTSpacesDescription
from openapi_client.models.io_t_spaces_patch_description import IoTSpacesPatchDescription
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
    api_instance = openapi_client.ResourceApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoTSpaces instance.
    resource_name = 'resource_name_example' # str | The name of the IoTSpaces instance.
    iot_space_patch_description = openapi_client.IoTSpacesPatchDescription() # IoTSpacesPatchDescription | The IoTSpaces instance metadata and security metadata.

    try:
        api_response = api_instance.io_t_spaces_update(api_version, subscription_id, resource_group_name, resource_name, iot_space_patch_description)
        print("The response of ResourceApi->io_t_spaces_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->io_t_spaces_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoTSpaces instance. | 
 **resource_name** | **str**| The name of the IoTSpaces instance. | 
 **iot_space_patch_description** | [**IoTSpacesPatchDescription**](IoTSpacesPatchDescription.md)| The IoTSpaces instance metadata and security metadata. | 

### Return type

[**IoTSpacesDescription**](IoTSpacesDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**202** | Accepted - Put request accepted; the operation will complete asynchronously. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

