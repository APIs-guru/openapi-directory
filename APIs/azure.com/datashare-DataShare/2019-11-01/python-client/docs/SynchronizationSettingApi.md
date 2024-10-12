# openapi_client.SynchronizationSettingApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**synchronization_settings_create**](SynchronizationSettingApi.md#synchronization_settings_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName} | Adds a new synchronization setting to an existing share or updates it if existing.
[**synchronization_settings_delete**](SynchronizationSettingApi.md#synchronization_settings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName} | Delete synchronizationSetting in a share.
[**synchronization_settings_get**](SynchronizationSettingApi.md#synchronization_settings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName} | Get synchronizationSetting in a share.
[**synchronization_settings_list_by_share**](SynchronizationSettingApi.md#synchronization_settings_list_by_share) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings | List synchronizationSettings in a share.


# **synchronization_settings_create**
> SynchronizationSetting synchronization_settings_create(subscription_id, resource_group_name, account_name, share_name, synchronization_setting_name, api_version, synchronization_setting)

Adds a new synchronization setting to an existing share or updates it if existing.

Create or update a synchronizationSetting 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.synchronization_setting import SynchronizationSetting
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
    api_instance = openapi_client.SynchronizationSettingApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share to add the synchronization setting to.
    synchronization_setting_name = 'synchronization_setting_name_example' # str | The name of the synchronizationSetting.
    api_version = 'api_version_example' # str | The api version to use.
    synchronization_setting = openapi_client.SynchronizationSetting() # SynchronizationSetting | The new synchronization setting information.

    try:
        # Adds a new synchronization setting to an existing share or updates it if existing.
        api_response = api_instance.synchronization_settings_create(subscription_id, resource_group_name, account_name, share_name, synchronization_setting_name, api_version, synchronization_setting)
        print("The response of SynchronizationSettingApi->synchronization_settings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SynchronizationSettingApi->synchronization_settings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share to add the synchronization setting to. | 
 **synchronization_setting_name** | **str**| The name of the synchronizationSetting. | 
 **api_version** | **str**| The api version to use. | 
 **synchronization_setting** | [**SynchronizationSetting**](SynchronizationSetting.md)| The new synchronization setting information. | 

### Return type

[**SynchronizationSetting**](SynchronizationSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**201** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **synchronization_settings_delete**
> OperationResponse synchronization_settings_delete(subscription_id, resource_group_name, account_name, share_name, synchronization_setting_name, api_version)

Delete synchronizationSetting in a share.

Delete a synchronizationSetting in a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_response import OperationResponse
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
    api_instance = openapi_client.SynchronizationSettingApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    synchronization_setting_name = 'synchronization_setting_name_example' # str | The name of the synchronizationSetting .
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Delete synchronizationSetting in a share.
        api_response = api_instance.synchronization_settings_delete(subscription_id, resource_group_name, account_name, share_name, synchronization_setting_name, api_version)
        print("The response of SynchronizationSettingApi->synchronization_settings_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SynchronizationSettingApi->synchronization_settings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **synchronization_setting_name** | **str**| The name of the synchronizationSetting . | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**OperationResponse**](OperationResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**202** | Accepted |  -  |
**204** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **synchronization_settings_get**
> SynchronizationSetting synchronization_settings_get(subscription_id, resource_group_name, account_name, share_name, synchronization_setting_name, api_version)

Get synchronizationSetting in a share.

Get a synchronizationSetting in a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.synchronization_setting import SynchronizationSetting
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
    api_instance = openapi_client.SynchronizationSettingApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    synchronization_setting_name = 'synchronization_setting_name_example' # str | The name of the synchronizationSetting.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Get synchronizationSetting in a share.
        api_response = api_instance.synchronization_settings_get(subscription_id, resource_group_name, account_name, share_name, synchronization_setting_name, api_version)
        print("The response of SynchronizationSettingApi->synchronization_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SynchronizationSettingApi->synchronization_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **synchronization_setting_name** | **str**| The name of the synchronizationSetting. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**SynchronizationSetting**](SynchronizationSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **synchronization_settings_list_by_share**
> SynchronizationSettingList synchronization_settings_list_by_share(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)

List synchronizationSettings in a share.

List synchronizationSettings in a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.synchronization_setting_list import SynchronizationSettingList
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
    api_instance = openapi_client.SynchronizationSettingApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | continuation token (optional)

    try:
        # List synchronizationSettings in a share.
        api_response = api_instance.synchronization_settings_list_by_share(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)
        print("The response of SynchronizationSettingApi->synchronization_settings_list_by_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SynchronizationSettingApi->synchronization_settings_list_by_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| continuation token | [optional] 

### Return type

[**SynchronizationSettingList**](SynchronizationSettingList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

