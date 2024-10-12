# openapi_client.ExportApi

All URIs are relative to *https://api.slideroom.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_get_v2**](ExportApi.md#export_get_v2) | **GET** /api/v2/export/{token} | Gets the status/result of a requested export.


# **export_get_v2**
> ExportResultV2 export_get_v2(token)

Gets the status/result of a requested export.

### Example


```python
import openapi_client
from openapi_client.models.export_result_v2 import ExportResultV2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportApi(api_client)
    token = 56 # int | 

    try:
        # Gets the status/result of a requested export.
        api_response = api_instance.export_get_v2(token)
        print("The response of ExportApi->export_get_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExportApi->export_get_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **int**|  | 

### Return type

[**ExportResultV2**](ExportResultV2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

