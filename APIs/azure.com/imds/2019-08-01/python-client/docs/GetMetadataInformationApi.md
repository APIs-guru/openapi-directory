# openapi_client.GetMetadataInformationApi

All URIs are relative to *http://169.254.169.254/metadata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identity_get_info**](GetMetadataInformationApi.md#identity_get_info) | **GET** /identity/info | 


# **identity_get_info**
> IdentityInfoResponse identity_get_info(metadata, api_version)



Get information about AAD Metadata

### Example


```python
import openapi_client
from openapi_client.models.identity_info_response import IdentityInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://169.254.169.254/metadata
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://169.254.169.254/metadata"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GetMetadataInformationApi(api_client)
    metadata = 'metadata_example' # str | This must be set to 'true'.
    api_version = 'api_version_example' # str | This is the API version to use.

    try:
        api_response = api_instance.identity_get_info(metadata, api_version)
        print("The response of GetMetadataInformationApi->identity_get_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetMetadataInformationApi->identity_get_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadata** | **str**| This must be set to &#39;true&#39;. | 
 **api_version** | **str**| This is the API version to use. | 

### Return type

[**IdentityInfoResponse**](IdentityInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

