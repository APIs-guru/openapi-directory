# openapi_client.CustomersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customers_get**](CustomersApi.md#customers_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName} | 
[**customers_list_by_billing_account**](CustomersApi.md#customers_list_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers | 
[**customers_list_by_billing_profile**](CustomersApi.md#customers_list_by_billing_profile) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers | 


# **customers_get**
> Customer customers_get(api_version, billing_account_name, customer_name, expand=expand)



Gets a customer by its id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.customer import Customer
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
    api_instance = openapi_client.CustomersApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    customer_name = 'customer_name_example' # str | Customer name.
    expand = 'expand_example' # str | May be used to expand enabledAzurePlans, resellers. (optional)

    try:
        api_response = api_instance.customers_get(api_version, billing_account_name, customer_name, expand=expand)
        print("The response of CustomersApi->customers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **customer_name** | **str**| Customer name. | 
 **expand** | **str**| May be used to expand enabledAzurePlans, resellers. | [optional] 

### Return type

[**Customer**](Customer.md)

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

# **customers_list_by_billing_account**
> CustomerListResult customers_list_by_billing_account(api_version, billing_account_name, filter=filter, skiptoken=skiptoken)



Lists customers which the current user can work with on-behalf of a partner.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.customer_list_result import CustomerListResult
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
    api_instance = openapi_client.CustomersApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    filter = 'filter_example' # str | May be used to filter the list of customers. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.customers_list_by_billing_account(api_version, billing_account_name, filter=filter, skiptoken=skiptoken)
        print("The response of CustomersApi->customers_list_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_list_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **filter** | **str**| May be used to filter the list of customers. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 

### Return type

[**CustomerListResult**](CustomerListResult.md)

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

# **customers_list_by_billing_profile**
> CustomerListResult customers_list_by_billing_profile(api_version, billing_account_name, billing_profile_name, filter=filter, skiptoken=skiptoken)



Lists customers by billing profile which the current user can work with on-behalf of a partner.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.customer_list_result import CustomerListResult
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
    api_instance = openapi_client.CustomersApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    filter = 'filter_example' # str | May be used to filter the list of customers. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.customers_list_by_billing_profile(api_version, billing_account_name, billing_profile_name, filter=filter, skiptoken=skiptoken)
        print("The response of CustomersApi->customers_list_by_billing_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_list_by_billing_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **filter** | **str**| May be used to filter the list of customers. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 

### Return type

[**CustomerListResult**](CustomerListResult.md)

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

