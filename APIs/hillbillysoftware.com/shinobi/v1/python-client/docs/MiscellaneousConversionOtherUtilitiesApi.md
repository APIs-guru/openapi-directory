# openapi_client.MiscellaneousConversionOtherUtilitiesApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_imd_bid_get_async**](MiscellaneousConversionOtherUtilitiesApi.md#get_imd_bid_get_async) | **GET** /GetIMDBid/ByID/{AccessToken}/{Query} | Gets list of avaiable IMDB ids from Movies and TV Show databases, you can use those to query other end points that need ID&#39;s


# **get_imd_bid_get_async**
> List[ImdbID] get_imd_bid_get_async(access_token, query)

Gets list of avaiable IMDB ids from Movies and TV Show databases, you can use those to query other end points that need ID's

### Example


```python
import openapi_client
from openapi_client.models.imdb_id import ImdbID
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MiscellaneousConversionOtherUtilitiesApi(api_client)
    access_token = 'access_token_example' # str | 
    query = 'query_example' # str | 

    try:
        # Gets list of avaiable IMDB ids from Movies and TV Show databases, you can use those to query other end points that need ID's
        api_response = api_instance.get_imd_bid_get_async(access_token, query)
        print("The response of MiscellaneousConversionOtherUtilitiesApi->get_imd_bid_get_async:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscellaneousConversionOtherUtilitiesApi->get_imd_bid_get_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **query** | **str**|  | 

### Return type

[**List[ImdbID]**](ImdbID.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of imdb ID&#39;s |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

