# openapi_client.GuestDiagnosticsSettingsAssociationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**guest_diagnostics_settings_association_create_or_update**](GuestDiagnosticsSettingsAssociationApi.md#guest_diagnostics_settings_association_create_or_update) | **PUT** /{resourceUri}/providers/microsoft.insights/guestDiagnosticSettingsAssociation/{associationName} | 
[**guest_diagnostics_settings_association_delete**](GuestDiagnosticsSettingsAssociationApi.md#guest_diagnostics_settings_association_delete) | **DELETE** /{resourceUri}/providers/microsoft.insights/guestDiagnosticSettingsAssociation/{associationName} | 
[**guest_diagnostics_settings_association_get**](GuestDiagnosticsSettingsAssociationApi.md#guest_diagnostics_settings_association_get) | **GET** /{resourceUri}/providers/microsoft.insights/guestDiagnosticSettingsAssociation/{associationName} | 


# **guest_diagnostics_settings_association_create_or_update**
> GuestDiagnosticSettingsAssociationResource guest_diagnostics_settings_association_create_or_update(resource_uri, association_name, api_version, diagnostic_settings_association)



Creates or updates guest diagnostics settings association.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_diagnostic_settings_association_resource import GuestDiagnosticSettingsAssociationResource
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
    api_instance = openapi_client.GuestDiagnosticsSettingsAssociationApi(api_client)
    resource_uri = 'resource_uri_example' # str | The fully qualified ID of the resource, including the resource name and resource type.
    association_name = 'association_name_example' # str | The name of the diagnostic settings association.
    api_version = 'api_version_example' # str | Client Api Version.
    diagnostic_settings_association = openapi_client.GuestDiagnosticSettingsAssociationResource() # GuestDiagnosticSettingsAssociationResource | The diagnostic settings association to create or update.

    try:
        api_response = api_instance.guest_diagnostics_settings_association_create_or_update(resource_uri, association_name, api_version, diagnostic_settings_association)
        print("The response of GuestDiagnosticsSettingsAssociationApi->guest_diagnostics_settings_association_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestDiagnosticsSettingsAssociationApi->guest_diagnostics_settings_association_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified ID of the resource, including the resource name and resource type. | 
 **association_name** | **str**| The name of the diagnostic settings association. | 
 **api_version** | **str**| Client Api Version. | 
 **diagnostic_settings_association** | [**GuestDiagnosticSettingsAssociationResource**](GuestDiagnosticSettingsAssociationResource.md)| The diagnostic settings association to create or update. | 

### Return type

[**GuestDiagnosticSettingsAssociationResource**](GuestDiagnosticSettingsAssociationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An existing guest diagnostic settings association was successfully updated. |  -  |
**201** | A new guest diagnostic settings association was successfully created. |  -  |
**0** | An error occurred and the guest diagnostic settings association could not be created or updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **guest_diagnostics_settings_association_delete**
> guest_diagnostics_settings_association_delete(resource_uri, association_name, api_version)



Delete guest diagnostics association settings.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.GuestDiagnosticsSettingsAssociationApi(api_client)
    resource_uri = 'resource_uri_example' # str | The fully qualified ID of the resource, including the resource name and resource type.
    association_name = 'association_name_example' # str | The name of the diagnostic settings association.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.guest_diagnostics_settings_association_delete(resource_uri, association_name, api_version)
    except Exception as e:
        print("Exception when calling GuestDiagnosticsSettingsAssociationApi->guest_diagnostics_settings_association_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified ID of the resource, including the resource name and resource type. | 
 **association_name** | **str**| The name of the diagnostic settings association. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The diagnostic settings association was successfully deleted. |  -  |
**204** | The diagnostic settings association does not exist. It may have already been deleted. |  -  |
**0** | An error occurred and the diagnostic settings association could not be deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **guest_diagnostics_settings_association_get**
> GuestDiagnosticSettingsAssociationResource guest_diagnostics_settings_association_get(resource_uri, association_name, api_version)



Gets guest diagnostics association settings.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_diagnostic_settings_association_resource import GuestDiagnosticSettingsAssociationResource
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
    api_instance = openapi_client.GuestDiagnosticsSettingsAssociationApi(api_client)
    resource_uri = 'resource_uri_example' # str | The fully qualified ID of the resource, including the resource name and resource type.
    association_name = 'association_name_example' # str | The name of the diagnostic settings association.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.guest_diagnostics_settings_association_get(resource_uri, association_name, api_version)
        print("The response of GuestDiagnosticsSettingsAssociationApi->guest_diagnostics_settings_association_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestDiagnosticsSettingsAssociationApi->guest_diagnostics_settings_association_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified ID of the resource, including the resource name and resource type. | 
 **association_name** | **str**| The name of the diagnostic settings association. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GuestDiagnosticSettingsAssociationResource**](GuestDiagnosticSettingsAssociationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the diagnostic settings association could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

