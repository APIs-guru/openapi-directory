# openapi_client.ImportApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**full_export**](ImportApi.md#full_export) | **GET** /api/otoroshi.json | Export the full state of Otoroshi
[**full_import**](ImportApi.md#full_import) | **POST** /api/otoroshi.json | Import the full state of Otoroshi
[**full_import_from_file**](ImportApi.md#full_import_from_file) | **POST** /api/import | Import the full state of Otoroshi as a file


# **full_export**
> ImportExport full_export()

Export the full state of Otoroshi

Export the full state of Otoroshi

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.import_export import ImportExport
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
    api_instance = openapi_client.ImportApi(api_client)

    try:
        # Export the full state of Otoroshi
        api_response = api_instance.full_export()
        print("The response of ImportApi->full_export:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportApi->full_export: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ImportExport**](ImportExport.md)

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

# **full_import**
> Done full_import(import_export=import_export)

Import the full state of Otoroshi

Import the full state of Otoroshi

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.done import Done
from openapi_client.models.import_export import ImportExport
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
    api_instance = openapi_client.ImportApi(api_client)
    import_export = openapi_client.ImportExport() # ImportExport |  (optional)

    try:
        # Import the full state of Otoroshi
        api_response = api_instance.full_import(import_export=import_export)
        print("The response of ImportApi->full_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportApi->full_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **import_export** | [**ImportExport**](ImportExport.md)|  | [optional] 

### Return type

[**Done**](Done.md)

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

# **full_import_from_file**
> Done full_import_from_file(import_export=import_export)

Import the full state of Otoroshi as a file

Import the full state of Otoroshi as a file

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.done import Done
from openapi_client.models.import_export import ImportExport
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
    api_instance = openapi_client.ImportApi(api_client)
    import_export = openapi_client.ImportExport() # ImportExport |  (optional)

    try:
        # Import the full state of Otoroshi as a file
        api_response = api_instance.full_import_from_file(import_export=import_export)
        print("The response of ImportApi->full_import_from_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportApi->full_import_from_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **import_export** | [**ImportExport**](ImportExport.md)|  | [optional] 

### Return type

[**Done**](Done.md)

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

