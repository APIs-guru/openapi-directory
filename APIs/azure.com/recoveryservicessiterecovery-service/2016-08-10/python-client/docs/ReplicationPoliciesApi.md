# openapi_client.ReplicationPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_policies_create**](ReplicationPoliciesApi.md#replication_policies_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies/{policyName} | Creates the policy.
[**replication_policies_delete**](ReplicationPoliciesApi.md#replication_policies_delete) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies/{policyName} | Delete the policy.
[**replication_policies_get**](ReplicationPoliciesApi.md#replication_policies_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies/{policyName} | Gets the requested policy.
[**replication_policies_list**](ReplicationPoliciesApi.md#replication_policies_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies | Gets the list of replication policies
[**replication_policies_update**](ReplicationPoliciesApi.md#replication_policies_update) | **PATCH** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies/{policyName} | Updates the protection profile.


# **replication_policies_create**
> Policy replication_policies_create(api_version, resource_name, resource_group_name, subscription_id, policy_name, input)

Creates the policy.

The operation to create a replication policy

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_policy_input import CreatePolicyInput
from openapi_client.models.policy import Policy
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
    api_instance = openapi_client.ReplicationPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    policy_name = 'policy_name_example' # str | Replication policy name
    input = openapi_client.CreatePolicyInput() # CreatePolicyInput | Create policy input

    try:
        # Creates the policy.
        api_response = api_instance.replication_policies_create(api_version, resource_name, resource_group_name, subscription_id, policy_name, input)
        print("The response of ReplicationPoliciesApi->replication_policies_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationPoliciesApi->replication_policies_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **policy_name** | **str**| Replication policy name | 
 **input** | [**CreatePolicyInput**](CreatePolicyInput.md)| Create policy input | 

### Return type

[**Policy**](Policy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_policies_delete**
> replication_policies_delete(api_version, resource_name, resource_group_name, subscription_id, policy_name)

Delete the policy.

The operation to delete a replication policy.

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
    api_instance = openapi_client.ReplicationPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    policy_name = 'policy_name_example' # str | Replication policy name.

    try:
        # Delete the policy.
        api_instance.replication_policies_delete(api_version, resource_name, resource_group_name, subscription_id, policy_name)
    except Exception as e:
        print("Exception when calling ReplicationPoliciesApi->replication_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **policy_name** | **str**| Replication policy name. | 

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
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_policies_get**
> Policy replication_policies_get(api_version, resource_name, resource_group_name, subscription_id, policy_name)

Gets the requested policy.

Gets the details of a replication policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy import Policy
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
    api_instance = openapi_client.ReplicationPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    policy_name = 'policy_name_example' # str | Replication policy name.

    try:
        # Gets the requested policy.
        api_response = api_instance.replication_policies_get(api_version, resource_name, resource_group_name, subscription_id, policy_name)
        print("The response of ReplicationPoliciesApi->replication_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationPoliciesApi->replication_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **policy_name** | **str**| Replication policy name. | 

### Return type

[**Policy**](Policy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_policies_list**
> PolicyCollection replication_policies_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of replication policies

Lists the replication policies for a vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_collection import PolicyCollection
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
    api_instance = openapi_client.ReplicationPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of replication policies
        api_response = api_instance.replication_policies_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationPoliciesApi->replication_policies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationPoliciesApi->replication_policies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**PolicyCollection**](PolicyCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_policies_update**
> Policy replication_policies_update(api_version, resource_name, resource_group_name, subscription_id, policy_name, input)

Updates the protection profile.

The operation to update a replication policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy import Policy
from openapi_client.models.update_policy_input import UpdatePolicyInput
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
    api_instance = openapi_client.ReplicationPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    policy_name = 'policy_name_example' # str | Protection profile Id.
    input = openapi_client.UpdatePolicyInput() # UpdatePolicyInput | Update Protection Profile Input

    try:
        # Updates the protection profile.
        api_response = api_instance.replication_policies_update(api_version, resource_name, resource_group_name, subscription_id, policy_name, input)
        print("The response of ReplicationPoliciesApi->replication_policies_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationPoliciesApi->replication_policies_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **policy_name** | **str**| Protection profile Id. | 
 **input** | [**UpdatePolicyInput**](UpdatePolicyInput.md)| Update Protection Profile Input | 

### Return type

[**Policy**](Policy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

