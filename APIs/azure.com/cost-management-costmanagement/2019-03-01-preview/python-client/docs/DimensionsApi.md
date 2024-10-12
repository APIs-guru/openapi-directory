# openapi_client.DimensionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dimensions_list_by_billing_account**](DimensionsApi.md#dimensions_list_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/dimensions | 
[**dimensions_list_by_department**](DimensionsApi.md#dimensions_list_by_department) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}/providers/Microsoft.CostManagement/dimensions | 
[**dimensions_list_by_enrollment_account**](DimensionsApi.md#dimensions_list_by_enrollment_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}/providers/Microsoft.CostManagement/dimensions | 
[**dimensions_list_by_management_group**](DimensionsApi.md#dimensions_list_by_management_group) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.CostManagement/dimensions | 
[**dimensions_list_by_resource_group**](DimensionsApi.md#dimensions_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CostManagement/dimensions | 
[**dimensions_list_by_subscription**](DimensionsApi.md#dimensions_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/dimensions | 


# **dimensions_list_by_billing_account**
> DimensionsListResult dimensions_list_by_billing_account(api_version, billing_account_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)



Lists the dimensions by billingAccount Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dimensions_list_result import DimensionsListResult
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
    api_instance = openapi_client.DimensionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    filter = 'filter_example' # str | May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    expand = 'expand_example' # str | May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N dimension data. (optional)

    try:
        api_response = api_instance.dimensions_list_by_billing_account(api_version, billing_account_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)
        print("The response of DimensionsApi->dimensions_list_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DimensionsApi->dimensions_list_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **filter** | **str**| May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **expand** | **str**| May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N dimension data. | [optional] 

### Return type

[**DimensionsListResult**](DimensionsListResult.md)

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

# **dimensions_list_by_department**
> DimensionsListResult dimensions_list_by_department(api_version, billing_account_id, department_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)



Lists the dimensions by Department Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dimensions_list_result import DimensionsListResult
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
    api_instance = openapi_client.DimensionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    department_id = 'department_id_example' # str | Department ID
    filter = 'filter_example' # str | May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    expand = 'expand_example' # str | May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N dimension data. (optional)

    try:
        api_response = api_instance.dimensions_list_by_department(api_version, billing_account_id, department_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)
        print("The response of DimensionsApi->dimensions_list_by_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DimensionsApi->dimensions_list_by_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **department_id** | **str**| Department ID | 
 **filter** | **str**| May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **expand** | **str**| May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N dimension data. | [optional] 

### Return type

[**DimensionsListResult**](DimensionsListResult.md)

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

# **dimensions_list_by_enrollment_account**
> DimensionsListResult dimensions_list_by_enrollment_account(api_version, billing_account_id, enrollment_account_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)



Lists the dimensions by Enrollment Account Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dimensions_list_result import DimensionsListResult
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
    api_instance = openapi_client.DimensionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    enrollment_account_id = 'enrollment_account_id_example' # str | Enrollment Account ID
    filter = 'filter_example' # str | May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    expand = 'expand_example' # str | May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N dimension data. (optional)

    try:
        api_response = api_instance.dimensions_list_by_enrollment_account(api_version, billing_account_id, enrollment_account_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)
        print("The response of DimensionsApi->dimensions_list_by_enrollment_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DimensionsApi->dimensions_list_by_enrollment_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **enrollment_account_id** | **str**| Enrollment Account ID | 
 **filter** | **str**| May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **expand** | **str**| May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N dimension data. | [optional] 

### Return type

[**DimensionsListResult**](DimensionsListResult.md)

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

# **dimensions_list_by_management_group**
> DimensionsListResult dimensions_list_by_management_group(api_version, management_group_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)



Lists the dimensions by managementGroup Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dimensions_list_result import DimensionsListResult
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
    api_instance = openapi_client.DimensionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    management_group_id = 'management_group_id_example' # str | ManagementGroup ID
    filter = 'filter_example' # str | May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    expand = 'expand_example' # str | May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N dimension data. (optional)

    try:
        api_response = api_instance.dimensions_list_by_management_group(api_version, management_group_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)
        print("The response of DimensionsApi->dimensions_list_by_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DimensionsApi->dimensions_list_by_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **management_group_id** | **str**| ManagementGroup ID | 
 **filter** | **str**| May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **expand** | **str**| May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N dimension data. | [optional] 

### Return type

[**DimensionsListResult**](DimensionsListResult.md)

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

# **dimensions_list_by_resource_group**
> DimensionsListResult dimensions_list_by_resource_group(api_version, subscription_id, resource_group_name, filter=filter, expand=expand, skiptoken=skiptoken, top=top)



Lists the dimensions by resource group Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dimensions_list_result import DimensionsListResult
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
    api_instance = openapi_client.DimensionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Azure Resource Group Name.
    filter = 'filter_example' # str | May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    expand = 'expand_example' # str | May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N dimension data. (optional)

    try:
        api_response = api_instance.dimensions_list_by_resource_group(api_version, subscription_id, resource_group_name, filter=filter, expand=expand, skiptoken=skiptoken, top=top)
        print("The response of DimensionsApi->dimensions_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DimensionsApi->dimensions_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Azure Resource Group Name. | 
 **filter** | **str**| May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **expand** | **str**| May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N dimension data. | [optional] 

### Return type

[**DimensionsListResult**](DimensionsListResult.md)

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

# **dimensions_list_by_subscription**
> DimensionsListResult dimensions_list_by_subscription(api_version, subscription_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)



Lists the dimensions by subscription Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dimensions_list_result import DimensionsListResult
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
    api_instance = openapi_client.DimensionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    filter = 'filter_example' # str | May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    expand = 'expand_example' # str | May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N dimension data. (optional)

    try:
        api_response = api_instance.dimensions_list_by_subscription(api_version, subscription_id, filter=filter, expand=expand, skiptoken=skiptoken, top=top)
        print("The response of DimensionsApi->dimensions_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DimensionsApi->dimensions_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **filter** | **str**| May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are &#39;eq&#39;,&#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;. | [optional] 
 **expand** | **str**| May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N dimension data. | [optional] 

### Return type

[**DimensionsListResult**](DimensionsListResult.md)

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

