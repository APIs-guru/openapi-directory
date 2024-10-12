# openapi_client.DataMaskingRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_masking_rules_create_or_update**](DataMaskingRulesApi.md#data_masking_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules/{dataMaskingRuleName} | 
[**data_masking_rules_list_by_database**](DataMaskingRulesApi.md#data_masking_rules_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules | 


# **data_masking_rules_create_or_update**
> DataMaskingRule data_masking_rules_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, data_masking_policy_name, data_masking_rule_name, parameters)



Creates or updates a database data masking rule.

### Example


```python
import openapi_client
from openapi_client.models.data_masking_rule import DataMaskingRule
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
    api_instance = openapi_client.DataMaskingRulesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    data_masking_policy_name = 'data_masking_policy_name_example' # str | The name of the database for which the data masking rule applies.
    data_masking_rule_name = 'data_masking_rule_name_example' # str | The name of the data masking rule.
    parameters = openapi_client.DataMaskingRule() # DataMaskingRule | The required parameters for creating or updating a data masking rule.

    try:
        api_response = api_instance.data_masking_rules_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, data_masking_policy_name, data_masking_rule_name, parameters)
        print("The response of DataMaskingRulesApi->data_masking_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataMaskingRulesApi->data_masking_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **data_masking_policy_name** | **str**| The name of the database for which the data masking rule applies. | 
 **data_masking_rule_name** | **str**| The name of the data masking rule. | 
 **parameters** | [**DataMaskingRule**](DataMaskingRule.md)| The required parameters for creating or updating a data masking rule. | 

### Return type

[**DataMaskingRule**](DataMaskingRule.md)

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

# **data_masking_rules_list_by_database**
> DataMaskingRuleListResult data_masking_rules_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name, data_masking_policy_name)



Gets a list of database data masking rules.

### Example


```python
import openapi_client
from openapi_client.models.data_masking_rule_list_result import DataMaskingRuleListResult
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
    api_instance = openapi_client.DataMaskingRulesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    data_masking_policy_name = 'data_masking_policy_name_example' # str | The name of the database for which the data masking rule applies.

    try:
        api_response = api_instance.data_masking_rules_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name, data_masking_policy_name)
        print("The response of DataMaskingRulesApi->data_masking_rules_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataMaskingRulesApi->data_masking_rules_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **data_masking_policy_name** | **str**| The name of the database for which the data masking rule applies. | 

### Return type

[**DataMaskingRuleListResult**](DataMaskingRuleListResult.md)

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

