# openapi_client.EmailAddressInformationApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getemailinfo**](EmailAddressInformationApi.md#getemailinfo) | **GET** /getemailinfo | Gets email validation information for an email address


# **getemailinfo**
> Getemailinfo200Response getemailinfo(license, email)

Gets email validation information for an email address

Get email validation information and other demographics for an email address.

### Example


```python
import openapi_client
from openapi_client.models.getemailinfo200_response import Getemailinfo200Response
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
    api_instance = openapi_client.EmailAddressInformationApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    email = 'email_example' # str | Email address to retrieve validation information

    try:
        # Gets email validation information for an email address
        api_response = api_instance.getemailinfo(license, email)
        print("The response of EmailAddressInformationApi->getemailinfo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailAddressInformationApi->getemailinfo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **email** | **str**| Email address to retrieve validation information | 

### Return type

[**Getemailinfo200Response**](Getemailinfo200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Email validation and demographic information |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | email address not valid |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

