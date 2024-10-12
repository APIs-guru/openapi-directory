# openapi_client.IntegrationAccountBatchConfigurationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_account_batch_configurations_create_or_update**](IntegrationAccountBatchConfigurationsApi.md#integration_account_batch_configurations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations/{batchConfigurationName} | 
[**integration_account_batch_configurations_delete**](IntegrationAccountBatchConfigurationsApi.md#integration_account_batch_configurations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations/{batchConfigurationName} | 
[**integration_account_batch_configurations_get**](IntegrationAccountBatchConfigurationsApi.md#integration_account_batch_configurations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations/{batchConfigurationName} | 
[**integration_account_batch_configurations_list**](IntegrationAccountBatchConfigurationsApi.md#integration_account_batch_configurations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations | 


# **integration_account_batch_configurations_create_or_update**
> BatchConfiguration integration_account_batch_configurations_create_or_update(subscription_id, resource_group_name, integration_account_name, batch_configuration_name, api_version, batch_configuration)



Create or update a batch configuration for an integration account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_configuration import BatchConfiguration
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
    api_instance = openapi_client.IntegrationAccountBatchConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    batch_configuration_name = 'batch_configuration_name_example' # str | The batch configuration name.
    api_version = 'api_version_example' # str | The API version.
    batch_configuration = openapi_client.BatchConfiguration() # BatchConfiguration | The batch configuration.

    try:
        api_response = api_instance.integration_account_batch_configurations_create_or_update(subscription_id, resource_group_name, integration_account_name, batch_configuration_name, api_version, batch_configuration)
        print("The response of IntegrationAccountBatchConfigurationsApi->integration_account_batch_configurations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountBatchConfigurationsApi->integration_account_batch_configurations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **batch_configuration_name** | **str**| The batch configuration name. | 
 **api_version** | **str**| The API version. | 
 **batch_configuration** | [**BatchConfiguration**](BatchConfiguration.md)| The batch configuration. | 

### Return type

[**BatchConfiguration**](BatchConfiguration.md)

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
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_batch_configurations_delete**
> integration_account_batch_configurations_delete(subscription_id, resource_group_name, integration_account_name, batch_configuration_name, api_version)



Delete a batch configuration for an integration account.

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
    api_instance = openapi_client.IntegrationAccountBatchConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    batch_configuration_name = 'batch_configuration_name_example' # str | The batch configuration name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_account_batch_configurations_delete(subscription_id, resource_group_name, integration_account_name, batch_configuration_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountBatchConfigurationsApi->integration_account_batch_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **batch_configuration_name** | **str**| The batch configuration name. | 
 **api_version** | **str**| The API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_batch_configurations_get**
> BatchConfiguration integration_account_batch_configurations_get(subscription_id, resource_group_name, integration_account_name, batch_configuration_name, api_version)



Get a batch configuration for an integration account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_configuration import BatchConfiguration
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
    api_instance = openapi_client.IntegrationAccountBatchConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    batch_configuration_name = 'batch_configuration_name_example' # str | The batch configuration name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_account_batch_configurations_get(subscription_id, resource_group_name, integration_account_name, batch_configuration_name, api_version)
        print("The response of IntegrationAccountBatchConfigurationsApi->integration_account_batch_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountBatchConfigurationsApi->integration_account_batch_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **batch_configuration_name** | **str**| The batch configuration name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**BatchConfiguration**](BatchConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_batch_configurations_list**
> BatchConfigurationCollection integration_account_batch_configurations_list(subscription_id, resource_group_name, integration_account_name, api_version)



List the batch configurations for an integration account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_configuration_collection import BatchConfigurationCollection
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
    api_instance = openapi_client.IntegrationAccountBatchConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_account_batch_configurations_list(subscription_id, resource_group_name, integration_account_name, api_version)
        print("The response of IntegrationAccountBatchConfigurationsApi->integration_account_batch_configurations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountBatchConfigurationsApi->integration_account_batch_configurations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**BatchConfigurationCollection**](BatchConfigurationCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

