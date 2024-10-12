# openapi_client.RelationshipsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationships_create_or_update**](RelationshipsApi.md#relationships_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName} | 
[**relationships_delete**](RelationshipsApi.md#relationships_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName} | 
[**relationships_get**](RelationshipsApi.md#relationships_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName} | 
[**relationships_list_by_hub**](RelationshipsApi.md#relationships_list_by_hub) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships | 


# **relationships_create_or_update**
> RelationshipResourceFormat relationships_create_or_update(resource_group_name, hub_name, relationship_name, api_version, subscription_id, parameters)



Creates a relationship or updates an existing relationship within a hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relationship_resource_format import RelationshipResourceFormat
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
    api_instance = openapi_client.RelationshipsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    relationship_name = 'relationship_name_example' # str | The name of the Relationship.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RelationshipResourceFormat() # RelationshipResourceFormat | Parameters supplied to the CreateOrUpdate Relationship operation.

    try:
        api_response = api_instance.relationships_create_or_update(resource_group_name, hub_name, relationship_name, api_version, subscription_id, parameters)
        print("The response of RelationshipsApi->relationships_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelationshipsApi->relationships_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **relationship_name** | **str**| The name of the Relationship. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RelationshipResourceFormat**](RelationshipResourceFormat.md)| Parameters supplied to the CreateOrUpdate Relationship operation. | 

### Return type

[**RelationshipResourceFormat**](RelationshipResourceFormat.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully created the relationship. |  -  |
**202** | Accepted. The create relationship operation is accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **relationships_delete**
> relationships_delete(resource_group_name, hub_name, relationship_name, api_version, subscription_id)



Deletes a relationship within a hub.

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
    api_instance = openapi_client.RelationshipsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    relationship_name = 'relationship_name_example' # str | The name of the relationship.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.relationships_delete(resource_group_name, hub_name, relationship_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling RelationshipsApi->relationships_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **relationship_name** | **str**| The name of the relationship. | 
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
**200** | OK. The relationship is deleted. |  -  |
**202** | Accepted. The delete operation is accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **relationships_get**
> RelationshipResourceFormat relationships_get(resource_group_name, hub_name, relationship_name, api_version, subscription_id)



Gets information about the specified relationship.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relationship_resource_format import RelationshipResourceFormat
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
    api_instance = openapi_client.RelationshipsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    relationship_name = 'relationship_name_example' # str | The name of the relationship.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.relationships_get(resource_group_name, hub_name, relationship_name, api_version, subscription_id)
        print("The response of RelationshipsApi->relationships_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelationshipsApi->relationships_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **relationship_name** | **str**| The name of the relationship. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RelationshipResourceFormat**](RelationshipResourceFormat.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get the relationship. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **relationships_list_by_hub**
> RelationshipListResult relationships_list_by_hub(resource_group_name, hub_name, api_version, subscription_id)



Gets all relationships in the hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relationship_list_result import RelationshipListResult
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
    api_instance = openapi_client.RelationshipsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.relationships_list_by_hub(resource_group_name, hub_name, api_version, subscription_id)
        print("The response of RelationshipsApi->relationships_list_by_hub:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelationshipsApi->relationships_list_by_hub: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RelationshipListResult**](RelationshipListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get all the relationships in the hub. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

