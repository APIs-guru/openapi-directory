# openapi_client.MetadataApi

All URIs are relative to *https://discovery.gsa.gov*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metadata_get**](MetadataApi.md#metadata_get) | **GET** /api/metadata/ | This endpoint returns metadata for the most recent data loads of SAM and FPDS data


# **metadata_get**
> object metadata_get()

This endpoint returns metadata for the most recent data loads of SAM and FPDS data

<p>This endpoint returns metadata for the most recent data loads of SAM and FPDS data. It takes no parameters.</p>

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
    api_instance = openapi_client.MetadataApi(api_client)

    try:
        # This endpoint returns metadata for the most recent data loads of SAM and FPDS data
        api_response = api_instance.metadata_get()
        print("The response of MetadataApi->metadata_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->metadata_get: %s\n" % e)
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

