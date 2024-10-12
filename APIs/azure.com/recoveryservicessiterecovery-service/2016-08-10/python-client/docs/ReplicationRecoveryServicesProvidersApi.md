# openapi_client.ReplicationRecoveryServicesProvidersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_recovery_services_providers_delete**](ReplicationRecoveryServicesProvidersApi.md#replication_recovery_services_providers_delete) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}/remove | Deletes provider from fabric. Note: Deleting provider for any fabric other than SingleHost is unsupported. To maintain backward compatibility for released clients the object \&quot;deleteRspInput\&quot; is used (if the object is empty we assume that it is old client and continue the old behavior).
[**replication_recovery_services_providers_get**](ReplicationRecoveryServicesProvidersApi.md#replication_recovery_services_providers_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName} | Gets the details of a recovery services provider.
[**replication_recovery_services_providers_list**](ReplicationRecoveryServicesProvidersApi.md#replication_recovery_services_providers_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryServicesProviders | Gets the list of registered recovery services providers in the vault. This is a view only api.
[**replication_recovery_services_providers_list_by_replication_fabrics**](ReplicationRecoveryServicesProvidersApi.md#replication_recovery_services_providers_list_by_replication_fabrics) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders | Gets the list of registered recovery services providers for the fabric.
[**replication_recovery_services_providers_purge**](ReplicationRecoveryServicesProvidersApi.md#replication_recovery_services_providers_purge) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName} | Purges recovery service provider from fabric
[**replication_recovery_services_providers_refresh_provider**](ReplicationRecoveryServicesProvidersApi.md#replication_recovery_services_providers_refresh_provider) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}/refreshProvider | Refresh details from the recovery services provider.


# **replication_recovery_services_providers_delete**
> replication_recovery_services_providers_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, provider_name)

Deletes provider from fabric. Note: Deleting provider for any fabric other than SingleHost is unsupported. To maintain backward compatibility for released clients the object \"deleteRspInput\" is used (if the object is empty we assume that it is old client and continue the old behavior).

The operation to removes/delete(unregister) a recovery services provider from the vault

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
    api_instance = openapi_client.ReplicationRecoveryServicesProvidersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    provider_name = 'provider_name_example' # str | Recovery services provider name.

    try:
        # Deletes provider from fabric. Note: Deleting provider for any fabric other than SingleHost is unsupported. To maintain backward compatibility for released clients the object \"deleteRspInput\" is used (if the object is empty we assume that it is old client and continue the old behavior).
        api_instance.replication_recovery_services_providers_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, provider_name)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **provider_name** | **str**| Recovery services provider name. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_services_providers_get**
> RecoveryServicesProvider replication_recovery_services_providers_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, provider_name)

Gets the details of a recovery services provider.

Gets the details of registered recovery services provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_services_provider import RecoveryServicesProvider
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
    api_instance = openapi_client.ReplicationRecoveryServicesProvidersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    provider_name = 'provider_name_example' # str | Recovery services provider name

    try:
        # Gets the details of a recovery services provider.
        api_response = api_instance.replication_recovery_services_providers_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, provider_name)
        print("The response of ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **provider_name** | **str**| Recovery services provider name | 

### Return type

[**RecoveryServicesProvider**](RecoveryServicesProvider.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_services_providers_list**
> RecoveryServicesProviderCollection replication_recovery_services_providers_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of registered recovery services providers in the vault. This is a view only api.

Lists the registered recovery services providers in the vault

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_services_provider_collection import RecoveryServicesProviderCollection
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
    api_instance = openapi_client.ReplicationRecoveryServicesProvidersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of registered recovery services providers in the vault. This is a view only api.
        api_response = api_instance.replication_recovery_services_providers_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**RecoveryServicesProviderCollection**](RecoveryServicesProviderCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_services_providers_list_by_replication_fabrics**
> RecoveryServicesProviderCollection replication_recovery_services_providers_list_by_replication_fabrics(api_version, resource_name, resource_group_name, subscription_id, fabric_name)

Gets the list of registered recovery services providers for the fabric.

Lists the registered recovery services providers for the specified fabric.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_services_provider_collection import RecoveryServicesProviderCollection
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
    api_instance = openapi_client.ReplicationRecoveryServicesProvidersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name

    try:
        # Gets the list of registered recovery services providers for the fabric.
        api_response = api_instance.replication_recovery_services_providers_list_by_replication_fabrics(api_version, resource_name, resource_group_name, subscription_id, fabric_name)
        print("The response of ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_list_by_replication_fabrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_list_by_replication_fabrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name | 

### Return type

[**RecoveryServicesProviderCollection**](RecoveryServicesProviderCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_services_providers_purge**
> replication_recovery_services_providers_purge(api_version, resource_name, resource_group_name, subscription_id, fabric_name, provider_name)

Purges recovery service provider from fabric

The operation to purge(force delete) a recovery services provider from the vault.

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
    api_instance = openapi_client.ReplicationRecoveryServicesProvidersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    provider_name = 'provider_name_example' # str | Recovery services provider name.

    try:
        # Purges recovery service provider from fabric
        api_instance.replication_recovery_services_providers_purge(api_version, resource_name, resource_group_name, subscription_id, fabric_name, provider_name)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_purge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **provider_name** | **str**| Recovery services provider name. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_services_providers_refresh_provider**
> RecoveryServicesProvider replication_recovery_services_providers_refresh_provider(api_version, resource_name, resource_group_name, subscription_id, fabric_name, provider_name)

Refresh details from the recovery services provider.

The operation to refresh the information from the recovery services provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_services_provider import RecoveryServicesProvider
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
    api_instance = openapi_client.ReplicationRecoveryServicesProvidersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    provider_name = 'provider_name_example' # str | Recovery services provider name.

    try:
        # Refresh details from the recovery services provider.
        api_response = api_instance.replication_recovery_services_providers_refresh_provider(api_version, resource_name, resource_group_name, subscription_id, fabric_name, provider_name)
        print("The response of ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_refresh_provider:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryServicesProvidersApi->replication_recovery_services_providers_refresh_provider: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **provider_name** | **str**| Recovery services provider name. | 

### Return type

[**RecoveryServicesProvider**](RecoveryServicesProvider.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

