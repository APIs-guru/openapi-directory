# openapi_client.JobDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_definitions_create_or_update**](JobDefinitionsApi.md#job_definitions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName} | 
[**job_definitions_delete**](JobDefinitionsApi.md#job_definitions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName} | 
[**job_definitions_get**](JobDefinitionsApi.md#job_definitions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName} | 
[**job_definitions_list_by_data_manager**](JobDefinitionsApi.md#job_definitions_list_by_data_manager) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/jobDefinitions | 
[**job_definitions_list_by_data_service**](JobDefinitionsApi.md#job_definitions_list_by_data_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions | 
[**job_definitions_run**](JobDefinitionsApi.md#job_definitions_run) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/run | 


# **job_definitions_create_or_update**
> JobDefinition job_definitions_create_or_update(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version, job_definition)



Creates or updates a job definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_definition import JobDefinition
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
    api_instance = openapi_client.JobDefinitionsApi(api_client)
    data_service_name = 'data_service_name_example' # str | The data service type of the job definition.
    job_definition_name = 'job_definition_name_example' # str | The job definition name to be created or updated.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    job_definition = openapi_client.JobDefinition() # JobDefinition | Job Definition object to be created or updated.

    try:
        api_response = api_instance.job_definitions_create_or_update(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version, job_definition)
        print("The response of JobDefinitionsApi->job_definitions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobDefinitionsApi->job_definitions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The data service type of the job definition. | 
 **job_definition_name** | **str**| The job definition name to be created or updated. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **job_definition** | [**JobDefinition**](JobDefinition.md)| Job Definition object to be created or updated. | 

### Return type

[**JobDefinition**](JobDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JobDefinition object. |  -  |
**202** | Accepted request for create/update. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_definitions_delete**
> job_definitions_delete(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version)



This method deletes the given job definition.

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
    api_instance = openapi_client.JobDefinitionsApi(api_client)
    data_service_name = 'data_service_name_example' # str | The data service type of the job definition.
    job_definition_name = 'job_definition_name_example' # str | The job definition name to be deleted.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_instance.job_definitions_delete(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version)
    except Exception as e:
        print("Exception when calling JobDefinitionsApi->job_definitions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The data service type of the job definition. | 
 **job_definition_name** | **str**| The job definition name to be deleted. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

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
**202** | Accepted request for JobDefinition deletion. |  -  |
**204** | JobDefinition deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_definitions_get**
> JobDefinition job_definitions_get(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version)



This method gets job definition object by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_definition import JobDefinition
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
    api_instance = openapi_client.JobDefinitionsApi(api_client)
    data_service_name = 'data_service_name_example' # str | The data service name of the job definition
    job_definition_name = 'job_definition_name_example' # str | The job definition name that is being queried.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_response = api_instance.job_definitions_get(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version)
        print("The response of JobDefinitionsApi->job_definitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobDefinitionsApi->job_definitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The data service name of the job definition | 
 **job_definition_name** | **str**| The job definition name that is being queried. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

### Return type

[**JobDefinition**](JobDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job definition that matches the criteria. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_definitions_list_by_data_manager**
> JobDefinitionList job_definitions_list_by_data_manager(subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)



This method gets all the job definitions of the given data manager resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_definition_list import JobDefinitionList
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
    api_instance = openapi_client.JobDefinitionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    filter = 'filter_example' # str | OData Filter options (optional)

    try:
        api_response = api_instance.job_definitions_list_by_data_manager(subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)
        print("The response of JobDefinitionsApi->job_definitions_list_by_data_manager:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobDefinitionsApi->job_definitions_list_by_data_manager: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **filter** | **str**| OData Filter options | [optional] 

### Return type

[**JobDefinitionList**](JobDefinitionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of job definitions in that resource.OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_definitions_list_by_data_service**
> JobDefinitionList job_definitions_list_by_data_service(data_service_name, subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)



This method gets all the job definitions of the given data service name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_definition_list import JobDefinitionList
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
    api_instance = openapi_client.JobDefinitionsApi(api_client)
    data_service_name = 'data_service_name_example' # str | The data service type of interest.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    filter = 'filter_example' # str | OData Filter options (optional)

    try:
        api_response = api_instance.job_definitions_list_by_data_service(data_service_name, subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)
        print("The response of JobDefinitionsApi->job_definitions_list_by_data_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobDefinitionsApi->job_definitions_list_by_data_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The data service type of interest. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **filter** | **str**| OData Filter options | [optional] 

### Return type

[**JobDefinitionList**](JobDefinitionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of job definitions of the given data service type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_definitions_run**
> job_definitions_run(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version, run_parameters)



This method runs a job instance of the given job definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_parameters import RunParameters
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
    api_instance = openapi_client.JobDefinitionsApi(api_client)
    data_service_name = 'data_service_name_example' # str | The data service type of the job definition.
    job_definition_name = 'job_definition_name_example' # str | Name of the job definition.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    run_parameters = openapi_client.RunParameters() # RunParameters | Run time parameters for the job definition.

    try:
        api_instance.job_definitions_run(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version, run_parameters)
    except Exception as e:
        print("Exception when calling JobDefinitionsApi->job_definitions_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The data service type of the job definition. | 
 **job_definition_name** | **str**| Name of the job definition. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **run_parameters** | [**RunParameters**](RunParameters.md)| Run time parameters for the job definition. | 

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
**202** | Job run accepted. |  -  |
**204** | Job run started. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

