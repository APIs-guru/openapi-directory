# openapi_client.IndustriesApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**industries_get**](IndustriesApi.md#industries_get) | **GET** /industries | 


# **industries_get**
> EndpointGetIndustries industries_get()



### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_industries import EndpointGetIndustries
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IndustriesApi(api_client)

    try:
        api_response = api_instance.industries_get()
        print("The response of IndustriesApi->industries_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndustriesApi->industries_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**EndpointGetIndustries**](EndpointGetIndustries.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

