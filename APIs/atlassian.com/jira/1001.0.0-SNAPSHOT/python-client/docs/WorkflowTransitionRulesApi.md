# openapi_client.WorkflowTransitionRulesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_workflow_transition_rule_configurations**](WorkflowTransitionRulesApi.md#delete_workflow_transition_rule_configurations) | **PUT** /rest/api/3/workflow/rule/config/delete | Delete workflow transition rule configurations
[**get_workflow_transition_rule_configurations**](WorkflowTransitionRulesApi.md#get_workflow_transition_rule_configurations) | **GET** /rest/api/3/workflow/rule/config | Get workflow transition rule configurations
[**update_workflow_transition_rule_configurations**](WorkflowTransitionRulesApi.md#update_workflow_transition_rule_configurations) | **PUT** /rest/api/3/workflow/rule/config | Update workflow transition rule configurations


# **delete_workflow_transition_rule_configurations**
> WorkflowTransitionRulesUpdateErrors delete_workflow_transition_rule_configurations(workflows_with_transition_rules_details)

Delete workflow transition rule configurations

Deletes workflow transition rules from one or more workflows. These rule types are supported:   *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)  *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)  *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)  Only rules created by the calling Connect app can be deleted.  **[Permissions](#permissions) required:** Only Connect apps can use this operation.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_transition_rules_update_errors import WorkflowTransitionRulesUpdateErrors
from openapi_client.models.workflows_with_transition_rules_details import WorkflowsWithTransitionRulesDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkflowTransitionRulesApi(api_client)
    workflows_with_transition_rules_details = {"workflows":[{"workflowId":{"draft":false,"name":"Internal support workflow"},"workflowRuleIds":["b4d6cbdc-59f5-11e9-8647-d663bd873d93","d663bd873d93-59f5-11e9-8647-b4d6cbdc","11e9-59f5-b4d6cbdc-8647-d663bd873d93"]}]} # WorkflowsWithTransitionRulesDetails | 

    try:
        # Delete workflow transition rule configurations
        api_response = api_instance.delete_workflow_transition_rule_configurations(workflows_with_transition_rules_details)
        print("The response of WorkflowTransitionRulesApi->delete_workflow_transition_rule_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowTransitionRulesApi->delete_workflow_transition_rule_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflows_with_transition_rules_details** | [**WorkflowsWithTransitionRulesDetails**](WorkflowsWithTransitionRulesDetails.md)|  | 

### Return type

[**WorkflowTransitionRulesUpdateErrors**](WorkflowTransitionRulesUpdateErrors.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**403** | Returned if the caller is not a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workflow_transition_rule_configurations**
> PageBeanWorkflowTransitionRules get_workflow_transition_rule_configurations(types, start_at=start_at, max_results=max_results, keys=keys, workflow_names=workflow_names, with_tags=with_tags, draft=draft, expand=expand)

Get workflow transition rule configurations

Returns a [paginated](#pagination) list of workflows with transition rules. The workflows can be filtered to return only those containing workflow transition rules:   *  of one or more transition rule types, such as [workflow post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/).  *  matching one or more transition rule keys.  Only workflows containing transition rules created by the calling [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) app are returned.  Due to server-side optimizations, workflows with an empty list of rules may be returned; these workflows can be ignored.  **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) apps can use this operation.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_workflow_transition_rules import PageBeanWorkflowTransitionRules
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkflowTransitionRulesApi(api_client)
    types = ['types_example'] # List[str] | The types of the transition rules to return.
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 10 # int | The maximum number of items to return per page. (optional) (default to 10)
    keys = ['keys_example'] # List[str] | The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return. (optional)
    workflow_names = ['workflow_names_example'] # List[str] | EXPERIMENTAL: The list of workflow names to filter by. (optional)
    with_tags = ['with_tags_example'] # List[str] | EXPERIMENTAL: The list of `tags` to filter by. (optional)
    draft = True # bool | EXPERIMENTAL: Whether draft or published workflows are returned. If not provided, both workflow types are returned. (optional)
    expand = 'expand_example' # str | Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to. (optional)

    try:
        # Get workflow transition rule configurations
        api_response = api_instance.get_workflow_transition_rule_configurations(types, start_at=start_at, max_results=max_results, keys=keys, workflow_names=workflow_names, with_tags=with_tags, draft=draft, expand=expand)
        print("The response of WorkflowTransitionRulesApi->get_workflow_transition_rule_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowTransitionRulesApi->get_workflow_transition_rule_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **types** | [**List[str]**](str.md)| The types of the transition rules to return. | 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 10]
 **keys** | [**List[str]**](str.md)| The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return. | [optional] 
 **workflow_names** | [**List[str]**](str.md)| EXPERIMENTAL: The list of workflow names to filter by. | [optional] 
 **with_tags** | [**List[str]**](str.md)| EXPERIMENTAL: The list of &#x60;tags&#x60; to filter by. | [optional] 
 **draft** | **bool**| EXPERIMENTAL: Whether draft or published workflows are returned. If not provided, both workflow types are returned. | [optional] 
 **expand** | **str**| Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;transition&#x60;, which, for each rule, returns information about the transition the rule is assigned to. | [optional] 

### Return type

[**PageBeanWorkflowTransitionRules**](PageBeanWorkflowTransitionRules.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**403** | Returned if the caller is not a Connect or a Forge app. |  -  |
**404** | Returned if any transition rule type is not supported. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_workflow_transition_rule_configurations**
> WorkflowTransitionRulesUpdateErrors update_workflow_transition_rule_configurations(workflow_transition_rules_update)

Update workflow transition rule configurations

Updates configuration of workflow transition rules. The following rule types are supported:   *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)  *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)  *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)  Only rules created by the calling Connect app can be updated.  To assist with app migration, this operation can be used to:   *  Disable a rule.  *  Add a `tag`. Use this to filter rules in the [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).  Rules are enabled if the `disabled` parameter is not provided.  **[Permissions](#permissions) required:** Only Connect apps can use this operation.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_transition_rules_update import WorkflowTransitionRulesUpdate
from openapi_client.models.workflow_transition_rules_update_errors import WorkflowTransitionRulesUpdateErrors
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkflowTransitionRulesApi(api_client)
    workflow_transition_rules_update = {"workflows":[{"conditions":[{"configuration":{"disabled":false,"value":"{ \"size\": \"medium\" }"},"id":"d663bd873d93-59f5-11e9-8647-b4d6cbdc"}],"postFunctions":[{"configuration":{"disabled":false,"value":"{ \"color\": \"red\" }"},"id":"b4d6cbdc-59f5-11e9-8647-d663bd873d93"}],"validators":[{"configuration":{"disabled":false,"value":"{ \"shape\": \"square\" }"},"id":"11e9-59f5-b4d6cbdc-8647-d663bd873d93"}],"workflowId":{"draft":false,"name":"My Workflow name"}}]} # WorkflowTransitionRulesUpdate | 

    try:
        # Update workflow transition rule configurations
        api_response = api_instance.update_workflow_transition_rule_configurations(workflow_transition_rules_update)
        print("The response of WorkflowTransitionRulesApi->update_workflow_transition_rule_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowTransitionRulesApi->update_workflow_transition_rule_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_transition_rules_update** | [**WorkflowTransitionRulesUpdate**](WorkflowTransitionRulesUpdate.md)|  | 

### Return type

[**WorkflowTransitionRulesUpdateErrors**](WorkflowTransitionRulesUpdateErrors.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**403** | Returned if the caller is not a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

