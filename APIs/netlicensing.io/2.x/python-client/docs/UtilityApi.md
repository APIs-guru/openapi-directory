# openapi_client.UtilityApi

All URIs are relative to *https://go.netlicensing.io/core/v2/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**license_types**](UtilityApi.md#license_types) | **GET** /utility/licenseTypes | List License Types
[**licensing_models**](UtilityApi.md#licensing_models) | **GET** /utility/licensingModels | List Licensing Models


# **license_types**
> Netlicensing license_types()

List License Types

Return a list of all License Types supported by the service

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilityApi(api_client)

    try:
        # List License Types
        api_response = api_instance.license_types()
        print("The response of UtilityApi->license_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UtilityApi->license_types: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licensing_models**
> Netlicensing licensing_models()

List Licensing Models

Return a list of all licensing models supported by the service

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilityApi(api_client)

    try:
        # List Licensing Models
        api_response = api_instance.licensing_models()
        print("The response of UtilityApi->licensing_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UtilityApi->licensing_models: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

