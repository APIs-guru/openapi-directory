# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**remediations_cancel_at_management_group**](DefaultApi.md#remediations_cancel_at_management_group) | **POST** /providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel | 
[**remediations_cancel_at_resource**](DefaultApi.md#remediations_cancel_at_resource) | **POST** /{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel | 
[**remediations_cancel_at_resource_group**](DefaultApi.md#remediations_cancel_at_resource_group) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel | 
[**remediations_cancel_at_subscription**](DefaultApi.md#remediations_cancel_at_subscription) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel | 
[**remediations_create_or_update_at_management_group**](DefaultApi.md#remediations_create_or_update_at_management_group) | **PUT** /providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_create_or_update_at_resource**](DefaultApi.md#remediations_create_or_update_at_resource) | **PUT** /{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_create_or_update_at_resource_group**](DefaultApi.md#remediations_create_or_update_at_resource_group) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_create_or_update_at_subscription**](DefaultApi.md#remediations_create_or_update_at_subscription) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_delete_at_management_group**](DefaultApi.md#remediations_delete_at_management_group) | **DELETE** /providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_delete_at_resource**](DefaultApi.md#remediations_delete_at_resource) | **DELETE** /{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_delete_at_resource_group**](DefaultApi.md#remediations_delete_at_resource_group) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_delete_at_subscription**](DefaultApi.md#remediations_delete_at_subscription) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_get_at_management_group**](DefaultApi.md#remediations_get_at_management_group) | **GET** /providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_get_at_resource**](DefaultApi.md#remediations_get_at_resource) | **GET** /{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_get_at_resource_group**](DefaultApi.md#remediations_get_at_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_get_at_subscription**](DefaultApi.md#remediations_get_at_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName} | 
[**remediations_list_deployments_at_management_group**](DefaultApi.md#remediations_list_deployments_at_management_group) | **POST** /providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments | 
[**remediations_list_deployments_at_resource**](DefaultApi.md#remediations_list_deployments_at_resource) | **POST** /{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments | 
[**remediations_list_deployments_at_resource_group**](DefaultApi.md#remediations_list_deployments_at_resource_group) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments | 
[**remediations_list_deployments_at_subscription**](DefaultApi.md#remediations_list_deployments_at_subscription) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments | 
[**remediations_list_for_management_group**](DefaultApi.md#remediations_list_for_management_group) | **GET** /providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations | 
[**remediations_list_for_resource**](DefaultApi.md#remediations_list_for_resource) | **GET** /{resourceId}/providers/Microsoft.PolicyInsights/remediations | 
[**remediations_list_for_resource_group**](DefaultApi.md#remediations_list_for_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations | 
[**remediations_list_for_subscription**](DefaultApi.md#remediations_list_for_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations | 


# **remediations_cancel_at_management_group**
> Remediation remediations_cancel_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version)



Cancels a remediation at management group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    management_groups_namespace = 'management_groups_namespace_example' # str | The namespace for Microsoft Management RP; only \"Microsoft.Management\" is allowed.
    management_group_id = 'management_group_id_example' # str | Management group ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_cancel_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version)
        print("The response of DefaultApi->remediations_cancel_at_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_cancel_at_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_groups_namespace** | **str**| The namespace for Microsoft Management RP; only \&quot;Microsoft.Management\&quot; is allowed. | 
 **management_group_id** | **str**| Management group ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The remediation that was canceled. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_cancel_at_resource**
> Remediation remediations_cancel_at_resource(resource_id, remediation_name, api_version)



Cancel a remediation at resource scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    resource_id = 'resource_id_example' # str | Resource ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_cancel_at_resource(resource_id, remediation_name, api_version)
        print("The response of DefaultApi->remediations_cancel_at_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_cancel_at_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| Resource ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The remediation that was canceled. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_cancel_at_resource_group**
> Remediation remediations_cancel_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version)



Cancels a remediation at resource group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_cancel_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version)
        print("The response of DefaultApi->remediations_cancel_at_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_cancel_at_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The remediation that was canceled. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_cancel_at_subscription**
> Remediation remediations_cancel_at_subscription(subscription_id, remediation_name, api_version)



Cancels a remediation at subscription scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_cancel_at_subscription(subscription_id, remediation_name, api_version)
        print("The response of DefaultApi->remediations_cancel_at_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_cancel_at_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The remediation that was canceled. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_create_or_update_at_management_group**
> Remediation remediations_create_or_update_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version, parameters)



Creates or updates a remediation at management group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    management_groups_namespace = 'management_groups_namespace_example' # str | The namespace for Microsoft Management RP; only \"Microsoft.Management\" is allowed.
    management_group_id = 'management_group_id_example' # str | Management group ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.Remediation() # Remediation | The remediation parameters.

    try:
        api_response = api_instance.remediations_create_or_update_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version, parameters)
        print("The response of DefaultApi->remediations_create_or_update_at_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_create_or_update_at_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_groups_namespace** | **str**| The namespace for Microsoft Management RP; only \&quot;Microsoft.Management\&quot; is allowed. | 
 **management_group_id** | **str**| Management group ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**Remediation**](Remediation.md)| The remediation parameters. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated remediation. |  -  |
**201** | The created remediation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_create_or_update_at_resource**
> Remediation remediations_create_or_update_at_resource(resource_id, remediation_name, api_version, parameters)



Creates or updates a remediation at resource scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    resource_id = 'resource_id_example' # str | Resource ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.Remediation() # Remediation | The remediation parameters.

    try:
        api_response = api_instance.remediations_create_or_update_at_resource(resource_id, remediation_name, api_version, parameters)
        print("The response of DefaultApi->remediations_create_or_update_at_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_create_or_update_at_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| Resource ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**Remediation**](Remediation.md)| The remediation parameters. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated remediation. |  -  |
**201** | The created remediation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_create_or_update_at_resource_group**
> Remediation remediations_create_or_update_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version, parameters)



Creates or updates a remediation at resource group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.Remediation() # Remediation | The remediation parameters.

    try:
        api_response = api_instance.remediations_create_or_update_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version, parameters)
        print("The response of DefaultApi->remediations_create_or_update_at_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_create_or_update_at_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**Remediation**](Remediation.md)| The remediation parameters. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated remediation. |  -  |
**201** | The created remediation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_create_or_update_at_subscription**
> Remediation remediations_create_or_update_at_subscription(subscription_id, remediation_name, api_version, parameters)



Creates or updates a remediation at subscription scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.Remediation() # Remediation | The remediation parameters.

    try:
        api_response = api_instance.remediations_create_or_update_at_subscription(subscription_id, remediation_name, api_version, parameters)
        print("The response of DefaultApi->remediations_create_or_update_at_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_create_or_update_at_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**Remediation**](Remediation.md)| The remediation parameters. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated remediation. |  -  |
**201** | The created remediation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_delete_at_management_group**
> Remediation remediations_delete_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version)



Deletes an existing remediation at management group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    management_groups_namespace = 'management_groups_namespace_example' # str | The namespace for Microsoft Management RP; only \"Microsoft.Management\" is allowed.
    management_group_id = 'management_group_id_example' # str | Management group ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_delete_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version)
        print("The response of DefaultApi->remediations_delete_at_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_delete_at_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_groups_namespace** | **str**| The namespace for Microsoft Management RP; only \&quot;Microsoft.Management\&quot; is allowed. | 
 **management_group_id** | **str**| Management group ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted remediation. |  -  |
**204** | The remediation did not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_delete_at_resource**
> Remediation remediations_delete_at_resource(resource_id, remediation_name, api_version)



Deletes an existing remediation at individual resource scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    resource_id = 'resource_id_example' # str | Resource ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_delete_at_resource(resource_id, remediation_name, api_version)
        print("The response of DefaultApi->remediations_delete_at_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_delete_at_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| Resource ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted remediation. |  -  |
**204** | The remediation did not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_delete_at_resource_group**
> Remediation remediations_delete_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version)



Deletes an existing remediation at resource group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_delete_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version)
        print("The response of DefaultApi->remediations_delete_at_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_delete_at_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted remediation. |  -  |
**204** | The remediation did not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_delete_at_subscription**
> Remediation remediations_delete_at_subscription(subscription_id, remediation_name, api_version)



Deletes an existing remediation at subscription scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_delete_at_subscription(subscription_id, remediation_name, api_version)
        print("The response of DefaultApi->remediations_delete_at_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_delete_at_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted remediation. |  -  |
**204** | The remediation did not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_get_at_management_group**
> Remediation remediations_get_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version)



Gets an existing remediation at management group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    management_groups_namespace = 'management_groups_namespace_example' # str | The namespace for Microsoft Management RP; only \"Microsoft.Management\" is allowed.
    management_group_id = 'management_group_id_example' # str | Management group ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_get_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version)
        print("The response of DefaultApi->remediations_get_at_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_get_at_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_groups_namespace** | **str**| The namespace for Microsoft Management RP; only \&quot;Microsoft.Management\&quot; is allowed. | 
 **management_group_id** | **str**| Management group ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_get_at_resource**
> Remediation remediations_get_at_resource(resource_id, remediation_name, api_version)



Gets an existing remediation at resource scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    resource_id = 'resource_id_example' # str | Resource ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_get_at_resource(resource_id, remediation_name, api_version)
        print("The response of DefaultApi->remediations_get_at_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_get_at_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| Resource ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_get_at_resource_group**
> Remediation remediations_get_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version)



Gets an existing remediation at resource group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_get_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version)
        print("The response of DefaultApi->remediations_get_at_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_get_at_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_get_at_subscription**
> Remediation remediations_get_at_subscription(subscription_id, remediation_name, api_version)



Gets an existing remediation at subscription scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation import Remediation
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.remediations_get_at_subscription(subscription_id, remediation_name, api_version)
        print("The response of DefaultApi->remediations_get_at_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_get_at_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Remediation**](Remediation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_list_deployments_at_management_group**
> RemediationDeploymentsListResult remediations_list_deployments_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version, top=top)



Gets all deployments for a remediation at management group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation_deployments_list_result import RemediationDeploymentsListResult
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
    management_groups_namespace = 'management_groups_namespace_example' # str | The namespace for Microsoft Management RP; only \"Microsoft.Management\" is allowed.
    management_group_id = 'management_group_id_example' # str | Management group ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)

    try:
        api_response = api_instance.remediations_list_deployments_at_management_group(management_groups_namespace, management_group_id, remediation_name, api_version, top=top)
        print("The response of DefaultApi->remediations_list_deployments_at_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_list_deployments_at_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_groups_namespace** | **str**| The namespace for Microsoft Management RP; only \&quot;Microsoft.Management\&quot; is allowed. | 
 **management_group_id** | **str**| Management group ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 

### Return type

[**RemediationDeploymentsListResult**](RemediationDeploymentsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediation deployments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_list_deployments_at_resource**
> RemediationDeploymentsListResult remediations_list_deployments_at_resource(resource_id, remediation_name, api_version, top=top)



Gets all deployments for a remediation at resource scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation_deployments_list_result import RemediationDeploymentsListResult
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
    resource_id = 'resource_id_example' # str | Resource ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)

    try:
        api_response = api_instance.remediations_list_deployments_at_resource(resource_id, remediation_name, api_version, top=top)
        print("The response of DefaultApi->remediations_list_deployments_at_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_list_deployments_at_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| Resource ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 

### Return type

[**RemediationDeploymentsListResult**](RemediationDeploymentsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediation deployments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_list_deployments_at_resource_group**
> RemediationDeploymentsListResult remediations_list_deployments_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version, top=top)



Gets all deployments for a remediation at resource group scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation_deployments_list_result import RemediationDeploymentsListResult
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)

    try:
        api_response = api_instance.remediations_list_deployments_at_resource_group(subscription_id, resource_group_name, remediation_name, api_version, top=top)
        print("The response of DefaultApi->remediations_list_deployments_at_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_list_deployments_at_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 

### Return type

[**RemediationDeploymentsListResult**](RemediationDeploymentsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediation deployments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_list_deployments_at_subscription**
> RemediationDeploymentsListResult remediations_list_deployments_at_subscription(subscription_id, remediation_name, api_version, top=top)



Gets all deployments for a remediation at subscription scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation_deployments_list_result import RemediationDeploymentsListResult
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    remediation_name = 'remediation_name_example' # str | The name of the remediation.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)

    try:
        api_response = api_instance.remediations_list_deployments_at_subscription(subscription_id, remediation_name, api_version, top=top)
        print("The response of DefaultApi->remediations_list_deployments_at_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_list_deployments_at_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **remediation_name** | **str**| The name of the remediation. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 

### Return type

[**RemediationDeploymentsListResult**](RemediationDeploymentsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediation deployments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_list_for_management_group**
> RemediationListResult remediations_list_for_management_group(management_groups_namespace, management_group_id, api_version, top=top, filter=filter)



Gets all remediations for the management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation_list_result import RemediationListResult
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
    management_groups_namespace = 'management_groups_namespace_example' # str | The namespace for Microsoft Management RP; only \"Microsoft.Management\" is allowed.
    management_group_id = 'management_group_id_example' # str | Management group ID.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.remediations_list_for_management_group(management_groups_namespace, management_group_id, api_version, top=top, filter=filter)
        print("The response of DefaultApi->remediations_list_for_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_list_for_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_groups_namespace** | **str**| The namespace for Microsoft Management RP; only \&quot;Microsoft.Management\&quot; is allowed. | 
 **management_group_id** | **str**| Management group ID. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**RemediationListResult**](RemediationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_list_for_resource**
> RemediationListResult remediations_list_for_resource(resource_id, api_version, top=top, filter=filter)



Gets all remediations for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation_list_result import RemediationListResult
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
    resource_id = 'resource_id_example' # str | Resource ID.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.remediations_list_for_resource(resource_id, api_version, top=top, filter=filter)
        print("The response of DefaultApi->remediations_list_for_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_list_for_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| Resource ID. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**RemediationListResult**](RemediationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_list_for_resource_group**
> RemediationListResult remediations_list_for_resource_group(subscription_id, resource_group_name, api_version, top=top, filter=filter)



Gets all remediations for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation_list_result import RemediationListResult
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.remediations_list_for_resource_group(subscription_id, resource_group_name, api_version, top=top, filter=filter)
        print("The response of DefaultApi->remediations_list_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_list_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group name. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**RemediationListResult**](RemediationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remediations_list_for_subscription**
> RemediationListResult remediations_list_for_subscription(subscription_id, api_version, top=top, filter=filter)



Gets all remediations for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remediation_list_result import RemediationListResult
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
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.remediations_list_for_subscription(subscription_id, api_version, top=top, filter=filter)
        print("The response of DefaultApi->remediations_list_for_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remediations_list_for_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**RemediationListResult**](RemediationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved remediations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

