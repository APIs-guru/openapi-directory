# openapi_client.ProtectionContainersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protection_containers_get**](ProtectionContainersApi.md#protection_containers_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName} | 
[**protection_containers_inquire**](ProtectionContainersApi.md#protection_containers_inquire) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/inquire | Inquires all the protectable items under the given container.
[**protection_containers_refresh**](ProtectionContainersApi.md#protection_containers_refresh) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/refreshContainers | 
[**protection_containers_register**](ProtectionContainersApi.md#protection_containers_register) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName} | 
[**protection_containers_unregister**](ProtectionContainersApi.md#protection_containers_unregister) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName} | 


# **protection_containers_get**
> ProtectionContainerResource protection_containers_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name)



Gets details of the specific container registered to your Recovery Services Vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_container_resource import ProtectionContainerResource
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
    api_instance = openapi_client.ProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Name of the fabric where the container belongs.
    container_name = 'container_name_example' # str | Name of the container whose details need to be fetched.

    try:
        api_response = api_instance.protection_containers_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name)
        print("The response of ProtectionContainersApi->protection_containers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectionContainersApi->protection_containers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Name of the fabric where the container belongs. | 
 **container_name** | **str**| Name of the container whose details need to be fetched. | 

### Return type

[**ProtectionContainerResource**](ProtectionContainerResource.md)

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

# **protection_containers_inquire**
> protection_containers_inquire(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, filter=filter)

Inquires all the protectable items under the given container.

This is an async operation and the results should be tracked using location header or Azure-async-url.

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
    api_instance = openapi_client.ProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric Name associated with the container.
    container_name = 'container_name_example' # str | Name of the container in which inquiry needs to be triggered.
    filter = 'filter_example' # str | OData filter options. (optional)

    try:
        # Inquires all the protectable items under the given container.
        api_instance.protection_containers_inquire(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, filter=filter)
    except Exception as e:
        print("Exception when calling ProtectionContainersApi->protection_containers_inquire: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric Name associated with the container. | 
 **container_name** | **str**| Name of the container in which inquiry needs to be triggered. | 
 **filter** | **str**| OData filter options. | [optional] 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protection_containers_refresh**
> protection_containers_refresh(api_version, vault_name, resource_group_name, subscription_id, fabric_name, filter=filter)



Discovers all the containers in the subscription that can be backed up to Recovery Services Vault. This is an  asynchronous operation. To know the status of the operation, call GetRefreshOperationResult API.

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
    api_instance = openapi_client.ProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated the container.
    filter = 'filter_example' # str | OData filter options. (optional)

    try:
        api_instance.protection_containers_refresh(api_version, vault_name, resource_group_name, subscription_id, fabric_name, filter=filter)
    except Exception as e:
        print("Exception when calling ProtectionContainersApi->protection_containers_refresh: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated the container. | 
 **filter** | **str**| OData filter options. | [optional] 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protection_containers_register**
> ProtectionContainerResource protection_containers_register(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, parameters)



Registers the container with Recovery Services vault.  This is an asynchronous operation. To track the operation status, use location header to call get latest status of  the operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_container_resource import ProtectionContainerResource
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
    api_instance = openapi_client.ProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the container.
    container_name = 'container_name_example' # str | Name of the container to be registered.
    parameters = openapi_client.ProtectionContainerResource() # ProtectionContainerResource | Request body for operation

    try:
        api_response = api_instance.protection_containers_register(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, parameters)
        print("The response of ProtectionContainersApi->protection_containers_register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectionContainersApi->protection_containers_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the container. | 
 **container_name** | **str**| Name of the container to be registered. | 
 **parameters** | [**ProtectionContainerResource**](ProtectionContainerResource.md)| Request body for operation | 

### Return type

[**ProtectionContainerResource**](ProtectionContainerResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protection_containers_unregister**
> protection_containers_unregister(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name)



Unregisters the given container from your Recovery Services Vault. This is an asynchronous operation. To determine  whether the backend service has finished processing the request, call Get Container Operation Result API.

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
    api_instance = openapi_client.ProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Name of the fabric where the container belongs.
    container_name = 'container_name_example' # str | Name of the container which needs to be unregistered from the Recovery Services Vault.

    try:
        api_instance.protection_containers_unregister(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name)
    except Exception as e:
        print("Exception when calling ProtectionContainersApi->protection_containers_unregister: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Name of the fabric where the container belongs. | 
 **container_name** | **str**| Name of the container which needs to be unregistered from the Recovery Services Vault. | 

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

