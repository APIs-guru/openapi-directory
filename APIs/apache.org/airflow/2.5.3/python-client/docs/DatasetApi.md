# openapi_client.DatasetApi

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_dataset**](DatasetApi.md#get_dataset) | **GET** /datasets/{uri} | Get a dataset
[**get_dataset_events**](DatasetApi.md#get_dataset_events) | **GET** /datasets/events | Get dataset events
[**get_datasets**](DatasetApi.md#get_datasets) | **GET** /datasets | List datasets
[**get_upstream_dataset_events_0**](DatasetApi.md#get_upstream_dataset_events_0) | **GET** /dags/{dag_id}/dagRuns/{dag_run_id}/upstreamDatasetEvents | Get dataset events for a DAG run


# **get_dataset**
> Dataset get_dataset(uri)

Get a dataset

Get a dataset by uri.

### Example


```python
import openapi_client
from openapi_client.models.dataset import Dataset
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatasetApi(api_client)
    uri = 'uri_example' # str | The encoded Dataset URI

    try:
        # Get a dataset
        api_response = api_instance.get_dataset(uri)
        print("The response of DatasetApi->get_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatasetApi->get_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uri** | **str**| The encoded Dataset URI | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dataset_events**
> DatasetEventCollection get_dataset_events(limit=limit, offset=offset, order_by=order_by, dataset_id=dataset_id, source_dag_id=source_dag_id, source_task_id=source_task_id, source_run_id=source_run_id, source_map_index=source_map_index)

Get dataset events

Get dataset events

### Example


```python
import openapi_client
from openapi_client.models.dataset_event_collection import DatasetEventCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatasetApi(api_client)
    limit = 100 # int | The numbers of items to return. (optional) (default to 100)
    offset = 56 # int | The number of items to skip before starting to collect the result set. (optional)
    order_by = 'order_by_example' # str | The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0*  (optional)
    dataset_id = 56 # int | The Dataset ID that updated the dataset. (optional)
    source_dag_id = 'source_dag_id_example' # str | The DAG ID that updated the dataset. (optional)
    source_task_id = 'source_task_id_example' # str | The task ID that updated the dataset. (optional)
    source_run_id = 'source_run_id_example' # str | The DAG run ID that updated the dataset. (optional)
    source_map_index = 56 # int | The map index that updated the dataset. (optional)

    try:
        # Get dataset events
        api_response = api_instance.get_dataset_events(limit=limit, offset=offset, order_by=order_by, dataset_id=dataset_id, source_dag_id=source_dag_id, source_task_id=source_task_id, source_run_id=source_run_id, source_map_index=source_map_index)
        print("The response of DatasetApi->get_dataset_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatasetApi->get_dataset_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The numbers of items to return. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] 
 **order_by** | **str**| The name of the field to order the results by. Prefix a field name with &#x60;-&#x60; to reverse the sort order.  *New in version 2.1.0*  | [optional] 
 **dataset_id** | **int**| The Dataset ID that updated the dataset. | [optional] 
 **source_dag_id** | **str**| The DAG ID that updated the dataset. | [optional] 
 **source_task_id** | **str**| The task ID that updated the dataset. | [optional] 
 **source_run_id** | **str**| The DAG run ID that updated the dataset. | [optional] 
 **source_map_index** | **int**| The map index that updated the dataset. | [optional] 

### Return type

[**DatasetEventCollection**](DatasetEventCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_datasets**
> DatasetCollection get_datasets(limit=limit, offset=offset, order_by=order_by, uri_pattern=uri_pattern)

List datasets

### Example


```python
import openapi_client
from openapi_client.models.dataset_collection import DatasetCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatasetApi(api_client)
    limit = 100 # int | The numbers of items to return. (optional) (default to 100)
    offset = 56 # int | The number of items to skip before starting to collect the result set. (optional)
    order_by = 'order_by_example' # str | The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0*  (optional)
    uri_pattern = 'uri_pattern_example' # str | If set, only return datasets with uris matching this pattern.  (optional)

    try:
        # List datasets
        api_response = api_instance.get_datasets(limit=limit, offset=offset, order_by=order_by, uri_pattern=uri_pattern)
        print("The response of DatasetApi->get_datasets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatasetApi->get_datasets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The numbers of items to return. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] 
 **order_by** | **str**| The name of the field to order the results by. Prefix a field name with &#x60;-&#x60; to reverse the sort order.  *New in version 2.1.0*  | [optional] 
 **uri_pattern** | **str**| If set, only return datasets with uris matching this pattern.  | [optional] 

### Return type

[**DatasetCollection**](DatasetCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_upstream_dataset_events_0**
> DatasetEventCollection get_upstream_dataset_events_0(dag_id, dag_run_id)

Get dataset events for a DAG run

Get datasets for a dag run.  *New in version 2.4.0* 

### Example


```python
import openapi_client
from openapi_client.models.dataset_event_collection import DatasetEventCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatasetApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.

    try:
        # Get dataset events for a DAG run
        api_response = api_instance.get_upstream_dataset_events_0(dag_id, dag_run_id)
        print("The response of DatasetApi->get_upstream_dataset_events_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatasetApi->get_upstream_dataset_events_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 

### Return type

[**DatasetEventCollection**](DatasetEventCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

