# openapi_client.TargetGroupsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_sm_target_group_1**](TargetGroupsApi.md#create_network_sm_target_group_1) | **POST** /networks/{networkId}/sm/targetGroups | Add a target group
[**delete_network_sm_target_group_1**](TargetGroupsApi.md#delete_network_sm_target_group_1) | **DELETE** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Delete a target group from a network
[**get_network_sm_target_group_1**](TargetGroupsApi.md#get_network_sm_target_group_1) | **GET** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Return a target group
[**get_network_sm_target_groups_1**](TargetGroupsApi.md#get_network_sm_target_groups_1) | **GET** /networks/{networkId}/sm/targetGroups | List the target groups in this network
[**update_network_sm_target_group_1**](TargetGroupsApi.md#update_network_sm_target_group_1) | **PUT** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Update a target group


# **create_network_sm_target_group_1**
> object create_network_sm_target_group_1(network_id, create_network_sm_target_group_request=create_network_sm_target_group_request)

Add a target group

Add a target group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_sm_target_group_request import CreateNetworkSmTargetGroupRequest
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
    api_instance = openapi_client.TargetGroupsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_sm_target_group_request = openapi_client.CreateNetworkSmTargetGroupRequest() # CreateNetworkSmTargetGroupRequest |  (optional)

    try:
        # Add a target group
        api_response = api_instance.create_network_sm_target_group_1(network_id, create_network_sm_target_group_request=create_network_sm_target_group_request)
        print("The response of TargetGroupsApi->create_network_sm_target_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TargetGroupsApi->create_network_sm_target_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_sm_target_group_request** | [**CreateNetworkSmTargetGroupRequest**](CreateNetworkSmTargetGroupRequest.md)|  | [optional] 

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

# **delete_network_sm_target_group_1**
> delete_network_sm_target_group_1(network_id, target_group_id)

Delete a target group from a network

Delete a target group from a network

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
    api_instance = openapi_client.TargetGroupsApi(api_client)
    network_id = 'network_id_example' # str | 
    target_group_id = 'target_group_id_example' # str | 

    try:
        # Delete a target group from a network
        api_instance.delete_network_sm_target_group_1(network_id, target_group_id)
    except Exception as e:
        print("Exception when calling TargetGroupsApi->delete_network_sm_target_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **target_group_id** | **str**|  | 

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

# **get_network_sm_target_group_1**
> object get_network_sm_target_group_1(network_id, target_group_id, with_details=with_details)

Return a target group

Return a target group

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
    api_instance = openapi_client.TargetGroupsApi(api_client)
    network_id = 'network_id_example' # str | 
    target_group_id = 'target_group_id_example' # str | 
    with_details = True # bool | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response (optional)

    try:
        # Return a target group
        api_response = api_instance.get_network_sm_target_group_1(network_id, target_group_id, with_details=with_details)
        print("The response of TargetGroupsApi->get_network_sm_target_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TargetGroupsApi->get_network_sm_target_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **target_group_id** | **str**|  | 
 **with_details** | **bool**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

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

# **get_network_sm_target_groups_1**
> List[object] get_network_sm_target_groups_1(network_id, with_details=with_details)

List the target groups in this network

List the target groups in this network

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
    api_instance = openapi_client.TargetGroupsApi(api_client)
    network_id = 'network_id_example' # str | 
    with_details = True # bool | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response (optional)

    try:
        # List the target groups in this network
        api_response = api_instance.get_network_sm_target_groups_1(network_id, with_details=with_details)
        print("The response of TargetGroupsApi->get_network_sm_target_groups_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TargetGroupsApi->get_network_sm_target_groups_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **with_details** | **bool**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

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

# **update_network_sm_target_group_1**
> object update_network_sm_target_group_1(network_id, target_group_id, create_network_sm_target_group_request=create_network_sm_target_group_request)

Update a target group

Update a target group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_sm_target_group_request import CreateNetworkSmTargetGroupRequest
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
    api_instance = openapi_client.TargetGroupsApi(api_client)
    network_id = 'network_id_example' # str | 
    target_group_id = 'target_group_id_example' # str | 
    create_network_sm_target_group_request = openapi_client.CreateNetworkSmTargetGroupRequest() # CreateNetworkSmTargetGroupRequest |  (optional)

    try:
        # Update a target group
        api_response = api_instance.update_network_sm_target_group_1(network_id, target_group_id, create_network_sm_target_group_request=create_network_sm_target_group_request)
        print("The response of TargetGroupsApi->update_network_sm_target_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TargetGroupsApi->update_network_sm_target_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **target_group_id** | **str**|  | 
 **create_network_sm_target_group_request** | [**CreateNetworkSmTargetGroupRequest**](CreateNetworkSmTargetGroupRequest.md)|  | [optional] 

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

