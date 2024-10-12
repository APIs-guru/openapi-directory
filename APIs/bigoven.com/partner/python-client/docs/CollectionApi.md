# openapi_client.CollectionApi

All URIs are relative to *https://api2.bigoven.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collection_collections**](CollectionApi.md#collection_collections) | **GET** /collections | Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.
[**collection_get_collection**](CollectionApi.md#collection_get_collection) | **GET** /collection/{id} | Gets a recipe collection. A recipe collection is a curated set of recipes.
[**collection_get_collection_meta**](CollectionApi.md#collection_get_collection_meta) | **GET** /collection/{id}/meta | Gets a recipe collection metadata. A recipe collection is a curated set of recipes.


# **collection_collections**
> List[BigOvenModelAPI2CollectionInfo] collection_collections(test=test)

Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_collection_info import BigOvenModelAPI2CollectionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionApi(api_client)
    test = 'test_example' # str |  (optional)

    try:
        # Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.
        api_response = api_instance.collection_collections(test=test)
        print("The response of CollectionApi->collection_collections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionApi->collection_collections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test** | **str**|  | [optional] 

### Return type

[**List[BigOvenModelAPI2CollectionInfo]**](BigOvenModelAPI2CollectionInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_get_collection**
> BigOvenModelAPI2RecipeSearchResult collection_get_collection(id, rpp=rpp, pg=pg, test=test, session_for_logging=session_for_logging)

Gets a recipe collection. A recipe collection is a curated set of recipes.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_recipe_search_result import BigOvenModelAPI2RecipeSearchResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionApi(api_client)
    id = 56 # int | the collection identifier
    rpp = 56 # int | results per page (optional)
    pg = 56 # int | page number (starting with 1) (optional)
    test = True # bool |  (optional)
    session_for_logging = 'session_for_logging_example' # str |  (optional)

    try:
        # Gets a recipe collection. A recipe collection is a curated set of recipes.
        api_response = api_instance.collection_get_collection(id, rpp=rpp, pg=pg, test=test, session_for_logging=session_for_logging)
        print("The response of CollectionApi->collection_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionApi->collection_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| the collection identifier | 
 **rpp** | **int**| results per page | [optional] 
 **pg** | **int**| page number (starting with 1) | [optional] 
 **test** | **bool**|  | [optional] 
 **session_for_logging** | **str**|  | [optional] 

### Return type

[**BigOvenModelAPI2RecipeSearchResult**](BigOvenModelAPI2RecipeSearchResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_get_collection_meta**
> BigOvenModelAPI2CollectionInfo collection_get_collection_meta(id)

Gets a recipe collection metadata. A recipe collection is a curated set of recipes.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_collection_info import BigOvenModelAPI2CollectionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionApi(api_client)
    id = 56 # int | the collection identifier

    try:
        # Gets a recipe collection metadata. A recipe collection is a curated set of recipes.
        api_response = api_instance.collection_get_collection_meta(id)
        print("The response of CollectionApi->collection_get_collection_meta:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionApi->collection_get_collection_meta: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| the collection identifier | 

### Return type

[**BigOvenModelAPI2CollectionInfo**](BigOvenModelAPI2CollectionInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

