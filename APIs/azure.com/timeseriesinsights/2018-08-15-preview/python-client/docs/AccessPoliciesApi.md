# openapi_client.AccessPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_policies_create_or_update**](AccessPoliciesApi.md#access_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName} | 
[**access_policies_delete**](AccessPoliciesApi.md#access_policies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName} | 
[**access_policies_get**](AccessPoliciesApi.md#access_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName} | 
[**access_policies_list_by_environment**](AccessPoliciesApi.md#access_policies_list_by_environment) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies | 
[**access_policies_update**](AccessPoliciesApi.md#access_policies_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName} | 


# **access_policies_create_or_update**
> AccessPolicyResource access_policies_create_or_update(subscription_id, resource_group_name, environment_name, access_policy_name, api_version, parameters)



Create or update an access policy in the specified environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_policy_create_or_update_parameters import AccessPolicyCreateOrUpdateParameters
from openapi_client.models.access_policy_resource import AccessPolicyResource
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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    access_policy_name = 'access_policy_name_example' # str | Name of the access policy.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.AccessPolicyCreateOrUpdateParameters() # AccessPolicyCreateOrUpdateParameters | Parameters for creating an access policy.

    try:
        api_response = api_instance.access_policies_create_or_update(subscription_id, resource_group_name, environment_name, access_policy_name, api_version, parameters)
        print("The response of AccessPoliciesApi->access_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->access_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **access_policy_name** | **str**| Name of the access policy. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**AccessPolicyCreateOrUpdateParameters**](AccessPolicyCreateOrUpdateParameters.md)| Parameters for creating an access policy. | 

### Return type

[**AccessPolicyResource**](AccessPolicyResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The existing access policy definition was successfully updated. |  -  |
**201** | The access policy was successfully created. |  -  |
**0** | HTTP 400 (Bad Request): The given access policy request body is invalid; See the error code and message in the response for details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **access_policies_delete**
> access_policies_delete(subscription_id, resource_group_name, environment_name, access_policy_name, api_version)



Deletes the access policy with the specified name in the specified subscription, resource group, and environment

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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    access_policy_name = 'access_policy_name_example' # str | The name of the Time Series Insights access policy associated with the specified environment.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.access_policies_delete(subscription_id, resource_group_name, environment_name, access_policy_name, api_version)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->access_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **access_policy_name** | **str**| The name of the Time Series Insights access policy associated with the specified environment. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

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
**200** | The access policy was successfully deleted. |  -  |
**204** | The access policy was successfully deleted. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, environment, or access policy could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **access_policies_get**
> AccessPolicyResource access_policies_get(subscription_id, resource_group_name, environment_name, access_policy_name, api_version)



Gets the access policy with the specified name in the specified environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_policy_resource import AccessPolicyResource
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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    access_policy_name = 'access_policy_name_example' # str | The name of the Time Series Insights access policy associated with the specified environment.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.access_policies_get(subscription_id, resource_group_name, environment_name, access_policy_name, api_version)
        print("The response of AccessPoliciesApi->access_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->access_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **access_policy_name** | **str**| The name of the Time Series Insights access policy associated with the specified environment. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**AccessPolicyResource**](AccessPolicyResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The access policy definition was successfully retrieved and is in the response. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, environment, or access policy could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **access_policies_list_by_environment**
> AccessPolicyListResponse access_policies_list_by_environment(subscription_id, resource_group_name, environment_name, api_version)



Lists all the available access policies associated with the environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_policy_list_response import AccessPolicyListResponse
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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.access_policies_list_by_environment(subscription_id, resource_group_name, environment_name, api_version)
        print("The response of AccessPoliciesApi->access_policies_list_by_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->access_policies_list_by_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**AccessPolicyListResponse**](AccessPolicyListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | access policies returned successfully. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, or environment could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **access_policies_update**
> AccessPolicyResource access_policies_update(subscription_id, resource_group_name, environment_name, access_policy_name, api_version, access_policy_update_parameters)



Updates the access policy with the specified name in the specified subscription, resource group, and environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_policy_resource import AccessPolicyResource
from openapi_client.models.access_policy_update_parameters import AccessPolicyUpdateParameters
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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    access_policy_name = 'access_policy_name_example' # str | The name of the Time Series Insights access policy associated with the specified environment.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    access_policy_update_parameters = openapi_client.AccessPolicyUpdateParameters() # AccessPolicyUpdateParameters | Request object that contains the updated information for the access policy.

    try:
        api_response = api_instance.access_policies_update(subscription_id, resource_group_name, environment_name, access_policy_name, api_version, access_policy_update_parameters)
        print("The response of AccessPoliciesApi->access_policies_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->access_policies_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **access_policy_name** | **str**| The name of the Time Series Insights access policy associated with the specified environment. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **access_policy_update_parameters** | [**AccessPolicyUpdateParameters**](AccessPolicyUpdateParameters.md)| Request object that contains the updated information for the access policy. | 

### Return type

[**AccessPolicyResource**](AccessPolicyResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The access policy definition was successfully updated and is in the response. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, environment, or access policy could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

