# openapi_client.PolicyApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_create_or_update_resource**](PolicyApi.md#policy_create_or_update_resource) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name} | 
[**policy_delete_resource**](PolicyApi.md#policy_delete_resource) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name} | 
[**policy_get_resource**](PolicyApi.md#policy_get_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name} | 
[**policy_list**](PolicyApi.md#policy_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies | 
[**policy_patch_resource**](PolicyApi.md#policy_patch_resource) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name} | 


# **policy_create_or_update_resource**
> Policy policy_create_or_update_resource(subscription_id, resource_group_name, lab_name, policy_set_name, name, api_version, policy)



Create or replace an existing policy.

### Example

* OAuth Authentication (oauth2):

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
    api_instance = openapi_client.PolicyApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    policy_set_name = 'policy_set_name_example' # str | The name of the policy set.
    name = 'name_example' # str | The name of the policy.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')
    policy = openapi_client.Policy() # Policy | 

    try:
        api_response = api_instance.policy_create_or_update_resource(subscription_id, resource_group_name, lab_name, policy_set_name, name, api_version, policy)
        print("The response of PolicyApi->policy_create_or_update_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyApi->policy_create_or_update_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **policy_set_name** | **str**| The name of the policy set. | 
 **name** | **str**| The name of the policy. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]
 **policy** | [**Policy**](Policy.md)|  | 

### Return type

[**Policy**](Policy.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_delete_resource**
> policy_delete_resource(subscription_id, resource_group_name, lab_name, policy_set_name, name, api_version)



Delete policy.

### Example

* OAuth Authentication (oauth2):

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
    api_instance = openapi_client.PolicyApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    policy_set_name = 'policy_set_name_example' # str | The name of the policy set.
    name = 'name_example' # str | The name of the policy.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')

    try:
        api_instance.policy_delete_resource(subscription_id, resource_group_name, lab_name, policy_set_name, name, api_version)
    except Exception as e:
        print("Exception when calling PolicyApi->policy_delete_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **policy_set_name** | **str**| The name of the policy set. | 
 **name** | **str**| The name of the policy. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_get_resource**
> Policy policy_get_resource(subscription_id, resource_group_name, lab_name, policy_set_name, name, api_version)



Get policy.

### Example

* OAuth Authentication (oauth2):

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
    api_instance = openapi_client.PolicyApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    policy_set_name = 'policy_set_name_example' # str | The name of the policy set.
    name = 'name_example' # str | The name of the policy.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')

    try:
        api_response = api_instance.policy_get_resource(subscription_id, resource_group_name, lab_name, policy_set_name, name, api_version)
        print("The response of PolicyApi->policy_get_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyApi->policy_get_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **policy_set_name** | **str**| The name of the policy set. | 
 **name** | **str**| The name of the policy. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]

### Return type

[**Policy**](Policy.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_list**
> ResponseWithContinuationPolicy policy_list(subscription_id, resource_group_name, lab_name, policy_set_name, api_version, filter=filter, top=top, order_by=order_by)



List policies.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.response_with_continuation_policy import ResponseWithContinuationPolicy
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
    api_instance = openapi_client.PolicyApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    policy_set_name = 'policy_set_name_example' # str | The name of the policy set.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    order_by = 'order_by_example' # str |  (optional)

    try:
        api_response = api_instance.policy_list(subscription_id, resource_group_name, lab_name, policy_set_name, api_version, filter=filter, top=top, order_by=order_by)
        print("The response of PolicyApi->policy_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyApi->policy_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **policy_set_name** | **str**| The name of the policy set. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **order_by** | **str**|  | [optional] 

### Return type

[**ResponseWithContinuationPolicy**](ResponseWithContinuationPolicy.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_patch_resource**
> Policy policy_patch_resource(subscription_id, resource_group_name, lab_name, policy_set_name, name, api_version, policy)



Modify properties of policies.

### Example

* OAuth Authentication (oauth2):

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
    api_instance = openapi_client.PolicyApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    policy_set_name = 'policy_set_name_example' # str | The name of the policy set.
    name = 'name_example' # str | The name of the policy.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')
    policy = openapi_client.Policy() # Policy | 

    try:
        api_response = api_instance.policy_patch_resource(subscription_id, resource_group_name, lab_name, policy_set_name, name, api_version, policy)
        print("The response of PolicyApi->policy_patch_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyApi->policy_patch_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **policy_set_name** | **str**| The name of the policy set. | 
 **name** | **str**| The name of the policy. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]
 **policy** | [**Policy**](Policy.md)|  | 

### Return type

[**Policy**](Policy.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

