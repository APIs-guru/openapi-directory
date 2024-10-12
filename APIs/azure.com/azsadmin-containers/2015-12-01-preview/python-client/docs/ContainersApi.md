# openapi_client.ContainersApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containers_cancel_migration**](ContainersApi.md#containers_cancel_migration) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/operationresults/{operationId} | 
[**containers_list**](ContainersApi.md#containers_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/{shareName}/containers | 
[**containers_list_destination_shares**](ContainersApi.md#containers_list_destination_shares) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/{shareName}/destinationshares | 
[**containers_migrate**](ContainersApi.md#containers_migrate) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/{shareName}/migrate | 
[**containers_migration_status**](ContainersApi.md#containers_migration_status) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/operationresults/{operationId} | 


# **containers_cancel_migration**
> MigrationResult containers_cancel_migration(subscription_id, resource_group_name, farm_id, operation_id, api_version)



Cancel a container migration job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_result import MigrationResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    operation_id = 'operation_id_example' # str | Operation Id.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.containers_cancel_migration(subscription_id, resource_group_name, farm_id, operation_id, api_version)
        print("The response of ContainersApi->containers_cancel_migration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_cancel_migration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **operation_id** | **str**| Operation Id. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**MigrationResult**](MigrationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Operation has been accepted and processed |  -  |
**202** | ACCEPTED - Operation has been accepted will be processed asynchronously |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **containers_list**
> List[Container] containers_list(subscription_id, resource_group_name, farm_id, share_name, api_version, intent, max_count=max_count, start_index=start_index)



Returns the list of containers which can be migrated in the specified share.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container import Container
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    share_name = 'share_name_example' # str | Share name.
    api_version = 'api_version_example' # str | REST Api Version.
    intent = 'intent_example' # str | The container migration intent.
    max_count = 56 # int | The maximum number of containers. (optional)
    start_index = 56 # int | The starting index the resource provider uses. (optional)

    try:
        api_response = api_instance.containers_list(subscription_id, resource_group_name, farm_id, share_name, api_version, intent, max_count=max_count, start_index=start_index)
        print("The response of ContainersApi->containers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **share_name** | **str**| Share name. | 
 **api_version** | **str**| REST Api Version. | 
 **intent** | **str**| The container migration intent. | 
 **max_count** | **int**| The maximum number of containers. | [optional] 
 **start_index** | **int**| The starting index the resource provider uses. | [optional] 

### Return type

[**List[Container]**](Container.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of containers has been returned. |  -  |
**404** | NOT FOUND -- The specified farm or share was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **containers_list_destination_shares**
> List[ContainersListDestinationShares200ResponseInner] containers_list_destination_shares(subscription_id, resource_group_name, farm_id, share_name, api_version)



Returns a list of destination shares that the system considers as best candidates for migration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.containers_list_destination_shares200_response_inner import ContainersListDestinationShares200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    share_name = 'share_name_example' # str | Share name.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.containers_list_destination_shares(subscription_id, resource_group_name, farm_id, share_name, api_version)
        print("The response of ContainersApi->containers_list_destination_shares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_list_destination_shares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **share_name** | **str**| Share name. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**List[ContainersListDestinationShares200ResponseInner]**](ContainersListDestinationShares200ResponseInner.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of shares has been returned. |  -  |
**404** | NOT FOUND -- The specified farm or share was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **containers_migrate**
> MigrationResult containers_migrate(subscription_id, resource_group_name, farm_id, share_name, api_version, migration_parameters)



Starts a container migration job to migrate containers to the specified destination share.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_parameters import MigrationParameters
from openapi_client.models.migration_result import MigrationResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    share_name = 'share_name_example' # str | Share name.
    api_version = 'api_version_example' # str | REST Api Version.
    migration_parameters = openapi_client.MigrationParameters() # MigrationParameters | The parameters of container migration job.

    try:
        api_response = api_instance.containers_migrate(subscription_id, resource_group_name, farm_id, share_name, api_version, migration_parameters)
        print("The response of ContainersApi->containers_migrate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_migrate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **share_name** | **str**| Share name. | 
 **api_version** | **str**| REST Api Version. | 
 **migration_parameters** | [**MigrationParameters**](MigrationParameters.md)| The parameters of container migration job. | 

### Return type

[**MigrationResult**](MigrationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Container has been migrated |  -  |
**202** | ACCEPTED -- Operation accepted and will be performed asynchronously |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **containers_migration_status**
> MigrationResult containers_migration_status(subscription_id, resource_group_name, farm_id, operation_id, api_version)



Returns the status of a container migration job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_result import MigrationResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    operation_id = 'operation_id_example' # str | Operation Id.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.containers_migration_status(subscription_id, resource_group_name, farm_id, operation_id, api_version)
        print("The response of ContainersApi->containers_migration_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_migration_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **operation_id** | **str**| Operation Id. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**MigrationResult**](MigrationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Operation has been accepted and processed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

