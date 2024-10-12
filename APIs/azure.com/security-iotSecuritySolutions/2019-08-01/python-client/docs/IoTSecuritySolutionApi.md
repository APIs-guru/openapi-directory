# openapi_client.IoTSecuritySolutionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iot_security_solution_create_or_update**](IoTSecuritySolutionApi.md#iot_security_solution_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName} | 
[**iot_security_solution_delete**](IoTSecuritySolutionApi.md#iot_security_solution_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName} | 
[**iot_security_solution_get**](IoTSecuritySolutionApi.md#iot_security_solution_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName} | 
[**iot_security_solution_list_by_resource_group**](IoTSecuritySolutionApi.md#iot_security_solution_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions | 
[**iot_security_solution_list_by_subscription**](IoTSecuritySolutionApi.md#iot_security_solution_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/iotSecuritySolutions | 
[**iot_security_solution_update**](IoTSecuritySolutionApi.md#iot_security_solution_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName} | 


# **iot_security_solution_create_or_update**
> IoTSecuritySolutionModel iot_security_solution_create_or_update(api_version, subscription_id, resource_group_name, solution_name, iot_security_solution_data)



Use this method to create or update yours IoT Security solution

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_solution_model import IoTSecuritySolutionModel
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
    api_instance = openapi_client.IoTSecuritySolutionApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The name of the IoT Security solution.
    iot_security_solution_data = openapi_client.IoTSecuritySolutionModel() # IoTSecuritySolutionModel | The security solution data

    try:
        api_response = api_instance.iot_security_solution_create_or_update(api_version, subscription_id, resource_group_name, solution_name, iot_security_solution_data)
        print("The response of IoTSecuritySolutionApi->iot_security_solution_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionApi->iot_security_solution_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The name of the IoT Security solution. | 
 **iot_security_solution_data** | [**IoTSecuritySolutionModel**](IoTSecuritySolutionModel.md)| The security solution data | 

### Return type

[**IoTSecuritySolutionModel**](IoTSecuritySolutionModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated |  -  |
**201** | Created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_security_solution_delete**
> iot_security_solution_delete(api_version, subscription_id, resource_group_name, solution_name)



Use this method to delete yours IoT Security solution

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
    api_instance = openapi_client.IoTSecuritySolutionApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The name of the IoT Security solution.

    try:
        api_instance.iot_security_solution_delete(api_version, subscription_id, resource_group_name, solution_name)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionApi->iot_security_solution_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The name of the IoT Security solution. | 

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
**200** | Security Solution deleted. |  -  |
**204** | Security Solution does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_security_solution_get**
> IoTSecuritySolutionModel iot_security_solution_get(api_version, subscription_id, resource_group_name, solution_name)



User this method to get details of a specific IoT Security solution based on solution name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_solution_model import IoTSecuritySolutionModel
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
    api_instance = openapi_client.IoTSecuritySolutionApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The name of the IoT Security solution.

    try:
        api_response = api_instance.iot_security_solution_get(api_version, subscription_id, resource_group_name, solution_name)
        print("The response of IoTSecuritySolutionApi->iot_security_solution_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionApi->iot_security_solution_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The name of the IoT Security solution. | 

### Return type

[**IoTSecuritySolutionModel**](IoTSecuritySolutionModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_security_solution_list_by_resource_group**
> IoTSecuritySolutionsList iot_security_solution_list_by_resource_group(api_version, subscription_id, resource_group_name, filter=filter)



Use this method to get the list IoT Security solutions organized by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_solutions_list import IoTSecuritySolutionsList
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
    api_instance = openapi_client.IoTSecuritySolutionApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    filter = 'filter_example' # str | Filter the IoT Security solution with OData syntax. Supports filtering by iotHubs. (optional)

    try:
        api_response = api_instance.iot_security_solution_list_by_resource_group(api_version, subscription_id, resource_group_name, filter=filter)
        print("The response of IoTSecuritySolutionApi->iot_security_solution_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionApi->iot_security_solution_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **filter** | **str**| Filter the IoT Security solution with OData syntax. Supports filtering by iotHubs. | [optional] 

### Return type

[**IoTSecuritySolutionsList**](IoTSecuritySolutionsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_security_solution_list_by_subscription**
> IoTSecuritySolutionsList iot_security_solution_list_by_subscription(api_version, subscription_id, filter=filter)



Use this method to get the list of IoT Security solutions by subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_solutions_list import IoTSecuritySolutionsList
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
    api_instance = openapi_client.IoTSecuritySolutionApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    filter = 'filter_example' # str | Filter the IoT Security solution with OData syntax. Supports filtering by iotHubs. (optional)

    try:
        api_response = api_instance.iot_security_solution_list_by_subscription(api_version, subscription_id, filter=filter)
        print("The response of IoTSecuritySolutionApi->iot_security_solution_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionApi->iot_security_solution_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **filter** | **str**| Filter the IoT Security solution with OData syntax. Supports filtering by iotHubs. | [optional] 

### Return type

[**IoTSecuritySolutionsList**](IoTSecuritySolutionsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_security_solution_update**
> IoTSecuritySolutionModel iot_security_solution_update(api_version, subscription_id, resource_group_name, solution_name, update_iot_security_solution_data)



Use this method to update existing IoT Security solution tags or user defined resources. To update other fields use the CreateOrUpdate method.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_solution_model import IoTSecuritySolutionModel
from openapi_client.models.update_iot_security_solution_data import UpdateIotSecuritySolutionData
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
    api_instance = openapi_client.IoTSecuritySolutionApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The name of the IoT Security solution.
    update_iot_security_solution_data = openapi_client.UpdateIotSecuritySolutionData() # UpdateIotSecuritySolutionData | The security solution data

    try:
        api_response = api_instance.iot_security_solution_update(api_version, subscription_id, resource_group_name, solution_name, update_iot_security_solution_data)
        print("The response of IoTSecuritySolutionApi->iot_security_solution_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionApi->iot_security_solution_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The name of the IoT Security solution. | 
 **update_iot_security_solution_data** | [**UpdateIotSecuritySolutionData**](UpdateIotSecuritySolutionData.md)| The security solution data | 

### Return type

[**IoTSecuritySolutionModel**](IoTSecuritySolutionModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

