# openapi_client.GeneralServicesApi

All URIs are relative to *https://viatorapi.viator.com/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**health_check**](GeneralServicesApi.md#health_check) | **GET** /health/check | /health/check


# **health_check**
> HealthCheck200Response health_check(accept_language)

/health/check

Health check Use this service to determine whether the Viator API is presently online and that your API key is valid. You should receive a response identical to the example shown. If you have not yet received an API key, please request one from your business development partner. If you have not yet signed up as a Viator merchant partner and would like to, please visit our [distribution partner website](https://www.viator.com/distribution-partners?mcid=58463#api-solutions).\" 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.health_check200_response import HealthCheck200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneralServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 

    try:
        # /health/check
        api_response = api_instance.health_check(accept_language)
        print("The response of GeneralServicesApi->health_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneralServicesApi->health_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 

### Return type

[**HealthCheck200Response**](HealthCheck200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

