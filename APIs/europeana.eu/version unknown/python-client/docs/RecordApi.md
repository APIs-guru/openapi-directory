# openapi_client.RecordApi

All URIs are relative to *http://api.europeana.eu*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_single_record_json**](RecordApi.md#get_single_record_json) | **GET** /record/v2/{collectionId}/{recordId}.json | get a single record in JSON format
[**get_single_record_json_ld**](RecordApi.md#get_single_record_json_ld) | **GET** /record/v2/{collectionId}/{recordId}.jsonld | get single record in JSON LD format
[**get_single_record_rdf**](RecordApi.md#get_single_record_rdf) | **GET** /record/v2/{collectionId}/{recordId}.rdf | get single record in RDF format)
[**get_single_record_schema_org**](RecordApi.md#get_single_record_schema_org) | **GET** /record/v2/{collectionId}/{recordId}.schema.jsonld | get single record in Schema.org JSON LD format
[**get_single_record_turtle**](RecordApi.md#get_single_record_turtle) | **GET** /record/v2/{collectionId}/{recordId}.ttl | get single record in turtle format)


# **get_single_record_json**
> ModelAndView get_single_record_json(collection_id, record_id, wskey, param_callback=param_callback, lang=lang, profile=profile)

get a single record in JSON format

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
    api_instance = openapi_client.RecordApi(api_client)
    collection_id = 'collection_id_example' # str | collectionId
    record_id = 'record_id_example' # str | recordId
    wskey = 'wskey_example' # str | wskey
    param_callback = 'param_callback_example' # str | callback (optional)
    lang = 'lang_example' # str | lang (optional)
    profile = 'standard' # str | profile (optional) (default to 'standard')

    try:
        # get a single record in JSON format
        api_response = api_instance.get_single_record_json(collection_id, record_id, wskey, param_callback=param_callback, lang=lang, profile=profile)
        print("The response of RecordApi->get_single_record_json:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordApi->get_single_record_json: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **str**| collectionId | 
 **record_id** | **str**| recordId | 
 **wskey** | **str**| wskey | 
 **param_callback** | **str**| callback | [optional] 
 **lang** | **str**| lang | [optional] 
 **profile** | **str**| profile | [optional] [default to &#39;standard&#39;]

### Return type

[**ModelAndView**](ModelAndView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_single_record_json_ld**
> ModelAndView get_single_record_json_ld(collection_id, record_id, wskey, param_callback=param_callback, lang=lang, profile=profile)

get single record in JSON LD format

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
    api_instance = openapi_client.RecordApi(api_client)
    collection_id = 'collection_id_example' # str | collectionId
    record_id = 'record_id_example' # str | recordId
    wskey = 'wskey_example' # str | wskey
    param_callback = 'param_callback_example' # str | callback (optional)
    lang = 'lang_example' # str | lang (optional)
    profile = 'standard' # str | profile (optional) (default to 'standard')

    try:
        # get single record in JSON LD format
        api_response = api_instance.get_single_record_json_ld(collection_id, record_id, wskey, param_callback=param_callback, lang=lang, profile=profile)
        print("The response of RecordApi->get_single_record_json_ld:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordApi->get_single_record_json_ld: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **str**| collectionId | 
 **record_id** | **str**| recordId | 
 **wskey** | **str**| wskey | 
 **param_callback** | **str**| callback | [optional] 
 **lang** | **str**| lang | [optional] 
 **profile** | **str**| profile | [optional] [default to &#39;standard&#39;]

### Return type

[**ModelAndView**](ModelAndView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8, application/ld+json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_single_record_rdf**
> ModelAndView get_single_record_rdf(collection_id, record_id, wskey, lang=lang, profile=profile)

get single record in RDF format)

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
    api_instance = openapi_client.RecordApi(api_client)
    collection_id = 'collection_id_example' # str | collectionId
    record_id = 'record_id_example' # str | recordId
    wskey = 'wskey_example' # str | wskey
    lang = 'lang_example' # str | lang (optional)
    profile = 'standard' # str | profile (optional) (default to 'standard')

    try:
        # get single record in RDF format)
        api_response = api_instance.get_single_record_rdf(collection_id, record_id, wskey, lang=lang, profile=profile)
        print("The response of RecordApi->get_single_record_rdf:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordApi->get_single_record_rdf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **str**| collectionId | 
 **record_id** | **str**| recordId | 
 **wskey** | **str**| wskey | 
 **lang** | **str**| lang | [optional] 
 **profile** | **str**| profile | [optional] [default to &#39;standard&#39;]

### Return type

[**ModelAndView**](ModelAndView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/rdf+xml;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_single_record_schema_org**
> ModelAndView get_single_record_schema_org(collection_id, record_id, wskey, param_callback=param_callback, lang=lang, profile=profile)

get single record in Schema.org JSON LD format

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
    api_instance = openapi_client.RecordApi(api_client)
    collection_id = 'collection_id_example' # str | collectionId
    record_id = 'record_id_example' # str | recordId
    wskey = 'wskey_example' # str | wskey
    param_callback = 'param_callback_example' # str | callback (optional)
    lang = 'lang_example' # str | lang (optional)
    profile = 'standard' # str | profile (optional) (default to 'standard')

    try:
        # get single record in Schema.org JSON LD format
        api_response = api_instance.get_single_record_schema_org(collection_id, record_id, wskey, param_callback=param_callback, lang=lang, profile=profile)
        print("The response of RecordApi->get_single_record_schema_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordApi->get_single_record_schema_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **str**| collectionId | 
 **record_id** | **str**| recordId | 
 **wskey** | **str**| wskey | 
 **param_callback** | **str**| callback | [optional] 
 **lang** | **str**| lang | [optional] 
 **profile** | **str**| profile | [optional] [default to &#39;standard&#39;]

### Return type

[**ModelAndView**](ModelAndView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8, application/ld+json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_single_record_turtle**
> ModelAndView get_single_record_turtle(collection_id, record_id, wskey, lang=lang, profile=profile)

get single record in turtle format)

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
    api_instance = openapi_client.RecordApi(api_client)
    collection_id = 'collection_id_example' # str | collectionId
    record_id = 'record_id_example' # str | recordId
    wskey = 'wskey_example' # str | wskey
    lang = 'lang_example' # str | lang (optional)
    profile = 'standard' # str | profile (optional) (default to 'standard')

    try:
        # get single record in turtle format)
        api_response = api_instance.get_single_record_turtle(collection_id, record_id, wskey, lang=lang, profile=profile)
        print("The response of RecordApi->get_single_record_turtle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordApi->get_single_record_turtle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **str**| collectionId | 
 **record_id** | **str**| recordId | 
 **wskey** | **str**| wskey | 
 **lang** | **str**| lang | [optional] 
 **profile** | **str**| profile | [optional] [default to &#39;standard&#39;]

### Return type

[**ModelAndView**](ModelAndView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-turtle, text/turtle, application/turtle

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

