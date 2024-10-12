# openapi_client.MaterialsApi

All URIs are relative to */api/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**materials_get**](MaterialsApi.md#materials_get) | **GET** /materials | Voodoo Manufacturing offers printing in a number of different materials, with different color options for each. Your organization can expose as many or as few material options as you want to your end-customer. 


# **materials_get**
> List[Material] materials_get()

Voodoo Manufacturing offers printing in a number of different materials, with different color options for each. Your organization can expose as many or as few material options as you want to your end-customer. 

The Materials endpoint returns a list of materials that are currently available for production for your account. The responses include display details about each material, along with the unique id required to request a print in a specific material. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.material import Material
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MaterialsApi(api_client)

    try:
        # Voodoo Manufacturing offers printing in a number of different materials, with different color options for each. Your organization can expose as many or as few material options as you want to your end-customer. 
        api_response = api_instance.materials_get()
        print("The response of MaterialsApi->materials_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MaterialsApi->materials_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Material]**](Material.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of materials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

