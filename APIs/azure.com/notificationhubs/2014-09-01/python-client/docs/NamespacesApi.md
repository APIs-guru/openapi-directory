# openapi_client.NamespacesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**namespaces_check_availability**](NamespacesApi.md#namespaces_check_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.NotificationHubs/checkNamespaceAvailability | 
[**namespaces_create_or_update**](NamespacesApi.md#namespaces_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName} | 
[**namespaces_create_or_update_authorization_rule**](NamespacesApi.md#namespaces_create_or_update_authorization_rule) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName} | 
[**namespaces_delete**](NamespacesApi.md#namespaces_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName} | 
[**namespaces_delete_authorization_rule**](NamespacesApi.md#namespaces_delete_authorization_rule) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName} | 
[**namespaces_get**](NamespacesApi.md#namespaces_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName} | 
[**namespaces_get_authorization_rule**](NamespacesApi.md#namespaces_get_authorization_rule) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName} | 
[**namespaces_get_long_running_operation_status**](NamespacesApi.md#namespaces_get_long_running_operation_status) | **GET** /{operationStatusLink} | 
[**namespaces_list**](NamespacesApi.md#namespaces_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces | 
[**namespaces_list_all**](NamespacesApi.md#namespaces_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.NotificationHubs/namespaces | 
[**namespaces_list_authorization_rules**](NamespacesApi.md#namespaces_list_authorization_rules) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/AuthorizationRules | 
[**namespaces_list_keys**](NamespacesApi.md#namespaces_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}/listKeys | 


# **namespaces_check_availability**
> CheckAvailabilityResource namespaces_check_availability(api_version, subscription_id, parameters)



Checks the availability of the given service namespace across all Windows Azure subscriptions. This is useful because the domain name is created based on the service namespace name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_availability_parameters import CheckAvailabilityParameters
from openapi_client.models.check_availability_resource import CheckAvailabilityResource
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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.CheckAvailabilityParameters() # CheckAvailabilityParameters | The namespace name.

    try:
        api_response = api_instance.namespaces_check_availability(api_version, subscription_id, parameters)
        print("The response of NamespacesApi->namespaces_check_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_check_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**CheckAvailabilityParameters**](CheckAvailabilityParameters.md)| The namespace name. | 

### Return type

[**CheckAvailabilityResource**](CheckAvailabilityResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_create_or_update**
> NamespaceResource namespaces_create_or_update(resource_group_name, namespace_name, api_version, subscription_id, parameters)



Creates/Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NamespaceCreateOrUpdateParameters() # NamespaceCreateOrUpdateParameters | Parameters supplied to create a Namespace Resource.

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
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NamespaceCreateOrUpdateParameters**](NamespaceCreateOrUpdateParameters.md)| Parameters supplied to create a Namespace Resource. | 

### Return type

[**NamespaceResource**](NamespaceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_create_or_update_authorization_rule**
> SharedAccessAuthorizationRuleResource namespaces_create_or_update_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id, parameters)



Creates an authorization rule for a namespace

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    authorization_rule_name = 'authorization_rule_name_example' # str | Authorization Rule Name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SharedAccessAuthorizationRuleCreateOrUpdateParameters() # SharedAccessAuthorizationRuleCreateOrUpdateParameters | The shared access authorization rule.

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
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **authorization_rule_name** | **str**| Authorization Rule Name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SharedAccessAuthorizationRuleCreateOrUpdateParameters**](SharedAccessAuthorizationRuleCreateOrUpdateParameters.md)| The shared access authorization rule. | 

### Return type

[**SharedAccessAuthorizationRuleResource**](SharedAccessAuthorizationRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_delete**
> namespaces_delete(resource_group_name, namespace_name, api_version, subscription_id)



Deletes an existing namespace. This operation also removes all associated notificationHubs under the namespace.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.namespaces_delete(resource_group_name, namespace_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**202** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_delete_authorization_rule**
> namespaces_delete_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)



Deletes a namespace authorization rule

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    authorization_rule_name = 'authorization_rule_name_example' # str | Authorization Rule Name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.namespaces_delete_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_delete_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **authorization_rule_name** | **str**| Authorization Rule Name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_get**
> NamespaceResource namespaces_get(resource_group_name, namespace_name, api_version, subscription_id)



Returns the description for the specified namespace.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NamespaceResource**](NamespaceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_get_authorization_rule**
> SharedAccessAuthorizationRuleResource namespaces_get_authorization_rule(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)



Gets an authorization rule for a namespace by name.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name
    authorization_rule_name = 'authorization_rule_name_example' # str | Authorization rule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name | 
 **authorization_rule_name** | **str**| Authorization rule name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedAccessAuthorizationRuleResource**](SharedAccessAuthorizationRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_get_long_running_operation_status**
> namespaces_get_long_running_operation_status(operation_status_link)



The Get Operation Status operation returns the status of the specified operation. After calling an asynchronous operation, you can call Get Operation Status to determine whether the operation has succeeded, failed, or is still in progress.

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
    operation_status_link = 'operation_status_link_example' # str | Location value returned by the Begin operation.

    try:
        api_instance.namespaces_get_long_running_operation_status(operation_status_link)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_get_long_running_operation_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_status_link** | **str**| Location value returned by the Begin operation. | 

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
**200** |  |  -  |
**202** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_list**
> NamespaceListResult namespaces_list(resource_group_name, api_version, subscription_id)



Lists the available namespaces within a resourceGroup.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. If resourceGroupName value is null the method lists all the namespaces within subscription
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_list(resource_group_name, api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. If resourceGroupName value is null the method lists all the namespaces within subscription | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NamespaceListResult**](NamespaceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_list_all**
> NamespaceListResult namespaces_list_all(api_version, subscription_id)



Lists all the available namespaces within the subscription irrespective of the resourceGroups.

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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_list_all(api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NamespaceListResult**](NamespaceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_list_authorization_rules**
> SharedAccessAuthorizationRuleListResult namespaces_list_authorization_rules(resource_group_name, namespace_name, api_version, subscription_id)



Gets the authorization rules for a namespace.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedAccessAuthorizationRuleListResult**](SharedAccessAuthorizationRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **namespaces_list_keys**
> ResourceListKeys namespaces_list_keys(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)



Gets the Primary and Secondary ConnectionStrings to the namespace 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_list_keys import ResourceListKeys
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The connection string of the namespace for the specified authorizationRule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.namespaces_list_keys(resource_group_name, namespace_name, authorization_rule_name, api_version, subscription_id)
        print("The response of NamespacesApi->namespaces_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NamespacesApi->namespaces_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **authorization_rule_name** | **str**| The connection string of the namespace for the specified authorizationRule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ResourceListKeys**](ResourceListKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

