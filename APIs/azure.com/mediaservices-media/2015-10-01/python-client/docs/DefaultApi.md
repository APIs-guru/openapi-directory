# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**media_service_check_name_availability**](DefaultApi.md#media_service_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Media/CheckNameAvailability | 
[**media_service_create**](DefaultApi.md#media_service_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName} | 
[**media_service_delete**](DefaultApi.md#media_service_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName} | 
[**media_service_get**](DefaultApi.md#media_service_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName} | 
[**media_service_list_by_resource_group**](DefaultApi.md#media_service_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices | 
[**media_service_list_keys**](DefaultApi.md#media_service_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}/listKeys | 
[**media_service_regenerate_key**](DefaultApi.md#media_service_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}/regenerateKey | 
[**media_service_sync_storage_keys**](DefaultApi.md#media_service_sync_storage_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}/syncStorageKeys | 
[**media_service_update**](DefaultApi.md#media_service_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName} | 
[**operations_list**](DefaultApi.md#operations_list) | **GET** /providers/Microsoft.Media/operations | 


# **media_service_check_name_availability**
> CheckNameAvailabilityOutput media_service_check_name_availability(subscription_id, api_version, parameters)



Checks whether the Media Service resource name is available. The name must be globally unique.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_input import CheckNameAvailabilityInput
from openapi_client.models.check_name_availability_output import CheckNameAvailabilityOutput
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.
    parameters = openapi_client.CheckNameAvailabilityInput() # CheckNameAvailabilityInput | Properties needed to check the availability of a name.

    try:
        api_response = api_instance.media_service_check_name_availability(subscription_id, api_version, parameters)
        print("The response of DefaultApi->media_service_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_service_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 
 **parameters** | [**CheckNameAvailabilityInput**](CheckNameAvailabilityInput.md)| Properties needed to check the availability of a name. | 

### Return type

[**CheckNameAvailabilityOutput**](CheckNameAvailabilityOutput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. Returns details about whether a Media Service resource name is available. |  -  |
**0** | CheckNameAvailability of a Media Service failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_service_create**
> MediaService media_service_create(subscription_id, api_version, resource_group_name, media_service_name, parameters)



Creates a Media Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.media_service import MediaService
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    media_service_name = 'media_service_name_example' # str | Name of the Media Service.
    parameters = openapi_client.MediaService() # MediaService | Media Service properties needed for creation.

    try:
        api_response = api_instance.media_service_create(subscription_id, api_version, resource_group_name, media_service_name, parameters)
        print("The response of DefaultApi->media_service_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_service_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **media_service_name** | **str**| Name of the Media Service. | 
 **parameters** | [**MediaService**](MediaService.md)| Media Service properties needed for creation. | 

### Return type

[**MediaService**](MediaService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success. Returns the new Media Services account. |  -  |
**0** | Create Media Services failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_service_delete**
> media_service_delete(subscription_id, api_version, resource_group_name, media_service_name)



Deletes a Media Service.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    media_service_name = 'media_service_name_example' # str | Name of the Media Service.

    try:
        api_instance.media_service_delete(subscription_id, api_version, resource_group_name, media_service_name)
    except Exception as e:
        print("Exception when calling DefaultApi->media_service_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **media_service_name** | **str**| Name of the Media Service. | 

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
**200** | Success. The Media Services account was deleted. |  -  |
**204** | No Content. The account name does not exist. |  -  |
**0** | Delete Media Services failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_service_get**
> MediaService media_service_get(subscription_id, api_version, resource_group_name, media_service_name)



Gets a Media Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.media_service import MediaService
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    media_service_name = 'media_service_name_example' # str | Name of the Media Service.

    try:
        api_response = api_instance.media_service_get(subscription_id, api_version, resource_group_name, media_service_name)
        print("The response of DefaultApi->media_service_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_service_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **media_service_name** | **str**| Name of the Media Service. | 

### Return type

[**MediaService**](MediaService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. Returns the details of the Media Services account. |  -  |
**0** | Get Media Services failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_service_list_by_resource_group**
> MediaServiceCollection media_service_list_by_resource_group(subscription_id, api_version, resource_group_name)



Lists all of the Media Services in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.media_service_collection import MediaServiceCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.

    try:
        api_response = api_instance.media_service_list_by_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of DefaultApi->media_service_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_service_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 

### Return type

[**MediaServiceCollection**](MediaServiceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. Returns a list of all of the Media Services accounts in a resource group. |  -  |
**0** | List Media Services failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_service_list_keys**
> ServiceKeys media_service_list_keys(subscription_id, api_version, resource_group_name, media_service_name)



Lists the keys for a Media Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_keys import ServiceKeys
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    media_service_name = 'media_service_name_example' # str | Name of the Media Service.

    try:
        api_response = api_instance.media_service_list_keys(subscription_id, api_version, resource_group_name, media_service_name)
        print("The response of DefaultApi->media_service_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_service_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **media_service_name** | **str**| Name of the Media Service. | 

### Return type

[**ServiceKeys**](ServiceKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The keys for the Media Services account were listed. |  -  |
**0** | List Media Service keys failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_service_regenerate_key**
> RegenerateKeyOutput media_service_regenerate_key(subscription_id, api_version, resource_group_name, media_service_name, parameters)



Regenerates a primary or secondary key for a Media Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regenerate_key_input import RegenerateKeyInput
from openapi_client.models.regenerate_key_output import RegenerateKeyOutput
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    media_service_name = 'media_service_name_example' # str | Name of the Media Service.
    parameters = openapi_client.RegenerateKeyInput() # RegenerateKeyInput | Properties needed to regenerate the Media Service key.

    try:
        api_response = api_instance.media_service_regenerate_key(subscription_id, api_version, resource_group_name, media_service_name, parameters)
        print("The response of DefaultApi->media_service_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_service_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **media_service_name** | **str**| Name of the Media Service. | 
 **parameters** | [**RegenerateKeyInput**](RegenerateKeyInput.md)| Properties needed to regenerate the Media Service key. | 

### Return type

[**RegenerateKeyOutput**](RegenerateKeyOutput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The Media Services key specified in the input was regenerated. |  -  |
**0** | Regenerate Media Service key failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_service_sync_storage_keys**
> media_service_sync_storage_keys(subscription_id, api_version, resource_group_name, media_service_name, parameters)



Synchronizes storage account keys for a storage account associated with the Media Service account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sync_storage_keys_input import SyncStorageKeysInput
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    media_service_name = 'media_service_name_example' # str | Name of the Media Service.
    parameters = openapi_client.SyncStorageKeysInput() # SyncStorageKeysInput | Properties needed to synchronize the keys for a storage account to the Media Service.

    try:
        api_instance.media_service_sync_storage_keys(subscription_id, api_version, resource_group_name, media_service_name, parameters)
    except Exception as e:
        print("Exception when calling DefaultApi->media_service_sync_storage_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **media_service_name** | **str**| Name of the Media Service. | 
 **parameters** | [**SyncStorageKeysInput**](SyncStorageKeysInput.md)| Properties needed to synchronize the keys for a storage account to the Media Service. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The keys for the storage account were synchronized. |  -  |
**0** | Synch Media Service storage keys failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_service_update**
> MediaService media_service_update(subscription_id, api_version, resource_group_name, media_service_name, parameters)



Updates a Media Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.media_service import MediaService
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    media_service_name = 'media_service_name_example' # str | Name of the Media Service.
    parameters = openapi_client.MediaService() # MediaService | Media Service properties needed for update.

    try:
        api_response = api_instance.media_service_update(subscription_id, api_version, resource_group_name, media_service_name, parameters)
        print("The response of DefaultApi->media_service_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_service_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **media_service_name** | **str**| Name of the Media Service. | 
 **parameters** | [**MediaService**](MediaService.md)| Media Service properties needed for update. | 

### Return type

[**MediaService**](MediaService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The Media Services account was updated. |  -  |
**0** | Update Media Services failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> OperationListResult operations_list(api_version)



Lists all of the available Media Services REST API operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list_result import OperationListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-10-01.

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of DefaultApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-10-01. | 

### Return type

[**OperationListResult**](OperationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. Returns a list of operations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

