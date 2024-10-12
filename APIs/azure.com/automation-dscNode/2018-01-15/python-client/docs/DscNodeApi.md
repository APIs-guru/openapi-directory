# openapi_client.DscNodeApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dsc_node_delete**](DscNodeApi.md#dsc_node_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId} | 
[**dsc_node_get**](DscNodeApi.md#dsc_node_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId} | 
[**dsc_node_list_by_automation_account**](DscNodeApi.md#dsc_node_list_by_automation_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes | 
[**dsc_node_update**](DscNodeApi.md#dsc_node_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId} | 


# **dsc_node_delete**
> DscNode dsc_node_delete(resource_group_name, automation_account_name, node_id, subscription_id, api_version)



Delete the dsc node identified by node id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_node import DscNode
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
    api_instance = openapi_client.DscNodeApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    node_id = 'node_id_example' # str | The node id.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.dsc_node_delete(resource_group_name, automation_account_name, node_id, subscription_id, api_version)
        print("The response of DscNodeApi->dsc_node_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscNodeApi->dsc_node_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **node_id** | **str**| The node id. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DscNode**](DscNode.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dsc_node_get**
> DscNode dsc_node_get(resource_group_name, automation_account_name, node_id, subscription_id, api_version)



Retrieve the dsc node identified by node id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_node import DscNode
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
    api_instance = openapi_client.DscNodeApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    node_id = 'node_id_example' # str | The node id.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.dsc_node_get(resource_group_name, automation_account_name, node_id, subscription_id, api_version)
        print("The response of DscNodeApi->dsc_node_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscNodeApi->dsc_node_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **node_id** | **str**| The node id. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DscNode**](DscNode.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dsc_node_list_by_automation_account**
> DscNodeListResult dsc_node_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version, filter=filter, skip=skip, top=top, inlinecount=inlinecount)



Retrieve a list of dsc nodes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_node_list_result import DscNodeListResult
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
    api_instance = openapi_client.DscNodeApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    skip = 56 # int | The number of rows to skip. (optional)
    top = 56 # int | The number of rows to take. (optional)
    inlinecount = 'inlinecount_example' # str | Return total rows. (optional)

    try:
        api_response = api_instance.dsc_node_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version, filter=filter, skip=skip, top=top, inlinecount=inlinecount)
        print("The response of DscNodeApi->dsc_node_list_by_automation_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscNodeApi->dsc_node_list_by_automation_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **skip** | **int**| The number of rows to skip. | [optional] 
 **top** | **int**| The number of rows to take. | [optional] 
 **inlinecount** | **str**| Return total rows. | [optional] 

### Return type

[**DscNodeListResult**](DscNodeListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dsc_node_update**
> DscNode dsc_node_update(resource_group_name, automation_account_name, node_id, subscription_id, api_version, dsc_node_update_parameters)



Update the dsc node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_node import DscNode
from openapi_client.models.dsc_node_update_parameters import DscNodeUpdateParameters
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
    api_instance = openapi_client.DscNodeApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    node_id = 'node_id_example' # str | Parameters supplied to the update dsc node.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    dsc_node_update_parameters = openapi_client.DscNodeUpdateParameters() # DscNodeUpdateParameters | Parameters supplied to the update dsc node.

    try:
        api_response = api_instance.dsc_node_update(resource_group_name, automation_account_name, node_id, subscription_id, api_version, dsc_node_update_parameters)
        print("The response of DscNodeApi->dsc_node_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscNodeApi->dsc_node_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **node_id** | **str**| Parameters supplied to the update dsc node. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **dsc_node_update_parameters** | [**DscNodeUpdateParameters**](DscNodeUpdateParameters.md)| Parameters supplied to the update dsc node. | 

### Return type

[**DscNode**](DscNode.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

