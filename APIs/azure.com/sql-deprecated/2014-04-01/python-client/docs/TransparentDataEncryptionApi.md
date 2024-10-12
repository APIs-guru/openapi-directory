# openapi_client.TransparentDataEncryptionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transparent_data_encryption_configurations_list_by_database**](TransparentDataEncryptionApi.md#transparent_data_encryption_configurations_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption | 


# **transparent_data_encryption_configurations_list_by_database**
> TransparentDataEncryptionListResult transparent_data_encryption_configurations_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)



Gets a list of a database's transparent data encryption configurations. There is only ever one element, named 'current', so GetTransparentDataEncryptionConfiguration should be used instead.

### Example


```python
import openapi_client
from openapi_client.models.transparent_data_encryption_list_result import TransparentDataEncryptionListResult
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

    try:
        api_response = api_instance.transparent_data_encryption_configurations_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)
        print("The response of TransparentDataEncryptionApi->transparent_data_encryption_configurations_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransparentDataEncryptionApi->transparent_data_encryption_configurations_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database for which the transparent data encryption applies. | 

### Return type

[**TransparentDataEncryptionListResult**](TransparentDataEncryptionListResult.md)

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

