# openapi_client.AlertsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alerts_get_alert_by_management_groups**](AlertsApi.md#alerts_get_alert_by_management_groups) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.CostManagement/alerts/{alertId} | 
[**alerts_get_by_account**](AlertsApi.md#alerts_get_by_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}/providers/Microsoft.CostManagement/alerts/{alertId} | 
[**alerts_get_by_department**](AlertsApi.md#alerts_get_by_department) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}/providers/Microsoft.CostManagement/alerts/{alertId} | 
[**alerts_get_by_enrollment**](AlertsApi.md#alerts_get_by_enrollment) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/alerts/{alertId} | 
[**alerts_get_by_resource_group_name**](AlertsApi.md#alerts_get_by_resource_group_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/alerts/{alertId} | 
[**alerts_get_by_subscription**](AlertsApi.md#alerts_get_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/alerts/{alertId} | 
[**alerts_list**](AlertsApi.md#alerts_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/alerts | 
[**alerts_list_by_account**](AlertsApi.md#alerts_list_by_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}/providers/Microsoft.CostManagement/alerts | 
[**alerts_list_by_department**](AlertsApi.md#alerts_list_by_department) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}/providers/Microsoft.CostManagement/alerts | 
[**alerts_list_by_enrollment**](AlertsApi.md#alerts_list_by_enrollment) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/alerts | 
[**alerts_list_by_management_groups**](AlertsApi.md#alerts_list_by_management_groups) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.CostManagement/alerts | 
[**alerts_list_by_resource_group_name**](AlertsApi.md#alerts_list_by_resource_group_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/alerts | 
[**alerts_update_billing_account_alert_status**](AlertsApi.md#alerts_update_billing_account_alert_status) | **PATCH** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/alerts/{alertId}/updateStatus | 
[**alerts_update_departments_alert_status**](AlertsApi.md#alerts_update_departments_alert_status) | **PATCH** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}/providers/Microsoft.CostManagement/alerts/{alertId}/updateStatus | 
[**alerts_update_enrollment_account_alert_status**](AlertsApi.md#alerts_update_enrollment_account_alert_status) | **PATCH** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}/providers/Microsoft.CostManagement/alerts/{alertId}/updateStatus | 
[**alerts_update_management_group_alert_status**](AlertsApi.md#alerts_update_management_group_alert_status) | **PATCH** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.CostManagement/alerts/{alertId}/UpdateStatus | 
[**alerts_update_resource_group_name_alert_status**](AlertsApi.md#alerts_update_resource_group_name_alert_status) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/alerts/{alertId}/updateStatus | 
[**alerts_update_subscription_alert_status**](AlertsApi.md#alerts_update_subscription_alert_status) | **PATCH** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/alerts/{alertId}/updateStatus | 


# **alerts_get_alert_by_management_groups**
> Alert alerts_get_alert_by_management_groups(api_version, management_group_id, alert_id)



Gets an alert for Management Groups by alert ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    management_group_id = 'management_group_id_example' # str | Management Group ID
    alert_id = 'alert_id_example' # str | Alert ID.

    try:
        api_response = api_instance.alerts_get_alert_by_management_groups(api_version, management_group_id, alert_id)
        print("The response of AlertsApi->alerts_get_alert_by_management_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_get_alert_by_management_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **management_group_id** | **str**| Management Group ID | 
 **alert_id** | **str**| Alert ID. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_get_by_account**
> Alert alerts_get_by_account(api_version, billing_account_id, enrollment_account_id, alert_id)



Gets the alert for an account by alert ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    enrollment_account_id = 'enrollment_account_id_example' # str | Enrollment Account Id
    alert_id = 'alert_id_example' # str | Alert ID.

    try:
        api_response = api_instance.alerts_get_by_account(api_version, billing_account_id, enrollment_account_id, alert_id)
        print("The response of AlertsApi->alerts_get_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_get_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **enrollment_account_id** | **str**| Enrollment Account Id | 
 **alert_id** | **str**| Alert ID. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_get_by_department**
> Alert alerts_get_by_department(api_version, billing_account_id, department_id, alert_id)



Gets the alert for a department by alert ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    department_id = 'department_id_example' # str | Department ID
    alert_id = 'alert_id_example' # str | Alert ID.

    try:
        api_response = api_instance.alerts_get_by_department(api_version, billing_account_id, department_id, alert_id)
        print("The response of AlertsApi->alerts_get_by_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_get_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **department_id** | **str**| Department ID | 
 **alert_id** | **str**| Alert ID. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_get_by_enrollment**
> Alert alerts_get_by_enrollment(api_version, billing_account_id, alert_id)



Gets the alert for an enrollment by alert ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    alert_id = 'alert_id_example' # str | Alert ID.

    try:
        api_response = api_instance.alerts_get_by_enrollment(api_version, billing_account_id, alert_id)
        print("The response of AlertsApi->alerts_get_by_enrollment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_get_by_enrollment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **alert_id** | **str**| Alert ID. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_get_by_resource_group_name**
> Alert alerts_get_by_resource_group_name(subscription_id, resource_group_name, api_version, alert_id)



Gets the alert for a resource group under a subscription by alert ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    alert_id = 'alert_id_example' # str | Alert ID.

    try:
        api_response = api_instance.alerts_get_by_resource_group_name(subscription_id, resource_group_name, api_version, alert_id)
        print("The response of AlertsApi->alerts_get_by_resource_group_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_get_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **alert_id** | **str**| Alert ID. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_get_by_subscription**
> Alert alerts_get_by_subscription(api_version, subscription_id, alert_id)



Gets the alert for a subscription by alert ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    alert_id = 'alert_id_example' # str | Alert ID.

    try:
        api_response = api_instance.alerts_get_by_subscription(api_version, subscription_id, alert_id)
        print("The response of AlertsApi->alerts_get_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_get_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **alert_id** | **str**| Alert ID. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_list**
> AlertListResult alerts_list(api_version, subscription_id, filter=filter, skiptoken=skiptoken, top=top)



List all alerts for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_list_result import AlertListResult
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    filter = 'filter_example' # str | May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N alerts. (optional)

    try:
        api_response = api_instance.alerts_list(api_version, subscription_id, filter=filter, skiptoken=skiptoken, top=top)
        print("The response of AlertsApi->alerts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **filter** | **str**| May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N alerts. | [optional] 

### Return type

[**AlertListResult**](AlertListResult.md)

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

# **alerts_list_by_account**
> AlertListResult alerts_list_by_account(api_version, billing_account_id, enrollment_account_id, filter=filter, skiptoken=skiptoken, top=top)



List all alerts for an account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_list_result import AlertListResult
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    enrollment_account_id = 'enrollment_account_id_example' # str | Enrollment Account Id
    filter = 'filter_example' # str | May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N alerts. (optional)

    try:
        api_response = api_instance.alerts_list_by_account(api_version, billing_account_id, enrollment_account_id, filter=filter, skiptoken=skiptoken, top=top)
        print("The response of AlertsApi->alerts_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **enrollment_account_id** | **str**| Enrollment Account Id | 
 **filter** | **str**| May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N alerts. | [optional] 

### Return type

[**AlertListResult**](AlertListResult.md)

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

# **alerts_list_by_department**
> AlertListResult alerts_list_by_department(api_version, billing_account_id, department_id, filter=filter, skiptoken=skiptoken, top=top)



List all alerts for a department.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_list_result import AlertListResult
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    department_id = 'department_id_example' # str | Department ID
    filter = 'filter_example' # str | May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N alerts. (optional)

    try:
        api_response = api_instance.alerts_list_by_department(api_version, billing_account_id, department_id, filter=filter, skiptoken=skiptoken, top=top)
        print("The response of AlertsApi->alerts_list_by_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_list_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **department_id** | **str**| Department ID | 
 **filter** | **str**| May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N alerts. | [optional] 

### Return type

[**AlertListResult**](AlertListResult.md)

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

# **alerts_list_by_enrollment**
> AlertListResult alerts_list_by_enrollment(api_version, billing_account_id, filter=filter, skiptoken=skiptoken, top=top)



List all alerts for an enrollment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_list_result import AlertListResult
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    filter = 'filter_example' # str | May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N alerts. (optional)

    try:
        api_response = api_instance.alerts_list_by_enrollment(api_version, billing_account_id, filter=filter, skiptoken=skiptoken, top=top)
        print("The response of AlertsApi->alerts_list_by_enrollment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_list_by_enrollment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **filter** | **str**| May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N alerts. | [optional] 

### Return type

[**AlertListResult**](AlertListResult.md)

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

# **alerts_list_by_management_groups**
> AlertListResult alerts_list_by_management_groups(api_version, management_group_id, filter=filter, skiptoken=skiptoken, top=top)



List all alerts for Management Groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_list_result import AlertListResult
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    management_group_id = 'management_group_id_example' # str | Management Group ID
    filter = 'filter_example' # str | May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N alerts. (optional)

    try:
        api_response = api_instance.alerts_list_by_management_groups(api_version, management_group_id, filter=filter, skiptoken=skiptoken, top=top)
        print("The response of AlertsApi->alerts_list_by_management_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_list_by_management_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **management_group_id** | **str**| Management Group ID | 
 **filter** | **str**| May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N alerts. | [optional] 

### Return type

[**AlertListResult**](AlertListResult.md)

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

# **alerts_list_by_resource_group_name**
> AlertListResult alerts_list_by_resource_group_name(subscription_id, resource_group_name, api_version, filter=filter, skiptoken=skiptoken, top=top)



List all alerts for a resource group under a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_list_result import AlertListResult
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
    api_instance = openapi_client.AlertsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    filter = 'filter_example' # str | May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N alerts. (optional)

    try:
        api_response = api_instance.alerts_list_by_resource_group_name(subscription_id, resource_group_name, api_version, filter=filter, skiptoken=skiptoken, top=top)
        print("The response of AlertsApi->alerts_list_by_resource_group_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_list_by_resource_group_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **filter** | **str**| May be used to filter alerts by properties/definition/type, properties/definition/category, properties/definition/criteria, properties/costEntityId, properties/creationTime, properties/closeTime, properties/status, properties/source. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N alerts. | [optional] 

### Return type

[**AlertListResult**](AlertListResult.md)

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

# **alerts_update_billing_account_alert_status**
> Alert alerts_update_billing_account_alert_status(api_version, billing_account_id, alert_id, parameters)



Update alerts status for billing account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    alert_id = 'alert_id_example' # str | Alert ID.
    parameters = openapi_client.Alert() # Alert | Parameters supplied to the update alerts status operation.

    try:
        api_response = api_instance.alerts_update_billing_account_alert_status(api_version, billing_account_id, alert_id, parameters)
        print("The response of AlertsApi->alerts_update_billing_account_alert_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_update_billing_account_alert_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **alert_id** | **str**| Alert ID. | 
 **parameters** | [**Alert**](Alert.md)| Parameters supplied to the update alerts status operation. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_update_departments_alert_status**
> Alert alerts_update_departments_alert_status(api_version, billing_account_id, department_id, alert_id, parameters)



Update alerts status for a department.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    department_id = 'department_id_example' # str | Department ID
    alert_id = 'alert_id_example' # str | Alert ID.
    parameters = openapi_client.Alert() # Alert | Parameters supplied to the update alerts status operation.

    try:
        api_response = api_instance.alerts_update_departments_alert_status(api_version, billing_account_id, department_id, alert_id, parameters)
        print("The response of AlertsApi->alerts_update_departments_alert_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_update_departments_alert_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **department_id** | **str**| Department ID | 
 **alert_id** | **str**| Alert ID. | 
 **parameters** | [**Alert**](Alert.md)| Parameters supplied to the update alerts status operation. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_update_enrollment_account_alert_status**
> Alert alerts_update_enrollment_account_alert_status(api_version, billing_account_id, enrollment_account_id, alert_id, parameters)



Update alerts status for an enrollment account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    enrollment_account_id = 'enrollment_account_id_example' # str | Enrollment Account Id
    alert_id = 'alert_id_example' # str | Alert ID.
    parameters = openapi_client.Alert() # Alert | Parameters supplied to the update alerts status operation.

    try:
        api_response = api_instance.alerts_update_enrollment_account_alert_status(api_version, billing_account_id, enrollment_account_id, alert_id, parameters)
        print("The response of AlertsApi->alerts_update_enrollment_account_alert_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_update_enrollment_account_alert_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **enrollment_account_id** | **str**| Enrollment Account Id | 
 **alert_id** | **str**| Alert ID. | 
 **parameters** | [**Alert**](Alert.md)| Parameters supplied to the update alerts status operation. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_update_management_group_alert_status**
> Alert alerts_update_management_group_alert_status(api_version, management_group_id, alert_id, parameters)



Update alerts status for management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    management_group_id = 'management_group_id_example' # str | Management Group ID
    alert_id = 'alert_id_example' # str | Alert ID.
    parameters = openapi_client.Alert() # Alert | Parameters supplied to the update alerts status operation.

    try:
        api_response = api_instance.alerts_update_management_group_alert_status(api_version, management_group_id, alert_id, parameters)
        print("The response of AlertsApi->alerts_update_management_group_alert_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_update_management_group_alert_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **management_group_id** | **str**| Management Group ID | 
 **alert_id** | **str**| Alert ID. | 
 **parameters** | [**Alert**](Alert.md)| Parameters supplied to the update alerts status operation. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_update_resource_group_name_alert_status**
> Alert alerts_update_resource_group_name_alert_status(subscription_id, resource_group_name, alert_id, api_version, parameters)



Update alerts status for a resource group under a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    alert_id = 'alert_id_example' # str | Alert ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    parameters = openapi_client.Alert() # Alert | Parameters supplied to the update alerts status operation.

    try:
        api_response = api_instance.alerts_update_resource_group_name_alert_status(subscription_id, resource_group_name, alert_id, api_version, parameters)
        print("The response of AlertsApi->alerts_update_resource_group_name_alert_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_update_resource_group_name_alert_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **alert_id** | **str**| Alert ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **parameters** | [**Alert**](Alert.md)| Parameters supplied to the update alerts status operation. | 

### Return type

[**Alert**](Alert.md)

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

# **alerts_update_subscription_alert_status**
> Alert alerts_update_subscription_alert_status(api_version, subscription_id, alert_id, parameters)



Update alerts status for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-08-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    alert_id = 'alert_id_example' # str | Alert ID.
    parameters = openapi_client.Alert() # Alert | Parameters supplied to the update alerts status operation.

    try:
        api_response = api_instance.alerts_update_subscription_alert_status(api_version, subscription_id, alert_id, parameters)
        print("The response of AlertsApi->alerts_update_subscription_alert_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_update_subscription_alert_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-08-01-preview. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **alert_id** | **str**| Alert ID. | 
 **parameters** | [**Alert**](Alert.md)| Parameters supplied to the update alerts status operation. | 

### Return type

[**Alert**](Alert.md)

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

