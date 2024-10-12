# openapi_client.FullNameParsedSimilarityKeyApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getfullnameparsedmatch**](FullNameParsedSimilarityKeyApi.md#getfullnameparsedmatch) | **GET** /getfullnameparsedmatch | Gets a similarity key for matching purposes for parsed full name data


# **getfullnameparsedmatch**
> Getfullnameparsedmatch200Response getfullnameparsedmatch(license, firstname, lastname)

Gets a similarity key for matching purposes for parsed full name data

Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.

### Example


```python
import openapi_client
from openapi_client.models.getfullnameparsedmatch200_response import Getfullnameparsedmatch200Response
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
    api_instance = openapi_client.FullNameParsedSimilarityKeyApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    firstname = 'firstname_example' # str | First name from which to generate similarity key
    lastname = 'lastname_example' # str | Last name from which to generate similarity key

    try:
        # Gets a similarity key for matching purposes for parsed full name data
        api_response = api_instance.getfullnameparsedmatch(license, firstname, lastname)
        print("The response of FullNameParsedSimilarityKeyApi->getfullnameparsedmatch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FullNameParsedSimilarityKeyApi->getfullnameparsedmatch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **firstname** | **str**| First name from which to generate similarity key | 
 **lastname** | **str**| Last name from which to generate similarity key | 

### Return type

[**Getfullnameparsedmatch200Response**](Getfullnameparsedmatch200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generated similarity key for parsed full name data |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

