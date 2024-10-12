# openapi_client.ReferenceDataApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**references_aircraft_by_aircraft_code_get**](ReferenceDataApi.md#references_aircraft_by_aircraft_code_get) | **GET** /references/aircraft/{aircraftCode} | Aircraft
[**references_airlines_by_airline_code_get**](ReferenceDataApi.md#references_airlines_by_airline_code_get) | **GET** /references/airlines/{airlineCode} | Airlines
[**references_airports_by_airport_code_get**](ReferenceDataApi.md#references_airports_by_airport_code_get) | **GET** /references/airports/{airportCode} | Airports
[**references_airports_nearest_by_latitude_and_longitude_get**](ReferenceDataApi.md#references_airports_nearest_by_latitude_and_longitude_get) | **GET** /references/airports/nearest/{latitude},{longitude} | Nearest Airports
[**references_cities_by_city_code_get**](ReferenceDataApi.md#references_cities_by_city_code_get) | **GET** /references/cities/{cityCode} | Cities
[**references_countries_by_country_code_get**](ReferenceDataApi.md#references_countries_by_country_code_get) | **GET** /references/countries/{countryCode} | Countries


# **references_aircraft_by_aircraft_code_get**
> object references_aircraft_by_aircraft_code_get(accept, aircraft_code, limit=limit, offset=offset)

Aircraft

List all aircraft types or one specific aircraft type.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceDataApi(api_client)
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    aircraft_code = '33P' # str | 3-character IATA aircraft code (default to '33P')
    limit = '20' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional) (default to '20')
    offset = '0' # str | Number of records skipped. Defaults to 0 (optional) (default to '0')

    try:
        # Aircraft
        api_response = api_instance.references_aircraft_by_aircraft_code_get(accept, aircraft_code, limit=limit, offset=offset)
        print("The response of ReferenceDataApi->references_aircraft_by_aircraft_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataApi->references_aircraft_by_aircraft_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **aircraft_code** | **str**| 3-character IATA aircraft code | [default to &#39;33P&#39;]
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] [default to &#39;20&#39;]
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] [default to &#39;0&#39;]

### Return type

**object**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **references_airlines_by_airline_code_get**
> object references_airlines_by_airline_code_get(accept, airline_code, limit=limit, offset=offset)

Airlines

List all airlines or one specific airline.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceDataApi(api_client)
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    airline_code = 'LH' # str | 2-character IATA airline/carrier code (default to 'LH')
    limit = '20' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional) (default to '20')
    offset = '0' # str | Number of records skipped. Defaults to 0 (optional) (default to '0')

    try:
        # Airlines
        api_response = api_instance.references_airlines_by_airline_code_get(accept, airline_code, limit=limit, offset=offset)
        print("The response of ReferenceDataApi->references_airlines_by_airline_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataApi->references_airlines_by_airline_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **airline_code** | **str**| 2-character IATA airline/carrier code | [default to &#39;LH&#39;]
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] [default to &#39;20&#39;]
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] [default to &#39;0&#39;]

### Return type

**object**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **references_airports_by_airport_code_get**
> AirportResponse references_airports_by_airport_code_get(accept, airport_code, lang=lang, limit=limit, offset=offset, l_hoperated=l_hoperated)

Airports

List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.models.airport_response import AirportResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceDataApi(api_client)
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    airport_code = 'TXL' # str | 3-letter IATA airport code (default to 'TXL')
    lang = 'lang_example' # str | 2-letter ISO 3166-1 language code (optional)
    limit = '20' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional) (default to '20')
    offset = '0' # str | Number of records skipped. Defaults to 0 (optional) (default to '0')
    l_hoperated = True # bool | Restrict the results to locations with flights operated by LH (false=0, true=1) (optional)

    try:
        # Airports
        api_response = api_instance.references_airports_by_airport_code_get(accept, airport_code, lang=lang, limit=limit, offset=offset, l_hoperated=l_hoperated)
        print("The response of ReferenceDataApi->references_airports_by_airport_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataApi->references_airports_by_airport_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **airport_code** | **str**| 3-letter IATA airport code | [default to &#39;TXL&#39;]
 **lang** | **str**| 2-letter ISO 3166-1 language code | [optional] 
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] [default to &#39;20&#39;]
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] [default to &#39;0&#39;]
 **l_hoperated** | **bool**| Restrict the results to locations with flights operated by LH (false&#x3D;0, true&#x3D;1) | [optional] 

### Return type

[**AirportResponse**](AirportResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **references_airports_nearest_by_latitude_and_longitude_get**
> object references_airports_nearest_by_latitude_and_longitude_get(latitude, longitude, accept, lang=lang)

Nearest Airports

List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceDataApi(api_client)
    latitude = 56 # int | Latitude in decimal format to at most 3 decimal places
    longitude = 56 # int | Longitude in decimal format to at most 3 decimal places
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    lang = 'lang_example' # str | 2 letter ISO 3166-1 language code (optional)

    try:
        # Nearest Airports
        api_response = api_instance.references_airports_nearest_by_latitude_and_longitude_get(latitude, longitude, accept, lang=lang)
        print("The response of ReferenceDataApi->references_airports_nearest_by_latitude_and_longitude_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataApi->references_airports_nearest_by_latitude_and_longitude_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **int**| Latitude in decimal format to at most 3 decimal places | 
 **longitude** | **int**| Longitude in decimal format to at most 3 decimal places | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **lang** | **str**| 2 letter ISO 3166-1 language code | [optional] 

### Return type

**object**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **references_cities_by_city_code_get**
> object references_cities_by_city_code_get(accept, city_code, lang=lang, limit=limit, offset=offset)

Cities

List all cities or one specific city. It is possible to request the response in a specific language.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceDataApi(api_client)
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    city_code = 'BER' # str | 3-letter IATA city code (default to 'BER')
    lang = 'lang_example' # str | 2 letter ISO 3166-1 language code (optional)
    limit = '20' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional) (default to '20')
    offset = '0' # str | Number of records skipped. Defaults to 0 (optional) (default to '0')

    try:
        # Cities
        api_response = api_instance.references_cities_by_city_code_get(accept, city_code, lang=lang, limit=limit, offset=offset)
        print("The response of ReferenceDataApi->references_cities_by_city_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataApi->references_cities_by_city_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **city_code** | **str**| 3-letter IATA city code | [default to &#39;BER&#39;]
 **lang** | **str**| 2 letter ISO 3166-1 language code | [optional] 
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] [default to &#39;20&#39;]
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] [default to &#39;0&#39;]

### Return type

**object**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **references_countries_by_country_code_get**
> object references_countries_by_country_code_get(accept, country_code, lang=lang, limit=limit, offset=offset)

Countries

List all countries or one specific country. It is possible to request the response in a specific language.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceDataApi(api_client)
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    country_code = 'DK' # str | 2-letter ISO 3166-1 country code (default to 'DK')
    lang = 'lang_example' # str | 2 letter ISO 3166-1 language code (optional)
    limit = '20' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional) (default to '20')
    offset = '0' # str | Number of records skipped. Defaults to 0 (optional) (default to '0')

    try:
        # Countries
        api_response = api_instance.references_countries_by_country_code_get(accept, country_code, lang=lang, limit=limit, offset=offset)
        print("The response of ReferenceDataApi->references_countries_by_country_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataApi->references_countries_by_country_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **country_code** | **str**| 2-letter ISO 3166-1 country code | [default to &#39;DK&#39;]
 **lang** | **str**| 2 letter ISO 3166-1 language code | [optional] 
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] [default to &#39;20&#39;]
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] [default to &#39;0&#39;]

### Return type

**object**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

