# openapi_client.SqlServerRegistrationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sql_server_registrations_create_or_update**](SqlServerRegistrationsApi.md#sql_server_registrations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName} | 
[**sql_server_registrations_delete**](SqlServerRegistrationsApi.md#sql_server_registrations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName} | 
[**sql_server_registrations_get**](SqlServerRegistrationsApi.md#sql_server_registrations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName} | 
[**sql_server_registrations_list**](SqlServerRegistrationsApi.md#sql_server_registrations_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AzureData/sqlServerRegistrations | 
[**sql_server_registrations_list_by_resource_group**](SqlServerRegistrationsApi.md#sql_server_registrations_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations | 
[**sql_server_registrations_update**](SqlServerRegistrationsApi.md#sql_server_registrations_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName} | 


# **sql_server_registrations_create_or_update**
> SqlServerRegistration sql_server_registrations_create_or_update(resource_group_name, sql_server_registration_name, subscription_id, api_version, parameters)



Creates or updates a SQL Server registration.

### Example


```python
import openapi_client
from openapi_client.models.sql_server_registration import SqlServerRegistration
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
    api_instance = openapi_client.SqlServerRegistrationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_server_registration_name = 'sql_server_registration_name_example' # str | Name of the SQL Server registration.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    parameters = openapi_client.SqlServerRegistration() # SqlServerRegistration | The SQL Server registration to be created or updated.

    try:
        api_response = api_instance.sql_server_registrations_create_or_update(resource_group_name, sql_server_registration_name, subscription_id, api_version, parameters)
        print("The response of SqlServerRegistrationsApi->sql_server_registrations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlServerRegistrationsApi->sql_server_registrations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_server_registration_name** | **str**| Name of the SQL Server registration. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **parameters** | [**SqlServerRegistration**](SqlServerRegistration.md)| The SQL Server registration to be created or updated. | 

### Return type

[**SqlServerRegistration**](SqlServerRegistration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the SQL Server registration. |  -  |
**201** | Successfully created the SQL Server registration. |  -  |
**0** | *** Error Responses: ***   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 InvalidCrossSubscriptionVmMove - Invalid cross subscription move of resource.   * 400 TinaGroupUpdateFailVmAttached - SQL Server registration cannot be updated as it has attached a SQL Server.   * 400 InvalidSqlImageOffer - Provided SQL image offer is invalid.   * 400 InvalidSqlSku - Provided SQL sku is invalid.   * 400 OuPathAndDomainMismatch - OU path is not within the domain provided.   * 400 InvalidAccountNameFormat - Account name format is invalid.   * 400 CloudWitnessUnsupported - For Windows Server 2012R2 setup cloud witness is not allowed.   * 400 FileShareWitnessDisAllowed - For Windows Server 2016 and beyond setup, file share witness is not allowed.   * 400 InvalidStorageAccountUrl - Invalid storage account url.   * 400 TinaGroupNameTooLong - SQL Server registration name cannot exceed 15 characters.   * 400 InvalidTinaGroupName - Invalid SQL Server registration name.   * 400 TinaGroupNotEmpty - SQL Server registration is not empty.   * 400 TinaGroupUpdateNotAllowed - Update to SQL Server registration is not allowed.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveTINAGroupInResourceGroup - Subscription does not have SQL Server registration in resource group.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_server_registrations_delete**
> sql_server_registrations_delete(resource_group_name, sql_server_registration_name, subscription_id, api_version)



Deletes a SQL Server registration.

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
    api_instance = openapi_client.SqlServerRegistrationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_server_registration_name = 'sql_server_registration_name_example' # str | Name of the SQL Server registration.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_instance.sql_server_registrations_delete(resource_group_name, sql_server_registration_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SqlServerRegistrationsApi->sql_server_registrations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_server_registration_name** | **str**| Name of the SQL Server registration. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

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
**200** | Successfully deleted the SQL Server registration. |  -  |
**204** | The specified SQL Server registration does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 InvalidCrossSubscriptionVmMove - Invalid cross subscription move of resource.   * 400 TinaGroupUpdateFailVmAttached - SQL Server registration cannot be updated as it has attached a SQL Server.   * 400 InvalidSqlImageOffer - Provided SQL image offer is invalid.   * 400 InvalidSqlSku - Provided SQL sku is invalid.   * 400 OuPathAndDomainMismatch - OU path is not within the domain provided.   * 400 InvalidAccountNameFormat - Account name format is invalid.   * 400 CloudWitnessUnsupported - For Windows Server 2012R2 setup cloud witness is not allowed.   * 400 FileShareWitnessDisAllowed - For Windows Server 2016 and beyond setup, file share witness is not allowed.   * 400 InvalidStorageAccountUrl - Invalid storage account url.   * 400 TinaGroupNameTooLong - SQL Server registration name cannot exceed 15 characters.   * 400 InvalidTinaGroupName - Invalid SQL Server registration name.   * 400 TinaGroupNotEmpty - SQL Server registration is not empty.   * 400 TinaGroupUpdateNotAllowed - Update to SQL Server registration is not allowed.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveTINAGroupInResourceGroup - Subscription does not have SQL Server registration in resource group.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_server_registrations_get**
> SqlServerRegistration sql_server_registrations_get(resource_group_name, sql_server_registration_name, subscription_id, api_version)



Gets a SQL Server registration.

### Example


```python
import openapi_client
from openapi_client.models.sql_server_registration import SqlServerRegistration
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
    api_instance = openapi_client.SqlServerRegistrationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_server_registration_name = 'sql_server_registration_name_example' # str | Name of the SQL Server registration.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.sql_server_registrations_get(resource_group_name, sql_server_registration_name, subscription_id, api_version)
        print("The response of SqlServerRegistrationsApi->sql_server_registrations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlServerRegistrationsApi->sql_server_registrations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_server_registration_name** | **str**| Name of the SQL Server registration. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**SqlServerRegistration**](SqlServerRegistration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the SQL Server registration. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 InvalidCrossSubscriptionVmMove - Invalid cross subscription move of resource.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_server_registrations_list**
> SqlServerRegistrationListResult sql_server_registrations_list(subscription_id, api_version)



Gets all SQL Server registrations in a subscription.

### Example


```python
import openapi_client
from openapi_client.models.sql_server_registration_list_result import SqlServerRegistrationListResult
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
    api_instance = openapi_client.SqlServerRegistrationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.sql_server_registrations_list(subscription_id, api_version)
        print("The response of SqlServerRegistrationsApi->sql_server_registrations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlServerRegistrationsApi->sql_server_registrations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**SqlServerRegistrationListResult**](SqlServerRegistrationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved all SQL Server registrations in the subscription. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 InvalidCrossSubscriptionVmMove - Invalid cross subscription move of resource.   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_server_registrations_list_by_resource_group**
> SqlServerRegistrationListResult sql_server_registrations_list_by_resource_group(resource_group_name, subscription_id, api_version)



Gets all SQL Server registrations in a resource group.

### Example


```python
import openapi_client
from openapi_client.models.sql_server_registration_list_result import SqlServerRegistrationListResult
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
    api_instance = openapi_client.SqlServerRegistrationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.sql_server_registrations_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of SqlServerRegistrationsApi->sql_server_registrations_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlServerRegistrationsApi->sql_server_registrations_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**SqlServerRegistrationListResult**](SqlServerRegistrationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved all SQL Server registrations in the resource group. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_server_registrations_update**
> SqlServerRegistration sql_server_registrations_update(resource_group_name, sql_server_registration_name, subscription_id, api_version, parameters)



Updates SQL Server Registration tags.

### Example


```python
import openapi_client
from openapi_client.models.sql_server_registration import SqlServerRegistration
from openapi_client.models.sql_server_registration_update import SqlServerRegistrationUpdate
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
    api_instance = openapi_client.SqlServerRegistrationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_server_registration_name = 'sql_server_registration_name_example' # str | Name of the SQL Server registration.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    parameters = openapi_client.SqlServerRegistrationUpdate() # SqlServerRegistrationUpdate | The SQL Server Registration.

    try:
        api_response = api_instance.sql_server_registrations_update(resource_group_name, sql_server_registration_name, subscription_id, api_version, parameters)
        print("The response of SqlServerRegistrationsApi->sql_server_registrations_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlServerRegistrationsApi->sql_server_registrations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_server_registration_name** | **str**| Name of the SQL Server registration. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **parameters** | [**SqlServerRegistrationUpdate**](SqlServerRegistrationUpdate.md)| The SQL Server Registration. | 

### Return type

[**SqlServerRegistration**](SqlServerRegistration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the SQL Server Registration. |  -  |
**0** | *** Error Responses: ***   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 InvalidCrossSubscriptionVmMove - Invalid cross subscription move of resource.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 404 ResourceNotFound - The requested resource was not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

