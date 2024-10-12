# openapi_client.DisasterRecoveryConfigurationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disaster_recovery_configurations_create_or_update**](DisasterRecoveryConfigurationsApi.md#disaster_recovery_configurations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName} | 
[**disaster_recovery_configurations_delete**](DisasterRecoveryConfigurationsApi.md#disaster_recovery_configurations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName} | 
[**disaster_recovery_configurations_failover**](DisasterRecoveryConfigurationsApi.md#disaster_recovery_configurations_failover) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}/failover | 
[**disaster_recovery_configurations_failover_allow_data_loss**](DisasterRecoveryConfigurationsApi.md#disaster_recovery_configurations_failover_allow_data_loss) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}/forceFailoverAllowDataLoss | 
[**disaster_recovery_configurations_get**](DisasterRecoveryConfigurationsApi.md#disaster_recovery_configurations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName} | 
[**disaster_recovery_configurations_list**](DisasterRecoveryConfigurationsApi.md#disaster_recovery_configurations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration | 


# **disaster_recovery_configurations_create_or_update**
> DisasterRecoveryConfiguration disaster_recovery_configurations_create_or_update(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)



Creates or updates a disaster recovery configuration.

### Example


```python
import openapi_client
from openapi_client.models.disaster_recovery_configuration import DisasterRecoveryConfiguration
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
    api_instance = openapi_client.DisasterRecoveryConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    disaster_recovery_configuration_name = 'disaster_recovery_configuration_name_example' # str | The name of the disaster recovery configuration to be created/updated.

    try:
        api_response = api_instance.disaster_recovery_configurations_create_or_update(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)
        print("The response of DisasterRecoveryConfigurationsApi->disaster_recovery_configurations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigurationsApi->disaster_recovery_configurations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **disaster_recovery_configuration_name** | **str**| The name of the disaster recovery configuration to be created/updated. | 

### Return type

[**DisasterRecoveryConfiguration**](DisasterRecoveryConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configurations_delete**
> disaster_recovery_configurations_delete(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)



Deletes a disaster recovery configuration.

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
    api_instance = openapi_client.DisasterRecoveryConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    disaster_recovery_configuration_name = 'disaster_recovery_configuration_name_example' # str | The name of the disaster recovery configuration to be deleted.

    try:
        api_instance.disaster_recovery_configurations_delete(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigurationsApi->disaster_recovery_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **disaster_recovery_configuration_name** | **str**| The name of the disaster recovery configuration to be deleted. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configurations_failover**
> disaster_recovery_configurations_failover(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)



Fails over from the current primary server to this server.

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
    api_instance = openapi_client.DisasterRecoveryConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    disaster_recovery_configuration_name = 'disaster_recovery_configuration_name_example' # str | The name of the disaster recovery configuration to failover.

    try:
        api_instance.disaster_recovery_configurations_failover(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigurationsApi->disaster_recovery_configurations_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **disaster_recovery_configuration_name** | **str**| The name of the disaster recovery configuration to failover. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configurations_failover_allow_data_loss**
> disaster_recovery_configurations_failover_allow_data_loss(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)



Fails over from the current primary server to this server. This operation might result in data loss.

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
    api_instance = openapi_client.DisasterRecoveryConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    disaster_recovery_configuration_name = 'disaster_recovery_configuration_name_example' # str | The name of the disaster recovery configuration to failover forcefully.

    try:
        api_instance.disaster_recovery_configurations_failover_allow_data_loss(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigurationsApi->disaster_recovery_configurations_failover_allow_data_loss: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **disaster_recovery_configuration_name** | **str**| The name of the disaster recovery configuration to failover forcefully. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configurations_get**
> DisasterRecoveryConfiguration disaster_recovery_configurations_get(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)



Gets a disaster recovery configuration.

### Example


```python
import openapi_client
from openapi_client.models.disaster_recovery_configuration import DisasterRecoveryConfiguration
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
    api_instance = openapi_client.DisasterRecoveryConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    disaster_recovery_configuration_name = 'disaster_recovery_configuration_name_example' # str | The name of the disaster recovery configuration.

    try:
        api_response = api_instance.disaster_recovery_configurations_get(api_version, subscription_id, resource_group_name, server_name, disaster_recovery_configuration_name)
        print("The response of DisasterRecoveryConfigurationsApi->disaster_recovery_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigurationsApi->disaster_recovery_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **disaster_recovery_configuration_name** | **str**| The name of the disaster recovery configuration. | 

### Return type

[**DisasterRecoveryConfiguration**](DisasterRecoveryConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configurations_list**
> DisasterRecoveryConfigurationListResult disaster_recovery_configurations_list(api_version, subscription_id, resource_group_name, server_name)



Lists a server's disaster recovery configuration.

### Example


```python
import openapi_client
from openapi_client.models.disaster_recovery_configuration_list_result import DisasterRecoveryConfigurationListResult
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
    api_instance = openapi_client.DisasterRecoveryConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.disaster_recovery_configurations_list(api_version, subscription_id, resource_group_name, server_name)
        print("The response of DisasterRecoveryConfigurationsApi->disaster_recovery_configurations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigurationsApi->disaster_recovery_configurations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**DisasterRecoveryConfigurationListResult**](DisasterRecoveryConfigurationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

