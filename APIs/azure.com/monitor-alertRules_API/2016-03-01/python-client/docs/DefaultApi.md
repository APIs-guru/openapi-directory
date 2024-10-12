# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alert_rules_update**](DefaultApi.md#alert_rules_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName} | 


# **alert_rules_update**
> AlertRuleResource alert_rules_update(subscription_id, resource_group_name, rule_name, api_version, alert_rules_resource)



Updates an existing AlertRuleResource. To update other fields use the CreateOrUpdate method.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_rule_resource import AlertRuleResource
from openapi_client.models.alert_rule_resource_patch import AlertRuleResourcePatch
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    alert_rules_resource = openapi_client.AlertRuleResourcePatch() # AlertRuleResourcePatch | Parameters supplied to the operation.

    try:
        api_response = api_instance.alert_rules_update(subscription_id, resource_group_name, rule_name, api_version, alert_rules_resource)
        print("The response of DefaultApi->alert_rules_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->alert_rules_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 
 **alert_rules_resource** | [**AlertRuleResourcePatch**](AlertRuleResourcePatch.md)| Parameters supplied to the operation. | 

### Return type

[**AlertRuleResource**](AlertRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to update an alert rule |  -  |
**201** | Successful request to update an alert rule that resulted in a creation of the alert rule |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

