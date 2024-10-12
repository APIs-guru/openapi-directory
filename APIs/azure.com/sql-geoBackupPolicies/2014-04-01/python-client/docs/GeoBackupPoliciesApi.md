# openapi_client.GeoBackupPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geo_backup_policies_create_or_update**](GeoBackupPoliciesApi.md#geo_backup_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/geoBackupPolicies/{geoBackupPolicyName} | 
[**geo_backup_policies_get**](GeoBackupPoliciesApi.md#geo_backup_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/geoBackupPolicies/{geoBackupPolicyName} | 
[**geo_backup_policies_list_by_database**](GeoBackupPoliciesApi.md#geo_backup_policies_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/geoBackupPolicies | 


# **geo_backup_policies_create_or_update**
> GeoBackupPolicy geo_backup_policies_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, geo_backup_policy_name, parameters)



Updates a database geo backup policy.

### Example


```python
import openapi_client
from openapi_client.models.geo_backup_policy import GeoBackupPolicy
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
    api_instance = openapi_client.GeoBackupPoliciesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    geo_backup_policy_name = 'geo_backup_policy_name_example' # str | The name of the geo backup policy.
    parameters = openapi_client.GeoBackupPolicy() # GeoBackupPolicy | The required parameters for creating or updating the geo backup policy.

    try:
        api_response = api_instance.geo_backup_policies_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, geo_backup_policy_name, parameters)
        print("The response of GeoBackupPoliciesApi->geo_backup_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeoBackupPoliciesApi->geo_backup_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **geo_backup_policy_name** | **str**| The name of the geo backup policy. | 
 **parameters** | [**GeoBackupPolicy**](GeoBackupPolicy.md)| The required parameters for creating or updating the geo backup policy. | 

### Return type

[**GeoBackupPolicy**](GeoBackupPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **geo_backup_policies_get**
> GeoBackupPolicy geo_backup_policies_get(api_version, subscription_id, resource_group_name, server_name, database_name, geo_backup_policy_name)



Gets a geo backup policy.

### Example


```python
import openapi_client
from openapi_client.models.geo_backup_policy import GeoBackupPolicy
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
    api_instance = openapi_client.GeoBackupPoliciesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    geo_backup_policy_name = 'geo_backup_policy_name_example' # str | The name of the geo backup policy.

    try:
        api_response = api_instance.geo_backup_policies_get(api_version, subscription_id, resource_group_name, server_name, database_name, geo_backup_policy_name)
        print("The response of GeoBackupPoliciesApi->geo_backup_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeoBackupPoliciesApi->geo_backup_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **geo_backup_policy_name** | **str**| The name of the geo backup policy. | 

### Return type

[**GeoBackupPolicy**](GeoBackupPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **geo_backup_policies_list_by_database**
> GeoBackupPolicyListResult geo_backup_policies_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)



Returns a list of geo backup policies.

### Example


```python
import openapi_client
from openapi_client.models.geo_backup_policy_list_result import GeoBackupPolicyListResult
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
    api_instance = openapi_client.GeoBackupPoliciesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.

    try:
        api_response = api_instance.geo_backup_policies_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)
        print("The response of GeoBackupPoliciesApi->geo_backup_policies_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeoBackupPoliciesApi->geo_backup_policies_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 

### Return type

[**GeoBackupPolicyListResult**](GeoBackupPolicyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

