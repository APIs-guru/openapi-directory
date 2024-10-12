# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**guest_diagnostics_settings_list**](DefaultApi.md#guest_diagnostics_settings_list) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/guestDiagnosticSettings | 
[**guest_diagnostics_settings_list_by_resource_group**](DefaultApi.md#guest_diagnostics_settings_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings | 
[**guest_diagnostics_settings_update**](DefaultApi.md#guest_diagnostics_settings_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings/{diagnosticSettingsName} | 


# **guest_diagnostics_settings_list**
> GuestDiagnosticSettingsList guest_diagnostics_settings_list(subscription_id, api_version)



Get a list of all guest diagnostic settings in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_diagnostic_settings_list import GuestDiagnosticSettingsList
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
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.guest_diagnostics_settings_list(subscription_id, api_version)
        print("The response of DefaultApi->guest_diagnostics_settings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->guest_diagnostics_settings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GuestDiagnosticSettingsList**](GuestDiagnosticSettingsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the list of guest diagnostic settings could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **guest_diagnostics_settings_list_by_resource_group**
> GuestDiagnosticSettingsList guest_diagnostics_settings_list_by_resource_group(resource_group_name, subscription_id, api_version)



Get a list of all guest diagnostic settings in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_diagnostic_settings_list import GuestDiagnosticSettingsList
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.guest_diagnostics_settings_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of DefaultApi->guest_diagnostics_settings_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->guest_diagnostics_settings_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GuestDiagnosticSettingsList**](GuestDiagnosticSettingsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the list of guest diagnostic settings could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **guest_diagnostics_settings_update**
> GuestDiagnosticSettingsResource guest_diagnostics_settings_update(resource_group_name, diagnostic_settings_name, api_version, subscription_id, parameters)



Updates guest diagnostics settings.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_diagnostic_settings_patch_resource import GuestDiagnosticSettingsPatchResource
from openapi_client.models.guest_diagnostic_settings_resource import GuestDiagnosticSettingsResource
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    diagnostic_settings_name = 'diagnostic_settings_name_example' # str | The name of the diagnostic setting.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    parameters = openapi_client.GuestDiagnosticSettingsPatchResource() # GuestDiagnosticSettingsPatchResource | The configuration to patch.

    try:
        api_response = api_instance.guest_diagnostics_settings_update(resource_group_name, diagnostic_settings_name, api_version, subscription_id, parameters)
        print("The response of DefaultApi->guest_diagnostics_settings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->guest_diagnostics_settings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **diagnostic_settings_name** | **str**| The name of the diagnostic setting. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **parameters** | [**GuestDiagnosticSettingsPatchResource**](GuestDiagnosticSettingsPatchResource.md)| The configuration to patch. | 

### Return type

[**GuestDiagnosticSettingsResource**](GuestDiagnosticSettingsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An existing guest diagnostic settings was successfully updated. |  -  |
**201** | A new guest diagnostic settings was successfully created. |  -  |
**0** | An error occurred and the guest diagnostic settings could not be created or updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

