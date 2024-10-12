# openapi_client.SessionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**session_create**](SessionsApi.md#session_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session} | 
[**session_delete**](SessionsApi.md#session_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session} | 
[**session_get**](SessionsApi.md#session_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName}/sessions/{session} | 


# **session_create**
> SessionResource session_create(subscription_id, api_version, resource_group_name, node_name, session, session_parameters)



Creates a session for a node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.session_parameters import SessionParameters
from openapi_client.models.session_resource import SessionResource
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
    api_instance = openapi_client.SessionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.
    session_parameters = openapi_client.SessionParameters() # SessionParameters | Parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.session_create(subscription_id, api_version, resource_group_name, node_name, session, session_parameters)
        print("The response of SessionsApi->session_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->session_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **session** | **str**| The sessionId from the user. | 
 **session_parameters** | [**SessionParameters**](SessionParameters.md)| Parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**SessionResource**](SessionResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**201** | Created: the session was created. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_delete**
> session_delete(subscription_id, api_version, resource_group_name, node_name, session)



Deletes a session for a node.

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
    api_instance = openapi_client.SessionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.

    try:
        api_instance.session_delete(subscription_id, api_version, resource_group_name, node_name, session)
    except Exception as e:
        print("Exception when calling SessionsApi->session_delete: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**204** | The request is well formed but the resource does not exist. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_get**
> SessionResource session_get(subscription_id, api_version, resource_group_name, node_name, session)



Gets a session for a node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.session_resource import SessionResource
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
    api_instance = openapi_client.SessionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    session = 'session_example' # str | The sessionId from the user.

    try:
        api_response = api_instance.session_get(subscription_id, api_version, resource_group_name, node_name, session)
        print("The response of SessionsApi->session_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->session_get: %s\n" % e)
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

[**SessionResource**](SessionResource.md)

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

