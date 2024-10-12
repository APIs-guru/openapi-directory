# openapi_client.DefaultApi

All URIs are relative to *https://api.transavia.com/v2/airports*

Method | HTTP request | Description
------------- | ------------- | -------------
[**call_58d8bcb7a9e6240e200cff24**](DefaultApi.md#call_58d8bcb7a9e6240e200cff24) | **GET** / | All airports
[**call_58d8bcb7a9e6240e200cff25**](DefaultApi.md#call_58d8bcb7a9e6240e200cff25) | **GET** /{id} | Airport by id.
[**call_58d8bcb8a9e6240e200cff26**](DefaultApi.md#call_58d8bcb8a9e6240e200cff26) | **GET** /countrycode/{countryCode} | Airport(s) by country code.
[**call_58d8bcb8a9e6240e200cff27**](DefaultApi.md#call_58d8bcb8a9e6240e200cff27) | **GET** /nearest | Nearest airport(s) by geo coordinates.
[**call_58d8bcb8a9e6240e200cff28**](DefaultApi.md#call_58d8bcb8a9e6240e200cff28) | **GET** /nearest/{id} | Nearest airport(s) by airport id.


# **call_58d8bcb7a9e6240e200cff24**
> List[AirportDto] call_58d8bcb7a9e6240e200cff24()

All airports

Retrieve all airports.

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.airport_dto import AirportDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.transavia.com/v2/airports
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.transavia.com/v2/airports"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # All airports
        api_response = api_instance.call_58d8bcb7a9e6240e200cff24()
        print("The response of DefaultApi->call_58d8bcb7a9e6240e200cff24:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->call_58d8bcb7a9e6240e200cff24: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AirportDto]**](AirportDto.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**500** | InternalServerError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **call_58d8bcb7a9e6240e200cff25**
> AirportDetailsDto call_58d8bcb7a9e6240e200cff25(id)

Airport by id.

Retrieve airport by id.

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.airport_details_dto import AirportDetailsDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.transavia.com/v2/airports
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.transavia.com/v2/airports"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | Airport code (3-character IATA code).

    try:
        # Airport by id.
        api_response = api_instance.call_58d8bcb7a9e6240e200cff25(id)
        print("The response of DefaultApi->call_58d8bcb7a9e6240e200cff25:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->call_58d8bcb7a9e6240e200cff25: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Airport code (3-character IATA code). | 

### Return type

[**AirportDetailsDto**](AirportDetailsDto.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**500** | InternalServerError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **call_58d8bcb8a9e6240e200cff26**
> List[AirportDto] call_58d8bcb8a9e6240e200cff26(country_code)

Airport(s) by country code.

Retrieve airports by country code.

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.airport_dto import AirportDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.transavia.com/v2/airports
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.transavia.com/v2/airports"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    country_code = 'country_code_example' # str | Comma-separated list of country codes (2-character ISO 3166-1). More than 3 country codes is not allowed.

    try:
        # Airport(s) by country code.
        api_response = api_instance.call_58d8bcb8a9e6240e200cff26(country_code)
        print("The response of DefaultApi->call_58d8bcb8a9e6240e200cff26:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->call_58d8bcb8a9e6240e200cff26: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**| Comma-separated list of country codes (2-character ISO 3166-1). More than 3 country codes is not allowed. | 

### Return type

[**List[AirportDto]**](AirportDto.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**500** | InternalServerError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **call_58d8bcb8a9e6240e200cff27**
> List[NearestAirportDto] call_58d8bcb8a9e6240e200cff27(latitude=latitude, longitude=longitude, max_distance_in_km=max_distance_in_km, limit=limit)

Nearest airport(s) by geo coordinates.

Retrieve nearest airports by geo coordinates (latitude/longitude).

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.nearest_airport_dto import NearestAirportDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.transavia.com/v2/airports
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.transavia.com/v2/airports"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    latitude = 'latitude_example' # str | Latitude in decimals, lower than -90.0 and higher than 90.0 is not allowed. (optional)
    longitude = 'longitude_example' # str | Longitude in decimals, lower than -180.0 and higher than 180.0 is not allowed. (optional)
    max_distance_in_km = 'max_distance_in_km_example' # str | Maximum distance in kilometers, lower than 1 and higher than 500 is not allowed. If not set, max value is applied. (optional)
    limit = 'limit_example' # str | Limits the result, lower than 0 is not allowed. If not set, the result is not limited. (optional)

    try:
        # Nearest airport(s) by geo coordinates.
        api_response = api_instance.call_58d8bcb8a9e6240e200cff27(latitude=latitude, longitude=longitude, max_distance_in_km=max_distance_in_km, limit=limit)
        print("The response of DefaultApi->call_58d8bcb8a9e6240e200cff27:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->call_58d8bcb8a9e6240e200cff27: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **str**| Latitude in decimals, lower than -90.0 and higher than 90.0 is not allowed. | [optional] 
 **longitude** | **str**| Longitude in decimals, lower than -180.0 and higher than 180.0 is not allowed. | [optional] 
 **max_distance_in_km** | **str**| Maximum distance in kilometers, lower than 1 and higher than 500 is not allowed. If not set, max value is applied. | [optional] 
 **limit** | **str**| Limits the result, lower than 0 is not allowed. If not set, the result is not limited. | [optional] 

### Return type

[**List[NearestAirportDto]**](NearestAirportDto.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**500** | InternalServerError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **call_58d8bcb8a9e6240e200cff28**
> List[NearestAirportDto] call_58d8bcb8a9e6240e200cff28(id, max_distance_in_km=max_distance_in_km, limit=limit)

Nearest airport(s) by airport id.

Retrieve nearest airports by station id.

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.nearest_airport_dto import NearestAirportDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.transavia.com/v2/airports
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.transavia.com/v2/airports"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | Airport (IATA code) to search nearest airports for.
    max_distance_in_km = 'max_distance_in_km_example' # str | Maximum distance in kilometers, lower than 1 and higher than 500 is not allowed. If not set, max value is applied. (optional)
    limit = 'limit_example' # str | Limits the result, lower than 0 is not allowed. If not set, the result is not limited. (optional)

    try:
        # Nearest airport(s) by airport id.
        api_response = api_instance.call_58d8bcb8a9e6240e200cff28(id, max_distance_in_km=max_distance_in_km, limit=limit)
        print("The response of DefaultApi->call_58d8bcb8a9e6240e200cff28:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->call_58d8bcb8a9e6240e200cff28: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Airport (IATA code) to search nearest airports for. | 
 **max_distance_in_km** | **str**| Maximum distance in kilometers, lower than 1 and higher than 500 is not allowed. If not set, max value is applied. | [optional] 
 **limit** | **str**| Limits the result, lower than 0 is not allowed. If not set, the result is not limited. | [optional] 

### Return type

[**List[NearestAirportDto]**](NearestAirportDto.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**500** | InternalServerError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

