# openapi_client.JitNetworkAccessPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jit_network_access_policies_create_or_update**](JitNetworkAccessPoliciesApi.md#jit_network_access_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName} | 
[**jit_network_access_policies_delete**](JitNetworkAccessPoliciesApi.md#jit_network_access_policies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName} | 
[**jit_network_access_policies_get**](JitNetworkAccessPoliciesApi.md#jit_network_access_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName} | 
[**jit_network_access_policies_initiate**](JitNetworkAccessPoliciesApi.md#jit_network_access_policies_initiate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName}/{jitNetworkAccessPolicyInitiateType} | 
[**jit_network_access_policies_list**](JitNetworkAccessPoliciesApi.md#jit_network_access_policies_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/jitNetworkAccessPolicies | 
[**jit_network_access_policies_list_by_region**](JitNetworkAccessPoliciesApi.md#jit_network_access_policies_list_by_region) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies | 
[**jit_network_access_policies_list_by_resource_group**](JitNetworkAccessPoliciesApi.md#jit_network_access_policies_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/jitNetworkAccessPolicies | 
[**jit_network_access_policies_list_by_resource_group_and_region**](JitNetworkAccessPoliciesApi.md#jit_network_access_policies_list_by_resource_group_and_region) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies | 


# **jit_network_access_policies_create_or_update**
> JitNetworkAccessPolicy jit_network_access_policies_create_or_update(subscription_id, resource_group_name, asc_location, jit_network_access_policy_name, api_version, body)



Create a policy for protecting resources using Just-in-Time access control

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_network_access_policy import JitNetworkAccessPolicy
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
    api_instance = openapi_client.JitNetworkAccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    jit_network_access_policy_name = 'jit_network_access_policy_name_example' # str | Name of a Just-in-Time access configuration policy.
    api_version = 'api_version_example' # str | API version for the operation
    body = openapi_client.JitNetworkAccessPolicy() # JitNetworkAccessPolicy | 

    try:
        api_response = api_instance.jit_network_access_policies_create_or_update(subscription_id, resource_group_name, asc_location, jit_network_access_policy_name, api_version, body)
        print("The response of JitNetworkAccessPoliciesApi->jit_network_access_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitNetworkAccessPoliciesApi->jit_network_access_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **jit_network_access_policy_name** | **str**| Name of a Just-in-Time access configuration policy. | 
 **api_version** | **str**| API version for the operation | 
 **body** | [**JitNetworkAccessPolicy**](JitNetworkAccessPolicy.md)|  | 

### Return type

[**JitNetworkAccessPolicy**](JitNetworkAccessPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_network_access_policies_delete**
> jit_network_access_policies_delete(subscription_id, resource_group_name, asc_location, jit_network_access_policy_name, api_version)



Delete a Just-in-Time access control policy.

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
    api_instance = openapi_client.JitNetworkAccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    jit_network_access_policy_name = 'jit_network_access_policy_name_example' # str | Name of a Just-in-Time access configuration policy.
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_instance.jit_network_access_policies_delete(subscription_id, resource_group_name, asc_location, jit_network_access_policy_name, api_version)
    except Exception as e:
        print("Exception when calling JitNetworkAccessPoliciesApi->jit_network_access_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **jit_network_access_policy_name** | **str**| Name of a Just-in-Time access configuration policy. | 
 **api_version** | **str**| API version for the operation | 

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
**200** | OK - Resource was deleted |  -  |
**204** | No Content - Resource does not exist |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_network_access_policies_get**
> JitNetworkAccessPolicy jit_network_access_policies_get(subscription_id, resource_group_name, asc_location, jit_network_access_policy_name, api_version)



Policies for protecting resources using Just-in-Time access control for the subscription, location

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_network_access_policy import JitNetworkAccessPolicy
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
    api_instance = openapi_client.JitNetworkAccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    jit_network_access_policy_name = 'jit_network_access_policy_name_example' # str | Name of a Just-in-Time access configuration policy.
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.jit_network_access_policies_get(subscription_id, resource_group_name, asc_location, jit_network_access_policy_name, api_version)
        print("The response of JitNetworkAccessPoliciesApi->jit_network_access_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitNetworkAccessPoliciesApi->jit_network_access_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **jit_network_access_policy_name** | **str**| Name of a Just-in-Time access configuration policy. | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**JitNetworkAccessPolicy**](JitNetworkAccessPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_network_access_policies_initiate**
> JitNetworkAccessRequest jit_network_access_policies_initiate(subscription_id, resource_group_name, asc_location, jit_network_access_policy_name, jit_network_access_policy_initiate_type, api_version, body)



Initiate a JIT access from a specific Just-in-Time policy configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_network_access_policy_initiate_request import JitNetworkAccessPolicyInitiateRequest
from openapi_client.models.jit_network_access_request import JitNetworkAccessRequest
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
    api_instance = openapi_client.JitNetworkAccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    jit_network_access_policy_name = 'jit_network_access_policy_name_example' # str | Name of a Just-in-Time access configuration policy.
    jit_network_access_policy_initiate_type = 'jit_network_access_policy_initiate_type_example' # str | Type of the action to do on the Just-in-Time access policy.
    api_version = 'api_version_example' # str | API version for the operation
    body = openapi_client.JitNetworkAccessPolicyInitiateRequest() # JitNetworkAccessPolicyInitiateRequest | 

    try:
        api_response = api_instance.jit_network_access_policies_initiate(subscription_id, resource_group_name, asc_location, jit_network_access_policy_name, jit_network_access_policy_initiate_type, api_version, body)
        print("The response of JitNetworkAccessPoliciesApi->jit_network_access_policies_initiate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitNetworkAccessPoliciesApi->jit_network_access_policies_initiate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **jit_network_access_policy_name** | **str**| Name of a Just-in-Time access configuration policy. | 
 **jit_network_access_policy_initiate_type** | **str**| Type of the action to do on the Just-in-Time access policy. | 
 **api_version** | **str**| API version for the operation | 
 **body** | [**JitNetworkAccessPolicyInitiateRequest**](JitNetworkAccessPolicyInitiateRequest.md)|  | 

### Return type

[**JitNetworkAccessRequest**](JitNetworkAccessRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_network_access_policies_list**
> JitNetworkAccessPoliciesList jit_network_access_policies_list(subscription_id, api_version)



Policies for protecting resources using Just-in-Time access control.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_network_access_policies_list import JitNetworkAccessPoliciesList
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
    api_instance = openapi_client.JitNetworkAccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.jit_network_access_policies_list(subscription_id, api_version)
        print("The response of JitNetworkAccessPoliciesApi->jit_network_access_policies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitNetworkAccessPoliciesApi->jit_network_access_policies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**JitNetworkAccessPoliciesList**](JitNetworkAccessPoliciesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_network_access_policies_list_by_region**
> JitNetworkAccessPoliciesList jit_network_access_policies_list_by_region(subscription_id, asc_location, api_version)



Policies for protecting resources using Just-in-Time access control for the subscription, location

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_network_access_policies_list import JitNetworkAccessPoliciesList
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
    api_instance = openapi_client.JitNetworkAccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.jit_network_access_policies_list_by_region(subscription_id, asc_location, api_version)
        print("The response of JitNetworkAccessPoliciesApi->jit_network_access_policies_list_by_region:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitNetworkAccessPoliciesApi->jit_network_access_policies_list_by_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**JitNetworkAccessPoliciesList**](JitNetworkAccessPoliciesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_network_access_policies_list_by_resource_group**
> JitNetworkAccessPoliciesList jit_network_access_policies_list_by_resource_group(subscription_id, resource_group_name, api_version)



Policies for protecting resources using Just-in-Time access control for the subscription, location

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_network_access_policies_list import JitNetworkAccessPoliciesList
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
    api_instance = openapi_client.JitNetworkAccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.jit_network_access_policies_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of JitNetworkAccessPoliciesApi->jit_network_access_policies_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitNetworkAccessPoliciesApi->jit_network_access_policies_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**JitNetworkAccessPoliciesList**](JitNetworkAccessPoliciesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_network_access_policies_list_by_resource_group_and_region**
> JitNetworkAccessPoliciesList jit_network_access_policies_list_by_resource_group_and_region(subscription_id, resource_group_name, asc_location, api_version)



Policies for protecting resources using Just-in-Time access control for the subscription, location

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_network_access_policies_list import JitNetworkAccessPoliciesList
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
    api_instance = openapi_client.JitNetworkAccessPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.jit_network_access_policies_list_by_resource_group_and_region(subscription_id, resource_group_name, asc_location, api_version)
        print("The response of JitNetworkAccessPoliciesApi->jit_network_access_policies_list_by_resource_group_and_region:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitNetworkAccessPoliciesApi->jit_network_access_policies_list_by_resource_group_and_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**JitNetworkAccessPoliciesList**](JitNetworkAccessPoliciesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

