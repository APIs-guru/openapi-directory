# openapi_client.TransactionsApi

All URIs are relative to *https://api.nextauth.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_transaction**](TransactionsApi.md#create_transaction) | **POST** /servers/{serverid}/sessions/transactions | Create a transaction to be approved within the current session.
[**get_transaction_result**](TransactionsApi.md#get_transaction_result) | **GET** /servers/{serverid}/transactions/{transactionid} | Get transaction result for a given transaction.


# **create_transaction**
> TransactionId create_transaction(serverid, x_nonce, msg)

Create a transaction to be approved within the current session.

Create a transaction for approval within the current session. Required permission: 'sessions'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.transaction import Transaction
from openapi_client.models.transaction_id import TransactionId
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session
    msg = openapi_client.Transaction() # Transaction | 

    try:
        # Create a transaction to be approved within the current session.
        api_response = api_instance.create_transaction(serverid, x_nonce, msg)
        print("The response of TransactionsApi->create_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->create_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 
 **msg** | [**Transaction**](Transaction.md)|  | 

### Return type

[**TransactionId**](TransactionId.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**403** | no account associated with this session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transaction_result**
> TransactionResult get_transaction_result(serverid, transactionid)

Get transaction result for a given transaction.

Get transaction result for a given transaction id. Required permission: 'sessions'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.transaction_result import TransactionResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    transactionid = 'transactionid_example' # str | Base64 encoded transaction id

    try:
        # Get transaction result for a given transaction.
        api_response = api_instance.get_transaction_result(serverid, transactionid)
        print("The response of TransactionsApi->get_transaction_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->get_transaction_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **transactionid** | **str**| Base64 encoded transaction id | 

### Return type

[**TransactionResult**](TransactionResult.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | no transaction with given id found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

