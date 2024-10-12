# openapi_client.OpenAiProductEndpointApi

All URIs are relative to *https://www.klarna.com/us/shopping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_using_get**](OpenAiProductEndpointApi.md#products_using_get) | **GET** /public/openai/v0/products | API for fetching Klarna product information


# **products_using_get**
> ProductResponse products_using_get(q, size=size, budget=budget)

API for fetching Klarna product information

### Example


```python
import openapi_client
from openapi_client.models.product_response import ProductResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.klarna.com/us/shopping
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.klarna.com/us/shopping"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OpenAiProductEndpointApi(api_client)
    q = 'q_example' # str | A precise query that matches one very small category or product that needs to be searched for to find the products the user is looking for. If the user explicitly stated what they want, use that as a query. The query is as specific as possible to the product name or category mentioned by the user in its singular form, and don't contain any clarifiers like latest, newest, cheapest, budget, premium, expensive or similar. The query is always taken from the latest topic, if there is a new topic a new query is started.
    size = 56 # int | number of products returned (optional)
    budget = 56 # int | maximum price of the matching product in local currency, filters results (optional)

    try:
        # API for fetching Klarna product information
        api_response = api_instance.products_using_get(q, size=size, budget=budget)
        print("The response of OpenAiProductEndpointApi->products_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpenAiProductEndpointApi->products_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| A precise query that matches one very small category or product that needs to be searched for to find the products the user is looking for. If the user explicitly stated what they want, use that as a query. The query is as specific as possible to the product name or category mentioned by the user in its singular form, and don&#39;t contain any clarifiers like latest, newest, cheapest, budget, premium, expensive or similar. The query is always taken from the latest topic, if there is a new topic a new query is started. | 
 **size** | **int**| number of products returned | [optional] 
 **budget** | **int**| maximum price of the matching product in local currency, filters results | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Products found |  -  |
**503** | one or more services are unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

