# openapi_client.OpenAPISpecApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_openapi_spec**](OpenAPISpecApi.md#get_organization_openapi_spec) | **GET** /organizations/{organizationId}/openapiSpec | Return the OpenAPI 2.0 Specification of the organization&#39;s API documentation in JSON


# **get_organization_openapi_spec**
> object get_organization_openapi_spec(organization_id)

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OpenAPISpecApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
        api_response = api_instance.get_organization_openapi_spec(organization_id)
        print("The response of OpenAPISpecApi->get_organization_openapi_spec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpenAPISpecApi->get_organization_openapi_spec: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

