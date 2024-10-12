# openapi_client.KeyApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**remote_rendering_accounts_get_keys**](KeyApi.md#remote_rendering_accounts_get_keys) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/remoteRenderingAccounts/{accountName}/keys | 
[**remote_rendering_accounts_regenerate_keys**](KeyApi.md#remote_rendering_accounts_regenerate_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/remoteRenderingAccounts/{accountName}/keys | 


# **remote_rendering_accounts_get_keys**
> RemoteRenderingAccountsGetKeys200Response remote_rendering_accounts_get_keys(subscription_id, resource_group_name, account_name, api_version)



Get Both of the 2 Keys of a Remote Rendering Account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remote_rendering_accounts_get_keys200_response import RemoteRenderingAccountsGetKeys200Response
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
    api_instance = openapi_client.KeyApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Name of an Mixed Reality Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.remote_rendering_accounts_get_keys(subscription_id, resource_group_name, account_name, api_version)
        print("The response of KeyApi->remote_rendering_accounts_get_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->remote_rendering_accounts_get_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Name of an Mixed Reality Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**RemoteRenderingAccountsGetKeys200Response**](RemoteRenderingAccountsGetKeys200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remote_rendering_accounts_regenerate_keys**
> RemoteRenderingAccountsGetKeys200Response remote_rendering_accounts_regenerate_keys(subscription_id, resource_group_name, account_name, api_version, regenerate)



Regenerate specified Key of a Remote Rendering Account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remote_rendering_accounts_get_keys200_response import RemoteRenderingAccountsGetKeys200Response
from openapi_client.models.remote_rendering_accounts_regenerate_keys_request import RemoteRenderingAccountsRegenerateKeysRequest
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
    api_instance = openapi_client.KeyApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Name of an Mixed Reality Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    regenerate = openapi_client.RemoteRenderingAccountsRegenerateKeysRequest() # RemoteRenderingAccountsRegenerateKeysRequest | Required information for key regeneration.

    try:
        api_response = api_instance.remote_rendering_accounts_regenerate_keys(subscription_id, resource_group_name, account_name, api_version, regenerate)
        print("The response of KeyApi->remote_rendering_accounts_regenerate_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->remote_rendering_accounts_regenerate_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Name of an Mixed Reality Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **regenerate** | [**RemoteRenderingAccountsRegenerateKeysRequest**](RemoteRenderingAccountsRegenerateKeysRequest.md)| Required information for key regeneration. | 

### Return type

[**RemoteRenderingAccountsGetKeys200Response**](RemoteRenderingAccountsGetKeys200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

