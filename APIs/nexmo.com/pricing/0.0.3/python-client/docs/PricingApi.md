# openapi_client.PricingApi

All URIs are relative to *https://rest.nexmo.com/account*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieve_prefix_pricing**](PricingApi.md#retrieve_prefix_pricing) | **GET** /get-prefix-pricing/outbound/{type} | Retrieve outbound pricing for a specific dialing prefix.
[**retrieve_pricing_all_countries**](PricingApi.md#retrieve_pricing_all_countries) | **GET** /get-full-pricing/outbound/{type} | Retrieve outbound pricing for all countries.
[**retrieve_pricing_country**](PricingApi.md#retrieve_pricing_country) | **GET** /get-pricing/outbound/{type} | Retrieve outbound pricing for a specific country.


# **retrieve_prefix_pricing**
> PricingCountriesResponse retrieve_prefix_pricing(type, api_key, api_secret, prefix)

Retrieve outbound pricing for a specific dialing prefix.

Retrieves the pricing information based on the dialing prefix. 

### Example


```python
import openapi_client
from openapi_client.models.pricing_countries_response import PricingCountriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.nexmo.com/account
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.nexmo.com/account"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricingApi(api_client)
    type = 'sms' # str | The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
    api_key = 'api_key_example' # str | Your Nexmo API key.
    api_secret = 'api_secret_example' # str | Your Nexmo API secret.
    prefix = 'prefix_example' # str | The numerical dialing prefix to look up pricing for. Examples include 44, 1 and so on.

    try:
        # Retrieve outbound pricing for a specific dialing prefix.
        api_response = api_instance.retrieve_prefix_pricing(type, api_key, api_secret, prefix)
        print("The response of PricingApi->retrieve_prefix_pricing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingApi->retrieve_prefix_pricing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| The type of service you wish to retrieve data about: either &#x60;sms&#x60;, &#x60;sms-transit&#x60; or &#x60;voice&#x60;. | 
 **api_key** | **str**| Your Nexmo API key. | 
 **api_secret** | **str**| Your Nexmo API secret. | 
 **prefix** | **str**| The numerical dialing prefix to look up pricing for. Examples include 44, 1 and so on. | 

### Return type

[**PricingCountriesResponse**](PricingCountriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pricing countries response |  -  |
**400** | Bad request. You probably provided an invalid parameter. |  -  |
**401** | You did not provide valid credentials |  -  |
**404** | The page you requested was not found |  -  |
**429** | You made too many requests. The API is rate limited to one request per second. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_pricing_all_countries**
> PricingCountriesResponse retrieve_pricing_all_countries(type, api_key, api_secret)

Retrieve outbound pricing for all countries.

Retrieves the pricing information for all countries. 

### Example


```python
import openapi_client
from openapi_client.models.pricing_countries_response import PricingCountriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.nexmo.com/account
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.nexmo.com/account"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricingApi(api_client)
    type = 'sms' # str | The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
    api_key = 'api_key_example' # str | Your Nexmo API key.
    api_secret = 'api_secret_example' # str | Your Nexmo API secret.

    try:
        # Retrieve outbound pricing for all countries.
        api_response = api_instance.retrieve_pricing_all_countries(type, api_key, api_secret)
        print("The response of PricingApi->retrieve_pricing_all_countries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingApi->retrieve_pricing_all_countries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| The type of service you wish to retrieve data about: either &#x60;sms&#x60;, &#x60;sms-transit&#x60; or &#x60;voice&#x60;. | 
 **api_key** | **str**| Your Nexmo API key. | 
 **api_secret** | **str**| Your Nexmo API secret. | 

### Return type

[**PricingCountriesResponse**](PricingCountriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pricing response |  -  |
**400** | Bad request. You probably provided an invalid parameter. |  -  |
**401** | You did not provide valid credentials |  -  |
**404** | The page you requested was not found |  -  |
**429** | You made too many requests. The API is rate limited to one request per second. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_pricing_country**
> PricingCountryResponse retrieve_pricing_country(type, api_key, api_secret, country)

Retrieve outbound pricing for a specific country.

Retrieves the pricing information based on the specified country. 

### Example


```python
import openapi_client
from openapi_client.models.pricing_country_response import PricingCountryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.nexmo.com/account
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.nexmo.com/account"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PricingApi(api_client)
    type = 'sms' # str | The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
    api_key = 'api_key_example' # str | Your Nexmo API key.
    api_secret = 'api_secret_example' # str | Your Nexmo API secret.
    country = 'country_example' # str | A two letter [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). For example, `CA`.

    try:
        # Retrieve outbound pricing for a specific country.
        api_response = api_instance.retrieve_pricing_country(type, api_key, api_secret, country)
        print("The response of PricingApi->retrieve_pricing_country:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingApi->retrieve_pricing_country: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| The type of service you wish to retrieve data about: either &#x60;sms&#x60;, &#x60;sms-transit&#x60; or &#x60;voice&#x60;. | 
 **api_key** | **str**| Your Nexmo API key. | 
 **api_secret** | **str**| Your Nexmo API secret. | 
 **country** | **str**| A two letter [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). For example, &#x60;CA&#x60;. | 

### Return type

[**PricingCountryResponse**](PricingCountryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pricing information for a specific country. |  -  |
**400** | Bad request. You probably provided an invalid parameter. |  -  |
**401** | You did not provide valid credentials |  -  |
**404** | The page you requested was not found |  -  |
**429** | You made too many requests. The API is rate limited to one request per second. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

