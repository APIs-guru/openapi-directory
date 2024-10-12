# openapi_client.TransactionApi

All URIs are relative to *https://go.netlicensing.io/core/v2/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_transaction**](TransactionApi.md#create_transaction) | **POST** /transaction | Create Transaction
[**get_transaction**](TransactionApi.md#get_transaction) | **GET** /transaction/{transactionNumber} | Get Transaction 
[**list_transactions**](TransactionApi.md#list_transactions) | **GET** /transaction | List Transactions
[**update_transaction**](TransactionApi.md#update_transaction) | **POST** /transaction/{transactionNumber} | Update Transaction


# **create_transaction**
> Netlicensing create_transaction(active, source, status, date_closed=date_closed, date_created=date_created, licensee_number=licensee_number, number=number, payment_method=payment_method)

Create Transaction

Creates a new Transaction

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionApi(api_client)
    active = True # bool | Always 'true' for Transactions
    source = 'source_example' # str | AUTO Transaction for internal use only
    status = 'status_example' # str | 
    date_closed = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    date_created = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    licensee_number = 'licensee_number_example' # str |  (optional)
    number = 'number_example' # str | Unique number (across all Products of a Vendor) that identifies the Transaction (optional)
    payment_method = 'payment_method_example' # str |  (optional)

    try:
        # Create Transaction
        api_response = api_instance.create_transaction(active, source, status, date_closed=date_closed, date_created=date_created, licensee_number=licensee_number, number=number, payment_method=payment_method)
        print("The response of TransactionApi->create_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->create_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| Always &#39;true&#39; for Transactions | 
 **source** | **str**| AUTO Transaction for internal use only | 
 **status** | **str**|  | 
 **date_closed** | **datetime**|  | [optional] 
 **date_created** | **datetime**|  | [optional] 
 **licensee_number** | **str**|  | [optional] 
 **number** | **str**| Unique number (across all Products of a Vendor) that identifies the Transaction | [optional] 
 **payment_method** | **str**|  | [optional] 

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transaction**
> Netlicensing get_transaction(transaction_number)

Get Transaction 

Return a Transaction by 'transactionNumber'

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionApi(api_client)
    transaction_number = 'transaction_number_example' # str | Unique number (across all Products of a Vendor) that identifies the Transaction

    try:
        # Get Transaction 
        api_response = api_instance.get_transaction(transaction_number)
        print("The response of TransactionApi->get_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->get_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_number** | **str**| Unique number (across all Products of a Vendor) that identifies the Transaction | 

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_transactions**
> List[Netlicensing] list_transactions()

List Transactions

Return a list of all Transactions for the current Vendor

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionApi(api_client)

    try:
        # List Transactions
        api_response = api_instance.list_transactions()
        print("The response of TransactionApi->list_transactions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->list_transactions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Netlicensing]**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_transaction**
> Netlicensing update_transaction(transaction_number, active=active, date_closed=date_closed, date_created=date_created, number=number, payment_method=payment_method, source=source, status=status)

Update Transaction

Sets the provided properties to a Transaction. Return an updated Transaction

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionApi(api_client)
    transaction_number = 'transaction_number_example' # str | Unique number (across all Products of a Vendor) that identifies the Transaction
    active = True # bool | Always 'true' for Transactions (optional)
    date_closed = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    date_created = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    number = 'number_example' # str | Unique number (across all Products of a Vendor) that identifies the Transaction (optional)
    payment_method = 'payment_method_example' # str |  (optional)
    source = 'source_example' # str | AUTO Transaction for internal use only (optional)
    status = 'status_example' # str |  (optional)

    try:
        # Update Transaction
        api_response = api_instance.update_transaction(transaction_number, active=active, date_closed=date_closed, date_created=date_created, number=number, payment_method=payment_method, source=source, status=status)
        print("The response of TransactionApi->update_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->update_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_number** | **str**| Unique number (across all Products of a Vendor) that identifies the Transaction | 
 **active** | **bool**| Always &#39;true&#39; for Transactions | [optional] 
 **date_closed** | **datetime**|  | [optional] 
 **date_created** | **datetime**|  | [optional] 
 **number** | **str**| Unique number (across all Products of a Vendor) that identifies the Transaction | [optional] 
 **payment_method** | **str**|  | [optional] 
 **source** | **str**| AUTO Transaction for internal use only | [optional] 
 **status** | **str**|  | [optional] 

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

