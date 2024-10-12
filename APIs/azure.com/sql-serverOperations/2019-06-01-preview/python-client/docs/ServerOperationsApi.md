# openapi_client.ServerOperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_operations_list_by_server**](ServerOperationsApi.md#server_operations_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/operations | 


# **server_operations_list_by_server**
> ServerOperationListResult server_operations_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Gets a list of operations performed on the server.

### Example


```python
import openapi_client
from openapi_client.models.server_operation_list_result import ServerOperationListResult
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
    api_instance = openapi_client.ServerOperationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_operations_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of ServerOperationsApi->server_operations_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerOperationsApi->server_operations_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerOperationListResult**](ServerOperationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request for getting server operations has been executed successfully. |  -  |
**0** | *** Error Responses: ***   * 400 NameAlreadyExists - The provided name already exists.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 InvalidLoginName - The provided login name is invalid.   * 400 InvalidUsername - Supplied user name contains invalid characters.   * 400 PasswordTooShort - The provided password is too short   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 PasswordTooLong - The provided password is too long.   * 400 PasswordNotComplex - The provided password is not complex enough.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 400 InvalidLocation - An invalid location was specified.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 TokenTooLong - The provided token is too long.   * 400 ServerNotFound - The requested server was not found.   * 400 RegionDoesNotAllowProvisioning - The selected location is not accepting new Windows Azure SQL Database servers. This may change at a later time.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ServerDisabled - Server is disabled.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 409 ServerAlreadyExists - Duplicate server name.   * 409 ServerDisabled - Server is disabled.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

