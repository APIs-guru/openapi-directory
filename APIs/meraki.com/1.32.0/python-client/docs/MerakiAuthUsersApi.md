# openapi_client.MerakiAuthUsersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_meraki_auth_user_1**](MerakiAuthUsersApi.md#create_network_meraki_auth_user_1) | **POST** /networks/{networkId}/merakiAuthUsers | Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
[**delete_network_meraki_auth_user_1**](MerakiAuthUsersApi.md#delete_network_meraki_auth_user_1) | **DELETE** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Deauthorize a user
[**get_network_meraki_auth_user_1**](MerakiAuthUsersApi.md#get_network_meraki_auth_user_1) | **GET** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Return the Meraki Auth splash guest, RADIUS, or client VPN user
[**get_network_meraki_auth_users_1**](MerakiAuthUsersApi.md#get_network_meraki_auth_users_1) | **GET** /networks/{networkId}/merakiAuthUsers | List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
[**update_network_meraki_auth_user_1**](MerakiAuthUsersApi.md#update_network_meraki_auth_user_1) | **PUT** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)


# **create_network_meraki_auth_user_1**
> GetNetworkMerakiAuthUsers200ResponseInner create_network_meraki_auth_user_1(network_id, create_network_meraki_auth_user_request)

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_meraki_auth_user_request import CreateNetworkMerakiAuthUserRequest
from openapi_client.models.get_network_meraki_auth_users200_response_inner import GetNetworkMerakiAuthUsers200ResponseInner
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
    api_instance = openapi_client.MerakiAuthUsersApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_meraki_auth_user_request = openapi_client.CreateNetworkMerakiAuthUserRequest() # CreateNetworkMerakiAuthUserRequest | 

    try:
        # Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
        api_response = api_instance.create_network_meraki_auth_user_1(network_id, create_network_meraki_auth_user_request)
        print("The response of MerakiAuthUsersApi->create_network_meraki_auth_user_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerakiAuthUsersApi->create_network_meraki_auth_user_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_meraki_auth_user_request** | [**CreateNetworkMerakiAuthUserRequest**](CreateNetworkMerakiAuthUserRequest.md)|  | 

### Return type

[**GetNetworkMerakiAuthUsers200ResponseInner**](GetNetworkMerakiAuthUsers200ResponseInner.md)

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

# **delete_network_meraki_auth_user_1**
> delete_network_meraki_auth_user_1(network_id, meraki_auth_user_id)

Deauthorize a user

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

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
    api_instance = openapi_client.MerakiAuthUsersApi(api_client)
    network_id = 'network_id_example' # str | 
    meraki_auth_user_id = 'meraki_auth_user_id_example' # str | 

    try:
        # Deauthorize a user
        api_instance.delete_network_meraki_auth_user_1(network_id, meraki_auth_user_id)
    except Exception as e:
        print("Exception when calling MerakiAuthUsersApi->delete_network_meraki_auth_user_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **meraki_auth_user_id** | **str**|  | 

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

# **get_network_meraki_auth_user_1**
> GetNetworkMerakiAuthUsers200ResponseInner get_network_meraki_auth_user_1(network_id, meraki_auth_user_id)

Return the Meraki Auth splash guest, RADIUS, or client VPN user

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_meraki_auth_users200_response_inner import GetNetworkMerakiAuthUsers200ResponseInner
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
    api_instance = openapi_client.MerakiAuthUsersApi(api_client)
    network_id = 'network_id_example' # str | 
    meraki_auth_user_id = 'meraki_auth_user_id_example' # str | 

    try:
        # Return the Meraki Auth splash guest, RADIUS, or client VPN user
        api_response = api_instance.get_network_meraki_auth_user_1(network_id, meraki_auth_user_id)
        print("The response of MerakiAuthUsersApi->get_network_meraki_auth_user_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerakiAuthUsersApi->get_network_meraki_auth_user_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **meraki_auth_user_id** | **str**|  | 

### Return type

[**GetNetworkMerakiAuthUsers200ResponseInner**](GetNetworkMerakiAuthUsers200ResponseInner.md)

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

# **get_network_meraki_auth_users_1**
> List[GetNetworkMerakiAuthUsers200ResponseInner] get_network_meraki_auth_users_1(network_id)

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_meraki_auth_users200_response_inner import GetNetworkMerakiAuthUsers200ResponseInner
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
    api_instance = openapi_client.MerakiAuthUsersApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
        api_response = api_instance.get_network_meraki_auth_users_1(network_id)
        print("The response of MerakiAuthUsersApi->get_network_meraki_auth_users_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerakiAuthUsersApi->get_network_meraki_auth_users_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkMerakiAuthUsers200ResponseInner]**](GetNetworkMerakiAuthUsers200ResponseInner.md)

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

# **update_network_meraki_auth_user_1**
> GetNetworkMerakiAuthUsers200ResponseInner update_network_meraki_auth_user_1(network_id, meraki_auth_user_id, update_network_meraki_auth_user_request=update_network_meraki_auth_user_request)

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_meraki_auth_users200_response_inner import GetNetworkMerakiAuthUsers200ResponseInner
from openapi_client.models.update_network_meraki_auth_user_request import UpdateNetworkMerakiAuthUserRequest
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
    api_instance = openapi_client.MerakiAuthUsersApi(api_client)
    network_id = 'network_id_example' # str | 
    meraki_auth_user_id = 'meraki_auth_user_id_example' # str | 
    update_network_meraki_auth_user_request = openapi_client.UpdateNetworkMerakiAuthUserRequest() # UpdateNetworkMerakiAuthUserRequest |  (optional)

    try:
        # Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
        api_response = api_instance.update_network_meraki_auth_user_1(network_id, meraki_auth_user_id, update_network_meraki_auth_user_request=update_network_meraki_auth_user_request)
        print("The response of MerakiAuthUsersApi->update_network_meraki_auth_user_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerakiAuthUsersApi->update_network_meraki_auth_user_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **meraki_auth_user_id** | **str**|  | 
 **update_network_meraki_auth_user_request** | [**UpdateNetworkMerakiAuthUserRequest**](UpdateNetworkMerakiAuthUserRequest.md)|  | [optional] 

### Return type

[**GetNetworkMerakiAuthUsers200ResponseInner**](GetNetworkMerakiAuthUsers200ResponseInner.md)

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

