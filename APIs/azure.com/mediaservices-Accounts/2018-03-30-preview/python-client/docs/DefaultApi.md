# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locations_check_name_availability**](DefaultApi.md#locations_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Media/locations/{locationName}/checkNameAvailability | Check Name Availability
[**mediaservices_create_or_update**](DefaultApi.md#mediaservices_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName} | Create or update a Media Services account
[**mediaservices_delete**](DefaultApi.md#mediaservices_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName} | Delete a Media Services account.
[**mediaservices_get**](DefaultApi.md#mediaservices_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName} | Get a Media Services account
[**mediaservices_get_by_subscription**](DefaultApi.md#mediaservices_get_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Media/mediaservices/{accountName} | Get a Media Services account
[**mediaservices_list**](DefaultApi.md#mediaservices_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices | List Media Services accounts
[**mediaservices_list_by_subscription**](DefaultApi.md#mediaservices_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Media/mediaservices | List Media Services accounts
[**mediaservices_sync_storage_keys**](DefaultApi.md#mediaservices_sync_storage_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/syncStorageKeys | Synchronizes Storage Account Keys
[**mediaservices_update**](DefaultApi.md#mediaservices_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName} | Update a Media Services account
[**operations_list**](DefaultApi.md#operations_list) | **GET** /providers/Microsoft.Media/operations | List Operations


# **locations_check_name_availability**
> EntityNameAvailabilityCheckOutput locations_check_name_availability(subscription_id, location_name, api_version, parameters)

Check Name Availability

Checks whether the Media Service resource name is available.

### Example


```python
import openapi_client
from openapi_client.models.check_name_availability_input import CheckNameAvailabilityInput
from openapi_client.models.entity_name_availability_check_output import EntityNameAvailabilityCheckOutput
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
    location_name = 'location_name_example' # str | 
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.CheckNameAvailabilityInput() # CheckNameAvailabilityInput | The request parameters

    try:
        # Check Name Availability
        api_response = api_instance.locations_check_name_availability(subscription_id, location_name, api_version, parameters)
        print("The response of DefaultApi->locations_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->locations_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **location_name** | **str**|  | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**CheckNameAvailabilityInput**](CheckNameAvailabilityInput.md)| The request parameters | 

### Return type

[**EntityNameAvailabilityCheckOutput**](EntityNameAvailabilityCheckOutput.md)

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

# **mediaservices_create_or_update**
> MediaService mediaservices_create_or_update(subscription_id, resource_group_name, account_name, api_version, parameters)

Create or update a Media Services account

Creates or updates a Media Services account

### Example


```python
import openapi_client
from openapi_client.models.media_service import MediaService
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
    parameters = openapi_client.MediaService() # MediaService | The request parameters

    try:
        # Create or update a Media Services account
        api_response = api_instance.mediaservices_create_or_update(subscription_id, resource_group_name, account_name, api_version, parameters)
        print("The response of DefaultApi->mediaservices_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mediaservices_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**MediaService**](MediaService.md)| The request parameters | 

### Return type

[**MediaService**](MediaService.md)

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

# **mediaservices_delete**
> mediaservices_delete(subscription_id, resource_group_name, account_name, api_version)

Delete a Media Services account.

Deletes a Media Services account

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
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete a Media Services account.
        api_instance.mediaservices_delete(subscription_id, resource_group_name, account_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->mediaservices_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
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
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mediaservices_get**
> MediaService mediaservices_get(subscription_id, resource_group_name, account_name, api_version)

Get a Media Services account

Get the details of a Media Services account

### Example


```python
import openapi_client
from openapi_client.models.media_service import MediaService
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

    try:
        # Get a Media Services account
        api_response = api_instance.mediaservices_get(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->mediaservices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mediaservices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**MediaService**](MediaService.md)

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

# **mediaservices_get_by_subscription**
> SubscriptionMediaService mediaservices_get_by_subscription(subscription_id, account_name, api_version)

Get a Media Services account

Get the details of a Media Services account

### Example


```python
import openapi_client
from openapi_client.models.subscription_media_service import SubscriptionMediaService
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
    account_name = 'account_name_example' # str | The Media Services account name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get a Media Services account
        api_response = api_instance.mediaservices_get_by_subscription(subscription_id, account_name, api_version)
        print("The response of DefaultApi->mediaservices_get_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mediaservices_get_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**SubscriptionMediaService**](SubscriptionMediaService.md)

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

# **mediaservices_list**
> MediaServiceCollection mediaservices_list(subscription_id, resource_group_name, api_version)

List Media Services accounts

List Media Services accounts in the resource group

### Example


```python
import openapi_client
from openapi_client.models.media_service_collection import MediaServiceCollection
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
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # List Media Services accounts
        api_response = api_instance.mediaservices_list(subscription_id, resource_group_name, api_version)
        print("The response of DefaultApi->mediaservices_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mediaservices_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**MediaServiceCollection**](MediaServiceCollection.md)

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

# **mediaservices_list_by_subscription**
> SubscriptionMediaServiceCollection mediaservices_list_by_subscription(subscription_id, api_version)

List Media Services accounts

List Media Services accounts in the subscription.

### Example


```python
import openapi_client
from openapi_client.models.subscription_media_service_collection import SubscriptionMediaServiceCollection
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
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # List Media Services accounts
        api_response = api_instance.mediaservices_list_by_subscription(subscription_id, api_version)
        print("The response of DefaultApi->mediaservices_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mediaservices_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**SubscriptionMediaServiceCollection**](SubscriptionMediaServiceCollection.md)

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

# **mediaservices_sync_storage_keys**
> mediaservices_sync_storage_keys(subscription_id, resource_group_name, account_name, api_version, parameters)

Synchronizes Storage Account Keys

Synchronizes storage account keys for a storage account associated with the Media Service account.

### Example


```python
import openapi_client
from openapi_client.models.sync_storage_keys_input import SyncStorageKeysInput
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
    parameters = openapi_client.SyncStorageKeysInput() # SyncStorageKeysInput | The request parameters

    try:
        # Synchronizes Storage Account Keys
        api_instance.mediaservices_sync_storage_keys(subscription_id, resource_group_name, account_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling DefaultApi->mediaservices_sync_storage_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**SyncStorageKeysInput**](SyncStorageKeysInput.md)| The request parameters | 

### Return type

void (empty response body)

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

# **mediaservices_update**
> MediaService mediaservices_update(subscription_id, resource_group_name, account_name, api_version, parameters)

Update a Media Services account

Updates an existing Media Services account

### Example


```python
import openapi_client
from openapi_client.models.media_service import MediaService
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
    parameters = openapi_client.MediaService() # MediaService | The request parameters

    try:
        # Update a Media Services account
        api_response = api_instance.mediaservices_update(subscription_id, resource_group_name, account_name, api_version, parameters)
        print("The response of DefaultApi->mediaservices_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mediaservices_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**MediaService**](MediaService.md)| The request parameters | 

### Return type

[**MediaService**](MediaService.md)

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

# **operations_list**
> OperationCollection operations_list(api_version)

List Operations

Lists all the Media Services operations.

### Example


```python
import openapi_client
from openapi_client.models.operation_collection import OperationCollection
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
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # List Operations
        api_response = api_instance.operations_list(api_version)
        print("The response of DefaultApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**OperationCollection**](OperationCollection.md)

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

