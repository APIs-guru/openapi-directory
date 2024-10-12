# openapi_client.TelegrafsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_telegrafs_id**](TelegrafsApi.md#delete_telegrafs_id) | **DELETE** /telegrafs/{telegrafID} | Delete a Telegraf configuration
[**delete_telegrafs_id_labels_id**](TelegrafsApi.md#delete_telegrafs_id_labels_id) | **DELETE** /telegrafs/{telegrafID}/labels/{labelID} | Delete a label from a Telegraf config
[**delete_telegrafs_id_members_id**](TelegrafsApi.md#delete_telegrafs_id_members_id) | **DELETE** /telegrafs/{telegrafID}/members/{userID} | Remove a member from a Telegraf config
[**delete_telegrafs_id_owners_id**](TelegrafsApi.md#delete_telegrafs_id_owners_id) | **DELETE** /telegrafs/{telegrafID}/owners/{userID} | Remove an owner from a Telegraf config
[**get_telegrafs**](TelegrafsApi.md#get_telegrafs) | **GET** /telegrafs | List all Telegraf configurations
[**get_telegrafs_id**](TelegrafsApi.md#get_telegrafs_id) | **GET** /telegrafs/{telegrafID} | Retrieve a Telegraf configuration
[**get_telegrafs_id_labels**](TelegrafsApi.md#get_telegrafs_id_labels) | **GET** /telegrafs/{telegrafID}/labels | List all labels for a Telegraf config
[**get_telegrafs_id_members**](TelegrafsApi.md#get_telegrafs_id_members) | **GET** /telegrafs/{telegrafID}/members | List all users with member privileges for a Telegraf config
[**get_telegrafs_id_owners**](TelegrafsApi.md#get_telegrafs_id_owners) | **GET** /telegrafs/{telegrafID}/owners | List all owners of a Telegraf configuration
[**post_telegrafs**](TelegrafsApi.md#post_telegrafs) | **POST** /telegrafs | Create a Telegraf configuration
[**post_telegrafs_id_labels**](TelegrafsApi.md#post_telegrafs_id_labels) | **POST** /telegrafs/{telegrafID}/labels | Add a label to a Telegraf config
[**post_telegrafs_id_members**](TelegrafsApi.md#post_telegrafs_id_members) | **POST** /telegrafs/{telegrafID}/members | Add a member to a Telegraf config
[**post_telegrafs_id_owners**](TelegrafsApi.md#post_telegrafs_id_owners) | **POST** /telegrafs/{telegrafID}/owners | Add an owner to a Telegraf configuration
[**put_telegrafs_id**](TelegrafsApi.md#put_telegrafs_id) | **PUT** /telegrafs/{telegrafID} | Update a Telegraf configuration


# **delete_telegrafs_id**
> delete_telegrafs_id(telegraf_id, zap_trace_span=zap_trace_span)

Delete a Telegraf configuration

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf configuration ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a Telegraf configuration
        api_instance.delete_telegrafs_id(telegraf_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TelegrafsApi->delete_telegrafs_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf configuration ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_telegrafs_id_labels_id**
> delete_telegrafs_id_labels_id(telegraf_id, label_id, zap_trace_span=zap_trace_span)

Delete a label from a Telegraf config

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf config ID.
    label_id = 'label_id_example' # str | The label ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a label from a Telegraf config
        api_instance.delete_telegrafs_id_labels_id(telegraf_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TelegrafsApi->delete_telegrafs_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf config ID. | 
 **label_id** | **str**| The label ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | Telegraf config not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_telegrafs_id_members_id**
> delete_telegrafs_id_members_id(user_id, telegraf_id, zap_trace_span=zap_trace_span)

Remove a member from a Telegraf config

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    user_id = 'user_id_example' # str | The ID of the member to remove.
    telegraf_id = 'telegraf_id_example' # str | The Telegraf config ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove a member from a Telegraf config
        api_instance.delete_telegrafs_id_members_id(user_id, telegraf_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TelegrafsApi->delete_telegrafs_id_members_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the member to remove. | 
 **telegraf_id** | **str**| The Telegraf config ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Member removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_telegrafs_id_owners_id**
> delete_telegrafs_id_owners_id(user_id, telegraf_id, zap_trace_span=zap_trace_span)

Remove an owner from a Telegraf config

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    user_id = 'user_id_example' # str | The ID of the owner to remove.
    telegraf_id = 'telegraf_id_example' # str | The Telegraf config ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove an owner from a Telegraf config
        api_instance.delete_telegrafs_id_owners_id(user_id, telegraf_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TelegrafsApi->delete_telegrafs_id_owners_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the owner to remove. | 
 **telegraf_id** | **str**| The Telegraf config ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Owner removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_telegrafs**
> Telegrafs get_telegrafs(zap_trace_span=zap_trace_span, org_id=org_id)

List all Telegraf configurations

### Example


```python
import openapi_client
from openapi_client.models.telegrafs import Telegrafs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    org_id = 'org_id_example' # str | The organization ID the Telegraf config belongs to. (optional)

    try:
        # List all Telegraf configurations
        api_response = api_instance.get_telegrafs(zap_trace_span=zap_trace_span, org_id=org_id)
        print("The response of TelegrafsApi->get_telegrafs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->get_telegrafs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **org_id** | **str**| The organization ID the Telegraf config belongs to. | [optional] 

### Return type

[**Telegrafs**](Telegrafs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Telegraf configurations |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_telegrafs_id**
> Telegraf get_telegrafs_id(telegraf_id, zap_trace_span=zap_trace_span, accept=accept)

Retrieve a Telegraf configuration

### Example


```python
import openapi_client
from openapi_client.models.telegraf import Telegraf
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf configuration ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    accept = application/toml # str |  (optional) (default to application/toml)

    try:
        # Retrieve a Telegraf configuration
        api_response = api_instance.get_telegrafs_id(telegraf_id, zap_trace_span=zap_trace_span, accept=accept)
        print("The response of TelegrafsApi->get_telegrafs_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->get_telegrafs_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf configuration ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **accept** | **str**|  | [optional] [default to application/toml]

### Return type

[**Telegraf**](Telegraf.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream, application/toml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Telegraf configuration details |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_telegrafs_id_labels**
> LabelsResponse get_telegrafs_id_labels(telegraf_id, zap_trace_span=zap_trace_span)

List all labels for a Telegraf config

### Example


```python
import openapi_client
from openapi_client.models.labels_response import LabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf config ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a Telegraf config
        api_response = api_instance.get_telegrafs_id_labels(telegraf_id, zap_trace_span=zap_trace_span)
        print("The response of TelegrafsApi->get_telegrafs_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->get_telegrafs_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf config ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelsResponse**](LabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all labels for a Telegraf config |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_telegrafs_id_members**
> ResourceMembers get_telegrafs_id_members(telegraf_id, zap_trace_span=zap_trace_span)

List all users with member privileges for a Telegraf config

### Example


```python
import openapi_client
from openapi_client.models.resource_members import ResourceMembers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf config ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all users with member privileges for a Telegraf config
        api_response = api_instance.get_telegrafs_id_members(telegraf_id, zap_trace_span=zap_trace_span)
        print("The response of TelegrafsApi->get_telegrafs_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->get_telegrafs_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf config ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMembers**](ResourceMembers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Telegraf config members |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_telegrafs_id_owners**
> ResourceOwners get_telegrafs_id_owners(telegraf_id, zap_trace_span=zap_trace_span)

List all owners of a Telegraf configuration

### Example


```python
import openapi_client
from openapi_client.models.resource_owners import ResourceOwners
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf configuration ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all owners of a Telegraf configuration
        api_response = api_instance.get_telegrafs_id_owners(telegraf_id, zap_trace_span=zap_trace_span)
        print("The response of TelegrafsApi->get_telegrafs_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->get_telegrafs_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf configuration ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwners**](ResourceOwners.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Telegraf configuration owners as a ResourceOwners list |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_telegrafs**
> Telegraf post_telegrafs(telegraf_request, zap_trace_span=zap_trace_span)

Create a Telegraf configuration

### Example


```python
import openapi_client
from openapi_client.models.telegraf import Telegraf
from openapi_client.models.telegraf_request import TelegrafRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_request = openapi_client.TelegrafRequest() # TelegrafRequest | Telegraf configuration to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a Telegraf configuration
        api_response = api_instance.post_telegrafs(telegraf_request, zap_trace_span=zap_trace_span)
        print("The response of TelegrafsApi->post_telegrafs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->post_telegrafs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_request** | [**TelegrafRequest**](TelegrafRequest.md)| Telegraf configuration to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Telegraf**](Telegraf.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Telegraf configuration created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_telegrafs_id_labels**
> LabelResponse post_telegrafs_id_labels(telegraf_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a Telegraf config

### Example


```python
import openapi_client
from openapi_client.models.label_mapping import LabelMapping
from openapi_client.models.label_response import LabelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf config ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a Telegraf config
        api_response = api_instance.post_telegrafs_id_labels(telegraf_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of TelegrafsApi->post_telegrafs_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->post_telegrafs_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf config ID. | 
 **label_mapping** | [**LabelMapping**](LabelMapping.md)| Label to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The label added to the Telegraf config |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_telegrafs_id_members**
> ResourceMember post_telegrafs_id_members(telegraf_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add a member to a Telegraf config

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_member import ResourceMember
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf config ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as member
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a member to a Telegraf config
        api_response = api_instance.post_telegrafs_id_members(telegraf_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of TelegrafsApi->post_telegrafs_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->post_telegrafs_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf config ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as member | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMember**](ResourceMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Member added to Telegraf config |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_telegrafs_id_owners**
> ResourceOwner post_telegrafs_id_owners(telegraf_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add an owner to a Telegraf configuration

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_owner import ResourceOwner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf configuration ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as owner
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add an owner to a Telegraf configuration
        api_response = api_instance.post_telegrafs_id_owners(telegraf_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of TelegrafsApi->post_telegrafs_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->post_telegrafs_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf configuration ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as owner | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwner**](ResourceOwner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Telegraf configuration owner was added. Returns a ResourceOwner that references the User. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_telegrafs_id**
> Telegraf put_telegrafs_id(telegraf_id, telegraf_request, zap_trace_span=zap_trace_span)

Update a Telegraf configuration

### Example


```python
import openapi_client
from openapi_client.models.telegraf import Telegraf
from openapi_client.models.telegraf_request import TelegrafRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafsApi(api_client)
    telegraf_id = 'telegraf_id_example' # str | The Telegraf config ID.
    telegraf_request = openapi_client.TelegrafRequest() # TelegrafRequest | Telegraf configuration update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a Telegraf configuration
        api_response = api_instance.put_telegrafs_id(telegraf_id, telegraf_request, zap_trace_span=zap_trace_span)
        print("The response of TelegrafsApi->put_telegrafs_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafsApi->put_telegrafs_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telegraf_id** | **str**| The Telegraf config ID. | 
 **telegraf_request** | [**TelegrafRequest**](TelegrafRequest.md)| Telegraf configuration update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Telegraf**](Telegraf.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An updated Telegraf configurations |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

