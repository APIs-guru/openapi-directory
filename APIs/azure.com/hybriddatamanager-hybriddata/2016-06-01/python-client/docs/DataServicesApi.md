# openapi_client.DataServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_services_get**](DataServicesApi.md#data_services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName} | 
[**data_services_list_by_data_manager**](DataServicesApi.md#data_services_list_by_data_manager) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices | 


# **data_services_get**
> DataService data_services_get(data_service_name, subscription_id, resource_group_name, data_manager_name, api_version)



Gets the data service that match the data service name given.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_service import DataService
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
    api_instance = openapi_client.DataServicesApi(api_client)
    data_service_name = 'data_service_name_example' # str | The name of the data service that is being queried.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_response = api_instance.data_services_get(data_service_name, subscription_id, resource_group_name, data_manager_name, api_version)
        print("The response of DataServicesApi->data_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataServicesApi->data_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The name of the data service that is being queried. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

### Return type

[**DataService**](DataService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The data service that matches the name. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_services_list_by_data_manager**
> DataServiceList data_services_list_by_data_manager(subscription_id, resource_group_name, data_manager_name, api_version)



This method gets all the data services.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_service_list import DataServiceList
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
    api_instance = openapi_client.DataServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_response = api_instance.data_services_list_by_data_manager(subscription_id, resource_group_name, data_manager_name, api_version)
        print("The response of DataServicesApi->data_services_list_by_data_manager:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataServicesApi->data_services_list_by_data_manager: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

### Return type

[**DataServiceList**](DataServiceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of data services. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

