# openapi_client.DomesticStandingOrdersApi

All URIs are relative to *https://openbanking.org.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_domestic_standing_order_consents**](DomesticStandingOrdersApi.md#create_domestic_standing_order_consents) | **POST** /domestic-standing-order-consents | Create Domestic Standing Order Consents
[**create_domestic_standing_orders**](DomesticStandingOrdersApi.md#create_domestic_standing_orders) | **POST** /domestic-standing-orders | Create Domestic Standing Orders
[**get_domestic_standing_order_consents_consent_id**](DomesticStandingOrdersApi.md#get_domestic_standing_order_consents_consent_id) | **GET** /domestic-standing-order-consents/{ConsentId} | Get Domestic Standing Order Consents
[**get_domestic_standing_orders_domestic_standing_order_id**](DomesticStandingOrdersApi.md#get_domestic_standing_orders_domestic_standing_order_id) | **GET** /domestic-standing-orders/{DomesticStandingOrderId} | Get Domestic Standing Orders


# **create_domestic_standing_order_consents**
> OBWriteDomesticStandingOrderConsentResponse6 create_domestic_standing_order_consents(authorization, x_idempotency_key, x_jws_signature, ob_write_domestic_standing_order_consent5, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Create Domestic Standing Order Consents

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_domestic_standing_order_consent5 import OBWriteDomesticStandingOrderConsent5
from openapi_client.models.ob_write_domestic_standing_order_consent_response6 import OBWriteDomesticStandingOrderConsentResponse6
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
    api_instance = openapi_client.DomesticStandingOrdersApi(api_client)
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_idempotency_key = 'x_idempotency_key_example' # str | Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours. 
    x_jws_signature = 'x_jws_signature_example' # str | A detached JWS signature of the body of the payload.
    ob_write_domestic_standing_order_consent5 = openapi_client.OBWriteDomesticStandingOrderConsent5() # OBWriteDomesticStandingOrderConsent5 | Default
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Create Domestic Standing Order Consents
        api_response = api_instance.create_domestic_standing_order_consents(authorization, x_idempotency_key, x_jws_signature, ob_write_domestic_standing_order_consent5, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of DomesticStandingOrdersApi->create_domestic_standing_order_consents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomesticStandingOrdersApi->create_domestic_standing_order_consents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_idempotency_key** | **str**| Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours.  | 
 **x_jws_signature** | **str**| A detached JWS signature of the body of the payload. | 
 **ob_write_domestic_standing_order_consent5** | [**OBWriteDomesticStandingOrderConsent5**](OBWriteDomesticStandingOrderConsent5.md)| Default | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWriteDomesticStandingOrderConsentResponse6**](OBWriteDomesticStandingOrderConsentResponse6.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: application/jose+jwe, application/json, application/json; charset=utf-8
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Domestic Standing Order Consents Created |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
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

# **create_domestic_standing_orders**
> OBWriteDomesticStandingOrderResponse6 create_domestic_standing_orders(authorization, x_idempotency_key, x_jws_signature, ob_write_domestic_standing_order3, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Create Domestic Standing Orders

### Example

* OAuth Authentication (PSUOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_domestic_standing_order3 import OBWriteDomesticStandingOrder3
from openapi_client.models.ob_write_domestic_standing_order_response6 import OBWriteDomesticStandingOrderResponse6
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
    api_instance = openapi_client.DomesticStandingOrdersApi(api_client)
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_idempotency_key = 'x_idempotency_key_example' # str | Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours. 
    x_jws_signature = 'x_jws_signature_example' # str | A detached JWS signature of the body of the payload.
    ob_write_domestic_standing_order3 = openapi_client.OBWriteDomesticStandingOrder3() # OBWriteDomesticStandingOrder3 | Default
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Create Domestic Standing Orders
        api_response = api_instance.create_domestic_standing_orders(authorization, x_idempotency_key, x_jws_signature, ob_write_domestic_standing_order3, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of DomesticStandingOrdersApi->create_domestic_standing_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomesticStandingOrdersApi->create_domestic_standing_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_idempotency_key** | **str**| Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours.  | 
 **x_jws_signature** | **str**| A detached JWS signature of the body of the payload. | 
 **ob_write_domestic_standing_order3** | [**OBWriteDomesticStandingOrder3**](OBWriteDomesticStandingOrder3.md)| Default | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBWriteDomesticStandingOrderResponse6**](OBWriteDomesticStandingOrderResponse6.md)

### Authorization

[PSUOAuth2Security](../README.md#PSUOAuth2Security)

### HTTP request headers

 - **Content-Type**: application/jose+jwe, application/json, application/json; charset=utf-8
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Domestic Standing Orders Created |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
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

# **get_domestic_standing_order_consents_consent_id**
> OBWriteDomesticStandingOrderConsentResponse6 get_domestic_standing_order_consents_consent_id(consent_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Domestic Standing Order Consents

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_domestic_standing_order_consent_response6 import OBWriteDomesticStandingOrderConsentResponse6
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
    api_instance = openapi_client.DomesticStandingOrdersApi(api_client)
    consent_id = 'consent_id_example' # str | ConsentId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Domestic Standing Order Consents
        api_response = api_instance.get_domestic_standing_order_consents_consent_id(consent_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of DomesticStandingOrdersApi->get_domestic_standing_order_consents_consent_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomesticStandingOrdersApi->get_domestic_standing_order_consents_consent_id: %s\n" % e)
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

[**OBWriteDomesticStandingOrderConsentResponse6**](OBWriteDomesticStandingOrderConsentResponse6.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domestic Standing Order Consents Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domestic_standing_orders_domestic_standing_order_id**
> OBWriteDomesticStandingOrderResponse6 get_domestic_standing_orders_domestic_standing_order_id(domestic_standing_order_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Domestic Standing Orders

### Example

* OAuth Authentication (TPPOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_write_domestic_standing_order_response6 import OBWriteDomesticStandingOrderResponse6
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
    api_instance = openapi_client.DomesticStandingOrdersApi(api_client)
    domestic_standing_order_id = 'domestic_standing_order_id_example' # str | DomesticStandingOrderId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Domestic Standing Orders
        api_response = api_instance.get_domestic_standing_orders_domestic_standing_order_id(domestic_standing_order_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of DomesticStandingOrdersApi->get_domestic_standing_orders_domestic_standing_order_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomesticStandingOrdersApi->get_domestic_standing_orders_domestic_standing_order_id: %s\n" % e)
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

[**OBWriteDomesticStandingOrderResponse6**](OBWriteDomesticStandingOrderResponse6.md)

### Authorization

[TPPOAuth2Security](../README.md#TPPOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domestic Standing Orders Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  * x-jws-signature - Header containing a detached JWS signature of the body of the payload.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

