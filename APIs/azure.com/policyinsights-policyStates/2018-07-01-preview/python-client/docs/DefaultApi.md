# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_list**](DefaultApi.md#operations_list) | **GET** /providers/Microsoft.PolicyInsights/operations | 
[**policy_states_get_metadata**](DefaultApi.md#policy_states_get_metadata) | **GET** /{scope}/providers/Microsoft.PolicyInsights/policyStates/$metadata | 
[**policy_states_list_query_results_for_management_group**](DefaultApi.md#policy_states_list_query_results_for_management_group) | **POST** /providers/{managementGroupsNamespace}/managementGroups/{managementGroupName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults | 
[**policy_states_list_query_results_for_policy_definition**](DefaultApi.md#policy_states_list_query_results_for_policy_definition) | **POST** /subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyDefinitions/{policyDefinitionName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults | 
[**policy_states_list_query_results_for_policy_set_definition**](DefaultApi.md#policy_states_list_query_results_for_policy_set_definition) | **POST** /subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policySetDefinitions/{policySetDefinitionName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults | 
[**policy_states_list_query_results_for_resource**](DefaultApi.md#policy_states_list_query_results_for_resource) | **POST** /{resourceId}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults | 
[**policy_states_list_query_results_for_resource_group**](DefaultApi.md#policy_states_list_query_results_for_resource_group) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults | 
[**policy_states_list_query_results_for_resource_group_level_policy_assignment**](DefaultApi.md#policy_states_list_query_results_for_resource_group_level_policy_assignment) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults | 
[**policy_states_list_query_results_for_subscription**](DefaultApi.md#policy_states_list_query_results_for_subscription) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults | 
[**policy_states_list_query_results_for_subscription_level_policy_assignment**](DefaultApi.md#policy_states_list_query_results_for_subscription_level_policy_assignment) | **POST** /subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults | 
[**policy_states_summarize_for_management_group**](DefaultApi.md#policy_states_summarize_for_management_group) | **POST** /providers/{managementGroupsNamespace}/managementGroups/{managementGroupName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize | 
[**policy_states_summarize_for_policy_definition**](DefaultApi.md#policy_states_summarize_for_policy_definition) | **POST** /subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyDefinitions/{policyDefinitionName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize | 
[**policy_states_summarize_for_policy_set_definition**](DefaultApi.md#policy_states_summarize_for_policy_set_definition) | **POST** /subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policySetDefinitions/{policySetDefinitionName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize | 
[**policy_states_summarize_for_resource**](DefaultApi.md#policy_states_summarize_for_resource) | **POST** /{resourceId}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize | 
[**policy_states_summarize_for_resource_group**](DefaultApi.md#policy_states_summarize_for_resource_group) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize | 
[**policy_states_summarize_for_resource_group_level_policy_assignment**](DefaultApi.md#policy_states_summarize_for_resource_group_level_policy_assignment) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize | 
[**policy_states_summarize_for_subscription**](DefaultApi.md#policy_states_summarize_for_subscription) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize | 
[**policy_states_summarize_for_subscription_level_policy_assignment**](DefaultApi.md#policy_states_summarize_for_subscription_level_policy_assignment) | **POST** /subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize | 


# **operations_list**
> OperationsListResults operations_list(api_version)



Lists available operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operations_list_results import OperationsListResults
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
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of DefaultApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 

### Return type

[**OperationsListResults**](OperationsListResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of available operations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_get_metadata**
> str policy_states_get_metadata(scope, api_version)



Gets OData metadata XML document.

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
    api_instance = openapi_client.DefaultApi(api_client)
    scope = 'scope_example' # str | A valid scope, i.e. management group, subscription, resource group, or resource ID. Scope used has no effect on metadata returned.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.policy_states_get_metadata(scope, api_version)
        print("The response of DefaultApi->policy_states_get_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_get_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| A valid scope, i.e. management group, subscription, resource group, or resource ID. Scope used has no effect on metadata returned. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OData metadata XML document. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_list_query_results_for_management_group**
> PolicyStatesQueryResults policy_states_list_query_results_for_management_group(policy_states_resource, management_groups_namespace, management_group_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)



Queries policy states for the resources under the management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_states_query_results import PolicyStatesQueryResults
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
    policy_states_resource = 'policy_states_resource_example' # str | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
    management_groups_namespace = 'management_groups_namespace_example' # str | The namespace for Microsoft Management RP; only \"Microsoft.Management\" is allowed.
    management_group_name = 'management_group_name_example' # str | Management group name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    orderby = 'orderby_example' # str | Ordering expression using OData notation. One or more comma-separated column names with an optional \"desc\" (the default) or \"asc\", e.g. \"$orderby=PolicyAssignmentId, ResourceId asc\". (optional)
    select = 'select_example' # str | Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \"$select=PolicyAssignmentId, ResourceId\". (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)
    apply = 'apply_example' # str | OData apply expression for aggregations. (optional)

    try:
        api_response = api_instance.policy_states_list_query_results_for_management_group(policy_states_resource, management_groups_namespace, management_group_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)
        print("The response of DefaultApi->policy_states_list_query_results_for_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_list_query_results_for_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_resource** | **str**| The virtual resource under PolicyStates resource type. In a given time range, &#39;latest&#39; represents the latest policy state(s), whereas &#39;default&#39; represents all policy state(s). | 
 **management_groups_namespace** | **str**| The namespace for Microsoft Management RP; only \&quot;Microsoft.Management\&quot; is allowed. | 
 **management_group_name** | **str**| Management group name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **orderby** | **str**| Ordering expression using OData notation. One or more comma-separated column names with an optional \&quot;desc\&quot; (the default) or \&quot;asc\&quot;, e.g. \&quot;$orderby&#x3D;PolicyAssignmentId, ResourceId asc\&quot;. | [optional] 
 **select** | **str**| Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \&quot;$select&#x3D;PolicyAssignmentId, ResourceId\&quot;. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 
 **apply** | **str**| OData apply expression for aggregations. | [optional] 

### Return type

[**PolicyStatesQueryResults**](PolicyStatesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_list_query_results_for_policy_definition**
> PolicyStatesQueryResults policy_states_list_query_results_for_policy_definition(policy_states_resource, subscription_id, authorization_namespace, policy_definition_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)



Queries policy states for the subscription level policy definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_states_query_results import PolicyStatesQueryResults
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
    policy_states_resource = 'policy_states_resource_example' # str | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    authorization_namespace = 'authorization_namespace_example' # str | The namespace for Microsoft Authorization resource provider; only \"Microsoft.Authorization\" is allowed.
    policy_definition_name = 'policy_definition_name_example' # str | Policy definition name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    orderby = 'orderby_example' # str | Ordering expression using OData notation. One or more comma-separated column names with an optional \"desc\" (the default) or \"asc\", e.g. \"$orderby=PolicyAssignmentId, ResourceId asc\". (optional)
    select = 'select_example' # str | Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \"$select=PolicyAssignmentId, ResourceId\". (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)
    apply = 'apply_example' # str | OData apply expression for aggregations. (optional)

    try:
        api_response = api_instance.policy_states_list_query_results_for_policy_definition(policy_states_resource, subscription_id, authorization_namespace, policy_definition_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)
        print("The response of DefaultApi->policy_states_list_query_results_for_policy_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_list_query_results_for_policy_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_resource** | **str**| The virtual resource under PolicyStates resource type. In a given time range, &#39;latest&#39; represents the latest policy state(s), whereas &#39;default&#39; represents all policy state(s). | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **authorization_namespace** | **str**| The namespace for Microsoft Authorization resource provider; only \&quot;Microsoft.Authorization\&quot; is allowed. | 
 **policy_definition_name** | **str**| Policy definition name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **orderby** | **str**| Ordering expression using OData notation. One or more comma-separated column names with an optional \&quot;desc\&quot; (the default) or \&quot;asc\&quot;, e.g. \&quot;$orderby&#x3D;PolicyAssignmentId, ResourceId asc\&quot;. | [optional] 
 **select** | **str**| Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \&quot;$select&#x3D;PolicyAssignmentId, ResourceId\&quot;. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 
 **apply** | **str**| OData apply expression for aggregations. | [optional] 

### Return type

[**PolicyStatesQueryResults**](PolicyStatesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_list_query_results_for_policy_set_definition**
> PolicyStatesQueryResults policy_states_list_query_results_for_policy_set_definition(policy_states_resource, subscription_id, authorization_namespace, policy_set_definition_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)



Queries policy states for the subscription level policy set definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_states_query_results import PolicyStatesQueryResults
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
    policy_states_resource = 'policy_states_resource_example' # str | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    authorization_namespace = 'authorization_namespace_example' # str | The namespace for Microsoft Authorization resource provider; only \"Microsoft.Authorization\" is allowed.
    policy_set_definition_name = 'policy_set_definition_name_example' # str | Policy set definition name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    orderby = 'orderby_example' # str | Ordering expression using OData notation. One or more comma-separated column names with an optional \"desc\" (the default) or \"asc\", e.g. \"$orderby=PolicyAssignmentId, ResourceId asc\". (optional)
    select = 'select_example' # str | Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \"$select=PolicyAssignmentId, ResourceId\". (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)
    apply = 'apply_example' # str | OData apply expression for aggregations. (optional)

    try:
        api_response = api_instance.policy_states_list_query_results_for_policy_set_definition(policy_states_resource, subscription_id, authorization_namespace, policy_set_definition_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)
        print("The response of DefaultApi->policy_states_list_query_results_for_policy_set_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_list_query_results_for_policy_set_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_resource** | **str**| The virtual resource under PolicyStates resource type. In a given time range, &#39;latest&#39; represents the latest policy state(s), whereas &#39;default&#39; represents all policy state(s). | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **authorization_namespace** | **str**| The namespace for Microsoft Authorization resource provider; only \&quot;Microsoft.Authorization\&quot; is allowed. | 
 **policy_set_definition_name** | **str**| Policy set definition name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **orderby** | **str**| Ordering expression using OData notation. One or more comma-separated column names with an optional \&quot;desc\&quot; (the default) or \&quot;asc\&quot;, e.g. \&quot;$orderby&#x3D;PolicyAssignmentId, ResourceId asc\&quot;. | [optional] 
 **select** | **str**| Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \&quot;$select&#x3D;PolicyAssignmentId, ResourceId\&quot;. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 
 **apply** | **str**| OData apply expression for aggregations. | [optional] 

### Return type

[**PolicyStatesQueryResults**](PolicyStatesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_list_query_results_for_resource**
> PolicyStatesQueryResults policy_states_list_query_results_for_resource(policy_states_resource, resource_id, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply, expand=expand)



Queries policy states for the resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_states_query_results import PolicyStatesQueryResults
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
    policy_states_resource = 'policy_states_resource_example' # str | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
    resource_id = 'resource_id_example' # str | Resource ID.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    orderby = 'orderby_example' # str | Ordering expression using OData notation. One or more comma-separated column names with an optional \"desc\" (the default) or \"asc\", e.g. \"$orderby=PolicyAssignmentId, ResourceId asc\". (optional)
    select = 'select_example' # str | Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \"$select=PolicyAssignmentId, ResourceId\". (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)
    apply = 'apply_example' # str | OData apply expression for aggregations. (optional)
    expand = 'expand_example' # str | The $expand query parameter. For example, to expand policyEvaluationDetails, use $expand=policyEvaluationDetails (optional)

    try:
        api_response = api_instance.policy_states_list_query_results_for_resource(policy_states_resource, resource_id, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply, expand=expand)
        print("The response of DefaultApi->policy_states_list_query_results_for_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_list_query_results_for_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_resource** | **str**| The virtual resource under PolicyStates resource type. In a given time range, &#39;latest&#39; represents the latest policy state(s), whereas &#39;default&#39; represents all policy state(s). | 
 **resource_id** | **str**| Resource ID. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **orderby** | **str**| Ordering expression using OData notation. One or more comma-separated column names with an optional \&quot;desc\&quot; (the default) or \&quot;asc\&quot;, e.g. \&quot;$orderby&#x3D;PolicyAssignmentId, ResourceId asc\&quot;. | [optional] 
 **select** | **str**| Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \&quot;$select&#x3D;PolicyAssignmentId, ResourceId\&quot;. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 
 **apply** | **str**| OData apply expression for aggregations. | [optional] 
 **expand** | **str**| The $expand query parameter. For example, to expand policyEvaluationDetails, use $expand&#x3D;policyEvaluationDetails | [optional] 

### Return type

[**PolicyStatesQueryResults**](PolicyStatesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_list_query_results_for_resource_group**
> PolicyStatesQueryResults policy_states_list_query_results_for_resource_group(policy_states_resource, subscription_id, resource_group_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)



Queries policy states for the resources under the resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_states_query_results import PolicyStatesQueryResults
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
    policy_states_resource = 'policy_states_resource_example' # str | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    orderby = 'orderby_example' # str | Ordering expression using OData notation. One or more comma-separated column names with an optional \"desc\" (the default) or \"asc\", e.g. \"$orderby=PolicyAssignmentId, ResourceId asc\". (optional)
    select = 'select_example' # str | Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \"$select=PolicyAssignmentId, ResourceId\". (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)
    apply = 'apply_example' # str | OData apply expression for aggregations. (optional)

    try:
        api_response = api_instance.policy_states_list_query_results_for_resource_group(policy_states_resource, subscription_id, resource_group_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)
        print("The response of DefaultApi->policy_states_list_query_results_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_list_query_results_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_resource** | **str**| The virtual resource under PolicyStates resource type. In a given time range, &#39;latest&#39; represents the latest policy state(s), whereas &#39;default&#39; represents all policy state(s). | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **orderby** | **str**| Ordering expression using OData notation. One or more comma-separated column names with an optional \&quot;desc\&quot; (the default) or \&quot;asc\&quot;, e.g. \&quot;$orderby&#x3D;PolicyAssignmentId, ResourceId asc\&quot;. | [optional] 
 **select** | **str**| Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \&quot;$select&#x3D;PolicyAssignmentId, ResourceId\&quot;. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 
 **apply** | **str**| OData apply expression for aggregations. | [optional] 

### Return type

[**PolicyStatesQueryResults**](PolicyStatesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_list_query_results_for_resource_group_level_policy_assignment**
> PolicyStatesQueryResults policy_states_list_query_results_for_resource_group_level_policy_assignment(policy_states_resource, subscription_id, resource_group_name, authorization_namespace, policy_assignment_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)



Queries policy states for the resource group level policy assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_states_query_results import PolicyStatesQueryResults
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
    policy_states_resource = 'policy_states_resource_example' # str | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    authorization_namespace = 'authorization_namespace_example' # str | The namespace for Microsoft Authorization resource provider; only \"Microsoft.Authorization\" is allowed.
    policy_assignment_name = 'policy_assignment_name_example' # str | Policy assignment name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    orderby = 'orderby_example' # str | Ordering expression using OData notation. One or more comma-separated column names with an optional \"desc\" (the default) or \"asc\", e.g. \"$orderby=PolicyAssignmentId, ResourceId asc\". (optional)
    select = 'select_example' # str | Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \"$select=PolicyAssignmentId, ResourceId\". (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)
    apply = 'apply_example' # str | OData apply expression for aggregations. (optional)

    try:
        api_response = api_instance.policy_states_list_query_results_for_resource_group_level_policy_assignment(policy_states_resource, subscription_id, resource_group_name, authorization_namespace, policy_assignment_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)
        print("The response of DefaultApi->policy_states_list_query_results_for_resource_group_level_policy_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_list_query_results_for_resource_group_level_policy_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_resource** | **str**| The virtual resource under PolicyStates resource type. In a given time range, &#39;latest&#39; represents the latest policy state(s), whereas &#39;default&#39; represents all policy state(s). | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **authorization_namespace** | **str**| The namespace for Microsoft Authorization resource provider; only \&quot;Microsoft.Authorization\&quot; is allowed. | 
 **policy_assignment_name** | **str**| Policy assignment name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **orderby** | **str**| Ordering expression using OData notation. One or more comma-separated column names with an optional \&quot;desc\&quot; (the default) or \&quot;asc\&quot;, e.g. \&quot;$orderby&#x3D;PolicyAssignmentId, ResourceId asc\&quot;. | [optional] 
 **select** | **str**| Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \&quot;$select&#x3D;PolicyAssignmentId, ResourceId\&quot;. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 
 **apply** | **str**| OData apply expression for aggregations. | [optional] 

### Return type

[**PolicyStatesQueryResults**](PolicyStatesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_list_query_results_for_subscription**
> PolicyStatesQueryResults policy_states_list_query_results_for_subscription(policy_states_resource, subscription_id, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)



Queries policy states for the resources under the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_states_query_results import PolicyStatesQueryResults
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
    policy_states_resource = 'policy_states_resource_example' # str | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    orderby = 'orderby_example' # str | Ordering expression using OData notation. One or more comma-separated column names with an optional \"desc\" (the default) or \"asc\", e.g. \"$orderby=PolicyAssignmentId, ResourceId asc\". (optional)
    select = 'select_example' # str | Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \"$select=PolicyAssignmentId, ResourceId\". (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)
    apply = 'apply_example' # str | OData apply expression for aggregations. (optional)

    try:
        api_response = api_instance.policy_states_list_query_results_for_subscription(policy_states_resource, subscription_id, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)
        print("The response of DefaultApi->policy_states_list_query_results_for_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_list_query_results_for_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_resource** | **str**| The virtual resource under PolicyStates resource type. In a given time range, &#39;latest&#39; represents the latest policy state(s), whereas &#39;default&#39; represents all policy state(s). | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **orderby** | **str**| Ordering expression using OData notation. One or more comma-separated column names with an optional \&quot;desc\&quot; (the default) or \&quot;asc\&quot;, e.g. \&quot;$orderby&#x3D;PolicyAssignmentId, ResourceId asc\&quot;. | [optional] 
 **select** | **str**| Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \&quot;$select&#x3D;PolicyAssignmentId, ResourceId\&quot;. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 
 **apply** | **str**| OData apply expression for aggregations. | [optional] 

### Return type

[**PolicyStatesQueryResults**](PolicyStatesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_list_query_results_for_subscription_level_policy_assignment**
> PolicyStatesQueryResults policy_states_list_query_results_for_subscription_level_policy_assignment(policy_states_resource, subscription_id, authorization_namespace, policy_assignment_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)



Queries policy states for the subscription level policy assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_states_query_results import PolicyStatesQueryResults
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
    policy_states_resource = 'policy_states_resource_example' # str | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    authorization_namespace = 'authorization_namespace_example' # str | The namespace for Microsoft Authorization resource provider; only \"Microsoft.Authorization\" is allowed.
    policy_assignment_name = 'policy_assignment_name_example' # str | Policy assignment name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    orderby = 'orderby_example' # str | Ordering expression using OData notation. One or more comma-separated column names with an optional \"desc\" (the default) or \"asc\", e.g. \"$orderby=PolicyAssignmentId, ResourceId asc\". (optional)
    select = 'select_example' # str | Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \"$select=PolicyAssignmentId, ResourceId\". (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)
    apply = 'apply_example' # str | OData apply expression for aggregations. (optional)

    try:
        api_response = api_instance.policy_states_list_query_results_for_subscription_level_policy_assignment(policy_states_resource, subscription_id, authorization_namespace, policy_assignment_name, api_version, top=top, orderby=orderby, select=select, var_from=var_from, to=to, filter=filter, apply=apply)
        print("The response of DefaultApi->policy_states_list_query_results_for_subscription_level_policy_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_list_query_results_for_subscription_level_policy_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_resource** | **str**| The virtual resource under PolicyStates resource type. In a given time range, &#39;latest&#39; represents the latest policy state(s), whereas &#39;default&#39; represents all policy state(s). | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **authorization_namespace** | **str**| The namespace for Microsoft Authorization resource provider; only \&quot;Microsoft.Authorization\&quot; is allowed. | 
 **policy_assignment_name** | **str**| Policy assignment name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **orderby** | **str**| Ordering expression using OData notation. One or more comma-separated column names with an optional \&quot;desc\&quot; (the default) or \&quot;asc\&quot;, e.g. \&quot;$orderby&#x3D;PolicyAssignmentId, ResourceId asc\&quot;. | [optional] 
 **select** | **str**| Select expression using OData notation. Limits the columns on each record to just those requested, e.g. \&quot;$select&#x3D;PolicyAssignmentId, ResourceId\&quot;. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 
 **apply** | **str**| OData apply expression for aggregations. | [optional] 

### Return type

[**PolicyStatesQueryResults**](PolicyStatesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_summarize_for_management_group**
> SummarizeResults policy_states_summarize_for_management_group(policy_states_summary_resource, management_groups_namespace, management_group_name, api_version, top=top, var_from=var_from, to=to, filter=filter)



Summarizes policy states for the resources under the management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.summarize_results import SummarizeResults
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
    policy_states_summary_resource = 'policy_states_summary_resource_example' # str | The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
    management_groups_namespace = 'management_groups_namespace_example' # str | The namespace for Microsoft Management RP; only \"Microsoft.Management\" is allowed.
    management_group_name = 'management_group_name_example' # str | Management group name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_states_summarize_for_management_group(policy_states_summary_resource, management_groups_namespace, management_group_name, api_version, top=top, var_from=var_from, to=to, filter=filter)
        print("The response of DefaultApi->policy_states_summarize_for_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_summarize_for_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_summary_resource** | **str**| The virtual resource under PolicyStates resource type for summarize action. In a given time range, &#39;latest&#39; represents the latest policy state(s) and is the only allowed value. | 
 **management_groups_namespace** | **str**| The namespace for Microsoft Management RP; only \&quot;Microsoft.Management\&quot; is allowed. | 
 **management_group_name** | **str**| Management group name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**SummarizeResults**](SummarizeResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summarize results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_summarize_for_policy_definition**
> SummarizeResults policy_states_summarize_for_policy_definition(policy_states_summary_resource, subscription_id, authorization_namespace, policy_definition_name, api_version, top=top, var_from=var_from, to=to, filter=filter)



Summarizes policy states for the subscription level policy definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.summarize_results import SummarizeResults
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
    policy_states_summary_resource = 'policy_states_summary_resource_example' # str | The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    authorization_namespace = 'authorization_namespace_example' # str | The namespace for Microsoft Authorization resource provider; only \"Microsoft.Authorization\" is allowed.
    policy_definition_name = 'policy_definition_name_example' # str | Policy definition name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_states_summarize_for_policy_definition(policy_states_summary_resource, subscription_id, authorization_namespace, policy_definition_name, api_version, top=top, var_from=var_from, to=to, filter=filter)
        print("The response of DefaultApi->policy_states_summarize_for_policy_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_summarize_for_policy_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_summary_resource** | **str**| The virtual resource under PolicyStates resource type for summarize action. In a given time range, &#39;latest&#39; represents the latest policy state(s) and is the only allowed value. | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **authorization_namespace** | **str**| The namespace for Microsoft Authorization resource provider; only \&quot;Microsoft.Authorization\&quot; is allowed. | 
 **policy_definition_name** | **str**| Policy definition name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**SummarizeResults**](SummarizeResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summarize results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_summarize_for_policy_set_definition**
> SummarizeResults policy_states_summarize_for_policy_set_definition(policy_states_summary_resource, subscription_id, authorization_namespace, policy_set_definition_name, api_version, top=top, var_from=var_from, to=to, filter=filter)



Summarizes policy states for the subscription level policy set definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.summarize_results import SummarizeResults
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
    policy_states_summary_resource = 'policy_states_summary_resource_example' # str | The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    authorization_namespace = 'authorization_namespace_example' # str | The namespace for Microsoft Authorization resource provider; only \"Microsoft.Authorization\" is allowed.
    policy_set_definition_name = 'policy_set_definition_name_example' # str | Policy set definition name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_states_summarize_for_policy_set_definition(policy_states_summary_resource, subscription_id, authorization_namespace, policy_set_definition_name, api_version, top=top, var_from=var_from, to=to, filter=filter)
        print("The response of DefaultApi->policy_states_summarize_for_policy_set_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_summarize_for_policy_set_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_summary_resource** | **str**| The virtual resource under PolicyStates resource type for summarize action. In a given time range, &#39;latest&#39; represents the latest policy state(s) and is the only allowed value. | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **authorization_namespace** | **str**| The namespace for Microsoft Authorization resource provider; only \&quot;Microsoft.Authorization\&quot; is allowed. | 
 **policy_set_definition_name** | **str**| Policy set definition name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**SummarizeResults**](SummarizeResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summarize results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_summarize_for_resource**
> SummarizeResults policy_states_summarize_for_resource(policy_states_summary_resource, resource_id, api_version, top=top, var_from=var_from, to=to, filter=filter)



Summarizes policy states for the resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.summarize_results import SummarizeResults
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
    policy_states_summary_resource = 'policy_states_summary_resource_example' # str | The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
    resource_id = 'resource_id_example' # str | Resource ID.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_states_summarize_for_resource(policy_states_summary_resource, resource_id, api_version, top=top, var_from=var_from, to=to, filter=filter)
        print("The response of DefaultApi->policy_states_summarize_for_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_summarize_for_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_summary_resource** | **str**| The virtual resource under PolicyStates resource type for summarize action. In a given time range, &#39;latest&#39; represents the latest policy state(s) and is the only allowed value. | 
 **resource_id** | **str**| Resource ID. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**SummarizeResults**](SummarizeResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summarize results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_summarize_for_resource_group**
> SummarizeResults policy_states_summarize_for_resource_group(policy_states_summary_resource, subscription_id, resource_group_name, api_version, top=top, var_from=var_from, to=to, filter=filter)



Summarizes policy states for the resources under the resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.summarize_results import SummarizeResults
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
    policy_states_summary_resource = 'policy_states_summary_resource_example' # str | The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_states_summarize_for_resource_group(policy_states_summary_resource, subscription_id, resource_group_name, api_version, top=top, var_from=var_from, to=to, filter=filter)
        print("The response of DefaultApi->policy_states_summarize_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_summarize_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_summary_resource** | **str**| The virtual resource under PolicyStates resource type for summarize action. In a given time range, &#39;latest&#39; represents the latest policy state(s) and is the only allowed value. | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**SummarizeResults**](SummarizeResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summarize results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_summarize_for_resource_group_level_policy_assignment**
> SummarizeResults policy_states_summarize_for_resource_group_level_policy_assignment(policy_states_summary_resource, subscription_id, resource_group_name, authorization_namespace, policy_assignment_name, api_version, top=top, var_from=var_from, to=to, filter=filter)



Summarizes policy states for the resource group level policy assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.summarize_results import SummarizeResults
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
    policy_states_summary_resource = 'policy_states_summary_resource_example' # str | The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    authorization_namespace = 'authorization_namespace_example' # str | The namespace for Microsoft Authorization resource provider; only \"Microsoft.Authorization\" is allowed.
    policy_assignment_name = 'policy_assignment_name_example' # str | Policy assignment name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_states_summarize_for_resource_group_level_policy_assignment(policy_states_summary_resource, subscription_id, resource_group_name, authorization_namespace, policy_assignment_name, api_version, top=top, var_from=var_from, to=to, filter=filter)
        print("The response of DefaultApi->policy_states_summarize_for_resource_group_level_policy_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_summarize_for_resource_group_level_policy_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_summary_resource** | **str**| The virtual resource under PolicyStates resource type for summarize action. In a given time range, &#39;latest&#39; represents the latest policy state(s) and is the only allowed value. | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **authorization_namespace** | **str**| The namespace for Microsoft Authorization resource provider; only \&quot;Microsoft.Authorization\&quot; is allowed. | 
 **policy_assignment_name** | **str**| Policy assignment name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**SummarizeResults**](SummarizeResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summarize results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_summarize_for_subscription**
> SummarizeResults policy_states_summarize_for_subscription(policy_states_summary_resource, subscription_id, api_version, top=top, var_from=var_from, to=to, filter=filter)



Summarizes policy states for the resources under the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.summarize_results import SummarizeResults
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
    policy_states_summary_resource = 'policy_states_summary_resource_example' # str | The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_states_summarize_for_subscription(policy_states_summary_resource, subscription_id, api_version, top=top, var_from=var_from, to=to, filter=filter)
        print("The response of DefaultApi->policy_states_summarize_for_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_summarize_for_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_summary_resource** | **str**| The virtual resource under PolicyStates resource type for summarize action. In a given time range, &#39;latest&#39; represents the latest policy state(s) and is the only allowed value. | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**SummarizeResults**](SummarizeResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summarize results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_states_summarize_for_subscription_level_policy_assignment**
> SummarizeResults policy_states_summarize_for_subscription_level_policy_assignment(policy_states_summary_resource, subscription_id, authorization_namespace, policy_assignment_name, api_version, top=top, var_from=var_from, to=to, filter=filter)



Summarizes policy states for the subscription level policy assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.summarize_results import SummarizeResults
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
    policy_states_summary_resource = 'policy_states_summary_resource_example' # str | The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    authorization_namespace = 'authorization_namespace_example' # str | The namespace for Microsoft Authorization resource provider; only \"Microsoft.Authorization\" is allowed.
    policy_assignment_name = 'policy_assignment_name_example' # str | Policy assignment name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_states_summarize_for_subscription_level_policy_assignment(policy_states_summary_resource, subscription_id, authorization_namespace, policy_assignment_name, api_version, top=top, var_from=var_from, to=to, filter=filter)
        print("The response of DefaultApi->policy_states_summarize_for_subscription_level_policy_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_states_summarize_for_subscription_level_policy_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_states_summary_resource** | **str**| The virtual resource under PolicyStates resource type for summarize action. In a given time range, &#39;latest&#39; represents the latest policy state(s) and is the only allowed value. | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **authorization_namespace** | **str**| The namespace for Microsoft Authorization resource provider; only \&quot;Microsoft.Authorization\&quot; is allowed. | 
 **policy_assignment_name** | **str**| Policy assignment name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **var_from** | **datetime**| ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day). | [optional] 
 **to** | **datetime**| ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**SummarizeResults**](SummarizeResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summarize results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

