# openapi_client.DefaultApi

All URIs are relative to *https://server.shop.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**details**](DefaultApi.md#details) | **GET** /openai/details | Return more details about a list of products.
[**search**](DefaultApi.md#search) | **GET** /openai/search | Search for products


# **details**
> SearchResponse details(ids)

Return more details about a list of products.

### Example


```python
import openapi_client
from openapi_client.models.search_response import SearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://server.shop.app
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://server.shop.app"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ids = 'ids_example' # str | Comma separated list of product ids

    try:
        # Return more details about a list of products.
        api_response = api_instance.details(ids)
        print("The response of DefaultApi->details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **str**| Comma separated list of product ids | 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> SearchResponse search(query=query, price_min=price_min, price_max=price_max, similar_to_id=similar_to_id, num_results=num_results)

Search for products

### Example


```python
import openapi_client
from openapi_client.models.search_response import SearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://server.shop.app
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://server.shop.app"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    query = 'query_example' # str | Query string to search for items. (optional)
    price_min = 3.4 # float | The minimum price to filter by. (optional)
    price_max = 3.4 # float | The maximum price to filter by. (optional)
    similar_to_id = 'similar_to_id_example' # str | A product id that you want to find similar products for. (Only include one) (optional)
    num_results = 'num_results_example' # str | How many results to return. Defaults to 5. It can be a number between 1 and 10. (optional)

    try:
        # Search for products
        api_response = api_instance.search(query=query, price_min=price_min, price_max=price_max, similar_to_id=similar_to_id, num_results=num_results)
        print("The response of DefaultApi->search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string to search for items. | [optional] 
 **price_min** | **float**| The minimum price to filter by. | [optional] 
 **price_max** | **float**| The maximum price to filter by. | [optional] 
 **similar_to_id** | **str**| A product id that you want to find similar products for. (Only include one) | [optional] 
 **num_results** | **str**| How many results to return. Defaults to 5. It can be a number between 1 and 10. | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

