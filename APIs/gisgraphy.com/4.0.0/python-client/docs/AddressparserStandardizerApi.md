# openapi_client.AddressparserStandardizerApi

All URIs are relative to *http://free.gisgraphy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressparsing**](AddressparserStandardizerApi.md#addressparsing) | **GET** /addressparser/parse | split a raw address into several parts


# **addressparsing**
> AddressResultsDto addressparsing(address, country=country, format=format, param_callback=param_callback, indent=indent, standardize=standardize, geocode=geocode)

split a raw address into several parts

The address parser and address standardizer, are part of the Gisgraphy project (free open source worldwide geocoder). Address parsing is the process of dividing a single address string into its individual component parts. Please visit [http://www.address-parser.net](http://www.address-parser.net) for more details 

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
    api_instance = openapi_client.AddressparserStandardizerApi(api_client)
    address = 'address_example' # str | A postal address.
    country = 'country_example' # str | The ISO 3166 Alpha 2 code of the country. (optional)
    format = XML # str | The output format. (optional) (default to XML)
    param_callback = 'param_callback_example' # str | The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python) (optional)
    indent = False # bool | indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on' (optional) (default to False)
    standardize = False # bool | Whether the address should be standardized after parsing, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on' (optional) (default to False)
    geocode = False # bool | UNUSED YET. Whether the address should be geocoded after parsing, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on' (optional) (default to False)

    try:
        # split a raw address into several parts
        api_response = api_instance.addressparsing(address, country=country, format=format, param_callback=param_callback, indent=indent, standardize=standardize, geocode=geocode)
        print("The response of AddressparserStandardizerApi->addressparsing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddressparserStandardizerApi->addressparsing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| A postal address. | 
 **country** | **str**| The ISO 3166 Alpha 2 code of the country. | [optional] 
 **format** | **str**| The output format. | [optional] [default to XML]
 **param_callback** | **str**| The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python) | [optional] 
 **indent** | **bool**| indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be &#39;on&#39; or &#39;off&#39;, so for a simple use : the value of indent can be &#39;true&#39; or &#39;on&#39; | [optional] [default to False]
 **standardize** | **bool**| Whether the address should be standardized after parsing, the value will be &#39;on&#39; or &#39;off&#39;, so for a simple use : the value of indent can be &#39;true&#39; or &#39;on&#39; | [optional] [default to False]
 **geocode** | **bool**| UNUSED YET. Whether the address should be geocoded after parsing, the value will be &#39;on&#39; or &#39;off&#39;, so for a simple use : the value of indent can be &#39;true&#39; or &#39;on&#39; | [optional] [default to False]

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

