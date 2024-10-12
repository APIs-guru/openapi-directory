# openapi_client.CountryMatchSimilarityKeyApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getcountrymatch**](CountryMatchSimilarityKeyApi.md#getcountrymatch) | **GET** /getcountrymatch | Gets a similarity key for matching purposes for country name data


# **getcountrymatch**
> Getcountrymatch200Response getcountrymatch(license, country)

Gets a similarity key for matching purposes for country name data

Gets a similarity key to use for matching purposes for country name data

### Example


```python
import openapi_client
from openapi_client.models.getcountrymatch200_response import Getcountrymatch200Response
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
    api_instance = openapi_client.CountryMatchSimilarityKeyApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    country = 'country_example' # str | Country name from which to generate similarity key

    try:
        # Gets a similarity key for matching purposes for country name data
        api_response = api_instance.getcountrymatch(license, country)
        print("The response of CountryMatchSimilarityKeyApi->getcountrymatch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryMatchSimilarityKeyApi->getcountrymatch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **country** | **str**| Country name from which to generate similarity key | 

### Return type

[**Getcountrymatch200Response**](Getcountrymatch200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generated similarity key for country name data |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

