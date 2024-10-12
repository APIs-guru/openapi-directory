# openapi_client.AggregatedCostApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aggregated_cost_get_by_management_group**](AggregatedCostApi.md#aggregated_cost_get_by_management_group) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Consumption/aggregatedcost | 
[**aggregated_cost_get_for_billing_period_by_management_group**](AggregatedCostApi.md#aggregated_cost_get_for_billing_period_by_management_group) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/Microsoft.Consumption/aggregatedcost | 


# **aggregated_cost_get_by_management_group**
> ManagementGroupAggregatedCostResult aggregated_cost_get_by_management_group(management_group_id, api_version, filter=filter)



Provides the aggregate cost of a management group and all child management groups by current billing period.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_group_aggregated_cost_result import ManagementGroupAggregatedCostResult
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
    api_instance = openapi_client.AggregatedCostApi(api_client)
    management_group_id = 'management_group_id_example' # str | Azure Management Group ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-10-01.
    filter = 'filter_example' # str | May be used to filter aggregated cost by properties/usageStart (Utc time), properties/usageEnd (Utc time). The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.aggregated_cost_get_by_management_group(management_group_id, api_version, filter=filter)
        print("The response of AggregatedCostApi->aggregated_cost_get_by_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AggregatedCostApi->aggregated_cost_get_by_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_group_id** | **str**| Azure Management Group ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-10-01. | 
 **filter** | **str**| May be used to filter aggregated cost by properties/usageStart (Utc time), properties/usageEnd (Utc time). The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**ManagementGroupAggregatedCostResult**](ManagementGroupAggregatedCostResult.md)

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

# **aggregated_cost_get_for_billing_period_by_management_group**
> ManagementGroupAggregatedCostResult aggregated_cost_get_for_billing_period_by_management_group(management_group_id, billing_period_name, api_version)



Provides the aggregate cost of a management group and all child management groups by specified billing period

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_group_aggregated_cost_result import ManagementGroupAggregatedCostResult
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
    api_instance = openapi_client.AggregatedCostApi(api_client)
    management_group_id = 'management_group_id_example' # str | Azure Management Group ID.
    billing_period_name = 'billing_period_name_example' # str | Billing Period Name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-10-01.

    try:
        api_response = api_instance.aggregated_cost_get_for_billing_period_by_management_group(management_group_id, billing_period_name, api_version)
        print("The response of AggregatedCostApi->aggregated_cost_get_for_billing_period_by_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AggregatedCostApi->aggregated_cost_get_for_billing_period_by_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_group_id** | **str**| Azure Management Group ID. | 
 **billing_period_name** | **str**| Billing Period Name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-10-01. | 

### Return type

[**ManagementGroupAggregatedCostResult**](ManagementGroupAggregatedCostResult.md)

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

