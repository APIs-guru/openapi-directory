# openapi_client.AccountsApi

All URIs are relative to *https://ob.nordigen.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieve_account_balances_v2**](AccountsApi.md#retrieve_account_balances_v2) | **GET** /api/v2/accounts/{id}/balances/ | 
[**retrieve_account_details_v2**](AccountsApi.md#retrieve_account_details_v2) | **GET** /api/v2/accounts/{id}/details/ | 
[**retrieve_account_metadata**](AccountsApi.md#retrieve_account_metadata) | **GET** /api/v2/accounts/{id}/ | 
[**retrieve_account_transactions_v22**](AccountsApi.md#retrieve_account_transactions_v22) | **GET** /api/v2/accounts/{id}/transactions/ | 


# **retrieve_account_balances_v2**
> Dict[str, object] retrieve_account_balances_v2(id)



Access account balances.  Balances will be returned in Berlin Group PSD2 format.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.retrieve_account_balances_v2(id)
        print("The response of AccountsApi->retrieve_account_balances_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->retrieve_account_balances_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**Dict[str, object]**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve account balances |  -  |
**400** | Date range error |  -  |
**401** | Failed Authentication |  -  |
**403** | Account Access Forbidden |  -  |
**404** | Account not found error |  -  |
**409** | Account state error |  -  |
**429** | Rate Limit Error |  -  |
**500** | Unknown Request Error |  -  |
**503** | Connection Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_account_details_v2**
> Dict[str, object] retrieve_account_details_v2(id)



Access account details.  Account details will be returned in Berlin Group PSD2 format.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.retrieve_account_details_v2(id)
        print("The response of AccountsApi->retrieve_account_details_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->retrieve_account_details_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**Dict[str, object]**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve account details |  -  |
**400** | Date range error |  -  |
**401** | Failed Authentication |  -  |
**403** | Account Access Forbidden |  -  |
**404** | Account not found error |  -  |
**409** | Account state error |  -  |
**429** | Rate Limit Error |  -  |
**500** | Unknown Request Error |  -  |
**503** | Connection Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_account_metadata**
> Account retrieve_account_metadata(id)



Access account metadata.  Information about the account record, such as the processing status and IBAN.  Account status is recalculated based on the error count in the latest req.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.retrieve_account_metadata(id)
        print("The response of AccountsApi->retrieve_account_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->retrieve_account_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**Account**](Account.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | sample account metadata |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Account not found error |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_account_transactions_v22**
> Dict[str, object] retrieve_account_transactions_v22(id, date_from=date_from, date_to=date_to)



Access account transactions.  Transactions will be returned in Berlin Group PSD2 format.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    id = 'id_example' # str | 
    date_from = '2023-01-21' # date |  (optional)
    date_to = '2023-04-21' # date |  (optional)

    try:
        api_response = api_instance.retrieve_account_transactions_v22(id, date_from=date_from, date_to=date_to)
        print("The response of AccountsApi->retrieve_account_transactions_v22:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->retrieve_account_transactions_v22: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **date_from** | **date**|  | [optional] 
 **date_to** | **date**|  | [optional] 

### Return type

**Dict[str, object]**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve account transactions |  -  |
**400** | Date range error |  -  |
**401** | Failed Authentication |  -  |
**403** | Account Access Forbidden |  -  |
**404** | Account not found error |  -  |
**409** | Account state error |  -  |
**429** | Rate Limit Error |  -  |
**500** | Unknown Request Error |  -  |
**503** | Connection Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

