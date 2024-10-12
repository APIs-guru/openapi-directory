# openapi_client.ConfigurationApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_config**](ConfigurationApi.md#global_config) | **GET** /api/globalconfig | Get the full configuration of Otoroshi
[**patch_global_config**](ConfigurationApi.md#patch_global_config) | **PATCH** /api/globalconfig | Update the global configuration with a diff
[**put_global_config**](ConfigurationApi.md#put_global_config) | **PUT** /api/globalconfig | Update the global configuration


# **global_config**
> GlobalConfig global_config()

Get the full configuration of Otoroshi

Get the full configuration of Otoroshi

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.global_config import GlobalConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationApi(api_client)

    try:
        # Get the full configuration of Otoroshi
        api_response = api_instance.global_config()
        print("The response of ConfigurationApi->global_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->global_config: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GlobalConfig**](GlobalConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_global_config**
> GlobalConfig patch_global_config(patch_inner=patch_inner)

Update the global configuration with a diff

Update the global configuration with a diff

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.global_config import GlobalConfig
from openapi_client.models.patch_inner import PatchInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationApi(api_client)
    patch_inner = [openapi_client.PatchInner()] # List[PatchInner] |  (optional)

    try:
        # Update the global configuration with a diff
        api_response = api_instance.patch_global_config(patch_inner=patch_inner)
        print("The response of ConfigurationApi->patch_global_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->patch_global_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patch_inner** | [**List[PatchInner]**](PatchInner.md)|  | [optional] 

### Return type

[**GlobalConfig**](GlobalConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_global_config**
> GlobalConfig put_global_config(global_config=global_config)

Update the global configuration

Update the global configuration

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.global_config import GlobalConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationApi(api_client)
    global_config = openapi_client.GlobalConfig() # GlobalConfig |  (optional)

    try:
        # Update the global configuration
        api_response = api_instance.put_global_config(global_config=global_config)
        print("The response of ConfigurationApi->put_global_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->put_global_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_config** | [**GlobalConfig**](GlobalConfig.md)|  | [optional] 

### Return type

[**GlobalConfig**](GlobalConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

