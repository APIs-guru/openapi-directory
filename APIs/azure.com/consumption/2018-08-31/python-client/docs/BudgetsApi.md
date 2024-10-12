# openapi_client.BudgetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**budgets_create_or_update**](BudgetsApi.md#budgets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/budgets/{budgetName} | 
[**budgets_create_or_update_by_resource_group_name**](BudgetsApi.md#budgets_create_or_update_by_resource_group_name) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Consumption/budgets/{budgetName} | 
[**budgets_delete**](BudgetsApi.md#budgets_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/budgets/{budgetName} | 
[**budgets_delete_by_resource_group_name**](BudgetsApi.md#budgets_delete_by_resource_group_name) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Consumption/budgets/{budgetName} | 
[**budgets_get**](BudgetsApi.md#budgets_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/budgets/{budgetName} | 
[**budgets_get_by_resource_group_name**](BudgetsApi.md#budgets_get_by_resource_group_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Consumption/budgets/{budgetName} | 
[**budgets_list**](BudgetsApi.md#budgets_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/budgets | 
[**budgets_list_by_resource_group_name**](BudgetsApi.md#budgets_list_by_resource_group_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Consumption/budgets | 


# **budgets_create_or_update**
> Budget budgets_create_or_update(api_version, subscription_id, budget_name, parameters)



The operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.budget import Budget
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
    api_instance = openapi_client.BudgetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    budget_name = 'budget_name_example' # str | Budget Name.
    parameters = openapi_client.Budget() # Budget | Parameters supplied to the Create Budget operation.

    try:
        api_response = api_instance.budgets_create_or_update(api_version, subscription_id, budget_name, parameters)
        print("The response of BudgetsApi->budgets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BudgetsApi->budgets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **budget_name** | **str**| Budget Name. | 
 **parameters** | [**Budget**](Budget.md)| Parameters supplied to the Create Budget operation. | 

### Return type

[**Budget**](Budget.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **budgets_create_or_update_by_resource_group_name**
> Budget budgets_create_or_update_by_resource_group_name(api_version, subscription_id, resource_group_name, budget_name, parameters)



The operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.budget import Budget
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
    api_instance = openapi_client.BudgetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    budget_name = 'budget_name_example' # str | Budget Name.
    parameters = openapi_client.Budget() # Budget | Parameters supplied to the Create Budget operation.

    try:
        api_response = api_instance.budgets_create_or_update_by_resource_group_name(api_version, subscription_id, resource_group_name, budget_name, parameters)
        print("The response of BudgetsApi->budgets_create_or_update_by_resource_group_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BudgetsApi->budgets_create_or_update_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **budget_name** | **str**| Budget Name. | 
 **parameters** | [**Budget**](Budget.md)| Parameters supplied to the Create Budget operation. | 

### Return type

[**Budget**](Budget.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **budgets_delete**
> budgets_delete(api_version, subscription_id, budget_name)



The operation to delete a budget.

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
    api_instance = openapi_client.BudgetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    budget_name = 'budget_name_example' # str | Budget Name.

    try:
        api_instance.budgets_delete(api_version, subscription_id, budget_name)
    except Exception as e:
        print("Exception when calling BudgetsApi->budgets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **budget_name** | **str**| Budget Name. | 

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
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **budgets_delete_by_resource_group_name**
> budgets_delete_by_resource_group_name(api_version, subscription_id, resource_group_name, budget_name)



The operation to delete a budget.

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
    api_instance = openapi_client.BudgetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    budget_name = 'budget_name_example' # str | Budget Name.

    try:
        api_instance.budgets_delete_by_resource_group_name(api_version, subscription_id, resource_group_name, budget_name)
    except Exception as e:
        print("Exception when calling BudgetsApi->budgets_delete_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **budget_name** | **str**| Budget Name. | 

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
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **budgets_get**
> Budget budgets_get(api_version, subscription_id, budget_name)



Gets the budget for a subscription by budget name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.budget import Budget
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
    api_instance = openapi_client.BudgetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    budget_name = 'budget_name_example' # str | Budget Name.

    try:
        api_response = api_instance.budgets_get(api_version, subscription_id, budget_name)
        print("The response of BudgetsApi->budgets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BudgetsApi->budgets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **budget_name** | **str**| Budget Name. | 

### Return type

[**Budget**](Budget.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **budgets_get_by_resource_group_name**
> Budget budgets_get_by_resource_group_name(api_version, subscription_id, resource_group_name, budget_name)



Gets the budget for a resource group under a subscription by budget name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.budget import Budget
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
    api_instance = openapi_client.BudgetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    budget_name = 'budget_name_example' # str | Budget Name.

    try:
        api_response = api_instance.budgets_get_by_resource_group_name(api_version, subscription_id, resource_group_name, budget_name)
        print("The response of BudgetsApi->budgets_get_by_resource_group_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BudgetsApi->budgets_get_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **budget_name** | **str**| Budget Name. | 

### Return type

[**Budget**](Budget.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **budgets_list**
> BudgetsListResult budgets_list(api_version, subscription_id)



Lists all budgets for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.budgets_list_result import BudgetsListResult
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
    api_instance = openapi_client.BudgetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.budgets_list(api_version, subscription_id)
        print("The response of BudgetsApi->budgets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BudgetsApi->budgets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**BudgetsListResult**](BudgetsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **budgets_list_by_resource_group_name**
> BudgetsListResult budgets_list_by_resource_group_name(api_version, subscription_id, resource_group_name)



Lists all budgets for a resource group under a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.budgets_list_result import BudgetsListResult
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
    api_instance = openapi_client.BudgetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.

    try:
        api_response = api_instance.budgets_list_by_resource_group_name(api_version, subscription_id, resource_group_name)
        print("The response of BudgetsApi->budgets_list_by_resource_group_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BudgetsApi->budgets_list_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 

### Return type

[**BudgetsListResult**](BudgetsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

