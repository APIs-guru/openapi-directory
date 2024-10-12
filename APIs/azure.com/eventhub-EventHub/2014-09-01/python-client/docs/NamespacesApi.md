# openapi_client.NamespacesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**namespaces_check_name_availability**](NamespacesApi.md#namespaces_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.EventHub/CheckNameAvailability | 
[**namespaces_check_name_space_availability**](NamespacesApi.md#namespaces_check_name_space_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.EventHub/CheckNamespaceAvailability | 
[**namespaces_create_or_update**](NamespacesApi.md#namespaces_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName} | 
[**namespaces_create_or_update_authorization_rule**](NamespacesApi.md#namespaces_create_or_update_authorization_rule) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName} | 
[**namespaces_delete**](NamespacesApi.md#namespaces_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName} | 
[**namespaces_delete_authorization_rule**](NamespacesApi.md#namespaces_delete_authorization_rule) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName} | 
[**namespaces_get**](NamespacesApi.md#namespaces_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName} | 
[**namespaces_get_authorization_rule**](NamespacesApi.md#namespaces_get_authorization_rule) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName} | 
[**namespaces_list_authorization_rules**](NamespacesApi.md#namespaces_list_authorization_rules) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/AuthorizationRules | 
[**namespaces_list_by_resource_group**](NamespacesApi.md#namespaces_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces | 
[**namespaces_list_by_subscription**](NamespacesApi.md#namespaces_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.EventHub/namespaces | 
[**namespaces_list_post_authorization_rules**](NamespacesApi.md#namespaces_list_post_authorization_rules) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/AuthorizationRules | 
[**namespaces_post_authorization_rule**](NamespacesApi.md#namespaces_post_authorization_rule) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName} | 
[**namespaces_update**](NamespacesApi.md#namespaces_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName} | 


# **namespaces_check_name_availability**
> CheckNameAvailabilityResult namespaces_check_name_availability(api_version, subscription_id, parameters)



Check the give Namespace name availability.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_parameter import CheckNameAvailabilityParameter
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult
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
    api_instance = openapi_client.NamespacesApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.CheckNameAvailabilityParameter() # CheckNameAvailabilityParameter | Parameters to check availability of the given Namespace name

    try:
        api_response = api_instance.namespaces_check_name_availability(api_version, subscription_id, parameters)
        print("The response of NamespacesApi->namespaces_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**CheckNameAvailabilityParameter**](CheckNameAvailabilityParameter.md)| Parameters to check availability of the given Namespace name | 

### Return type

[**CheckNameAvailabilityResult**](CheckNameAvailabilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | check availability returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_check_name_space_availability**
> CheckNameAvailabilityResult namespaces_check_name_space_availability(api_version, subscription_id, parameters)



Check the give Namespace name availability.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_parameter import CheckNameAvailabilityParameter
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult
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
    api_instance = openapi_client.NamespacesApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.CheckNameAvailabilityParameter() # CheckNameAvailabilityParameter | Parameters to check availability of the given Namespace name

    try:
        api_response = api_instance.namespaces_check_name_space_availability(api_version, subscription_id, parameters)
        print("The response of NamespacesApi->namespaces_check_name_space_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_check_name_space_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**CheckNameAvailabilityParameter**](CheckNameAvailabilityParameter.md)| Parameters to check availability of the given Namespace name | 

### Return type

[**CheckNameAvailabilityResult**](CheckNameAvailabilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | check availability returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_create_or_update**
> NamespaceResource namespaces_create_or_update(resource_group_name, namespace_name, api_version, subscription_id, parameters)



Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.namespace_create_or_update_parameters import NamespaceCreateOrUpdateParameters
from openapi_client.models.namespace_resource import NamespaceResource
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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NamespaceCreateOrUpdateParameters() # NamespaceCreateOrUpdateParameters | Parameters for creating a namespace resource.

    try:
        api_response = api_instance.namespaces_create_or_update(resource_group_name, namespace_name, api_version, subscription_id, parameters)
        print("The response of NamespacesApi->namespaces_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NamespaceCreateOrUpdateParameters**](NamespaceCreateOrUpdateParameters.md)| Parameters for creating a namespace resource. | 

### Return type

[**NamespaceResource**](NamespaceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespace successfully created. |  -  |
**201** | Namespace create request accepted. |  -  |
**202** | Namespace create or update request accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_create_or_update_authorization_rule**
> SharedAccessAuthorizationRuleResource namespaces_create_or_update_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id, parameters)



Creates or updates an AuthorizationRule for a Namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_authorization_rule_create_or_update_parameters import SharedAccessAuthorizationRuleCreateOrUpdateParameters
from openapi_client.models.shared_access_authorization_rule_resource import SharedAccessAuthorizationRuleResource
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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SharedAccessAuthorizationRuleCreateOrUpdateParameters() # SharedAccessAuthorizationRuleCreateOrUpdateParameters | The shared access AuthorizationRule.

    try:
        api_response = api_instance.namespaces_create_or_update_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of NamespacesApi->namespaces_create_or_update_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_create_or_update_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SharedAccessAuthorizationRuleCreateOrUpdateParameters**](SharedAccessAuthorizationRuleCreateOrUpdateParameters.md)| The shared access AuthorizationRule. | 

### Return type

[**SharedAccessAuthorizationRuleResource**](SharedAccessAuthorizationRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespace AuthorizationRule created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_delete**
> namespaces_delete(resource_group_name, namespace_name, api_version, subscription_id)



Deletes an existing namespace. This operation also removes all associated resources under the namespace.

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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.namespaces_delete(resource_group_name, namespace_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Namespace successfully deleted. |  -  |
**202** | Namespace delete request accepted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_delete_authorization_rule**
> namespaces_delete_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)



Deletes an AuthorizationRule for a Namespace.

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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.namespaces_delete_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_delete_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Namespace AuthorizationRule successfully deleted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_get**
> NamespaceResource namespaces_get(resource_group_name, namespace_name, api_version, subscription_id)



Gets the description of the specified namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.namespace_resource import NamespaceResource
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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_get(resource_group_name, namespace_name, api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NamespaceResource**](NamespaceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespace returned successfully. |  -  |
**201** | Namespace update request accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_get_authorization_rule**
> SharedAccessAuthorizationRuleResource namespaces_get_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)



Gets an AuthorizationRule for a Namespace by rule name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_authorization_rule_resource import SharedAccessAuthorizationRuleResource
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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_get_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_get_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_get_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedAccessAuthorizationRuleResource**](SharedAccessAuthorizationRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespace AuthorizationRule returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_list_authorization_rules**
> SharedAccessAuthorizationRuleListResult namespaces_list_authorization_rules(resource_group_name, namespace_name, api_version, subscription_id)



Gets a list of authorization rules for a Namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_authorization_rule_list_result import SharedAccessAuthorizationRuleListResult
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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_list_authorization_rules(resource_group_name, namespace_name, api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_list_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_list_authorization_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedAccessAuthorizationRuleListResult**](SharedAccessAuthorizationRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespace AuthorizationRule successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_list_by_resource_group**
> NamespaceListResult namespaces_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists the available Namespaces within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.namespace_list_result import NamespaceListResult
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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NamespaceListResult**](NamespaceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespaces returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_list_by_subscription**
> NamespaceListResult namespaces_list_by_subscription(api_version, subscription_id)



Lists all the available Namespaces within a subscription, irrespective of the resource groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.namespace_list_result import NamespaceListResult
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
    api_instance = openapi_client.NamespacesApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_list_by_subscription(api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NamespaceListResult**](NamespaceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespaces returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_list_post_authorization_rules**
> SharedAccessAuthorizationRuleListResult namespaces_list_post_authorization_rules(resource_group_name, namespace_name, api_version, subscription_id)



Gets a list of authorization rules for a Namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_authorization_rule_list_result import SharedAccessAuthorizationRuleListResult
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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_list_post_authorization_rules(resource_group_name, namespace_name, api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_list_post_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_list_post_authorization_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedAccessAuthorizationRuleListResult**](SharedAccessAuthorizationRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespace AuthorizationRule successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_post_authorization_rule**
> SharedAccessAuthorizationRulePostResource namespaces_post_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)



Gets an AuthorizationRule for a Namespace by rule name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_authorization_rule_post_resource import SharedAccessAuthorizationRulePostResource
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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_post_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_post_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_post_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedAccessAuthorizationRulePostResource**](SharedAccessAuthorizationRulePostResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespace AuthorizationRule returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_update**
> NamespaceResource namespaces_update(resource_group_name, namespace_name, api_version, subscription_id, parameters)



Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.namespace_resource import NamespaceResource
from openapi_client.models.namespace_update_parameter import NamespaceUpdateParameter
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
    api_instance = openapi_client.NamespacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NamespaceUpdateParameter() # NamespaceUpdateParameter | Parameters for updating a namespace resource.

    try:
        api_response = api_instance.namespaces_update(resource_group_name, namespace_name, api_version, subscription_id, parameters)
        print("The response of NamespacesApi->namespaces_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NamespaceUpdateParameter**](NamespaceUpdateParameter.md)| Parameters for updating a namespace resource. | 

### Return type

[**NamespaceResource**](NamespaceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespace successfully updated. |  -  |
**201** | Namespace update request accepted. |  -  |
**202** | Namespace create or update request accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

