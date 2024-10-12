# openapi_client.SearchApi

All URIs are relative to *http://api.europeana.eu*

Method | HTTP request | Description
------------- | ------------- | -------------
[**open_search**](SearchApi.md#open_search) | **GET** /record/v2/opensearch.rss | basic search function following the OpenSearch specification
[**search_records**](SearchApi.md#search_records) | **GET** /record/v2/search.json | search for records
[**search_records_post**](SearchApi.md#search_records_post) | **POST** /record/v2/search.json | search for records post
[**translate_query_using_get**](SearchApi.md#translate_query_using_get) | **GET** /record/v2/translateQuery.json | translate a term to different languages


# **open_search**
> ModelAndView open_search(search_terms, count=count, start_index=start_index)

basic search function following the OpenSearch specification

### Example


```python
import openapi_client
from openapi_client.models.model_and_view import ModelAndView
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.europeana.eu
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.europeana.eu"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    search_terms = 'search_terms_example' # str | searchTerms
    count = 12 # int | count (optional) (default to 12)
    start_index = 1 # int | startIndex (optional) (default to 1)

    try:
        # basic search function following the OpenSearch specification
        api_response = api_instance.open_search(search_terms, count=count, start_index=start_index)
        print("The response of SearchApi->open_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->open_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_terms** | **str**| searchTerms | 
 **count** | **int**| count | [optional] [default to 12]
 **start_index** | **int**| startIndex | [optional] [default to 1]

### Return type

[**ModelAndView**](ModelAndView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/rss+xml, application/xhtml+xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_records**
> ModelAndView search_records(query, wskey, boost=boost, param_callback=param_callback, colourpalette=colourpalette, cursor=cursor, facet=facet, hit_fl=hit_fl, hit_selectors=hit_selectors, landingpage=landingpage, lang=lang, media=media, profile=profile, q_source=q_source, q_target=q_target, qf=qf, reusability=reusability, rows=rows, sort=sort, start=start, text_fulltext=text_fulltext, theme=theme, thumbnail=thumbnail)

search for records

### Example


```python
import openapi_client
from openapi_client.models.model_and_view import ModelAndView
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.europeana.eu
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.europeana.eu"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    query = 'query_example' # str | query
    wskey = 'wskey_example' # str | wskey
    boost = 'boost_example' # str | boost (optional)
    param_callback = 'param_callback_example' # str | callback (optional)
    colourpalette = ['colourpalette_example'] # List[str] | colourpalette (optional)
    cursor = 'cursor_example' # str | cursor (optional)
    facet = ['facet_example'] # List[str] | facet (optional)
    hit_fl = 'hit_fl_example' # str | hit.fl (optional)
    hit_selectors = 'hit_selectors_example' # str | hit.selectors (optional)
    landingpage = True # bool | landingpage (optional)
    lang = 'lang_example' # str | lang (optional)
    media = True # bool | media (optional)
    profile = 'standard' # str | profile (optional) (default to 'standard')
    q_source = 'q_source_example' # str | q.source (optional)
    q_target = 'q_target_example' # str | q.target (optional)
    qf = ['qf_example'] # List[str] | qf (optional)
    reusability = ['reusability_example'] # List[str] | reusability (optional)
    rows = 12 # int | rows (optional) (default to 12)
    sort = 'sort_example' # str | sort (optional)
    start = 1 # int | start (optional) (default to 1)
    text_fulltext = True # bool | text_fulltext (optional)
    theme = 'theme_example' # str | theme (optional)
    thumbnail = True # bool | thumbnail (optional)

    try:
        # search for records
        api_response = api_instance.search_records(query, wskey, boost=boost, param_callback=param_callback, colourpalette=colourpalette, cursor=cursor, facet=facet, hit_fl=hit_fl, hit_selectors=hit_selectors, landingpage=landingpage, lang=lang, media=media, profile=profile, q_source=q_source, q_target=q_target, qf=qf, reusability=reusability, rows=rows, sort=sort, start=start, text_fulltext=text_fulltext, theme=theme, thumbnail=thumbnail)
        print("The response of SearchApi->search_records:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_records: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| query | 
 **wskey** | **str**| wskey | 
 **boost** | **str**| boost | [optional] 
 **param_callback** | **str**| callback | [optional] 
 **colourpalette** | [**List[str]**](str.md)| colourpalette | [optional] 
 **cursor** | **str**| cursor | [optional] 
 **facet** | [**List[str]**](str.md)| facet | [optional] 
 **hit_fl** | **str**| hit.fl | [optional] 
 **hit_selectors** | **str**| hit.selectors | [optional] 
 **landingpage** | **bool**| landingpage | [optional] 
 **lang** | **str**| lang | [optional] 
 **media** | **bool**| media | [optional] 
 **profile** | **str**| profile | [optional] [default to &#39;standard&#39;]
 **q_source** | **str**| q.source | [optional] 
 **q_target** | **str**| q.target | [optional] 
 **qf** | [**List[str]**](str.md)| qf | [optional] 
 **reusability** | [**List[str]**](str.md)| reusability | [optional] 
 **rows** | **int**| rows | [optional] [default to 12]
 **sort** | **str**| sort | [optional] 
 **start** | **int**| start | [optional] [default to 1]
 **text_fulltext** | **bool**| text_fulltext | [optional] 
 **theme** | **str**| theme | [optional] 
 **thumbnail** | **bool**| thumbnail | [optional] 

### Return type

[**ModelAndView**](ModelAndView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_records_post**
> ModelAndView search_records_post(wskey, search_request)

search for records post

### Example


```python
import openapi_client
from openapi_client.models.model_and_view import ModelAndView
from openapi_client.models.search_request import SearchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.europeana.eu
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.europeana.eu"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    wskey = 'wskey_example' # str | wskey
    search_request = openapi_client.SearchRequest() # SearchRequest | searchRequest

    try:
        # search for records post
        api_response = api_instance.search_records_post(wskey, search_request)
        print("The response of SearchApi->search_records_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_records_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wskey** | **str**| wskey | 
 **search_request** | [**SearchRequest**](SearchRequest.md)| searchRequest | 

### Return type

[**ModelAndView**](ModelAndView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translate_query_using_get**
> ModelAndView translate_query_using_get(language_codes, term, wskey, param_callback=param_callback, profile=profile)

translate a term to different languages

### Example


```python
import openapi_client
from openapi_client.models.model_and_view import ModelAndView
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.europeana.eu
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.europeana.eu"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    language_codes = ['language_codes_example'] # List[str] | languageCodes
    term = 'term_example' # str | term
    wskey = 'wskey_example' # str | wskey
    param_callback = 'param_callback_example' # str | callback (optional)
    profile = 'profile_example' # str | profile (optional)

    try:
        # translate a term to different languages
        api_response = api_instance.translate_query_using_get(language_codes, term, wskey, param_callback=param_callback, profile=profile)
        print("The response of SearchApi->translate_query_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->translate_query_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language_codes** | [**List[str]**](str.md)| languageCodes | 
 **term** | **str**| term | 
 **wskey** | **str**| wskey | 
 **param_callback** | **str**| callback | [optional] 
 **profile** | **str**| profile | [optional] 

### Return type

[**ModelAndView**](ModelAndView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

