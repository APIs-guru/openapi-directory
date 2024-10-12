# openapi_client.PowerShellApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**power_shell_cancel_command**](PowerShellApi.md#power_shell_cancel_command) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession}/cancel | 
[**power_shell_create_session**](PowerShellApi.md#power_shell_create_session) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession} | 
[**power_shell_get_command_status**](PowerShellApi.md#power_shell_get_command_status) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession} | 
[**power_shell_invoke_command**](PowerShellApi.md#power_shell_invoke_command) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession}/invokeCommand | 
[**power_shell_list_session**](PowerShellApi.md#power_shell_list_session) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions | 
[**power_shell_tab_completion**](PowerShellApi.md#power_shell_tab_completion) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession}/tab | 
[**power_shell_update_command**](PowerShellApi.md#power_shell_update_command) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session}/features/powerShellConsole/pssessions/{pssession} | 


# **power_shell_cancel_command**
> PowerShellCommandResults power_shell_cancel_command(subscription_id, api_version, resource_group_name, node_name, session, pssession)



Cancels a PowerShell command.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.power_shell_command_results import PowerShellCommandResults
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
    api_instance = openapi_client.PowerShellApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.
    pssession = 'pssession_example' # str | The PowerShell sessionId from the user.

    try:
        api_response = api_instance.power_shell_cancel_command(subscription_id, api_version, resource_group_name, node_name, session, pssession)
        print("The response of PowerShellApi->power_shell_cancel_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PowerShellApi->power_shell_cancel_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **session** | **str**| The sessionId from the user. | 
 **pssession** | **str**| The PowerShell sessionId from the user. | 

### Return type

[**PowerShellCommandResults**](PowerShellCommandResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cancellation was completed successfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **power_shell_create_session**
> PowerShellSessionResource power_shell_create_session(subscription_id, api_version, resource_group_name, node_name, session, pssession)



Creates a PowerShell session.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.power_shell_session_resource import PowerShellSessionResource
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
    api_instance = openapi_client.PowerShellApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.
    pssession = 'pssession_example' # str | The PowerShell sessionId from the user.

    try:
        api_response = api_instance.power_shell_create_session(subscription_id, api_version, resource_group_name, node_name, session, pssession)
        print("The response of PowerShellApi->power_shell_create_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PowerShellApi->power_shell_create_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **session** | **str**| The sessionId from the user. | 
 **pssession** | **str**| The PowerShell sessionId from the user. | 

### Return type

[**PowerShellSessionResource**](PowerShellSessionResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed succesfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **power_shell_get_command_status**
> PowerShellCommandStatus power_shell_get_command_status(subscription_id, api_version, resource_group_name, node_name, session, pssession, expand=expand)



Gets the status of a command.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.power_shell_command_status import PowerShellCommandStatus
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
    api_instance = openapi_client.PowerShellApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.
    pssession = 'pssession_example' # str | The PowerShell sessionId from the user.
    expand = 'expand_example' # str | Gets current output from an ongoing call. (optional)

    try:
        api_response = api_instance.power_shell_get_command_status(subscription_id, api_version, resource_group_name, node_name, session, pssession, expand=expand)
        print("The response of PowerShellApi->power_shell_get_command_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PowerShellApi->power_shell_get_command_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **session** | **str**| The sessionId from the user. | 
 **pssession** | **str**| The PowerShell sessionId from the user. | 
 **expand** | **str**| Gets current output from an ongoing call. | [optional] 

### Return type

[**PowerShellCommandStatus**](PowerShellCommandStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **power_shell_invoke_command**
> PowerShellCommandResults power_shell_invoke_command(subscription_id, api_version, resource_group_name, node_name, session, pssession, power_shell_command_parameters)



Creates a PowerShell script and invokes it.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.power_shell_command_parameters import PowerShellCommandParameters
from openapi_client.models.power_shell_command_results import PowerShellCommandResults
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
    api_instance = openapi_client.PowerShellApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.
    pssession = 'pssession_example' # str | The PowerShell sessionId from the user.
    power_shell_command_parameters = openapi_client.PowerShellCommandParameters() # PowerShellCommandParameters | Parameters supplied to the Invoke PowerShell Command operation.

    try:
        api_response = api_instance.power_shell_invoke_command(subscription_id, api_version, resource_group_name, node_name, session, pssession, power_shell_command_parameters)
        print("The response of PowerShellApi->power_shell_invoke_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PowerShellApi->power_shell_invoke_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **session** | **str**| The sessionId from the user. | 
 **pssession** | **str**| The PowerShell sessionId from the user. | 
 **power_shell_command_parameters** | [**PowerShellCommandParameters**](PowerShellCommandParameters.md)| Parameters supplied to the Invoke PowerShell Command operation. | 

### Return type

[**PowerShellCommandResults**](PowerShellCommandResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **power_shell_list_session**
> PowerShellSessionResources power_shell_list_session(subscription_id, api_version, resource_group_name, node_name, session)



Gets a list of the active sessions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.power_shell_session_resources import PowerShellSessionResources
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
    api_instance = openapi_client.PowerShellApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.

    try:
        api_response = api_instance.power_shell_list_session(subscription_id, api_version, resource_group_name, node_name, session)
        print("The response of PowerShellApi->power_shell_list_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PowerShellApi->power_shell_list_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **session** | **str**| The sessionId from the user. | 

### Return type

[**PowerShellSessionResources**](PowerShellSessionResources.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **power_shell_tab_completion**
> PowerShellTabCompletionResults power_shell_tab_completion(subscription_id, api_version, resource_group_name, node_name, session, pssession, power_shell_tab_completion_paramters)



Gets tab completion values for a command.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.power_shell_tab_completion_parameters import PowerShellTabCompletionParameters
from openapi_client.models.power_shell_tab_completion_results import PowerShellTabCompletionResults
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
    api_instance = openapi_client.PowerShellApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.
    pssession = 'pssession_example' # str | The PowerShell sessionId from the user.
    power_shell_tab_completion_paramters = openapi_client.PowerShellTabCompletionParameters() # PowerShellTabCompletionParameters | Parameters supplied to the tab completion call.

    try:
        api_response = api_instance.power_shell_tab_completion(subscription_id, api_version, resource_group_name, node_name, session, pssession, power_shell_tab_completion_paramters)
        print("The response of PowerShellApi->power_shell_tab_completion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PowerShellApi->power_shell_tab_completion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **session** | **str**| The sessionId from the user. | 
 **pssession** | **str**| The PowerShell sessionId from the user. | 
 **power_shell_tab_completion_paramters** | [**PowerShellTabCompletionParameters**](PowerShellTabCompletionParameters.md)| Parameters supplied to the tab completion call. | 

### Return type

[**PowerShellTabCompletionResults**](PowerShellTabCompletionResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was succesfully completed. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **power_shell_update_command**
> PowerShellCommandResults power_shell_update_command(subscription_id, api_version, resource_group_name, node_name, session, pssession)



Updates a running PowerShell command with more data.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.power_shell_command_results import PowerShellCommandResults
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
    api_instance = openapi_client.PowerShellApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.
    pssession = 'pssession_example' # str | The PowerShell sessionId from the user.

    try:
        api_response = api_instance.power_shell_update_command(subscription_id, api_version, resource_group_name, node_name, session, pssession)
        print("The response of PowerShellApi->power_shell_update_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PowerShellApi->power_shell_update_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **session** | **str**| The sessionId from the user. | 
 **pssession** | **str**| The PowerShell sessionId from the user. | 

### Return type

[**PowerShellCommandResults**](PowerShellCommandResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

