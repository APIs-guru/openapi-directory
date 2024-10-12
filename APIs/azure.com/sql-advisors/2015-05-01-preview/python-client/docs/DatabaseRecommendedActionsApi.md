# openapi_client.DatabaseRecommendedActionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**database_recommended_actions_get**](DatabaseRecommendedActionsApi.md#database_recommended_actions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}/recommendedActions/{recommendedActionName} | 
[**database_recommended_actions_list_by_database_advisor**](DatabaseRecommendedActionsApi.md#database_recommended_actions_list_by_database_advisor) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}/recommendedActions | 
[**database_recommended_actions_update**](DatabaseRecommendedActionsApi.md#database_recommended_actions_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}/recommendedActions/{recommendedActionName} | 


# **database_recommended_actions_get**
> RecommendedAction database_recommended_actions_get(resource_group_name, server_name, database_name, advisor_name, recommended_action_name, subscription_id, api_version)



Gets a database recommended action.

### Example


```python
import openapi_client
from openapi_client.models.recommended_action import RecommendedAction
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabaseRecommendedActionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    advisor_name = 'advisor_name_example' # str | The name of the Database Advisor.
    recommended_action_name = 'recommended_action_name_example' # str | The name of Database Recommended Action.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_recommended_actions_get(resource_group_name, server_name, database_name, advisor_name, recommended_action_name, subscription_id, api_version)
        print("The response of DatabaseRecommendedActionsApi->database_recommended_actions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabaseRecommendedActionsApi->database_recommended_actions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **advisor_name** | **str**| The name of the Database Advisor. | 
 **recommended_action_name** | **str**| The name of Database Recommended Action. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**RecommendedAction**](RecommendedAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved details of specified database recommended action. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - The requested database was not found   * 404 SubscriptionDoesNotHaveElasticPool - The requested elastic pool was not found   * 404 AdvisorNotFound - The requested advisor was not found.   * 404 RecommendedActionNotFound - The requested recommended action was not found.   * 404 AdvisorNotFound - The requested advisor was not found.   * 404 RecommendedActionNotFound - The requested recommended action was not found.   * 405 NotSupported - This functionality is not supported.   * 409 Conflict - Request could not be processed because of conflict in the request.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_recommended_actions_list_by_database_advisor**
> List[RecommendedAction] database_recommended_actions_list_by_database_advisor(resource_group_name, server_name, database_name, advisor_name, subscription_id, api_version)



Gets list of Database Recommended Actions.

### Example


```python
import openapi_client
from openapi_client.models.recommended_action import RecommendedAction
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabaseRecommendedActionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    advisor_name = 'advisor_name_example' # str | The name of the Database Advisor.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_recommended_actions_list_by_database_advisor(resource_group_name, server_name, database_name, advisor_name, subscription_id, api_version)
        print("The response of DatabaseRecommendedActionsApi->database_recommended_actions_list_by_database_advisor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabaseRecommendedActionsApi->database_recommended_actions_list_by_database_advisor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **advisor_name** | **str**| The name of the Database Advisor. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**List[RecommendedAction]**](RecommendedAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of database recommended actions. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - The requested database was not found   * 404 SubscriptionDoesNotHaveElasticPool - The requested elastic pool was not found   * 404 AdvisorNotFound - The requested advisor was not found.   * 404 RecommendedActionNotFound - The requested recommended action was not found.   * 404 AdvisorNotFound - The requested advisor was not found.   * 404 RecommendedActionNotFound - The requested recommended action was not found.   * 405 NotSupported - This functionality is not supported.   * 409 Conflict - Request could not be processed because of conflict in the request.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_recommended_actions_update**
> RecommendedAction database_recommended_actions_update(resource_group_name, server_name, database_name, advisor_name, recommended_action_name, subscription_id, api_version, parameters)



Updates a database recommended action.

### Example


```python
import openapi_client
from openapi_client.models.recommended_action import RecommendedAction
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabaseRecommendedActionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    advisor_name = 'advisor_name_example' # str | The name of the Database Advisor.
    recommended_action_name = 'recommended_action_name_example' # str | The name of Database Recommended Action.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.RecommendedAction() # RecommendedAction | The requested recommended action resource state.

    try:
        api_response = api_instance.database_recommended_actions_update(resource_group_name, server_name, database_name, advisor_name, recommended_action_name, subscription_id, api_version, parameters)
        print("The response of DatabaseRecommendedActionsApi->database_recommended_actions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabaseRecommendedActionsApi->database_recommended_actions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **advisor_name** | **str**| The name of the Database Advisor. | 
 **recommended_action_name** | **str**| The name of Database Recommended Action. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**RecommendedAction**](RecommendedAction.md)| The requested recommended action resource state. | 

### Return type

[**RecommendedAction**](RecommendedAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the specified database recommended action. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidRecommendedActionUpsertRequest - The update recommended action request body does not exist or has no properties or state object.   * 400 InvalidRecommendedActionState - The specified state for recommended action is invalid   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - The requested database was not found   * 404 SubscriptionDoesNotHaveElasticPool - The requested elastic pool was not found   * 404 AdvisorNotFound - The requested advisor was not found.   * 404 RecommendedActionNotFound - The requested recommended action was not found.   * 404 AdvisorNotFound - The requested advisor was not found.   * 404 RecommendedActionNotFound - The requested recommended action was not found.   * 405 NotSupported - This functionality is not supported.   * 409 Conflict - Request could not be processed because of conflict in the request.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

