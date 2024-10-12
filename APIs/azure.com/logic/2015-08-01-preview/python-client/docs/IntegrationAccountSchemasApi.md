# openapi_client.IntegrationAccountSchemasApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_account_schemas_create_or_update**](IntegrationAccountSchemasApi.md#integration_account_schemas_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName} | 
[**integration_account_schemas_delete**](IntegrationAccountSchemasApi.md#integration_account_schemas_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName} | 
[**integration_account_schemas_get**](IntegrationAccountSchemasApi.md#integration_account_schemas_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName} | 
[**integration_account_schemas_list**](IntegrationAccountSchemasApi.md#integration_account_schemas_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas | 


# **integration_account_schemas_create_or_update**
> IntegrationAccountSchema integration_account_schemas_create_or_update(subscription_id, resource_group_name, integration_account_name, schema_name, api_version, var_schema)



Creates or updates an integration account schema.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_schema import IntegrationAccountSchema
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
    api_instance = openapi_client.IntegrationAccountSchemasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    schema_name = 'schema_name_example' # str | The integration account schema name.
    api_version = 'api_version_example' # str | The API version.
    var_schema = openapi_client.IntegrationAccountSchema() # IntegrationAccountSchema | The integration account schema.

    try:
        api_response = api_instance.integration_account_schemas_create_or_update(subscription_id, resource_group_name, integration_account_name, schema_name, api_version, var_schema)
        print("The response of IntegrationAccountSchemasApi->integration_account_schemas_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountSchemasApi->integration_account_schemas_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **schema_name** | **str**| The integration account schema name. | 
 **api_version** | **str**| The API version. | 
 **var_schema** | [**IntegrationAccountSchema**](IntegrationAccountSchema.md)| The integration account schema. | 

### Return type

[**IntegrationAccountSchema**](IntegrationAccountSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_schemas_delete**
> integration_account_schemas_delete(subscription_id, resource_group_name, integration_account_name, schema_name, api_version)



Deletes an integration account schema.

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
    api_instance = openapi_client.IntegrationAccountSchemasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    schema_name = 'schema_name_example' # str | The integration account schema name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_account_schemas_delete(subscription_id, resource_group_name, integration_account_name, schema_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountSchemasApi->integration_account_schemas_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **schema_name** | **str**| The integration account schema name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_schemas_get**
> IntegrationAccountSchema integration_account_schemas_get(subscription_id, resource_group_name, integration_account_name, schema_name, api_version)



Gets an integration account schema.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_schema import IntegrationAccountSchema
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
    api_instance = openapi_client.IntegrationAccountSchemasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    schema_name = 'schema_name_example' # str | The integration account schema name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_account_schemas_get(subscription_id, resource_group_name, integration_account_name, schema_name, api_version)
        print("The response of IntegrationAccountSchemasApi->integration_account_schemas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountSchemasApi->integration_account_schemas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **schema_name** | **str**| The integration account schema name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationAccountSchema**](IntegrationAccountSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_schemas_list**
> IntegrationAccountSchemaListResult integration_account_schemas_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)



Gets a list of integration account schemas.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_schema_list_result import IntegrationAccountSchemaListResult
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
    api_instance = openapi_client.IntegrationAccountSchemasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.integration_account_schemas_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)
        print("The response of IntegrationAccountSchemasApi->integration_account_schemas_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountSchemasApi->integration_account_schemas_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**IntegrationAccountSchemaListResult**](IntegrationAccountSchemaListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

