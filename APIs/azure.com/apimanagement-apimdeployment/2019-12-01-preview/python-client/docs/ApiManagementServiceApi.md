# openapi_client.ApiManagementServiceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_management_service_apply_network_configuration_updates**](ApiManagementServiceApi.md#api_management_service_apply_network_configuration_updates) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/applynetworkconfigurationupdates | 
[**api_management_service_backup**](ApiManagementServiceApi.md#api_management_service_backup) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backup | 
[**api_management_service_check_name_availability**](ApiManagementServiceApi.md#api_management_service_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.ApiManagement/checkNameAvailability | 
[**api_management_service_create_or_update**](ApiManagementServiceApi.md#api_management_service_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName} | 
[**api_management_service_delete**](ApiManagementServiceApi.md#api_management_service_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName} | 
[**api_management_service_get**](ApiManagementServiceApi.md#api_management_service_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName} | 
[**api_management_service_get_sso_token**](ApiManagementServiceApi.md#api_management_service_get_sso_token) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/getssotoken | 
[**api_management_service_list**](ApiManagementServiceApi.md#api_management_service_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ApiManagement/service | 
[**api_management_service_list_by_resource_group**](ApiManagementServiceApi.md#api_management_service_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service | 
[**api_management_service_restore**](ApiManagementServiceApi.md#api_management_service_restore) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/restore | 
[**api_management_service_update**](ApiManagementServiceApi.md#api_management_service_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName} | 


# **api_management_service_apply_network_configuration_updates**
> ApiManagementServiceResource api_management_service_apply_network_configuration_updates(resource_group_name, service_name, api_version, subscription_id, parameters=parameters)



Updates the Microsoft.ApiManagement resource running in the Virtual network to pick the updated network settings.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_apply_network_configuration_parameters import ApiManagementServiceApplyNetworkConfigurationParameters
from openapi_client.models.api_management_service_resource import ApiManagementServiceResource
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApiManagementServiceApplyNetworkConfigurationParameters() # ApiManagementServiceApplyNetworkConfigurationParameters | Parameters supplied to the Apply Network Configuration operation. If the parameters are empty, all the regions in which the Api Management service is deployed will be updated sequentially without incurring downtime in the region. (optional)

    try:
        api_response = api_instance.api_management_service_apply_network_configuration_updates(resource_group_name, service_name, api_version, subscription_id, parameters=parameters)
        print("The response of ApiManagementServiceApi->api_management_service_apply_network_configuration_updates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_apply_network_configuration_updates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApiManagementServiceApplyNetworkConfigurationParameters**](ApiManagementServiceApplyNetworkConfigurationParameters.md)| Parameters supplied to the Apply Network Configuration operation. If the parameters are empty, all the regions in which the Api Management service is deployed will be updated sequentially without incurring downtime in the region. | [optional] 

### Return type

[**ApiManagementServiceResource**](ApiManagementServiceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network configuration updates were successfully applied on the Api Management service. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_backup**
> ApiManagementServiceResource api_management_service_backup(resource_group_name, service_name, api_version, subscription_id, parameters)



Creates a backup of the API Management service to the given Azure Storage Account. This is long running operation and could take several minutes to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_backup_restore_parameters import ApiManagementServiceBackupRestoreParameters
from openapi_client.models.api_management_service_resource import ApiManagementServiceResource
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApiManagementServiceBackupRestoreParameters() # ApiManagementServiceBackupRestoreParameters | Parameters supplied to the ApiManagementService_Backup operation.

    try:
        api_response = api_instance.api_management_service_backup(resource_group_name, service_name, api_version, subscription_id, parameters)
        print("The response of ApiManagementServiceApi->api_management_service_backup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApiManagementServiceBackupRestoreParameters**](ApiManagementServiceBackupRestoreParameters.md)| Parameters supplied to the ApiManagementService_Backup operation. | 

### Return type

[**ApiManagementServiceResource**](ApiManagementServiceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully backed up the API Management service to the storage account. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_check_name_availability**
> ApiManagementServiceNameAvailabilityResult api_management_service_check_name_availability(api_version, subscription_id, parameters)



Checks availability and correctness of a name for an API Management service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_check_name_availability_parameters import ApiManagementServiceCheckNameAvailabilityParameters
from openapi_client.models.api_management_service_name_availability_result import ApiManagementServiceNameAvailabilityResult
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApiManagementServiceCheckNameAvailabilityParameters() # ApiManagementServiceCheckNameAvailabilityParameters | Parameters supplied to the CheckNameAvailability operation.

    try:
        api_response = api_instance.api_management_service_check_name_availability(api_version, subscription_id, parameters)
        print("The response of ApiManagementServiceApi->api_management_service_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApiManagementServiceCheckNameAvailabilityParameters**](ApiManagementServiceCheckNameAvailabilityParameters.md)| Parameters supplied to the CheckNameAvailability operation. | 

### Return type

[**ApiManagementServiceNameAvailabilityResult**](ApiManagementServiceNameAvailabilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of check name availability. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_create_or_update**
> ApiManagementServiceResource api_management_service_create_or_update(resource_group_name, service_name, api_version, subscription_id, parameters)



Creates or updates an API Management service. This is long running operation and could take several minutes to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_resource import ApiManagementServiceResource
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApiManagementServiceResource() # ApiManagementServiceResource | Parameters supplied to the CreateOrUpdate API Management service operation.

    try:
        api_response = api_instance.api_management_service_create_or_update(resource_group_name, service_name, api_version, subscription_id, parameters)
        print("The response of ApiManagementServiceApi->api_management_service_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApiManagementServiceResource**](ApiManagementServiceResource.md)| Parameters supplied to the CreateOrUpdate API Management service operation. | 

### Return type

[**ApiManagementServiceResource**](ApiManagementServiceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service was successfully set up. |  -  |
**201** | Created |  -  |
**202** | Accepted the configuration change when updating the service. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_delete**
> api_management_service_delete(resource_group_name, service_name, api_version, subscription_id)



Deletes an existing API Management service.

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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.api_management_service_delete(resource_group_name, service_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Service was successfully deleted. |  -  |
**202** | The service delete request was Accepted. |  -  |
**204** | The service does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_get**
> ApiManagementServiceResource api_management_service_get(resource_group_name, service_name, api_version, subscription_id)



Gets an API Management service resource description.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_resource import ApiManagementServiceResource
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.api_management_service_get(resource_group_name, service_name, api_version, subscription_id)
        print("The response of ApiManagementServiceApi->api_management_service_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApiManagementServiceResource**](ApiManagementServiceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the API Management Service Resource. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_get_sso_token**
> ApiManagementServiceGetSsoTokenResult api_management_service_get_sso_token(resource_group_name, service_name, api_version, subscription_id)



Gets the Single-Sign-On token for the API Management Service which is valid for 5 Minutes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_get_sso_token_result import ApiManagementServiceGetSsoTokenResult
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.api_management_service_get_sso_token(resource_group_name, service_name, api_version, subscription_id)
        print("The response of ApiManagementServiceApi->api_management_service_get_sso_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_get_sso_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApiManagementServiceGetSsoTokenResult**](ApiManagementServiceGetSsoTokenResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK if successful with the SSO Redirect URI. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_list**
> ApiManagementServiceListResult api_management_service_list(api_version, subscription_id)



Lists all API Management services within an Azure subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_list_result import ApiManagementServiceListResult
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.api_management_service_list(api_version, subscription_id)
        print("The response of ApiManagementServiceApi->api_management_service_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApiManagementServiceListResult**](ApiManagementServiceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API Management service list. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_list_by_resource_group**
> ApiManagementServiceListResult api_management_service_list_by_resource_group(resource_group_name, api_version, subscription_id)



List all API Management services within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_list_result import ApiManagementServiceListResult
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.api_management_service_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of ApiManagementServiceApi->api_management_service_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApiManagementServiceListResult**](ApiManagementServiceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API Management service list. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_restore**
> ApiManagementServiceResource api_management_service_restore(resource_group_name, service_name, api_version, subscription_id, parameters)



Restores a backup of an API Management service created using the ApiManagementService_Backup operation on the current service. This is a long running operation and could take several minutes to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_backup_restore_parameters import ApiManagementServiceBackupRestoreParameters
from openapi_client.models.api_management_service_resource import ApiManagementServiceResource
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApiManagementServiceBackupRestoreParameters() # ApiManagementServiceBackupRestoreParameters | Parameters supplied to the Restore API Management service from backup operation.

    try:
        api_response = api_instance.api_management_service_restore(resource_group_name, service_name, api_version, subscription_id, parameters)
        print("The response of ApiManagementServiceApi->api_management_service_restore:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_restore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApiManagementServiceBackupRestoreParameters**](ApiManagementServiceBackupRestoreParameters.md)| Parameters supplied to the Restore API Management service from backup operation. | 

### Return type

[**ApiManagementServiceResource**](ApiManagementServiceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully restored the backup onto the API Management service. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_management_service_update**
> ApiManagementServiceResource api_management_service_update(resource_group_name, service_name, api_version, subscription_id, parameters)



Updates an existing API Management service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_management_service_resource import ApiManagementServiceResource
from openapi_client.models.api_management_service_update_parameters import ApiManagementServiceUpdateParameters
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
    api_instance = openapi_client.ApiManagementServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApiManagementServiceUpdateParameters() # ApiManagementServiceUpdateParameters | Parameters supplied to the CreateOrUpdate API Management service operation.

    try:
        api_response = api_instance.api_management_service_update(resource_group_name, service_name, api_version, subscription_id, parameters)
        print("The response of ApiManagementServiceApi->api_management_service_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceApi->api_management_service_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApiManagementServiceUpdateParameters**](ApiManagementServiceUpdateParameters.md)| Parameters supplied to the CreateOrUpdate API Management service operation. | 

### Return type

[**ApiManagementServiceResource**](ApiManagementServiceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service was successfully updated. |  -  |
**202** | The service update request was Accepted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

