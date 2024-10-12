# openapi_client.ReversegeocodingApi

All URIs are relative to *http://free.gisgraphy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reversegeocode**](ReversegeocodingApi.md#reversegeocode) | **GET** /reversegeocoding/reversegeocode | Reverse geocode an address


# **reversegeocode**
> AddressResultsDto reversegeocode(lat, lng, format=format, var_from=var_from, to=to, param_callback=param_callback, indent=indent)

Reverse geocode an address

The Reverse geocoding service allows to search for an address for a given GPS position.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.address_results_dto import AddressResultsDto
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
    api_instance = openapi_client.ReversegeocodingApi(api_client)
    lat = 3.4 # float | The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
    lng = 3.4 # float | TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
    format = XML # str | The output format. (optional) (default to XML)
    var_from = 1 # int | The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1 (optional) (default to 1)
    to = 10 # int | The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed) (optional) (default to 10)
    param_callback = 'param_callback_example' # str | The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python) (optional)
    indent = False # bool | indents the results. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on' (optional) (default to False)

    try:
        # Reverse geocode an address
        api_response = api_instance.reversegeocode(lat, lng, format=format, var_from=var_from, to=to, param_callback=param_callback, indent=indent)
        print("The response of ReversegeocodingApi->reversegeocode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReversegeocodingApi->reversegeocode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates | 
 **lng** | **float**| TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates. | 
 **format** | **str**| The output format. | [optional] [default to XML]
 **var_from** | **int**| The first pagination index. Numbered from 1. If the number is &lt; 1 or not specified, it will be set to the default value : 1 | [optional] [default to 1]
 **to** | **int**| The last pagination index. if &lt; 1 or not specified, it will be set to startindex + 10. Max &#x3D; 10 (can be changed) | [optional] [default to 10]
 **param_callback** | **str**| The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python) | [optional] 
 **indent** | **bool**| indents the results. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be &#39;on&#39; or &#39;off&#39;, so for a simple use : the value of indent can be &#39;true&#39; or &#39;on&#39; | [optional] [default to False]

### Return type

[**AddressResultsDto**](AddressResultsDto.md)

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

