# openapi_client.GroupPoliciesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_group_policy_1**](GroupPoliciesApi.md#create_network_group_policy_1) | **POST** /networks/{networkId}/groupPolicies | Create a group policy
[**delete_network_group_policy_1**](GroupPoliciesApi.md#delete_network_group_policy_1) | **DELETE** /networks/{networkId}/groupPolicies/{groupPolicyId} | Delete a group policy
[**get_network_group_policies_1**](GroupPoliciesApi.md#get_network_group_policies_1) | **GET** /networks/{networkId}/groupPolicies | List the group policies in a network
[**get_network_group_policy_1**](GroupPoliciesApi.md#get_network_group_policy_1) | **GET** /networks/{networkId}/groupPolicies/{groupPolicyId} | Display a group policy
[**update_network_group_policy_1**](GroupPoliciesApi.md#update_network_group_policy_1) | **PUT** /networks/{networkId}/groupPolicies/{groupPolicyId} | Update a group policy


# **create_network_group_policy_1**
> object create_network_group_policy_1(network_id, create_network_group_policy_request)

Create a group policy

Create a group policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_group_policy_request import CreateNetworkGroupPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_group_policy_request = openapi_client.CreateNetworkGroupPolicyRequest() # CreateNetworkGroupPolicyRequest | 

    try:
        # Create a group policy
        api_response = api_instance.create_network_group_policy_1(network_id, create_network_group_policy_request)
        print("The response of GroupPoliciesApi->create_network_group_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupPoliciesApi->create_network_group_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_group_policy_request** | [**CreateNetworkGroupPolicyRequest**](CreateNetworkGroupPolicyRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_group_policy_1**
> delete_network_group_policy_1(network_id, group_policy_id)

Delete a group policy

Delete a group policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    group_policy_id = 'group_policy_id_example' # str | 

    try:
        # Delete a group policy
        api_instance.delete_network_group_policy_1(network_id, group_policy_id)
    except Exception as e:
        print("Exception when calling GroupPoliciesApi->delete_network_group_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_policy_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_policies_1**
> List[object] get_network_group_policies_1(network_id)

List the group policies in a network

List the group policies in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the group policies in a network
        api_response = api_instance.get_network_group_policies_1(network_id)
        print("The response of GroupPoliciesApi->get_network_group_policies_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupPoliciesApi->get_network_group_policies_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_policy_1**
> object get_network_group_policy_1(network_id, group_policy_id)

Display a group policy

Display a group policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    group_policy_id = 'group_policy_id_example' # str | 

    try:
        # Display a group policy
        api_response = api_instance.get_network_group_policy_1(network_id, group_policy_id)
        print("The response of GroupPoliciesApi->get_network_group_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupPoliciesApi->get_network_group_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_policy_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_group_policy_1**
> object update_network_group_policy_1(network_id, group_policy_id, update_network_group_policy_request=update_network_group_policy_request)

Update a group policy

Update a group policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_group_policy_request import UpdateNetworkGroupPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    group_policy_id = 'group_policy_id_example' # str | 
    update_network_group_policy_request = openapi_client.UpdateNetworkGroupPolicyRequest() # UpdateNetworkGroupPolicyRequest |  (optional)

    try:
        # Update a group policy
        api_response = api_instance.update_network_group_policy_1(network_id, group_policy_id, update_network_group_policy_request=update_network_group_policy_request)
        print("The response of GroupPoliciesApi->update_network_group_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupPoliciesApi->update_network_group_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_policy_id** | **str**|  | 
 **update_network_group_policy_request** | [**UpdateNetworkGroupPolicyRequest**](UpdateNetworkGroupPolicyRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

