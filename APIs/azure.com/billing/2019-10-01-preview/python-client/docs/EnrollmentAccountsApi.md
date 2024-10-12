# openapi_client.EnrollmentAccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enrollment_accounts_get_by_enrollment_account_id**](EnrollmentAccountsApi.md#enrollment_accounts_get_by_enrollment_account_id) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName} | 
[**enrollment_accounts_list_by_billing_account_name**](EnrollmentAccountsApi.md#enrollment_accounts_list_by_billing_account_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts | 


# **enrollment_accounts_get_by_enrollment_account_id**
> EnrollmentAccount enrollment_accounts_get_by_enrollment_account_id(api_version, billing_account_name, enrollment_account_name, expand=expand, filter=filter)



Get the enrollment account by id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.enrollment_account import EnrollmentAccount
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
    api_instance = openapi_client.EnrollmentAccountsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    enrollment_account_name = 'enrollment_account_name_example' # str | Enrollment Account Id.
    expand = 'expand_example' # str | May be used to expand the Department. (optional)
    filter = 'filter_example' # str | The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.enrollment_accounts_get_by_enrollment_account_id(api_version, billing_account_name, enrollment_account_name, expand=expand, filter=filter)
        print("The response of EnrollmentAccountsApi->enrollment_accounts_get_by_enrollment_account_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrollmentAccountsApi->enrollment_accounts_get_by_enrollment_account_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **enrollment_account_name** | **str**| Enrollment Account Id. | 
 **expand** | **str**| May be used to expand the Department. | [optional] 
 **filter** | **str**| The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**EnrollmentAccount**](EnrollmentAccount.md)

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

# **enrollment_accounts_list_by_billing_account_name**
> EnrollmentAccountListResult enrollment_accounts_list_by_billing_account_name(api_version, billing_account_name, expand=expand, filter=filter)



Lists all Enrollment Accounts for a user which he has access to.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.enrollment_account_list_result import EnrollmentAccountListResult
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
    api_instance = openapi_client.EnrollmentAccountsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    expand = 'expand_example' # str | May be used to expand the department. (optional)
    filter = 'filter_example' # str | The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.enrollment_accounts_list_by_billing_account_name(api_version, billing_account_name, expand=expand, filter=filter)
        print("The response of EnrollmentAccountsApi->enrollment_accounts_list_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrollmentAccountsApi->enrollment_accounts_list_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **expand** | **str**| May be used to expand the department. | [optional] 
 **filter** | **str**| The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**EnrollmentAccountListResult**](EnrollmentAccountListResult.md)

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

