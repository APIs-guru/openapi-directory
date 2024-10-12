# openapi_client.DataFlowDebugSessionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_flow_debug_session_add_data_flow**](DataFlowDebugSessionApi.md#data_flow_debug_session_add_data_flow) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/addDataFlowToDebugSession | 
[**data_flow_debug_session_create**](DataFlowDebugSessionApi.md#data_flow_debug_session_create) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/createDataFlowDebugSession | 
[**data_flow_debug_session_delete**](DataFlowDebugSessionApi.md#data_flow_debug_session_delete) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/deleteDataFlowDebugSession | 
[**data_flow_debug_session_execute_command**](DataFlowDebugSessionApi.md#data_flow_debug_session_execute_command) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/executeDataFlowDebugCommand | 
[**data_flow_debug_session_query_by_factory**](DataFlowDebugSessionApi.md#data_flow_debug_session_query_by_factory) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryDataFlowDebugSessions | 


# **data_flow_debug_session_add_data_flow**
> AddDataFlowToDebugSessionResponse data_flow_debug_session_add_data_flow(subscription_id, resource_group_name, factory_name, api_version, request)



Add a data flow into debug session.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.add_data_flow_to_debug_session_response import AddDataFlowToDebugSessionResponse
from openapi_client.models.data_flow_debug_package import DataFlowDebugPackage
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
    api_instance = openapi_client.DataFlowDebugSessionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    request = openapi_client.DataFlowDebugPackage() # DataFlowDebugPackage | Data flow debug session definition with debug content.

    try:
        api_response = api_instance.data_flow_debug_session_add_data_flow(subscription_id, resource_group_name, factory_name, api_version, request)
        print("The response of DataFlowDebugSessionApi->data_flow_debug_session_add_data_flow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataFlowDebugSessionApi->data_flow_debug_session_add_data_flow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **request** | [**DataFlowDebugPackage**](DataFlowDebugPackage.md)| Data flow debug session definition with debug content. | 

### Return type

[**AddDataFlowToDebugSessionResponse**](AddDataFlowToDebugSessionResponse.md)

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

# **data_flow_debug_session_create**
> CreateDataFlowDebugSessionResponse data_flow_debug_session_create(subscription_id, resource_group_name, factory_name, api_version, request)



Creates a data flow debug session.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_data_flow_debug_session_request import CreateDataFlowDebugSessionRequest
from openapi_client.models.create_data_flow_debug_session_response import CreateDataFlowDebugSessionResponse
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
    api_instance = openapi_client.DataFlowDebugSessionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    request = openapi_client.CreateDataFlowDebugSessionRequest() # CreateDataFlowDebugSessionRequest | Data flow debug session definition

    try:
        api_response = api_instance.data_flow_debug_session_create(subscription_id, resource_group_name, factory_name, api_version, request)
        print("The response of DataFlowDebugSessionApi->data_flow_debug_session_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataFlowDebugSessionApi->data_flow_debug_session_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **request** | [**CreateDataFlowDebugSessionRequest**](CreateDataFlowDebugSessionRequest.md)| Data flow debug session definition | 

### Return type

[**CreateDataFlowDebugSessionResponse**](CreateDataFlowDebugSessionResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted. |  * location - URI to poll for asynchronous operation status. <br>  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_flow_debug_session_delete**
> data_flow_debug_session_delete(subscription_id, resource_group_name, factory_name, api_version, request)



Deletes a data flow debug session.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.delete_data_flow_debug_session_request import DeleteDataFlowDebugSessionRequest
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
    api_instance = openapi_client.DataFlowDebugSessionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    request = openapi_client.DeleteDataFlowDebugSessionRequest() # DeleteDataFlowDebugSessionRequest | Data flow debug session definition for deletion

    try:
        api_instance.data_flow_debug_session_delete(subscription_id, resource_group_name, factory_name, api_version, request)
    except Exception as e:
        print("Exception when calling DataFlowDebugSessionApi->data_flow_debug_session_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **request** | [**DeleteDataFlowDebugSessionRequest**](DeleteDataFlowDebugSessionRequest.md)| Data flow debug session definition for deletion | 

### Return type

void (empty response body)

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

# **data_flow_debug_session_execute_command**
> DataFlowDebugCommandResponse data_flow_debug_session_execute_command(subscription_id, resource_group_name, factory_name, api_version, request)



Execute a data flow debug command.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_flow_debug_command_request import DataFlowDebugCommandRequest
from openapi_client.models.data_flow_debug_command_response import DataFlowDebugCommandResponse
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
    api_instance = openapi_client.DataFlowDebugSessionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    request = openapi_client.DataFlowDebugCommandRequest() # DataFlowDebugCommandRequest | Data flow debug command definition.

    try:
        api_response = api_instance.data_flow_debug_session_execute_command(subscription_id, resource_group_name, factory_name, api_version, request)
        print("The response of DataFlowDebugSessionApi->data_flow_debug_session_execute_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataFlowDebugSessionApi->data_flow_debug_session_execute_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **request** | [**DataFlowDebugCommandRequest**](DataFlowDebugCommandRequest.md)| Data flow debug command definition. | 

### Return type

[**DataFlowDebugCommandResponse**](DataFlowDebugCommandResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted. |  * location - URI to poll for asynchronous operation status. <br>  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_flow_debug_session_query_by_factory**
> QueryDataFlowDebugSessionsResponse data_flow_debug_session_query_by_factory(subscription_id, resource_group_name, factory_name, api_version)



Query all active data flow debug sessions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_data_flow_debug_sessions_response import QueryDataFlowDebugSessionsResponse
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
    api_instance = openapi_client.DataFlowDebugSessionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.data_flow_debug_session_query_by_factory(subscription_id, resource_group_name, factory_name, api_version)
        print("The response of DataFlowDebugSessionApi->data_flow_debug_session_query_by_factory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataFlowDebugSessionApi->data_flow_debug_session_query_by_factory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**QueryDataFlowDebugSessionsResponse**](QueryDataFlowDebugSessionsResponse.md)

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

