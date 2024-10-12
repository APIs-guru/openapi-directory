# openapi_client.ProxyApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**remote_rendering_accounts_list_by_subscription_0**](ProxyApi.md#remote_rendering_accounts_list_by_subscription_0) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MixedReality/remoteRenderingAccounts | 


# **remote_rendering_accounts_list_by_subscription_0**
> RemoteRenderingAccountPage remote_rendering_accounts_list_by_subscription_0(subscription_id, api_version)



List Remote Rendering Accounts by Subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remote_rendering_account_page import RemoteRenderingAccountPage
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
    api_instance = openapi_client.ProxyApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.remote_rendering_accounts_list_by_subscription_0(subscription_id, api_version)
        print("The response of ProxyApi->remote_rendering_accounts_list_by_subscription_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProxyApi->remote_rendering_accounts_list_by_subscription_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**RemoteRenderingAccountPage**](RemoteRenderingAccountPage.md)

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

