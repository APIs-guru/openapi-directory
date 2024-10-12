# openapi_client.AreaCodeInformationApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getareacode**](AreaCodeInformationApi.md#getareacode) | **GET** /getareacode | Gets telephone area code information


# **getareacode**
> Getareacode200Response getareacode(license, areacode)

Gets telephone area code information

Gets telephone area code information for a given area code.

### Example


```python
import openapi_client
from openapi_client.models.getareacode200_response import Getareacode200Response
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
    api_instance = openapi_client.AreaCodeInformationApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    areacode = 'areacode_example' # str | Telephone area code to retrieve area code information

    try:
        # Gets telephone area code information
        api_response = api_instance.getareacode(license, areacode)
        print("The response of AreaCodeInformationApi->getareacode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AreaCodeInformationApi->getareacode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **areacode** | **str**| Telephone area code to retrieve area code information | 

### Return type

[**Getareacode200Response**](Getareacode200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Telephone area code information |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | area code not found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

