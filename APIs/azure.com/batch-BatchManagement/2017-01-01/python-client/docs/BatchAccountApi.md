# openapi_client.BatchAccountApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch_account_create**](BatchAccountApi.md#batch_account_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName} | 
[**batch_account_delete**](BatchAccountApi.md#batch_account_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName} | 
[**batch_account_get**](BatchAccountApi.md#batch_account_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName} | 
[**batch_account_get_keys**](BatchAccountApi.md#batch_account_get_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/listKeys | Gets the account keys for the specified Batch account.
[**batch_account_list**](BatchAccountApi.md#batch_account_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Batch/batchAccounts | 
[**batch_account_list_by_resource_group**](BatchAccountApi.md#batch_account_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts | 
[**batch_account_regenerate_key**](BatchAccountApi.md#batch_account_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/regenerateKeys | 
[**batch_account_synchronize_auto_storage_keys**](BatchAccountApi.md#batch_account_synchronize_auto_storage_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/syncAutoStorageKeys | 
[**batch_account_update**](BatchAccountApi.md#batch_account_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName} | 


# **batch_account_create**
> BatchAccount batch_account_create(resource_group_name, account_name, api_version, subscription_id, parameters)



Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with this API and should instead be updated with the Update Batch Account API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_account import BatchAccount
from openapi_client.models.batch_account_create_parameters import BatchAccountCreateParameters
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
    api_instance = openapi_client.BatchAccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the new Batch account.
    account_name = 'account_name_example' # str | A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.BatchAccountCreateParameters() # BatchAccountCreateParameters | Additional parameters for account creation.

    try:
        api_response = api_instance.batch_account_create(resource_group_name, account_name, api_version, subscription_id, parameters)
        print("The response of BatchAccountApi->batch_account_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchAccountApi->batch_account_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the new Batch account. | 
 **account_name** | **str**| A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**BatchAccountCreateParameters**](BatchAccountCreateParameters.md)| Additional parameters for account creation. | 

### Return type

[**BatchAccount**](BatchAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the Batch account entity. |  -  |
**202** | The operation will be completed asynchronously. |  * Retry-After - Suggested delay to check the status of the asynchronous operation. The value is an integer that represents the seconds. <br>  * Location - The URL of the resource used to check the status of the asynchronous operation. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_account_delete**
> batch_account_delete(resource_group_name, account_name, api_version, subscription_id)



Deletes the specified Batch account.

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
    api_instance = openapi_client.BatchAccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account to be deleted.
    account_name = 'account_name_example' # str | The name of the account to be deleted.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.batch_account_delete(resource_group_name, account_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling BatchAccountApi->batch_account_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account to be deleted. | 
 **account_name** | **str**| The name of the account to be deleted. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | The operation was successful. |  -  |
**202** | The operation will be completed asynchronously. |  * Retry-After - Suggested delay to check the status of the asynchronous operation. The value is an integer that represents the seconds. <br>  * Location - The URL of the resource used to check the status of the asynchronous operation. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_account_get**
> BatchAccount batch_account_get(resource_group_name, account_name, api_version, subscription_id)



Gets information about the specified Batch account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_account import BatchAccount
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
    api_instance = openapi_client.BatchAccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.batch_account_get(resource_group_name, account_name, api_version, subscription_id)
        print("The response of BatchAccountApi->batch_account_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchAccountApi->batch_account_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**BatchAccount**](BatchAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the Batch account entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_account_get_keys**
> BatchAccountKeys batch_account_get_keys(resource_group_name, account_name, api_version, subscription_id)

Gets the account keys for the specified Batch account.

This operation applies only to Batch accounts created with a poolAllocationMode of 'BatchService'. If the Batch account was created with a poolAllocationMode of 'UserSubscription', clients cannot use access to keys to authenticate, and must use Azure Active Directory instead. In this case, getting the keys will fail.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_account_keys import BatchAccountKeys
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
    api_instance = openapi_client.BatchAccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Gets the account keys for the specified Batch account.
        api_response = api_instance.batch_account_get_keys(resource_group_name, account_name, api_version, subscription_id)
        print("The response of BatchAccountApi->batch_account_get_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchAccountApi->batch_account_get_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**BatchAccountKeys**](BatchAccountKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the keys of the Batch account. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_account_list**
> BatchAccountListResult batch_account_list(api_version, subscription_id)



Gets information about the Batch accounts associated with the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_account_list_result import BatchAccountListResult
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
    api_instance = openapi_client.BatchAccountApi(api_client)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.batch_account_list(api_version, subscription_id)
        print("The response of BatchAccountApi->batch_account_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchAccountApi->batch_account_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**BatchAccountListResult**](BatchAccountListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of Batch account entities associated with the subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_account_list_by_resource_group**
> BatchAccountListResult batch_account_list_by_resource_group(resource_group_name, api_version, subscription_id)



Gets information about the Batch accounts associated within the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_account_list_result import BatchAccountListResult
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
    api_instance = openapi_client.BatchAccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group whose Batch accounts to list.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.batch_account_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of BatchAccountApi->batch_account_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchAccountApi->batch_account_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group whose Batch accounts to list. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**BatchAccountListResult**](BatchAccountListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of Batch account entities associated with the resource group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_account_regenerate_key**
> BatchAccountKeys batch_account_regenerate_key(resource_group_name, account_name, api_version, subscription_id, parameters)



Regenerates the specified account key for the Batch account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_account_keys import BatchAccountKeys
from openapi_client.models.batch_account_regenerate_key_parameters import BatchAccountRegenerateKeyParameters
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
    api_instance = openapi_client.BatchAccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.BatchAccountRegenerateKeyParameters() # BatchAccountRegenerateKeyParameters | The type of key to regenerate.

    try:
        api_response = api_instance.batch_account_regenerate_key(resource_group_name, account_name, api_version, subscription_id, parameters)
        print("The response of BatchAccountApi->batch_account_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchAccountApi->batch_account_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**BatchAccountRegenerateKeyParameters**](BatchAccountRegenerateKeyParameters.md)| The type of key to regenerate. | 

### Return type

[**BatchAccountKeys**](BatchAccountKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the keys of the Batch account. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_account_synchronize_auto_storage_keys**
> batch_account_synchronize_auto_storage_keys(resource_group_name, account_name, api_version, subscription_id)



Synchronizes access keys for the auto storage account configured for the specified Batch account.

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
    api_instance = openapi_client.BatchAccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.batch_account_synchronize_auto_storage_keys(resource_group_name, account_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling BatchAccountApi->batch_account_synchronize_auto_storage_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**204** | The operation was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_account_update**
> BatchAccount batch_account_update(resource_group_name, account_name, api_version, subscription_id, parameters)



Updates the properties of an existing Batch account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_account import BatchAccount
from openapi_client.models.batch_account_update_parameters import BatchAccountUpdateParameters
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
    api_instance = openapi_client.BatchAccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.BatchAccountUpdateParameters() # BatchAccountUpdateParameters | Additional parameters for account update.

    try:
        api_response = api_instance.batch_account_update(resource_group_name, account_name, api_version, subscription_id, parameters)
        print("The response of BatchAccountApi->batch_account_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchAccountApi->batch_account_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**BatchAccountUpdateParameters**](BatchAccountUpdateParameters.md)| Additional parameters for account update. | 

### Return type

[**BatchAccount**](BatchAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the Batch account entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

