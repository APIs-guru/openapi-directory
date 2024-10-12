# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**guest_diagnostics_settings_association_list**](DefaultApi.md#guest_diagnostics_settings_association_list) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/guestDiagnosticSettingsAssociations | 
[**guest_diagnostics_settings_association_list_by_resource_group**](DefaultApi.md#guest_diagnostics_settings_association_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettingsAssociations | 
[**guest_diagnostics_settings_association_update**](DefaultApi.md#guest_diagnostics_settings_association_update) | **PATCH** /{resourceUri}/providers/microsoft.insights/guestDiagnosticSettingsAssociation/{associationName} | 


# **guest_diagnostics_settings_association_list**
> GuestDiagnosticSettingsAssociationList guest_diagnostics_settings_association_list(subscription_id, api_version)



Get a list of all guest diagnostic settings association in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_diagnostic_settings_association_list import GuestDiagnosticSettingsAssociationList
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
        api_response = api_instance.guest_diagnostics_settings_association_list(subscription_id, api_version)
        print("The response of DefaultApi->guest_diagnostics_settings_association_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->guest_diagnostics_settings_association_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GuestDiagnosticSettingsAssociationList**](GuestDiagnosticSettingsAssociationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the list of guest diagnostic settings association could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **guest_diagnostics_settings_association_list_by_resource_group**
> GuestDiagnosticSettingsAssociationList guest_diagnostics_settings_association_list_by_resource_group(resource_group_name, subscription_id, api_version)



Get a list of all guest diagnostic settings association in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_diagnostic_settings_association_list import GuestDiagnosticSettingsAssociationList
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
        api_response = api_instance.guest_diagnostics_settings_association_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of DefaultApi->guest_diagnostics_settings_association_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->guest_diagnostics_settings_association_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GuestDiagnosticSettingsAssociationList**](GuestDiagnosticSettingsAssociationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the list of guest diagnostic settings association could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **guest_diagnostics_settings_association_update**
> GuestDiagnosticSettingsAssociationResource guest_diagnostics_settings_association_update(resource_uri, api_version, association_name, parameters)



Updates an existing guestDiagnosticsSettingsAssociation Resource. To update other fields use the CreateOrUpdate method

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_diagnostic_settings_association_resource import GuestDiagnosticSettingsAssociationResource
from openapi_client.models.guest_diagnostic_settings_association_resource_patch import GuestDiagnosticSettingsAssociationResourcePatch
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
    resource_uri = 'resource_uri_example' # str | The fully qualified ID of the resource, including the resource name and resource type.
    api_version = 'api_version_example' # str | Client Api Version.
    association_name = 'association_name_example' # str | The name of the diagnostic settings association.
    parameters = openapi_client.GuestDiagnosticSettingsAssociationResourcePatch() # GuestDiagnosticSettingsAssociationResourcePatch | Parameters supplied to the operation.

    try:
        api_response = api_instance.guest_diagnostics_settings_association_update(resource_uri, api_version, association_name, parameters)
        print("The response of DefaultApi->guest_diagnostics_settings_association_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->guest_diagnostics_settings_association_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified ID of the resource, including the resource name and resource type. | 
 **api_version** | **str**| Client Api Version. | 
 **association_name** | **str**| The name of the diagnostic settings association. | 
 **parameters** | [**GuestDiagnosticSettingsAssociationResourcePatch**](GuestDiagnosticSettingsAssociationResourcePatch.md)| Parameters supplied to the operation. | 

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
**200** | An existing guest diagnostics setting resource was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

