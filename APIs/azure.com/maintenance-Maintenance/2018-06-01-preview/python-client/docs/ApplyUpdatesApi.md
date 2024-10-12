# openapi_client.ApplyUpdatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apply_updates_create_or_update**](ApplyUpdatesApi.md#apply_updates_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default | Apply Updates to resource
[**apply_updates_create_or_update_parent**](ApplyUpdatesApi.md#apply_updates_create_or_update_parent) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default | Apply Updates to resource with parent
[**apply_updates_get**](ApplyUpdatesApi.md#apply_updates_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName} | Track Updates to resource
[**apply_updates_get_parent**](ApplyUpdatesApi.md#apply_updates_get_parent) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName} | Track Updates to resource with parent


# **apply_updates_create_or_update**
> ApplyUpdate apply_updates_create_or_update(subscription_id, resource_group_name, provider_name, resource_type, resource_name, api_version)

Apply Updates to resource

Apply maintenance updates to resource

### Example


```python
import openapi_client
from openapi_client.models.apply_update import ApplyUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplyUpdatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Apply Updates to resource
        api_response = api_instance.apply_updates_create_or_update(subscription_id, resource_group_name, provider_name, resource_type, resource_name, api_version)
        print("The response of ApplyUpdatesApi->apply_updates_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplyUpdatesApi->apply_updates_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **provider_name** | **str**| Resource provider name | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ApplyUpdate**](ApplyUpdate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_updates_create_or_update_parent**
> ApplyUpdate apply_updates_create_or_update_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, api_version)

Apply Updates to resource with parent

Apply maintenance updates to resource with parent

### Example


```python
import openapi_client
from openapi_client.models.apply_update import ApplyUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplyUpdatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_parent_type = 'resource_parent_type_example' # str | Resource parent type
    resource_parent_name = 'resource_parent_name_example' # str | Resource parent identifier
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Apply Updates to resource with parent
        api_response = api_instance.apply_updates_create_or_update_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, api_version)
        print("The response of ApplyUpdatesApi->apply_updates_create_or_update_parent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplyUpdatesApi->apply_updates_create_or_update_parent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **provider_name** | **str**| Resource provider name | 
 **resource_parent_type** | **str**| Resource parent type | 
 **resource_parent_name** | **str**| Resource parent identifier | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ApplyUpdate**](ApplyUpdate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_updates_get**
> ApplyUpdate apply_updates_get(subscription_id, resource_group_name, provider_name, resource_type, resource_name, apply_update_name, api_version)

Track Updates to resource

Track maintenance updates to resource

### Example


```python
import openapi_client
from openapi_client.models.apply_update import ApplyUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplyUpdatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    apply_update_name = 'apply_update_name_example' # str | applyUpdate Id
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Track Updates to resource
        api_response = api_instance.apply_updates_get(subscription_id, resource_group_name, provider_name, resource_type, resource_name, apply_update_name, api_version)
        print("The response of ApplyUpdatesApi->apply_updates_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplyUpdatesApi->apply_updates_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **provider_name** | **str**| Resource provider name | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **apply_update_name** | **str**| applyUpdate Id | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ApplyUpdate**](ApplyUpdate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_updates_get_parent**
> ApplyUpdate apply_updates_get_parent(subscription_id, resource_group_name, resource_parent_type, resource_parent_name, provider_name, resource_type, resource_name, apply_update_name, api_version)

Track Updates to resource with parent

Track maintenance updates to resource with parent

### Example


```python
import openapi_client
from openapi_client.models.apply_update import ApplyUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplyUpdatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    resource_parent_type = 'resource_parent_type_example' # str | Resource parent type
    resource_parent_name = 'resource_parent_name_example' # str | Resource parent identifier
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    apply_update_name = 'apply_update_name_example' # str | applyUpdate Id
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Track Updates to resource with parent
        api_response = api_instance.apply_updates_get_parent(subscription_id, resource_group_name, resource_parent_type, resource_parent_name, provider_name, resource_type, resource_name, apply_update_name, api_version)
        print("The response of ApplyUpdatesApi->apply_updates_get_parent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplyUpdatesApi->apply_updates_get_parent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **resource_parent_type** | **str**| Resource parent type | 
 **resource_parent_name** | **str**| Resource parent identifier | 
 **provider_name** | **str**| Resource provider name | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **apply_update_name** | **str**| applyUpdate Id | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ApplyUpdate**](ApplyUpdate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

