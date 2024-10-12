# openapi_client.EnvironmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environments_create_or_update**](EnvironmentsApi.md#environments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName} | 
[**environments_delete**](EnvironmentsApi.md#environments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName} | 
[**environments_get**](EnvironmentsApi.md#environments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName} | 
[**environments_list_by_resource_group**](EnvironmentsApi.md#environments_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments | 
[**environments_list_by_subscription**](EnvironmentsApi.md#environments_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.TimeSeriesInsights/environments | 
[**environments_update**](EnvironmentsApi.md#environments_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName} | 


# **environments_create_or_update**
> EnvironmentResource environments_create_or_update(subscription_id, resource_group_name, environment_name, api_version, parameters)



Create or update an environment in the specified subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_create_or_update_parameters import EnvironmentCreateOrUpdateParameters
from openapi_client.models.environment_resource import EnvironmentResource
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | Name of the environment
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.
    parameters = openapi_client.EnvironmentCreateOrUpdateParameters() # EnvironmentCreateOrUpdateParameters | Parameters for creating an environment resource.

    try:
        api_response = api_instance.environments_create_or_update(subscription_id, resource_group_name, environment_name, api_version, parameters)
        print("The response of EnvironmentsApi->environments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| Name of the environment | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 
 **parameters** | [**EnvironmentCreateOrUpdateParameters**](EnvironmentCreateOrUpdateParameters.md)| Parameters for creating an environment resource. | 

### Return type

[**EnvironmentResource**](EnvironmentResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The existing environment definition was successfully updated. |  -  |
**201** | The environment create request was accepted. Environment provisioning is an asynchronous operation. You can periodically get your environment definition and monitor progress via the provisioningState property. |  -  |
**404** | The subscription or resource group could not be found. |  -  |
**0** | HTTP 400 (Bad Request): The given environment request body is invalid; See the error code and message in the response for details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environments_delete**
> environments_delete(subscription_id, resource_group_name, environment_name, api_version)



Deletes the environment with the specified name in the specified subscription and resource group.

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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.

    try:
        api_instance.environments_delete(subscription_id, resource_group_name, environment_name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 

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
**200** | The environment was successfully deleted. |  -  |
**204** | The environment was successfully deleted. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, or environment could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environments_get**
> EnvironmentResource environments_get(subscription_id, resource_group_name, environment_name, api_version)



Gets the environment with the specified name in the specified subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_resource import EnvironmentResource
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.

    try:
        api_response = api_instance.environments_get(subscription_id, resource_group_name, environment_name, api_version)
        print("The response of EnvironmentsApi->environments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 

### Return type

[**EnvironmentResource**](EnvironmentResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The environment definition was successfully retrieved and is in the response. If you are polling for the completion of a provisioning or scale operation, you can check its status via the provisioningState property. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, or environment could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environments_list_by_resource_group**
> EnvironmentListResponse environments_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all the available environments associated with the subscription and within the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_list_response import EnvironmentListResponse
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.

    try:
        api_response = api_instance.environments_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of EnvironmentsApi->environments_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 

### Return type

[**EnvironmentListResponse**](EnvironmentListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Environments returned successfully. |  -  |
**0** | HTTP 404 (Not Found): The subscription, or resource group could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environments_list_by_subscription**
> EnvironmentListResponse environments_list_by_subscription(subscription_id, api_version)



Lists all the available environments within a subscription, irrespective of the resource groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_list_response import EnvironmentListResponse
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.

    try:
        api_response = api_instance.environments_list_by_subscription(subscription_id, api_version)
        print("The response of EnvironmentsApi->environments_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 

### Return type

[**EnvironmentListResponse**](EnvironmentListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Environments returned successfully. |  -  |
**0** | HTTP 404 (Not Found): The subscription could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environments_update**
> EnvironmentResource environments_update(subscription_id, resource_group_name, environment_name, api_version, environment_update_parameters)



Updates the environment with the specified name in the specified subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_resource import EnvironmentResource
from openapi_client.models.environment_update_parameters import EnvironmentUpdateParameters
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.
    environment_update_parameters = openapi_client.EnvironmentUpdateParameters() # EnvironmentUpdateParameters | Request object that contains the updated information for the environment.

    try:
        api_response = api_instance.environments_update(subscription_id, resource_group_name, environment_name, api_version, environment_update_parameters)
        print("The response of EnvironmentsApi->environments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 
 **environment_update_parameters** | [**EnvironmentUpdateParameters**](EnvironmentUpdateParameters.md)| Request object that contains the updated information for the environment. | 

### Return type

[**EnvironmentResource**](EnvironmentResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The environment definition was successfully updated and is in the response. If the environment was updated synchronously, the response will include a provisioningState value of \&quot;Succeeded\&quot;. If the environment was updated asynchronously, the response will include a provisioningState value of \&quot;Updating\&quot;.  You can periodically get your environment definition and monitor progress of the update via the provisioningState property. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, or environment could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

