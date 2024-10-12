# openapi_client.NaicsApi

All URIs are relative to *https://discovery.gsa.gov*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_naics_get**](NaicsApi.md#list_naics_get) | **GET** /api/naics/ | This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles


# **list_naics_get**
> object list_naics_get()

This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles

<p>This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles. It takes no parameters.</p>

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://discovery.gsa.gov
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://discovery.gsa.gov"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NaicsApi(api_client)

    try:
        # This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles
        api_response = api_instance.list_naics_get()
        print("The response of NaicsApi->list_naics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NaicsApi->list_naics_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

