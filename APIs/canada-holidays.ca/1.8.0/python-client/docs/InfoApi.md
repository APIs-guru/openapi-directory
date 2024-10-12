# openapi_client.InfoApi

All URIs are relative to *https://canada-holidays.ca*

Method | HTTP request | Description
------------- | ------------- | -------------
[**root**](InfoApi.md#root) | **GET** /api/v1 | root
[**spec**](InfoApi.md#spec) | **GET** /api/v1/spec | Get JSON schema


# **root**
> Root200Response root()

root

Returns a welcome message.

### Example


```python
import openapi_client
from openapi_client.models.root200_response import Root200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canada-holidays.ca
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://canada-holidays.ca"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InfoApi(api_client)

    try:
        # root
        api_response = api_instance.root()
        print("The response of InfoApi->root:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfoApi->root: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Root200Response**](Root200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spec**
> spec()

Get JSON schema

Gets the schema for the JSON API as a yaml file.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canada-holidays.ca
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://canada-holidays.ca"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InfoApi(api_client)

    try:
        # Get JSON schema
        api_instance.spec()
    except Exception as e:
        print("Exception when calling InfoApi->spec: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * content-type - text/yaml; charset&#x3D;UTF-8 <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

