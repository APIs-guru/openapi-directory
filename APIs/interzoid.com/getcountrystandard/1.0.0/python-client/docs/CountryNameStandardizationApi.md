# openapi_client.CountryNameStandardizationApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getcountrystandard**](CountryNameStandardizationApi.md#getcountrystandard) | **GET** /getcountrystandard | Gets country name standard


# **getcountrystandard**
> Getcountrystandard200Response getcountrystandard(license, country)

Gets country name standard

Gets a pre-selected country name standard for various permutations of a given country name.

### Example


```python
import openapi_client
from openapi_client.models.getcountrystandard200_response import Getcountrystandard200Response
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
    api_instance = openapi_client.CountryNameStandardizationApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    country = 'country_example' # str | Country name from which to retrieve the standardized version

    try:
        # Gets country name standard
        api_response = api_instance.getcountrystandard(license, country)
        print("The response of CountryNameStandardizationApi->getcountrystandard:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryNameStandardizationApi->getcountrystandard: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **country** | **str**| Country name from which to retrieve the standardized version | 

### Return type

[**Getcountrystandard200Response**](Getcountrystandard200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standardized country name data |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

