# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_create_or_update**](DefaultApi.md#assets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName} | Create or update an Asset
[**assets_delete**](DefaultApi.md#assets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName} | Delete an Asset.
[**assets_get**](DefaultApi.md#assets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName} | Get an Asset
[**assets_get_encryption_key**](DefaultApi.md#assets_get_encryption_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/getEncryptionKey | Gets the Asset storage key
[**assets_list**](DefaultApi.md#assets_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets | List Assets
[**assets_list_container_sas**](DefaultApi.md#assets_list_container_sas) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/listContainerSas | List the Asset URLs
[**assets_update**](DefaultApi.md#assets_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName} | Update an Asset


# **assets_create_or_update**
> Asset assets_create_or_update(subscription_id, resource_group_name, account_name, asset_name, api_version, parameters)

Create or update an Asset

Creates or updates an Asset in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.asset import Asset
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    asset_name = 'asset_name_example' # str | The Asset name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.Asset() # Asset | The request parameters

    try:
        # Create or update an Asset
        api_response = api_instance.assets_create_or_update(subscription_id, resource_group_name, account_name, asset_name, api_version, parameters)
        print("The response of DefaultApi->assets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **asset_name** | **str**| The Asset name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**Asset**](Asset.md)| The request parameters | 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assets_delete**
> assets_delete(subscription_id, resource_group_name, account_name, asset_name, api_version)

Delete an Asset.

Deletes an Asset in the Media Services account

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    asset_name = 'asset_name_example' # str | The Asset name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete an Asset.
        api_instance.assets_delete(subscription_id, resource_group_name, account_name, asset_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->assets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **asset_name** | **str**| The Asset name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assets_get**
> Asset assets_get(subscription_id, resource_group_name, account_name, asset_name, api_version)

Get an Asset

Get the details of an Asset in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.asset import Asset
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    asset_name = 'asset_name_example' # str | The Asset name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get an Asset
        api_response = api_instance.assets_get(subscription_id, resource_group_name, account_name, asset_name, api_version)
        print("The response of DefaultApi->assets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **asset_name** | **str**| The Asset name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NotFound |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assets_get_encryption_key**
> AssetStorageEncryptionKey assets_get_encryption_key(subscription_id, resource_group_name, account_name, asset_name, api_version)

Gets the Asset storage key

Gets the Asset storage encryption keys used to decrypt content created by version 2 of the Media Services API

### Example


```python
import openapi_client
from openapi_client.models.asset_storage_encryption_key import AssetStorageEncryptionKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    asset_name = 'asset_name_example' # str | The Asset name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Gets the Asset storage key
        api_response = api_instance.assets_get_encryption_key(subscription_id, resource_group_name, account_name, asset_name, api_version)
        print("The response of DefaultApi->assets_get_encryption_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assets_get_encryption_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **asset_name** | **str**| The Asset name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**AssetStorageEncryptionKey**](AssetStorageEncryptionKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assets_list**
> AssetCollection assets_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, orderby=orderby)

List Assets

List Assets in the Media Services account with optional filtering and ordering

### Example


```python
import openapi_client
from openapi_client.models.asset_collection import AssetCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    filter = 'filter_example' # str | Restricts the set of items returned. (optional)
    top = 56 # int | Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. (optional)
    orderby = 'orderby_example' # str | Specifies the key by which the result collection should be ordered. (optional)

    try:
        # List Assets
        api_response = api_instance.assets_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, orderby=orderby)
        print("The response of DefaultApi->assets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **filter** | **str**| Restricts the set of items returned. | [optional] 
 **top** | **int**| Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. | [optional] 
 **orderby** | **str**| Specifies the key by which the result collection should be ordered. | [optional] 

### Return type

[**AssetCollection**](AssetCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assets_list_container_sas**
> AssetContainerSas assets_list_container_sas(subscription_id, resource_group_name, account_name, asset_name, api_version, parameters)

List the Asset URLs

Lists storage container URLs with shared access signatures (SAS) for uploading and downloading Asset content. The signatures are derived from the storage account keys.

### Example


```python
import openapi_client
from openapi_client.models.asset_container_sas import AssetContainerSas
from openapi_client.models.list_container_sas_input import ListContainerSasInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    asset_name = 'asset_name_example' # str | The Asset name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.ListContainerSasInput() # ListContainerSasInput | The request parameters

    try:
        # List the Asset URLs
        api_response = api_instance.assets_list_container_sas(subscription_id, resource_group_name, account_name, asset_name, api_version, parameters)
        print("The response of DefaultApi->assets_list_container_sas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assets_list_container_sas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **asset_name** | **str**| The Asset name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**ListContainerSasInput**](ListContainerSasInput.md)| The request parameters | 

### Return type

[**AssetContainerSas**](AssetContainerSas.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assets_update**
> Asset assets_update(subscription_id, resource_group_name, account_name, asset_name, api_version, parameters)

Update an Asset

Updates an existing Asset in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.asset import Asset
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    asset_name = 'asset_name_example' # str | The Asset name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.Asset() # Asset | The request parameters

    try:
        # Update an Asset
        api_response = api_instance.assets_update(subscription_id, resource_group_name, account_name, asset_name, api_version, parameters)
        print("The response of DefaultApi->assets_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assets_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **asset_name** | **str**| The Asset name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**Asset**](Asset.md)| The request parameters | 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

