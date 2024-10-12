# openapi_client.AuthorizationPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorization_policies_create_or_update**](AuthorizationPoliciesApi.md#authorization_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName} | 
[**authorization_policies_get**](AuthorizationPoliciesApi.md#authorization_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName} | 
[**authorization_policies_list_by_hub**](AuthorizationPoliciesApi.md#authorization_policies_list_by_hub) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies | 
[**authorization_policies_regenerate_primary_key**](AuthorizationPoliciesApi.md#authorization_policies_regenerate_primary_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regeneratePrimaryKey | 
[**authorization_policies_regenerate_secondary_key**](AuthorizationPoliciesApi.md#authorization_policies_regenerate_secondary_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regenerateSecondaryKey | 


# **authorization_policies_create_or_update**
> AuthorizationPolicyResourceFormat authorization_policies_create_or_update(resource_group_name, hub_name, authorization_policy_name, api_version, subscription_id, parameters)



Creates an authorization policy or updates an existing authorization policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_policy_resource_format import AuthorizationPolicyResourceFormat
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
    api_instance = openapi_client.AuthorizationPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    authorization_policy_name = 'authorization_policy_name_example' # str | The name of the policy.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.AuthorizationPolicyResourceFormat() # AuthorizationPolicyResourceFormat | Parameters supplied to the CreateOrUpdate authorization policy operation.

    try:
        api_response = api_instance.authorization_policies_create_or_update(resource_group_name, hub_name, authorization_policy_name, api_version, subscription_id, parameters)
        print("The response of AuthorizationPoliciesApi->authorization_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationPoliciesApi->authorization_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **authorization_policy_name** | **str**| The name of the policy. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**AuthorizationPolicyResourceFormat**](AuthorizationPolicyResourceFormat.md)| Parameters supplied to the CreateOrUpdate authorization policy operation. | 

### Return type

[**AuthorizationPolicyResourceFormat**](AuthorizationPolicyResourceFormat.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully update an existing authorization policy. |  -  |
**201** | Created. A new authorization policy is created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_policies_get**
> AuthorizationPolicyResourceFormat authorization_policies_get(resource_group_name, hub_name, authorization_policy_name, api_version, subscription_id)



Gets an authorization policy in the hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_policy_resource_format import AuthorizationPolicyResourceFormat
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
    api_instance = openapi_client.AuthorizationPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    authorization_policy_name = 'authorization_policy_name_example' # str | The name of the policy.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.authorization_policies_get(resource_group_name, hub_name, authorization_policy_name, api_version, subscription_id)
        print("The response of AuthorizationPoliciesApi->authorization_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationPoliciesApi->authorization_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **authorization_policy_name** | **str**| The name of the policy. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationPolicyResourceFormat**](AuthorizationPolicyResourceFormat.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get the authorization policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_policies_list_by_hub**
> AuthorizationPolicyListResult authorization_policies_list_by_hub(resource_group_name, hub_name, api_version, subscription_id)



Gets all the authorization policies in a specified hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_policy_list_result import AuthorizationPolicyListResult
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
    api_instance = openapi_client.AuthorizationPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.authorization_policies_list_by_hub(resource_group_name, hub_name, api_version, subscription_id)
        print("The response of AuthorizationPoliciesApi->authorization_policies_list_by_hub:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationPoliciesApi->authorization_policies_list_by_hub: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationPolicyListResult**](AuthorizationPolicyListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully get all the authorization policies in the hub. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_policies_regenerate_primary_key**
> AuthorizationPolicy authorization_policies_regenerate_primary_key(resource_group_name, hub_name, authorization_policy_name, api_version, subscription_id)



Regenerates the primary policy key of the specified authorization policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_policy import AuthorizationPolicy
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
    api_instance = openapi_client.AuthorizationPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    authorization_policy_name = 'authorization_policy_name_example' # str | The name of the policy.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.authorization_policies_regenerate_primary_key(resource_group_name, hub_name, authorization_policy_name, api_version, subscription_id)
        print("The response of AuthorizationPoliciesApi->authorization_policies_regenerate_primary_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationPoliciesApi->authorization_policies_regenerate_primary_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **authorization_policy_name** | **str**| The name of the policy. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationPolicy**](AuthorizationPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The primary key of the authorization policy is regenerated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_policies_regenerate_secondary_key**
> AuthorizationPolicy authorization_policies_regenerate_secondary_key(resource_group_name, hub_name, authorization_policy_name, api_version, subscription_id)



Regenerates the secondary policy key of the specified authorization policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_policy import AuthorizationPolicy
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
    api_instance = openapi_client.AuthorizationPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    hub_name = 'hub_name_example' # str | The name of the hub.
    authorization_policy_name = 'authorization_policy_name_example' # str | The name of the policy.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.authorization_policies_regenerate_secondary_key(resource_group_name, hub_name, authorization_policy_name, api_version, subscription_id)
        print("The response of AuthorizationPoliciesApi->authorization_policies_regenerate_secondary_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationPoliciesApi->authorization_policies_regenerate_secondary_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **hub_name** | **str**| The name of the hub. | 
 **authorization_policy_name** | **str**| The name of the policy. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationPolicy**](AuthorizationPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The secondary key of the authorization policy is regenerated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

