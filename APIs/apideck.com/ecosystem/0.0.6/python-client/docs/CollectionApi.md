# openapi_client.CollectionApi

All URIs are relative to *https://api.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collection_listings_all**](CollectionApi.md#collection_listings_all) | **GET** /ecosystems/{ecosystem_id}/collections/{id}/listings | List collection listings
[**collections_all**](CollectionApi.md#collections_all) | **GET** /ecosystems/{ecosystem_id}/collections | List collections
[**collections_one**](CollectionApi.md#collections_one) | **GET** /ecosystems/{ecosystem_id}/collections/{id} | Get collection


# **collection_listings_all**
> GetListingsResponse collection_listings_all(ecosystem_id, id, cursor=cursor, limit=limit)

List collection listings

List collection listings

### Example


```python
import openapi_client
from openapi_client.models.get_listings_response import GetListingsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    id = 'id_example' # str | ID of the record you are acting upon.
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 50 # int | Number of records to return (optional) (default to 50)

    try:
        # List collection listings
        api_response = api_instance.collection_listings_all(ecosystem_id, id, cursor=cursor, limit=limit)
        print("The response of CollectionApi->collection_listings_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionApi->collection_listings_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 
 **id** | **str**| ID of the record you are acting upon. | 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of records to return | [optional] [default to 50]

### Return type

[**GetListingsResponse**](GetListingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collections_all**
> GetCollectionsResponse collections_all(ecosystem_id, cursor=cursor, limit=limit)

List collections

List collections

### Example


```python
import openapi_client
from openapi_client.models.get_collections_response import GetCollectionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 50 # int | Number of records to return (optional) (default to 50)

    try:
        # List collections
        api_response = api_instance.collections_all(ecosystem_id, cursor=cursor, limit=limit)
        print("The response of CollectionApi->collections_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionApi->collections_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of records to return | [optional] [default to 50]

### Return type

[**GetCollectionsResponse**](GetCollectionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collections |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collections_one**
> GetCollectionResponse collections_one(ecosystem_id, id)

Get collection

Get collection

### Example


```python
import openapi_client
from openapi_client.models.get_collection_response import GetCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    id = 'id_example' # str | ID of the record you are acting upon.

    try:
        # Get collection
        api_response = api_instance.collections_one(ecosystem_id, id)
        print("The response of CollectionApi->collections_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionApi->collections_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 
 **id** | **str**| ID of the record you are acting upon. | 

### Return type

[**GetCollectionResponse**](GetCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

