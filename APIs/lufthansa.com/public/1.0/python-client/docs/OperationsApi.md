# openapi_client.OperationsApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get**](OperationsApi.md#operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get) | **GET** /operations/flightstatus/arrivals/{airportCode}/{fromDateTime} | Flight Status at Arrival Airport
[**operations_flightstatus_by_flight_number_and_date_get**](OperationsApi.md#operations_flightstatus_by_flight_number_and_date_get) | **GET** /operations/flightstatus/{flightNumber}/{date} | Flight Status
[**operations_flightstatus_departures_by_airport_code_and_from_date_time_get**](OperationsApi.md#operations_flightstatus_departures_by_airport_code_and_from_date_time_get) | **GET** /operations/flightstatus/departures/{airportCode}/{fromDateTime} | Flight Status at Departure Airport
[**operations_flightstatus_route_date_by_origin_and_destination_get**](OperationsApi.md#operations_flightstatus_route_date_by_origin_and_destination_get) | **GET** /operations/flightstatus/route/{origin}/{destination}/{date} | Flight Status by Route
[**operations_schedules_from_date_time_by_origin_and_destination_get**](OperationsApi.md#operations_schedules_from_date_time_by_origin_and_destination_get) | **GET** /operations/schedules/{origin}/{destination}/{fromDateTime} | Flight Schedules


# **operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get**
> object operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get(airport_code, from_date_time, accept, limit=limit, offset=offset)

Flight Status at Arrival Airport

Status of all arrivals at a given airport up to 4 hours from the provided date time.

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
    api_instance = openapi_client.OperationsApi(api_client)
    airport_code = 'airport_code_example' # str | 3-letter IATA aiport code (e.g. 'ZRH')
    from_date_time = 'from_date_time_example' # str | Start of time range in local time of arrival airport (YYYY-MM-DDTHH:mm)
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    limit = 'limit_example' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional)
    offset = 'offset_example' # str | Number of records skipped. Defaults to 0 (optional)

    try:
        # Flight Status at Arrival Airport
        api_response = api_instance.operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get(airport_code, from_date_time, accept, limit=limit, offset=offset)
        print("The response of OperationsApi->operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **airport_code** | **str**| 3-letter IATA aiport code (e.g. &#39;ZRH&#39;) | 
 **from_date_time** | **str**| Start of time range in local time of arrival airport (YYYY-MM-DDTHH:mm) | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] 
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] 

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

# **operations_flightstatus_by_flight_number_and_date_get**
> object operations_flightstatus_by_flight_number_and_date_get(flight_number, var_date, accept, limit=limit, offset=offset)

Flight Status

Status of a particular flight (boarding, delayed, etc.).

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
    api_instance = openapi_client.OperationsApi(api_client)
    flight_number = 'flight_number_example' # str | Flight number including carrier code and any suffix (e.g. 'LH400')
    var_date = 'var_date_example' # str | The departure date (YYYY-MM-DD) in the local time of the departure airport
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    limit = 'limit_example' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional)
    offset = 'offset_example' # str | Number of records skipped. Defaults to 0 (optional)

    try:
        # Flight Status
        api_response = api_instance.operations_flightstatus_by_flight_number_and_date_get(flight_number, var_date, accept, limit=limit, offset=offset)
        print("The response of OperationsApi->operations_flightstatus_by_flight_number_and_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_flightstatus_by_flight_number_and_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flight_number** | **str**| Flight number including carrier code and any suffix (e.g. &#39;LH400&#39;) | 
 **var_date** | **str**| The departure date (YYYY-MM-DD) in the local time of the departure airport | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] 
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] 

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

# **operations_flightstatus_departures_by_airport_code_and_from_date_time_get**
> object operations_flightstatus_departures_by_airport_code_and_from_date_time_get(airport_code, from_date_time, accept, limit=limit, offset=offset)

Flight Status at Departure Airport

