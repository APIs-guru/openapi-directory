# openapi_client.ReferenceDataSetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reference_data_sets_create_or_update**](ReferenceDataSetsApi.md#reference_data_sets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName} | 
[**reference_data_sets_delete**](ReferenceDataSetsApi.md#reference_data_sets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName} | 
[**reference_data_sets_get**](ReferenceDataSetsApi.md#reference_data_sets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName} | 
[**reference_data_sets_list_by_environment**](ReferenceDataSetsApi.md#reference_data_sets_list_by_environment) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets | 
[**reference_data_sets_update**](ReferenceDataSetsApi.md#reference_data_sets_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName} | 


# **reference_data_sets_create_or_update**
> ReferenceDataSetResource reference_data_sets_create_or_update(subscription_id, resource_group_name, environment_name, reference_data_set_name, api_version, parameters)



Create or update a reference data set in the specified environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reference_data_set_create_or_update_parameters import ReferenceDataSetCreateOrUpdateParameters
from openapi_client.models.reference_data_set_resource import ReferenceDataSetResource
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
    api_instance = openapi_client.ReferenceDataSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    reference_data_set_name = 'reference_data_set_name_example' # str | Name of the reference data set.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.
    parameters = openapi_client.ReferenceDataSetCreateOrUpdateParameters() # ReferenceDataSetCreateOrUpdateParameters | Parameters for creating a reference data set.

    try:
        api_response = api_instance.reference_data_sets_create_or_update(subscription_id, resource_group_name, environment_name, reference_data_set_name, api_version, parameters)
        print("The response of ReferenceDataSetsApi->reference_data_sets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataSetsApi->reference_data_sets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **reference_data_set_name** | **str**| Name of the reference data set. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 
 **parameters** | [**ReferenceDataSetCreateOrUpdateParameters**](ReferenceDataSetCreateOrUpdateParameters.md)| Parameters for creating a reference data set. | 

### Return type

[**ReferenceDataSetResource**](ReferenceDataSetResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The existing reference data set definition was successfully updated. |  -  |
**201** | The reference data set was successfully created. |  -  |
**0** | HTTP 400 (Bad Request): The given reference data set request body is invalid; See the error code and message in the response for details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reference_data_sets_delete**
> reference_data_sets_delete(subscription_id, resource_group_name, environment_name, reference_data_set_name, api_version)



Deletes the reference data set with the specified name in the specified subscription, resource group, and environment

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
    api_instance = openapi_client.ReferenceDataSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    reference_data_set_name = 'reference_data_set_name_example' # str | The name of the Time Series Insights reference data set associated with the specified environment.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.

    try:
        api_instance.reference_data_sets_delete(subscription_id, resource_group_name, environment_name, reference_data_set_name, api_version)
    except Exception as e:
        print("Exception when calling ReferenceDataSetsApi->reference_data_sets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **reference_data_set_name** | **str**| The name of the Time Series Insights reference data set associated with the specified environment. | 
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
**200** | The reference data set was successfully deleted. |  -  |
**204** | The reference data set was successfully deleted. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, environment, or reference data set could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reference_data_sets_get**
> ReferenceDataSetResource reference_data_sets_get(subscription_id, resource_group_name, environment_name, reference_data_set_name, api_version)



Gets the reference data set with the specified name in the specified environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reference_data_set_resource import ReferenceDataSetResource
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
    api_instance = openapi_client.ReferenceDataSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    reference_data_set_name = 'reference_data_set_name_example' # str | The name of the Time Series Insights reference data set associated with the specified environment.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.

    try:
        api_response = api_instance.reference_data_sets_get(subscription_id, resource_group_name, environment_name, reference_data_set_name, api_version)
        print("The response of ReferenceDataSetsApi->reference_data_sets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataSetsApi->reference_data_sets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **reference_data_set_name** | **str**| The name of the Time Series Insights reference data set associated with the specified environment. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 

### Return type

[**ReferenceDataSetResource**](ReferenceDataSetResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The reference data set definition was successfully retrieved and is in the response. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, environment, or reference data set could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reference_data_sets_list_by_environment**
> ReferenceDataSetListResponse reference_data_sets_list_by_environment(subscription_id, resource_group_name, environment_name, api_version)



Lists all the available reference data sets associated with the subscription and within the specified resource group and environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reference_data_set_list_response import ReferenceDataSetListResponse
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
    api_instance = openapi_client.ReferenceDataSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.

    try:
        api_response = api_instance.reference_data_sets_list_by_environment(subscription_id, resource_group_name, environment_name, api_version)
        print("The response of ReferenceDataSetsApi->reference_data_sets_list_by_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataSetsApi->reference_data_sets_list_by_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 

### Return type

[**ReferenceDataSetListResponse**](ReferenceDataSetListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reference data sets returned successfully. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, or environment could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reference_data_sets_update**
> ReferenceDataSetResource reference_data_sets_update(subscription_id, resource_group_name, environment_name, reference_data_set_name, api_version, reference_data_set_update_parameters)



Updates the reference data set with the specified name in the specified subscription, resource group, and environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reference_data_set_resource import ReferenceDataSetResource
from openapi_client.models.reference_data_set_update_parameters import ReferenceDataSetUpdateParameters
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
    api_instance = openapi_client.ReferenceDataSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    reference_data_set_name = 'reference_data_set_name_example' # str | The name of the Time Series Insights reference data set associated with the specified environment.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-02-28-preview.
    reference_data_set_update_parameters = openapi_client.ReferenceDataSetUpdateParameters() # ReferenceDataSetUpdateParameters | Request object that contains the updated information for the reference data set.

    try:
        api_response = api_instance.reference_data_sets_update(subscription_id, resource_group_name, environment_name, reference_data_set_name, api_version, reference_data_set_update_parameters)
        print("The response of ReferenceDataSetsApi->reference_data_sets_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceDataSetsApi->reference_data_sets_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **reference_data_set_name** | **str**| The name of the Time Series Insights reference data set associated with the specified environment. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-02-28-preview. | 
 **reference_data_set_update_parameters** | [**ReferenceDataSetUpdateParameters**](ReferenceDataSetUpdateParameters.md)| Request object that contains the updated information for the reference data set. | 

### Return type

[**ReferenceDataSetResource**](ReferenceDataSetResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The reference data set definition was successfully updated and is in the response. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, environment, or reference data set could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

