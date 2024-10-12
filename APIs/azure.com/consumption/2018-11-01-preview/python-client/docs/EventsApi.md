# openapi_client.EventsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**events_by_billing_profile_list**](EventsApi.md#events_by_billing_profile_list) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/events | 


# **events_by_billing_profile_list**
> Events events_by_billing_profile_list(billing_account_id, billing_profile_id, api_version, start_date, end_date)



Lists the events by billingAccountId and billingProfileId for given start and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.events import Events
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
    api_instance = openapi_client.EventsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    billing_profile_id = 'billing_profile_id_example' # str | Billing Profile Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    start_date = 'start_date_example' # str | Start date
    end_date = 'end_date_example' # str | End date

    try:
        api_response = api_instance.events_by_billing_profile_list(billing_account_id, billing_profile_id, api_version, start_date, end_date)
        print("The response of EventsApi->events_by_billing_profile_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_by_billing_profile_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| BillingAccount ID | 
 **billing_profile_id** | **str**| Billing Profile Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **start_date** | **str**| Start date | 
 **end_date** | **str**| End date | 

### Return type

[**Events**](Events.md)

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

