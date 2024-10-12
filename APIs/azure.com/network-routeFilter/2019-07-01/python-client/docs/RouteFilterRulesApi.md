# openapi_client.RouteFilterRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**route_filter_rules_create_or_update**](RouteFilterRulesApi.md#route_filter_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName} | 
[**route_filter_rules_delete**](RouteFilterRulesApi.md#route_filter_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName} | 
[**route_filter_rules_get**](RouteFilterRulesApi.md#route_filter_rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName} | 
[**route_filter_rules_list_by_route_filter**](RouteFilterRulesApi.md#route_filter_rules_list_by_route_filter) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules | 
[**route_filter_rules_update**](RouteFilterRulesApi.md#route_filter_rules_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName} | 


# **route_filter_rules_create_or_update**
> RouteFilterRule route_filter_rules_create_or_update(resource_group_name, route_filter_name, rule_name, api_version, subscription_id, route_filter_rule_parameters)



Creates or updates a route in the specified route filter.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route_filter_rule import RouteFilterRule
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
    api_instance = openapi_client.RouteFilterRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_filter_name = 'route_filter_name_example' # str | The name of the route filter.
    rule_name = 'rule_name_example' # str | The name of the route filter rule.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    route_filter_rule_parameters = openapi_client.RouteFilterRule() # RouteFilterRule | Parameters supplied to the create or update route filter rule operation.

    try:
        api_response = api_instance.route_filter_rules_create_or_update(resource_group_name, route_filter_name, rule_name, api_version, subscription_id, route_filter_rule_parameters)
        print("The response of RouteFilterRulesApi->route_filter_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteFilterRulesApi->route_filter_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_filter_name** | **str**| The name of the route filter. | 
 **rule_name** | **str**| The name of the route filter rule. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **route_filter_rule_parameters** | [**RouteFilterRule**](RouteFilterRule.md)| Parameters supplied to the create or update route filter rule operation. | 

### Return type

[**RouteFilterRule**](RouteFilterRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting Route Filter Rule resource. |  -  |
**201** | Create successful. The operation returns the resulting Route Filter Rule resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **route_filter_rules_delete**
> route_filter_rules_delete(resource_group_name, route_filter_name, rule_name, api_version, subscription_id)



Deletes the specified rule from a route filter.

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
    api_instance = openapi_client.RouteFilterRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_filter_name = 'route_filter_name_example' # str | The name of the route filter.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.route_filter_rules_delete(resource_group_name, route_filter_name, rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling RouteFilterRulesApi->route_filter_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_filter_name** | **str**| The name of the route filter. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Accepted. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Rule was deleted or not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **route_filter_rules_get**
> RouteFilterRule route_filter_rules_get(resource_group_name, route_filter_name, rule_name, api_version, subscription_id)



Gets the specified rule from a route filter.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route_filter_rule import RouteFilterRule
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
    api_instance = openapi_client.RouteFilterRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_filter_name = 'route_filter_name_example' # str | The name of the route filter.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.route_filter_rules_get(resource_group_name, route_filter_name, rule_name, api_version, subscription_id)
        print("The response of RouteFilterRulesApi->route_filter_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteFilterRulesApi->route_filter_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_filter_name** | **str**| The name of the route filter. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RouteFilterRule**](RouteFilterRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting Route Filter Rule resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **route_filter_rules_list_by_route_filter**
> RouteFilterRuleListResult route_filter_rules_list_by_route_filter(resource_group_name, route_filter_name, api_version, subscription_id)



Gets all RouteFilterRules in a route filter.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route_filter_rule_list_result import RouteFilterRuleListResult
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
    api_instance = openapi_client.RouteFilterRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_filter_name = 'route_filter_name_example' # str | The name of the route filter.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.route_filter_rules_list_by_route_filter(resource_group_name, route_filter_name, api_version, subscription_id)
        print("The response of RouteFilterRulesApi->route_filter_rules_list_by_route_filter:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteFilterRulesApi->route_filter_rules_list_by_route_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_filter_name** | **str**| The name of the route filter. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RouteFilterRuleListResult**](RouteFilterRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of Route Filter Rule resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **route_filter_rules_update**
> RouteFilterRule route_filter_rules_update(resource_group_name, route_filter_name, rule_name, api_version, subscription_id, route_filter_rule_parameters)



Updates a route in the specified route filter.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.patch_route_filter_rule import PatchRouteFilterRule
from openapi_client.models.route_filter_rule import RouteFilterRule
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
    api_instance = openapi_client.RouteFilterRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_filter_name = 'route_filter_name_example' # str | The name of the route filter.
    rule_name = 'rule_name_example' # str | The name of the route filter rule.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    route_filter_rule_parameters = openapi_client.PatchRouteFilterRule() # PatchRouteFilterRule | Parameters supplied to the update route filter rule operation.

    try:
        api_response = api_instance.route_filter_rules_update(resource_group_name, route_filter_name, rule_name, api_version, subscription_id, route_filter_rule_parameters)
        print("The response of RouteFilterRulesApi->route_filter_rules_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteFilterRulesApi->route_filter_rules_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_filter_name** | **str**| The name of the route filter. | 
 **rule_name** | **str**| The name of the route filter rule. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **route_filter_rule_parameters** | [**PatchRouteFilterRule**](PatchRouteFilterRule.md)| Parameters supplied to the update route filter rule operation. | 

### Return type

[**RouteFilterRule**](RouteFilterRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting Route Filter Rule resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

