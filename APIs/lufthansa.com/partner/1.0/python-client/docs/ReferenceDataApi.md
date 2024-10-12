# openapi_client.ReferenceDataApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seat_details**](ReferenceDataApi.md#seat_details) | **GET** /references/seatdetails/{aircraftCode}/{cabinCode} | Seat Details


# **seat_details**
> str seat_details(aircraft_code, accept, cabin_code, lang=lang)

Seat Details

A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.

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
    aircraft_code = 'aircraft_code_example' # str | Aircraft type. 3-character IATA equipment code
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    cabin_code = 'C' # str | Cabin class: M, E, C, F (Acceptable values are: \"\", \"M\", \"E\", \"C\", \"F\") (default to 'C')
    lang = 'lang_example' # str | 2-letter ISO 3166-1 language code (optional)

    try:
        # Seat Details
        api_response = api_instance.seat_details(aircraft_code, accept, cabin_code, lang=lang)
        print("The response of ReferenceDataApi->seat_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataApi->seat_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aircraft_code** | **str**| Aircraft type. 3-character IATA equipment code | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **cabin_code** | **str**| Cabin class: M, E, C, F (Acceptable values are: \&quot;\&quot;, \&quot;M\&quot;, \&quot;E\&quot;, \&quot;C\&quot;, \&quot;F\&quot;) | [default to &#39;C&#39;]
 **lang** | **str**| 2-letter ISO 3166-1 language code | [optional] 

### Return type

**str**

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

