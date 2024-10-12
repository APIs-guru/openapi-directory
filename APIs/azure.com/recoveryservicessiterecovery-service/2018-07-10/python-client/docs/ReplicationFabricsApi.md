# openapi_client.ReplicationFabricsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_fabrics_check_consistency**](ReplicationFabricsApi.md#replication_fabrics_check_consistency) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/checkConsistency | Checks the consistency of the ASR fabric.
[**replication_fabrics_create**](ReplicationFabricsApi.md#replication_fabrics_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName} | Creates an Azure Site Recovery fabric.
[**replication_fabrics_delete**](ReplicationFabricsApi.md#replication_fabrics_delete) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/remove | Deletes the site.
[**replication_fabrics_get**](ReplicationFabricsApi.md#replication_fabrics_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName} | Gets the details of an ASR fabric.
[**replication_fabrics_list**](ReplicationFabricsApi.md#replication_fabrics_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics | Gets the list of ASR fabrics
[**replication_fabrics_migrate_to_aad**](ReplicationFabricsApi.md#replication_fabrics_migrate_to_aad) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/migratetoaad | Migrates the site to AAD.
[**replication_fabrics_purge**](ReplicationFabricsApi.md#replication_fabrics_purge) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName} | Purges the site.
[**replication_fabrics_reassociate_gateway**](ReplicationFabricsApi.md#replication_fabrics_reassociate_gateway) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/reassociateGateway | Perform failover of the process server.
[**replication_fabrics_renew_certificate**](ReplicationFabricsApi.md#replication_fabrics_renew_certificate) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/renewCertificate | Renews certificate for the fabric.


# **replication_fabrics_check_consistency**
> Fabric replication_fabrics_check_consistency(api_version, resource_name, resource_group_name, subscription_id, fabric_name)

Checks the consistency of the ASR fabric.

The operation to perform a consistency check on the fabric.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.fabric import Fabric
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
    api_instance = openapi_client.ReplicationFabricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.

    try:
        # Checks the consistency of the ASR fabric.
        api_response = api_instance.replication_fabrics_check_consistency(api_version, resource_name, resource_group_name, subscription_id, fabric_name)
        print("The response of ReplicationFabricsApi->replication_fabrics_check_consistency:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationFabricsApi->replication_fabrics_check_consistency: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 

### Return type

[**Fabric**](Fabric.md)

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

# **replication_fabrics_create**
> Fabric replication_fabrics_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, input)

Creates an Azure Site Recovery fabric.

The operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site)

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.fabric import Fabric
from openapi_client.models.fabric_creation_input import FabricCreationInput
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
    api_instance = openapi_client.ReplicationFabricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Name of the ASR fabric.
    input = openapi_client.FabricCreationInput() # FabricCreationInput | Fabric creation input.

    try:
        # Creates an Azure Site Recovery fabric.
        api_response = api_instance.replication_fabrics_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, input)
        print("The response of ReplicationFabricsApi->replication_fabrics_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationFabricsApi->replication_fabrics_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Name of the ASR fabric. | 
 **input** | [**FabricCreationInput**](FabricCreationInput.md)| Fabric creation input. | 

### Return type

[**Fabric**](Fabric.md)

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

# **replication_fabrics_delete**
> replication_fabrics_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name)

Deletes the site.

The operation to delete or remove an Azure Site Recovery fabric.

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
    api_instance = openapi_client.ReplicationFabricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | ASR fabric to delete

    try:
        # Deletes the site.
        api_instance.replication_fabrics_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name)
    except Exception as e:
        print("Exception when calling ReplicationFabricsApi->replication_fabrics_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| ASR fabric to delete | 

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

# **replication_fabrics_get**
> Fabric replication_fabrics_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name)

Gets the details of an ASR fabric.

Gets the details of an Azure Site Recovery fabric.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.fabric import Fabric
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
    api_instance = openapi_client.ReplicationFabricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.

    try:
        # Gets the details of an ASR fabric.
        api_response = api_instance.replication_fabrics_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name)
        print("The response of ReplicationFabricsApi->replication_fabrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationFabricsApi->replication_fabrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 

### Return type

[**Fabric**](Fabric.md)

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

# **replication_fabrics_list**
> FabricCollection replication_fabrics_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of ASR fabrics

Gets a list of the Azure Site Recovery fabrics in the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.fabric_collection import FabricCollection
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
    api_instance = openapi_client.ReplicationFabricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of ASR fabrics
        api_response = api_instance.replication_fabrics_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationFabricsApi->replication_fabrics_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationFabricsApi->replication_fabrics_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**FabricCollection**](FabricCollection.md)

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

# **replication_fabrics_migrate_to_aad**
> replication_fabrics_migrate_to_aad(api_version, resource_name, resource_group_name, subscription_id, fabric_name)

Migrates the site to AAD.

The operation to migrate an Azure Site Recovery fabric to AAD.

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
    api_instance = openapi_client.ReplicationFabricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | ASR fabric to migrate.

    try:
        # Migrates the site to AAD.
        api_instance.replication_fabrics_migrate_to_aad(api_version, resource_name, resource_group_name, subscription_id, fabric_name)
    except Exception as e:
        print("Exception when calling ReplicationFabricsApi->replication_fabrics_migrate_to_aad: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| ASR fabric to migrate. | 

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

# **replication_fabrics_purge**
> replication_fabrics_purge(api_version, resource_name, resource_group_name, subscription_id, fabric_name)

Purges the site.

The operation to purge(force delete) an Azure Site Recovery fabric.

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
    api_instance = openapi_client.ReplicationFabricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | ASR fabric to purge.

    try:
        # Purges the site.
        api_instance.replication_fabrics_purge(api_version, resource_name, resource_group_name, subscription_id, fabric_name)
    except Exception as e:
        print("Exception when calling ReplicationFabricsApi->replication_fabrics_purge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| ASR fabric to purge. | 

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

# **replication_fabrics_reassociate_gateway**
> Fabric replication_fabrics_reassociate_gateway(api_version, resource_name, resource_group_name, subscription_id, fabric_name, failover_process_server_request)

Perform failover of the process server.

The operation to move replications from a process server to another process server.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.fabric import Fabric
from openapi_client.models.failover_process_server_request import FailoverProcessServerRequest
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
    api_instance = openapi_client.ReplicationFabricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | The name of the fabric containing the process server.
    failover_process_server_request = openapi_client.FailoverProcessServerRequest() # FailoverProcessServerRequest | The input to the failover process server operation.

    try:
        # Perform failover of the process server.
        api_response = api_instance.replication_fabrics_reassociate_gateway(api_version, resource_name, resource_group_name, subscription_id, fabric_name, failover_process_server_request)
        print("The response of ReplicationFabricsApi->replication_fabrics_reassociate_gateway:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationFabricsApi->replication_fabrics_reassociate_gateway: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| The name of the fabric containing the process server. | 
 **failover_process_server_request** | [**FailoverProcessServerRequest**](FailoverProcessServerRequest.md)| The input to the failover process server operation. | 

### Return type

[**Fabric**](Fabric.md)

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

# **replication_fabrics_renew_certificate**
> Fabric replication_fabrics_renew_certificate(api_version, resource_name, resource_group_name, subscription_id, fabric_name, renew_certificate)

Renews certificate for the fabric.

Renews the connection certificate for the ASR replication fabric.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.fabric import Fabric
from openapi_client.models.renew_certificate_input import RenewCertificateInput
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
    api_instance = openapi_client.ReplicationFabricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | fabric name to renew certs for.
    renew_certificate = openapi_client.RenewCertificateInput() # RenewCertificateInput | Renew certificate input.

    try:
        # Renews certificate for the fabric.
        api_response = api_instance.replication_fabrics_renew_certificate(api_version, resource_name, resource_group_name, subscription_id, fabric_name, renew_certificate)
        print("The response of ReplicationFabricsApi->replication_fabrics_renew_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationFabricsApi->replication_fabrics_renew_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| fabric name to renew certs for. | 
 **renew_certificate** | [**RenewCertificateInput**](RenewCertificateInput.md)| Renew certificate input. | 

### Return type

[**Fabric**](Fabric.md)

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

