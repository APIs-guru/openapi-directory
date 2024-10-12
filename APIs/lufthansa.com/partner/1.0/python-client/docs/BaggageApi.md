# openapi_client.BaggageApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**baggage_trip_and_contact**](BaggageApi.md#baggage_trip_and_contact) | **GET** /baggage/baggagetripandcontact/{searchID} | Baggage Trip and Contact


# **baggage_trip_and_contact**
> str baggage_trip_and_contact(search_id, accept)

Baggage Trip and Contact

Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners

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
    api_instance = openapi_client.BaggageApi(api_client)
    search_id = 'search_id_example' # str | Bag tag number, PNR, boarding card or FQTV ID
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")

    try:
        # Baggage Trip and Contact
        api_response = api_instance.baggage_trip_and_contact(search_id, accept)
        print("The response of BaggageApi->baggage_trip_and_contact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BaggageApi->baggage_trip_and_contact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_id** | **str**| Bag tag number, PNR, boarding card or FQTV ID | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 

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

