# openapi_client.InternationalPaymentsApi

All URIs are relative to *https://openbanking.org.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_international_payment_consents**](InternationalPaymentsApi.md#create_international_payment_consents) | **POST** /international-payment-consents | Create International Payment Consents
[**create_international_payments**](InternationalPaymentsApi.md#create_international_payments) | **POST** /international-payments | Create International Payments
[**get_international_payment_consents_consent_id**](InternationalPaymentsApi.md#get_international_payment_consents_consent_id) | **GET** /international-payment-consents/{ConsentId} | Get International Payment Consents
[**get_international_payment_consents_consent_id_funds_confirmation**](InternationalPaymentsApi.md#get_international_payment_consents_consent_id_funds_confirmation) | **GET** /international-payment-consents/{ConsentId}/funds-confirmation | Get International Payment Consents Funds Confirmation
[**get_international_payments_international_payment_id**](InternationalPaymentsApi.md#get_international_payments_international_payment_id) | **GET** /international-payments/{InternationalPaymentId} | Get International Payments


# **create_international_payment_consents**
> OBWriteInternationalConsentResponse6 create_international_payment_consents(authorization, x_idempotency_key, x_jws_signature, ob_write_international_consent5, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Create International Payment Consents

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_international_consent5 import OBWriteInternationalConsent5
from openapi_client.models.ob_write_international_consent_response6 import OBWriteInternationalConsentResponse6
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
    api_instance = openapi_client.InternationalPaymentsApi(api_client)
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_idempotency_key = 'x_idempotency_key_example' # str | Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours. 
    x_jws_signature = 'x_jws_signature_example' # str | A detached JWS signature of the body of the payload.
    ob_write_international_consent5 = openapi_client.OBWriteInternationalConsent5() # OBWriteInternationalConsent5 | Default
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Create International Payment Consents
        api_response = api_instance.create_international_payment_consents(authorization, x_idempotency_key, x_jws_signature, ob_write_international_consent5, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of InternationalPaymentsApi->create_international_payment_consents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternationalPaymentsApi->create_international_payment_consents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_idempotency_key** | **str**| Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours.  | 
 **x_jws_signature** | **str**| A detached JWS signature of the body of the payload. | 
 **ob_write_international_consent5** | [**OBWriteInternationalConsent5**](OBWriteInternationalConsent5.md)| Default | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWriteInternationalConsentResponse6**](OBWriteInternationalConsentResponse6.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: application/jose+jwe, application/json, application/json; charset=utf-8
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | International Payment Consents Created |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**415** | Unsupported Media Type |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_international_payments**
> OBWriteInternationalResponse5 create_international_payments(authorization, x_idempotency_key, x_jws_signature, ob_write_international3, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Create International Payments

### Example

* OAuth Authentication (PSUOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_international3 import OBWriteInternational3
from openapi_client.models.ob_write_international_response5 import OBWriteInternationalResponse5
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
    api_instance = openapi_client.InternationalPaymentsApi(api_client)
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_idempotency_key = 'x_idempotency_key_example' # str | Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours. 
    x_jws_signature = 'x_jws_signature_example' # str | A detached JWS signature of the body of the payload.
    ob_write_international3 = openapi_client.OBWriteInternational3() # OBWriteInternational3 | Default
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Create International Payments
        api_response = api_instance.create_international_payments(authorization, x_idempotency_key, x_jws_signature, ob_write_international3, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of InternationalPaymentsApi->create_international_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternationalPaymentsApi->create_international_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_idempotency_key** | **str**| Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours.  | 
 **x_jws_signature** | **str**| A detached JWS signature of the body of the payload. | 
 **ob_write_international3** | [**OBWriteInternational3**](OBWriteInternational3.md)| Default | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWriteInternationalResponse5**](OBWriteInternationalResponse5.md)

### Authorization

[PSUOAuth2Security](../README.md#PSUOAuth2Security)

### HTTP request headers

 - **Content-Type**: application/jose+jwe, application/json, application/json; charset=utf-8
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | International Payments Created |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**415** | Unsupported Media Type |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_international_payment_consents_consent_id**
> OBWriteInternationalConsentResponse6 get_international_payment_consents_consent_id(consent_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get International Payment Consents

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_international_consent_response6 import OBWriteInternationalConsentResponse6
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
    api_instance = openapi_client.InternationalPaymentsApi(api_client)
    consent_id = 'consent_id_example' # str | ConsentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get International Payment Consents
        api_response = api_instance.get_international_payment_consents_consent_id(consent_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of InternationalPaymentsApi->get_international_payment_consents_consent_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternationalPaymentsApi->get_international_payment_consents_consent_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent_id** | **str**| ConsentId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWriteInternationalConsentResponse6**](OBWriteInternationalConsentResponse6.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | International Payment Consents Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_international_payment_consents_consent_id_funds_confirmation**
> OBWriteFundsConfirmationResponse1 get_international_payment_consents_consent_id_funds_confirmation(consent_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get International Payment Consents Funds Confirmation

### Example

* OAuth Authentication (PSUOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_funds_confirmation_response1 import OBWriteFundsConfirmationResponse1
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
    api_instance = openapi_client.InternationalPaymentsApi(api_client)
    consent_id = 'consent_id_example' # str | ConsentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get International Payment Consents Funds Confirmation
        api_response = api_instance.get_international_payment_consents_consent_id_funds_confirmation(consent_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of InternationalPaymentsApi->get_international_payment_consents_consent_id_funds_confirmation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternationalPaymentsApi->get_international_payment_consents_consent_id_funds_confirmation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent_id** | **str**| ConsentId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWriteFundsConfirmationResponse1**](OBWriteFundsConfirmationResponse1.md)

### Authorization

[PSUOAuth2Security](../README.md#PSUOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | International Payment Consents Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_international_payments_international_payment_id**
> OBWriteInternationalResponse5 get_international_payments_international_payment_id(international_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get International Payments

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_international_response5 import OBWriteInternationalResponse5
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
    api_instance = openapi_client.InternationalPaymentsApi(api_client)
    international_payment_id = 'international_payment_id_example' # str | InternationalPaymentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get International Payments
        api_response = api_instance.get_international_payments_international_payment_id(international_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of InternationalPaymentsApi->get_international_payments_international_payment_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternationalPaymentsApi->get_international_payments_international_payment_id: %s\n" % e)
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

[**OBWriteInternationalResponse5**](OBWriteInternationalResponse5.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | International Payments Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

