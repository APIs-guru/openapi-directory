# openapi_client.ConfigurationAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configuration_assignments_create_or_update**](ConfigurationAssignmentsApi.md#configuration_assignments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName} | Create configuration assignment
[**configuration_assignments_create_or_update_parent**](ConfigurationAssignmentsApi.md#configuration_assignments_create_or_update_parent) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName} | Create configuration assignment
[**configuration_assignments_delete**](ConfigurationAssignmentsApi.md#configuration_assignments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName} | Unregister configuration for resource
[**configuration_assignments_delete_parent**](ConfigurationAssignmentsApi.md#configuration_assignments_delete_parent) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName} | Unregister configuration for resource
[**configuration_assignments_list**](ConfigurationAssignmentsApi.md#configuration_assignments_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments | List configurationAssignments for resource
[**configuration_assignments_list_parent**](ConfigurationAssignmentsApi.md#configuration_assignments_list_parent) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments | List configurationAssignments for resource


# **configuration_assignments_create_or_update**
> ConfigurationAssignment configuration_assignments_create_or_update(subscription_id, resource_group_name, provider_name, resource_type, resource_name, configuration_assignment_name, api_version, configuration_assignment)

Create configuration assignment

Register configuration for resource.

### Example


```python
import openapi_client
from openapi_client.models.configuration_assignment import ConfigurationAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    configuration_assignment_name = 'configuration_assignment_name_example' # str | Configuration assignment name
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    configuration_assignment = openapi_client.ConfigurationAssignment() # ConfigurationAssignment | The configurationAssignment

    try:
        # Create configuration assignment
        api_response = api_instance.configuration_assignments_create_or_update(subscription_id, resource_group_name, provider_name, resource_type, resource_name, configuration_assignment_name, api_version, configuration_assignment)
        print("The response of ConfigurationAssignmentsApi->configuration_assignments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationAssignmentsApi->configuration_assignments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **provider_name** | **str**| Resource provider name | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **configuration_assignment_name** | **str**| Configuration assignment name | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **configuration_assignment** | [**ConfigurationAssignment**](ConfigurationAssignment.md)| The configurationAssignment | 

### Return type

[**ConfigurationAssignment**](ConfigurationAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_assignments_create_or_update_parent**
> ConfigurationAssignment configuration_assignments_create_or_update_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, configuration_assignment_name, api_version, configuration_assignment)

Create configuration assignment

Register configuration for resource.

### Example


```python
import openapi_client
from openapi_client.models.configuration_assignment import ConfigurationAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_parent_type = 'resource_parent_type_example' # str | Resource parent type
    resource_parent_name = 'resource_parent_name_example' # str | Resource parent identifier
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    configuration_assignment_name = 'configuration_assignment_name_example' # str | Configuration assignment name
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    configuration_assignment = openapi_client.ConfigurationAssignment() # ConfigurationAssignment | The configurationAssignment

    try:
        # Create configuration assignment
        api_response = api_instance.configuration_assignments_create_or_update_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, configuration_assignment_name, api_version, configuration_assignment)
        print("The response of ConfigurationAssignmentsApi->configuration_assignments_create_or_update_parent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationAssignmentsApi->configuration_assignments_create_or_update_parent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **provider_name** | **str**| Resource provider name | 
 **resource_parent_type** | **str**| Resource parent type | 
 **resource_parent_name** | **str**| Resource parent identifier | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **configuration_assignment_name** | **str**| Configuration assignment name | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **configuration_assignment** | [**ConfigurationAssignment**](ConfigurationAssignment.md)| The configurationAssignment | 

### Return type

[**ConfigurationAssignment**](ConfigurationAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_assignments_delete**
> ConfigurationAssignment configuration_assignments_delete(subscription_id, resource_group_name, provider_name, resource_type, resource_name, configuration_assignment_name, api_version)

Unregister configuration for resource

Unregister configuration for resource.

### Example


```python
import openapi_client
from openapi_client.models.configuration_assignment import ConfigurationAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    configuration_assignment_name = 'configuration_assignment_name_example' # str | Unique configuration assignment name
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Unregister configuration for resource
        api_response = api_instance.configuration_assignments_delete(subscription_id, resource_group_name, provider_name, resource_type, resource_name, configuration_assignment_name, api_version)
        print("The response of ConfigurationAssignmentsApi->configuration_assignments_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationAssignmentsApi->configuration_assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **provider_name** | **str**| Resource provider name | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **configuration_assignment_name** | **str**| Unique configuration assignment name | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ConfigurationAssignment**](ConfigurationAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_assignments_delete_parent**
> ConfigurationAssignment configuration_assignments_delete_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, configuration_assignment_name, api_version)

Unregister configuration for resource

Unregister configuration for resource.

### Example


```python
import openapi_client
from openapi_client.models.configuration_assignment import ConfigurationAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_parent_type = 'resource_parent_type_example' # str | Resource parent type
    resource_parent_name = 'resource_parent_name_example' # str | Resource parent identifier
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    configuration_assignment_name = 'configuration_assignment_name_example' # str | Unique configuration assignment name
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Unregister configuration for resource
        api_response = api_instance.configuration_assignments_delete_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, configuration_assignment_name, api_version)
        print("The response of ConfigurationAssignmentsApi->configuration_assignments_delete_parent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationAssignmentsApi->configuration_assignments_delete_parent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **provider_name** | **str**| Resource provider name | 
 **resource_parent_type** | **str**| Resource parent type | 
 **resource_parent_name** | **str**| Resource parent identifier | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **configuration_assignment_name** | **str**| Unique configuration assignment name | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ConfigurationAssignment**](ConfigurationAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_assignments_list**
> ListConfigurationAssignmentsResult configuration_assignments_list(subscription_id, resource_group_name, provider_name, resource_type, resource_name, api_version)

List configurationAssignments for resource

List configurationAssignments for resource.

### Example


```python
import openapi_client
from openapi_client.models.list_configuration_assignments_result import ListConfigurationAssignmentsResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # List configurationAssignments for resource
        api_response = api_instance.configuration_assignments_list(subscription_id, resource_group_name, provider_name, resource_type, resource_name, api_version)
        print("The response of ConfigurationAssignmentsApi->configuration_assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationAssignmentsApi->configuration_assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **provider_name** | **str**| Resource provider name | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ListConfigurationAssignmentsResult**](ListConfigurationAssignmentsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_assignments_list_parent**
> ListConfigurationAssignmentsResult configuration_assignments_list_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, api_version)

List configurationAssignments for resource

List configurationAssignments for resource.

### Example


```python
import openapi_client
from openapi_client.models.list_configuration_assignments_result import ListConfigurationAssignmentsResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name
    provider_name = 'provider_name_example' # str | Resource provider name
    resource_parent_type = 'resource_parent_type_example' # str | Resource parent type
    resource_parent_name = 'resource_parent_name_example' # str | Resource parent identifier
    resource_type = 'resource_type_example' # str | Resource type
    resource_name = 'resource_name_example' # str | Resource identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # List configurationAssignments for resource
        api_response = api_instance.configuration_assignments_list_parent(subscription_id, resource_group_name, provider_name, resource_parent_type, resource_parent_name, resource_type, resource_name, api_version)
        print("The response of ConfigurationAssignmentsApi->configuration_assignments_list_parent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationAssignmentsApi->configuration_assignments_list_parent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name | 
 **provider_name** | **str**| Resource provider name | 
 **resource_parent_type** | **str**| Resource parent type | 
 **resource_parent_name** | **str**| Resource parent identifier | 
 **resource_type** | **str**| Resource type | 
 **resource_name** | **str**| Resource identifier | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ListConfigurationAssignmentsResult**](ListConfigurationAssignmentsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

