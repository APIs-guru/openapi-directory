# openapi_client.CarsHistoryAPIApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_car_history**](CarsHistoryAPIApi.md#get_car_history) | **GET** /history/car/{vin} | Get a cars online listing history
[**history_car_uk_vrm_get**](CarsHistoryAPIApi.md#history_car_uk_vrm_get) | **GET** /history/car/uk/{vrm} | Get a cars online listing history


# **get_car_history**
> List[HistoricalListing] get_car_history(vin, api_key=api_key, fields=fields, page=page, include_duplicates=include_duplicates, sort_order=sort_order)

Get a cars online listing history

The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.historical_listing import HistoricalListing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CarsHistoryAPIApi(api_client)
    vin = 'vin_example' # str | The VIN to identify the car. Must be a valid 17 char VIN
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    fields = 'fields_example' # str | List of fields to fetch, in case the default fields list in the response is to be trimmed down (optional)
    page = 3.4 # float | Page number to fetch the results for the given criteria. Default is 1. (optional)
    include_duplicates = True # bool | Flag to indicate whether to include duplicate historical records as well in the response (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)

    try:
        # Get a cars online listing history
        api_response = api_instance.get_car_history(vin, api_key=api_key, fields=fields, page=page, include_duplicates=include_duplicates, sort_order=sort_order)
        print("The response of CarsHistoryAPIApi->get_car_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarsHistoryAPIApi->get_car_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **str**| The VIN to identify the car. Must be a valid 17 char VIN | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **fields** | **str**| List of fields to fetch, in case the default fields list in the response is to be trimmed down | [optional] 
 **page** | **float**| Page number to fetch the results for the given criteria. Default is 1. | [optional] 
 **include_duplicates** | **bool**| Flag to indicate whether to include duplicate historical records as well in the response | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 

### Return type

[**List[HistoricalListing]**](HistoricalListing.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Online listing history for the given vin |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **history_car_uk_vrm_get**
> List[HistoricalListing] history_car_uk_vrm_get(vrm, api_key=api_key, page=page, include_duplicates=include_duplicates, sort_order=sort_order)

Get a cars online listing history

The history API returns online listing history for a car identified by its VRM. History listings are sorted in the descending order of the listing date / last seen date

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.historical_listing import HistoricalListing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CarsHistoryAPIApi(api_client)
    vrm = 'vrm_example' # str | The VRM to identify the car.
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    page = 3.4 # float | Page number to fetch the results for the given criteria. Default is 1. (optional)
    include_duplicates = True # bool | Flag to indicate whether to include duplicate historical records as well in the response (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)

    try:
        # Get a cars online listing history
        api_response = api_instance.history_car_uk_vrm_get(vrm, api_key=api_key, page=page, include_duplicates=include_duplicates, sort_order=sort_order)
        print("The response of CarsHistoryAPIApi->history_car_uk_vrm_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarsHistoryAPIApi->history_car_uk_vrm_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrm** | **str**| The VRM to identify the car. | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **page** | **float**| Page number to fetch the results for the given criteria. Default is 1. | [optional] 
 **include_duplicates** | **bool**| Flag to indicate whether to include duplicate historical records as well in the response | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 

### Return type

[**List[HistoricalListing]**](HistoricalListing.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Online listing history for the given vrm |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

