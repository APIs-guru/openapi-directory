# openapi_client.PaymentGatewayApi

All URIs are relative to *http://api-test.qualpay.com/pg*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorization**](PaymentGatewayApi.md#authorization) | **POST** /auth | Authorize Transaction
[**batch_close**](PaymentGatewayApi.md#batch_close) | **POST** /batchClose | Close Batch
[**capture**](PaymentGatewayApi.md#capture) | **POST** /capture/{pgIdOrig} | Capture an Authorized Transaction
[**credit**](PaymentGatewayApi.md#credit) | **POST** /credit | Issue Credit to Cardholder
[**expire**](PaymentGatewayApi.md#expire) | **POST** /expireToken | Expire Token
[**force**](PaymentGatewayApi.md#force) | **POST** /force | Force Transaction Approval
[**get_card_type_information_**](PaymentGatewayApi.md#get_card_type_information_) | **POST** /ardef | Get Card type Information for Visa, Mastercard, and Discover
[**recharge**](PaymentGatewayApi.md#recharge) | **POST** /recharge/{pgIdOrig} | Recharge Previously Settled Transaction
[**refund**](PaymentGatewayApi.md#refund) | **POST** /refund/{pgIdOrig} | Refund Previously Captured Transaction
[**sale**](PaymentGatewayApi.md#sale) | **POST** /sale | Sale (Auth + Capture)
[**send_receipt**](PaymentGatewayApi.md#send_receipt) | **POST** /emailReceipt/{pgId} | Send Transaction Receipt Email
[**tokenize**](PaymentGatewayApi.md#tokenize) | **POST** /tokenize | Tokenize Card
[**verify**](PaymentGatewayApi.md#verify) | **POST** /verify | Verify Card
[**void**](PaymentGatewayApi.md#void) | **POST** /void/{pgIdOrig} | Void a Previously Authorized Transaction


# **authorization**
> PGApiTransactionResponse authorization(body)

Authorize Transaction

Authorizes a credit card for capture at a later time. An authorized transaction will continue to be open until it expires or a capture message is received. Authorizations are automatically voided if they are not captured within 28 days, although most issuing banks will release the hold after 24 hours in retail environments or 7 days in card not present environments.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_transaction_request import PGApiTransactionRequest
from openapi_client.models.pg_api_transaction_response import PGApiTransactionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    body = openapi_client.PGApiTransactionRequest() # PGApiTransactionRequest | Payment Gateway Authorization Request

    try:
        # Authorize Transaction
        api_response = api_instance.authorization(body)
        print("The response of PaymentGatewayApi->authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->authorization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PGApiTransactionRequest**](PGApiTransactionRequest.md)| Payment Gateway Authorization Request | 

### Return type

[**PGApiTransactionResponse**](PGApiTransactionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_close**
> PGApiBatchCloseResponse batch_close(body)

Close Batch

Closes a batch. Use this request when the timing of the batch close needs to be controlled rather than relying on the once-daily automatic batch close which is 9 PM Pacific by default, and can be changed in the Qualpay Manager administration settings.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_batch_close_request import PGApiBatchCloseRequest
from openapi_client.models.pg_api_batch_close_response import PGApiBatchCloseResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    body = openapi_client.PGApiBatchCloseRequest() # PGApiBatchCloseRequest | Payment Gateway Batch Close Request

    try:
        # Close Batch
        api_response = api_instance.batch_close(body)
        print("The response of PaymentGatewayApi->batch_close:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->batch_close: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PGApiBatchCloseRequest**](PGApiBatchCloseRequest.md)| Payment Gateway Batch Close Request | 

### Return type

[**PGApiBatchCloseResponse**](PGApiBatchCloseResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capture**
> PGApiCaptureResponse capture(pg_id_orig, body)

Capture an Authorized Transaction

Captures an authorized transaction for any amount up to the amount originally authorized. An authorized transaction can only be captured once.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_capture_request import PGApiCaptureRequest
from openapi_client.models.pg_api_capture_response import PGApiCaptureResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    pg_id_orig = 'pg_id_orig_example' # str | pgIdOrig
    body = openapi_client.PGApiCaptureRequest() # PGApiCaptureRequest | Payment Gateway Capture Request

    try:
        # Capture an Authorized Transaction
        api_response = api_instance.capture(pg_id_orig, body)
        print("The response of PaymentGatewayApi->capture:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->capture: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pg_id_orig** | **str**| pgIdOrig | 
 **body** | [**PGApiCaptureRequest**](PGApiCaptureRequest.md)| Payment Gateway Capture Request | 

### Return type

[**PGApiCaptureResponse**](PGApiCaptureResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **credit**
> PGApiTransactionResponse credit(body)

Issue Credit to Cardholder

Issues an unlinked credit. Credit requests require that the cardholder data is  provided in the request. Credits are only available during the first 30 days of account opening unless you contact Qualpay support to make other arrangements. The refund request should generally be used to return money to the cardholder, as it is a reversal of a previously captured transaction. A refund request is linked to the original transaction which is helpful for reconciliation purposes.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_transaction_request import PGApiTransactionRequest
from openapi_client.models.pg_api_transaction_response import PGApiTransactionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    body = openapi_client.PGApiTransactionRequest() # PGApiTransactionRequest | Payment Gateway Credit Request

    try:
        # Issue Credit to Cardholder
        api_response = api_instance.credit(body)
        print("The response of PaymentGatewayApi->credit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->credit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PGApiTransactionRequest**](PGApiTransactionRequest.md)| Payment Gateway Credit Request | 

### Return type

[**PGApiTransactionResponse**](PGApiTransactionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expire**
> PGApiExpireTokenResponse expire(body)

Expire Token

Once expired, the token (card_id) is no longer valid for use in future transactions.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_expire_token_request import PGApiExpireTokenRequest
from openapi_client.models.pg_api_expire_token_response import PGApiExpireTokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    body = openapi_client.PGApiExpireTokenRequest() # PGApiExpireTokenRequest | Payment Gateway Expire Token Request

    try:
        # Expire Token
        api_response = api_instance.expire(body)
        print("The response of PaymentGatewayApi->expire:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->expire: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PGApiExpireTokenRequest**](PGApiExpireTokenRequest.md)| Payment Gateway Expire Token Request | 

### Return type

[**PGApiExpireTokenResponse**](PGApiExpireTokenResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **force**
> PGApiTransactionResponse force(body)

Force Transaction Approval

Forces an approval, used when an online authorization request received a 'declined' reason code and you have received an authorization from a voice or automated response (ARU) system. The required fields are the same as a sale or authorization request, except that the expiration date (exp_date) is not required, and the 6-character authorization code (auth_code) is required.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_transaction_request import PGApiTransactionRequest
from openapi_client.models.pg_api_transaction_response import PGApiTransactionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    body = openapi_client.PGApiTransactionRequest() # PGApiTransactionRequest | Payment Gateway Force Request

    try:
        # Force Transaction Approval
        api_response = api_instance.force(body)
        print("The response of PaymentGatewayApi->force:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->force: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PGApiTransactionRequest**](PGApiTransactionRequest.md)| Payment Gateway Force Request | 

### Return type

[**PGApiTransactionResponse**](PGApiTransactionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_card_type_information_**
> ArdefResponse get_card_type_information_(body)

Get Card type Information for Visa, Mastercard, and Discover

Gets Card type information for Visa, Mastercard, and Discover. Useful if you prohibit or allow certain activity based on card type. For example, you may not want to allow a subscription to be created using a prepaid card.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.ardef_request import ArdefRequest
from openapi_client.models.ardef_response import ArdefResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    body = openapi_client.ArdefRequest() # ArdefRequest | Card Type Request

    try:
        # Get Card type Information for Visa, Mastercard, and Discover
        api_response = api_instance.get_card_type_information_(body)
        print("The response of PaymentGatewayApi->get_card_type_information_:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->get_card_type_information_: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ArdefRequest**](ArdefRequest.md)| Card Type Request | 

### Return type

[**ArdefResponse**](ArdefResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recharge**
> PGApiRechargeResponse recharge(pg_id_orig, body)

Recharge Previously Settled Transaction

Creates a new sale transaction using the cardholder data from a previous successful transaction.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_recharge_request import PGApiRechargeRequest
from openapi_client.models.pg_api_recharge_response import PGApiRechargeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    pg_id_orig = 'pg_id_orig_example' # str | pgIdOrig
    body = openapi_client.PGApiRechargeRequest() # PGApiRechargeRequest | Payment Gateway Recharge Request

    try:
        # Recharge Previously Settled Transaction
        api_response = api_instance.recharge(pg_id_orig, body)
        print("The response of PaymentGatewayApi->recharge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->recharge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pg_id_orig** | **str**| pgIdOrig | 
 **body** | [**PGApiRechargeRequest**](PGApiRechargeRequest.md)| Payment Gateway Recharge Request | 

### Return type

[**PGApiRechargeResponse**](PGApiRechargeResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refund**
> PGApiRefundResponse refund(pg_id_orig, body)

Refund Previously Captured Transaction

Returns money to the cardholder from a previously captured transaction. Multiple refunds are allowed per captured transaction, provided that the sum of all refunds does not exceed the original captured transaction amount. Authorizations that have not been captured are not eligible for a refund.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_refund_request import PGApiRefundRequest
from openapi_client.models.pg_api_refund_response import PGApiRefundResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    pg_id_orig = 'pg_id_orig_example' # str | pgIdOrig
    body = openapi_client.PGApiRefundRequest() # PGApiRefundRequest | Payment Gateway Refund Request

    try:
        # Refund Previously Captured Transaction
        api_response = api_instance.refund(pg_id_orig, body)
        print("The response of PaymentGatewayApi->refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->refund: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pg_id_orig** | **str**| pgIdOrig | 
 **body** | [**PGApiRefundRequest**](PGApiRefundRequest.md)| Payment Gateway Refund Request | 

### Return type

[**PGApiRefundResponse**](PGApiRefundResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sale**
> PGApiTransactionResponse sale(body)

Sale (Auth + Capture)

Requests authorization, and, if approved, will immediately capture the transaction to be included in the next batch close. This transaction type is used in card-present environments, and also card-not-present environments where no physical goods are being shipped.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_transaction_request import PGApiTransactionRequest
from openapi_client.models.pg_api_transaction_response import PGApiTransactionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    body = openapi_client.PGApiTransactionRequest() # PGApiTransactionRequest | Payment Gateway Sale Request

    try:
        # Sale (Auth + Capture)
        api_response = api_instance.sale(body)
        print("The response of PaymentGatewayApi->sale:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->sale: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PGApiTransactionRequest**](PGApiTransactionRequest.md)| Payment Gateway Sale Request | 

### Return type

[**PGApiTransactionResponse**](PGApiTransactionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_receipt**
> PGApiEmailReceiptResponse send_receipt(pg_id, body)

Send Transaction Receipt Email

Sends the transaction receipt to multiple email addresses. Receipts can be sent only for successful transactions.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_email_receipt_request import PGApiEmailReceiptRequest
from openapi_client.models.pg_api_email_receipt_response import PGApiEmailReceiptResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    pg_id = 'pg_id_example' # str | pgId
    body = openapi_client.PGApiEmailReceiptRequest() # PGApiEmailReceiptRequest | Payment Gateway Email Receipt Request

    try:
        # Send Transaction Receipt Email
        api_response = api_instance.send_receipt(pg_id, body)
        print("The response of PaymentGatewayApi->send_receipt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->send_receipt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pg_id** | **str**| pgId | 
 **body** | [**PGApiEmailReceiptRequest**](PGApiEmailReceiptRequest.md)| Payment Gateway Email Receipt Request | 

### Return type

[**PGApiEmailReceiptResponse**](PGApiEmailReceiptResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokenize**
> PGApiTokenizeResponse tokenize(body)

Tokenize Card

Once stored, a unique card_id is returned for use in future transactions. Optionally, tokenization can be requested in an authorization, verify, force, credit, or sale request by sending the tokenize field set to true.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_tokenize_request import PGApiTokenizeRequest
from openapi_client.models.pg_api_tokenize_response import PGApiTokenizeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    body = openapi_client.PGApiTokenizeRequest() # PGApiTokenizeRequest | Payment Gateway Tokenize Request

    try:
        # Tokenize Card
        api_response = api_instance.tokenize(body)
        print("The response of PaymentGatewayApi->tokenize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->tokenize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PGApiTokenizeRequest**](PGApiTokenizeRequest.md)| Payment Gateway Tokenize Request | 

### Return type

[**PGApiTokenizeResponse**](PGApiTokenizeResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify**
> PGApiVerifyResponse verify(body)

Verify Card

A verify request will return success if the cardholder information was verified by the issuer. If AVS or CVV data is included in the message, then the AVS or CVV result code will be returned in the response message. This is useful if you want to determine if you have been presented with a valid card, but are not ready to authorize the card.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_verify_request import PGApiVerifyRequest
from openapi_client.models.pg_api_verify_response import PGApiVerifyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    body = openapi_client.PGApiVerifyRequest() # PGApiVerifyRequest | Payment Gateway Card Verify Request

    try:
        # Verify Card
        api_response = api_instance.verify(body)
        print("The response of PaymentGatewayApi->verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PGApiVerifyRequest**](PGApiVerifyRequest.md)| Payment Gateway Card Verify Request | 

### Return type

[**PGApiVerifyResponse**](PGApiVerifyResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **void**
> PGApiVoidResponse void(pg_id_orig, body)

Void a Previously Authorized Transaction

Authorizations can be voided at any time until Qualpay automatically voids them at 28 days. Captured transactions can be voided until the batch is closed. If your batch closes and you did not void the transaction in time, you may make a refund request.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pg_api_void_request import PGApiVoidRequest
from openapi_client.models.pg_api_void_response import PGApiVoidResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api-test.qualpay.com/pg
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api-test.qualpay.com/pg"
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
    api_instance = openapi_client.PaymentGatewayApi(api_client)
    pg_id_orig = 'pg_id_orig_example' # str | pgIdOrig
    body = openapi_client.PGApiVoidRequest() # PGApiVoidRequest | Payment Gateway Void Request

    try:
        # Void a Previously Authorized Transaction
        api_response = api_instance.void(pg_id_orig, body)
        print("The response of PaymentGatewayApi->void:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentGatewayApi->void: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pg_id_orig** | **str**| pgIdOrig | 
 **body** | [**PGApiVoidRequest**](PGApiVoidRequest.md)| Payment Gateway Void Request | 

### Return type

[**PGApiVoidResponse**](PGApiVoidResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Declined |  -  |
**500** | Internal Server Error |  -  |
**509** | Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

