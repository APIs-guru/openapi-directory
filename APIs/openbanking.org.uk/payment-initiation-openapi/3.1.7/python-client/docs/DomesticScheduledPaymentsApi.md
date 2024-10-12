# openapi_client.DomesticScheduledPaymentsApi

All URIs are relative to *https://openbanking.org.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_domestic_scheduled_payment_consents**](DomesticScheduledPaymentsApi.md#create_domestic_scheduled_payment_consents) | **POST** /domestic-scheduled-payment-consents | Create Domestic Scheduled Payment Consents
[**create_domestic_scheduled_payments**](DomesticScheduledPaymentsApi.md#create_domestic_scheduled_payments) | **POST** /domestic-scheduled-payments | Create Domestic Scheduled Payments
[**get_domestic_scheduled_payment_consents_consent_id**](DomesticScheduledPaymentsApi.md#get_domestic_scheduled_payment_consents_consent_id) | **GET** /domestic-scheduled-payment-consents/{ConsentId} | Get Domestic Scheduled Payment Consents
[**get_domestic_scheduled_payments_domestic_scheduled_payment_id**](DomesticScheduledPaymentsApi.md#get_domestic_scheduled_payments_domestic_scheduled_payment_id) | **GET** /domestic-scheduled-payments/{DomesticScheduledPaymentId} | Get Domestic Scheduled Payments


# **create_domestic_scheduled_payment_consents**
> OBWriteDomesticScheduledConsentResponse5 create_domestic_scheduled_payment_consents(authorization, x_idempotency_key, x_jws_signature, ob_write_domestic_scheduled_consent4, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Create Domestic Scheduled Payment Consents

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_domestic_scheduled_consent4 import OBWriteDomesticScheduledConsent4
from openapi_client.models.ob_write_domestic_scheduled_consent_response5 import OBWriteDomesticScheduledConsentResponse5
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
    api_instance = openapi_client.DomesticScheduledPaymentsApi(api_client)
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_idempotency_key = 'x_idempotency_key_example' # str | Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours. 
    x_jws_signature = 'x_jws_signature_example' # str | A detached JWS signature of the body of the payload.
    ob_write_domestic_scheduled_consent4 = openapi_client.OBWriteDomesticScheduledConsent4() # OBWriteDomesticScheduledConsent4 | Default
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Create Domestic Scheduled Payment Consents
        api_response = api_instance.create_domestic_scheduled_payment_consents(authorization, x_idempotency_key, x_jws_signature, ob_write_domestic_scheduled_consent4, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of DomesticScheduledPaymentsApi->create_domestic_scheduled_payment_consents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomesticScheduledPaymentsApi->create_domestic_scheduled_payment_consents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_idempotency_key** | **str**| Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours.  | 
 **x_jws_signature** | **str**| A detached JWS signature of the body of the payload. | 
 **ob_write_domestic_scheduled_consent4** | [**OBWriteDomesticScheduledConsent4**](OBWriteDomesticScheduledConsent4.md)| Default | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWriteDomesticScheduledConsentResponse5**](OBWriteDomesticScheduledConsentResponse5.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: application/jose+jwe, application/json, application/json; charset=utf-8
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Domestic Scheduled Payment Consents Created |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
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

# **create_domestic_scheduled_payments**
> OBWriteDomesticScheduledResponse5 create_domestic_scheduled_payments(authorization, x_idempotency_key, x_jws_signature, ob_write_domestic_scheduled2, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Create Domestic Scheduled Payments

### Example

* OAuth Authentication (PSUOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_domestic_scheduled2 import OBWriteDomesticScheduled2
from openapi_client.models.ob_write_domestic_scheduled_response5 import OBWriteDomesticScheduledResponse5
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
    api_instance = openapi_client.DomesticScheduledPaymentsApi(api_client)
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_idempotency_key = 'x_idempotency_key_example' # str | Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours. 
    x_jws_signature = 'x_jws_signature_example' # str | A detached JWS signature of the body of the payload.
    ob_write_domestic_scheduled2 = openapi_client.OBWriteDomesticScheduled2() # OBWriteDomesticScheduled2 | Default
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Create Domestic Scheduled Payments
        api_response = api_instance.create_domestic_scheduled_payments(authorization, x_idempotency_key, x_jws_signature, ob_write_domestic_scheduled2, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of DomesticScheduledPaymentsApi->create_domestic_scheduled_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomesticScheduledPaymentsApi->create_domestic_scheduled_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_idempotency_key** | **str**| Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours.  | 
 **x_jws_signature** | **str**| A detached JWS signature of the body of the payload. | 
 **ob_write_domestic_scheduled2** | [**OBWriteDomesticScheduled2**](OBWriteDomesticScheduled2.md)| Default | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWriteDomesticScheduledResponse5**](OBWriteDomesticScheduledResponse5.md)

### Authorization

[PSUOAuth2Security](../README.md#PSUOAuth2Security)

### HTTP request headers

 - **Content-Type**: application/jose+jwe, application/json, application/json; charset=utf-8
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Domestic Scheduled Payments Created |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
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

# **get_domestic_scheduled_payment_consents_consent_id**
> OBWriteDomesticScheduledConsentResponse5 get_domestic_scheduled_payment_consents_consent_id(consent_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Domestic Scheduled Payment Consents

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_domestic_scheduled_consent_response5 import OBWriteDomesticScheduledConsentResponse5
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
    api_instance = openapi_client.DomesticScheduledPaymentsApi(api_client)
    consent_id = 'consent_id_example' # str | ConsentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Domestic Scheduled Payment Consents
        api_response = api_instance.get_domestic_scheduled_payment_consents_consent_id(consent_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of DomesticScheduledPaymentsApi->get_domestic_scheduled_payment_consents_consent_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomesticScheduledPaymentsApi->get_domestic_scheduled_payment_consents_consent_id: %s\n" % e)
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

[**OBWriteDomesticScheduledConsentResponse5**](OBWriteDomesticScheduledConsentResponse5.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domestic Scheduled Payment Consents Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domestic_scheduled_payments_domestic_scheduled_payment_id**
> OBWriteDomesticScheduledResponse5 get_domestic_scheduled_payments_domestic_scheduled_payment_id(domestic_scheduled_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Domestic Scheduled Payments

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_domestic_scheduled_response5 import OBWriteDomesticScheduledResponse5
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
    api_instance = openapi_client.DomesticScheduledPaymentsApi(api_client)
    domestic_scheduled_payment_id = 'domestic_scheduled_payment_id_example' # str | DomesticScheduledPaymentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Domestic Scheduled Payments
        api_response = api_instance.get_domestic_scheduled_payments_domestic_scheduled_payment_id(domestic_scheduled_payment_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of DomesticScheduledPaymentsApi->get_domestic_scheduled_payments_domestic_scheduled_payment_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomesticScheduledPaymentsApi->get_domestic_scheduled_payments_domestic_scheduled_payment_id: %s\n" % e)
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

[**OBWriteDomesticScheduledResponse5**](OBWriteDomesticScheduledResponse5.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domestic Scheduled Payments Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

