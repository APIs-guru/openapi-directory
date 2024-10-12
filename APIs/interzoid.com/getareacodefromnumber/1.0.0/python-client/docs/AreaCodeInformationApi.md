# openapi_client.AreaCodeInformationApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getareacodefromnumber**](AreaCodeInformationApi.md#getareacodefromnumber) | **GET** /getareacodefromnumber | Gets area code information from a telephone number


# **getareacodefromnumber**
> Getareacodefromnumber200Response getareacodefromnumber(license, number)

Gets area code information from a telephone number

The area code will be parsed out of a telephone number and used to retrieve information about the area code.

### Example


```python
import openapi_client
from openapi_client.models.getareacodefromnumber200_response import Getareacodefromnumber200Response
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
    number = 'number_example' # str | Telephone number to retrieve area code information

    try:
        # Gets area code information from a telephone number
        api_response = api_instance.getareacodefromnumber(license, number)
        print("The response of AreaCodeInformationApi->getareacodefromnumber:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AreaCodeInformationApi->getareacodefromnumber: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **number** | **str**| Telephone number to retrieve area code information | 

### Return type

[**Getareacodefromnumber200Response**](Getareacodefromnumber200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Telephone number area code information |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | area code not found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

