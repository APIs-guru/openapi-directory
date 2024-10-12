# openapi_client.ExternalSecuritySolutionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**external_security_solutions_get**](ExternalSecuritySolutionsApi.md#external_security_solutions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/ExternalSecuritySolutions/{externalSecuritySolutionsName} | 
[**external_security_solutions_list**](ExternalSecuritySolutionsApi.md#external_security_solutions_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/externalSecuritySolutions | 
[**external_security_solutions_list_by_home_region**](ExternalSecuritySolutionsApi.md#external_security_solutions_list_by_home_region) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/ExternalSecuritySolutions | 


# **external_security_solutions_get**
> ExternalSecuritySolution external_security_solutions_get(subscription_id, resource_group_name, asc_location, external_security_solutions_name, api_version)



Gets a specific external Security Solution.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.external_security_solution import ExternalSecuritySolution
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
    api_instance = openapi_client.ExternalSecuritySolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    external_security_solutions_name = 'external_security_solutions_name_example' # str | Name of an external security solution.
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.external_security_solutions_get(subscription_id, resource_group_name, asc_location, external_security_solutions_name, api_version)
        print("The response of ExternalSecuritySolutionsApi->external_security_solutions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalSecuritySolutionsApi->external_security_solutions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **external_security_solutions_name** | **str**| Name of an external security solution. | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**ExternalSecuritySolution**](ExternalSecuritySolution.md)

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

# **external_security_solutions_list**
> ExternalSecuritySolutionList external_security_solutions_list(api_version, subscription_id)



Gets a list of external security solutions for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.external_security_solution_list import ExternalSecuritySolutionList
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
    api_instance = openapi_client.ExternalSecuritySolutionsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_response = api_instance.external_security_solutions_list(api_version, subscription_id)
        print("The response of ExternalSecuritySolutionsApi->external_security_solutions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalSecuritySolutionsApi->external_security_solutions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

[**ExternalSecuritySolutionList**](ExternalSecuritySolutionList.md)

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

# **external_security_solutions_list_by_home_region**
> ExternalSecuritySolutionList external_security_solutions_list_by_home_region(subscription_id, asc_location, api_version)



Gets a list of external Security Solutions for the subscription and location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.external_security_solution_list import ExternalSecuritySolutionList
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
    api_instance = openapi_client.ExternalSecuritySolutionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.external_security_solutions_list_by_home_region(subscription_id, asc_location, api_version)
        print("The response of ExternalSecuritySolutionsApi->external_security_solutions_list_by_home_region:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalSecuritySolutionsApi->external_security_solutions_list_by_home_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**ExternalSecuritySolutionList**](ExternalSecuritySolutionList.md)

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

