# openapi_client.DistrictsInRegionApi

All URIs are relative to *https://mtaa-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**districts_in_a_region**](DistrictsInRegionApi.md#districts_in_a_region) | **GET** /{country}/{region} | Returns all districts in region


# **districts_in_a_region**
> districts_in_a_region(country, region)

Returns all districts in region

Returns a post code and all districts in a specified region

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
    api_instance = openapi_client.DistrictsInRegionApi(api_client)
    country = 'country_example' # str | Country name in lowercase eg( tanzania)
    region = 'region_example' # str | Name of the region eg (Mbeya)

    try:
        # Returns all districts in region
        api_instance.districts_in_a_region(country, region)
    except Exception as e:
        print("Exception when calling DistrictsInRegionApi->districts_in_a_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| Country name in lowercase eg( tanzania) | 
 **region** | **str**| Name of the region eg (Mbeya) | 

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
**404** | Resource not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

