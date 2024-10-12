# openapi_client.QueryApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query_usage_by_scope**](QueryApi.md#query_usage_by_scope) | **POST** /{scope}/providers/Microsoft.CostManagement/query | 


# **query_usage_by_scope**
> QueryResult query_usage_by_scope(scope, api_version, parameters)



Query the usage data for scope defined.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_definition import QueryDefinition
from openapi_client.models.query_result import QueryResult
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
    scope = 'scope_example' # str | The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope and '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope..
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-05-31.
    parameters = openapi_client.QueryDefinition() # QueryDefinition | Parameters supplied to the CreateOrUpdate Query Config operation.

    try:
        api_response = api_instance.query_usage_by_scope(scope, api_version, parameters)
        print("The response of QueryApi->query_usage_by_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->query_usage_by_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope associated with query and export operations. This includes &#39;/subscriptions/{subscriptionId}/&#39; for subscription scope, &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39; for resourceGroup scope, &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}&#39; for Billing Account scope and &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}&#39; for Department scope, &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}&#39; for EnrollmentAccount scope and &#39;/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope.. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-05-31. | 
 **parameters** | [**QueryDefinition**](QueryDefinition.md)| Parameters supplied to the CreateOrUpdate Query Config operation. | 

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

