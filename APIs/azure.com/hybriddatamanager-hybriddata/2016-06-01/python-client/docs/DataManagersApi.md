# openapi_client.DataManagersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_managers_create**](DataManagersApi.md#data_managers_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName} | 
[**data_managers_delete**](DataManagersApi.md#data_managers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName} | 
[**data_managers_get**](DataManagersApi.md#data_managers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName} | 
[**data_managers_list**](DataManagersApi.md#data_managers_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.HybridData/dataManagers | 
[**data_managers_list_by_resource_group**](DataManagersApi.md#data_managers_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers | 
[**data_managers_update**](DataManagersApi.md#data_managers_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName} | 


# **data_managers_create**
> DataManager data_managers_create(subscription_id, resource_group_name, data_manager_name, api_version, data_manager)



Creates a new data manager resource with the specified parameters. Existing resources cannot be updated with this API  and should instead be updated with the Update data manager resource API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_manager import DataManager
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
    api_instance = openapi_client.DataManagersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    data_manager = openapi_client.DataManager() # DataManager | Data manager resource details from request body.

    try:
        api_response = api_instance.data_managers_create(subscription_id, resource_group_name, data_manager_name, api_version, data_manager)
        print("The response of DataManagersApi->data_managers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataManagersApi->data_managers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **data_manager** | [**DataManager**](DataManager.md)| Data manager resource details from request body. | 

### Return type

[**DataManager**](DataManager.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data Manager Resource object. |  -  |
**202** | Accepted request for create/update. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_managers_delete**
> data_managers_delete(subscription_id, resource_group_name, data_manager_name, api_version)



Deletes a data manager resource in Microsoft Azure.

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
    api_instance = openapi_client.DataManagersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_instance.data_managers_delete(subscription_id, resource_group_name, data_manager_name, api_version)
    except Exception as e:
        print("Exception when calling DataManagersApi->data_managers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

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
**202** | Data Manager Resource deleted. |  -  |
**204** | Data Manager Resource deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_managers_get**
> DataManager data_managers_get(subscription_id, resource_group_name, data_manager_name, api_version)



Gets information about the specified data manager resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_manager import DataManager
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
    api_instance = openapi_client.DataManagersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_response = api_instance.data_managers_get(subscription_id, resource_group_name, data_manager_name, api_version)
        print("The response of DataManagersApi->data_managers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataManagersApi->data_managers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

### Return type

[**DataManager**](DataManager.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data Manager Resource object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_managers_list**
> DataManagerList data_managers_list(subscription_id, api_version)



Lists all the data manager resources available under the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_manager_list import DataManagerList
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
    api_instance = openapi_client.DataManagersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    api_version = 'api_version_example' # str | The API Version

    try:
        api_response = api_instance.data_managers_list(subscription_id, api_version)
        print("The response of DataManagersApi->data_managers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataManagersApi->data_managers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **api_version** | **str**| The API Version | 

### Return type

[**DataManagerList**](DataManagerList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of data manager resources available under the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_managers_list_by_resource_group**
> DataManagerList data_managers_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all the data manager resources available under the given resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_manager_list import DataManagerList
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
    api_instance = openapi_client.DataManagersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    api_version = 'api_version_example' # str | The API Version

    try:
        api_response = api_instance.data_managers_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DataManagersApi->data_managers_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataManagersApi->data_managers_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **api_version** | **str**| The API Version | 

### Return type

[**DataManagerList**](DataManagerList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of data manager resources by resource group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_managers_update**
> DataManager data_managers_update(subscription_id, resource_group_name, data_manager_name, api_version, data_manager_update_parameter, if_match=if_match)



Updates the properties of an existing data manager resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_manager import DataManager
from openapi_client.models.data_manager_update_parameter import DataManagerUpdateParameter
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
    api_instance = openapi_client.DataManagersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    data_manager_update_parameter = openapi_client.DataManagerUpdateParameter() # DataManagerUpdateParameter | Data manager resource details from request body.
    if_match = 'if_match_example' # str | Defines the If-Match condition. The patch will be performed only if the ETag of the data manager resource on the server matches this value. (optional)

    try:
        api_response = api_instance.data_managers_update(subscription_id, resource_group_name, data_manager_name, api_version, data_manager_update_parameter, if_match=if_match)
        print("The response of DataManagersApi->data_managers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataManagersApi->data_managers_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **data_manager_update_parameter** | [**DataManagerUpdateParameter**](DataManagerUpdateParameter.md)| Data manager resource details from request body. | 
 **if_match** | **str**| Defines the If-Match condition. The patch will be performed only if the ETag of the data manager resource on the server matches this value. | [optional] 

### Return type

[**DataManager**](DataManager.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data Manager Resource object. |  -  |
**202** | Data Manager Resource updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

