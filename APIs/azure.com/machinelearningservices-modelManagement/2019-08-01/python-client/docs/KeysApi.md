# openapi_client.KeysApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_list_service_keys_0**](KeysApi.md#services_list_service_keys_0) | **POST** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}/listkeys | Lists Service keys.
[**services_regenerate_service_keys_0**](KeysApi.md#services_regenerate_service_keys_0) | **POST** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}/regenerateKeys | Regenerate Service Keys.


# **services_list_service_keys_0**
> AuthKeys services_list_service_keys_0(subscription_id, resource_group, workspace, id)

Lists Service keys.

Gets a list of Service keys.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auth_keys import AuthKeys
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Service Id.

    try:
        # Lists Service keys.
        api_response = api_instance.services_list_service_keys_0(subscription_id, resource_group, workspace, id)
        print("The response of KeysApi->services_list_service_keys_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->services_list_service_keys_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Service Id. | 

### Return type

[**AuthKeys**](AuthKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_regenerate_service_keys_0**
> AuthKeys services_regenerate_service_keys_0(subscription_id, resource_group, workspace, id, request)

Regenerate Service Keys.

Regenerate and return the Service keys.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auth_keys import AuthKeys
from openapi_client.models.regenerate_service_keys_request import RegenerateServiceKeysRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Service Id.
    request = openapi_client.RegenerateServiceKeysRequest() # RegenerateServiceKeysRequest | The payload that is used to regenerate keys.

    try:
        # Regenerate Service Keys.
        api_response = api_instance.services_regenerate_service_keys_0(subscription_id, resource_group, workspace, id, request)
        print("The response of KeysApi->services_regenerate_service_keys_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->services_regenerate_service_keys_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Service Id. | 
 **request** | [**RegenerateServiceKeysRequest**](RegenerateServiceKeysRequest.md)| The payload that is used to regenerate keys. | 

### Return type

[**AuthKeys**](AuthKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**202** | The request was accepted. The header &#39;Operation-Location&#39; contains the async operation location URL.  Accessing this URL with a GET call will return the status of the background task. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

