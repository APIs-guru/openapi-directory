# openapi_client.DisasterRecoveryConfigsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disaster_recovery_configs_break_pairing**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_break_pairing) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/breakPairing | 
[**disaster_recovery_configs_check_name_availability**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_check_name_availability) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/CheckNameAvailability | 
[**disaster_recovery_configs_create_or_update**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias} | 
[**disaster_recovery_configs_delete**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias} | 
[**disaster_recovery_configs_fail_over**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_fail_over) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/failover | 
[**disaster_recovery_configs_get**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias} | 
[**disaster_recovery_configs_get_authorization_rule**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_get_authorization_rule) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/AuthorizationRules/{authorizationRuleName} | 
[**disaster_recovery_configs_list**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs | 
[**disaster_recovery_configs_list_authorization_rules**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_list_authorization_rules) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/AuthorizationRules | 
[**disaster_recovery_configs_list_keys**](DisasterRecoveryConfigsApi.md#disaster_recovery_configs_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/AuthorizationRules/{authorizationRuleName}/listKeys | 


# **disaster_recovery_configs_break_pairing**
> disaster_recovery_configs_break_pairing(resource_group_name, namespace_name, alias, api_version, subscription_id)



This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces

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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    alias = 'alias_example' # str | The Disaster Recovery configuration name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.disaster_recovery_configs_break_pairing(resource_group_name, namespace_name, alias, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_break_pairing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **alias** | **str**| The Disaster Recovery configuration name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Break-Pairing operation is successful. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configs_check_name_availability**
> CheckNameAvailabilityResult disaster_recovery_configs_check_name_availability(resource_group_name, namespace_name, api_version, subscription_id, parameters)



Check the give namespace name availability.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability import CheckNameAvailability
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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.CheckNameAvailability() # CheckNameAvailability | Parameters to check availability of the given namespace name

    try:
        api_response = api_instance.disaster_recovery_configs_check_name_availability(resource_group_name, namespace_name, api_version, subscription_id, parameters)
        print("The response of DisasterRecoveryConfigsApi->disaster_recovery_configs_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**CheckNameAvailability**](CheckNameAvailability.md)| Parameters to check availability of the given namespace name | 

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
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configs_create_or_update**
> ArmDisasterRecovery disaster_recovery_configs_create_or_update(resource_group_name, namespace_name, alias, api_version, subscription_id, parameters)



Creates or updates a new Alias(Disaster Recovery configuration)

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.arm_disaster_recovery import ArmDisasterRecovery
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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    alias = 'alias_example' # str | The Disaster Recovery configuration name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ArmDisasterRecovery() # ArmDisasterRecovery | Parameters required to create an Alias(Disaster Recovery configuration)

    try:
        api_response = api_instance.disaster_recovery_configs_create_or_update(resource_group_name, namespace_name, alias, api_version, subscription_id, parameters)
        print("The response of DisasterRecoveryConfigsApi->disaster_recovery_configs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **alias** | **str**| The Disaster Recovery configuration name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ArmDisasterRecovery**](ArmDisasterRecovery.md)| Parameters required to create an Alias(Disaster Recovery configuration) | 

### Return type

[**ArmDisasterRecovery**](ArmDisasterRecovery.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alias(Disaster Recovery configuration) successfully created |  -  |
**201** | Alias(Disaster Recovery configuration) creation request received |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configs_delete**
> disaster_recovery_configs_delete(resource_group_name, namespace_name, alias, api_version, subscription_id)



Deletes an Alias(Disaster Recovery configuration)

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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    alias = 'alias_example' # str | The Disaster Recovery configuration name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.disaster_recovery_configs_delete(resource_group_name, namespace_name, alias, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **alias** | **str**| The Disaster Recovery configuration name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Delete Alias(Disaster Recovery configuration) request accepted |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configs_fail_over**
> disaster_recovery_configs_fail_over(resource_group_name, namespace_name, alias, api_version, subscription_id)



Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace

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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    alias = 'alias_example' # str | The Disaster Recovery configuration name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.disaster_recovery_configs_fail_over(resource_group_name, namespace_name, alias, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_fail_over: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **alias** | **str**| The Disaster Recovery configuration name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Failover operation is successful. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configs_get**
> ArmDisasterRecovery disaster_recovery_configs_get(resource_group_name, namespace_name, alias, api_version, subscription_id)



Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.arm_disaster_recovery import ArmDisasterRecovery
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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    alias = 'alias_example' # str | The Disaster Recovery configuration name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.disaster_recovery_configs_get(resource_group_name, namespace_name, alias, api_version, subscription_id)
        print("The response of DisasterRecoveryConfigsApi->disaster_recovery_configs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **alias** | **str**| The Disaster Recovery configuration name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ArmDisasterRecovery**](ArmDisasterRecovery.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the Alias(Disaster Recovery configurations) |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configs_get_authorization_rule**
> SBAuthorizationRule disaster_recovery_configs_get_authorization_rule(resource_group_name, namespace_name, alias, authorization_rule_name, api_version, subscription_id)



Gets an authorization rule for a namespace by rule name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_authorization_rule import SBAuthorizationRule
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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    alias = 'alias_example' # str | The Disaster Recovery configuration name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.disaster_recovery_configs_get_authorization_rule(resource_group_name, namespace_name, alias, authorization_rule_name, api_version, subscription_id)
        print("The response of DisasterRecoveryConfigsApi->disaster_recovery_configs_get_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_get_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **alias** | **str**| The Disaster Recovery configuration name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SBAuthorizationRule**](SBAuthorizationRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DisasterRecoveryConfigs authorization rule returned successfully. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configs_list**
> ArmDisasterRecoveryListResult disaster_recovery_configs_list(resource_group_name, namespace_name, api_version, subscription_id)



Gets all Alias(Disaster Recovery configurations)

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.arm_disaster_recovery_list_result import ArmDisasterRecoveryListResult
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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.disaster_recovery_configs_list(resource_group_name, namespace_name, api_version, subscription_id)
        print("The response of DisasterRecoveryConfigsApi->disaster_recovery_configs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ArmDisasterRecoveryListResult**](ArmDisasterRecoveryListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of Alias(Disaster Recovery configurations) for servicebus namespace |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configs_list_authorization_rules**
> SBAuthorizationRuleListResult disaster_recovery_configs_list_authorization_rules(resource_group_name, namespace_name, alias, api_version, subscription_id)



Gets the authorization rules for a namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_authorization_rule_list_result import SBAuthorizationRuleListResult
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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    alias = 'alias_example' # str | The Disaster Recovery configuration name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.disaster_recovery_configs_list_authorization_rules(resource_group_name, namespace_name, alias, api_version, subscription_id)
        print("The response of DisasterRecoveryConfigsApi->disaster_recovery_configs_list_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_list_authorization_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **alias** | **str**| The Disaster Recovery configuration name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SBAuthorizationRuleListResult**](SBAuthorizationRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DisasterRecoveryConfigs authorization rules returned successfully. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disaster_recovery_configs_list_keys**
> AccessKeys disaster_recovery_configs_list_keys(resource_group_name, namespace_name, alias, authorization_rule_name, api_version, subscription_id)



Gets the primary and secondary connection strings for the namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_keys import AccessKeys
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
    api_instance = openapi_client.DisasterRecoveryConfigsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    alias = 'alias_example' # str | The Disaster Recovery configuration name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.disaster_recovery_configs_list_keys(resource_group_name, namespace_name, alias, authorization_rule_name, api_version, subscription_id)
        print("The response of DisasterRecoveryConfigsApi->disaster_recovery_configs_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisasterRecoveryConfigsApi->disaster_recovery_configs_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **alias** | **str**| The Disaster Recovery configuration name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AccessKeys**](AccessKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection strings successfully returned. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

