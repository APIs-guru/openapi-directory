# openapi_client.OffersApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offers_lounges_by_location_get**](OffersApi.md#offers_lounges_by_location_get) | **GET** /offers/lounges/{location} | Lounges
[**offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get**](OffersApi.md#offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get) | **GET** /offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass} | Seat Maps


# **offers_lounges_by_location_get**
> object offers_lounges_by_location_get(location, accept, cabin_class=cabin_class, tier_code=tier_code, lang=lang)

Lounges

Lounge information

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
    api_instance = openapi_client.OffersApi(api_client)
    location = 'location_example' # str | 3-leter IATA airport or city code (e.g. 'ZRH')
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    cabin_class = 'cabin_class_example' # str | Cabin class: 'M', 'E', 'C', 'F' (Acceptable values are: \"\", \"M\", \"E\", \"C\", \"F\") (optional)
    tier_code = 'tier_code_example' # str | Frequent flyer level ('FTL', 'SGC', 'SEN', 'HON') (Acceptable values are: \"\", \"FTL\", \"SGC\", \"SEN\", \"HON\") (optional)
    lang = 'lang_example' # str | Language code. (optional)

    try:
        # Lounges
        api_response = api_instance.offers_lounges_by_location_get(location, accept, cabin_class=cabin_class, tier_code=tier_code, lang=lang)
        print("The response of OffersApi->offers_lounges_by_location_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->offers_lounges_by_location_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| 3-leter IATA airport or city code (e.g. &#39;ZRH&#39;) | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **cabin_class** | **str**| Cabin class: &#39;M&#39;, &#39;E&#39;, &#39;C&#39;, &#39;F&#39; (Acceptable values are: \&quot;\&quot;, \&quot;M\&quot;, \&quot;E\&quot;, \&quot;C\&quot;, \&quot;F\&quot;) | [optional] 
 **tier_code** | **str**| Frequent flyer level (&#39;FTL&#39;, &#39;SGC&#39;, &#39;SEN&#39;, &#39;HON&#39;) (Acceptable values are: \&quot;\&quot;, \&quot;FTL\&quot;, \&quot;SGC\&quot;, \&quot;SEN\&quot;, \&quot;HON\&quot;) | [optional] 
 **lang** | **str**| Language code. | [optional] 

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

# **offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get**
> object offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get(flight_number, origin, destination, var_date, cabin_class, accept)

Seat Maps

Cabin layout and seat characteristics.

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
    api_instance = openapi_client.OffersApi(api_client)
    flight_number = 'flight_number_example' # str | Flight number including carrier code and any suffix (e.g. 'LH2037')
    origin = 'origin_example' # str | Departure airport. 3-letter IATA airport code (e.g. 'TXL')
    destination = 'destination_example' # str | Destination airport. 3-letter IATA airport code (e.g. 'MUC')
    var_date = 'var_date_example' # str | Departure date (YYYY-MM-DD)
    cabin_class = 'cabin_class_example' # str | Cabin class: 'M', 'E', 'C', 'F'. Some flights have fewer classes (Acceptable values are: \"M\", \"E\", \"C\", \"F\")
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")

    try:
        # Seat Maps
        api_response = api_instance.offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get(flight_number, origin, destination, var_date, cabin_class, accept)
        print("The response of OffersApi->offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flight_number** | **str**| Flight number including carrier code and any suffix (e.g. &#39;LH2037&#39;) | 
 **origin** | **str**| Departure airport. 3-letter IATA airport code (e.g. &#39;TXL&#39;) | 
 **destination** | **str**| Destination airport. 3-letter IATA airport code (e.g. &#39;MUC&#39;) | 
 **var_date** | **str**| Departure date (YYYY-MM-DD) | 
 **cabin_class** | **str**| Cabin class: &#39;M&#39;, &#39;E&#39;, &#39;C&#39;, &#39;F&#39;. Some flights have fewer classes (Acceptable values are: \&quot;M\&quot;, \&quot;E\&quot;, \&quot;C\&quot;, \&quot;F\&quot;) | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 

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

