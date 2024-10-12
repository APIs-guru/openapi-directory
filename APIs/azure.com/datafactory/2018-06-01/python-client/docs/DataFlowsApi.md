# openapi_client.DataFlowsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_flows_create_or_update**](DataFlowsApi.md#data_flows_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName} | 
[**data_flows_delete**](DataFlowsApi.md#data_flows_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName} | 
[**data_flows_get**](DataFlowsApi.md#data_flows_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName} | 
[**data_flows_list_by_factory**](DataFlowsApi.md#data_flows_list_by_factory) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows | 


# **data_flows_create_or_update**
> DataFlowResource data_flows_create_or_update(subscription_id, resource_group_name, factory_name, data_flow_name, api_version, data_flow, if_match=if_match)



Creates or updates a data flow.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_flow_resource import DataFlowResource
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
    api_instance = openapi_client.DataFlowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    data_flow_name = 'data_flow_name_example' # str | The data flow name.
    api_version = 'api_version_example' # str | The API version.
    data_flow = openapi_client.DataFlowResource() # DataFlowResource | Data flow resource definition.
    if_match = 'if_match_example' # str | ETag of the data flow entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. (optional)

    try:
        api_response = api_instance.data_flows_create_or_update(subscription_id, resource_group_name, factory_name, data_flow_name, api_version, data_flow, if_match=if_match)
        print("The response of DataFlowsApi->data_flows_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataFlowsApi->data_flows_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **data_flow_name** | **str**| The data flow name. | 
 **api_version** | **str**| The API version. | 
 **data_flow** | [**DataFlowResource**](DataFlowResource.md)| Data flow resource definition. | 
 **if_match** | **str**| ETag of the data flow entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. | [optional] 

### Return type

[**DataFlowResource**](DataFlowResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_flows_delete**
> data_flows_delete(subscription_id, resource_group_name, factory_name, data_flow_name, api_version)



Deletes a data flow.

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
    api_instance = openapi_client.DataFlowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    data_flow_name = 'data_flow_name_example' # str | The data flow name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.data_flows_delete(subscription_id, resource_group_name, factory_name, data_flow_name, api_version)
    except Exception as e:
        print("Exception when calling DataFlowsApi->data_flows_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **data_flow_name** | **str**| The data flow name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK. |  -  |
**204** | No Content. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_flows_get**
> DataFlowResource data_flows_get(subscription_id, resource_group_name, factory_name, data_flow_name, api_version, if_none_match=if_none_match)



Gets a data flow.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_flow_resource import DataFlowResource
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
    api_instance = openapi_client.DataFlowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    data_flow_name = 'data_flow_name_example' # str | The data flow name.
    api_version = 'api_version_example' # str | The API version.
    if_none_match = 'if_none_match_example' # str | ETag of the data flow entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. (optional)

    try:
        api_response = api_instance.data_flows_get(subscription_id, resource_group_name, factory_name, data_flow_name, api_version, if_none_match=if_none_match)
        print("The response of DataFlowsApi->data_flows_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataFlowsApi->data_flows_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **data_flow_name** | **str**| The data flow name. | 
 **api_version** | **str**| The API version. | 
 **if_none_match** | **str**| ETag of the data flow entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. | [optional] 

### Return type

[**DataFlowResource**](DataFlowResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_flows_list_by_factory**
> DataFlowListResponse data_flows_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)



Lists data flows.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_flow_list_response import DataFlowListResponse
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
    api_instance = openapi_client.DataFlowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.data_flows_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)
        print("The response of DataFlowsApi->data_flows_list_by_factory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataFlowsApi->data_flows_list_by_factory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**DataFlowListResponse**](DataFlowListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

