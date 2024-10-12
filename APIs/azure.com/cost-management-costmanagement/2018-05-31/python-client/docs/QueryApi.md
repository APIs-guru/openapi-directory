# openapi_client.QueryApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query_billing_account**](QueryApi.md#query_billing_account) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/Query | 
[**query_resource_group**](QueryApi.md#query_resource_group) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.CostManagement/Query | 
[**query_subscription**](QueryApi.md#query_subscription) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/Query | 


# **query_billing_account**
> QueryResult query_billing_account(api_version, billing_account_id, parameters)



Lists the usage data for billing account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_result import QueryResult
from openapi_client.models.report_config_definition import ReportConfigDefinition
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
    api_instance = openapi_client.QueryApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-05-31.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    parameters = openapi_client.ReportConfigDefinition() # ReportConfigDefinition | Parameters supplied to the CreateOrUpdate Report Config operation.

    try:
        api_response = api_instance.query_billing_account(api_version, billing_account_id, parameters)
        print("The response of QueryApi->query_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->query_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-05-31. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **parameters** | [**ReportConfigDefinition**](ReportConfigDefinition.md)| Parameters supplied to the CreateOrUpdate Report Config operation. | 

### Return type

[**QueryResult**](QueryResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_resource_group**
> QueryResult query_resource_group(api_version, subscription_id, resource_group_name, parameters)



Lists the usage data for subscriptionId and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_result import QueryResult
from openapi_client.models.report_config_definition import ReportConfigDefinition
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
    api_instance = openapi_client.QueryApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-05-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    parameters = openapi_client.ReportConfigDefinition() # ReportConfigDefinition | Parameters supplied to the CreateOrUpdate Report Config operation.

    try:
        api_response = api_instance.query_resource_group(api_version, subscription_id, resource_group_name, parameters)
        print("The response of QueryApi->query_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->query_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-05-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **parameters** | [**ReportConfigDefinition**](ReportConfigDefinition.md)| Parameters supplied to the CreateOrUpdate Report Config operation. | 

### Return type

[**QueryResult**](QueryResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_subscription**
> QueryResult query_subscription(api_version, subscription_id, parameters)



Lists the usage data for subscriptionId.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_result import QueryResult
from openapi_client.models.report_config_definition import ReportConfigDefinition
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
    api_instance = openapi_client.QueryApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-05-31.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    parameters = openapi_client.ReportConfigDefinition() # ReportConfigDefinition | Parameters supplied to the CreateOrUpdate Report Config operation.

    try:
        api_response = api_instance.query_subscription(api_version, subscription_id, parameters)
        print("The response of QueryApi->query_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->query_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-05-31. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **parameters** | [**ReportConfigDefinition**](ReportConfigDefinition.md)| Parameters supplied to the CreateOrUpdate Report Config operation. | 

### Return type

[**QueryResult**](QueryResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

