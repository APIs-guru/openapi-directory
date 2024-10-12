# openapi_client.MachinesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**machines_enumerate_machines**](MachinesApi.md#machines_enumerate_machines) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/machines | Gets a list of machines in the migrate project.
[**machines_get_machine**](MachinesApi.md#machines_get_machine) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/machines/{machineName} | Gets a machine in the migrate project.


# **machines_enumerate_machines**
> MachineCollection machines_enumerate_machines(subscription_id, resource_group_name, migrate_project_name, api_version, continuation_token=continuation_token, page_size=page_size)

Gets a list of machines in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_collection import MachineCollection
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
    api_instance = openapi_client.MachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    continuation_token = 'continuation_token_example' # str | The continuation token. (optional)
    page_size = 56 # int | The number of items to be returned in a single page. This value is honored only if it is less than the 100. (optional)

    try:
        # Gets a list of machines in the migrate project.
        api_response = api_instance.machines_enumerate_machines(subscription_id, resource_group_name, migrate_project_name, api_version, continuation_token=continuation_token, page_size=page_size)
        print("The response of MachinesApi->machines_enumerate_machines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachinesApi->machines_enumerate_machines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **continuation_token** | **str**| The continuation token. | [optional] 
 **page_size** | **int**| The number of items to be returned in a single page. This value is honored only if it is less than the 100. | [optional] 

### Return type

[**MachineCollection**](MachineCollection.md)

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

# **machines_get_machine**
> Machine machines_get_machine(subscription_id, resource_group_name, migrate_project_name, api_version, machine_name)

Gets a machine in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine import Machine
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
    api_instance = openapi_client.MachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    machine_name = 'machine_name_example' # str | Unique name of a machine in Azure migration hub.

    try:
        # Gets a machine in the migrate project.
        api_response = api_instance.machines_get_machine(subscription_id, resource_group_name, migrate_project_name, api_version, machine_name)
        print("The response of MachinesApi->machines_get_machine:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachinesApi->machines_get_machine: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **machine_name** | **str**| Unique name of a machine in Azure migration hub. | 

### Return type

[**Machine**](Machine.md)

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

