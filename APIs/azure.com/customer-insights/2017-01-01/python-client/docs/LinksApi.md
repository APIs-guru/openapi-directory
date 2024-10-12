# openapi_client.LinksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**links_create_or_update**](LinksApi.md#links_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName} | 
[**links_delete**](LinksApi.md#links_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName} | 
[**links_get**](LinksApi.md#links_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName} | 
[**links_list_by_hub**](LinksApi.md#links_list_by_hub) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links | 


# **links_create_or_update**
> LinkResourceFormat links_create_or_update(resource_group_name, hub_name, link_name, api_version, subscription_id, parameters)



Creates a link or updates an existing link in the hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.link_resource_format import LinkResourceFormat
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
    api_instance = openapi_client.LinksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    link_name = 'link_name_example' # str | The name of the link.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.LinkResourceFormat() # LinkResourceFormat | Parameters supplied to the CreateOrUpdate Link operation.

    try:
        api_response = api_instance.links_create_or_update(resource_group_name, hub_name, link_name, api_version, subscription_id, parameters)
        print("The response of LinksApi->links_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinksApi->links_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **link_name** | **str**| The name of the link. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**LinkResourceFormat**](LinkResourceFormat.md)| Parameters supplied to the CreateOrUpdate Link operation. | 

### Return type

[**LinkResourceFormat**](LinkResourceFormat.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully created the link. |  -  |
**202** | Accepted. The create link operation is accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **links_delete**
> links_delete(resource_group_name, hub_name, link_name, api_version, subscription_id)



Deletes a link in the hub.

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
    api_instance = openapi_client.LinksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    link_name = 'link_name_example' # str | The name of the link.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.links_delete(resource_group_name, hub_name, link_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling LinksApi->links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **link_name** | **str**| The name of the link. | 
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
**200** | OK. The link is deleted. |  -  |
**202** | Accepted. The delete operation is accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **links_get**
> LinkResourceFormat links_get(resource_group_name, hub_name, link_name, api_version, subscription_id)



Gets a link in the hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.link_resource_format import LinkResourceFormat
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
    api_instance = openapi_client.LinksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    link_name = 'link_name_example' # str | The name of the link.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.links_get(resource_group_name, hub_name, link_name, api_version, subscription_id)
        print("The response of LinksApi->links_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinksApi->links_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **link_name** | **str**| The name of the link. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**LinkResourceFormat**](LinkResourceFormat.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get the link. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **links_list_by_hub**
> LinkListResult links_list_by_hub(resource_group_name, hub_name, api_version, subscription_id)



Gets all the links in the specified hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.link_list_result import LinkListResult
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
    api_instance = openapi_client.LinksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.links_list_by_hub(resource_group_name, hub_name, api_version, subscription_id)
        print("The response of LinksApi->links_list_by_hub:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinksApi->links_list_by_hub: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**LinkListResult**](LinkListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get all the links in the hub. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

