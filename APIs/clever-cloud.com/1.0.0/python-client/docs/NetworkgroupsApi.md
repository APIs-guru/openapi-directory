# openapi_client.NetworkgroupsApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_group_1**](NetworkgroupsApi.md#create_network_group_1) | **POST** /v4/networkgroups/organisations/{ownerId}/networkgroups | Create Network Group
[**create_network_group_external_peer_1**](NetworkgroupsApi.md#create_network_group_external_peer_1) | **POST** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers | Add external peer
[**create_network_group_member_1**](NetworkgroupsApi.md#create_network_group_member_1) | **POST** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members | Add member
[**delete_network_group_1**](NetworkgroupsApi.md#delete_network_group_1) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId} | Delete Network Group
[**delete_network_group_external_peer_1**](NetworkgroupsApi.md#delete_network_group_external_peer_1) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers/{peerId} | Remove external peer
[**delete_network_group_member_1**](NetworkgroupsApi.md#delete_network_group_member_1) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId} | Remove member
[**delete_network_group_peer_1**](NetworkgroupsApi.md#delete_network_group_peer_1) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId} | Remove peer
[**get_network_group_1**](NetworkgroupsApi.md#get_network_group_1) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId} | Get Network Group
[**get_network_group_member_1**](NetworkgroupsApi.md#get_network_group_member_1) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId} | Get member
[**get_network_group_peer_1**](NetworkgroupsApi.md#get_network_group_peer_1) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId} | Get peer
[**get_network_group_stream_1**](NetworkgroupsApi.md#get_network_group_stream_1) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/stream | Network Group SSE
[**get_network_group_wire_guard_configuration_1**](NetworkgroupsApi.md#get_network_group_wire_guard_configuration_1) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration | Get WireGuard® configuration
[**get_network_group_wire_guard_configuration_stream_1**](NetworkgroupsApi.md#get_network_group_wire_guard_configuration_stream_1) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration/stream | Get WireGuard® configuration
[**list_network_group_members_1**](NetworkgroupsApi.md#list_network_group_members_1) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members | List members
[**list_network_group_peers_1**](NetworkgroupsApi.md#list_network_group_peers_1) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers | List peers
[**list_network_groups_1**](NetworkgroupsApi.md#list_network_groups_1) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups | List Network Groups


# **create_network_group_1**
> object create_network_group_1(owner_id, body=body)

Create Network Group

Creates a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Create Network Group
        api_response = api_instance.create_network_group_1(owner_id, body=body)
        print("The response of NetworkgroupsApi->create_network_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->create_network_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain; charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** |  |  -  |
**401** |  |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_group_external_peer_1**
> object create_network_group_external_peer_1(owner_id, network_group_id, body=body)

Add external peer

Adds an external peer to a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Add external peer
        api_response = api_instance.create_network_group_external_peer_1(owner_id, network_group_id, body=body)
        print("The response of NetworkgroupsApi->create_network_group_external_peer_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->create_network_group_external_peer_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain; charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_group_member_1**
> create_network_group_member_1(owner_id, network_group_id, schema2=schema2)

Add member

Adds a member to a Network Group.

### Example


```python
import openapi_client
from openapi_client.models.schema2 import Schema2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    schema2 = openapi_client.Schema2() # Schema2 |  (optional)

    try:
        # Add member
        api_instance.create_network_group_member_1(owner_id, network_group_id, schema2=schema2)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->create_network_group_member_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **schema2** | [**Schema2**](Schema2.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**400** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_group_1**
> delete_network_group_1(owner_id, network_group_id, body=body)

Delete Network Group

Deletes a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Delete Network Group
        api_instance.delete_network_group_1(owner_id, network_group_id, body=body)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->delete_network_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

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
**204** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_group_external_peer_1**
> delete_network_group_external_peer_1(owner_id, network_group_id, peer_id, body=body)

Remove external peer

Removes an external peer from a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Remove external peer
        api_instance.delete_network_group_external_peer_1(owner_id, network_group_id, peer_id, body=body)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->delete_network_group_external_peer_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

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
**204** | Success |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_group_member_1**
> delete_network_group_member_1(owner_id, network_group_id, member_id, body=body)

Remove member

Removes a member from a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    member_id = 'member_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Remove member
        api_instance.delete_network_group_member_1(owner_id, network_group_id, member_id, body=body)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->delete_network_group_member_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **member_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

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
**204** | Success |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_group_peer_1**
> delete_network_group_peer_1(owner_id, network_group_id, peer_id, body=body)

Remove peer

Removes a peer from a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Remove peer
        api_instance.delete_network_group_peer_1(owner_id, network_group_id, peer_id, body=body)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->delete_network_group_peer_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

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
**204** | Success |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_1**
> object get_network_group_1(owner_id, network_group_id, body=body)

Get Network Group

Gets details of a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get Network Group
        api_response = api_instance.get_network_group_1(owner_id, network_group_id, body=body)
        print("The response of NetworkgroupsApi->get_network_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->get_network_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_member_1**
> Schema1 get_network_group_member_1(owner_id, network_group_id, member_id, body=body)

Get member

Gets details of a Network Group member.

### Example


```python
import openapi_client
from openapi_client.models.schema1 import Schema1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    member_id = 'member_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get member
        api_response = api_instance.get_network_group_member_1(owner_id, network_group_id, member_id, body=body)
        print("The response of NetworkgroupsApi->get_network_group_member_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->get_network_group_member_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **member_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

[**Schema1**](Schema1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_peer_1**
> object get_network_group_peer_1(owner_id, network_group_id, peer_id, body=body)

Get peer

Gets details of a Network Group peer.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get peer
        api_response = api_instance.get_network_group_peer_1(owner_id, network_group_id, peer_id, body=body)
        print("The response of NetworkgroupsApi->get_network_group_peer_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->get_network_group_peer_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_stream_1**
> object get_network_group_stream_1(owner_id, network_group_id, body=body)

Network Group SSE

Retrieves the current Network Group details as a Server Sent Event.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Network Group SSE
        api_response = api_instance.get_network_group_stream_1(owner_id, network_group_id, body=body)
        print("The response of NetworkgroupsApi->get_network_group_stream_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->get_network_group_stream_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_wire_guard_configuration_1**
> object get_network_group_wire_guard_configuration_1(owner_id, network_group_id, peer_id, body=body)

Get WireGuard® configuration

Gets the current WireGuard® tunnel configuration file for a Network Group peer.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get WireGuard® configuration
        api_response = api_instance.get_network_group_wire_guard_configuration_1(owner_id, network_group_id, peer_id, body=body)
        print("The response of NetworkgroupsApi->get_network_group_wire_guard_configuration_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->get_network_group_wire_guard_configuration_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_wire_guard_configuration_stream_1**
> object get_network_group_wire_guard_configuration_stream_1(owner_id, network_group_id, peer_id, body=body)

Get WireGuard® configuration

Gets the current WireGuard® tunnel configuration file for a Network Group peer as a Server Sent Event.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get WireGuard® configuration
        api_response = api_instance.get_network_group_wire_guard_configuration_stream_1(owner_id, network_group_id, peer_id, body=body)
        print("The response of NetworkgroupsApi->get_network_group_wire_guard_configuration_stream_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->get_network_group_wire_guard_configuration_stream_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_network_group_members_1**
> List[Schema1] list_network_group_members_1(owner_id, network_group_id, body=body)

List members

Lists members in a Network Group.

### Example


```python
import openapi_client
from openapi_client.models.schema1 import Schema1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # List members
        api_response = api_instance.list_network_group_members_1(owner_id, network_group_id, body=body)
        print("The response of NetworkgroupsApi->list_network_group_members_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->list_network_group_members_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

[**List[Schema1]**](Schema1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_network_group_peers_1**
> List[object] list_network_group_peers_1(owner_id, network_group_id, body=body)

List peers

Lists peers in a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # List peers
        api_response = api_instance.list_network_group_peers_1(owner_id, network_group_id, body=body)
        print("The response of NetworkgroupsApi->list_network_group_peers_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->list_network_group_peers_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_network_groups_1**
> List[object] list_network_groups_1(owner_id, body=body)

List Network Groups

Lists Network Groups from an owner.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkgroupsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # List Network Groups
        api_response = api_instance.list_network_groups_1(owner_id, body=body)
        print("The response of NetworkgroupsApi->list_network_groups_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkgroupsApi->list_network_groups_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

