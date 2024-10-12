# openapi_client.ServiceDiagnosticSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_diagnostic_settings_create_or_update**](ServiceDiagnosticSettingsApi.md#service_diagnostic_settings_create_or_update) | **PUT** /{resourceUri}/providers/microsoft.insights/diagnosticSettings/service | 
[**service_diagnostic_settings_get**](ServiceDiagnosticSettingsApi.md#service_diagnostic_settings_get) | **GET** /{resourceUri}/providers/microsoft.insights/diagnosticSettings/service | 


# **service_diagnostic_settings_create_or_update**
> ServiceDiagnosticSettingsResource service_diagnostic_settings_create_or_update(resource_uri, api_version, parameters)



Create or update new diagnostic settings for the specified resource. **WARNING**: This method will be deprecated in future releases.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_diagnostic_settings_resource import ServiceDiagnosticSettingsResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServiceDiagnosticSettingsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.ServiceDiagnosticSettingsResource() # ServiceDiagnosticSettingsResource | Parameters supplied to the operation.

    try:
        api_response = api_instance.service_diagnostic_settings_create_or_update(resource_uri, api_version, parameters)
        print("The response of ServiceDiagnosticSettingsApi->service_diagnostic_settings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceDiagnosticSettingsApi->service_diagnostic_settings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**ServiceDiagnosticSettingsResource**](ServiceDiagnosticSettingsResource.md)| Parameters supplied to the operation. | 

### Return type

[**ServiceDiagnosticSettingsResource**](ServiceDiagnosticSettingsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to create a service diagnostic setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_diagnostic_settings_get**
> ServiceDiagnosticSettingsResource service_diagnostic_settings_get(resource_uri, api_version)



Gets the active diagnostic settings for the specified resource. **WARNING**: This method will be deprecated in future releases.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_diagnostic_settings_resource import ServiceDiagnosticSettingsResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServiceDiagnosticSettingsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.service_diagnostic_settings_get(resource_uri, api_version)
        print("The response of ServiceDiagnosticSettingsApi->service_diagnostic_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceDiagnosticSettingsApi->service_diagnostic_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ServiceDiagnosticSettingsResource**](ServiceDiagnosticSettingsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get more information about service diagnostic setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