Status of all departures from a given airport up to 4 hours from the provided date time.

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
    api_instance = openapi_client.OperationsApi(api_client)
    airport_code = 'airport_code_example' # str | Departure airport. 3-letter IATA airport code (e.g. 'HAM')
    from_date_time = 'from_date_time_example' # str | Start of time range in local time of departure airport (YYYY-MM-DDTHH:mm)
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    limit = 'limit_example' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional)
    offset = 'offset_example' # str | Number of records skipped. Defaults to 0 (optional)

    try:
        # Flight Status at Departure Airport
        api_response = api_instance.operations_flightstatus_departures_by_airport_code_and_from_date_time_get(airport_code, from_date_time, accept, limit=limit, offset=offset)
        print("The response of OperationsApi->operations_flightstatus_departures_by_airport_code_and_from_date_time_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_flightstatus_departures_by_airport_code_and_from_date_time_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **airport_code** | **str**| Departure airport. 3-letter IATA airport code (e.g. &#39;HAM&#39;) | 
 **from_date_time** | **str**| Start of time range in local time of departure airport (YYYY-MM-DDTHH:mm) | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] 
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] 

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

# **operations_flightstatus_route_date_by_origin_and_destination_get**
> object operations_flightstatus_route_date_by_origin_and_destination_get(origin, destination, var_date, accept, limit=limit, offset=offset)

Flight Status by Route

Status of flights between a given origin and destination on a given date.

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
    api_instance = openapi_client.OperationsApi(api_client)
    origin = 'origin_example' # str | 3-letter IATA airport (e.g. 'FRA')
    destination = 'destination_example' # str | 3-letter IATA airport code (e.g. 'JFK')
    var_date = 'var_date_example' # str | Departure date (YYYY-MM-DD) in local time of departure airport
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    limit = 'limit_example' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional)
    offset = 'offset_example' # str | Number of records skipped. Defaults to 0 (optional)

    try:
        # Flight Status by Route
        api_response = api_instance.operations_flightstatus_route_date_by_origin_and_destination_get(origin, destination, var_date, accept, limit=limit, offset=offset)
        print("The response of OperationsApi->operations_flightstatus_route_date_by_origin_and_destination_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_flightstatus_route_date_by_origin_and_destination_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin** | **str**| 3-letter IATA airport (e.g. &#39;FRA&#39;) | 
 **destination** | **str**| 3-letter IATA airport code (e.g. &#39;JFK&#39;) | 
 **var_date** | **str**| Departure date (YYYY-MM-DD) in local time of departure airport | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] 
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] 

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

# **operations_schedules_from_date_time_by_origin_and_destination_get**
> object operations_schedules_from_date_time_by_origin_and_destination_get(origin, destination, from_date_time, accept, direct_flights=direct_flights, limit=limit, offset=offset)

Flight Schedules

Scheduled flights between given airports on a given date.

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
    api_instance = openapi_client.OperationsApi(api_client)
    origin = 'origin_example' # str | Departure airport. 3-letter IATA airport code (e.g. 'ZRH')
    destination = 'destination_example' # str | Destination airport. 3-letter IATA airport code (e.g. 'FRA')
    from_date_time = 'from_date_time_example' # str | Local departure date and optionally departure time (YYYY-MM-DD or YYYY-MM-DDTHH:mm). When not provided, time is assumed to be 00:01
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    direct_flights = True # bool | Show only direct flights (false=0, true=1). Default is false (optional)
    limit = 'limit_example' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional)
    offset = 'offset_example' # str | Number of records skipped. Defaults to 0 (optional)

    try:
        # Flight Schedules
        api_response = api_instance.operations_schedules_from_date_time_by_origin_and_destination_get(origin, destination, from_date_time, accept, direct_flights=direct_flights, limit=limit, offset=offset)
        print("The response of OperationsApi->operations_schedules_from_date_time_by_origin_and_destination_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_schedules_from_date_time_by_origin_and_destination_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin** | **str**| Departure airport. 3-letter IATA airport code (e.g. &#39;ZRH&#39;) | 
 **destination** | **str**| Destination airport. 3-letter IATA airport code (e.g. &#39;FRA&#39;) | 
 **from_date_time** | **str**| Local departure date and optionally departure time (YYYY-MM-DD or YYYY-MM-DDTHH:mm). When not provided, time is assumed to be 00:01 | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **direct_flights** | **bool**| Show only direct flights (false&#x3D;0, true&#x3D;1). Default is false | [optional] 
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] 
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] 

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

