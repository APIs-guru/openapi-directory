# openapi_client.OffersApi

All URIs are relative to *https://openbanking.org.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_accounts_account_id_offers**](OffersApi.md#get_accounts_account_id_offers) | **GET** /accounts/{AccountId}/offers | Get Offers
[**get_offers**](OffersApi.md#get_offers) | **GET** /offers | Get Offers


# **get_accounts_account_id_offers**
> OBReadOffer1 get_accounts_account_id_offers(account_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Offers

### Example

* OAuth Authentication (PSUOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_read_offer1 import OBReadOffer1
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
    api_instance = openapi_client.OffersApi(api_client)
    account_id = 'account_id_example' # str | AccountId
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Offers
        api_response = api_instance.get_accounts_account_id_offers(account_id, authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of OffersApi->get_accounts_account_id_offers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->get_accounts_account_id_offers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| AccountId | 
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBReadOffer1**](OBReadOffer1.md)

### Authorization

[PSUOAuth2Security](../README.md#PSUOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Offers Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_offers**
> OBReadOffer1 get_offers(authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)

Get Offers

### Example

* OAuth Authentication (PSUOAuth2Security):

```python
import openapi_client
from openapi_client.models.ob_read_offer1 import OBReadOffer1
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
    api_instance = openapi_client.OffersApi(api_client)
    authorization = 'authorization_example' # str | An Authorisation Token as per https://tools.ietf.org/html/rfc6750
    x_fapi_auth_date = 'x_fapi_auth_date_example' # str | The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC (optional)
    x_fapi_customer_ip_address = 'x_fapi_customer_ip_address_example' # str | The PSU's IP address if the PSU is currently logged in with the TPP. (optional)
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)
    x_customer_user_agent = 'x_customer_user_agent_example' # str | Indicates the user-agent that the PSU is using. (optional)

    try:
        # Get Offers
        api_response = api_instance.get_offers(authorization, x_fapi_auth_date=x_fapi_auth_date, x_fapi_customer_ip_address=x_fapi_customer_ip_address, x_fapi_interaction_id=x_fapi_interaction_id, x_customer_user_agent=x_customer_user_agent)
        print("The response of OffersApi->get_offers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->get_offers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| An Authorisation Token as per https://tools.ietf.org/html/rfc6750 | 
 **x_fapi_auth_date** | **str**| The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC | [optional] 
 **x_fapi_customer_ip_address** | **str**| The PSU&#39;s IP address if the PSU is currently logged in with the TPP. | [optional] 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 
 **x_customer_user_agent** | **str**| Indicates the user-agent that the PSU is using. | [optional] 

### Return type

[**OBReadOffer1**](OBReadOffer1.md)

### Authorization

[PSUOAuth2Security](../README.md#PSUOAuth2Security)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose+jwe, application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Offers Read |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**404** | Not found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**429** | Too Many Requests |  * Retry-After - Number in seconds to wait <br>  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

