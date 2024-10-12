# openapi_client.VolumesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**volume_create**](VolumesApi.md#volume_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/volumes/{volumeName} | Creates or updates a volume resource.
[**volume_delete**](VolumesApi.md#volume_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/volumes/{volumeName} | Deletes the volume resource.
[**volume_get**](VolumesApi.md#volume_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/volumes/{volumeName} | Gets the volume resource.
[**volume_list_by_resource_group**](VolumesApi.md#volume_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/volumes | Gets all the volume resources in a given resource group.
[**volume_list_by_subscription**](VolumesApi.md#volume_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabricMesh/volumes | Gets all the volume resources in a given subscription.


# **volume_create**
> VolumeResourceDescription volume_create(subscription_id, api_version, resource_group_name, volume_name, volume_resource_description)

Creates or updates a volume resource.

Creates a volume resource with the specified name and description. If a volume with the same name already exists, then its description is updated to the one indicated in this request. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_resource_description import VolumeResourceDescription
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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    volume_name = 'volume_name_example' # str | The identity of the volume.
    volume_resource_description = openapi_client.VolumeResourceDescription() # VolumeResourceDescription | Description for creating a volume resource.

    try:
        # Creates or updates a volume resource.
        api_response = api_instance.volume_create(subscription_id, api_version, resource_group_name, volume_name, volume_resource_description)
        print("The response of VolumesApi->volume_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volume_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **volume_name** | **str**| The identity of the volume. | 
 **volume_resource_description** | [**VolumeResourceDescription**](VolumeResourceDescription.md)| Description for creating a volume resource. | 

### Return type

[**VolumeResourceDescription**](VolumeResourceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**201** | Created |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volume_delete**
> volume_delete(subscription_id, api_version, resource_group_name, volume_name)

Deletes the volume resource.

Deletes the volume identified by the name.

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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    volume_name = 'volume_name_example' # str | The identity of the volume.

    try:
        # Deletes the volume resource.
        api_instance.volume_delete(subscription_id, api_version, resource_group_name, volume_name)
    except Exception as e:
        print("Exception when calling VolumesApi->volume_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **volume_name** | **str**| The identity of the volume. | 

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
**200** | OK |  -  |
**204** | No Content - the specified volume was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volume_get**
> VolumeResourceDescription volume_get(subscription_id, api_version, resource_group_name, volume_name)

Gets the volume resource.

Gets the information about the volume resource with a given name. This information includes the volume description and other runtime information. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_resource_description import VolumeResourceDescription
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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    volume_name = 'volume_name_example' # str | The identity of the volume.

    try:
        # Gets the volume resource.
        api_response = api_instance.volume_get(subscription_id, api_version, resource_group_name, volume_name)
        print("The response of VolumesApi->volume_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volume_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **volume_name** | **str**| The identity of the volume. | 

### Return type

[**VolumeResourceDescription**](VolumeResourceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volume_list_by_resource_group**
> VolumeResourceDescriptionList volume_list_by_resource_group(subscription_id, api_version, resource_group_name)

Gets all the volume resources in a given resource group.

Gets the information about all volume resources in a given resource group. The information includes the volume description and other runtime information. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_resource_description_list import VolumeResourceDescriptionList
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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name

    try:
        # Gets all the volume resources in a given resource group.
        api_response = api_instance.volume_list_by_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of VolumesApi->volume_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volume_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 

### Return type

[**VolumeResourceDescriptionList**](VolumeResourceDescriptionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volume_list_by_subscription**
> VolumeResourceDescriptionList volume_list_by_subscription(subscription_id, api_version)

Gets all the volume resources in a given subscription.

Gets the information about all volume resources in a given subscription. The information includes the volume description and other runtime information. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_resource_description_list import VolumeResourceDescriptionList
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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)

    try:
        # Gets all the volume resources in a given subscription.
        api_response = api_instance.volume_list_by_subscription(subscription_id, api_version)
        print("The response of VolumesApi->volume_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volume_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]

### Return type

[**VolumeResourceDescriptionList**](VolumeResourceDescriptionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

