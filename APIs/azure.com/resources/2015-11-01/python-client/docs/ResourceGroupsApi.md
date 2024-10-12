# openapi_client.ResourceGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resource_groups_check_existence**](ResourceGroupsApi.md#resource_groups_check_existence) | **HEAD** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | 
[**resource_groups_create_or_update**](ResourceGroupsApi.md#resource_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | 
[**resource_groups_delete**](ResourceGroupsApi.md#resource_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | 
[**resource_groups_get**](ResourceGroupsApi.md#resource_groups_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | 
[**resource_groups_list**](ResourceGroupsApi.md#resource_groups_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups | 
[**resource_groups_list_resources**](ResourceGroupsApi.md#resource_groups_list_resources) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/resources | 
[**resource_groups_patch**](ResourceGroupsApi.md#resource_groups_patch) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | 


# **resource_groups_check_existence**
> resource_groups_check_existence(resource_group_name, api_version, subscription_id)



Checks whether resource group exists.

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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to check. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.resource_groups_check_existence(resource_group_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_check_existence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to check. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**204** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_create_or_update**
> ResourceGroup resource_groups_create_or_update(resource_group_name, api_version, subscription_id, parameters)



Create a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_group import ResourceGroup
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to be created or updated.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ResourceGroup() # ResourceGroup | Parameters supplied to the create or update resource group service operation.

    try:
        api_response = api_instance.resource_groups_create_or_update(resource_group_name, api_version, subscription_id, parameters)
        print("The response of ResourceGroupsApi->resource_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to be created or updated. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ResourceGroup**](ResourceGroup.md)| Parameters supplied to the create or update resource group service operation. | 

### Return type

[**ResourceGroup**](ResourceGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_delete**
> resource_groups_delete(resource_group_name, api_version, subscription_id)



Begin deleting resource group.To determine whether the operation has finished processing the request, call GetLongRunningOperationStatus.

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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to be deleted. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.resource_groups_delete(resource_group_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to be deleted. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_get**
> ResourceGroup resource_groups_get(resource_group_name, api_version, subscription_id)



Get a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_group import ResourceGroup
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.resource_groups_get(resource_group_name, api_version, subscription_id)
        print("The response of ResourceGroupsApi->resource_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ResourceGroup**](ResourceGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_list**
> ResourceGroupListResult resource_groups_list(api_version, subscription_id, filter=filter, top=top)



Gets a collection of resource groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_group_list_result import ResourceGroupListResult
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int | Query parameters. If null is passed returns all resource groups. (optional)

    try:
        api_response = api_instance.resource_groups_list(api_version, subscription_id, filter=filter, top=top)
        print("The response of ResourceGroupsApi->resource_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**| Query parameters. If null is passed returns all resource groups. | [optional] 

### Return type

[**ResourceGroupListResult**](ResourceGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_list_resources**
> ResourceListResult resource_groups_list_resources(resource_group_name, api_version, subscription_id, filter=filter, top=top)



Get all of the resources under a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_list_result import ResourceListResult
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Query parameters. If null is passed returns all resource groups.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int | Query parameters. If null is passed returns all resource groups. (optional)

    try:
        api_response = api_instance.resource_groups_list_resources(resource_group_name, api_version, subscription_id, filter=filter, top=top)
        print("The response of ResourceGroupsApi->resource_groups_list_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_list_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Query parameters. If null is passed returns all resource groups. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**| Query parameters. If null is passed returns all resource groups. | [optional] 

### Return type

[**ResourceListResult**](ResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_patch**
> ResourceGroup resource_groups_patch(resource_group_name, api_version, subscription_id, parameters)



Resource groups can be updated through a simple PATCH operation to a group address. The format of the request is the same as that for creating a resource groups, though if a field is unspecified current value will be carried over. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_group import ResourceGroup
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to be created or updated. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ResourceGroup() # ResourceGroup | Parameters supplied to the update state resource group service operation.

    try:
        api_response = api_instance.resource_groups_patch(resource_group_name, api_version, subscription_id, parameters)
        print("The response of ResourceGroupsApi->resource_groups_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to be created or updated. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ResourceGroup**](ResourceGroup.md)| Parameters supplied to the update state resource group service operation. | 

### Return type

[**ResourceGroup**](ResourceGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

