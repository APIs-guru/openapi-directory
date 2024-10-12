# openapi_client.UsersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_organization_user_1**](UsersApi.md#delete_organization_user_1) | **DELETE** /organizations/{organizationId}/users/{userId} | Delete a user and all of its authentication methods.
[**get_network_sm_user_device_profiles_1**](UsersApi.md#get_network_sm_user_device_profiles_1) | **GET** /networks/{networkId}/sm/users/{userId}/deviceProfiles | Get the profiles associated with a user
[**get_network_sm_user_softwares_1**](UsersApi.md#get_network_sm_user_softwares_1) | **GET** /networks/{networkId}/sm/users/{userId}/softwares | Get a list of softwares associated with a user
[**get_network_sm_users_1**](UsersApi.md#get_network_sm_users_1) | **GET** /networks/{networkId}/sm/users | List the owners in an SM network with various specified fields and filters


# **delete_organization_user_1**
> delete_organization_user_1(organization_id, user_id)

Delete a user and all of its authentication methods.

Delete a user and all of its authentication methods.

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
    api_instance = openapi_client.UsersApi(api_client)
    organization_id = 'organization_id_example' # str | 
    user_id = 'user_id_example' # str | 

    try:
        # Delete a user and all of its authentication methods.
        api_instance.delete_organization_user_1(organization_id, user_id)
    except Exception as e:
        print("Exception when calling UsersApi->delete_organization_user_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **user_id** | **str**|  | 

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

# **get_network_sm_user_device_profiles_1**
> List[GetNetworkSmDeviceDeviceProfiles200ResponseInner] get_network_sm_user_device_profiles_1(network_id, user_id)

Get the profiles associated with a user

Get the profiles associated with a user

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_device_profiles200_response_inner import GetNetworkSmDeviceDeviceProfiles200ResponseInner
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
    api_instance = openapi_client.UsersApi(api_client)
    network_id = 'network_id_example' # str | 
    user_id = 'user_id_example' # str | 

    try:
        # Get the profiles associated with a user
        api_response = api_instance.get_network_sm_user_device_profiles_1(network_id, user_id)
        print("The response of UsersApi->get_network_sm_user_device_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_network_sm_user_device_profiles_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **user_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceDeviceProfiles200ResponseInner]**](GetNetworkSmDeviceDeviceProfiles200ResponseInner.md)

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

# **get_network_sm_user_softwares_1**
> List[GetNetworkSmDeviceSoftwares200ResponseInner] get_network_sm_user_softwares_1(network_id, user_id)

Get a list of softwares associated with a user

Get a list of softwares associated with a user

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_softwares200_response_inner import GetNetworkSmDeviceSoftwares200ResponseInner
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
    api_instance = openapi_client.UsersApi(api_client)
    network_id = 'network_id_example' # str | 
    user_id = 'user_id_example' # str | 

    try:
        # Get a list of softwares associated with a user
        api_response = api_instance.get_network_sm_user_softwares_1(network_id, user_id)
        print("The response of UsersApi->get_network_sm_user_softwares_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_network_sm_user_softwares_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **user_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceSoftwares200ResponseInner]**](GetNetworkSmDeviceSoftwares200ResponseInner.md)

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

# **get_network_sm_users_1**
> List[GetNetworkSmUsers200ResponseInner] get_network_sm_users_1(network_id, ids=ids, usernames=usernames, emails=emails, scope=scope)

List the owners in an SM network with various specified fields and filters

List the owners in an SM network with various specified fields and filters

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_users200_response_inner import GetNetworkSmUsers200ResponseInner
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
    api_instance = openapi_client.UsersApi(api_client)
    network_id = 'network_id_example' # str | 
    ids = ['ids_example'] # List[str] | Filter users by id(s). (optional)
    usernames = ['usernames_example'] # List[str] | Filter users by username(s). (optional)
    emails = ['emails_example'] # List[str] | Filter users by email(s). (optional)
    scope = ['scope_example'] # List[str] | Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags. (optional)

    try:
        # List the owners in an SM network with various specified fields and filters
        api_response = api_instance.get_network_sm_users_1(network_id, ids=ids, usernames=usernames, emails=emails, scope=scope)
        print("The response of UsersApi->get_network_sm_users_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_network_sm_users_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **ids** | [**List[str]**](str.md)| Filter users by id(s). | [optional] 
 **usernames** | [**List[str]**](str.md)| Filter users by username(s). | [optional] 
 **emails** | [**List[str]**](str.md)| Filter users by email(s). | [optional] 
 **scope** | [**List[str]**](str.md)| Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags. | [optional] 

### Return type

[**List[GetNetworkSmUsers200ResponseInner]**](GetNetworkSmUsers200ResponseInner.md)

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

