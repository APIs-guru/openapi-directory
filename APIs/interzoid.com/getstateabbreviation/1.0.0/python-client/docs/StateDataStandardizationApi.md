# openapi_client.StateDataStandardizationApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getstateabbreviation**](StateDataStandardizationApi.md#getstateabbreviation) | **GET** /getstateabbreviation | Gets a two-letter abbreviation for a state or province name data


# **getstateabbreviation**
> Getstateabbreviation200Response getstateabbreviation(license, state)

Gets a two-letter abbreviation for a state or province name data

Gets a two-letter abbreviation for a state or province given a permutation of state or province data.

### Example


```python
import openapi_client
from openapi_client.models.getstateabbreviation200_response import Getstateabbreviation200Response
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
    api_instance = openapi_client.StateDataStandardizationApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    state = 'state_example' # str | State (or province) name from which to retrieve the two letter abbreviation.

    try:
        # Gets a two-letter abbreviation for a state or province name data
        api_response = api_instance.getstateabbreviation(license, state)
        print("The response of StateDataStandardizationApi->getstateabbreviation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StateDataStandardizationApi->getstateabbreviation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **state** | **str**| State (or province) name from which to retrieve the two letter abbreviation. | 

### Return type

[**Getstateabbreviation200Response**](Getstateabbreviation200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | State (or province) standardized two-letter abbreviation |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

