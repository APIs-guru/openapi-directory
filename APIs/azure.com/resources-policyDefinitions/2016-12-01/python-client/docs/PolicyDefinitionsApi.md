# openapi_client.PolicyDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_definitions_create_or_update**](PolicyDefinitionsApi.md#policy_definitions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName} | 
[**policy_definitions_create_or_update_at_management_group**](PolicyDefinitionsApi.md#policy_definitions_create_or_update_at_management_group) | **PUT** /providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName} | 
[**policy_definitions_delete**](PolicyDefinitionsApi.md#policy_definitions_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName} | 
[**policy_definitions_delete_at_management_group**](PolicyDefinitionsApi.md#policy_definitions_delete_at_management_group) | **DELETE** /providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName} | 
[**policy_definitions_get**](PolicyDefinitionsApi.md#policy_definitions_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName} | 
[**policy_definitions_get_at_management_group**](PolicyDefinitionsApi.md#policy_definitions_get_at_management_group) | **GET** /providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName} | 
[**policy_definitions_get_built_in**](PolicyDefinitionsApi.md#policy_definitions_get_built_in) | **GET** /providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName} | 
[**policy_definitions_list**](PolicyDefinitionsApi.md#policy_definitions_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions | 
[**policy_definitions_list_built_in**](PolicyDefinitionsApi.md#policy_definitions_list_built_in) | **GET** /providers/Microsoft.Authorization/policyDefinitions | 
[**policy_definitions_list_by_management_group**](PolicyDefinitionsApi.md#policy_definitions_list_by_management_group) | **GET** /providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions | 


# **policy_definitions_create_or_update**
> PolicyDefinition policy_definitions_create_or_update(policy_definition_name, api_version, subscription_id, parameters)



Creates or updates a policy definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition import PolicyDefinition
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The name of the policy definition to create.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.PolicyDefinition() # PolicyDefinition | The policy definition properties.

    try:
        api_response = api_instance.policy_definitions_create_or_update(policy_definition_name, api_version, subscription_id, parameters)
        print("The response of PolicyDefinitionsApi->policy_definitions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The name of the policy definition to create. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**PolicyDefinition**](PolicyDefinition.md)| The policy definition properties. | 

### Return type

[**PolicyDefinition**](PolicyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created - Returns information about the policy definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_definitions_create_or_update_at_management_group**
> PolicyDefinition policy_definitions_create_or_update_at_management_group(policy_definition_name, api_version, management_group_id, parameters)



Creates or updates a policy definition at management group level.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition import PolicyDefinition
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The name of the policy definition to create.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    management_group_id = 'management_group_id_example' # str | The ID of the management group.
    parameters = openapi_client.PolicyDefinition() # PolicyDefinition | The policy definition properties.

    try:
        api_response = api_instance.policy_definitions_create_or_update_at_management_group(policy_definition_name, api_version, management_group_id, parameters)
        print("The response of PolicyDefinitionsApi->policy_definitions_create_or_update_at_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_create_or_update_at_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The name of the policy definition to create. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **management_group_id** | **str**| The ID of the management group. | 
 **parameters** | [**PolicyDefinition**](PolicyDefinition.md)| The policy definition properties. | 

### Return type

[**PolicyDefinition**](PolicyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created - Returns information about the policy definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_definitions_delete**
> policy_definitions_delete(policy_definition_name, api_version, subscription_id)



Deletes a policy definition.

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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The name of the policy definition to delete.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.policy_definitions_delete(policy_definition_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The name of the policy definition to delete. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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

# **policy_definitions_delete_at_management_group**
> policy_definitions_delete_at_management_group(policy_definition_name, api_version, management_group_id)



Deletes a policy definition at management group level.

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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The name of the policy definition to delete.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    management_group_id = 'management_group_id_example' # str | The ID of the management group.

    try:
        api_instance.policy_definitions_delete_at_management_group(policy_definition_name, api_version, management_group_id)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_delete_at_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The name of the policy definition to delete. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **management_group_id** | **str**| The ID of the management group. | 

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

# **policy_definitions_get**
> PolicyDefinition policy_definitions_get(policy_definition_name, api_version, subscription_id)



Gets the policy definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition import PolicyDefinition
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The name of the policy definition to get.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.policy_definitions_get(policy_definition_name, api_version, subscription_id)
        print("The response of PolicyDefinitionsApi->policy_definitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The name of the policy definition to get. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**PolicyDefinition**](PolicyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the policy definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_definitions_get_at_management_group**
> PolicyDefinition policy_definitions_get_at_management_group(policy_definition_name, api_version, management_group_id)



Gets the policy definition at management group level.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition import PolicyDefinition
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The name of the policy definition to get.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    management_group_id = 'management_group_id_example' # str | The ID of the management group.

    try:
        api_response = api_instance.policy_definitions_get_at_management_group(policy_definition_name, api_version, management_group_id)
        print("The response of PolicyDefinitionsApi->policy_definitions_get_at_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_get_at_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The name of the policy definition to get. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **management_group_id** | **str**| The ID of the management group. | 

### Return type

[**PolicyDefinition**](PolicyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the policy definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_definitions_get_built_in**
> PolicyDefinition policy_definitions_get_built_in(policy_definition_name, api_version)



Gets the built in policy definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition import PolicyDefinition
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The name of the built in policy definition to get.
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        api_response = api_instance.policy_definitions_get_built_in(policy_definition_name, api_version)
        print("The response of PolicyDefinitionsApi->policy_definitions_get_built_in:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_get_built_in: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The name of the built in policy definition to get. | 
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**PolicyDefinition**](PolicyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the built in policy definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_definitions_list**
> PolicyDefinitionListResult policy_definitions_list(api_version, subscription_id)



Gets all the policy definitions for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition_list_result import PolicyDefinitionListResult
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.policy_definitions_list(api_version, subscription_id)
        print("The response of PolicyDefinitionsApi->policy_definitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**PolicyDefinitionListResult**](PolicyDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns ana array of policy definitions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_definitions_list_built_in**
> PolicyDefinitionListResult policy_definitions_list_built_in(api_version)



Gets all the built in policy definitions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition_list_result import PolicyDefinitionListResult
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        api_response = api_instance.policy_definitions_list_built_in(api_version)
        print("The response of PolicyDefinitionsApi->policy_definitions_list_built_in:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_list_built_in: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**PolicyDefinitionListResult**](PolicyDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of built in policy definitions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_definitions_list_by_management_group**
> PolicyDefinitionListResult policy_definitions_list_by_management_group(api_version, management_group_id)



Gets all the policy definitions for a subscription at management group level.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition_list_result import PolicyDefinitionListResult
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the operation.
    management_group_id = 'management_group_id_example' # str | The ID of the management group.

    try:
        api_response = api_instance.policy_definitions_list_by_management_group(api_version, management_group_id)
        print("The response of PolicyDefinitionsApi->policy_definitions_list_by_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_list_by_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the operation. | 
 **management_group_id** | **str**| The ID of the management group. | 

### Return type

[**PolicyDefinitionListResult**](PolicyDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns ana array of policy definitions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

