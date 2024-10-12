# openapi_client.AttachedDatabaseConfigurationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attached_database_configurations_create_or_update**](AttachedDatabaseConfigurationsApi.md#attached_database_configurations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName} | 
[**attached_database_configurations_delete**](AttachedDatabaseConfigurationsApi.md#attached_database_configurations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName} | 
[**attached_database_configurations_get**](AttachedDatabaseConfigurationsApi.md#attached_database_configurations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName} | 
[**attached_database_configurations_list_by_cluster**](AttachedDatabaseConfigurationsApi.md#attached_database_configurations_list_by_cluster) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations | 


# **attached_database_configurations_create_or_update**
> AttachedDatabaseConfiguration attached_database_configurations_create_or_update(resource_group_name, cluster_name, attached_database_configuration_name, subscription_id, api_version, parameters)



Creates or updates an attached database configuration.

### Example


```python
import openapi_client
from openapi_client.models.attached_database_configuration import AttachedDatabaseConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttachedDatabaseConfigurationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    attached_database_configuration_name = 'attached_database_configuration_name_example' # str | The name of the attached database configuration.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.AttachedDatabaseConfiguration() # AttachedDatabaseConfiguration | The database parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.attached_database_configurations_create_or_update(resource_group_name, cluster_name, attached_database_configuration_name, subscription_id, api_version, parameters)
        print("The response of AttachedDatabaseConfigurationsApi->attached_database_configurations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttachedDatabaseConfigurationsApi->attached_database_configurations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **attached_database_configuration_name** | **str**| The name of the attached database configuration. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**AttachedDatabaseConfiguration**](AttachedDatabaseConfiguration.md)| The database parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**AttachedDatabaseConfiguration**](AttachedDatabaseConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the database. |  -  |
**201** | Successfully created the database. |  -  |
**202** | Accepted the create database request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attached_database_configurations_delete**
> attached_database_configurations_delete(resource_group_name, cluster_name, attached_database_configuration_name, subscription_id, api_version)



Deletes the attached database configuration with the given name.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttachedDatabaseConfigurationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    attached_database_configuration_name = 'attached_database_configuration_name_example' # str | The name of the attached database configuration.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_instance.attached_database_configurations_delete(resource_group_name, cluster_name, attached_database_configuration_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AttachedDatabaseConfigurationsApi->attached_database_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **attached_database_configuration_name** | **str**| The name of the attached database configuration. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the database. |  -  |
**202** | Accepted. |  -  |
**204** | The specified database does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attached_database_configurations_get**
> AttachedDatabaseConfiguration attached_database_configurations_get(resource_group_name, cluster_name, attached_database_configuration_name, subscription_id, api_version)



Returns an attached database configuration.

### Example


```python
import openapi_client
from openapi_client.models.attached_database_configuration import AttachedDatabaseConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttachedDatabaseConfigurationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    attached_database_configuration_name = 'attached_database_configuration_name_example' # str | The name of the attached database configuration.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.attached_database_configurations_get(resource_group_name, cluster_name, attached_database_configuration_name, subscription_id, api_version)
        print("The response of AttachedDatabaseConfigurationsApi->attached_database_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttachedDatabaseConfigurationsApi->attached_database_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **attached_database_configuration_name** | **str**| The name of the attached database configuration. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**AttachedDatabaseConfiguration**](AttachedDatabaseConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified attached database configuration. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attached_database_configurations_list_by_cluster**
> AttachedDatabaseConfigurationListResult attached_database_configurations_list_by_cluster(resource_group_name, cluster_name, subscription_id, api_version)



Returns the list of attached database configurations of the given Kusto cluster.

### Example


```python
import openapi_client
from openapi_client.models.attached_database_configuration_list_result import AttachedDatabaseConfigurationListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttachedDatabaseConfigurationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.attached_database_configurations_list_by_cluster(resource_group_name, cluster_name, subscription_id, api_version)
        print("The response of AttachedDatabaseConfigurationsApi->attached_database_configurations_list_by_cluster:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttachedDatabaseConfigurationsApi->attached_database_configurations_list_by_cluster: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**AttachedDatabaseConfigurationListResult**](AttachedDatabaseConfigurationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of attached database configurations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

