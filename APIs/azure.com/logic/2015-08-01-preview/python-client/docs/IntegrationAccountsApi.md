# openapi_client.IntegrationAccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_accounts_create_or_update**](IntegrationAccountsApi.md#integration_accounts_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName} | 
[**integration_accounts_delete**](IntegrationAccountsApi.md#integration_accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName} | 
[**integration_accounts_get**](IntegrationAccountsApi.md#integration_accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName} | 
[**integration_accounts_list_by_resource_group**](IntegrationAccountsApi.md#integration_accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts | 
[**integration_accounts_list_by_subscription**](IntegrationAccountsApi.md#integration_accounts_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Logic/integrationAccounts | 
[**integration_accounts_list_callback_url**](IntegrationAccountsApi.md#integration_accounts_list_callback_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/listCallbackUrl | 
[**integration_accounts_update**](IntegrationAccountsApi.md#integration_accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName} | 


# **integration_accounts_create_or_update**
> IntegrationAccount integration_accounts_create_or_update(subscription_id, resource_group_name, integration_account_name, api_version, integration_account)



Creates or updates an integration account.

### Example


```python
import openapi_client
from openapi_client.models.integration_account import IntegrationAccount
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
    api_instance = openapi_client.IntegrationAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    integration_account = openapi_client.IntegrationAccount() # IntegrationAccount | The integration account.

    try:
        api_response = api_instance.integration_accounts_create_or_update(subscription_id, resource_group_name, integration_account_name, api_version, integration_account)
        print("The response of IntegrationAccountsApi->integration_accounts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountsApi->integration_accounts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 
 **integration_account** | [**IntegrationAccount**](IntegrationAccount.md)| The integration account. | 

### Return type

[**IntegrationAccount**](IntegrationAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_accounts_delete**
> integration_accounts_delete(subscription_id, resource_group_name, integration_account_name, api_version)



Deletes an integration account.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.IntegrationAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_accounts_delete(subscription_id, resource_group_name, integration_account_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountsApi->integration_accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_accounts_get**
> IntegrationAccount integration_accounts_get(subscription_id, resource_group_name, integration_account_name, api_version)



Gets an integration account.

### Example


```python
import openapi_client
from openapi_client.models.integration_account import IntegrationAccount
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
    api_instance = openapi_client.IntegrationAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_accounts_get(subscription_id, resource_group_name, integration_account_name, api_version)
        print("The response of IntegrationAccountsApi->integration_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountsApi->integration_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationAccount**](IntegrationAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_accounts_list_by_resource_group**
> IntegrationAccountListResult integration_accounts_list_by_resource_group(subscription_id, resource_group_name, api_version, top=top)



Gets a list of integration accounts by resource group.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_list_result import IntegrationAccountListResult
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
    api_instance = openapi_client.IntegrationAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)

    try:
        api_response = api_instance.integration_accounts_list_by_resource_group(subscription_id, resource_group_name, api_version, top=top)
        print("The response of IntegrationAccountsApi->integration_accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountsApi->integration_accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 

### Return type

[**IntegrationAccountListResult**](IntegrationAccountListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_accounts_list_by_subscription**
> IntegrationAccountListResult integration_accounts_list_by_subscription(subscription_id, api_version, top=top)



Gets a list of integration accounts by subscription.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_list_result import IntegrationAccountListResult
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
    api_instance = openapi_client.IntegrationAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)

    try:
        api_response = api_instance.integration_accounts_list_by_subscription(subscription_id, api_version, top=top)
        print("The response of IntegrationAccountsApi->integration_accounts_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountsApi->integration_accounts_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 

### Return type

[**IntegrationAccountListResult**](IntegrationAccountListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_accounts_list_callback_url**
> CallbackUrl integration_accounts_list_callback_url(subscription_id, resource_group_name, integration_account_name, api_version, parameters)



Lists the integration account callback URL.

### Example


```python
import openapi_client
from openapi_client.models.callback_url import CallbackUrl
from openapi_client.models.list_callback_url_parameters import ListCallbackUrlParameters
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
    api_instance = openapi_client.IntegrationAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    parameters = openapi_client.ListCallbackUrlParameters() # ListCallbackUrlParameters | The callback URL parameters.

    try:
        api_response = api_instance.integration_accounts_list_callback_url(subscription_id, resource_group_name, integration_account_name, api_version, parameters)
        print("The response of IntegrationAccountsApi->integration_accounts_list_callback_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountsApi->integration_accounts_list_callback_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 
 **parameters** | [**ListCallbackUrlParameters**](ListCallbackUrlParameters.md)| The callback URL parameters. | 

### Return type

[**CallbackUrl**](CallbackUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_accounts_update**
> IntegrationAccount integration_accounts_update(subscription_id, resource_group_name, integration_account_name, api_version, integration_account)



Updates an integration account.

### Example


```python
import openapi_client
from openapi_client.models.integration_account import IntegrationAccount
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
    api_instance = openapi_client.IntegrationAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    integration_account = openapi_client.IntegrationAccount() # IntegrationAccount | The integration account.

    try:
        api_response = api_instance.integration_accounts_update(subscription_id, resource_group_name, integration_account_name, api_version, integration_account)
        print("The response of IntegrationAccountsApi->integration_accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountsApi->integration_accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 
 **integration_account** | [**IntegrationAccount**](IntegrationAccount.md)| The integration account. | 

### Return type

[**IntegrationAccount**](IntegrationAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

