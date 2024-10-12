# openapi_client.PartnersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**partners_get**](PartnersApi.md#partners_get) | **GET** /providers/Microsoft.ManagementPartner/partners | Get a specific &#x60;Partner&#x60;.


# **partners_get**
> PartnerResponse partners_get(api_version)

Get a specific `Partner`.

Get the management partner using the objectId and tenantId.

### Example


```python
import openapi_client
from openapi_client.models.partner_response import PartnerResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PartnersApi(api_client)
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Get a specific `Partner`.
        api_response = api_instance.partners_get(api_version)
        print("The response of PartnersApi->partners_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartnersApi->partners_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Supported version. | 

### Return type

[**PartnerResponse**](PartnerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get the details of the &#x60;Partner&#x60;. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

