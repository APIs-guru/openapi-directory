# openapi_client.TrustedIdProvidersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trusted_id_providers_create_or_update**](TrustedIdProvidersApi.md#trusted_id_providers_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName} | 
[**trusted_id_providers_delete**](TrustedIdProvidersApi.md#trusted_id_providers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName} | 
[**trusted_id_providers_get**](TrustedIdProvidersApi.md#trusted_id_providers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName} | 
[**trusted_id_providers_list_by_account**](TrustedIdProvidersApi.md#trusted_id_providers_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders | 
[**trusted_id_providers_update**](TrustedIdProvidersApi.md#trusted_id_providers_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName} | 


# **trusted_id_providers_create_or_update**
> TrustedIdProvider trusted_id_providers_create_or_update(subscription_id, resource_group_name, account_name, trusted_id_provider_name, api_version, parameters)



Creates or updates the specified trusted identity provider. During update, the trusted identity provider with the specified name will be replaced with this new provider

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_or_update_trusted_id_provider_parameters import CreateOrUpdateTrustedIdProviderParameters
from openapi_client.models.trusted_id_provider import TrustedIdProvider
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
    api_instance = openapi_client.TrustedIdProvidersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    trusted_id_provider_name = 'trusted_id_provider_name_example' # str | The name of the trusted identity provider. This is used for differentiation of providers in the account.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CreateOrUpdateTrustedIdProviderParameters() # CreateOrUpdateTrustedIdProviderParameters | Parameters supplied to create or replace the trusted identity provider.

    try:
        api_response = api_instance.trusted_id_providers_create_or_update(subscription_id, resource_group_name, account_name, trusted_id_provider_name, api_version, parameters)
        print("The response of TrustedIdProvidersApi->trusted_id_providers_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustedIdProvidersApi->trusted_id_providers_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **trusted_id_provider_name** | **str**| The name of the trusted identity provider. This is used for differentiation of providers in the account. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CreateOrUpdateTrustedIdProviderParameters**](CreateOrUpdateTrustedIdProviderParameters.md)| Parameters supplied to create or replace the trusted identity provider. | 

### Return type

[**TrustedIdProvider**](TrustedIdProvider.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added the trusted identity provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trusted_id_providers_delete**
> trusted_id_providers_delete(subscription_id, resource_group_name, account_name, trusted_id_provider_name, api_version)



Deletes the specified trusted identity provider from the specified Data Lake Store account

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
    api_instance = openapi_client.TrustedIdProvidersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    trusted_id_provider_name = 'trusted_id_provider_name_example' # str | The name of the trusted identity provider to delete.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.trusted_id_providers_delete(subscription_id, resource_group_name, account_name, trusted_id_provider_name, api_version)
    except Exception as e:
        print("Exception when calling TrustedIdProvidersApi->trusted_id_providers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **trusted_id_provider_name** | **str**| The name of the trusted identity provider to delete. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the specified trusted identity provider details. |  -  |
**204** | The specified trusted identity provider was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trusted_id_providers_get**
> TrustedIdProvider trusted_id_providers_get(subscription_id, resource_group_name, account_name, trusted_id_provider_name, api_version)



Gets the specified Data Lake Store trusted identity provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trusted_id_provider import TrustedIdProvider
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
    api_instance = openapi_client.TrustedIdProvidersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    trusted_id_provider_name = 'trusted_id_provider_name_example' # str | The name of the trusted identity provider to retrieve.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.trusted_id_providers_get(subscription_id, resource_group_name, account_name, trusted_id_provider_name, api_version)
        print("The response of TrustedIdProvidersApi->trusted_id_providers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustedIdProvidersApi->trusted_id_providers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **trusted_id_provider_name** | **str**| The name of the trusted identity provider to retrieve. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**TrustedIdProvider**](TrustedIdProvider.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved details of the specified trusted identity provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trusted_id_providers_list_by_account**
> TrustedIdProviderListResult trusted_id_providers_list_by_account(subscription_id, resource_group_name, account_name, api_version)



Lists the Data Lake Store trusted identity providers within the specified Data Lake Store account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trusted_id_provider_list_result import TrustedIdProviderListResult
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
    api_instance = openapi_client.TrustedIdProvidersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.trusted_id_providers_list_by_account(subscription_id, resource_group_name, account_name, api_version)
        print("The response of TrustedIdProvidersApi->trusted_id_providers_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustedIdProvidersApi->trusted_id_providers_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**TrustedIdProviderListResult**](TrustedIdProviderListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of trusted identity providers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trusted_id_providers_update**
> TrustedIdProvider trusted_id_providers_update(subscription_id, resource_group_name, account_name, trusted_id_provider_name, api_version, parameters=parameters)



Updates the specified trusted identity provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trusted_id_provider import TrustedIdProvider
from openapi_client.models.update_trusted_id_provider_parameters import UpdateTrustedIdProviderParameters
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
    api_instance = openapi_client.TrustedIdProvidersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    trusted_id_provider_name = 'trusted_id_provider_name_example' # str | The name of the trusted identity provider. This is used for differentiation of providers in the account.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.UpdateTrustedIdProviderParameters() # UpdateTrustedIdProviderParameters | Parameters supplied to update the trusted identity provider. (optional)

    try:
        api_response = api_instance.trusted_id_providers_update(subscription_id, resource_group_name, account_name, trusted_id_provider_name, api_version, parameters=parameters)
        print("The response of TrustedIdProvidersApi->trusted_id_providers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustedIdProvidersApi->trusted_id_providers_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **trusted_id_provider_name** | **str**| The name of the trusted identity provider. This is used for differentiation of providers in the account. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**UpdateTrustedIdProviderParameters**](UpdateTrustedIdProviderParameters.md)| Parameters supplied to update the trusted identity provider. | [optional] 

### Return type

[**TrustedIdProvider**](TrustedIdProvider.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added the trusted identity provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

