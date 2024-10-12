# openapi_client.FeedContentAvailabilityApi

All URIs are relative to *https://wikimedia.org/api/rest_v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**feed_availability_get**](FeedContentAvailabilityApi.md#feed_availability_get) | **GET** /feed/availability | Gets availability of featured feed content for the apps by wiki domain.


# **feed_availability_get**
> Availability feed_availability_get()

Gets availability of featured feed content for the apps by wiki domain.

Gets availability of featured feed content for the apps by wiki domain.  Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) 

### Example


```python
import openapi_client
from openapi_client.models.availability import Availability
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FeedContentAvailabilityApi(api_client)

    try:
        # Gets availability of featured feed content for the apps by wiki domain.
        api_response = api_instance.feed_availability_get()
        print("The response of FeedContentAvailabilityApi->feed_availability_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedContentAvailabilityApi->feed_availability_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Availability**](Availability.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Availability/1.0.1", application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON containing lists of wiki domains for which feed content is available. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

