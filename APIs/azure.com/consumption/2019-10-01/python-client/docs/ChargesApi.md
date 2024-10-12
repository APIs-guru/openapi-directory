# openapi_client.ChargesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**charges_list**](ChargesApi.md#charges_list) | **GET** /{scope}/providers/Microsoft.Consumption/charges | 


# **charges_list**
> ChargesListResult charges_list(scope, api_version, start_date=start_date, end_date=end_date, filter=filter, apply=apply)



Lists the charges based for the defined scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.charges_list_result import ChargesListResult
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
    api_instance = openapi_client.ChargesApi(api_client)
    scope = 'scope_example' # str | The scope associated with charges operations. This includes '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope. For department and enrollment accounts, you can also add billing period to the scope using '/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'. For e.g. to specify billing period at department scope use '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'. Also, Modern Commerce Account scopes are '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for billingAccount scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01.
    start_date = 'start_date_example' # str | Start date (optional)
    end_date = 'end_date_example' # str | End date (optional)
    filter = 'filter_example' # str | May be used to filter charges by properties/usageEnd (Utc time), properties/usageStart (Utc time). The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)
    apply = 'apply_example' # str | May be used to group charges for billingAccount scope by properties/billingProfileId, properties/invoiceSectionId, properties/customerId (specific for Partner Led), or for billingProfile scope by properties/invoiceSectionId. (optional)

    try:
        api_response = api_instance.charges_list(scope, api_version, start_date=start_date, end_date=end_date, filter=filter, apply=apply)
        print("The response of ChargesApi->charges_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargesApi->charges_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope associated with charges operations. This includes &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}&#39; for Department scope, and &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}&#39; for EnrollmentAccount scope. For department and enrollment accounts, you can also add billing period to the scope using &#39;/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}&#39;. For e.g. to specify billing period at department scope use &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}&#39;. Also, Modern Commerce Account scopes are &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}&#39; for billingAccount scope, &#39;/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}&#39; for billingProfile scope, &#39;providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}&#39; for invoiceSection scope, and &#39;providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}&#39; specific for partners. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01. | 
 **start_date** | **str**| Start date | [optional] 
 **end_date** | **str**| End date | [optional] 
 **filter** | **str**| May be used to filter charges by properties/usageEnd (Utc time), properties/usageStart (Utc time). The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 
 **apply** | **str**| May be used to group charges for billingAccount scope by properties/billingProfileId, properties/invoiceSectionId, properties/customerId (specific for Partner Led), or for billingProfile scope by properties/invoiceSectionId. | [optional] 

### Return type

[**ChargesListResult**](ChargesListResult.md)

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

