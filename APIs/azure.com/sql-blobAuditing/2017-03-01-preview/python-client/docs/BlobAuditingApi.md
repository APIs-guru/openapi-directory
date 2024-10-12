# openapi_client.BlobAuditingApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**database_blob_auditing_policies_create_or_update**](BlobAuditingApi.md#database_blob_auditing_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName} | 
[**database_blob_auditing_policies_get**](BlobAuditingApi.md#database_blob_auditing_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName} | 
[**database_blob_auditing_policies_list_by_database**](BlobAuditingApi.md#database_blob_auditing_policies_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings | 
[**extended_database_blob_auditing_policies_create_or_update**](BlobAuditingApi.md#extended_database_blob_auditing_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extendedAuditingSettings/{blobAuditingPolicyName} | 
[**extended_database_blob_auditing_policies_get**](BlobAuditingApi.md#extended_database_blob_auditing_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extendedAuditingSettings/{blobAuditingPolicyName} | 
[**extended_server_blob_auditing_policies_create_or_update**](BlobAuditingApi.md#extended_server_blob_auditing_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/extendedAuditingSettings/{blobAuditingPolicyName} | 
[**extended_server_blob_auditing_policies_get**](BlobAuditingApi.md#extended_server_blob_auditing_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/extendedAuditingSettings/{blobAuditingPolicyName} | 
[**server_blob_auditing_policies_create_or_update**](BlobAuditingApi.md#server_blob_auditing_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingSettings/{blobAuditingPolicyName} | 
[**server_blob_auditing_policies_get**](BlobAuditingApi.md#server_blob_auditing_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingSettings/{blobAuditingPolicyName} | 
[**server_blob_auditing_policies_list_by_server**](BlobAuditingApi.md#server_blob_auditing_policies_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingSettings | 


# **database_blob_auditing_policies_create_or_update**
> DatabaseBlobAuditingPolicy database_blob_auditing_policies_create_or_update(resource_group_name, server_name, database_name, blob_auditing_policy_name, subscription_id, api_version, parameters)



Creates or updates a database's blob auditing policy.

### Example


```python
import openapi_client
from openapi_client.models.database_blob_auditing_policy import DatabaseBlobAuditingPolicy
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    blob_auditing_policy_name = 'blob_auditing_policy_name_example' # str | The name of the blob auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.DatabaseBlobAuditingPolicy() # DatabaseBlobAuditingPolicy | The database blob auditing policy.

    try:
        api_response = api_instance.database_blob_auditing_policies_create_or_update(resource_group_name, server_name, database_name, blob_auditing_policy_name, subscription_id, api_version, parameters)
        print("The response of BlobAuditingApi->database_blob_auditing_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->database_blob_auditing_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **blob_auditing_policy_name** | **str**| The name of the blob auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**DatabaseBlobAuditingPolicy**](DatabaseBlobAuditingPolicy.md)| The database blob auditing policy. | 

### Return type

[**DatabaseBlobAuditingPolicy**](DatabaseBlobAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the database blob auditing policy. |  -  |
**201** | Successfully created the database blob auditing policy. |  -  |
**0** | *** Error Responses: ***   * 400 BlobAuditingIsNotSupportedOnResourceType - Blob Auditing is currently not supported for this resource type.   * 400 InvalidDatabaseBlobAuditingPolicyCreateRequest - The create database blob auditing policy request does not exist or has no properties object.   * 400 InvalidBlobAuditActionsAndGroups - Invalid audit actions or action groups.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 BlobAuditingInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 UpdateNotAllowedOnPausedDatabase - User attempted to perform an update on a paused database.   * 400 BlobAuditingInvalidStorageAccountCredentials - The provided storage account or access key is not valid.   * 400 BlobAuditingIsNotSupportedOnGeoDr - Blob auditing can be configured on primary databases only.   * 400 InvalidBlobAuditActionsAndGroupsForDW - Unsupported audit actions or action groups for DW.   * 400 BlobAuditingInsufficientStorageAccountPermissions - Insufficient read or write permissions on the provided storage account.   * 400 BlobAuditingStorageAccountIsDisabled - The provided storage account is disabled.   * 400 InvalidBlobAuditActions - Invalid audit action   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 500 DatabaseIsUnavailable - Loading failed. Please try again later. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_blob_auditing_policies_get**
> DatabaseBlobAuditingPolicy database_blob_auditing_policies_get(resource_group_name, server_name, database_name, blob_auditing_policy_name, subscription_id, api_version)



Gets a database's blob auditing policy.

### Example


```python
import openapi_client
from openapi_client.models.database_blob_auditing_policy import DatabaseBlobAuditingPolicy
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    blob_auditing_policy_name = 'blob_auditing_policy_name_example' # str | The name of the blob auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_blob_auditing_policies_get(resource_group_name, server_name, database_name, blob_auditing_policy_name, subscription_id, api_version)
        print("The response of BlobAuditingApi->database_blob_auditing_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->database_blob_auditing_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **blob_auditing_policy_name** | **str**| The name of the blob auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseBlobAuditingPolicy**](DatabaseBlobAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the database blob auditing policy. |  -  |
**0** | *** Error Responses: ***   * 400 BlobAuditingIsNotSupportedOnResourceType - Blob Auditing is currently not supported for this resource type.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 500 DatabaseIsUnavailable - Loading failed. Please try again later. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_blob_auditing_policies_list_by_database**
> DatabaseBlobAuditingPolicyListResult database_blob_auditing_policies_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)



Lists auditing settings of a database.

### Example


```python
import openapi_client
from openapi_client.models.database_blob_auditing_policy_list_result import DatabaseBlobAuditingPolicyListResult
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_blob_auditing_policies_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of BlobAuditingApi->database_blob_auditing_policies_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->database_blob_auditing_policies_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseBlobAuditingPolicyListResult**](DatabaseBlobAuditingPolicyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved database auditing settings. |  -  |
**0** | *** Error Responses: ***   * 400 BlobAuditingIsNotSupportedOnResourceType - Blob Auditing is currently not supported for this resource type.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 500 DatabaseIsUnavailable - Loading failed. Please try again later. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extended_database_blob_auditing_policies_create_or_update**
> ExtendedDatabaseBlobAuditingPolicy extended_database_blob_auditing_policies_create_or_update(resource_group_name, server_name, database_name, blob_auditing_policy_name, subscription_id, api_version, parameters)



Creates or updates an extended database's blob auditing policy.

### Example


```python
import openapi_client
from openapi_client.models.extended_database_blob_auditing_policy import ExtendedDatabaseBlobAuditingPolicy
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    blob_auditing_policy_name = 'blob_auditing_policy_name_example' # str | The name of the blob auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ExtendedDatabaseBlobAuditingPolicy() # ExtendedDatabaseBlobAuditingPolicy | The extended database blob auditing policy.

    try:
        api_response = api_instance.extended_database_blob_auditing_policies_create_or_update(resource_group_name, server_name, database_name, blob_auditing_policy_name, subscription_id, api_version, parameters)
        print("The response of BlobAuditingApi->extended_database_blob_auditing_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->extended_database_blob_auditing_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **blob_auditing_policy_name** | **str**| The name of the blob auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ExtendedDatabaseBlobAuditingPolicy**](ExtendedDatabaseBlobAuditingPolicy.md)| The extended database blob auditing policy. | 

### Return type

[**ExtendedDatabaseBlobAuditingPolicy**](ExtendedDatabaseBlobAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the extended database blob auditing policy. |  -  |
**201** | Successfully created the extended database blob auditing policy. |  -  |
**0** | *** Error Responses: ***   * 400 BlobAuditingIsNotSupportedOnResourceType - Blob Auditing is currently not supported for this resource type.   * 400 BlobAuditingPredicateExpressionSyntaxError - Invalid value of parameter &#39;predicateExpression&#39;.   * 400 InvalidDatabaseBlobAuditingPolicyCreateRequest - The create database blob auditing policy request does not exist or has no properties object.   * 400 InvalidBlobAuditActionsAndGroups - Invalid audit actions or action groups.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 BlobAuditingPredicateExpressionEmpty - Invalid parameter &#39;predicateExpression&#39;, value can not be empty.   * 400 BlobAuditingInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 UpdateNotAllowedOnPausedDatabase - User attempted to perform an update on a paused database.   * 400 BlobAuditingInvalidStorageAccountCredentials - The provided storage account or access key is not valid.   * 400 BlobAuditingIsNotSupportedOnGeoDr - Blob auditing can be configured on primary databases only.   * 400 InvalidBlobAuditActionsAndGroupsForDW - Unsupported audit actions or action groups for DW.   * 400 BlobAuditingInsufficientStorageAccountPermissions - Insufficient read or write permissions on the provided storage account.   * 400 BlobAuditingStorageAccountIsDisabled - The provided storage account is disabled.   * 400 InvalidBlobAuditActions - Invalid audit action   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 500 DatabaseIsUnavailable - Loading failed. Please try again later. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extended_database_blob_auditing_policies_get**
> ExtendedDatabaseBlobAuditingPolicy extended_database_blob_auditing_policies_get(resource_group_name, server_name, database_name, blob_auditing_policy_name, subscription_id, api_version)



Gets an extended database's blob auditing policy.

### Example


```python
import openapi_client
from openapi_client.models.extended_database_blob_auditing_policy import ExtendedDatabaseBlobAuditingPolicy
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    blob_auditing_policy_name = 'blob_auditing_policy_name_example' # str | The name of the blob auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.extended_database_blob_auditing_policies_get(resource_group_name, server_name, database_name, blob_auditing_policy_name, subscription_id, api_version)
        print("The response of BlobAuditingApi->extended_database_blob_auditing_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->extended_database_blob_auditing_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **blob_auditing_policy_name** | **str**| The name of the blob auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ExtendedDatabaseBlobAuditingPolicy**](ExtendedDatabaseBlobAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the extended database blob auditing policy. |  -  |
**0** | *** Error Responses: ***   * 400 BlobAuditingIsNotSupportedOnResourceType - Blob Auditing is currently not supported for this resource type.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 500 DatabaseIsUnavailable - Loading failed. Please try again later. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extended_server_blob_auditing_policies_create_or_update**
> ExtendedServerBlobAuditingPolicy extended_server_blob_auditing_policies_create_or_update(resource_group_name, server_name, blob_auditing_policy_name, subscription_id, api_version, parameters)



Creates or updates an extended server's blob auditing policy.

### Example


```python
import openapi_client
from openapi_client.models.extended_server_blob_auditing_policy import ExtendedServerBlobAuditingPolicy
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    blob_auditing_policy_name = 'blob_auditing_policy_name_example' # str | The name of the blob auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ExtendedServerBlobAuditingPolicy() # ExtendedServerBlobAuditingPolicy | Properties of extended blob auditing policy

    try:
        api_response = api_instance.extended_server_blob_auditing_policies_create_or_update(resource_group_name, server_name, blob_auditing_policy_name, subscription_id, api_version, parameters)
        print("The response of BlobAuditingApi->extended_server_blob_auditing_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->extended_server_blob_auditing_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **blob_auditing_policy_name** | **str**| The name of the blob auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ExtendedServerBlobAuditingPolicy**](ExtendedServerBlobAuditingPolicy.md)| Properties of extended blob auditing policy | 

### Return type

[**ExtendedServerBlobAuditingPolicy**](ExtendedServerBlobAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the extended auditing settings. |  -  |
**202** | Updating the extended auditing settings is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidServerBlobAuditingPolicyCreateRequest - The create server blob auditing policy request does not exist or has no properties object.   * 400 InvalidBlobAuditActionsAndGroups - Invalid audit actions or action groups.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 BlobAuditingPredicateExpressionEmpty - Invalid parameter &#39;predicateExpression&#39;, value can not be empty.   * 400 InvalidBlobAuditActionsAndGroups - Invalid audit actions or action groups.   * 400 InvalidBlobAuditActions - Invalid audit action   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 409 ServerBlobAuditingPolicyInProgress - Set server blob auditing is already in progress. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extended_server_blob_auditing_policies_get**
> ExtendedServerBlobAuditingPolicy extended_server_blob_auditing_policies_get(resource_group_name, server_name, blob_auditing_policy_name, subscription_id, api_version)



Gets an extended server's blob auditing policy.

### Example


```python
import openapi_client
from openapi_client.models.extended_server_blob_auditing_policy import ExtendedServerBlobAuditingPolicy
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    blob_auditing_policy_name = 'blob_auditing_policy_name_example' # str | The name of the blob auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.extended_server_blob_auditing_policies_get(resource_group_name, server_name, blob_auditing_policy_name, subscription_id, api_version)
        print("The response of BlobAuditingApi->extended_server_blob_auditing_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->extended_server_blob_auditing_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **blob_auditing_policy_name** | **str**| The name of the blob auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ExtendedServerBlobAuditingPolicy**](ExtendedServerBlobAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the extended server blob auditing policy. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_blob_auditing_policies_create_or_update**
> ServerBlobAuditingPolicy server_blob_auditing_policies_create_or_update(resource_group_name, server_name, blob_auditing_policy_name, subscription_id, api_version, parameters)



Creates or updates a server's blob auditing policy.

### Example


```python
import openapi_client
from openapi_client.models.server_blob_auditing_policy import ServerBlobAuditingPolicy
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    blob_auditing_policy_name = 'blob_auditing_policy_name_example' # str | The name of the blob auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ServerBlobAuditingPolicy() # ServerBlobAuditingPolicy | Properties of blob auditing policy

    try:
        api_response = api_instance.server_blob_auditing_policies_create_or_update(resource_group_name, server_name, blob_auditing_policy_name, subscription_id, api_version, parameters)
        print("The response of BlobAuditingApi->server_blob_auditing_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->server_blob_auditing_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **blob_auditing_policy_name** | **str**| The name of the blob auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ServerBlobAuditingPolicy**](ServerBlobAuditingPolicy.md)| Properties of blob auditing policy | 

### Return type

[**ServerBlobAuditingPolicy**](ServerBlobAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the auditing settings. |  -  |
**202** | Updating the auditing settings is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidServerBlobAuditingPolicyCreateRequest - The create server blob auditing policy request does not exist or has no properties object.   * 400 InvalidBlobAuditActionsAndGroups - Invalid audit actions or action groups.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 InvalidBlobAuditActionsAndGroups - Invalid audit actions or action groups.   * 400 InvalidBlobAuditActions - Invalid audit action   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 409 ServerBlobAuditingPolicyInProgress - Set server blob auditing is already in progress. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_blob_auditing_policies_get**
> ServerBlobAuditingPolicy server_blob_auditing_policies_get(resource_group_name, server_name, blob_auditing_policy_name, subscription_id, api_version)



Gets a server's blob auditing policy.

### Example


```python
import openapi_client
from openapi_client.models.server_blob_auditing_policy import ServerBlobAuditingPolicy
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    blob_auditing_policy_name = 'blob_auditing_policy_name_example' # str | The name of the blob auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_blob_auditing_policies_get(resource_group_name, server_name, blob_auditing_policy_name, subscription_id, api_version)
        print("The response of BlobAuditingApi->server_blob_auditing_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->server_blob_auditing_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **blob_auditing_policy_name** | **str**| The name of the blob auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerBlobAuditingPolicy**](ServerBlobAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the server blob auditing policy. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_blob_auditing_policies_list_by_server**
> ServerBlobAuditingPolicyListResult server_blob_auditing_policies_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Lists auditing settings of a server.

### Example


```python
import openapi_client
from openapi_client.models.server_blob_auditing_policy_list_result import ServerBlobAuditingPolicyListResult
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
    api_instance = openapi_client.BlobAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_blob_auditing_policies_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of BlobAuditingApi->server_blob_auditing_policies_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobAuditingApi->server_blob_auditing_policies_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerBlobAuditingPolicyListResult**](ServerBlobAuditingPolicyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved server auditing settings. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

