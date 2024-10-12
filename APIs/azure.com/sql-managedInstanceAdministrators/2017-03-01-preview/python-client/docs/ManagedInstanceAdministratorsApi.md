# openapi_client.ManagedInstanceAdministratorsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_instance_administrators_create_or_update**](ManagedInstanceAdministratorsApi.md#managed_instance_administrators_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/administrators/{administratorName} | 
[**managed_instance_administrators_delete**](ManagedInstanceAdministratorsApi.md#managed_instance_administrators_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/administrators/{administratorName} | 
[**managed_instance_administrators_get**](ManagedInstanceAdministratorsApi.md#managed_instance_administrators_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/administrators/{administratorName} | 
[**managed_instance_administrators_list_by_instance**](ManagedInstanceAdministratorsApi.md#managed_instance_administrators_list_by_instance) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/administrators | 


# **managed_instance_administrators_create_or_update**
> ManagedInstanceAdministrator managed_instance_administrators_create_or_update(resource_group_name, managed_instance_name, administrator_name, subscription_id, api_version, parameters)



Creates or updates a managed instance administrator.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_administrator import ManagedInstanceAdministrator
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
    api_instance = openapi_client.ManagedInstanceAdministratorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    administrator_name = 'administrator_name_example' # str | The requested administrator name.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedInstanceAdministrator() # ManagedInstanceAdministrator | The requested administrator parameters.

    try:
        api_response = api_instance.managed_instance_administrators_create_or_update(resource_group_name, managed_instance_name, administrator_name, subscription_id, api_version, parameters)
        print("The response of ManagedInstanceAdministratorsApi->managed_instance_administrators_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstanceAdministratorsApi->managed_instance_administrators_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **administrator_name** | **str**| The requested administrator name. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedInstanceAdministrator**](ManagedInstanceAdministrator.md)| The requested administrator parameters. | 

### Return type

[**ManagedInstanceAdministrator**](ManagedInstanceAdministrator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the managed instance administrator. |  -  |
**201** | Successfully created the managed instance administrator. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidManagedServerAdministratorType - Invalid administrator type specified in properties.   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 400 InvalidLoginName - The provided login name is invalid.   * 400 PrincipalNotFoundInTenant - AzureAD Lookup returned no results for this name.   * 400 ManagedInstanceIsBusy - Managed Instance is busy with another request.   * 400 InvalidPrincipalType - This principal type is not supported in Windows Azure SQL Database.   * 400 TenantNotFoundInActiveDirectory - Tenant is not available in active directory.   * 400 InvalidUsername - Supplied user name contains invalid characters.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ManagedInstanceNotInSubscriptionResourceGroup - Specified managed instance does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 500 ActiveDirectoryLookupTimedOut - The operation could not be completed at this time. Please try again later.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instance_administrators_delete**
> managed_instance_administrators_delete(resource_group_name, managed_instance_name, administrator_name, subscription_id, api_version)



Deletes a managed instance administrator.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.ManagedInstanceAdministratorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    administrator_name = 'administrator_name_example' # str | The administrator name.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.managed_instance_administrators_delete(resource_group_name, managed_instance_name, administrator_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ManagedInstanceAdministratorsApi->managed_instance_administrators_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **administrator_name** | **str**| The administrator name. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the managed instance administrator. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidManagedServerAdministratorType - Invalid administrator type specified in properties.   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 400 InvalidLoginName - The provided login name is invalid.   * 400 PrincipalNotFoundInTenant - AzureAD Lookup returned no results for this name.   * 400 ManagedInstanceIsBusy - Managed Instance is busy with another request.   * 400 InvalidPrincipalType - This principal type is not supported in Windows Azure SQL Database.   * 400 TenantNotFoundInActiveDirectory - Tenant is not available in active directory.   * 400 InvalidUsername - Supplied user name contains invalid characters.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ManagedInstanceNotInSubscriptionResourceGroup - Specified managed instance does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 500 ActiveDirectoryLookupTimedOut - The operation could not be completed at this time. Please try again later.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instance_administrators_get**
> ManagedInstanceAdministrator managed_instance_administrators_get(resource_group_name, managed_instance_name, administrator_name, subscription_id, api_version)



Gets a managed instance administrator.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_administrator import ManagedInstanceAdministrator
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
    api_instance = openapi_client.ManagedInstanceAdministratorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    administrator_name = 'administrator_name_example' # str | The administrator name.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_instance_administrators_get(resource_group_name, managed_instance_name, administrator_name, subscription_id, api_version)
        print("The response of ManagedInstanceAdministratorsApi->managed_instance_administrators_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstanceAdministratorsApi->managed_instance_administrators_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **administrator_name** | **str**| The administrator name. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedInstanceAdministrator**](ManagedInstanceAdministrator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified managed instance administrator. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidManagedServerAdministratorType - Invalid administrator type specified in properties.   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ManagedInstanceNotInSubscriptionResourceGroup - Specified managed instance does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instance_administrators_list_by_instance**
> ManagedInstanceAdministratorListResult managed_instance_administrators_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)



Gets a list of managed instance administrators.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_administrator_list_result import ManagedInstanceAdministratorListResult
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
    api_instance = openapi_client.ManagedInstanceAdministratorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_instance_administrators_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)
        print("The response of ManagedInstanceAdministratorsApi->managed_instance_administrators_list_by_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstanceAdministratorsApi->managed_instance_administrators_list_by_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedInstanceAdministratorListResult**](ManagedInstanceAdministratorListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of managed instance administrators. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ManagedInstanceNotInSubscriptionResourceGroup - Specified managed instance does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

