# openapi_client.SSHKeysApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_ssh_key**](SSHKeysApi.md#add_ssh_key) | **POST** /ssh-keys | Create a new SSH Key
[**delete_ssh_key**](SSHKeysApi.md#delete_ssh_key) | **DELETE** /ssh-keys/{id} | Delete an SSH Key
[**get_ssh_key**](SSHKeysApi.md#get_ssh_key) | **GET** /ssh-keys/{id} | Get metadata for an SSH Key
[**get_ssh_keys_list**](SSHKeysApi.md#get_ssh_keys_list) | **GET** /ssh-keys | Get metadata for a list of SSH Keys


# **add_ssh_key**
> SSHKeyResponse add_ssh_key(ev_api_key, ev_access_token, add_ssh_key_request_body=add_ssh_key_request_body)

Create a new SSH Key

Create a new SSH Key for a user. Provide the Public Key as formatted from the ssh-keygen command (openssh format or RFC-4716 format).  If you'd prefer to let us generate your key automatically, you can log in to your account via the web portal and set up new keys via the SSH Keys page. 

### Example


```python
import openapi_client
from openapi_client.models.add_ssh_key_request_body import AddSSHKeyRequestBody
from openapi_client.models.ssh_key_response import SSHKeyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SSHKeysApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    add_ssh_key_request_body = openapi_client.AddSSHKeyRequestBody() # AddSSHKeyRequestBody |  (optional)

    try:
        # Create a new SSH Key
        api_response = api_instance.add_ssh_key(ev_api_key, ev_access_token, add_ssh_key_request_body=add_ssh_key_request_body)
        print("The response of SSHKeysApi->add_ssh_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SSHKeysApi->add_ssh_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **add_ssh_key_request_body** | [**AddSSHKeyRequestBody**](AddSSHKeyRequestBody.md)|  | [optional] 

### Return type

[**SSHKeyResponse**](SSHKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_ssh_key**
> delete_ssh_key(id, ev_api_key, ev_access_token)

Delete an SSH Key

Delete the specified SSH key. This will not delete or deactivate the user tied to the key.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SSHKeysApi(api_client)
    id = 'id_example' # str | 
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.

    try:
        # Delete an SSH Key
        api_instance.delete_ssh_key(id, ev_api_key, ev_access_token)
    except Exception as e:
        print("Exception when calling SSHKeysApi->delete_ssh_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ssh_key**
> SSHKeyResponse get_ssh_key(id, ev_api_key, ev_access_token)

Get metadata for an SSH Key

Return the information for a single SSH Key

### Example


```python
import openapi_client
from openapi_client.models.ssh_key_response import SSHKeyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SSHKeysApi(api_client)
    id = 'id_example' # str | 
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.

    try:
        # Get metadata for an SSH Key
        api_response = api_instance.get_ssh_key(id, ev_api_key, ev_access_token)
        print("The response of SSHKeysApi->get_ssh_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SSHKeysApi->get_ssh_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 

### Return type

[**SSHKeyResponse**](SSHKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ssh_keys_list**
> SSHKeyCollectionResponse get_ssh_keys_list(ev_api_key, ev_access_token, user_id=user_id, limit=limit, offset=offset)

Get metadata for a list of SSH Keys

Returns a list of SSH Keys within the account. Can be filtered for a single user.

### Example


```python
import openapi_client
from openapi_client.models.ssh_key_collection_response import SSHKeyCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SSHKeysApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    user_id = 'user_id_example' # str |  Only return results for the given user ID. This is not the username, but the numeric ID of the user. (optional)
    limit = 56 # int |  Limits the results by the given number. Cannot be set higher than 100. (optional)
    offset = 56 # int |  Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. (optional)

    try:
        # Get metadata for a list of SSH Keys
        api_response = api_instance.get_ssh_keys_list(ev_api_key, ev_access_token, user_id=user_id, limit=limit, offset=offset)
        print("The response of SSHKeysApi->get_ssh_keys_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SSHKeysApi->get_ssh_keys_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **user_id** | **str**|  Only return results for the given user ID. This is not the username, but the numeric ID of the user. | [optional] 
 **limit** | **int**|  Limits the results by the given number. Cannot be set higher than 100. | [optional] 
 **offset** | **int**|  Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. | [optional] 

### Return type

[**SSHKeyCollectionResponse**](SSHKeyCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

