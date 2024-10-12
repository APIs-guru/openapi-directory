# openapi_client.AccessPoliciesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_switch_access_policy_1**](AccessPoliciesApi.md#create_network_switch_access_policy_1) | **POST** /networks/{networkId}/switch/accessPolicies | Create an access policy for a switch network
[**delete_network_switch_access_policy_1**](AccessPoliciesApi.md#delete_network_switch_access_policy_1) | **DELETE** /networks/{networkId}/switch/accessPolicies/{accessPolicyNumber} | Delete an access policy for a switch network
[**get_network_switch_access_policies_1**](AccessPoliciesApi.md#get_network_switch_access_policies_1) | **GET** /networks/{networkId}/switch/accessPolicies | List the access policies for a switch network
[**get_network_switch_access_policy_1**](AccessPoliciesApi.md#get_network_switch_access_policy_1) | **GET** /networks/{networkId}/switch/accessPolicies/{accessPolicyNumber} | Return a specific access policy for a switch network
[**update_network_switch_access_policy_1**](AccessPoliciesApi.md#update_network_switch_access_policy_1) | **PUT** /networks/{networkId}/switch/accessPolicies/{accessPolicyNumber} | Update an access policy for a switch network


# **create_network_switch_access_policy_1**
> GetNetworkSwitchAccessPolicies200ResponseInner create_network_switch_access_policy_1(network_id, create_network_switch_access_policy_request)

Create an access policy for a switch network

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_access_policy_request import CreateNetworkSwitchAccessPolicyRequest
from openapi_client.models.get_network_switch_access_policies200_response_inner import GetNetworkSwitchAccessPolicies200ResponseInner
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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_access_policy_request = openapi_client.CreateNetworkSwitchAccessPolicyRequest() # CreateNetworkSwitchAccessPolicyRequest | 

    try:
        # Create an access policy for a switch network
        api_response = api_instance.create_network_switch_access_policy_1(network_id, create_network_switch_access_policy_request)
        print("The response of AccessPoliciesApi->create_network_switch_access_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->create_network_switch_access_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_access_policy_request** | [**CreateNetworkSwitchAccessPolicyRequest**](CreateNetworkSwitchAccessPolicyRequest.md)|  | 

### Return type

[**GetNetworkSwitchAccessPolicies200ResponseInner**](GetNetworkSwitchAccessPolicies200ResponseInner.md)

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

# **delete_network_switch_access_policy_1**
> delete_network_switch_access_policy_1(network_id, access_policy_number)

Delete an access policy for a switch network

Delete an access policy for a switch network

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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    access_policy_number = 'access_policy_number_example' # str | 

    try:
        # Delete an access policy for a switch network
        api_instance.delete_network_switch_access_policy_1(network_id, access_policy_number)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->delete_network_switch_access_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **access_policy_number** | **str**|  | 

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

# **get_network_switch_access_policies_1**
> List[GetNetworkSwitchAccessPolicies200ResponseInner] get_network_switch_access_policies_1(network_id)

List the access policies for a switch network

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_access_policies200_response_inner import GetNetworkSwitchAccessPolicies200ResponseInner
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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the access policies for a switch network
        api_response = api_instance.get_network_switch_access_policies_1(network_id)
        print("The response of AccessPoliciesApi->get_network_switch_access_policies_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->get_network_switch_access_policies_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkSwitchAccessPolicies200ResponseInner]**](GetNetworkSwitchAccessPolicies200ResponseInner.md)

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

# **get_network_switch_access_policy_1**
> GetNetworkSwitchAccessPolicies200ResponseInner get_network_switch_access_policy_1(network_id, access_policy_number)

Return a specific access policy for a switch network

Return a specific access policy for a switch network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_access_policies200_response_inner import GetNetworkSwitchAccessPolicies200ResponseInner
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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    access_policy_number = 'access_policy_number_example' # str | 

    try:
        # Return a specific access policy for a switch network
        api_response = api_instance.get_network_switch_access_policy_1(network_id, access_policy_number)
        print("The response of AccessPoliciesApi->get_network_switch_access_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->get_network_switch_access_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **access_policy_number** | **str**|  | 

### Return type

[**GetNetworkSwitchAccessPolicies200ResponseInner**](GetNetworkSwitchAccessPolicies200ResponseInner.md)

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

# **update_network_switch_access_policy_1**
> GetNetworkSwitchAccessPolicies200ResponseInner update_network_switch_access_policy_1(network_id, access_policy_number, update_network_switch_access_policy_request=update_network_switch_access_policy_request)

Update an access policy for a switch network

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_access_policies200_response_inner import GetNetworkSwitchAccessPolicies200ResponseInner
from openapi_client.models.update_network_switch_access_policy_request import UpdateNetworkSwitchAccessPolicyRequest
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
    api_instance = openapi_client.AccessPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    access_policy_number = 'access_policy_number_example' # str | 
    update_network_switch_access_policy_request = openapi_client.UpdateNetworkSwitchAccessPolicyRequest() # UpdateNetworkSwitchAccessPolicyRequest |  (optional)

    try:
        # Update an access policy for a switch network
        api_response = api_instance.update_network_switch_access_policy_1(network_id, access_policy_number, update_network_switch_access_policy_request=update_network_switch_access_policy_request)
        print("The response of AccessPoliciesApi->update_network_switch_access_policy_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccessPoliciesApi->update_network_switch_access_policy_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **access_policy_number** | **str**|  | 
 **update_network_switch_access_policy_request** | [**UpdateNetworkSwitchAccessPolicyRequest**](UpdateNetworkSwitchAccessPolicyRequest.md)|  | [optional] 

### Return type

[**GetNetworkSwitchAccessPolicies200ResponseInner**](GetNetworkSwitchAccessPolicies200ResponseInner.md)

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

