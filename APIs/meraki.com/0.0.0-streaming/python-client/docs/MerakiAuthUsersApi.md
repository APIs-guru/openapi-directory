# openapi_client.MerakiAuthUsersApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_meraki_auth_user**](MerakiAuthUsersApi.md#get_network_meraki_auth_user) | **GET** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Return the Meraki Auth splash or RADIUS user
[**get_network_meraki_auth_users**](MerakiAuthUsersApi.md#get_network_meraki_auth_users) | **GET** /networks/{networkId}/merakiAuthUsers | List the splash or RADIUS users configured under Meraki Authentication for a network


# **get_network_meraki_auth_user**
> object get_network_meraki_auth_user(network_id, meraki_auth_user_id)

Return the Meraki Auth splash or RADIUS user

Return the Meraki Auth splash or RADIUS user

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
        # Return the Meraki Auth splash or RADIUS user
        api_response = api_instance.get_network_meraki_auth_user(network_id, meraki_auth_user_id)
        print("The response of MerakiAuthUsersApi->get_network_meraki_auth_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerakiAuthUsersApi->get_network_meraki_auth_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **meraki_auth_user_id** | **str**|  | 

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

# **get_network_meraki_auth_users**
> List[object] get_network_meraki_auth_users(network_id)

List the splash or RADIUS users configured under Meraki Authentication for a network

List the splash or RADIUS users configured under Meraki Authentication for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
        # List the splash or RADIUS users configured under Meraki Authentication for a network
        api_response = api_instance.get_network_meraki_auth_users(network_id)
        print("The response of MerakiAuthUsersApi->get_network_meraki_auth_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerakiAuthUsersApi->get_network_meraki_auth_users: %s\n" % e)
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

