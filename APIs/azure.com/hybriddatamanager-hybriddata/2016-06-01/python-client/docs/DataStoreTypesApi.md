# openapi_client.DataStoreTypesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_store_types_get**](DataStoreTypesApi.md#data_store_types_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataStoreTypes/{dataStoreTypeName} | 
[**data_store_types_list_by_data_manager**](DataStoreTypesApi.md#data_store_types_list_by_data_manager) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataStoreTypes | 


# **data_store_types_get**
> DataStoreType data_store_types_get(data_store_type_name, subscription_id, resource_group_name, data_manager_name, api_version)



Gets the data store/repository type given its name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_store_type import DataStoreType
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
    api_instance = openapi_client.DataStoreTypesApi(api_client)
    data_store_type_name = 'data_store_type_name_example' # str | The data store/repository type name for which details are needed.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_response = api_instance.data_store_types_get(data_store_type_name, subscription_id, resource_group_name, data_manager_name, api_version)
        print("The response of DataStoreTypesApi->data_store_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataStoreTypesApi->data_store_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store_type_name** | **str**| The data store/repository type name for which details are needed. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

### Return type

[**DataStoreType**](DataStoreType.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The data store/repository type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_store_types_list_by_data_manager**
> DataStoreTypeList data_store_types_list_by_data_manager(subscription_id, resource_group_name, data_manager_name, api_version)



Gets all the data store/repository types that the resource supports.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_store_type_list import DataStoreTypeList
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
    api_instance = openapi_client.DataStoreTypesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_response = api_instance.data_store_types_list_by_data_manager(subscription_id, resource_group_name, data_manager_name, api_version)
        print("The response of DataStoreTypesApi->data_store_types_list_by_data_manager:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataStoreTypesApi->data_store_types_list_by_data_manager: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

### Return type

[**DataStoreTypeList**](DataStoreTypeList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of data store types that are supported. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

