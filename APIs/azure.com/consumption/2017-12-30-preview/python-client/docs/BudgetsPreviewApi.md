# openapi_client.BudgetsPreviewApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**budgets_create_or_update**](BudgetsPreviewApi.md#budgets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/budgets/{name} | 
[**budgets_delete**](BudgetsPreviewApi.md#budgets_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/budgets/{name} | 
[**budgets_get**](BudgetsPreviewApi.md#budgets_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/budgets/{name} | 
[**budgets_list**](BudgetsPreviewApi.md#budgets_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/budgets | 


# **budgets_create_or_update**
> Budget budgets_create_or_update(api_version, subscription_id, name, parameters)



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
    api_instance = openapi_client.BudgetsPreviewApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-12-30-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    name = 'name_example' # str | Budget name.
    parameters = openapi_client.Budget() # Budget | Parameters supplied to the Create Budget operation.

    try:
        api_response = api_instance.budgets_create_or_update(api_version, subscription_id, name, parameters)
        print("The response of BudgetsPreviewApi->budgets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BudgetsPreviewApi->budgets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-12-30-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **name** | **str**| Budget name. | 
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
> budgets_delete(api_version, subscription_id, name)



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
    api_instance = openapi_client.BudgetsPreviewApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-12-30-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    name = 'name_example' # str | Budget name.

    try:
        api_instance.budgets_delete(api_version, subscription_id, name)
    except Exception as e:
        print("Exception when calling BudgetsPreviewApi->budgets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-12-30-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **name** | **str**| Budget name. | 

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
> Budget budgets_get(api_version, subscription_id, name)



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
    api_instance = openapi_client.BudgetsPreviewApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-12-30-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    name = 'name_example' # str | Budget name.

    try:
        api_response = api_instance.budgets_get(api_version, subscription_id, name)
        print("The response of BudgetsPreviewApi->budgets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BudgetsPreviewApi->budgets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-12-30-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **name** | **str**| Budget name. | 

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
    api_instance = openapi_client.BudgetsPreviewApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-12-30-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.budgets_list(api_version, subscription_id)
        print("The response of BudgetsPreviewApi->budgets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BudgetsPreviewApi->budgets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-12-30-preview. | 
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

