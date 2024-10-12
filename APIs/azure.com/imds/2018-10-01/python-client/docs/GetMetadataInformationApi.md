# openapi_client.GetMetadataInformationApi

All URIs are relative to *https://169.254.169.254/metadata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identity_get_info**](GetMetadataInformationApi.md#identity_get_info) | **GET** /identity/info | 


# **identity_get_info**
> IdentityInfoResponse identity_get_info(metadata, api_version)



Get information about AAD Metadata

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.identity_info_response import IdentityInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://169.254.169.254/metadata
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://169.254.169.254/metadata"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

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

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Invalid request |  -  |
**404** | Not found |  -  |
**405** | Method not allowed |  -  |
**429** | Too many requests |  -  |
**500** | Server error |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

