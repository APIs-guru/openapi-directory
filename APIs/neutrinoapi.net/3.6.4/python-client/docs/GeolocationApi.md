# openapi_client.GeolocationApi

All URIs are relative to *https://neutrinoapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geocode_address**](GeolocationApi.md#geocode_address) | **GET** /geocode-address | Geocode Address
[**geocode_reverse**](GeolocationApi.md#geocode_reverse) | **GET** /geocode-reverse | Geocode Reverse
[**i_p_info**](GeolocationApi.md#i_p_info) | **GET** /ip-info | IP Info


# **geocode_address**
> GeocodeAddressResponse geocode_address(address=address, house_number=house_number, street=street, city=city, county=county, state=state, postal_code=postal_code, country_code=country_code, language_code=language_code, fuzzy_search=fuzzy_search)

Geocode Address

Geocode an address, partial address or just the name of a place

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.geocode_address_response import GeocodeAddressResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeolocationApi(api_client)
    address = 'address_example' # str | The full address, partial address or name of a place to try and locate. Comma separated address components are preferred. (optional)
    house_number = 'house_number_example' # str | The house/building number to locate (optional)
    street = 'street_example' # str | The street/road name to locate (optional)
    city = 'city_example' # str | The city/town name to locate (optional)
    county = 'county_example' # str | The county/region name to locate (optional)
    state = 'state_example' # str | The state name to locate (optional)
    postal_code = 'postal_code_example' # str | The postal code to locate (optional)
    country_code = 'country_code_example' # str | Limit result to this country (the default is no country bias) (optional)
    language_code = 'en' # str | The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru, zh</li> </ul> (optional) (default to 'en')
    fuzzy_search = False # bool | If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches (optional) (default to False)

    try:
        # Geocode Address
        api_response = api_instance.geocode_address(address=address, house_number=house_number, street=street, city=city, county=county, state=state, postal_code=postal_code, country_code=country_code, language_code=language_code, fuzzy_search=fuzzy_search)
        print("The response of GeolocationApi->geocode_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeolocationApi->geocode_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| The full address, partial address or name of a place to try and locate. Comma separated address components are preferred. | [optional] 
 **house_number** | **str**| The house/building number to locate | [optional] 
 **street** | **str**| The street/road name to locate | [optional] 
 **city** | **str**| The city/town name to locate | [optional] 
 **county** | **str**| The county/region name to locate | [optional] 
 **state** | **str**| The state name to locate | [optional] 
 **postal_code** | **str**| The postal code to locate | [optional] 
 **country_code** | **str**| Limit result to this country (the default is no country bias) | [optional] 
 **language_code** | **str**| The language to display results in, available languages are: &lt;ul&gt; &lt;li&gt;de, en, es, fr, it, pt, ru, zh&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;en&#39;]
 **fuzzy_search** | **bool**| If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches | [optional] [default to False]

### Return type

[**GeocodeAddressResponse**](GeocodeAddressResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **geocode_reverse**
> GeocodeReverseResponse geocode_reverse(latitude, longitude, language_code=language_code, zoom=zoom)

Geocode Reverse

Convert a geographic coordinate (latitude and longitude) into a real world address

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.geocode_reverse_response import GeocodeReverseResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeolocationApi(api_client)
    latitude = 'latitude_example' # str | The location latitude in decimal degrees format
    longitude = 'longitude_example' # str | The location longitude in decimal degrees format
    language_code = 'en' # str | The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru</li> </ul> (optional) (default to 'en')
    zoom = 'address' # str | The zoom level to respond with: <br> <ul> <li>address - the most precise address available</li> <li>street - the street level</li> <li>city - the city level</li> <li>state - the state level</li> <li>country - the country level</li> </ul> (optional) (default to 'address')

    try:
        # Geocode Reverse
        api_response = api_instance.geocode_reverse(latitude, longitude, language_code=language_code, zoom=zoom)
        print("The response of GeolocationApi->geocode_reverse:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeolocationApi->geocode_reverse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **str**| The location latitude in decimal degrees format | 
 **longitude** | **str**| The location longitude in decimal degrees format | 
 **language_code** | **str**| The language to display results in, available languages are: &lt;ul&gt; &lt;li&gt;de, en, es, fr, it, pt, ru&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;en&#39;]
 **zoom** | **str**| The zoom level to respond with: &lt;br&gt; &lt;ul&gt; &lt;li&gt;address - the most precise address available&lt;/li&gt; &lt;li&gt;street - the street level&lt;/li&gt; &lt;li&gt;city - the city level&lt;/li&gt; &lt;li&gt;state - the state level&lt;/li&gt; &lt;li&gt;country - the country level&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;address&#39;]

### Return type

[**GeocodeReverseResponse**](GeocodeReverseResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **i_p_info**
> IPInfoResponse i_p_info(ip, reverse_lookup=reverse_lookup)

IP Info

Get location information about an IP address and do reverse DNS (PTR) lookups

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.ip_info_response import IPInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeolocationApi(api_client)
    ip = 'ip_example' # str | IPv4 or IPv6 address
    reverse_lookup = False # bool | Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it (optional) (default to False)

    try:
        # IP Info
        api_response = api_instance.i_p_info(ip, reverse_lookup=reverse_lookup)
        print("The response of GeolocationApi->i_p_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeolocationApi->i_p_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **str**| IPv4 or IPv6 address | 
 **reverse_lookup** | **bool**| Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it | [optional] [default to False]

### Return type

[**IPInfoResponse**](IPInfoResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

