# openapi_client.DimensionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dimensions_list_by_subscription**](DimensionsApi.md#dimensions_list_by_subscription) | **GET** /{scope}/providers/Microsoft.CostManagement/dimensions | 


# **dimensions_list_by_subscription**
> DimensionsListResult dimensions_list_by_subscription(scope, api_version, filter=filter, expand=expand, skiptoken=skiptoken, top=top)



Lists the dimensions by the defined scope.

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
    scope = 'scope_example' # str | The scope associated with dimension operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope and '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope..
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-05-31.
    filter = 'filter_example' # str | May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are 'eq','lt', 'gt', 'le', 'ge'. (optional)
    expand = 'expand_example' # str | May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N dimension data. (optional)

    try:
        api_response = api_instance.dimensions_list_by_subscription(scope, api_version, filter=filter, expand=expand, skiptoken=skiptoken, top=top)
        print("The response of DimensionsApi->dimensions_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DimensionsApi->dimensions_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope associated with dimension operations. This includes &#39;/subscriptions/{subscriptionId}/&#39; for subscription scope, &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39; for resourceGroup scope, &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}&#39; for Billing Account scope, &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}&#39; for Department scope, &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}&#39; for EnrollmentAccount scope and &#39;/providers/Microsoft.Management/managementGroups/{managementGroupId}&#39; for Management Group scope.. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-05-31. | 
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

