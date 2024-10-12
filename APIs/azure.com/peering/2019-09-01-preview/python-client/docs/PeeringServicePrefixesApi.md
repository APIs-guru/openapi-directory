# openapi_client.PeeringServicePrefixesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**prefixes_create_or_update**](PeeringServicePrefixesApi.md#prefixes_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName} | 
[**prefixes_delete**](PeeringServicePrefixesApi.md#prefixes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName} | 
[**prefixes_get**](PeeringServicePrefixesApi.md#prefixes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName} | 
[**prefixes_list_by_peering_service**](PeeringServicePrefixesApi.md#prefixes_list_by_peering_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes | 


# **prefixes_create_or_update**
> PeeringServicePrefix prefixes_create_or_update(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version, peering_service_prefix)



Creates a new prefix with the specified name under the given subscription, resource group and peering service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_service_prefix import PeeringServicePrefix
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
    api_instance = openapi_client.PeeringServicePrefixesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_service_name = 'peering_service_name_example' # str | The name of the peering service.
    prefix_name = 'prefix_name_example' # str | The name of the prefix.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    peering_service_prefix = openapi_client.PeeringServicePrefix() # PeeringServicePrefix | The properties needed to create a prefix.

    try:
        api_response = api_instance.prefixes_create_or_update(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version, peering_service_prefix)
        print("The response of PeeringServicePrefixesApi->prefixes_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicePrefixesApi->prefixes_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_service_name** | **str**| The name of the peering service. | 
 **prefix_name** | **str**| The name of the prefix. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **peering_service_prefix** | [**PeeringServicePrefix**](PeeringServicePrefix.md)| The properties needed to create a prefix. | 

### Return type

[**PeeringServicePrefix**](PeeringServicePrefix.md)

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
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prefixes_delete**
> prefixes_delete(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version)



Deletes an existing prefix with the specified name under the given subscription, resource group and peering service.

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
    api_instance = openapi_client.PeeringServicePrefixesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_service_name = 'peering_service_name_example' # str | The name of the peering service.
    prefix_name = 'prefix_name_example' # str | The name of the prefix.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_instance.prefixes_delete(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling PeeringServicePrefixesApi->prefixes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_service_name** | **str**| The name of the peering service. | 
 **prefix_name** | **str**| The name of the prefix. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

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
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prefixes_get**
> PeeringServicePrefix prefixes_get(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version, expand=expand)



Gets an existing prefix with the specified name under the given subscription, resource group and peering service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_service_prefix import PeeringServicePrefix
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
    api_instance = openapi_client.PeeringServicePrefixesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_service_name = 'peering_service_name_example' # str | The name of the peering service.
    prefix_name = 'prefix_name_example' # str | The name of the prefix.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    expand = 'expand_example' # str | The properties to be expanded. (optional)

    try:
        api_response = api_instance.prefixes_get(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version, expand=expand)
        print("The response of PeeringServicePrefixesApi->prefixes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicePrefixesApi->prefixes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_service_name** | **str**| The name of the peering service. | 
 **prefix_name** | **str**| The name of the prefix. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **expand** | **str**| The properties to be expanded. | [optional] 

### Return type

[**PeeringServicePrefix**](PeeringServicePrefix.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prefixes_list_by_peering_service**
> PeeringServicePrefixListResult prefixes_list_by_peering_service(resource_group_name, peering_service_name, subscription_id, api_version, expand=expand)



Lists all prefixes under the given subscription, resource group and peering service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_service_prefix_list_result import PeeringServicePrefixListResult
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
    api_instance = openapi_client.PeeringServicePrefixesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_service_name = 'peering_service_name_example' # str | The name of the peering service.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    expand = 'expand_example' # str | The properties to be expanded. (optional)

    try:
        api_response = api_instance.prefixes_list_by_peering_service(resource_group_name, peering_service_name, subscription_id, api_version, expand=expand)
        print("The response of PeeringServicePrefixesApi->prefixes_list_by_peering_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicePrefixesApi->prefixes_list_by_peering_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_service_name** | **str**| The name of the peering service. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **expand** | **str**| The properties to be expanded. | [optional] 

### Return type

[**PeeringServicePrefixListResult**](PeeringServicePrefixListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

