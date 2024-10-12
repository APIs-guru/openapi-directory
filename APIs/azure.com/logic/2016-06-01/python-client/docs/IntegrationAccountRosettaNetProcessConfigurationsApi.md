# openapi_client.IntegrationAccountRosettaNetProcessConfigurationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rosetta_net_process_configurations_create_or_update**](IntegrationAccountRosettaNetProcessConfigurationsApi.md#rosetta_net_process_configurations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/rosettanetprocessconfigurations/{rosettaNetProcessConfigurationName} | 
[**rosetta_net_process_configurations_delete**](IntegrationAccountRosettaNetProcessConfigurationsApi.md#rosetta_net_process_configurations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/rosettanetprocessconfigurations/{rosettaNetProcessConfigurationName} | 
[**rosetta_net_process_configurations_get**](IntegrationAccountRosettaNetProcessConfigurationsApi.md#rosetta_net_process_configurations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/rosettanetprocessconfigurations/{rosettaNetProcessConfigurationName} | 
[**rosetta_net_process_configurations_list_by_integration_accounts**](IntegrationAccountRosettaNetProcessConfigurationsApi.md#rosetta_net_process_configurations_list_by_integration_accounts) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/rosettanetprocessconfigurations | 


# **rosetta_net_process_configurations_create_or_update**
> IntegrationAccountRosettaNetProcessConfiguration rosetta_net_process_configurations_create_or_update(subscription_id, resource_group_name, integration_account_name, rosetta_net_process_configuration_name, api_version, rosetta_net_process_configuration)



Creates or updates an integration account RosettaNetProcessConfiguration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_account_rosetta_net_process_configuration import IntegrationAccountRosettaNetProcessConfiguration
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
    api_instance = openapi_client.IntegrationAccountRosettaNetProcessConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    rosetta_net_process_configuration_name = 'rosetta_net_process_configuration_name_example' # str | The integration account RosettaNet ProcessConfiguration name.
    api_version = 'api_version_example' # str | The API version.
    rosetta_net_process_configuration = openapi_client.IntegrationAccountRosettaNetProcessConfiguration() # IntegrationAccountRosettaNetProcessConfiguration | The integration account RosettaNet ProcessConfiguration.

    try:
        api_response = api_instance.rosetta_net_process_configurations_create_or_update(subscription_id, resource_group_name, integration_account_name, rosetta_net_process_configuration_name, api_version, rosetta_net_process_configuration)
        print("The response of IntegrationAccountRosettaNetProcessConfigurationsApi->rosetta_net_process_configurations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountRosettaNetProcessConfigurationsApi->rosetta_net_process_configurations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **rosetta_net_process_configuration_name** | **str**| The integration account RosettaNet ProcessConfiguration name. | 
 **api_version** | **str**| The API version. | 
 **rosetta_net_process_configuration** | [**IntegrationAccountRosettaNetProcessConfiguration**](IntegrationAccountRosettaNetProcessConfiguration.md)| The integration account RosettaNet ProcessConfiguration. | 

### Return type

[**IntegrationAccountRosettaNetProcessConfiguration**](IntegrationAccountRosettaNetProcessConfiguration.md)

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

# **rosetta_net_process_configurations_delete**
> rosetta_net_process_configurations_delete(subscription_id, resource_group_name, integration_account_name, rosetta_net_process_configuration_name, api_version)



Deletes an integration account RosettaNet ProcessConfiguration.

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
    api_instance = openapi_client.IntegrationAccountRosettaNetProcessConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    rosetta_net_process_configuration_name = 'rosetta_net_process_configuration_name_example' # str | The integration account RosettaNetProcessConfiguration name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.rosetta_net_process_configurations_delete(subscription_id, resource_group_name, integration_account_name, rosetta_net_process_configuration_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountRosettaNetProcessConfigurationsApi->rosetta_net_process_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **rosetta_net_process_configuration_name** | **str**| The integration account RosettaNetProcessConfiguration name. | 
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

# **rosetta_net_process_configurations_get**
> IntegrationAccountRosettaNetProcessConfiguration rosetta_net_process_configurations_get(subscription_id, resource_group_name, integration_account_name, rosetta_net_process_configuration_name, api_version)



Gets an integration account RosettaNetProcessConfiguration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_account_rosetta_net_process_configuration import IntegrationAccountRosettaNetProcessConfiguration
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
    api_instance = openapi_client.IntegrationAccountRosettaNetProcessConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    rosetta_net_process_configuration_name = 'rosetta_net_process_configuration_name_example' # str | The integration account RosettaNetProcessConfiguration name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.rosetta_net_process_configurations_get(subscription_id, resource_group_name, integration_account_name, rosetta_net_process_configuration_name, api_version)
        print("The response of IntegrationAccountRosettaNetProcessConfigurationsApi->rosetta_net_process_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountRosettaNetProcessConfigurationsApi->rosetta_net_process_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **rosetta_net_process_configuration_name** | **str**| The integration account RosettaNetProcessConfiguration name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationAccountRosettaNetProcessConfiguration**](IntegrationAccountRosettaNetProcessConfiguration.md)

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

# **rosetta_net_process_configurations_list_by_integration_accounts**
> IntegrationAccountRosettaNetProcessConfigurationListResult rosetta_net_process_configurations_list_by_integration_accounts(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)



Gets a list of integration account RosettaNet process configurations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_account_rosetta_net_process_configuration_list_result import IntegrationAccountRosettaNetProcessConfigurationListResult
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
    api_instance = openapi_client.IntegrationAccountRosettaNetProcessConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.rosetta_net_process_configurations_list_by_integration_accounts(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)
        print("The response of IntegrationAccountRosettaNetProcessConfigurationsApi->rosetta_net_process_configurations_list_by_integration_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountRosettaNetProcessConfigurationsApi->rosetta_net_process_configurations_list_by_integration_accounts: %s\n" % e)
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

[**IntegrationAccountRosettaNetProcessConfigurationListResult**](IntegrationAccountRosettaNetProcessConfigurationListResult.md)

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

