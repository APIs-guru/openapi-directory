# openapi_client.EnrollmentAccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enrollment_accounts_get**](EnrollmentAccountsApi.md#enrollment_accounts_get) | **GET** /providers/Microsoft.Billing/enrollmentAccounts/{name} | 
[**enrollment_accounts_list**](EnrollmentAccountsApi.md#enrollment_accounts_list) | **GET** /providers/Microsoft.Billing/enrollmentAccounts | 


# **enrollment_accounts_get**
> EnrollmentAccount enrollment_accounts_get(name, api_version)



Gets a enrollment account by name.

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
    name = 'name_example' # str | Enrollment Account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-03-01-preview.

    try:
        api_response = api_instance.enrollment_accounts_get(name, api_version)
        print("The response of EnrollmentAccountsApi->enrollment_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrollmentAccountsApi->enrollment_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Enrollment Account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-03-01-preview. | 

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

# **enrollment_accounts_list**
> EnrollmentAccountListResult enrollment_accounts_list(api_version)



Lists the enrollment accounts the caller has access to.

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-03-01-preview.

    try:
        api_response = api_instance.enrollment_accounts_list(api_version)
        print("The response of EnrollmentAccountsApi->enrollment_accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrollmentAccountsApi->enrollment_accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-03-01-preview. | 

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

