# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_diagnostic_settings_update**](DefaultApi.md#service_diagnostic_settings_update) | **PATCH** /{resourceUri}/providers/microsoft.insights/diagnosticSettings/service | 


# **service_diagnostic_settings_update**
> ServiceDiagnosticSettingsResource service_diagnostic_settings_update(resource_uri, api_version, service_diagnostic_settings_resource)



Updates an existing ServiceDiagnosticSettingsResource. To update other fields use the CreateOrUpdate method. **WARNING**: This method will be deprecated in future releases.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_diagnostic_settings_resource import ServiceDiagnosticSettingsResource
from openapi_client.models.service_diagnostic_settings_resource_patch import ServiceDiagnosticSettingsResourcePatch
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    service_diagnostic_settings_resource = openapi_client.ServiceDiagnosticSettingsResourcePatch() # ServiceDiagnosticSettingsResourcePatch | Parameters supplied to the operation.

    try:
        api_response = api_instance.service_diagnostic_settings_update(resource_uri, api_version, service_diagnostic_settings_resource)
        print("The response of DefaultApi->service_diagnostic_settings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_diagnostic_settings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **service_diagnostic_settings_resource** | [**ServiceDiagnosticSettingsResourcePatch**](ServiceDiagnosticSettingsResourcePatch.md)| Parameters supplied to the operation. | 

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
**200** | An existing service diagnostics setting resource was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

