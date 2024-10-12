# openapi_client.DetailedZipCodeInformationApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getzipcodeinfo**](DetailedZipCodeInformationApi.md#getzipcodeinfo) | **GET** /getzipcodeinfo | Gets detailed zip code information


# **getzipcodeinfo**
> Getzipcodeinfo200Response getzipcodeinfo(license, zip)

Gets detailed zip code information

For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.

### Example


```python
import openapi_client
from openapi_client.models.getzipcodeinfo200_response import Getzipcodeinfo200Response
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
    api_instance = openapi_client.DetailedZipCodeInformationApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    zip = 'zip_example' # str | Zip code to retrieve detailed information

    try:
        # Gets detailed zip code information
        api_response = api_instance.getzipcodeinfo(license, zip)
        print("The response of DetailedZipCodeInformationApi->getzipcodeinfo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DetailedZipCodeInformationApi->getzipcodeinfo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **zip** | **str**| Zip code to retrieve detailed information | 

### Return type

[**Getzipcodeinfo200Response**](Getzipcodeinfo200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Zip code detailed code information |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | zip code not found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

