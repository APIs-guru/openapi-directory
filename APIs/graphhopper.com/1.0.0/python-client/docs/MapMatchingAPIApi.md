# openapi_client.MapMatchingAPIApi

All URIs are relative to *https://graphhopper.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_gpx**](MapMatchingAPIApi.md#post_gpx) | **POST** /match | Map-match a GPX file


# **post_gpx**
> RouteResponse post_gpx(gps_accuracy=gps_accuracy, vehicle=vehicle)

Map-match a GPX file

### Example You get an example response for a GPX via:  ``` curl -XPOST -H \"Content-Type: application/gpx+xml\" \"https://graphhopper.com/api/1/match?vehicle=car&key=[YOUR_KEY]\" --data @/path/to/some.gpx ```  A minimal working GPX file looks like ```gpx <gpx>  <trk>   <trkseg>    <trkpt lat=\"51.343657\" lon=\"12.360708\"></trkpt>    <trkpt lat=\"51.343796\" lon=\"12.361337\"></trkpt>    <trkpt lat=\"51.342784\" lon=\"12.361882\"></trkpt>   </trkseg>  </trk> </gpx> ```  ### Introduction ![Map Matching screenshot](./img/map-matching-example.gif)  The Map Matching API is part of the GraphHopper Directions API and with this API you can snap measured GPS points typically as GPX files to a digital road network to e.g. clean data or attach certain data like elevation or turn instructions to it. Read more at Wikipedia.  In the example screenshot above and demo you see the Map Matching API in action where the black line is the GPS track and the green one is matched result.  Most of the times, you can simply POST a GPX file, but some of the request parameters of the [Routing API](#tag/Routing-API) apply here, too.  ### API Clients and Examples See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#map-matching).  ### Limits and Counts The cost for one request depends on the number of GPS location and is documented [here](https://graphhopper.com/api/1/docs/FAQ/).  One request should not exceed the Map Matching API location limit depending on the package, see the pricing in our dashboard. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.route_response import RouteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://graphhopper.com/api/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://graphhopper.com/api/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MapMatchingAPIApi(api_client)
    gps_accuracy = 56 # int | Specify the precision of a point, in meter (optional)
    vehicle = 'vehicle_example' # str | Specify the vehicle profile like car (optional)

    try:
        # Map-match a GPX file
        api_response = api_instance.post_gpx(gps_accuracy=gps_accuracy, vehicle=vehicle)
        print("The response of MapMatchingAPIApi->post_gpx:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MapMatchingAPIApi->post_gpx: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gps_accuracy** | **int**| Specify the precision of a point, in meter | [optional] 
 **vehicle** | **str**| Specify the vehicle profile like car | [optional] 

### Return type

[**RouteResponse**](RouteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing Result |  * X-RateLimit-Credits - The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed. <br>  * X-RateLimit-Limit - Your current daily credit limit. <br>  * X-RateLimit-Remaining - Your remaining credits until the reset. <br>  * X-RateLimit-Reset - The number of seconds that you have to wait before a reset of the credit count is done. <br>  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

