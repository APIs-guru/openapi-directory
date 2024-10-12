# openapi_client.PaymentDetailsApi

All URIs are relative to *https://openbanking.org.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_domestic_payments_domestic_payment_id_payment_details**](PaymentDetailsApi.md#get_domestic_payments_domestic_payment_id_payment_details) | **GET** /domestic-payments/{DomesticPaymentId}/payment-details | Get Payment Details
[**get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details**](PaymentDetailsApi.md#get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details) | **GET** /domestic-scheduled-payments/{DomesticScheduledPaymentId}/payment-details | Get Payment Details
[**get_domestic_standing_orders_domestic_standing_order_id_payment_details**](PaymentDetailsApi.md#get_domestic_standing_orders_domestic_standing_order_id_payment_details) | **GET** /domestic-standing-orders/{DomesticStandingOrderId}/payment-details | Get Payment Details
[**get_file_payments_file_payment_id_payment_details**](PaymentDetailsApi.md#get_file_payments_file_payment_id_payment_details) | **GET** /file-payments/{FilePaymentId}/payment-details | Get Payment Details
[**get_international_payments_international_payment_id_payment_details**](PaymentDetailsApi.md#get_international_payments_international_payment_id_payment_details) | **GET** /international-payments/{InternationalPaymentId}/payment-details | Get Payment Details
[**get_international_scheduled_payments_international_scheduled_payment_id_payment_details**](PaymentDetailsApi.md#get_international_scheduled_payments_international_scheduled_payment_id_payment_details) | **GET** /international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details | Get Payment Details
[**get_international_standing_orders_international_standing_order_payment_id_payment_details**](PaymentDetailsApi.md#get_international_standing_orders_international_standing_order_payment_id_payment_details) | **GET** /international-standing-orders/{InternationalStandingOrderPaymentId}/payment-details | Get Payment Details


# **get_domestic_payments_domestic_payment_id_payment_details**
> OBWritePaymentDetailsResponse1 get_domestic_payments_domestic_payment_id_payment_details(domestic_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Payment Details

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_payment_details_response1 import OBWritePaymentDetailsResponse1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openbanking.org.uk
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openbanking.org.uk"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentDetailsApi(api_client)
    domestic_payment_id = 'domestic_payment_id_example' # str | DomesticPaymentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Payment Details
        api_response = api_instance.get_domestic_payments_domestic_payment_id_payment_details(domestic_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of PaymentDetailsApi->get_domestic_payments_domestic_payment_id_payment_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentDetailsApi->get_domestic_payments_domestic_payment_id_payment_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domestic_payment_id** | **str**| DomesticPaymentId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWritePaymentDetailsResponse1**](OBWritePaymentDetailsResponse1.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Details Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details**
> OBWritePaymentDetailsResponse1 get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details(domestic_scheduled_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Payment Details

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_payment_details_response1 import OBWritePaymentDetailsResponse1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openbanking.org.uk
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openbanking.org.uk"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentDetailsApi(api_client)
    domestic_scheduled_payment_id = 'domestic_scheduled_payment_id_example' # str | DomesticScheduledPaymentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Payment Details
        api_response = api_instance.get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details(domestic_scheduled_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of PaymentDetailsApi->get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentDetailsApi->get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domestic_scheduled_payment_id** | **str**| DomesticScheduledPaymentId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWritePaymentDetailsResponse1**](OBWritePaymentDetailsResponse1.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Details Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domestic_standing_orders_domestic_standing_order_id_payment_details**
> OBWritePaymentDetailsResponse1 get_domestic_standing_orders_domestic_standing_order_id_payment_details(domestic_standing_order_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Payment Details

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_payment_details_response1 import OBWritePaymentDetailsResponse1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openbanking.org.uk
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openbanking.org.uk"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentDetailsApi(api_client)
    domestic_standing_order_id = 'domestic_standing_order_id_example' # str | DomesticStandingOrderId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Payment Details
        api_response = api_instance.get_domestic_standing_orders_domestic_standing_order_id_payment_details(domestic_standing_order_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of PaymentDetailsApi->get_domestic_standing_orders_domestic_standing_order_id_payment_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentDetailsApi->get_domestic_standing_orders_domestic_standing_order_id_payment_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domestic_standing_order_id** | **str**| DomesticStandingOrderId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWritePaymentDetailsResponse1**](OBWritePaymentDetailsResponse1.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Details Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_file_payments_file_payment_id_payment_details**
> OBWritePaymentDetailsResponse1 get_file_payments_file_payment_id_payment_details(file_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Payment Details

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_payment_details_response1 import OBWritePaymentDetailsResponse1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openbanking.org.uk
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openbanking.org.uk"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentDetailsApi(api_client)
    file_payment_id = 'file_payment_id_example' # str | FilePaymentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Payment Details
        api_response = api_instance.get_file_payments_file_payment_id_payment_details(file_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of PaymentDetailsApi->get_file_payments_file_payment_id_payment_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentDetailsApi->get_file_payments_file_payment_id_payment_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_payment_id** | **str**| FilePaymentId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWritePaymentDetailsResponse1**](OBWritePaymentDetailsResponse1.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Details Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_international_payments_international_payment_id_payment_details**
> OBWritePaymentDetailsResponse1 get_international_payments_international_payment_id_payment_details(international_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Payment Details

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_payment_details_response1 import OBWritePaymentDetailsResponse1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openbanking.org.uk
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openbanking.org.uk"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentDetailsApi(api_client)
    international_payment_id = 'international_payment_id_example' # str | InternationalPaymentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Payment Details
        api_response = api_instance.get_international_payments_international_payment_id_payment_details(international_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of PaymentDetailsApi->get_international_payments_international_payment_id_payment_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentDetailsApi->get_international_payments_international_payment_id_payment_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **international_payment_id** | **str**| InternationalPaymentId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWritePaymentDetailsResponse1**](OBWritePaymentDetailsResponse1.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Details Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_international_scheduled_payments_international_scheduled_payment_id_payment_details**
> OBWritePaymentDetailsResponse1 get_international_scheduled_payments_international_scheduled_payment_id_payment_details(international_scheduled_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Payment Details

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_payment_details_response1 import OBWritePaymentDetailsResponse1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openbanking.org.uk
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openbanking.org.uk"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentDetailsApi(api_client)
    international_scheduled_payment_id = 'international_scheduled_payment_id_example' # str | InternationalScheduledPaymentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Payment Details
        api_response = api_instance.get_international_scheduled_payments_international_scheduled_payment_id_payment_details(international_scheduled_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of PaymentDetailsApi->get_international_scheduled_payments_international_scheduled_payment_id_payment_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentDetailsApi->get_international_scheduled_payments_international_scheduled_payment_id_payment_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **international_scheduled_payment_id** | **str**| InternationalScheduledPaymentId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWritePaymentDetailsResponse1**](OBWritePaymentDetailsResponse1.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Details Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_international_standing_orders_international_standing_order_payment_id_payment_details**
> OBWritePaymentDetailsResponse1 get_international_standing_orders_international_standing_order_payment_id_payment_details(international_standing_order_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Payment Details

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_payment_details_response1 import OBWritePaymentDetailsResponse1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openbanking.org.uk
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openbanking.org.uk"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentDetailsApi(api_client)
    international_standing_order_payment_id = 'international_standing_order_payment_id_example' # str | InternationalStandingOrderPaymentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Payment Details
        api_response = api_instance.get_international_standing_orders_international_standing_order_payment_id_payment_details(international_standing_order_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of PaymentDetailsApi->get_international_standing_orders_international_standing_order_payment_id_payment_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentDetailsApi->get_international_standing_orders_international_standing_order_payment_id_payment_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **international_standing_order_payment_id** | **str**| InternationalStandingOrderPaymentId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWritePaymentDetailsResponse1**](OBWritePaymentDetailsResponse1.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Details Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

