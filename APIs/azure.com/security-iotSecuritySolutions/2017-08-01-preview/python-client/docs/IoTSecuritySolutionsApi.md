# openapi_client.IoTSecuritySolutionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**io_t_security_solutions_list**](IoTSecuritySolutionsApi.md#io_t_security_solutions_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/iotSecuritySolutions | 
[**io_t_security_solutions_resource_group_list**](IoTSecuritySolutionsApi.md#io_t_security_solutions_resource_group_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions | 
[**iot_security_solution_create**](IoTSecuritySolutionsApi.md#iot_security_solution_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName} | 
[**iot_security_solution_delete**](IoTSecuritySolutionsApi.md#iot_security_solution_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName} | 
[**iot_security_solution_get**](IoTSecuritySolutionsApi.md#iot_security_solution_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName} | 
[**iot_security_solution_update**](IoTSecuritySolutionsApi.md#iot_security_solution_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName} | 


# **io_t_security_solutions_list**
> IoTSecuritySolutionsList io_t_security_solutions_list(api_version, subscription_id, filter=filter)



List of security solutions

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
    api_instance = openapi_client.IoTSecuritySolutionsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    filter = 'filter_example' # str | filter the Security Solution with OData syntax. supporting filter by iotHubs (optional)

    try:
        api_response = api_instance.io_t_security_solutions_list(api_version, subscription_id, filter=filter)
        print("The response of IoTSecuritySolutionsApi->io_t_security_solutions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsApi->io_t_security_solutions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **filter** | **str**| filter the Security Solution with OData syntax. supporting filter by iotHubs | [optional] 

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

# **io_t_security_solutions_resource_group_list**
> IoTSecuritySolutionsList io_t_security_solutions_resource_group_list(api_version, subscription_id, resource_group_name, filter=filter)



List of security solutions

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
    api_instance = openapi_client.IoTSecuritySolutionsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    filter = 'filter_example' # str | filter the Security Solution with OData syntax. supporting filter by iotHubs (optional)

    try:
        api_response = api_instance.io_t_security_solutions_resource_group_list(api_version, subscription_id, resource_group_name, filter=filter)
        print("The response of IoTSecuritySolutionsApi->io_t_security_solutions_resource_group_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsApi->io_t_security_solutions_resource_group_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **filter** | **str**| filter the Security Solution with OData syntax. supporting filter by iotHubs | [optional] 

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

# **iot_security_solution_create**
> IoTSecuritySolutionModel iot_security_solution_create(api_version, subscription_id, resource_group_name, solution_name, iot_security_solution_data)



Create new solution manager

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
    api_instance = openapi_client.IoTSecuritySolutionsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name
    iot_security_solution_data = openapi_client.IoTSecuritySolutionModel() # IoTSecuritySolutionModel | The security solution data

    try:
        api_response = api_instance.iot_security_solution_create(api_version, subscription_id, resource_group_name, solution_name, iot_security_solution_data)
        print("The response of IoTSecuritySolutionsApi->iot_security_solution_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsApi->iot_security_solution_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 
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



Create new solution manager

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
    api_instance = openapi_client.IoTSecuritySolutionsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name

    try:
        api_instance.iot_security_solution_delete(api_version, subscription_id, resource_group_name, solution_name)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsApi->iot_security_solution_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 

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
**200** | Security Solution deleted |  -  |
**204** | Security Solution was not exists |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_security_solution_get**
> IoTSecuritySolutionModel iot_security_solution_get(api_version, subscription_id, resource_group_name, solution_name)



Details of a specific iot security solution

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
    api_instance = openapi_client.IoTSecuritySolutionsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name

    try:
        api_response = api_instance.iot_security_solution_get(api_version, subscription_id, resource_group_name, solution_name)
        print("The response of IoTSecuritySolutionsApi->iot_security_solution_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsApi->iot_security_solution_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 

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

# **iot_security_solution_update**
> IoTSecuritySolutionModel iot_security_solution_update(api_version, subscription_id, resource_group_name, solution_name, update_iot_security_solution_data)



update existing Security Solution tags or user defined resources. To update other fields use the CreateOrUpdate method

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
    api_instance = openapi_client.IoTSecuritySolutionsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The solution manager name
    update_iot_security_solution_data = openapi_client.UpdateIotSecuritySolutionData() # UpdateIotSecuritySolutionData | The security solution data

    try:
        api_response = api_instance.iot_security_solution_update(api_version, subscription_id, resource_group_name, solution_name, update_iot_security_solution_data)
        print("The response of IoTSecuritySolutionsApi->iot_security_solution_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionsApi->iot_security_solution_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The solution manager name | 
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

