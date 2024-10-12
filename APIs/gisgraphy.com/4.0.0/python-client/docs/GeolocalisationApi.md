# openapi_client.GeolocalisationApi

All URIs are relative to *http://free.gisgraphy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geoloc**](GeolocalisationApi.md#geoloc) | **GET** /geoloc/search | Geocode an address


# **geoloc**
> GeolocResultsDto geoloc(lat, lng, radius=radius, distance=distance, placetype=placetype, format=format, var_from=var_from, to=to, param_callback=param_callback, indent=indent)

Geocode an address

The geolocalisation service allows to search for features around a earth location. you can Specify GPS position, Limit the results to a specific place type (e.g : search all monuments around a point), Limit the results to a specified radius, Paginate the results, Tells if you want the output to be indented (currently, applies only for XML, not JSON for performance reasons. May change in next version)

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.geoloc_results_dto import GeolocResultsDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://free.gisgraphy.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://free.gisgraphy.com"
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
    api_instance = openapi_client.GeolocalisationApi(api_client)
    lat = 3.4 # float | The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
    lng = 3.4 # float | TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
    radius = 10000.0 # float | distance from the location point in meters we'd like to search around. The value is a number > 0 if it is not specify or incorrect. (optional) (default to 10000.0)
    distance = True # bool | Whether (or not) we want the distance field to be output. This option is useful to improve the performance if we don't care about the distance (e.g : we search for name). Of course, the results won't be sorted by distance. If you use a checkbox in a form to indent the results, the value will be 'on' or 'off', so to simplify the use : the value for the web service can be 'true' or 'on' (optional) (default to True)
    placetype = 'placetype_example' # str | filter search for a given placetype (optional)
    format = XML # str | The output format. (optional) (default to XML)
    var_from = 1 # int | The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1 (optional) (default to 1)
    to = 10 # int | The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed) (optional) (default to 10)
    param_callback = 'param_callback_example' # str | The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python) (optional)
    indent = False # bool | indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on' (optional) (default to False)

    try:
        # Geocode an address
        api_response = api_instance.geoloc(lat, lng, radius=radius, distance=distance, placetype=placetype, format=format, var_from=var_from, to=to, param_callback=param_callback, indent=indent)
        print("The response of GeolocalisationApi->geoloc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeolocalisationApi->geoloc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates | 
 **lng** | **float**| TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates. | 
 **radius** | **float**| distance from the location point in meters we&#39;d like to search around. The value is a number &gt; 0 if it is not specify or incorrect. | [optional] [default to 10000.0]
 **distance** | **bool**| Whether (or not) we want the distance field to be output. This option is useful to improve the performance if we don&#39;t care about the distance (e.g : we search for name). Of course, the results won&#39;t be sorted by distance. If you use a checkbox in a form to indent the results, the value will be &#39;on&#39; or &#39;off&#39;, so to simplify the use : the value for the web service can be &#39;true&#39; or &#39;on&#39; | [optional] [default to True]
 **placetype** | **str**| filter search for a given placetype | [optional] 
 **format** | **str**| The output format. | [optional] [default to XML]
 **var_from** | **int**| The first pagination index. Numbered from 1. If the number is &lt; 1 or not specified, it will be set to the default value : 1 | [optional] [default to 1]
 **to** | **int**| The last pagination index. if &lt; 1 or not specified, it will be set to startindex + 10. Max &#x3D; 10 (can be changed) | [optional] [default to 10]
 **param_callback** | **str**| The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python) | [optional] 
 **indent** | **bool**| indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be &#39;on&#39; or &#39;off&#39;, so for a simple use : the value of indent can be &#39;true&#39; or &#39;on&#39; | [optional] [default to False]

### Return type

[**GeolocResultsDto**](GeolocResultsDto.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, application/php, application/ruby, application/yaml, application/python, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully processed |  -  |
**401** | Need auth. The API key parameter is missing or wrong, or doesn&#39;t correspond to any subscriptions |  -  |
**403** | Unhauthorize (auth will change nothing).Your IP is not allowed. |  -  |
**412** | Missing parameter. Some parameters required for the webservices ar missing, please consult documentation |  -  |
**429** | Too many requests. You exceed the authorized rate |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

