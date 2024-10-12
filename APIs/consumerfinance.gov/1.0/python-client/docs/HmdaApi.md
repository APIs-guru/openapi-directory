# openapi_client.HmdaApi

All URIs are relative to *https://api.consumerfinance.gov:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_concept_hmda**](HmdaApi.md#get_concept_hmda) | **GET** /data/hmda/concept/{concept} | Get information about a particular concept in this dataset.
[**get_dataset_hmda**](HmdaApi.md#get_dataset_hmda) | **GET** /data/hmda | Get metadata for this dataset.
[**get_slice_metadata_hmda**](HmdaApi.md#get_slice_metadata_hmda) | **GET** /data/hmda/slice/{slice}/metadata | Get the metadata for a slice in this dataset.
[**query_slice_hmda**](HmdaApi.md#query_slice_hmda) | **GET** /data/hmda/slice/{slice} | Query a slice in this dataset.


# **get_concept_hmda**
> get_concept_hmda(concept)

Get information about a particular concept in this dataset.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.consumerfinance.gov:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.consumerfinance.gov:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HmdaApi(api_client)
    concept = 'concept_example' # str | Name of concept

    try:
        # Get information about a particular concept in this dataset.
        api_instance.get_concept_hmda(concept)
    except Exception as e:
        print("Exception when calling HmdaApi->get_concept_hmda: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **concept** | **str**| Name of concept | 

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dataset_hmda**
> get_dataset_hmda()

Get metadata for this dataset.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.consumerfinance.gov:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.consumerfinance.gov:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HmdaApi(api_client)

    try:
        # Get metadata for this dataset.
        api_instance.get_dataset_hmda()
    except Exception as e:
        print("Exception when calling HmdaApi->get_dataset_hmda: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_slice_metadata_hmda**
> get_slice_metadata_hmda(slice)

Get the metadata for a slice in this dataset.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.consumerfinance.gov:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.consumerfinance.gov:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HmdaApi(api_client)
    slice = 'slice_example' # str | Name of slice

    try:
        # Get the metadata for a slice in this dataset.
        api_instance.get_slice_metadata_hmda(slice)
    except Exception as e:
        print("Exception when calling HmdaApi->get_slice_metadata_hmda: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slice** | **str**| Name of slice | 

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_slice_hmda**
> QueryResponse query_slice_hmda(slice, select=select, where=where, group=group, limit=limit, offset=offset, order_by=order_by, callback=callback)

Query a slice in this dataset.

### Example


```python
import openapi_client
from openapi_client.models.query_response import QueryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.consumerfinance.gov:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.consumerfinance.gov:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HmdaApi(api_client)
    slice = 'slice_example' # str | Name of slice
    select = 'select_example' # str | Fields to return, separated by commas. (optional)
    where = 'where_example' # str | Conditions to search for in the slice, in SQL WHERE style. (optional)
    group = 'group_example' # str | Fields to group by, summarizing the data, separated by commas. (optional)
    limit = 56 # int | Number of records to return, 100 by default. Enter 0 for no limit. (optional)
    offset = 56 # int | Number of records to skip. (optional)
    order_by = 'order_by_example' # str | Fields to order by, separated by commas. ASC and DESC can be used to modify the order. (optional)
    callback = 'callback_example' # str | JavaScript callback to invoke. Only useful with JSONP requests. (optional)

    try:
        # Query a slice in this dataset.
        api_response = api_instance.query_slice_hmda(slice, select=select, where=where, group=group, limit=limit, offset=offset, order_by=order_by, callback=callback)
        print("The response of HmdaApi->query_slice_hmda:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HmdaApi->query_slice_hmda: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slice** | **str**| Name of slice | 
 **select** | **str**| Fields to return, separated by commas. | [optional] 
 **where** | **str**| Conditions to search for in the slice, in SQL WHERE style. | [optional] 
 **group** | **str**| Fields to group by, summarizing the data, separated by commas. | [optional] 
 **limit** | **int**| Number of records to return, 100 by default. Enter 0 for no limit. | [optional] 
 **offset** | **int**| Number of records to skip. | [optional] 
 **order_by** | **str**| Fields to order by, separated by commas. ASC and DESC can be used to modify the order. | [optional] 
 **callback** | **str**| JavaScript callback to invoke. Only useful with JSONP requests. | [optional] 

### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/javascript, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

