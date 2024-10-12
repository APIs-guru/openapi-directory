# openapi_client.BlobServiceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blob_services_get_service_properties**](BlobServiceApi.md#blob_services_get_service_properties) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/{BlobServicesName} | 
[**blob_services_list**](BlobServiceApi.md#blob_services_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices | 
[**blob_services_set_service_properties**](BlobServiceApi.md#blob_services_set_service_properties) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/{BlobServicesName} | 


# **blob_services_get_service_properties**
> BlobServiceProperties blob_services_get_service_properties(resource_group_name, account_name, api_version, subscription_id, blob_services_name)



Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_service_properties import BlobServiceProperties
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
    api_instance = openapi_client.BlobServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    blob_services_name = 'blob_services_name_example' # str | The name of the blob Service within the specified storage account. Blob Service Name must be 'default'

    try:
        api_response = api_instance.blob_services_get_service_properties(resource_group_name, account_name, api_version, subscription_id, blob_services_name)
        print("The response of BlobServiceApi->blob_services_get_service_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobServiceApi->blob_services_get_service_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **blob_services_name** | **str**| The name of the blob Service within the specified storage account. Blob Service Name must be &#39;default&#39; | 

### Return type

[**BlobServiceProperties**](BlobServiceProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- returned the properties of a storage account’s Blob service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_services_list**
> BlobServiceItems blob_services_list(resource_group_name, account_name, api_version, subscription_id)



List blob services of storage account. It returns a collection of one object named default.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_service_items import BlobServiceItems
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
    api_instance = openapi_client.BlobServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.blob_services_list(resource_group_name, account_name, api_version, subscription_id)
        print("The response of BlobServiceApi->blob_services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobServiceApi->blob_services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**BlobServiceItems**](BlobServiceItems.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- List blob services operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_services_set_service_properties**
> BlobServiceProperties blob_services_set_service_properties(resource_group_name, account_name, api_version, subscription_id, blob_services_name, parameters)



Sets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_service_properties import BlobServiceProperties
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
    api_instance = openapi_client.BlobServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    blob_services_name = 'blob_services_name_example' # str | The name of the blob Service within the specified storage account. Blob Service Name must be 'default'
    parameters = openapi_client.BlobServiceProperties() # BlobServiceProperties | The properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.

    try:
        api_response = api_instance.blob_services_set_service_properties(resource_group_name, account_name, api_version, subscription_id, blob_services_name, parameters)
        print("The response of BlobServiceApi->blob_services_set_service_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobServiceApi->blob_services_set_service_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **blob_services_name** | **str**| The name of the blob Service within the specified storage account. Blob Service Name must be &#39;default&#39; | 
 **parameters** | [**BlobServiceProperties**](BlobServiceProperties.md)| The properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules. | 

### Return type

[**BlobServiceProperties**](BlobServiceProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Sets The properties of a storage account’s Blob service successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

