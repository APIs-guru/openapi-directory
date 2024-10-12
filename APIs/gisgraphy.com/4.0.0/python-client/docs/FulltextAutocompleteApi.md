# openapi_client.FulltextAutocompleteApi

All URIs are relative to *http://free.gisgraphy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fulltxtsearch**](FulltextAutocompleteApi.md#fulltxtsearch) | **GET** /fulltext/search | search for places by text around a GPS point


# **fulltxtsearch**
> FulltextResultsDto fulltxtsearch(q, allwordsrequired, spellchecking=spellchecking, lat=lat, lng=lng, radius=radius, suggest=suggest, style=style, country=country, lang=lang, format=format, var_from=var_from, to=to, param_callback=param_callback, indent=indent)

search for places by text around a GPS point

The full text service allows you to search for features / places / street and do autocompletion . you can : Specify one or more words search on part of the name (auto completion / suggestion) Search for text or zip code Specify a GPS restriction (promote nearest, not sorted but has an impact on the score), Limit the results to a specific Language, Country, place type, Paginate the results, Specify the output verbosity, Tells if you want the output to be indented, Tells that all words are required or not, The search is case insensitive, use synonyms (Saint/st, ..), separator characters stripping, ...

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.fulltext_results_dto import FulltextResultsDto
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
    api_instance = openapi_client.FulltextAutocompleteApi(api_client)
    q = 'q_example' # str | The searched text : The text for the query can be a zip code, a string or one or more strings
    allwordsrequired = False # bool | Whether the fulltext engine should considers all the words specified as required. Defaults to false (since v 4.0). possible values are true|false (or 'on' when used with the rest service) (default to False)
    spellchecking = 'spellchecking_example' # str | The spellchecking (optional) : whether some suggestions should be provided if no results are found (optional)
    lat = 3.4 # float | The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates (optional)
    lng = 3.4 # float | TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates. (optional)
    radius = 10000.0 # float | distance from the location point in meters we'd like to search around. The value is a number > 0 if it is not specify or incorrect. (optional) (default to 10000.0)
    suggest = False # bool | If this parameter is set then it will search in part of the names of the street, place,.... It allow you to do auto completion auto suggestion. See the Gisgraphy leaflet plugin for more details. The JSON format will be forced if this parameter is true. See auto completion / suggestions engine for more details (optional) (default to False)
    style = MEDIUM # str | The output style verbosity (optional) : Determines the output verbosity. 4 styles are available (optional) (default to MEDIUM)
    country = 'country_example' # str | limit the search to the specified ISO 3166 country code. Default : search in all countries (optional)
    lang = 'lang_example' # str | The language code (optional) : The iso 639 Alpha2 or alpha3 Language Code. Some properties such as the AlternateName AdmNames and countryname belong to a certain language code. The language parameter can limit the output of those fields to a certain language (it only apply when style parameter='style') : If the language code does not exists or is not specified, properties with all the languages are retrieved If it exists, the properties with the specified language code, are retrieved (optional)
    format = XML # str | The output format. (optional) (default to XML)
    var_from = 1 # int | The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1 (optional) (default to 1)
    to = 10 # int | The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed) (optional) (default to 10)
    param_callback = 'param_callback_example' # str | The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python) (optional)
    indent = False # bool | indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on' (optional) (default to False)

    try:
        # search for places by text around a GPS point
        api_response = api_instance.fulltxtsearch(q, allwordsrequired, spellchecking=spellchecking, lat=lat, lng=lng, radius=radius, suggest=suggest, style=style, country=country, lang=lang, format=format, var_from=var_from, to=to, param_callback=param_callback, indent=indent)
        print("The response of FulltextAutocompleteApi->fulltxtsearch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulltextAutocompleteApi->fulltxtsearch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| The searched text : The text for the query can be a zip code, a string or one or more strings | 
 **allwordsrequired** | **bool**| Whether the fulltext engine should considers all the words specified as required. Defaults to false (since v 4.0). possible values are true|false (or &#39;on&#39; when used with the rest service) | [default to False]
 **spellchecking** | **str**| The spellchecking (optional) : whether some suggestions should be provided if no results are found | [optional] 
 **lat** | **float**| The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates | [optional] 
 **lng** | **float**| TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates. | [optional] 
 **radius** | **float**| distance from the location point in meters we&#39;d like to search around. The value is a number &gt; 0 if it is not specify or incorrect. | [optional] [default to 10000.0]
 **suggest** | **bool**| If this parameter is set then it will search in part of the names of the street, place,.... It allow you to do auto completion auto suggestion. See the Gisgraphy leaflet plugin for more details. The JSON format will be forced if this parameter is true. See auto completion / suggestions engine for more details | [optional] [default to False]
 **style** | **str**| The output style verbosity (optional) : Determines the output verbosity. 4 styles are available | [optional] [default to MEDIUM]
 **country** | **str**| limit the search to the specified ISO 3166 country code. Default : search in all countries | [optional] 
 **lang** | **str**| The language code (optional) : The iso 639 Alpha2 or alpha3 Language Code. Some properties such as the AlternateName AdmNames and countryname belong to a certain language code. The language parameter can limit the output of those fields to a certain language (it only apply when style parameter&#x3D;&#39;style&#39;) : If the language code does not exists or is not specified, properties with all the languages are retrieved If it exists, the properties with the specified language code, are retrieved | [optional] 
 **format** | **str**| The output format. | [optional] [default to XML]
 **var_from** | **int**| The first pagination index. Numbered from 1. If the number is &lt; 1 or not specified, it will be set to the default value : 1 | [optional] [default to 1]
 **to** | **int**| The last pagination index. if &lt; 1 or not specified, it will be set to startindex + 10. Max &#x3D; 10 (can be changed) | [optional] [default to 10]
 **param_callback** | **str**| The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python) | [optional] 
 **indent** | **bool**| indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be &#39;on&#39; or &#39;off&#39;, so for a simple use : the value of indent can be &#39;true&#39; or &#39;on&#39; | [optional] [default to False]

### Return type

[**FulltextResultsDto**](FulltextResultsDto.md)

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

