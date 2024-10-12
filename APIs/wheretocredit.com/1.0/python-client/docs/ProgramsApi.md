# openapi_client.ProgramsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api10_programs_get**](ProgramsApi.md#api10_programs_get) | **GET** /api/1.0/programs | Lists all supported frequent flyer programs.


# **api10_programs_get**
> List[Program] api10_programs_get()

Lists all supported frequent flyer programs.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.program import Program
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProgramsApi(api_client)

    try:
        # Lists all supported frequent flyer programs.
        api_response = api_instance.api10_programs_get()
        print("The response of ProgramsApi->api10_programs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProgramsApi->api10_programs_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Program]**](Program.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**429** | Usage limits exceeded. (Free users only) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

