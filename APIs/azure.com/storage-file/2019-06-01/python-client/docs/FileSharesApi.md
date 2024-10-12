# openapi_client.FileSharesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**file_shares_create**](FileSharesApi.md#file_shares_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName} | 
[**file_shares_delete**](FileSharesApi.md#file_shares_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName} | 
[**file_shares_get**](FileSharesApi.md#file_shares_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName} | 
[**file_shares_list**](FileSharesApi.md#file_shares_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares | 
[**file_shares_update**](FileSharesApi.md#file_shares_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName} | 


# **file_shares_create**
> FileShare file_shares_create(resource_group_name, account_name, share_name, api_version, subscription_id, file_share)



Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.file_share import FileShare
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
    api_instance = openapi_client.FileSharesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    share_name = 'share_name_example' # str | The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    file_share = openapi_client.FileShare() # FileShare | Properties of the file share to create.

    try:
        api_response = api_instance.file_shares_create(resource_group_name, account_name, share_name, api_version, subscription_id, file_share)
        print("The response of FileSharesApi->file_shares_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileSharesApi->file_shares_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **share_name** | **str**| The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **file_share** | [**FileShare**](FileShare.md)| Properties of the file share to create. | 

### Return type

[**FileShare**](FileShare.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The Share is already created. |  -  |
**201** | Created -- Create Share operation completed successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_shares_delete**
> file_shares_delete(resource_group_name, account_name, share_name, api_version, subscription_id)



Deletes specified share under its account.

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
    api_instance = openapi_client.FileSharesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    share_name = 'share_name_example' # str | The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.file_shares_delete(resource_group_name, account_name, share_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling FileSharesApi->file_shares_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **share_name** | **str**| The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**200** | OK -- Delete Share operation completed successfully. |  -  |
**204** | No Content -- The Share not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_shares_get**
> FileShare file_shares_get(resource_group_name, account_name, share_name, api_version, subscription_id)



Gets properties of a specified share.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.file_share import FileShare
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
    api_instance = openapi_client.FileSharesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    share_name = 'share_name_example' # str | The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.file_shares_get(resource_group_name, account_name, share_name, api_version, subscription_id)
        print("The response of FileSharesApi->file_shares_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileSharesApi->file_shares_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **share_name** | **str**| The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**FileShare**](FileShare.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Get Share operation completed successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_shares_list**
> FileShareItems file_shares_list(resource_group_name, account_name, api_version, subscription_id, maxpagesize=maxpagesize, filter=filter)



Lists all shares.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.file_share_items import FileShareItems
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
    api_instance = openapi_client.FileSharesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    maxpagesize = 'maxpagesize_example' # str | Optional. Specified maximum number of shares that can be included in the list. (optional)
    filter = 'filter_example' # str | Optional. When specified, only share names starting with the filter will be listed. (optional)

    try:
        api_response = api_instance.file_shares_list(resource_group_name, account_name, api_version, subscription_id, maxpagesize=maxpagesize, filter=filter)
        print("The response of FileSharesApi->file_shares_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileSharesApi->file_shares_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **maxpagesize** | **str**| Optional. Specified maximum number of shares that can be included in the list. | [optional] 
 **filter** | **str**| Optional. When specified, only share names starting with the filter will be listed. | [optional] 

### Return type

[**FileShareItems**](FileShareItems.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- List Shares operation completed successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_shares_update**
> FileShare file_shares_update(resource_group_name, account_name, share_name, api_version, subscription_id, file_share)



Updates share properties as specified in request body. Properties not mentioned in the request will not be changed. Update fails if the specified share does not already exist. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.file_share import FileShare
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
    api_instance = openapi_client.FileSharesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    share_name = 'share_name_example' # str | The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    file_share = openapi_client.FileShare() # FileShare | Properties to update for the file share.

    try:
        api_response = api_instance.file_shares_update(resource_group_name, account_name, share_name, api_version, subscription_id, file_share)
        print("The response of FileSharesApi->file_shares_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileSharesApi->file_shares_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **share_name** | **str**| The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **file_share** | [**FileShare**](FileShare.md)| Properties to update for the file share. | 

### Return type

[**FileShare**](FileShare.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Update Share operation completed successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

