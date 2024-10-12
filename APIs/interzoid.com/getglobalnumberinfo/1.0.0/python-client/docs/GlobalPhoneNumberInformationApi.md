# openapi_client.GlobalPhoneNumberInformationApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getglobalnumberinfo**](GlobalPhoneNumberInformationApi.md#getglobalnumberinfo) | **GET** /getglobalnumberinfo | Get demographic information for a global telephone number


# **getglobalnumberinfo**
> Getglobalnumberinfo200Response getglobalnumberinfo(license, intlnumber)

Get demographic information for a global telephone number

Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.

### Example


```python
import openapi_client
from openapi_client.models.getglobalnumberinfo200_response import Getglobalnumberinfo200Response
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
    api_instance = openapi_client.GlobalPhoneNumberInformationApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    intlnumber = 'intlnumber_example' # str | International number (with country code) to retrieve information for

    try:
        # Get demographic information for a global telephone number
        api_response = api_instance.getglobalnumberinfo(license, intlnumber)
        print("The response of GlobalPhoneNumberInformationApi->getglobalnumberinfo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalPhoneNumberInformationApi->getglobalnumberinfo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **intlnumber** | **str**| International number (with country code) to retrieve information for | 

### Return type

[**Getglobalnumberinfo200Response**](Getglobalnumberinfo200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Global telephone demographic information |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | telephone number not found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

