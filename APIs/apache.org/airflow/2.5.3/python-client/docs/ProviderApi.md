# openapi_client.ProviderApi

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_providers**](ProviderApi.md#get_providers) | **GET** /providers | List providers


# **get_providers**
> GetProviders200Response get_providers()

List providers

Get a list of providers.  *New in version 2.1.0* 

### Example


```python
import openapi_client
from openapi_client.models.get_providers200_response import GetProviders200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProviderApi(api_client)

    try:
        # List providers
        api_response = api_instance.get_providers()
        print("The response of ProviderApi->get_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->get_providers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetProviders200Response**](GetProviders200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of providers. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

