# openapi_client.UpdatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updates_list**](UpdatesApi.md#updates_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/updates | Get Updates to resource
[**updates_list_parent**](UpdatesApi.md#updates_list_parent) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/updates | Get Updates to resource


# **updates_list**
> ListUpdatesResult updates_list(subscription_id, resource_group_name, provider_name, resource_type, resource_name, api_version)

Get Updates to resource

Get updates to resources.

### Example


```python
import openapi_client
from openapi_client.models.list_updates_result import ListUpdatesResult
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
    api_instance = openapi_client.UpdatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get Updates to resource
        api_response = api_instance.updates_list(subscription_id, resource_group_name, provider_name, resource_type, resource_name, api_version)
        print("The response of UpdatesApi->updates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdatesApi->updates_list: %s\n" % e)
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

[**ListUpdatesResult**](ListUpdatesResult.md)

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

# **updates_list_parent**
> ListUpdatesResult updates_list_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, api_version)

Get Updates to resource

Get updates to resources.

### Example


```python
import openapi_client
from openapi_client.models.list_updates_result import ListUpdatesResult
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
    api_instance = openapi_client.UpdatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_parent_type = 'resource_parent_type_example' # str | Resource parent type
    resource_parent_name = 'resource_parent_name_example' # str | Resource parent identifier
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get Updates to resource
        api_response = api_instance.updates_list_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, api_version)
        print("The response of UpdatesApi->updates_list_parent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdatesApi->updates_list_parent: %s\n" % e)
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

[**ListUpdatesResult**](ListUpdatesResult.md)

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

