# openapi_client.TransparentDataEncryptionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transparent_data_encryption_activities_list_by_configuration**](TransparentDataEncryptionApi.md#transparent_data_encryption_activities_list_by_configuration) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}/operationResults | 
[**transparent_data_encryptions_create_or_update**](TransparentDataEncryptionApi.md#transparent_data_encryptions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName} | 
[**transparent_data_encryptions_get**](TransparentDataEncryptionApi.md#transparent_data_encryptions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName} | 


# **transparent_data_encryption_activities_list_by_configuration**
> TransparentDataEncryptionActivityListResult transparent_data_encryption_activities_list_by_configuration(api_version, subscription_id, resource_group_name, server_name, database_name, transparent_data_encryption_name)



Returns a database's transparent data encryption operation result.

### Example


```python
import openapi_client
from openapi_client.models.transparent_data_encryption_activity_list_result import TransparentDataEncryptionActivityListResult
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
    api_instance = openapi_client.TransparentDataEncryptionApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database for which the transparent data encryption applies.
    transparent_data_encryption_name = 'transparent_data_encryption_name_example' # str | The name of the transparent data encryption configuration.

    try:
        api_response = api_instance.transparent_data_encryption_activities_list_by_configuration(api_version, subscription_id, resource_group_name, server_name, database_name, transparent_data_encryption_name)
        print("The response of TransparentDataEncryptionApi->transparent_data_encryption_activities_list_by_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransparentDataEncryptionApi->transparent_data_encryption_activities_list_by_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database for which the transparent data encryption applies. | 
 **transparent_data_encryption_name** | **str**| The name of the transparent data encryption configuration. | 

### Return type

[**TransparentDataEncryptionActivityListResult**](TransparentDataEncryptionActivityListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transparent_data_encryptions_create_or_update**
> TransparentDataEncryption transparent_data_encryptions_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, transparent_data_encryption_name, parameters)



Creates or updates a database's transparent data encryption configuration.

### Example


```python
import openapi_client
from openapi_client.models.transparent_data_encryption import TransparentDataEncryption
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
    api_instance = openapi_client.TransparentDataEncryptionApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database for which setting the transparent data encryption applies.
    transparent_data_encryption_name = 'transparent_data_encryption_name_example' # str | The name of the transparent data encryption configuration.
    parameters = openapi_client.TransparentDataEncryption() # TransparentDataEncryption | The required parameters for creating or updating transparent data encryption.

    try:
        api_response = api_instance.transparent_data_encryptions_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, transparent_data_encryption_name, parameters)
        print("The response of TransparentDataEncryptionApi->transparent_data_encryptions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransparentDataEncryptionApi->transparent_data_encryptions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database for which setting the transparent data encryption applies. | 
 **transparent_data_encryption_name** | **str**| The name of the transparent data encryption configuration. | 
 **parameters** | [**TransparentDataEncryption**](TransparentDataEncryption.md)| The required parameters for creating or updating transparent data encryption. | 

### Return type

[**TransparentDataEncryption**](TransparentDataEncryption.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transparent_data_encryptions_get**
> TransparentDataEncryption transparent_data_encryptions_get(api_version, subscription_id, resource_group_name, server_name, database_name, transparent_data_encryption_name)



Gets a database's transparent data encryption configuration.

### Example


```python
import openapi_client
from openapi_client.models.transparent_data_encryption import TransparentDataEncryption
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
    api_instance = openapi_client.TransparentDataEncryptionApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database for which the transparent data encryption applies.
    transparent_data_encryption_name = 'transparent_data_encryption_name_example' # str | The name of the transparent data encryption configuration.

    try:
        api_response = api_instance.transparent_data_encryptions_get(api_version, subscription_id, resource_group_name, server_name, database_name, transparent_data_encryption_name)
        print("The response of TransparentDataEncryptionApi->transparent_data_encryptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransparentDataEncryptionApi->transparent_data_encryptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database for which the transparent data encryption applies. | 
 **transparent_data_encryption_name** | **str**| The name of the transparent data encryption configuration. | 

### Return type

[**TransparentDataEncryption**](TransparentDataEncryption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

