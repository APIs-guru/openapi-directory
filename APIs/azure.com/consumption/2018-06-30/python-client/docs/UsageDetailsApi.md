# openapi_client.UsageDetailsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usage_details_list**](UsageDetailsApi.md#usage_details_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/usageDetails | 
[**usage_details_list_by_billing_account**](UsageDetailsApi.md#usage_details_list_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/usageDetails | 
[**usage_details_list_by_billing_period**](UsageDetailsApi.md#usage_details_list_by_billing_period) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/usageDetails | 
[**usage_details_list_by_department**](UsageDetailsApi.md#usage_details_list_by_department) | **GET** /providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.Consumption/usageDetails | 
[**usage_details_list_by_enrollment_account**](UsageDetailsApi.md#usage_details_list_by_enrollment_account) | **GET** /providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountId}/providers/Microsoft.Consumption/usageDetails | 
[**usage_details_list_by_management_group**](UsageDetailsApi.md#usage_details_list_by_management_group) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Consumption/usageDetails | 
[**usage_details_list_for_billing_period_by_billing_account**](UsageDetailsApi.md#usage_details_list_for_billing_period_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/usageDetails | 
[**usage_details_list_for_billing_period_by_department**](UsageDetailsApi.md#usage_details_list_for_billing_period_by_department) | **GET** /providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/usageDetails | 
[**usage_details_list_for_billing_period_by_enrollment_account**](UsageDetailsApi.md#usage_details_list_for_billing_period_by_enrollment_account) | **GET** /providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/usageDetails | 
[**usage_details_list_for_billing_period_by_management_group**](UsageDetailsApi.md#usage_details_list_for_billing_period_by_management_group) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/usageDetails | 


# **usage_details_list**
> UsageDetailsListResult usage_details_list(subscription_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)



Lists the usage details for a scope by current billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) (optional)

    try:
        api_response = api_instance.usage_details_list(subscription_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)
        print("The response of UsageDetailsApi->usage_details_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

# **usage_details_list_by_billing_account**
> UsageDetailsListResult usage_details_list_by_billing_account(billing_account_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)



Lists the usage details by billingAccountId for a scope by current billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) (optional)

    try:
        api_response = api_instance.usage_details_list_by_billing_account(billing_account_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)
        print("The response of UsageDetailsApi->usage_details_list_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| BillingAccount ID | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

# **usage_details_list_by_billing_period**
> UsageDetailsListResult usage_details_list_by_billing_period(subscription_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)



Lists the usage details for a scope by billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    billing_period_name = 'billing_period_name_example' # str | Billing Period Name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)

    try:
        api_response = api_instance.usage_details_list_by_billing_period(subscription_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)
        print("The response of UsageDetailsApi->usage_details_list_by_billing_period:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list_by_billing_period: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **billing_period_name** | **str**| Billing Period Name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

# **usage_details_list_by_department**
> UsageDetailsListResult usage_details_list_by_department(department_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)



Lists the usage details by departmentId for a scope by current billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    department_id = 'department_id_example' # str | Department ID
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) (optional)

    try:
        api_response = api_instance.usage_details_list_by_department(department_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)
        print("The response of UsageDetailsApi->usage_details_list_by_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department_id** | **str**| Department ID | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

# **usage_details_list_by_enrollment_account**
> UsageDetailsListResult usage_details_list_by_enrollment_account(enrollment_account_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)



Lists the usage details by enrollmentAccountId for a scope by current billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    enrollment_account_id = 'enrollment_account_id_example' # str | EnrollmentAccount ID
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) (optional)

    try:
        api_response = api_instance.usage_details_list_by_enrollment_account(enrollment_account_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)
        print("The response of UsageDetailsApi->usage_details_list_by_enrollment_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list_by_enrollment_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enrollment_account_id** | **str**| EnrollmentAccount ID | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

# **usage_details_list_by_management_group**
> UsageDetailsListResult usage_details_list_by_management_group(management_group_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)



Lists the usage detail records for all subscriptions belonging to a management group scope by current billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    management_group_id = 'management_group_id_example' # str | Azure Management Group ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) (optional)

    try:
        api_response = api_instance.usage_details_list_by_management_group(management_group_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top, apply=apply)
        print("The response of UsageDetailsApi->usage_details_list_by_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list_by_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_group_id** | **str**| Azure Management Group ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName, properties/instanceId or tags. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

# **usage_details_list_for_billing_period_by_billing_account**
> UsageDetailsListResult usage_details_list_for_billing_period_by_billing_account(billing_account_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)



Lists the usage details based on billingAccountId for a scope by billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    billing_period_name = 'billing_period_name_example' # str | Billing Period Name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)

    try:
        api_response = api_instance.usage_details_list_for_billing_period_by_billing_account(billing_account_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)
        print("The response of UsageDetailsApi->usage_details_list_for_billing_period_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list_for_billing_period_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| BillingAccount ID | 
 **billing_period_name** | **str**| Billing Period Name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

# **usage_details_list_for_billing_period_by_department**
> UsageDetailsListResult usage_details_list_for_billing_period_by_department(department_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)



Lists the usage details based on departmentId for a scope by billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    department_id = 'department_id_example' # str | Department ID
    billing_period_name = 'billing_period_name_example' # str | Billing Period Name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)

    try:
        api_response = api_instance.usage_details_list_for_billing_period_by_department(department_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)
        print("The response of UsageDetailsApi->usage_details_list_for_billing_period_by_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list_for_billing_period_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department_id** | **str**| Department ID | 
 **billing_period_name** | **str**| Billing Period Name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

# **usage_details_list_for_billing_period_by_enrollment_account**
> UsageDetailsListResult usage_details_list_for_billing_period_by_enrollment_account(enrollment_account_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)



Lists the usage details based on enrollmentAccountId for a scope by billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    enrollment_account_id = 'enrollment_account_id_example' # str | EnrollmentAccount ID
    billing_period_name = 'billing_period_name_example' # str | Billing Period Name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)

    try:
        api_response = api_instance.usage_details_list_for_billing_period_by_enrollment_account(enrollment_account_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)
        print("The response of UsageDetailsApi->usage_details_list_for_billing_period_by_enrollment_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list_for_billing_period_by_enrollment_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enrollment_account_id** | **str**| EnrollmentAccount ID | 
 **billing_period_name** | **str**| Billing Period Name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

# **usage_details_list_for_billing_period_by_management_group**
> UsageDetailsListResult usage_details_list_for_billing_period_by_management_group(management_group_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)



Lists the usage detail records for all subscriptions belonging to a management group scope by specified billing period. Usage details are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    management_group_id = 'management_group_id_example' # str | Azure Management Group ID.
    billing_period_name = 'billing_period_name_example' # str | Billing Period Name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    expand = 'expand_example' # str | May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    apply = 'apply_example' # str | OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)

    try:
        api_response = api_instance.usage_details_list_for_billing_period_by_management_group(management_group_id, billing_period_name, api_version, expand=expand, filter=filter, apply=apply, skiptoken=skiptoken, top=top)
        print("The response of UsageDetailsApi->usage_details_list_for_billing_period_by_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list_for_billing_period_by_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_group_id** | **str**| Azure Management Group ID. | 
 **billing_period_name** | **str**| Billing Period Name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **expand** | **str**| May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **apply** | **str**| OData apply expression to aggregate usageDetails by tags or (tags and properties/usageStart) for specified billing period | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

