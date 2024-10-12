# openapi_client.GeocodingApi

All URIs are relative to *http://free.gisgraphy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geocode**](GeocodingApi.md#geocode) | **GET** /geocoding/geocode | Geocode an address


# **geocode**
> AddressResultsDto geocode(address, country=country, postal=postal, format=format, var_from=var_from, to=to, param_callback=param_callback, indent=indent)

Geocode an address

The Gisgraphy geocoding service allows you to transform postal addresses or other descriptions (a street, a city, a postal code, a country, or a combination) of a location into a (latitude, longitude) coordinate.

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
    api_instance = openapi_client.GeocodingApi(api_client)
    address = 'address_example' # str | A postal address, structured or not, a street, a city, a postal code, a country, or a combination.
    country = 'country_example' # str | The country where the place/address is. It is used to determine the postal address format and to improve performance. It will probably be optional in next version to ease the usability. The value must be the ISO 3166 Alpha 2 code of the country. (optional)
    postal = 'postal_example' # str | Whether the given address is a postal address. default to false. In other words, if the address follow the specification or if it is a well-formed address as it was written on an envelope. This parameter will enable the parsing of the address by the address parser before geocoding, this way, the relevance will be better because because if parsing is successful, we will know the meaning of each word. Note that you can also specify each field if you already know them. (optional)
    format = XML # str | The output format. (optional) (default to XML)
    var_from = 1 # int | The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1 (optional) (default to 1)
    to = 10 # int | The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed) (optional) (default to 10)
    param_callback = 'param_callback_example' # str | The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python) (optional)
    indent = False # bool | indents the results. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on' (optional) (default to False)

    try:
        # Geocode an address
        api_response = api_instance.geocode(address, country=country, postal=postal, format=format, var_from=var_from, to=to, param_callback=param_callback, indent=indent)
        print("The response of GeocodingApi->geocode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeocodingApi->geocode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| A postal address, structured or not, a street, a city, a postal code, a country, or a combination. | 
 **country** | **str**| The country where the place/address is. It is used to determine the postal address format and to improve performance. It will probably be optional in next version to ease the usability. The value must be the ISO 3166 Alpha 2 code of the country. | [optional] 
 **postal** | **str**| Whether the given address is a postal address. default to false. In other words, if the address follow the specification or if it is a well-formed address as it was written on an envelope. This parameter will enable the parsing of the address by the address parser before geocoding, this way, the relevance will be better because because if parsing is successful, we will know the meaning of each word. Note that you can also specify each field if you already know them. | [optional] 
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
 - **Accept**: application/json, application/xml, application/php, application/ruby, application/yaml, application/python

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

