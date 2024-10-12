# openapi_client.ServiceEndpointPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_endpoint_policies_create_or_update**](ServiceEndpointPoliciesApi.md#service_endpoint_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName} | 
[**service_endpoint_policies_delete**](ServiceEndpointPoliciesApi.md#service_endpoint_policies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName} | 
[**service_endpoint_policies_get**](ServiceEndpointPoliciesApi.md#service_endpoint_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName} | 
[**service_endpoint_policies_list**](ServiceEndpointPoliciesApi.md#service_endpoint_policies_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/ServiceEndpointPolicies | 
[**service_endpoint_policies_update**](ServiceEndpointPoliciesApi.md#service_endpoint_policies_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName} | 


# **service_endpoint_policies_create_or_update**
> ServiceEndpointPolicy service_endpoint_policies_create_or_update(resource_group_name, service_endpoint_policy_name, api_version, subscription_id, parameters)



Creates or updates a service Endpoint Policies.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_endpoint_policy import ServiceEndpointPolicy
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
    api_instance = openapi_client.ServiceEndpointPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_endpoint_policy_name = 'service_endpoint_policy_name_example' # str | The name of the service endpoint policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ServiceEndpointPolicy() # ServiceEndpointPolicy | Parameters supplied to the create or update service endpoint policy operation.

    try:
        api_response = api_instance.service_endpoint_policies_create_or_update(resource_group_name, service_endpoint_policy_name, api_version, subscription_id, parameters)
        print("The response of ServiceEndpointPoliciesApi->service_endpoint_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceEndpointPoliciesApi->service_endpoint_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_endpoint_policy_name** | **str**| The name of the service endpoint policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ServiceEndpointPolicy**](ServiceEndpointPolicy.md)| Parameters supplied to the create or update service endpoint policy operation. | 

### Return type

[**ServiceEndpointPolicy**](ServiceEndpointPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ServiceEndpointPolicy resource. |  -  |
**201** | Create successful. The operation returns the resulting ServiceEndpointPolicy resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_endpoint_policies_delete**
> service_endpoint_policies_delete(resource_group_name, service_endpoint_policy_name, api_version, subscription_id)



Deletes the specified service endpoint policy.

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
    api_instance = openapi_client.ServiceEndpointPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_endpoint_policy_name = 'service_endpoint_policy_name_example' # str | The name of the service endpoint policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.service_endpoint_policies_delete(resource_group_name, service_endpoint_policy_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ServiceEndpointPoliciesApi->service_endpoint_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_endpoint_policy_name** | **str**| The name of the service endpoint policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Request successful. Resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_endpoint_policies_get**
> ServiceEndpointPolicy service_endpoint_policies_get(resource_group_name, service_endpoint_policy_name, api_version, subscription_id, expand=expand)



Gets the specified service Endpoint Policies in a specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_endpoint_policy import ServiceEndpointPolicy
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
    api_instance = openapi_client.ServiceEndpointPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_endpoint_policy_name = 'service_endpoint_policy_name_example' # str | The name of the service endpoint policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands referenced resources. (optional)

    try:
        api_response = api_instance.service_endpoint_policies_get(resource_group_name, service_endpoint_policy_name, api_version, subscription_id, expand=expand)
        print("The response of ServiceEndpointPoliciesApi->service_endpoint_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceEndpointPoliciesApi->service_endpoint_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_endpoint_policy_name** | **str**| The name of the service endpoint policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands referenced resources. | [optional] 

### Return type

[**ServiceEndpointPolicy**](ServiceEndpointPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ServiceEndpointPolicy resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_endpoint_policies_list**
> ServiceEndpointPolicyListResult service_endpoint_policies_list(api_version, subscription_id)



Gets all the service endpoint policies in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_endpoint_policy_list_result import ServiceEndpointPolicyListResult
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
    api_instance = openapi_client.ServiceEndpointPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.service_endpoint_policies_list(api_version, subscription_id)
        print("The response of ServiceEndpointPoliciesApi->service_endpoint_policies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceEndpointPoliciesApi->service_endpoint_policies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ServiceEndpointPolicyListResult**](ServiceEndpointPolicyListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ServiceEndpointPolicy resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_endpoint_policies_update**
> ServiceEndpointPolicy service_endpoint_policies_update(resource_group_name, service_endpoint_policy_name, api_version, subscription_id, parameters)



Updates service Endpoint Policies.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_endpoint_policies_update_request import ServiceEndpointPoliciesUpdateRequest
from openapi_client.models.service_endpoint_policy import ServiceEndpointPolicy
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
    api_instance = openapi_client.ServiceEndpointPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_endpoint_policy_name = 'service_endpoint_policy_name_example' # str | The name of the service endpoint policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ServiceEndpointPoliciesUpdateRequest() # ServiceEndpointPoliciesUpdateRequest | Parameters supplied to update service endpoint policy tags.

    try:
        api_response = api_instance.service_endpoint_policies_update(resource_group_name, service_endpoint_policy_name, api_version, subscription_id, parameters)
        print("The response of ServiceEndpointPoliciesApi->service_endpoint_policies_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceEndpointPoliciesApi->service_endpoint_policies_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_endpoint_policy_name** | **str**| The name of the service endpoint policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ServiceEndpointPoliciesUpdateRequest**](ServiceEndpointPoliciesUpdateRequest.md)| Parameters supplied to update service endpoint policy tags. | 

### Return type

[**ServiceEndpointPolicy**](ServiceEndpointPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ServiceEndpointPolicy resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

