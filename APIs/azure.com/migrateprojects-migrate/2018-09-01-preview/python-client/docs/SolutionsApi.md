# openapi_client.SolutionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solutions_cleanup_solution_data**](SolutionsApi.md#solutions_cleanup_solution_data) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName}/cleanupData | Cleanup the solution data in the migrate project.
[**solutions_delete_solution**](SolutionsApi.md#solutions_delete_solution) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName} | Delete the solution
[**solutions_enumerate_solutions**](SolutionsApi.md#solutions_enumerate_solutions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions | Gets the list of solutions in the migrate project.
[**solutions_get_config**](SolutionsApi.md#solutions_get_config) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName}/getConfig | Gets the config for the solution in the migrate project.
[**solutions_get_solution**](SolutionsApi.md#solutions_get_solution) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName} | Gets a solution in the migrate project.
[**solutions_patch_solution**](SolutionsApi.md#solutions_patch_solution) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName} | Update solution.
[**solutions_put_solution**](SolutionsApi.md#solutions_put_solution) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName} | Creates a solution in the migrate project.


# **solutions_cleanup_solution_data**
> solutions_cleanup_solution_data(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version)

Cleanup the solution data in the migrate project.

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
    api_instance = openapi_client.SolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    solution_name = 'solution_name_example' # str | Unique name of a migration solution within a migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.

    try:
        # Cleanup the solution data in the migrate project.
        api_instance.solutions_cleanup_solution_data(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version)
    except Exception as e:
        print("Exception when calling SolutionsApi->solutions_cleanup_solution_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **solution_name** | **str**| Unique name of a migration solution within a migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **solutions_delete_solution**
> solutions_delete_solution(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version, accept_language=accept_language)

Delete the solution

Delete the solution. Deleting non-existent project is a no-operation.

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
    api_instance = openapi_client.SolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    solution_name = 'solution_name_example' # str | Unique name of a migration solution within a migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Delete the solution
        api_instance.solutions_delete_solution(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version, accept_language=accept_language)
    except Exception as e:
        print("Exception when calling SolutionsApi->solutions_delete_solution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **solution_name** | **str**| Unique name of a migration solution within a migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **solutions_enumerate_solutions**
> SolutionsCollection solutions_enumerate_solutions(subscription_id, resource_group_name, migrate_project_name, api_version)

Gets the list of solutions in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.solutions_collection import SolutionsCollection
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
    api_instance = openapi_client.SolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.

    try:
        # Gets the list of solutions in the migrate project.
        api_response = api_instance.solutions_enumerate_solutions(subscription_id, resource_group_name, migrate_project_name, api_version)
        print("The response of SolutionsApi->solutions_enumerate_solutions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionsApi->solutions_enumerate_solutions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 

### Return type

[**SolutionsCollection**](SolutionsCollection.md)

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

# **solutions_get_config**
> SolutionConfig solutions_get_config(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version)

Gets the config for the solution in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.solution_config import SolutionConfig
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
    api_instance = openapi_client.SolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    solution_name = 'solution_name_example' # str | Unique name of a migration solution within a migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.

    try:
        # Gets the config for the solution in the migrate project.
        api_response = api_instance.solutions_get_config(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version)
        print("The response of SolutionsApi->solutions_get_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionsApi->solutions_get_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **solution_name** | **str**| Unique name of a migration solution within a migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 

### Return type

[**SolutionConfig**](SolutionConfig.md)

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

# **solutions_get_solution**
> Solution solutions_get_solution(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version)

Gets a solution in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.solution import Solution
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
    api_instance = openapi_client.SolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    solution_name = 'solution_name_example' # str | Unique name of a migration solution within a migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.

    try:
        # Gets a solution in the migrate project.
        api_response = api_instance.solutions_get_solution(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version)
        print("The response of SolutionsApi->solutions_get_solution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionsApi->solutions_get_solution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **solution_name** | **str**| Unique name of a migration solution within a migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 

### Return type

[**Solution**](Solution.md)

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

# **solutions_patch_solution**
> Solution solutions_patch_solution(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version, solution_input)

Update solution.

Update a solution with specified name. Supports partial updates, for example only tags can be provided.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.solution import Solution
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
    api_instance = openapi_client.SolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    solution_name = 'solution_name_example' # str | Unique name of a migration solution within a migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    solution_input = openapi_client.Solution() # Solution | The input for the solution.

    try:
        # Update solution.
        api_response = api_instance.solutions_patch_solution(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version, solution_input)
        print("The response of SolutionsApi->solutions_patch_solution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionsApi->solutions_patch_solution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **solution_name** | **str**| Unique name of a migration solution within a migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **solution_input** | [**Solution**](Solution.md)| The input for the solution. | 

### Return type

[**Solution**](Solution.md)

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

# **solutions_put_solution**
> Solution solutions_put_solution(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version, solution_input)

Creates a solution in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.solution import Solution
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
    api_instance = openapi_client.SolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    solution_name = 'solution_name_example' # str | Unique name of a migration solution within a migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    solution_input = openapi_client.Solution() # Solution | The input for the solution.

    try:
        # Creates a solution in the migrate project.
        api_response = api_instance.solutions_put_solution(subscription_id, resource_group_name, migrate_project_name, solution_name, api_version, solution_input)
        print("The response of SolutionsApi->solutions_put_solution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionsApi->solutions_put_solution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **solution_name** | **str**| Unique name of a migration solution within a migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **solution_input** | [**Solution**](Solution.md)| The input for the solution. | 

### Return type

[**Solution**](Solution.md)

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

