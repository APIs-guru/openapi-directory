# openapi_client.SolutionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solutions_create_or_update**](SolutionApi.md#solutions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName} | Create/Update Solution.
[**solutions_delete**](SolutionApi.md#solutions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName} | Deletes the solution
[**solutions_get**](SolutionApi.md#solutions_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName} | Retrieve solution.
[**solutions_list_by_resource_group**](SolutionApi.md#solutions_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions | Retrieves the solution list for the subscription
[**solutions_list_by_subscription**](SolutionApi.md#solutions_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.OperationsManagement/solutions | Retrieves the solution list for the subscription
[**solutions_update**](SolutionApi.md#solutions_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName} | Patch a Solution.


# **solutions_create_or_update**
> Solution solutions_create_or_update(subscription_id, resource_group_name, api_version, solution_name, parameters)

Create/Update Solution.

Creates or updates the Solution.

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
    api_instance = openapi_client.SolutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    solution_name = 'solution_name_example' # str | User Solution Name.
    parameters = openapi_client.Solution() # Solution | The parameters required to create OMS Solution.

    try:
        # Create/Update Solution.
        api_response = api_instance.solutions_create_or_update(subscription_id, resource_group_name, api_version, solution_name, parameters)
        print("The response of SolutionApi->solutions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionApi->solutions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **solution_name** | **str**| User Solution Name. | 
 **parameters** | [**Solution**](Solution.md)| The parameters required to create OMS Solution. | 

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
**201** | Created response definition. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **solutions_delete**
> solutions_delete(subscription_id, resource_group_name, solution_name, api_version)

Deletes the solution

Deletes the solution in the subscription.

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
    api_instance = openapi_client.SolutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    solution_name = 'solution_name_example' # str | User Solution Name.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        # Deletes the solution
        api_instance.solutions_delete(subscription_id, resource_group_name, solution_name, api_version)
    except Exception as e:
        print("Exception when calling SolutionApi->solutions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **solution_name** | **str**| User Solution Name. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **solutions_get**
> Solution solutions_get(subscription_id, resource_group_name, solution_name, api_version)

Retrieve solution.

Retrieves the user solution.

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
    api_instance = openapi_client.SolutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    solution_name = 'solution_name_example' # str | User Solution Name.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        # Retrieve solution.
        api_response = api_instance.solutions_get(subscription_id, resource_group_name, solution_name, api_version)
        print("The response of SolutionApi->solutions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionApi->solutions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **solution_name** | **str**| User Solution Name. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | OK response definition. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **solutions_list_by_resource_group**
> SolutionPropertiesList solutions_list_by_resource_group(subscription_id, resource_group_name, api_version)

Retrieves the solution list for the subscription

Retrieves the solution list. It will retrieve both first party and third party solutions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.solution_properties_list import SolutionPropertiesList
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
    api_instance = openapi_client.SolutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        # Retrieves the solution list for the subscription
        api_response = api_instance.solutions_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of SolutionApi->solutions_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionApi->solutions_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**SolutionPropertiesList**](SolutionPropertiesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **solutions_list_by_subscription**
> SolutionPropertiesList solutions_list_by_subscription(subscription_id, api_version)

Retrieves the solution list for the subscription

Retrieves the solution list. It will retrieve both first party and third party solutions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.solution_properties_list import SolutionPropertiesList
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
    api_instance = openapi_client.SolutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        # Retrieves the solution list for the subscription
        api_response = api_instance.solutions_list_by_subscription(subscription_id, api_version)
        print("The response of SolutionApi->solutions_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionApi->solutions_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**SolutionPropertiesList**](SolutionPropertiesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **solutions_update**
> Solution solutions_update(subscription_id, resource_group_name, api_version, solution_name, parameters)

Patch a Solution.

Patch a Solution. Only updating tags supported.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.solution import Solution
from openapi_client.models.solution_patch import SolutionPatch
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
    api_instance = openapi_client.SolutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    solution_name = 'solution_name_example' # str | User Solution Name.
    parameters = openapi_client.SolutionPatch() # SolutionPatch | The parameters required to patch a Solution.

    try:
        # Patch a Solution.
        api_response = api_instance.solutions_update(subscription_id, resource_group_name, api_version, solution_name, parameters)
        print("The response of SolutionApi->solutions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SolutionApi->solutions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **solution_name** | **str**| User Solution Name. | 
 **parameters** | [**SolutionPatch**](SolutionPatch.md)| The parameters required to patch a Solution. | 

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
**200** | Patch succeeded. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

