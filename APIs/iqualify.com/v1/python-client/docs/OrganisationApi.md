# openapi_client.OrganisationApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**org_get**](OrganisationApi.md#org_get) | **GET** /org | Gets the current organisation


# **org_get**
> OrgResponse org_get()

Gets the current organisation

Returns the current organisation info.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.org_response import OrgResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganisationApi(api_client)

    try:
        # Gets the current organisation
        api_response = api_instance.org_get()
        print("The response of OrganisationApi->org_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationApi->org_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OrgResponse**](OrgResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | organisation summary data |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

