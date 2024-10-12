# openapi_client.IntegrationAccountSchemasApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schemas_create_or_update**](IntegrationAccountSchemasApi.md#schemas_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName} | 
[**schemas_delete**](IntegrationAccountSchemasApi.md#schemas_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName} | 
[**schemas_get**](IntegrationAccountSchemasApi.md#schemas_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName} | 
[**schemas_list_by_integration_accounts**](IntegrationAccountSchemasApi.md#schemas_list_by_integration_accounts) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas | 
[**schemas_list_content_callback_url**](IntegrationAccountSchemasApi.md#schemas_list_content_callback_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName}/listContentCallbackUrl | 


# **schemas_create_or_update**
> IntegrationAccountSchema schemas_create_or_update(subscription_id, resource_group_name, integration_account_name, schema_name, api_version, var_schema)



Creates or updates an integration account schema.

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

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
        api_response = api_instance.schemas_create_or_update(subscription_id, resource_group_name, integration_account_name, schema_name, api_version, var_schema)
        print("The response of IntegrationAccountSchemasApi->schemas_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountSchemasApi->schemas_create_or_update: %s\n" % e)
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

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schemas_delete**
> schemas_delete(subscription_id, resource_group_name, integration_account_name, schema_name, api_version)



Deletes an integration account schema.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.IntegrationAccountSchemasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    schema_name = 'schema_name_example' # str | The integration account schema name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.schemas_delete(subscription_id, resource_group_name, integration_account_name, schema_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountSchemasApi->schemas_delete: %s\n" % e)
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

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schemas_get**
> IntegrationAccountSchema schemas_get(subscription_id, resource_group_name, integration_account_name, schema_name, api_version)



Gets an integration account schema.

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

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
        api_response = api_instance.schemas_get(subscription_id, resource_group_name, integration_account_name, schema_name, api_version)
        print("The response of IntegrationAccountSchemasApi->schemas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountSchemasApi->schemas_get: %s\n" % e)
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

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schemas_list_by_integration_accounts**
> IntegrationAccountSchemaListResult schemas_list_by_integration_accounts(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)



Gets a list of integration account schemas.

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationAccountSchemasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. Options for filters include: SchemaType. (optional)

    try:
        api_response = api_instance.schemas_list_by_integration_accounts(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)
        print("The response of IntegrationAccountSchemasApi->schemas_list_by_integration_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountSchemasApi->schemas_list_by_integration_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. Options for filters include: SchemaType. | [optional] 

### Return type

[**IntegrationAccountSchemaListResult**](IntegrationAccountSchemaListResult.md)

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

# **schemas_list_content_callback_url**
> WorkflowTriggerCallbackUrl schemas_list_content_callback_url(subscription_id, resource_group_name, integration_account_name, schema_name, api_version, list_content_callback_url)



Get the content callback url.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_callback_url_parameters import GetCallbackUrlParameters
from openapi_client.models.workflow_trigger_callback_url import WorkflowTriggerCallbackUrl
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
    api_instance = openapi_client.IntegrationAccountSchemasApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    schema_name = 'schema_name_example' # str | The integration account schema name.
    api_version = 'api_version_example' # str | The API version.
    list_content_callback_url = openapi_client.GetCallbackUrlParameters() # GetCallbackUrlParameters | 

    try:
        api_response = api_instance.schemas_list_content_callback_url(subscription_id, resource_group_name, integration_account_name, schema_name, api_version, list_content_callback_url)
        print("The response of IntegrationAccountSchemasApi->schemas_list_content_callback_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountSchemasApi->schemas_list_content_callback_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **schema_name** | **str**| The integration account schema name. | 
 **api_version** | **str**| The API version. | 
 **list_content_callback_url** | [**GetCallbackUrlParameters**](GetCallbackUrlParameters.md)|  | 

### Return type

[**WorkflowTriggerCallbackUrl**](WorkflowTriggerCallbackUrl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

