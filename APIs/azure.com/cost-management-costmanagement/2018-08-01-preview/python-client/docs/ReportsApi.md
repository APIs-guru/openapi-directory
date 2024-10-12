# openapi_client.ReportsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reports_create_or_update**](ReportsApi.md#reports_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_create_or_update_by_billing_account**](ReportsApi.md#reports_create_or_update_by_billing_account) | **PUT** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_create_or_update_by_department**](ReportsApi.md#reports_create_or_update_by_department) | **PUT** /providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_create_or_update_by_resource_group_name**](ReportsApi.md#reports_create_or_update_by_resource_group_name) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_delete**](ReportsApi.md#reports_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_delete_by_billing_account**](ReportsApi.md#reports_delete_by_billing_account) | **DELETE** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_delete_by_department**](ReportsApi.md#reports_delete_by_department) | **DELETE** /providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_delete_by_resource_group_name**](ReportsApi.md#reports_delete_by_resource_group_name) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_execute**](ReportsApi.md#reports_execute) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/reports/{reportName}/run | 
[**reports_execute_by_billing_account**](ReportsApi.md#reports_execute_by_billing_account) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/reports/{reportName}/run | 
[**reports_execute_by_department**](ReportsApi.md#reports_execute_by_department) | **POST** /providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.CostManagement/reports/{reportName}/run | 
[**reports_execute_by_resource_group_name**](ReportsApi.md#reports_execute_by_resource_group_name) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/reports/{reportName}/run | 
[**reports_get**](ReportsApi.md#reports_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_get_by_billing_account**](ReportsApi.md#reports_get_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_get_by_department**](ReportsApi.md#reports_get_by_department) | **GET** /providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_get_by_resource_group_name**](ReportsApi.md#reports_get_by_resource_group_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/reports/{reportName} | 
[**reports_get_execution_history**](ReportsApi.md#reports_get_execution_history) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/reports/{reportName}/runHistory | 
[**reports_get_execution_history_by_billing_account**](ReportsApi.md#reports_get_execution_history_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/reports/{reportName}/runHistory | 
[**reports_get_execution_history_by_department**](ReportsApi.md#reports_get_execution_history_by_department) | **GET** /providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.CostManagement/reports/{reportName}/runHistory | 
[**reports_get_execution_history_by_resource_group_name**](ReportsApi.md#reports_get_execution_history_by_resource_group_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/reports/{reportName}/runHistory | 
[**reports_list**](ReportsApi.md#reports_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/reports | 
[**reports_list_by_billing_account**](ReportsApi.md#reports_list_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/reports | 
[**reports_list_by_department**](ReportsApi.md#reports_list_by_department) | **GET** /providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.CostManagement/reports | 
[**reports_list_by_resource_group_name**](ReportsApi.md#reports_list_by_resource_group_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/reports | 


# **reports_create_or_update**
> Report reports_create_or_update(api_version, subscription_id, report_name, parameters)



The operation to create or update a report. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report import Report
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    report_name = 'report_name_example' # str | Report Name.
    parameters = openapi_client.Report() # Report | Parameters supplied to the CreateOrUpdate Report operation.

    try:
        api_response = api_instance.reports_create_or_update(api_version, subscription_id, report_name, parameters)
        print("The response of ReportsApi->reports_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **report_name** | **str**| Report Name. | 
 **parameters** | [**Report**](Report.md)| Parameters supplied to the CreateOrUpdate Report operation. | 

### Return type

[**Report**](Report.md)

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

# **reports_create_or_update_by_billing_account**
> Report reports_create_or_update_by_billing_account(api_version, billing_account_id, report_name, parameters)



The operation to create or update a report for billingAccount. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report import Report
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    report_name = 'report_name_example' # str | Report Name.
    parameters = openapi_client.Report() # Report | Parameters supplied to the CreateOrUpdate Report operation.

    try:
        api_response = api_instance.reports_create_or_update_by_billing_account(api_version, billing_account_id, report_name, parameters)
        print("The response of ReportsApi->reports_create_or_update_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_create_or_update_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **report_name** | **str**| Report Name. | 
 **parameters** | [**Report**](Report.md)| Parameters supplied to the CreateOrUpdate Report operation. | 

### Return type

[**Report**](Report.md)

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

# **reports_create_or_update_by_department**
> Report reports_create_or_update_by_department(api_version, department_id, report_name, parameters)



The operation to create or update a report for department. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report import Report
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    department_id = 'department_id_example' # str | Department ID
    report_name = 'report_name_example' # str | Report Name.
    parameters = openapi_client.Report() # Report | Parameters supplied to the CreateOrUpdate Report operation.

    try:
        api_response = api_instance.reports_create_or_update_by_department(api_version, department_id, report_name, parameters)
        print("The response of ReportsApi->reports_create_or_update_by_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_create_or_update_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **department_id** | **str**| Department ID | 
 **report_name** | **str**| Report Name. | 
 **parameters** | [**Report**](Report.md)| Parameters supplied to the CreateOrUpdate Report operation. | 

### Return type

[**Report**](Report.md)

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

# **reports_create_or_update_by_resource_group_name**
> Report reports_create_or_update_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name, parameters)



The operation to create or update a report. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report import Report
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    report_name = 'report_name_example' # str | Report Name.
    parameters = openapi_client.Report() # Report | Parameters supplied to the CreateOrUpdate Report operation.

    try:
        api_response = api_instance.reports_create_or_update_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name, parameters)
        print("The response of ReportsApi->reports_create_or_update_by_resource_group_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_create_or_update_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **report_name** | **str**| Report Name. | 
 **parameters** | [**Report**](Report.md)| Parameters supplied to the CreateOrUpdate Report operation. | 

### Return type

[**Report**](Report.md)

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

# **reports_delete**
> reports_delete(api_version, subscription_id, report_name)



The operation to delete a report.

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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_instance.reports_delete(api_version, subscription_id, report_name)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **report_name** | **str**| Report Name. | 

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

# **reports_delete_by_billing_account**
> reports_delete_by_billing_account(api_version, billing_account_id, report_name)



The operation to delete a report for billing account.

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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_instance.reports_delete_by_billing_account(api_version, billing_account_id, report_name)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_delete_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **report_name** | **str**| Report Name. | 

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

# **reports_delete_by_department**
> reports_delete_by_department(api_version, department_id, report_name)



The operation to delete a report for department.

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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    department_id = 'department_id_example' # str | Department ID
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_instance.reports_delete_by_department(api_version, department_id, report_name)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_delete_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **department_id** | **str**| Department ID | 
 **report_name** | **str**| Report Name. | 

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

# **reports_delete_by_resource_group_name**
> reports_delete_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name)



The operation to delete a report.

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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_instance.reports_delete_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_delete_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **report_name** | **str**| Report Name. | 

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

# **reports_execute**
> reports_execute(api_version, subscription_id, report_name)



The operation to execute a report.

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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_instance.reports_execute(api_version, subscription_id, report_name)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_execute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **report_name** | **str**| Report Name. | 

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

# **reports_execute_by_billing_account**
> reports_execute_by_billing_account(api_version, billing_account_id, report_name)



The operation to execute a report by billing account.

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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_instance.reports_execute_by_billing_account(api_version, billing_account_id, report_name)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_execute_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **report_name** | **str**| Report Name. | 

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

# **reports_execute_by_department**
> reports_execute_by_department(api_version, department_id, report_name)



The operation to execute a report by department.

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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    department_id = 'department_id_example' # str | Department ID
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_instance.reports_execute_by_department(api_version, department_id, report_name)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_execute_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **department_id** | **str**| Department ID | 
 **report_name** | **str**| Report Name. | 

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

# **reports_execute_by_resource_group_name**
> reports_execute_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name)



The operation to execute a report.

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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_instance.reports_execute_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_execute_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **report_name** | **str**| Report Name. | 

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

# **reports_get**
> Report reports_get(api_version, subscription_id, report_name)



Gets the report for a subscription by report name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report import Report
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_response = api_instance.reports_get(api_version, subscription_id, report_name)
        print("The response of ReportsApi->reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **report_name** | **str**| Report Name. | 

### Return type

[**Report**](Report.md)

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

# **reports_get_by_billing_account**
> Report reports_get_by_billing_account(api_version, billing_account_id, report_name)



Gets the report for a billing account by report name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report import Report
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_response = api_instance.reports_get_by_billing_account(api_version, billing_account_id, report_name)
        print("The response of ReportsApi->reports_get_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **report_name** | **str**| Report Name. | 

### Return type

[**Report**](Report.md)

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

# **reports_get_by_department**
> Report reports_get_by_department(api_version, department_id, report_name)



Gets the report for a department by report name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report import Report
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    department_id = 'department_id_example' # str | Department ID
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_response = api_instance.reports_get_by_department(api_version, department_id, report_name)
        print("The response of ReportsApi->reports_get_by_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **department_id** | **str**| Department ID | 
 **report_name** | **str**| Report Name. | 

### Return type

[**Report**](Report.md)

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

# **reports_get_by_resource_group_name**
> Report reports_get_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name)



Gets the report for a resource group under a subscription by report name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report import Report
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_response = api_instance.reports_get_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name)
        print("The response of ReportsApi->reports_get_by_resource_group_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **report_name** | **str**| Report Name. | 

### Return type

[**Report**](Report.md)

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

# **reports_get_execution_history**
> ReportExecutionListResult reports_get_execution_history(api_version, subscription_id, report_name)



Gets the execution history of a report for a subscription by report name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report_execution_list_result import ReportExecutionListResult
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_response = api_instance.reports_get_execution_history(api_version, subscription_id, report_name)
        print("The response of ReportsApi->reports_get_execution_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get_execution_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **report_name** | **str**| Report Name. | 

### Return type

[**ReportExecutionListResult**](ReportExecutionListResult.md)

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

# **reports_get_execution_history_by_billing_account**
> ReportExecutionListResult reports_get_execution_history_by_billing_account(api_version, billing_account_id, report_name)



Gets the execution history of a report for a billing account by report name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report_execution_list_result import ReportExecutionListResult
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_response = api_instance.reports_get_execution_history_by_billing_account(api_version, billing_account_id, report_name)
        print("The response of ReportsApi->reports_get_execution_history_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get_execution_history_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **report_name** | **str**| Report Name. | 

### Return type

[**ReportExecutionListResult**](ReportExecutionListResult.md)

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

# **reports_get_execution_history_by_department**
> ReportExecutionListResult reports_get_execution_history_by_department(api_version, department_id, report_name)



Gets the execution history of a report for a department by report name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report_execution_list_result import ReportExecutionListResult
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    department_id = 'department_id_example' # str | Department ID
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_response = api_instance.reports_get_execution_history_by_department(api_version, department_id, report_name)
        print("The response of ReportsApi->reports_get_execution_history_by_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get_execution_history_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **department_id** | **str**| Department ID | 
 **report_name** | **str**| Report Name. | 

### Return type

[**ReportExecutionListResult**](ReportExecutionListResult.md)

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

# **reports_get_execution_history_by_resource_group_name**
> ReportExecutionListResult reports_get_execution_history_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name)



Gets the execution history of a report for a resource group by report name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report_execution_list_result import ReportExecutionListResult
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    report_name = 'report_name_example' # str | Report Name.

    try:
        api_response = api_instance.reports_get_execution_history_by_resource_group_name(api_version, subscription_id, resource_group_name, report_name)
        print("The response of ReportsApi->reports_get_execution_history_by_resource_group_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_get_execution_history_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **report_name** | **str**| Report Name. | 

### Return type

[**ReportExecutionListResult**](ReportExecutionListResult.md)

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

# **reports_list**
> ReportListResult reports_list(api_version, subscription_id)



Lists all reports for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report_list_result import ReportListResult
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.reports_list(api_version, subscription_id)
        print("The response of ReportsApi->reports_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**ReportListResult**](ReportListResult.md)

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

# **reports_list_by_billing_account**
> ReportListResult reports_list_by_billing_account(api_version, billing_account_id)



Lists all reports for a billing account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report_list_result import ReportListResult
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID

    try:
        api_response = api_instance.reports_list_by_billing_account(api_version, billing_account_id)
        print("The response of ReportsApi->reports_list_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_list_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 

### Return type

[**ReportListResult**](ReportListResult.md)

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

# **reports_list_by_department**
> ReportListResult reports_list_by_department(api_version, department_id)



Lists all reports for a department.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report_list_result import ReportListResult
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    department_id = 'department_id_example' # str | Department ID

    try:
        api_response = api_instance.reports_list_by_department(api_version, department_id)
        print("The response of ReportsApi->reports_list_by_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_list_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **department_id** | **str**| Department ID | 

### Return type

[**ReportListResult**](ReportListResult.md)

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

# **reports_list_by_resource_group_name**
> ReportListResult reports_list_by_resource_group_name(api_version, subscription_id, resource_group_name)



Lists all reports for a resource group under a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.report_list_result import ReportListResult
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
    api_instance = openapi_client.ReportsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.

    try:
        api_response = api_instance.reports_list_by_resource_group_name(api_version, subscription_id, resource_group_name)
        print("The response of ReportsApi->reports_list_by_resource_group_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_list_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 

### Return type

[**ReportListResult**](ReportListResult.md)

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

