# openapi_client.ProcessingCollectionsApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_collection**](ProcessingCollectionsApi.md#cancel_collection) | **DELETE** /collection/{collection_id}.{content_type} | Cancel collection analysis
[**queue_collection**](ProcessingCollectionsApi.md#queue_collection) | **POST** /collection.{content_type} | Queue collection for analysis
[**receive_collection_analytic_data**](ProcessingCollectionsApi.md#receive_collection_analytic_data) | **GET** /collection/{collection_id}.{content_type} | Retrieve collection analysis or its status in queue
[**retrieve_processed_collections**](ProcessingCollectionsApi.md#retrieve_processed_collections) | **GET** /collection/processed.{content_type} | Retrieve collections analysis


# **cancel_collection**
> cancel_collection(collection_id, content_type, config_id=config_id)

Cancel collection analysis

This method cancels collection analysis by unique ID on Semantria side if it is waiting for analysis in queue.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProcessingCollectionsApi(api_client)
    collection_id = 'collection_id_example' # str | Collection ID
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration used for analysis. (optional)

    try:
        # Cancel collection analysis
        api_instance.cancel_collection(collection_id, content_type, config_id=config_id)
    except Exception as e:
        print("Exception when calling ProcessingCollectionsApi->cancel_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **str**| Collection ID | 
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration used for analysis. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted. Document canceled from processing on the server. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**404** | No collections with provided ID found on server. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queue_collection**
> Collection queue_collection(content_type, collection, config_id=config_id)

Queue collection for analysis

This method queues collection of documents onto the server for analysis. Queued collection of documents analyzes in common context as entire thing. If unique configuration ID provided, Semantria uses settings of that configuration during analysis, in opposite the primary configuration uses. Collection IDs are unique in scope of configuration. If the same ID appears twice, Semantria overrides existing collection with the new Data

### Example


```python
import openapi_client
from openapi_client.models.collection import Collection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProcessingCollectionsApi(api_client)
    content_type = 'content_type_example' # str | 
    collection = None # object | Parametrized JSON or XML object.
    config_id = 'config_id_example' # str | Identifier of configuration used for analysis. (optional)

    try:
        # Queue collection for analysis
        api_response = api_instance.queue_collection(content_type, collection, config_id=config_id)
        print("The response of ProcessingCollectionsApi->queue_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcessingCollectionsApi->queue_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **collection** | **object**| Parametrized JSON or XML object. | 
 **config_id** | **str**| Identifier of configuration used for analysis. | [optional] 

### Return type

[**Collection**](Collection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with the sentiment-bearing phrases list. |  -  |
**202** | Client request accepted and queued for processing. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**406** | Documents limit per collection is achieved. |  -  |
**413** | Characters limit for single document exceeded. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receive_collection_analytic_data**
> CollectionAnalyticData receive_collection_analytic_data(collection_id, content_type, config_id=config_id)

Retrieve collection analysis or its status in queue

This method retrieves analysis results for documents collection by its unique ID or the collection’s status in queue if it did not analyzed yet. Semantria guarantees delivering of all collections back to the client even if they FAILED on Semantria side due to some reason.

### Example


```python
import openapi_client
from openapi_client.models.collection_analytic_data import CollectionAnalyticData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProcessingCollectionsApi(api_client)
    collection_id = 'collection_id_example' # str | Collection ID
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration used for analysis. (optional)

    try:
        # Retrieve collection analysis or its status in queue
        api_response = api_instance.receive_collection_analytic_data(collection_id, content_type, config_id=config_id)
        print("The response of ProcessingCollectionsApi->receive_collection_analytic_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcessingCollectionsApi->receive_collection_analytic_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **str**| Collection ID | 
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration used for analysis. | [optional] 

### Return type

[**CollectionAnalyticData**](CollectionAnalyticData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted. Server responds with processed document or its status. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**404** | No collections with provided ID found on server. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_processed_collections**
> CollectionAnalyticData retrieve_processed_collections(content_type, config_id=config_id)

Retrieve collections analysis

This method retrieves analysis results for processed collections from Semantria. FAILED collections will have FAILED status in response. Semantria responds with limited amount of results per API call. If configuration ID provided, Semantria responds with the collections, which were queued using the same configuration ID, in opposite Primary configuration uses.

### Example


```python
import openapi_client
from openapi_client.models.collection_analytic_data import CollectionAnalyticData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProcessingCollectionsApi(api_client)
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration used for analysis. (optional)

    try:
        # Retrieve collections analysis
        api_response = api_instance.retrieve_processed_collections(content_type, config_id=config_id)
        print("The response of ProcessingCollectionsApi->retrieve_processed_collections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcessingCollectionsApi->retrieve_processed_collections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration used for analysis. | [optional] 

### Return type

[**CollectionAnalyticData**](CollectionAnalyticData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with processed collections. |  -  |
**202** | Client request accepted, no processed collections found on the server. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

