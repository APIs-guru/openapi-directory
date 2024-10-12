# openapi_client.ServerAdvisorsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_advisors_get**](ServerAdvisorsApi.md#server_advisors_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advisors/{advisorName} | 
[**server_advisors_list_by_server**](ServerAdvisorsApi.md#server_advisors_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advisors | 
[**server_advisors_update**](ServerAdvisorsApi.md#server_advisors_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advisors/{advisorName} | 


# **server_advisors_get**
> Advisor server_advisors_get(resource_group_name, server_name, advisor_name, subscription_id, api_version)



Gets a server advisor.

### Example


```python
import openapi_client
from openapi_client.models.advisor import Advisor
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
    api_instance = openapi_client.ServerAdvisorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    advisor_name = 'advisor_name_example' # str | The name of the Server Advisor.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_advisors_get(resource_group_name, server_name, advisor_name, subscription_id, api_version)
        print("The response of ServerAdvisorsApi->server_advisors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAdvisorsApi->server_advisors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **advisor_name** | **str**| The name of the Server Advisor. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**Advisor**](Advisor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved details of specified server advisor. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - The requested database was not found   * 404 SubscriptionDoesNotHaveElasticPool - The requested elastic pool was not found   * 404 AdvisorNotFound - The requested advisor was not found.   * 405 NotSupported - This functionality is not supported.   * 409 Conflict - Request could not be processed because of conflict in the request.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_advisors_list_by_server**
> List[Advisor] server_advisors_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Gets a list of server advisors.

### Example


```python
import openapi_client
from openapi_client.models.advisor import Advisor
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
    api_instance = openapi_client.ServerAdvisorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_advisors_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of ServerAdvisorsApi->server_advisors_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAdvisorsApi->server_advisors_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**List[Advisor]**](Advisor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of server advisors. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - The requested database was not found   * 404 SubscriptionDoesNotHaveElasticPool - The requested elastic pool was not found   * 404 AdvisorNotFound - The requested advisor was not found.   * 405 NotSupported - This functionality is not supported.   * 409 Conflict - Request could not be processed because of conflict in the request.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_advisors_update**
> Advisor server_advisors_update(resource_group_name, server_name, advisor_name, subscription_id, api_version, parameters)



Updates a server advisor.

### Example


```python
import openapi_client
from openapi_client.models.advisor import Advisor
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
    api_instance = openapi_client.ServerAdvisorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    advisor_name = 'advisor_name_example' # str | The name of the Server Advisor.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.Advisor() # Advisor | The requested advisor resource state.

    try:
        api_response = api_instance.server_advisors_update(resource_group_name, server_name, advisor_name, subscription_id, api_version, parameters)
        print("The response of ServerAdvisorsApi->server_advisors_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAdvisorsApi->server_advisors_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **advisor_name** | **str**| The name of the Server Advisor. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**Advisor**](Advisor.md)| The requested advisor resource state. | 

### Return type

[**Advisor**](Advisor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the specified server advisor. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidAdvisorUpsertRequest - The update advisor request body does not exist or has no properties object.   * 400 InvalidAdvisorAutoExecuteStatus - Specified auto-execute status for the advisor is not allowed.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - The requested database was not found   * 404 SubscriptionDoesNotHaveElasticPool - The requested elastic pool was not found   * 404 AdvisorNotFound - The requested advisor was not found.   * 405 NotSupported - This functionality is not supported.   * 409 Conflict - Request could not be processed because of conflict in the request.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

