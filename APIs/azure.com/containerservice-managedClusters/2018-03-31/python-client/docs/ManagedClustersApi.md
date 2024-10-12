# openapi_client.ManagedClustersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_clusters_create_or_update**](ManagedClustersApi.md#managed_clusters_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName} | Creates or updates a managed cluster.
[**managed_clusters_delete**](ManagedClustersApi.md#managed_clusters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName} | Deletes a managed cluster.
[**managed_clusters_get**](ManagedClustersApi.md#managed_clusters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName} | Gets a managed cluster.
[**managed_clusters_get_access_profile**](ManagedClustersApi.md#managed_clusters_get_access_profile) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/accessProfiles/{roleName}/listCredential | Gets an access profile of a managed cluster.
[**managed_clusters_get_upgrade_profile**](ManagedClustersApi.md#managed_clusters_get_upgrade_profile) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/upgradeProfiles/default | Gets upgrade profile for a managed cluster.
[**managed_clusters_list**](ManagedClustersApi.md#managed_clusters_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/managedClusters | Gets a list of managed clusters in the specified subscription.
[**managed_clusters_list_by_resource_group**](ManagedClustersApi.md#managed_clusters_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters | Lists managed clusters in the specified subscription and resource group.
[**managed_clusters_list_cluster_admin_credentials**](ManagedClustersApi.md#managed_clusters_list_cluster_admin_credentials) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterAdminCredential | Gets cluster admin credential of a managed cluster.
[**managed_clusters_list_cluster_user_credentials**](ManagedClustersApi.md#managed_clusters_list_cluster_user_credentials) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterUserCredential | Gets cluster user credential of a managed cluster.
[**managed_clusters_reset_aad_profile**](ManagedClustersApi.md#managed_clusters_reset_aad_profile) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/resetAADProfile | Reset AAD Profile of a managed cluster.
[**managed_clusters_reset_service_principal_profile**](ManagedClustersApi.md#managed_clusters_reset_service_principal_profile) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/resetServicePrincipalProfile | Reset Service Principal Profile of a managed cluster.
[**managed_clusters_update_tags**](ManagedClustersApi.md#managed_clusters_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName} | Updates tags on a managed cluster.


# **managed_clusters_create_or_update**
> ManagedCluster managed_clusters_create_or_update(api_version, subscription_id, resource_group_name, resource_name, parameters)

Creates or updates a managed cluster.

Creates or updates a managed cluster with the specified configuration for agents and Kubernetes version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_cluster import ManagedCluster
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.
    parameters = openapi_client.ManagedCluster() # ManagedCluster | Parameters supplied to the Create or Update a Managed Cluster operation.

    try:
        # Creates or updates a managed cluster.
        api_response = api_instance.managed_clusters_create_or_update(api_version, subscription_id, resource_group_name, resource_name, parameters)
        print("The response of ManagedClustersApi->managed_clusters_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 
 **parameters** | [**ManagedCluster**](ManagedCluster.md)| Parameters supplied to the Create or Update a Managed Cluster operation. | 

### Return type

[**ManagedCluster**](ManagedCluster.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_clusters_delete**
> managed_clusters_delete(api_version, subscription_id, resource_group_name, resource_name)

Deletes a managed cluster.

Deletes the managed cluster with a specified resource group and name.

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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.

    try:
        # Deletes a managed cluster.
        api_instance.managed_clusters_delete(api_version, subscription_id, resource_group_name, resource_name)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 

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

# **managed_clusters_get**
> ManagedCluster managed_clusters_get(api_version, subscription_id, resource_group_name, resource_name)

Gets a managed cluster.

Gets the details of the managed cluster with a specified resource group and name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_cluster import ManagedCluster
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.

    try:
        # Gets a managed cluster.
        api_response = api_instance.managed_clusters_get(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of ManagedClustersApi->managed_clusters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 

### Return type

[**ManagedCluster**](ManagedCluster.md)

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

# **managed_clusters_get_access_profile**
> ManagedClusterAccessProfile managed_clusters_get_access_profile(api_version, subscription_id, resource_group_name, resource_name, role_name)

Gets an access profile of a managed cluster.

Gets the accessProfile for the specified role name of the managed cluster with a specified resource group and name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_cluster_access_profile import ManagedClusterAccessProfile
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.
    role_name = 'role_name_example' # str | The name of the role for managed cluster accessProfile resource.

    try:
        # Gets an access profile of a managed cluster.
        api_response = api_instance.managed_clusters_get_access_profile(api_version, subscription_id, resource_group_name, resource_name, role_name)
        print("The response of ManagedClustersApi->managed_clusters_get_access_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_get_access_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 
 **role_name** | **str**| The name of the role for managed cluster accessProfile resource. | 

### Return type

[**ManagedClusterAccessProfile**](ManagedClusterAccessProfile.md)

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

# **managed_clusters_get_upgrade_profile**
> ManagedClusterUpgradeProfile managed_clusters_get_upgrade_profile(api_version, subscription_id, resource_group_name, resource_name)

Gets upgrade profile for a managed cluster.

Gets the details of the upgrade profile for a managed cluster with a specified resource group and name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_cluster_upgrade_profile import ManagedClusterUpgradeProfile
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.

    try:
        # Gets upgrade profile for a managed cluster.
        api_response = api_instance.managed_clusters_get_upgrade_profile(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of ManagedClustersApi->managed_clusters_get_upgrade_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_get_upgrade_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 

### Return type

[**ManagedClusterUpgradeProfile**](ManagedClusterUpgradeProfile.md)

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

# **managed_clusters_list**
> ManagedClusterListResult managed_clusters_list(api_version, subscription_id)

Gets a list of managed clusters in the specified subscription.

Gets a list of managed clusters in the specified subscription. The operation returns properties of each managed cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_cluster_list_result import ManagedClusterListResult
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Gets a list of managed clusters in the specified subscription.
        api_response = api_instance.managed_clusters_list(api_version, subscription_id)
        print("The response of ManagedClustersApi->managed_clusters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ManagedClusterListResult**](ManagedClusterListResult.md)

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

# **managed_clusters_list_by_resource_group**
> ManagedClusterListResult managed_clusters_list_by_resource_group(api_version, subscription_id, resource_group_name)

Lists managed clusters in the specified subscription and resource group.

Lists managed clusters in the specified subscription and resource group. The operation returns properties of each managed cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_cluster_list_result import ManagedClusterListResult
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.

    try:
        # Lists managed clusters in the specified subscription and resource group.
        api_response = api_instance.managed_clusters_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of ManagedClustersApi->managed_clusters_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 

### Return type

[**ManagedClusterListResult**](ManagedClusterListResult.md)

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

# **managed_clusters_list_cluster_admin_credentials**
> CredentialResults managed_clusters_list_cluster_admin_credentials(api_version, subscription_id, resource_group_name, resource_name)

Gets cluster admin credential of a managed cluster.

Gets cluster admin credential of the managed cluster with a specified resource group and name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.credential_results import CredentialResults
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.

    try:
        # Gets cluster admin credential of a managed cluster.
        api_response = api_instance.managed_clusters_list_cluster_admin_credentials(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of ManagedClustersApi->managed_clusters_list_cluster_admin_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_list_cluster_admin_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 

### Return type

[**CredentialResults**](CredentialResults.md)

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

# **managed_clusters_list_cluster_user_credentials**
> CredentialResults managed_clusters_list_cluster_user_credentials(api_version, subscription_id, resource_group_name, resource_name)

Gets cluster user credential of a managed cluster.

Gets cluster user credential of the managed cluster with a specified resource group and name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.credential_results import CredentialResults
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.

    try:
        # Gets cluster user credential of a managed cluster.
        api_response = api_instance.managed_clusters_list_cluster_user_credentials(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of ManagedClustersApi->managed_clusters_list_cluster_user_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_list_cluster_user_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 

### Return type

[**CredentialResults**](CredentialResults.md)

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

# **managed_clusters_reset_aad_profile**
> managed_clusters_reset_aad_profile(api_version, subscription_id, resource_group_name, resource_name, parameters)

Reset AAD Profile of a managed cluster.

Update the AAD Profile for a managed cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_cluster_aad_profile import ManagedClusterAADProfile
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.
    parameters = openapi_client.ManagedClusterAADProfile() # ManagedClusterAADProfile | Parameters supplied to the Reset AAD Profile operation for a Managed Cluster.

    try:
        # Reset AAD Profile of a managed cluster.
        api_instance.managed_clusters_reset_aad_profile(api_version, subscription_id, resource_group_name, resource_name, parameters)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_reset_aad_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 
 **parameters** | [**ManagedClusterAADProfile**](ManagedClusterAADProfile.md)| Parameters supplied to the Reset AAD Profile operation for a Managed Cluster. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_clusters_reset_service_principal_profile**
> managed_clusters_reset_service_principal_profile(api_version, subscription_id, resource_group_name, resource_name, parameters)

Reset Service Principal Profile of a managed cluster.

Update the service principal Profile for a managed cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_cluster_service_principal_profile import ManagedClusterServicePrincipalProfile
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.
    parameters = openapi_client.ManagedClusterServicePrincipalProfile() # ManagedClusterServicePrincipalProfile | Parameters supplied to the Reset Service Principal Profile operation for a Managed Cluster.

    try:
        # Reset Service Principal Profile of a managed cluster.
        api_instance.managed_clusters_reset_service_principal_profile(api_version, subscription_id, resource_group_name, resource_name, parameters)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_reset_service_principal_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 
 **parameters** | [**ManagedClusterServicePrincipalProfile**](ManagedClusterServicePrincipalProfile.md)| Parameters supplied to the Reset Service Principal Profile operation for a Managed Cluster. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_clusters_update_tags**
> ManagedCluster managed_clusters_update_tags(api_version, subscription_id, resource_group_name, resource_name, parameters)

Updates tags on a managed cluster.

Updates a managed cluster with the specified tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_cluster import ManagedCluster
from openapi_client.models.tags_object import TagsObject
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
    api_instance = openapi_client.ManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the managed cluster resource.
    parameters = openapi_client.TagsObject() # TagsObject | Parameters supplied to the Update Managed Cluster Tags operation.

    try:
        # Updates tags on a managed cluster.
        api_response = api_instance.managed_clusters_update_tags(api_version, subscription_id, resource_group_name, resource_name, parameters)
        print("The response of ManagedClustersApi->managed_clusters_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->managed_clusters_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the managed cluster resource. | 
 **parameters** | [**TagsObject**](TagsObject.md)| Parameters supplied to the Update Managed Cluster Tags operation. | 

### Return type

[**ManagedCluster**](ManagedCluster.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

