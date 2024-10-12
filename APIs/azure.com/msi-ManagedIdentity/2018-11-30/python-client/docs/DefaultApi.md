# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_list**](DefaultApi.md#operations_list) | **GET** /providers/Microsoft.ManagedIdentity/operations | 
[**user_assigned_identities_create_or_update**](DefaultApi.md#user_assigned_identities_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName} | 
[**user_assigned_identities_delete**](DefaultApi.md#user_assigned_identities_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName} | 
[**user_assigned_identities_get**](DefaultApi.md#user_assigned_identities_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName} | 
[**user_assigned_identities_list_by_resource_group**](DefaultApi.md#user_assigned_identities_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities | 
[**user_assigned_identities_list_by_subscription**](DefaultApi.md#user_assigned_identities_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ManagedIdentity/userAssignedIdentities | 
[**user_assigned_identities_update**](DefaultApi.md#user_assigned_identities_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName} | 


# **operations_list**
> OperationListResult operations_list(api_version)



Lists available operations for the Microsoft.ManagedIdentity provider

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list_result import OperationListResult
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
    api_version = 'api_version_example' # str | Version of API to invoke.

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
 **api_version** | **str**| Version of API to invoke. | 

### Return type

[**OperationListResult**](OperationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the list of available operations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_assigned_identities_create_or_update**
> Identity user_assigned_identities_create_or_update(subscription_id, resource_group_name, resource_name, api_version, parameters)



Create or update an identity in the specified subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.identity import Identity
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
    subscription_id = 'subscription_id_example' # str | The Id of the Subscription to which the identity belongs.
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the identity belongs.
    resource_name = 'resource_name_example' # str | The name of the identity resource.
    api_version = 'api_version_example' # str | Version of API to invoke.
    parameters = openapi_client.Identity() # Identity | Parameters to create or update the identity

    try:
        api_response = api_instance.user_assigned_identities_create_or_update(subscription_id, resource_group_name, resource_name, api_version, parameters)
        print("The response of DefaultApi->user_assigned_identities_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->user_assigned_identities_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Id of the Subscription to which the identity belongs. | 
 **resource_group_name** | **str**| The name of the Resource Group to which the identity belongs. | 
 **resource_name** | **str**| The name of the identity resource. | 
 **api_version** | **str**| Version of API to invoke. | 
 **parameters** | [**Identity**](Identity.md)| Parameters to create or update the identity | 

### Return type

[**Identity**](Identity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated identity |  -  |
**201** | Created identity |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_assigned_identities_delete**
> user_assigned_identities_delete(subscription_id, resource_group_name, resource_name, api_version)



Deletes the identity.

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
    subscription_id = 'subscription_id_example' # str | The Id of the Subscription to which the identity belongs.
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the identity belongs.
    resource_name = 'resource_name_example' # str | The name of the identity resource.
    api_version = 'api_version_example' # str | Version of API to invoke.

    try:
        api_instance.user_assigned_identities_delete(subscription_id, resource_group_name, resource_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->user_assigned_identities_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Id of the Subscription to which the identity belongs. | 
 **resource_group_name** | **str**| The name of the Resource Group to which the identity belongs. | 
 **resource_name** | **str**| The name of the identity resource. | 
 **api_version** | **str**| Version of API to invoke. | 

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
**200** | OK. Deleted Identity. |  -  |
**204** | The specified identity does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_assigned_identities_get**
> Identity user_assigned_identities_get(subscription_id, resource_group_name, resource_name, api_version)



Gets the identity.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.identity import Identity
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
    subscription_id = 'subscription_id_example' # str | The Id of the Subscription to which the identity belongs.
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the identity belongs.
    resource_name = 'resource_name_example' # str | The name of the identity resource.
    api_version = 'api_version_example' # str | Version of API to invoke.

    try:
        api_response = api_instance.user_assigned_identities_get(subscription_id, resource_group_name, resource_name, api_version)
        print("The response of DefaultApi->user_assigned_identities_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->user_assigned_identities_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Id of the Subscription to which the identity belongs. | 
 **resource_group_name** | **str**| The name of the Resource Group to which the identity belongs. | 
 **resource_name** | **str**| The name of the identity resource. | 
 **api_version** | **str**| Version of API to invoke. | 

### Return type

[**Identity**](Identity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The requested identity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_assigned_identities_list_by_resource_group**
> UserAssignedIdentitiesListResult user_assigned_identities_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all the userAssignedIdentities available under the specified ResourceGroup.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user_assigned_identities_list_result import UserAssignedIdentitiesListResult
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
    subscription_id = 'subscription_id_example' # str | The Id of the Subscription to which the identity belongs.
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the identity belongs.
    api_version = 'api_version_example' # str | Version of API to invoke.

    try:
        api_response = api_instance.user_assigned_identities_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DefaultApi->user_assigned_identities_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->user_assigned_identities_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Id of the Subscription to which the identity belongs. | 
 **resource_group_name** | **str**| The name of the Resource Group to which the identity belongs. | 
 **api_version** | **str**| Version of API to invoke. | 

### Return type

[**UserAssignedIdentitiesListResult**](UserAssignedIdentitiesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The list of userAssignedIdentities was retrieved and returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_assigned_identities_list_by_subscription**
> UserAssignedIdentitiesListResult user_assigned_identities_list_by_subscription(subscription_id, api_version)



Lists all the userAssignedIdentities available under the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user_assigned_identities_list_result import UserAssignedIdentitiesListResult
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
    subscription_id = 'subscription_id_example' # str | The Id of the Subscription to which the identity belongs.
    api_version = 'api_version_example' # str | Version of API to invoke.

    try:
        api_response = api_instance.user_assigned_identities_list_by_subscription(subscription_id, api_version)
        print("The response of DefaultApi->user_assigned_identities_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->user_assigned_identities_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Id of the Subscription to which the identity belongs. | 
 **api_version** | **str**| Version of API to invoke. | 

### Return type

[**UserAssignedIdentitiesListResult**](UserAssignedIdentitiesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The list of userAssignedIdentities was retrieved and returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_assigned_identities_update**
> Identity user_assigned_identities_update(subscription_id, resource_group_name, resource_name, api_version, parameters)



Update an identity in the specified subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.identity import Identity
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
    subscription_id = 'subscription_id_example' # str | The Id of the Subscription to which the identity belongs.
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the identity belongs.
    resource_name = 'resource_name_example' # str | The name of the identity resource.
    api_version = 'api_version_example' # str | Version of API to invoke.
    parameters = openapi_client.Identity() # Identity | Parameters to update the identity

    try:
        api_response = api_instance.user_assigned_identities_update(subscription_id, resource_group_name, resource_name, api_version, parameters)
        print("The response of DefaultApi->user_assigned_identities_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->user_assigned_identities_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Id of the Subscription to which the identity belongs. | 
 **resource_group_name** | **str**| The name of the Resource Group to which the identity belongs. | 
 **resource_name** | **str**| The name of the identity resource. | 
 **api_version** | **str**| Version of API to invoke. | 
 **parameters** | [**Identity**](Identity.md)| Parameters to update the identity | 

### Return type

[**Identity**](Identity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated identity |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

