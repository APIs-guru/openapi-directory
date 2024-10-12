# openapi_client.TanzaniaRegionsApi

All URIs are relative to *https://mtaa-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tanzania_regions**](TanzaniaRegionsApi.md#tanzania_regions) | **GET** /{country} | Returns all regions present in Tanzania


# **tanzania_regions**
> tanzania_regions(country)

Returns all regions present in Tanzania

Fetches all regions present in Tanzania and then return a response as json

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://mtaa-api.herokuapp.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://mtaa-api.herokuapp.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TanzaniaRegionsApi(api_client)
    country = 'country_example' # str | Country name in lowercase eg (Tanzania)

    try:
        # Returns all regions present in Tanzania
        api_instance.tanzania_regions(country)
    except Exception as e:
        print("Exception when calling TanzaniaRegionsApi->tanzania_regions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| Country name in lowercase eg (Tanzania) | 

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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

