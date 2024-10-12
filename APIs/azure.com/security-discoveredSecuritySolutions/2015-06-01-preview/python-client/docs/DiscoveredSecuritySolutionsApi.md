# openapi_client.DiscoveredSecuritySolutionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**discovered_security_solutions_get**](DiscoveredSecuritySolutionsApi.md#discovered_security_solutions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/discoveredSecuritySolutions/{discoveredSecuritySolutionName} | 
[**discovered_security_solutions_list**](DiscoveredSecuritySolutionsApi.md#discovered_security_solutions_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/discoveredSecuritySolutions | 
[**discovered_security_solutions_list_by_home_region**](DiscoveredSecuritySolutionsApi.md#discovered_security_solutions_list_by_home_region) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/discoveredSecuritySolutions | 


# **discovered_security_solutions_get**
> DiscoveredSecuritySolution discovered_security_solutions_get(subscription_id, resource_group_name, asc_location, discovered_security_solution_name, api_version)



Gets a specific discovered Security Solution.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.discovered_security_solution import DiscoveredSecuritySolution
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
    api_instance = openapi_client.DiscoveredSecuritySolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    discovered_security_solution_name = 'discovered_security_solution_name_example' # str | Name of a discovered security solution.
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.discovered_security_solutions_get(subscription_id, resource_group_name, asc_location, discovered_security_solution_name, api_version)
        print("The response of DiscoveredSecuritySolutionsApi->discovered_security_solutions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveredSecuritySolutionsApi->discovered_security_solutions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **discovered_security_solution_name** | **str**| Name of a discovered security solution. | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**DiscoveredSecuritySolution**](DiscoveredSecuritySolution.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **discovered_security_solutions_list**
> DiscoveredSecuritySolutionList discovered_security_solutions_list(subscription_id, api_version)



Gets a list of discovered Security Solutions for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.discovered_security_solution_list import DiscoveredSecuritySolutionList
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
    api_instance = openapi_client.DiscoveredSecuritySolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.discovered_security_solutions_list(subscription_id, api_version)
        print("The response of DiscoveredSecuritySolutionsApi->discovered_security_solutions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveredSecuritySolutionsApi->discovered_security_solutions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**DiscoveredSecuritySolutionList**](DiscoveredSecuritySolutionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **discovered_security_solutions_list_by_home_region**
> DiscoveredSecuritySolutionList discovered_security_solutions_list_by_home_region(subscription_id, asc_location, api_version)



Gets a list of discovered Security Solutions for the subscription and location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.discovered_security_solution_list import DiscoveredSecuritySolutionList
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
    api_instance = openapi_client.DiscoveredSecuritySolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.discovered_security_solutions_list_by_home_region(subscription_id, asc_location, api_version)
        print("The response of DiscoveredSecuritySolutionsApi->discovered_security_solutions_list_by_home_region:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveredSecuritySolutionsApi->discovered_security_solutions_list_by_home_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**DiscoveredSecuritySolutionList**](DiscoveredSecuritySolutionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

