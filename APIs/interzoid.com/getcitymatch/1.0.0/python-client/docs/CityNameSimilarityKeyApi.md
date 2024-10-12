# openapi_client.CityNameSimilarityKeyApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getcitymatch**](CityNameSimilarityKeyApi.md#getcitymatch) | **GET** /getcitymatch | Gets a similarity key for matching purposes for city name data


# **getcitymatch**
> Getcitymatch200Response getcitymatch(license, city)

Gets a similarity key for matching purposes for city name data

Gets a similarity key for matching purposes for city name data.

### Example


```python
import openapi_client
from openapi_client.models.getcitymatch200_response import Getcitymatch200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.interzoid.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.interzoid.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CityNameSimilarityKeyApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    city = 'city_example' # str | City name from which to generate similarity key

    try:
        # Gets a similarity key for matching purposes for city name data
        api_response = api_instance.getcitymatch(license, city)
        print("The response of CityNameSimilarityKeyApi->getcitymatch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CityNameSimilarityKeyApi->getcitymatch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **city** | **str**| City name from which to generate similarity key | 

### Return type

[**Getcitymatch200Response**](Getcitymatch200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generated similarity key for city name data |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

