# openapi_client.RecommendedActionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recommended_actions_get**](RecommendedActionsApi.md#recommended_actions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/advisors/{advisorName}/recommendedActions/{recommendedActionName} | 
[**recommended_actions_list_by_server**](RecommendedActionsApi.md#recommended_actions_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/advisors/{advisorName}/recommendedActions | 


# **recommended_actions_get**
> RecommendationAction recommended_actions_get(api_version, subscription_id, resource_group_name, server_name, advisor_name, recommended_action_name)



Retrieve recommended actions from the advisor.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recommendation_action import RecommendationAction
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
    api_instance = openapi_client.RecommendedActionsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    advisor_name = 'advisor_name_example' # str | The advisor name for recommendation action.
    recommended_action_name = 'recommended_action_name_example' # str | The recommended action name.

    try:
        api_response = api_instance.recommended_actions_get(api_version, subscription_id, resource_group_name, server_name, advisor_name, recommended_action_name)
        print("The response of RecommendedActionsApi->recommended_actions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendedActionsApi->recommended_actions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **advisor_name** | **str**| The advisor name for recommendation action. | 
 **recommended_action_name** | **str**| The recommended action name. | 

### Return type

[**RecommendationAction**](RecommendationAction.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommended_actions_list_by_server**
> RecommendationActionsResultList recommended_actions_list_by_server(api_version, subscription_id, resource_group_name, server_name, advisor_name, session_id=session_id)



Retrieve recommended actions from the advisor.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recommendation_actions_result_list import RecommendationActionsResultList
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
    api_instance = openapi_client.RecommendedActionsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    advisor_name = 'advisor_name_example' # str | The advisor name for recommendation action.
    session_id = 'session_id_example' # str | The recommendation action session identifier. (optional)

    try:
        api_response = api_instance.recommended_actions_list_by_server(api_version, subscription_id, resource_group_name, server_name, advisor_name, session_id=session_id)
        print("The response of RecommendedActionsApi->recommended_actions_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendedActionsApi->recommended_actions_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **advisor_name** | **str**| The advisor name for recommendation action. | 
 **session_id** | **str**| The recommendation action session identifier. | [optional] 

### Return type

[**RecommendationActionsResultList**](RecommendationActionsResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

