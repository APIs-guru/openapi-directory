# openapi_client.ProximityPlacementGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proximity_placement_groups_create_or_update**](ProximityPlacementGroupsApi.md#proximity_placement_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName} | 
[**proximity_placement_groups_delete**](ProximityPlacementGroupsApi.md#proximity_placement_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName} | 
[**proximity_placement_groups_get**](ProximityPlacementGroupsApi.md#proximity_placement_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName} | 
[**proximity_placement_groups_list_by_resource_group**](ProximityPlacementGroupsApi.md#proximity_placement_groups_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups | 
[**proximity_placement_groups_list_by_subscription**](ProximityPlacementGroupsApi.md#proximity_placement_groups_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/proximityPlacementGroups | 
[**proximity_placement_groups_update**](ProximityPlacementGroupsApi.md#proximity_placement_groups_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName} | 


# **proximity_placement_groups_create_or_update**
> ProximityPlacementGroup proximity_placement_groups_create_or_update(resource_group_name, proximity_placement_group_name, api_version, subscription_id, parameters)



Create or update a proximity placement group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.proximity_placement_group import ProximityPlacementGroup
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
    api_instance = openapi_client.ProximityPlacementGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    proximity_placement_group_name = 'proximity_placement_group_name_example' # str | The name of the proximity placement group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ProximityPlacementGroup() # ProximityPlacementGroup | Parameters supplied to the Create Proximity Placement Group operation.

    try:
        api_response = api_instance.proximity_placement_groups_create_or_update(resource_group_name, proximity_placement_group_name, api_version, subscription_id, parameters)
        print("The response of ProximityPlacementGroupsApi->proximity_placement_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProximityPlacementGroupsApi->proximity_placement_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **proximity_placement_group_name** | **str**| The name of the proximity placement group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ProximityPlacementGroup**](ProximityPlacementGroup.md)| Parameters supplied to the Create Proximity Placement Group operation. | 

### Return type

[**ProximityPlacementGroup**](ProximityPlacementGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proximity_placement_groups_delete**
> proximity_placement_groups_delete(resource_group_name, proximity_placement_group_name, api_version, subscription_id)



Delete a proximity placement group.

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
    api_instance = openapi_client.ProximityPlacementGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    proximity_placement_group_name = 'proximity_placement_group_name_example' # str | The name of the proximity placement group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.proximity_placement_groups_delete(resource_group_name, proximity_placement_group_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ProximityPlacementGroupsApi->proximity_placement_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **proximity_placement_group_name** | **str**| The name of the proximity placement group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proximity_placement_groups_get**
> ProximityPlacementGroup proximity_placement_groups_get(resource_group_name, proximity_placement_group_name, api_version, subscription_id)



Retrieves information about a proximity placement group .

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.proximity_placement_group import ProximityPlacementGroup
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
    api_instance = openapi_client.ProximityPlacementGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    proximity_placement_group_name = 'proximity_placement_group_name_example' # str | The name of the proximity placement group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.proximity_placement_groups_get(resource_group_name, proximity_placement_group_name, api_version, subscription_id)
        print("The response of ProximityPlacementGroupsApi->proximity_placement_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProximityPlacementGroupsApi->proximity_placement_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **proximity_placement_group_name** | **str**| The name of the proximity placement group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ProximityPlacementGroup**](ProximityPlacementGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proximity_placement_groups_list_by_resource_group**
> ProximityPlacementGroupListResult proximity_placement_groups_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists all proximity placement groups in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.proximity_placement_group_list_result import ProximityPlacementGroupListResult
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
    api_instance = openapi_client.ProximityPlacementGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.proximity_placement_groups_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of ProximityPlacementGroupsApi->proximity_placement_groups_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProximityPlacementGroupsApi->proximity_placement_groups_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ProximityPlacementGroupListResult**](ProximityPlacementGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proximity_placement_groups_list_by_subscription**
> ProximityPlacementGroupListResult proximity_placement_groups_list_by_subscription(api_version, subscription_id)



Lists all proximity placement groups in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.proximity_placement_group_list_result import ProximityPlacementGroupListResult
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
    api_instance = openapi_client.ProximityPlacementGroupsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.proximity_placement_groups_list_by_subscription(api_version, subscription_id)
        print("The response of ProximityPlacementGroupsApi->proximity_placement_groups_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProximityPlacementGroupsApi->proximity_placement_groups_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ProximityPlacementGroupListResult**](ProximityPlacementGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proximity_placement_groups_update**
> ProximityPlacementGroup proximity_placement_groups_update(resource_group_name, proximity_placement_group_name, api_version, subscription_id, parameters)



Update a proximity placement group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.proximity_placement_group import ProximityPlacementGroup
from openapi_client.models.proximity_placement_group_update import ProximityPlacementGroupUpdate
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
    api_instance = openapi_client.ProximityPlacementGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    proximity_placement_group_name = 'proximity_placement_group_name_example' # str | The name of the proximity placement group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ProximityPlacementGroupUpdate() # ProximityPlacementGroupUpdate | Parameters supplied to the Update Proximity Placement Group operation.

    try:
        api_response = api_instance.proximity_placement_groups_update(resource_group_name, proximity_placement_group_name, api_version, subscription_id, parameters)
        print("The response of ProximityPlacementGroupsApi->proximity_placement_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProximityPlacementGroupsApi->proximity_placement_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **proximity_placement_group_name** | **str**| The name of the proximity placement group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ProximityPlacementGroupUpdate**](ProximityPlacementGroupUpdate.md)| Parameters supplied to the Update Proximity Placement Group operation. | 

### Return type

[**ProximityPlacementGroup**](ProximityPlacementGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

