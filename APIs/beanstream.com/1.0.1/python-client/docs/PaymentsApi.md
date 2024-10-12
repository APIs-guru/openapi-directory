# openapi_client.PaymentsApi

All URIs are relative to *https://www.beanstream.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payments_post**](PaymentsApi.md#payments_post) | **POST** /payments | Make Payment
[**payments_trans_id_completions_post**](PaymentsApi.md#payments_trans_id_completions_post) | **POST** /payments/{transId}/completions | Complete pre-auth
[**payments_trans_id_get**](PaymentsApi.md#payments_trans_id_get) | **GET** /payments/{transId} | Get payment
[**payments_trans_id_returns_post**](PaymentsApi.md#payments_trans_id_returns_post) | **POST** /payments/{transId}/returns | Return payment
[**payments_trans_id_void_post**](PaymentsApi.md#payments_trans_id_void_post) | **POST** /payments/{transId}/void | Void Transaction


# **payments_post**
> PaymentResponse payments_post(payment_request=payment_request)

Make Payment

Make a payment using credit card, cash, cheque, profile, or token. Each payment type has its own json definition passed in the body. For all payments you have the standard Billing, Shipping, Comments, etc. fields that are optional. Only the amount is required along with the payment data for card, cash, cheque, profile, and token. You must change the payment_method for each payment type. Credit Card - \"card\", Payment Profile - \"payment_profile\", Legato Token - \"token\", Cash - \"cash\", Cheque - \"cheque\", Interac - \"interac\"

### Example


```python
import openapi_client
from openapi_client.models.payment_request import PaymentRequest
from openapi_client.models.payment_response import PaymentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    payment_request = openapi_client.PaymentRequest() # PaymentRequest |  (optional)

    try:
        # Make Payment
        api_response = api_instance.payments_post(payment_request=payment_request)
        print("The response of PaymentsApi->payments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_request** | [**PaymentRequest**](PaymentRequest.md)|  | [optional] 

### Return type

[**PaymentResponse**](PaymentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment response containing the payment details as well as if the payment was approved or declined. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_trans_id_completions_post**
> PaymentResponse payments_trans_id_completions_post(trans_id, payment_request=payment_request)

Complete pre-auth

Complete a pre-authorized payment. The amount of the transaction to complete must be less than or equal to the original pre-auth amount. Complete must be set to true.

### Example


```python
import openapi_client
from openapi_client.models.payment_request import PaymentRequest
from openapi_client.models.payment_response import PaymentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    trans_id = 3.4 # float | The transaction id.
    payment_request = openapi_client.PaymentRequest() # PaymentRequest |  (optional)

    try:
        # Complete pre-auth
        api_response = api_instance.payments_trans_id_completions_post(trans_id, payment_request=payment_request)
        print("The response of PaymentsApi->payments_trans_id_completions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_trans_id_completions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trans_id** | **float**| The transaction id. | 
 **payment_request** | [**PaymentRequest**](PaymentRequest.md)|  | [optional] 

### Return type

[**PaymentResponse**](PaymentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment response containing the payment details as well as if the transaction was approved or declined. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_trans_id_get**
> Transaction payments_trans_id_get(trans_id)

Get payment

Get a previous payment (transaction).

### Example


```python
import openapi_client
from openapi_client.models.transaction import Transaction
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    trans_id = 3.4 # float | The transaction id.

    try:
        # Get payment
        api_response = api_instance.payments_trans_id_get(trans_id)
        print("The response of PaymentsApi->payments_trans_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_trans_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trans_id** | **float**| The transaction id. | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A transaction object. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_trans_id_returns_post**
> PaymentResponse payments_trans_id_returns_post(trans_id, var_return)

Return payment

Return payment.

### Example


```python
import openapi_client
from openapi_client.models.model_return import ModelReturn
from openapi_client.models.payment_response import PaymentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    trans_id = 3.4 # float | The transaction id.
    var_return = openapi_client.ModelReturn() # ModelReturn | 

    try:
        # Return payment
        api_response = api_instance.payments_trans_id_returns_post(trans_id, var_return)
        print("The response of PaymentsApi->payments_trans_id_returns_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_trans_id_returns_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trans_id** | **float**| The transaction id. | 
 **var_return** | [**ModelReturn**](ModelReturn.md)|  | 

### Return type

[**PaymentResponse**](PaymentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment response containing the payment details as well as if the transaction was approved or declined. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_trans_id_void_post**
> PaymentResponse payments_trans_id_void_post(trans_id, void)

Void Transaction

Void a transaction. You can void payments, returns, pre-auths, and completions. It will cancel that transaction.

### Example


```python
import openapi_client
from openapi_client.models.payment_response import PaymentResponse
from openapi_client.models.void import Void
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    trans_id = 3.4 # float | The transaction id to void.
    void = openapi_client.Void() # Void | 

    try:
        # Void Transaction
        api_response = api_instance.payments_trans_id_void_post(trans_id, void)
        print("The response of PaymentsApi->payments_trans_id_void_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_trans_id_void_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trans_id** | **float**| The transaction id to void. | 
 **void** | [**Void**](Void.md)|  | 

### Return type

[**PaymentResponse**](PaymentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment response containing the payment details as well as if the transaction was approved or declined. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

