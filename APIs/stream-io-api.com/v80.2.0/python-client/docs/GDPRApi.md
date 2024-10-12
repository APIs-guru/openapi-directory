# openapi_client.GDPRApi

All URIs are relative to *https://chat.stream-io-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deactivate_user_0**](GDPRApi.md#deactivate_user_0) | **POST** /users/{user_id}/deactivate | Deactivate user
[**deactivate_users_0**](GDPRApi.md#deactivate_users_0) | **POST** /users/deactivate | Deactivate users
[**delete_channels_0**](GDPRApi.md#delete_channels_0) | **POST** /channels/delete | Deletes channels asynchronously
[**delete_user_0**](GDPRApi.md#delete_user_0) | **DELETE** /users/{user_id} | Delete user
[**delete_users_0**](GDPRApi.md#delete_users_0) | **POST** /users/delete | Delete Users
[**reactivate_user_0**](GDPRApi.md#reactivate_user_0) | **POST** /users/{user_id}/reactivate | Reactivate user
[**reactivate_users_0**](GDPRApi.md#reactivate_users_0) | **POST** /users/reactivate | Reactivate users


# **deactivate_user_0**
> DeactivateUserResponse deactivate_user_0(user_id, deactivate_user_request)

Deactivate user

Deactivates user with possibility to activate it back  Sends events: - user.deactivated 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.deactivate_user_request import DeactivateUserRequest
from openapi_client.models.deactivate_user_response import DeactivateUserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GDPRApi(api_client)
    user_id = 'user_id_example' # str | 
    deactivate_user_request = openapi_client.DeactivateUserRequest() # DeactivateUserRequest | 

    try:
        # Deactivate user
        api_response = api_instance.deactivate_user_0(user_id, deactivate_user_request)
        print("The response of GDPRApi->deactivate_user_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GDPRApi->deactivate_user_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **deactivate_user_request** | [**DeactivateUserRequest**](DeactivateUserRequest.md)|  | 

### Return type

[**DeactivateUserResponse**](DeactivateUserResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivate_users_0**
> DeactivateUsersResponse deactivate_users_0(deactivate_users_request)

Deactivate users

Deactivate users in batches  Sends events: - user.deactivated 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.deactivate_users_request import DeactivateUsersRequest
from openapi_client.models.deactivate_users_response import DeactivateUsersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GDPRApi(api_client)
    deactivate_users_request = openapi_client.DeactivateUsersRequest() # DeactivateUsersRequest | 

    try:
        # Deactivate users
        api_response = api_instance.deactivate_users_0(deactivate_users_request)
        print("The response of GDPRApi->deactivate_users_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GDPRApi->deactivate_users_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deactivate_users_request** | [**DeactivateUsersRequest**](DeactivateUsersRequest.md)|  | 

### Return type

[**DeactivateUsersResponse**](DeactivateUsersResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_channels_0**
> DeleteChannelsResponse delete_channels_0(delete_channels_request)

Deletes channels asynchronously

Allows to delete several channels at once asynchronously  Sends events: - channel.deleted  Required permissions: - DeleteChannel 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.delete_channels_request import DeleteChannelsRequest
from openapi_client.models.delete_channels_response import DeleteChannelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GDPRApi(api_client)
    delete_channels_request = openapi_client.DeleteChannelsRequest() # DeleteChannelsRequest | 

    try:
        # Deletes channels asynchronously
        api_response = api_instance.delete_channels_0(delete_channels_request)
        print("The response of GDPRApi->delete_channels_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GDPRApi->delete_channels_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_channels_request** | [**DeleteChannelsRequest**](DeleteChannelsRequest.md)|  | 

### Return type

[**DeleteChannelsResponse**](DeleteChannelsResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_0**
> DeleteUserResponse delete_user_0(user_id, mark_messages_deleted=mark_messages_deleted, hard_delete=hard_delete, delete_conversation_channels=delete_conversation_channels)

Delete user

Deletes user and optionally all their belongings. The Endpoint is deprecated, please use 'Delete Users' endpoint instead  Sends events: - channel.deleted - message.deleted - user.deleted 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.delete_user_response import DeleteUserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GDPRApi(api_client)
    user_id = 'user_id_example' # str | 
    mark_messages_deleted = True # bool |  (optional)
    hard_delete = True # bool |  (optional)
    delete_conversation_channels = True # bool |  (optional)

    try:
        # Delete user
        api_response = api_instance.delete_user_0(user_id, mark_messages_deleted=mark_messages_deleted, hard_delete=hard_delete, delete_conversation_channels=delete_conversation_channels)
        print("The response of GDPRApi->delete_user_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GDPRApi->delete_user_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **mark_messages_deleted** | **bool**|  | [optional] 
 **hard_delete** | **bool**|  | [optional] 
 **delete_conversation_channels** | **bool**|  | [optional] 

### Return type

[**DeleteUserResponse**](DeleteUserResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_users_0**
> DeleteUsersResponse delete_users_0(delete_users_request)

Delete Users

Deletes users and optionally all their belongings asynchronously.  Sends events: - channel.deleted - user.deleted 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.delete_users_request import DeleteUsersRequest
from openapi_client.models.delete_users_response import DeleteUsersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GDPRApi(api_client)
    delete_users_request = openapi_client.DeleteUsersRequest() # DeleteUsersRequest | 

    try:
        # Delete Users
        api_response = api_instance.delete_users_0(delete_users_request)
        print("The response of GDPRApi->delete_users_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GDPRApi->delete_users_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_users_request** | [**DeleteUsersRequest**](DeleteUsersRequest.md)|  | 

### Return type

[**DeleteUsersResponse**](DeleteUsersResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reactivate_user_0**
> ReactivateUserResponse reactivate_user_0(user_id, reactivate_user_request)

Reactivate user

Activates user who's been deactivated previously  Sends events: - user.reactivated 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.reactivate_user_request import ReactivateUserRequest
from openapi_client.models.reactivate_user_response import ReactivateUserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GDPRApi(api_client)
    user_id = 'user_id_example' # str | 
    reactivate_user_request = openapi_client.ReactivateUserRequest() # ReactivateUserRequest | 

    try:
        # Reactivate user
        api_response = api_instance.reactivate_user_0(user_id, reactivate_user_request)
        print("The response of GDPRApi->reactivate_user_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GDPRApi->reactivate_user_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **reactivate_user_request** | [**ReactivateUserRequest**](ReactivateUserRequest.md)|  | 

### Return type

[**ReactivateUserResponse**](ReactivateUserResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reactivate_users_0**
> ReactivateUsersResponse reactivate_users_0(reactivate_users_request)

Reactivate users

Reactivate users in batches  Sends events: - user.reactivated 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.reactivate_users_request import ReactivateUsersRequest
from openapi_client.models.reactivate_users_response import ReactivateUsersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GDPRApi(api_client)
    reactivate_users_request = openapi_client.ReactivateUsersRequest() # ReactivateUsersRequest | 

    try:
        # Reactivate users
        api_response = api_instance.reactivate_users_0(reactivate_users_request)
        print("The response of GDPRApi->reactivate_users_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GDPRApi->reactivate_users_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reactivate_users_request** | [**ReactivateUsersRequest**](ReactivateUsersRequest.md)|  | 

### Return type

[**ReactivateUsersResponse**](ReactivateUsersResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

