# openapi_client.NotificationHubsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notification_hubs_check_availability**](NotificationHubsApi.md#notification_hubs_check_availability) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/checkNotificationHubAvailability | 
[**notification_hubs_create_or_update**](NotificationHubsApi.md#notification_hubs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName} | 
[**notification_hubs_create_or_update_authorization_rule**](NotificationHubsApi.md#notification_hubs_create_or_update_authorization_rule) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/AuthorizationRules/{authorizationRuleName} | 
[**notification_hubs_delete**](NotificationHubsApi.md#notification_hubs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName} | 
[**notification_hubs_delete_authorization_rule**](NotificationHubsApi.md#notification_hubs_delete_authorization_rule) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/AuthorizationRules/{authorizationRuleName} | 
[**notification_hubs_get**](NotificationHubsApi.md#notification_hubs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName} | 
[**notification_hubs_get_authorization_rule**](NotificationHubsApi.md#notification_hubs_get_authorization_rule) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/AuthorizationRules/{authorizationRuleName} | 
[**notification_hubs_get_pns_credentials**](NotificationHubsApi.md#notification_hubs_get_pns_credentials) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/pnsCredentials | 
[**notification_hubs_list**](NotificationHubsApi.md#notification_hubs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs | 
[**notification_hubs_list_authorization_rules**](NotificationHubsApi.md#notification_hubs_list_authorization_rules) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/AuthorizationRules | 
[**notification_hubs_list_keys**](NotificationHubsApi.md#notification_hubs_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/AuthorizationRules/{authorizationRuleName}/listKeys | 


# **notification_hubs_check_availability**
> CheckAvailabilityResource notification_hubs_check_availability(resource_group_name, namespace_name, api_version, subscription_id, parameters)



Checks the availability of the given notificationHub in a namespace.

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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.CheckAvailabilityParameters() # CheckAvailabilityParameters | The notificationHub name.

    try:
        api_response = api_instance.notification_hubs_check_availability(resource_group_name, namespace_name, api_version, subscription_id, parameters)
        print("The response of NotificationHubsApi->notification_hubs_check_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_check_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**CheckAvailabilityParameters**](CheckAvailabilityParameters.md)| The notificationHub name. | 

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

# **notification_hubs_create_or_update**
> NotificationHubResource notification_hubs_create_or_update(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id, parameters)



Creates/Update a NotificationHub in a namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.notification_hub_create_or_update_parameters import NotificationHubCreateOrUpdateParameters
from openapi_client.models.notification_hub_resource import NotificationHubResource
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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    notification_hub_name = 'notification_hub_name_example' # str | The notification hub name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NotificationHubCreateOrUpdateParameters() # NotificationHubCreateOrUpdateParameters | Parameters supplied to the create/update a NotificationHub Resource.

    try:
        api_response = api_instance.notification_hubs_create_or_update(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id, parameters)
        print("The response of NotificationHubsApi->notification_hubs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **notification_hub_name** | **str**| The notification hub name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NotificationHubCreateOrUpdateParameters**](NotificationHubCreateOrUpdateParameters.md)| Parameters supplied to the create/update a NotificationHub Resource. | 

### Return type

[**NotificationHubResource**](NotificationHubResource.md)

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

# **notification_hubs_create_or_update_authorization_rule**
> SharedAccessAuthorizationRuleResource notification_hubs_create_or_update_authorization_rule(resource_group_name, namespace_name, notification_hub_name, authorization_rule_name, api_version, subscription_id, parameters)



Creates/Updates an authorization rule for a NotificationHub

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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    notification_hub_name = 'notification_hub_name_example' # str | The notification hub name.
    authorization_rule_name = 'authorization_rule_name_example' # str | Authorization Rule Name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SharedAccessAuthorizationRuleCreateOrUpdateParameters() # SharedAccessAuthorizationRuleCreateOrUpdateParameters | The shared access authorization rule.

    try:
        api_response = api_instance.notification_hubs_create_or_update_authorization_rule(resource_group_name, namespace_name, notification_hub_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of NotificationHubsApi->notification_hubs_create_or_update_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_create_or_update_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **notification_hub_name** | **str**| The notification hub name. | 
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

# **notification_hubs_delete**
> notification_hubs_delete(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id)



Deletes a notification hub associated with a namespace.

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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    notification_hub_name = 'notification_hub_name_example' # str | The notification hub name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.notification_hubs_delete(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **notification_hub_name** | **str**| The notification hub name. | 
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_hubs_delete_authorization_rule**
> notification_hubs_delete_authorization_rule(resource_group_name, namespace_name, notification_hub_name, authorization_rule_name, api_version, subscription_id)



Deletes a notificationHub authorization rule

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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    notification_hub_name = 'notification_hub_name_example' # str | The notification hub name.
    authorization_rule_name = 'authorization_rule_name_example' # str | Authorization Rule Name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.notification_hubs_delete_authorization_rule(resource_group_name, namespace_name, notification_hub_name, authorization_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_delete_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **notification_hub_name** | **str**| The notification hub name. | 
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

# **notification_hubs_get**
> NotificationHubResource notification_hubs_get(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id)



Lists the notification hubs associated with a namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.notification_hub_resource import NotificationHubResource
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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    notification_hub_name = 'notification_hub_name_example' # str | The notification hub name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.notification_hubs_get(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id)
        print("The response of NotificationHubsApi->notification_hubs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **notification_hub_name** | **str**| The notification hub name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NotificationHubResource**](NotificationHubResource.md)

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

# **notification_hubs_get_authorization_rule**
> SharedAccessAuthorizationRuleResource notification_hubs_get_authorization_rule(resource_group_name, namespace_name, notification_hub_name, authorization_rule_name, api_version, subscription_id)



Gets an authorization rule for a NotificationHub by name.

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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name
    notification_hub_name = 'notification_hub_name_example' # str | The notification hub name.
    authorization_rule_name = 'authorization_rule_name_example' # str | authorization rule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.notification_hubs_get_authorization_rule(resource_group_name, namespace_name, notification_hub_name, authorization_rule_name, api_version, subscription_id)
        print("The response of NotificationHubsApi->notification_hubs_get_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_get_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name | 
 **notification_hub_name** | **str**| The notification hub name. | 
 **authorization_rule_name** | **str**| authorization rule name. | 
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

# **notification_hubs_get_pns_credentials**
> NotificationHubResource notification_hubs_get_pns_credentials(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id)



Lists the PNS Credentials associated with a notification hub .

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.notification_hub_resource import NotificationHubResource
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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    notification_hub_name = 'notification_hub_name_example' # str | The notification hub name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.notification_hubs_get_pns_credentials(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id)
        print("The response of NotificationHubsApi->notification_hubs_get_pns_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_get_pns_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **notification_hub_name** | **str**| The notification hub name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NotificationHubResource**](NotificationHubResource.md)

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

# **notification_hubs_list**
> NotificationHubListResult notification_hubs_list(resource_group_name, namespace_name, api_version, subscription_id)



Lists the notification hubs associated with a namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.notification_hub_list_result import NotificationHubListResult
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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.notification_hubs_list(resource_group_name, namespace_name, api_version, subscription_id)
        print("The response of NotificationHubsApi->notification_hubs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NotificationHubListResult**](NotificationHubListResult.md)

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

# **notification_hubs_list_authorization_rules**
> SharedAccessAuthorizationRuleListResult notification_hubs_list_authorization_rules(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id)



Gets the authorization rules for a NotificationHub.

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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name
    notification_hub_name = 'notification_hub_name_example' # str | The notification hub name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.notification_hubs_list_authorization_rules(resource_group_name, namespace_name, notification_hub_name, api_version, subscription_id)
        print("The response of NotificationHubsApi->notification_hubs_list_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_list_authorization_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name | 
 **notification_hub_name** | **str**| The notification hub name. | 
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

# **notification_hubs_list_keys**
> ResourceListKeys notification_hubs_list_keys(resource_group_name, namespace_name, notification_hub_name, authorization_rule_name, api_version, subscription_id)



Gets the Primary and Secondary ConnectionStrings to the NotificationHub 

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
    api_instance = openapi_client.NotificationHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    namespace_name = 'namespace_name_example' # str | The namespace name.
    notification_hub_name = 'notification_hub_name_example' # str | The notification hub name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The connection string of the NotificationHub for the specified authorizationRule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.notification_hubs_list_keys(resource_group_name, namespace_name, notification_hub_name, authorization_rule_name, api_version, subscription_id)
        print("The response of NotificationHubsApi->notification_hubs_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationHubsApi->notification_hubs_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **namespace_name** | **str**| The namespace name. | 
 **notification_hub_name** | **str**| The notification hub name. | 
 **authorization_rule_name** | **str**| The connection string of the NotificationHub for the specified authorizationRule. | 
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

