# openapi_client.VendorApi

All URIs are relative to *https://discovery.gsa.gov*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_vendor_get**](VendorApi.md#get_vendor_get) | **GET** /api/vendor/{duns} | This endpoint returns a single vendor by their 9 digit DUNS number


# **get_vendor_get**
> object get_vendor_get(duns)

This endpoint returns a single vendor by their 9 digit DUNS number

<p>This endpoint returns a single vendor by their 9 digit DUNS number. DUNS numbers can be looked up in the <a href=\"https://www.sam.gov\">System for Award Management</a> by vendor name.</p>

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
    api_instance = openapi_client.VendorApi(api_client)
    duns = 'duns_example' # str | a nine digit DUNS number that uniquely identifies the vendor (required)

    try:
        # This endpoint returns a single vendor by their 9 digit DUNS number
        api_response = api_instance.get_vendor_get(duns)
        print("The response of VendorApi->get_vendor_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VendorApi->get_vendor_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **duns** | **str**| a nine digit DUNS number that uniquely identifies the vendor (required) | 

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

