# openapi_client.DataApi

All URIs are relative to *https://api.consumerfinance.gov:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_dataset**](DataApi.md#get_dataset) | **GET** /data/{dataset} | Get metadata about a dataset.
[**get_datasets**](DataApi.md#get_datasets) | **GET** /data | Get a list of all datasets.


# **get_dataset**
> get_dataset(dataset)

Get metadata about a dataset.

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
    api_instance = openapi_client.DataApi(api_client)
    dataset = 'dataset_example' # str | Name of dataset

    try:
        # Get metadata about a dataset.
        api_instance.get_dataset(dataset)
    except Exception as e:
        print("Exception when calling DataApi->get_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataset** | **str**| Name of dataset | 

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

# **get_datasets**
> get_datasets()

Get a list of all datasets.

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
    api_instance = openapi_client.DataApi(api_client)

    try:
        # Get a list of all datasets.
        api_instance.get_datasets()
    except Exception as e:
        print("Exception when calling DataApi->get_datasets: %s\n" % e)
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

