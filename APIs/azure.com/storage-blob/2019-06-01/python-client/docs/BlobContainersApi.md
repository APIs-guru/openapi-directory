# openapi_client.BlobContainersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blob_containers_clear_legal_hold**](BlobContainersApi.md#blob_containers_clear_legal_hold) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/clearLegalHold | 
[**blob_containers_create**](BlobContainersApi.md#blob_containers_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName} | 
[**blob_containers_create_or_update_immutability_policy**](BlobContainersApi.md#blob_containers_create_or_update_immutability_policy) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/{immutabilityPolicyName} | 
[**blob_containers_delete**](BlobContainersApi.md#blob_containers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName} | 
[**blob_containers_delete_immutability_policy**](BlobContainersApi.md#blob_containers_delete_immutability_policy) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/{immutabilityPolicyName} | 
[**blob_containers_extend_immutability_policy**](BlobContainersApi.md#blob_containers_extend_immutability_policy) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/extend | 
[**blob_containers_get**](BlobContainersApi.md#blob_containers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName} | 
[**blob_containers_get_immutability_policy**](BlobContainersApi.md#blob_containers_get_immutability_policy) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/{immutabilityPolicyName} | 
[**blob_containers_lease**](BlobContainersApi.md#blob_containers_lease) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/lease | 
[**blob_containers_list**](BlobContainersApi.md#blob_containers_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers | 
[**blob_containers_lock_immutability_policy**](BlobContainersApi.md#blob_containers_lock_immutability_policy) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/lock | 
[**blob_containers_set_legal_hold**](BlobContainersApi.md#blob_containers_set_legal_hold) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/setLegalHold | 
[**blob_containers_update**](BlobContainersApi.md#blob_containers_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName} | 


# **blob_containers_clear_legal_hold**
> LegalHold blob_containers_clear_legal_hold(resource_group_name, account_name, container_name, api_version, subscription_id, legal_hold)



Clears legal hold tags. Clearing the same or non-existent tag results in an idempotent operation. ClearLegalHold clears out only the specified tags in the request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.legal_hold import LegalHold
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    legal_hold = openapi_client.LegalHold() # LegalHold | The LegalHold property that will be clear from a blob container.

    try:
        api_response = api_instance.blob_containers_clear_legal_hold(resource_group_name, account_name, container_name, api_version, subscription_id, legal_hold)
        print("The response of BlobContainersApi->blob_containers_clear_legal_hold:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_clear_legal_hold: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **legal_hold** | [**LegalHold**](LegalHold.md)| The LegalHold property that will be clear from a blob container. | 

### Return type

[**LegalHold**](LegalHold.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Clear legal hold tags for Container completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_create**
> BlobContainer blob_containers_create(resource_group_name, account_name, container_name, api_version, subscription_id, blob_container)



Creates a new container under the specified account as described by request body. The container resource includes metadata and properties for that container. It does not include a list of the blobs contained by the container. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_container import BlobContainer
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    blob_container = openapi_client.BlobContainer() # BlobContainer | Properties of the blob container to create.

    try:
        api_response = api_instance.blob_containers_create(resource_group_name, account_name, container_name, api_version, subscription_id, blob_container)
        print("The response of BlobContainersApi->blob_containers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **blob_container** | [**BlobContainer**](BlobContainer.md)| Properties of the blob container to create. | 

### Return type

[**BlobContainer**](BlobContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The Container is already created. |  -  |
**201** | Created -- Create Container operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_create_or_update_immutability_policy**
> ImmutabilityPolicy blob_containers_create_or_update_immutability_policy(resource_group_name, account_name, container_name, immutability_policy_name, api_version, subscription_id, if_match=if_match, parameters=parameters)



Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not required for this operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.immutability_policy import ImmutabilityPolicy
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    immutability_policy_name = 'immutability_policy_name_example' # str | The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    if_match = 'if_match_example' # str | The entity state (ETag) version of the immutability policy to update. A value of \"*\" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. (optional)
    parameters = openapi_client.ImmutabilityPolicy() # ImmutabilityPolicy | The ImmutabilityPolicy Properties that will be created or updated to a blob container. (optional)

    try:
        api_response = api_instance.blob_containers_create_or_update_immutability_policy(resource_group_name, account_name, container_name, immutability_policy_name, api_version, subscription_id, if_match=if_match, parameters=parameters)
        print("The response of BlobContainersApi->blob_containers_create_or_update_immutability_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_create_or_update_immutability_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **immutability_policy_name** | **str**| The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be &#39;default&#39; | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **if_match** | **str**| The entity state (ETag) version of the immutability policy to update. A value of \&quot;*\&quot; can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. | [optional] 
 **parameters** | [**ImmutabilityPolicy**](ImmutabilityPolicy.md)| The ImmutabilityPolicy Properties that will be created or updated to a blob container. | [optional] 

### Return type

[**ImmutabilityPolicy**](ImmutabilityPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Creates or updates container ImmutabilityPolicy operation completed successfully. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_delete**
> blob_containers_delete(resource_group_name, account_name, container_name, api_version, subscription_id)



Deletes specified container under its account.

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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.blob_containers_delete(resource_group_name, account_name, container_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**200** | OK -- Delete Container operation completed successfully. |  -  |
**204** | No Content -- The Container not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_delete_immutability_policy**
> ImmutabilityPolicy blob_containers_delete_immutability_policy(resource_group_name, account_name, container_name, immutability_policy_name, api_version, subscription_id, if_match)



Aborts an unlocked immutability policy. The response of delete has immutabilityPeriodSinceCreationInDays set to 0. ETag in If-Match is required for this operation. Deleting a locked immutability policy is not allowed, only way is to delete the container after deleting all blobs inside the container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.immutability_policy import ImmutabilityPolicy
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    immutability_policy_name = 'immutability_policy_name_example' # str | The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    if_match = 'if_match_example' # str | The entity state (ETag) version of the immutability policy to update. A value of \"*\" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.

    try:
        api_response = api_instance.blob_containers_delete_immutability_policy(resource_group_name, account_name, container_name, immutability_policy_name, api_version, subscription_id, if_match)
        print("The response of BlobContainersApi->blob_containers_delete_immutability_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_delete_immutability_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **immutability_policy_name** | **str**| The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be &#39;default&#39; | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **if_match** | **str**| The entity state (ETag) version of the immutability policy to update. A value of \&quot;*\&quot; can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. | 

### Return type

[**ImmutabilityPolicy**](ImmutabilityPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Deletes container ImmutabilityPolicy operation completed successfully. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_extend_immutability_policy**
> ImmutabilityPolicy blob_containers_extend_immutability_policy(resource_group_name, account_name, container_name, api_version, subscription_id, if_match, parameters=parameters)



Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action allowed on a Locked policy will be this action. ETag in If-Match is required for this operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.immutability_policy import ImmutabilityPolicy
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    if_match = 'if_match_example' # str | The entity state (ETag) version of the immutability policy to update. A value of \"*\" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.
    parameters = openapi_client.ImmutabilityPolicy() # ImmutabilityPolicy | The ImmutabilityPolicy Properties that will be extended for a blob container. (optional)

    try:
        api_response = api_instance.blob_containers_extend_immutability_policy(resource_group_name, account_name, container_name, api_version, subscription_id, if_match, parameters=parameters)
        print("The response of BlobContainersApi->blob_containers_extend_immutability_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_extend_immutability_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **if_match** | **str**| The entity state (ETag) version of the immutability policy to update. A value of \&quot;*\&quot; can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. | 
 **parameters** | [**ImmutabilityPolicy**](ImmutabilityPolicy.md)| The ImmutabilityPolicy Properties that will be extended for a blob container. | [optional] 

### Return type

[**ImmutabilityPolicy**](ImmutabilityPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Extends container ImmutabilityPolicy operation completed successfully.. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_get**
> BlobContainer blob_containers_get(resource_group_name, account_name, container_name, api_version, subscription_id)



Gets properties of a specified container. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_container import BlobContainer
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.blob_containers_get(resource_group_name, account_name, container_name, api_version, subscription_id)
        print("The response of BlobContainersApi->blob_containers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**BlobContainer**](BlobContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Get Container operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_get_immutability_policy**
> ImmutabilityPolicy blob_containers_get_immutability_policy(resource_group_name, account_name, container_name, immutability_policy_name, api_version, subscription_id, if_match=if_match)



Gets the existing immutability policy along with the corresponding ETag in response headers and body.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.immutability_policy import ImmutabilityPolicy
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    immutability_policy_name = 'immutability_policy_name_example' # str | The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    if_match = 'if_match_example' # str | The entity state (ETag) version of the immutability policy to update. A value of \"*\" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. (optional)

    try:
        api_response = api_instance.blob_containers_get_immutability_policy(resource_group_name, account_name, container_name, immutability_policy_name, api_version, subscription_id, if_match=if_match)
        print("The response of BlobContainersApi->blob_containers_get_immutability_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_get_immutability_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **immutability_policy_name** | **str**| The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be &#39;default&#39; | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **if_match** | **str**| The entity state (ETag) version of the immutability policy to update. A value of \&quot;*\&quot; can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. | [optional] 

### Return type

[**ImmutabilityPolicy**](ImmutabilityPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Gets container ImmutabilityPolicy operation completed successfully. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_lease**
> LeaseContainerResponse blob_containers_lease(resource_group_name, account_name, container_name, api_version, subscription_id, parameters=parameters)



The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lease_container_request import LeaseContainerRequest
from openapi_client.models.lease_container_response import LeaseContainerResponse
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.LeaseContainerRequest() # LeaseContainerRequest | Lease Container request body. (optional)

    try:
        api_response = api_instance.blob_containers_lease(resource_group_name, account_name, container_name, api_version, subscription_id, parameters=parameters)
        print("The response of BlobContainersApi->blob_containers_lease:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_lease: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**LeaseContainerRequest**](LeaseContainerRequest.md)| Lease Container request body. | [optional] 

### Return type

[**LeaseContainerResponse**](LeaseContainerResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Lease Container operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_list**
> ListContainerItems blob_containers_list(resource_group_name, account_name, api_version, subscription_id, maxpagesize=maxpagesize, filter=filter)



Lists all containers and does not support a prefix like data plane. Also SRP today does not return continuation token.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_container_items import ListContainerItems
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    maxpagesize = 'maxpagesize_example' # str | Optional. Specified maximum number of containers that can be included in the list. (optional)
    filter = 'filter_example' # str | Optional. When specified, only container names starting with the filter will be listed. (optional)

    try:
        api_response = api_instance.blob_containers_list(resource_group_name, account_name, api_version, subscription_id, maxpagesize=maxpagesize, filter=filter)
        print("The response of BlobContainersApi->blob_containers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **maxpagesize** | **str**| Optional. Specified maximum number of containers that can be included in the list. | [optional] 
 **filter** | **str**| Optional. When specified, only container names starting with the filter will be listed. | [optional] 

### Return type

[**ListContainerItems**](ListContainerItems.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- List Container operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_lock_immutability_policy**
> ImmutabilityPolicy blob_containers_lock_immutability_policy(resource_group_name, account_name, container_name, api_version, subscription_id, if_match)



Sets the ImmutabilityPolicy to Locked state. The only action allowed on a Locked policy is ExtendImmutabilityPolicy action. ETag in If-Match is required for this operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.immutability_policy import ImmutabilityPolicy
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    if_match = 'if_match_example' # str | The entity state (ETag) version of the immutability policy to update. A value of \"*\" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.

    try:
        api_response = api_instance.blob_containers_lock_immutability_policy(resource_group_name, account_name, container_name, api_version, subscription_id, if_match)
        print("The response of BlobContainersApi->blob_containers_lock_immutability_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_lock_immutability_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **if_match** | **str**| The entity state (ETag) version of the immutability policy to update. A value of \&quot;*\&quot; can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. | 

### Return type

[**ImmutabilityPolicy**](ImmutabilityPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Locks container ImmutabilityPolicy operation completed successfully. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_set_legal_hold**
> LegalHold blob_containers_set_legal_hold(resource_group_name, account_name, container_name, api_version, subscription_id, legal_hold)



Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.legal_hold import LegalHold
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    legal_hold = openapi_client.LegalHold() # LegalHold | The LegalHold property that will be set to a blob container.

    try:
        api_response = api_instance.blob_containers_set_legal_hold(resource_group_name, account_name, container_name, api_version, subscription_id, legal_hold)
        print("The response of BlobContainersApi->blob_containers_set_legal_hold:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_set_legal_hold: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **legal_hold** | [**LegalHold**](LegalHold.md)| The LegalHold property that will be set to a blob container. | 

### Return type

[**LegalHold**](LegalHold.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Set legal hold tags for Container completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_containers_update**
> BlobContainer blob_containers_update(resource_group_name, account_name, container_name, api_version, subscription_id, blob_container)



Updates container properties as specified in request body. Properties not mentioned in the request will be unchanged. Update fails if the specified container doesn't already exist. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_container import BlobContainer
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
    api_instance = openapi_client.BlobContainersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    container_name = 'container_name_example' # str | The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    blob_container = openapi_client.BlobContainer() # BlobContainer | Properties to update for the blob container.

    try:
        api_response = api_instance.blob_containers_update(resource_group_name, account_name, container_name, api_version, subscription_id, blob_container)
        print("The response of BlobContainersApi->blob_containers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobContainersApi->blob_containers_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **container_name** | **str**| The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **blob_container** | [**BlobContainer**](BlobContainer.md)| Properties to update for the blob container. | 

### Return type

[**BlobContainer**](BlobContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Update Container operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

