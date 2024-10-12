# openapi_client.PeeringServicePrefixesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**peering_service_prefixes_create_or_update**](PeeringServicePrefixesApi.md#peering_service_prefixes_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName} | 
[**peering_service_prefixes_delete**](PeeringServicePrefixesApi.md#peering_service_prefixes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName} | 
[**peering_service_prefixes_get**](PeeringServicePrefixesApi.md#peering_service_prefixes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName} | 
[**prefixes_list_by_peering_service**](PeeringServicePrefixesApi.md#prefixes_list_by_peering_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes | 


# **peering_service_prefixes_create_or_update**
> PeeringServicePrefix peering_service_prefixes_create_or_update(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version, peering_service_prefix)



Creates or updates the peering prefix.

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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    peering_service_name = 'peering_service_name_example' # str | The peering service name.
    prefix_name = 'prefix_name_example' # str | The prefix name
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    peering_service_prefix = openapi_client.PeeringServicePrefix() # PeeringServicePrefix | The IP prefix for an peering

    try:
        api_response = api_instance.peering_service_prefixes_create_or_update(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version, peering_service_prefix)
        print("The response of PeeringServicePrefixesApi->peering_service_prefixes_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicePrefixesApi->peering_service_prefixes_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name. | 
 **peering_service_name** | **str**| The peering service name. | 
 **prefix_name** | **str**| The prefix name | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **peering_service_prefix** | [**PeeringServicePrefix**](PeeringServicePrefix.md)| The IP prefix for an peering | 

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

# **peering_service_prefixes_delete**
> peering_service_prefixes_delete(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version)



removes the peering prefix.

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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    peering_service_name = 'peering_service_name_example' # str | The peering service name.
    prefix_name = 'prefix_name_example' # str | The prefix name
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_instance.peering_service_prefixes_delete(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling PeeringServicePrefixesApi->peering_service_prefixes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name. | 
 **peering_service_name** | **str**| The peering service name. | 
 **prefix_name** | **str**| The prefix name | 
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

# **peering_service_prefixes_get**
> PeeringServicePrefix peering_service_prefixes_get(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version)



Gets the peering service prefix.

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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    peering_service_name = 'peering_service_name_example' # str | The peering service name.
    prefix_name = 'prefix_name_example' # str | The prefix name.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.peering_service_prefixes_get(resource_group_name, peering_service_name, prefix_name, subscription_id, api_version)
        print("The response of PeeringServicePrefixesApi->peering_service_prefixes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicePrefixesApi->peering_service_prefixes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name. | 
 **peering_service_name** | **str**| The peering service name. | 
 **prefix_name** | **str**| The prefix name. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

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
> PeeringServicePrefixListResult prefixes_list_by_peering_service(resource_group_name, peering_service_name, subscription_id, api_version)



Lists the peerings prefix in the resource group.

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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    peering_service_name = 'peering_service_name_example' # str | The peering service name.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.prefixes_list_by_peering_service(resource_group_name, peering_service_name, subscription_id, api_version)
        print("The response of PeeringServicePrefixesApi->prefixes_list_by_peering_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicePrefixesApi->prefixes_list_by_peering_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name. | 
 **peering_service_name** | **str**| The peering service name. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

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

