# openapi_client.OriginGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**origin_groups_create**](OriginGroupsApi.md#origin_groups_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName} | 
[**origin_groups_delete**](OriginGroupsApi.md#origin_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName} | 
[**origin_groups_get**](OriginGroupsApi.md#origin_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName} | 
[**origin_groups_list_by_endpoint**](OriginGroupsApi.md#origin_groups_list_by_endpoint) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups | 
[**origin_groups_update**](OriginGroupsApi.md#origin_groups_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName} | 


# **origin_groups_create**
> OriginGroup origin_groups_create(resource_group_name, profile_name, endpoint_name, origin_group_name, subscription_id, api_version, origin_group)



Creates a new origin group within the specified endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin_group import OriginGroup
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
    api_instance = openapi_client.OriginGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    origin_group_name = 'origin_group_name_example' # str | Name of the origin group which is unique within the endpoint.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    origin_group = openapi_client.OriginGroup() # OriginGroup | Origin group properties

    try:
        api_response = api_instance.origin_groups_create(resource_group_name, profile_name, endpoint_name, origin_group_name, subscription_id, api_version, origin_group)
        print("The response of OriginGroupsApi->origin_groups_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginGroupsApi->origin_groups_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **origin_group_name** | **str**| Name of the origin group which is unique within the endpoint. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **origin_group** | [**OriginGroup**](OriginGroup.md)| Origin group properties | 

### Return type

[**OriginGroup**](OriginGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. The request has been fulfilled and a new origin group has been created. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origin_groups_delete**
> origin_groups_delete(resource_group_name, profile_name, endpoint_name, origin_group_name, subscription_id, api_version)



Deletes an existing origin group within an endpoint.

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
    api_instance = openapi_client.OriginGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    origin_group_name = 'origin_group_name_example' # str | Name of the origin group which is unique within the endpoint.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_instance.origin_groups_delete(resource_group_name, profile_name, endpoint_name, origin_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling OriginGroupsApi->origin_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **origin_group_name** | **str**| Name of the origin group which is unique within the endpoint. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | No Content. The request has been accepted but the origin was not found. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origin_groups_get**
> OriginGroup origin_groups_get(resource_group_name, profile_name, endpoint_name, origin_group_name, subscription_id, api_version)



Gets an existing origin group within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin_group import OriginGroup
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
    api_instance = openapi_client.OriginGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    origin_group_name = 'origin_group_name_example' # str | Name of the origin group which is unique within the endpoint.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.origin_groups_get(resource_group_name, profile_name, endpoint_name, origin_group_name, subscription_id, api_version)
        print("The response of OriginGroupsApi->origin_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginGroupsApi->origin_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **origin_group_name** | **str**| Name of the origin group which is unique within the endpoint. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**OriginGroup**](OriginGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origin_groups_list_by_endpoint**
> OriginGroupListResult origin_groups_list_by_endpoint(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)



Lists all of the existing origin groups within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin_group_list_result import OriginGroupListResult
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
    api_instance = openapi_client.OriginGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.origin_groups_list_by_endpoint(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)
        print("The response of OriginGroupsApi->origin_groups_list_by_endpoint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginGroupsApi->origin_groups_list_by_endpoint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**OriginGroupListResult**](OriginGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origin_groups_update**
> OriginGroup origin_groups_update(resource_group_name, profile_name, endpoint_name, origin_group_name, subscription_id, api_version, origin_group_update_properties)



Updates an existing origin group within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin_group import OriginGroup
from openapi_client.models.origin_group_update_parameters import OriginGroupUpdateParameters
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
    api_instance = openapi_client.OriginGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    origin_group_name = 'origin_group_name_example' # str | Name of the origin group which is unique within the endpoint.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    origin_group_update_properties = openapi_client.OriginGroupUpdateParameters() # OriginGroupUpdateParameters | Origin group properties

    try:
        api_response = api_instance.origin_groups_update(resource_group_name, profile_name, endpoint_name, origin_group_name, subscription_id, api_version, origin_group_update_properties)
        print("The response of OriginGroupsApi->origin_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginGroupsApi->origin_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **origin_group_name** | **str**| Name of the origin group which is unique within the endpoint. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **origin_group_update_properties** | [**OriginGroupUpdateParameters**](OriginGroupUpdateParameters.md)| Origin group properties | 

### Return type

[**OriginGroup**](OriginGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

