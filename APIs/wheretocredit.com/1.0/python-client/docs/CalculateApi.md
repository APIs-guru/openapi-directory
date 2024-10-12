# openapi_client.CalculateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api10_calculate_post**](CalculateApi.md#api10_calculate_post) | **POST** /api/1.0/calculate | Calculates the number of miles earned for every frequent flyer program.


# **api10_calculate_post**
> List[CalculateResult] api10_calculate_post(itinerary=itinerary)

Calculates the number of miles earned for every frequent flyer program.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.calculate_result import CalculateResult
from openapi_client.models.itinerary import Itinerary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CalculateApi(api_client)
    itinerary = [openapi_client.Itinerary()] # List[Itinerary] | Collection of <code>Itinerary</code> to allow multiple frequent flyer mile or point calculations at once. (optional)

    try:
        # Calculates the number of miles earned for every frequent flyer program.
        api_response = api_instance.api10_calculate_post(itinerary=itinerary)
        print("The response of CalculateApi->api10_calculate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalculateApi->api10_calculate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itinerary** | [**List[Itinerary]**](Itinerary.md)| Collection of &lt;code&gt;Itinerary&lt;/code&gt; to allow multiple frequent flyer mile or point calculations at once. | [optional] 

### Return type

[**List[CalculateResult]**](CalculateResult.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success.  However individual &lt;code&gt;CalculateResults&lt;/code&gt; in the response could have failed. |  -  |
**429** | Usage limits exceeded. (Free users only) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

