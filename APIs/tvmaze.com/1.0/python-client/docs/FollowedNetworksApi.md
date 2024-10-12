# openapi_client.FollowedNetworksApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_follows_networks_get**](FollowedNetworksApi.md#user_follows_networks_get) | **GET** /user/follows/networks | List the followed networks
[**user_follows_networks_network_id_delete**](FollowedNetworksApi.md#user_follows_networks_network_id_delete) | **DELETE** /user/follows/networks/{network_id} | Unfollow a network
[**user_follows_networks_network_id_get**](FollowedNetworksApi.md#user_follows_networks_network_id_get) | **GET** /user/follows/networks/{network_id} | Check if a network is followed
[**user_follows_networks_network_id_put**](FollowedNetworksApi.md#user_follows_networks_network_id_put) | **PUT** /user/follows/networks/{network_id} | Follow a network


# **user_follows_networks_get**
> List[NetworkFollow] user_follows_networks_get(embed=embed)

List the followed networks

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.network_follow import NetworkFollow
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FollowedNetworksApi(api_client)
    embed = 'embed_example' # str | Embed full network info (optional)

    try:
        # List the followed networks
        api_response = api_instance.user_follows_networks_get(embed=embed)
        print("The response of FollowedNetworksApi->user_follows_networks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedNetworksApi->user_follows_networks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **embed** | **str**| Embed full network info | [optional] 

### Return type

[**List[NetworkFollow]**](NetworkFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of followed networks |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_networks_network_id_delete**
> user_follows_networks_network_id_delete(network_id)

Unfollow a network

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FollowedNetworksApi(api_client)
    network_id = 56 # int | 

    try:
        # Unfollow a network
        api_instance.user_follows_networks_network_id_delete(network_id)
    except Exception as e:
        print("Exception when calling FollowedNetworksApi->user_follows_networks_network_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the network is now unfollowed |  -  |
**404** | this network was not followed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_networks_network_id_get**
> NetworkFollow user_follows_networks_network_id_get(network_id)

Check if a network is followed

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.network_follow import NetworkFollow
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FollowedNetworksApi(api_client)
    network_id = 56 # int | 

    try:
        # Check if a network is followed
        api_response = api_instance.user_follows_networks_network_id_get(network_id)
        print("The response of FollowedNetworksApi->user_follows_networks_network_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedNetworksApi->user_follows_networks_network_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **int**|  | 

### Return type

[**NetworkFollow**](NetworkFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The followed network |  -  |
**404** | this network is not followed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_networks_network_id_put**
> NetworkFollow user_follows_networks_network_id_put(network_id)

Follow a network

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.network_follow import NetworkFollow
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FollowedNetworksApi(api_client)
    network_id = 56 # int | 

    try:
        # Follow a network
        api_response = api_instance.user_follows_networks_network_id_put(network_id)
        print("The response of FollowedNetworksApi->user_follows_networks_network_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedNetworksApi->user_follows_networks_network_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **int**|  | 

### Return type

[**NetworkFollow**](NetworkFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | this network is now followed |  -  |
**404** | this network does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

