# openapi_client.DefaultApi

All URIs are relative to *https://api.medcorder.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**doctors**](DefaultApi.md#doctors) | **GET** /doctors | Fetch a list of nearby medical providers


# **doctors**
> List[Doctor] doctors(search=search, latitude=latitude, longitude=longitude, limit=limit)

Fetch a list of nearby medical providers

### Example


```python
import openapi_client
from openapi_client.models.doctor import Doctor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.medcorder.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.medcorder.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    search = 'search_example' # str | The search text so far for autocomplete (optional)
    latitude = 3.4 # float | The latitude of the client, around which to search (optional)
    longitude = 3.4 # float | The longitude of the client, around which to search (optional)
    limit = 50 # int | The number of results desired (optional) (default to 50)

    try:
        # Fetch a list of nearby medical providers
        api_response = api_instance.doctors(search=search, latitude=latitude, longitude=longitude, limit=limit)
        print("The response of DefaultApi->doctors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->doctors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| The search text so far for autocomplete | [optional] 
 **latitude** | **float**| The latitude of the client, around which to search | [optional] 
 **longitude** | **float**| The longitude of the client, around which to search | [optional] 
 **limit** | **int**| The number of results desired | [optional] [default to 50]

### Return type

[**List[Doctor]**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of doctors |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

