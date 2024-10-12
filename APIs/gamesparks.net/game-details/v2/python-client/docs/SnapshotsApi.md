# openapi_client.SnapshotsApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copy_snapshot_to_existing_game_using_post1**](SnapshotsApi.md#copy_snapshot_to_existing_game_using_post1) | **POST** /restv2/game/{apiKey}/admin/snapshots/{snapshotId}/copy/to/{targetApiKey} | copySnapshotToExistingGame
[**copy_snapshot_to_new_game_using_post**](SnapshotsApi.md#copy_snapshot_to_new_game_using_post) | **POST** /restv2/game/{apiKey}/admin/snapshots/{snapshotId}/copy | copySnapshotToNewGame
[**create_snapshots_using_post**](SnapshotsApi.md#create_snapshots_using_post) | **POST** /restv2/game/{apiKey}/admin/snapshots | createSnapshots
[**delete_snapshot_using_delete1**](SnapshotsApi.md#delete_snapshot_using_delete1) | **DELETE** /restv2/game/{apiKey}/admin/snapshots/{snapshotId} | deleteSnapshot
[**get_live_snapshot_id_using_get**](SnapshotsApi.md#get_live_snapshot_id_using_get) | **GET** /restv2/game/{apiKey}/admin/snapshots/liveSnapshotId | getLiveSnapshotId
[**get_snapshot_using_get**](SnapshotsApi.md#get_snapshot_using_get) | **GET** /restv2/game/{apiKey}/admin/snapshots/{snapshotId} | getSnapshot
[**get_snapshots_using_get**](SnapshotsApi.md#get_snapshots_using_get) | **GET** /restv2/game/{apiKey}/admin/snapshots/page/{page} | getSnapshots
[**get_snapshots_using_get1**](SnapshotsApi.md#get_snapshots_using_get1) | **GET** /restv2/game/{apiKey}/admin/snapshots | getSnapshots
[**publish_snapshot_using_post1**](SnapshotsApi.md#publish_snapshot_using_post1) | **POST** /restv2/game/{apiKey}/admin/snapshots/{snapshotId}/publish | publishSnapshot
[**revert_to_snapshot_using_post**](SnapshotsApi.md#revert_to_snapshot_using_post) | **POST** /restv2/game/{apiKey}/admin/snapshots/revert/to/{snapshotId} | revertToSnapshot
[**unpublish_snapshot_using_post**](SnapshotsApi.md#unpublish_snapshot_using_post) | **POST** /restv2/game/{apiKey}/admin/snapshots/{snapshotId}/unpublish | unpublishSnapshot


# **copy_snapshot_to_existing_game_using_post1**
> SnapshotCreationSuccessModel copy_snapshot_to_existing_game_using_post1(api_key, snapshot_id, target_api_key, include_game_config=include_game_config, include_metadata=include_metadata, include_binaries=include_binaries, include_collaborators=include_collaborators)

copySnapshotToExistingGame

### Example


```python
import openapi_client
from openapi_client.models.snapshot_creation_success_model import SnapshotCreationSuccessModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId
    target_api_key = 'target_api_key_example' # str | targetApiKey
    include_game_config = True # bool | includeGameConfig (optional) (default to True)
    include_metadata = True # bool | includeMetadata (optional) (default to True)
    include_binaries = True # bool | includeBinaries (optional) (default to True)
    include_collaborators = True # bool | includeCollaborators (optional) (default to True)

    try:
        # copySnapshotToExistingGame
        api_response = api_instance.copy_snapshot_to_existing_game_using_post1(api_key, snapshot_id, target_api_key, include_game_config=include_game_config, include_metadata=include_metadata, include_binaries=include_binaries, include_collaborators=include_collaborators)
        print("The response of SnapshotsApi->copy_snapshot_to_existing_game_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->copy_snapshot_to_existing_game_using_post1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 
 **target_api_key** | **str**| targetApiKey | 
 **include_game_config** | **bool**| includeGameConfig | [optional] [default to True]
 **include_metadata** | **bool**| includeMetadata | [optional] [default to True]
 **include_binaries** | **bool**| includeBinaries | [optional] [default to True]
 **include_collaborators** | **bool**| includeCollaborators | [optional] [default to True]

### Return type

[**SnapshotCreationSuccessModel**](SnapshotCreationSuccessModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copy_snapshot_to_new_game_using_post**
> SnapshotCreationSuccessModel copy_snapshot_to_new_game_using_post(api_key, snapshot_id, include_game_config=include_game_config, include_metadata=include_metadata, include_binaries=include_binaries, include_collaborators=include_collaborators)

copySnapshotToNewGame

### Example


```python
import openapi_client
from openapi_client.models.snapshot_creation_success_model import SnapshotCreationSuccessModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId
    include_game_config = True # bool | includeGameConfig (optional) (default to True)
    include_metadata = True # bool | includeMetadata (optional) (default to True)
    include_binaries = True # bool | includeBinaries (optional) (default to True)
    include_collaborators = True # bool | includeCollaborators (optional) (default to True)

    try:
        # copySnapshotToNewGame
        api_response = api_instance.copy_snapshot_to_new_game_using_post(api_key, snapshot_id, include_game_config=include_game_config, include_metadata=include_metadata, include_binaries=include_binaries, include_collaborators=include_collaborators)
        print("The response of SnapshotsApi->copy_snapshot_to_new_game_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->copy_snapshot_to_new_game_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 
 **include_game_config** | **bool**| includeGameConfig | [optional] [default to True]
 **include_metadata** | **bool**| includeMetadata | [optional] [default to True]
 **include_binaries** | **bool**| includeBinaries | [optional] [default to True]
 **include_collaborators** | **bool**| includeCollaborators | [optional] [default to True]

### Return type

[**SnapshotCreationSuccessModel**](SnapshotCreationSuccessModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_snapshots_using_post**
> SnapshotModel create_snapshots_using_post(api_key, snapshot_creation_model)

createSnapshots

### Example


```python
import openapi_client
from openapi_client.models.snapshot_creation_model import SnapshotCreationModel
from openapi_client.models.snapshot_model import SnapshotModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_creation_model = openapi_client.SnapshotCreationModel() # SnapshotCreationModel | description

    try:
        # createSnapshots
        api_response = api_instance.create_snapshots_using_post(api_key, snapshot_creation_model)
        print("The response of SnapshotsApi->create_snapshots_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->create_snapshots_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_creation_model** | [**SnapshotCreationModel**](SnapshotCreationModel.md)| description | 

### Return type

[**SnapshotModel**](SnapshotModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_snapshot_using_delete1**
> MessageModel delete_snapshot_using_delete1(api_key, snapshot_id)

deleteSnapshot

### Example


```python
import openapi_client
from openapi_client.models.message_model import MessageModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId

    try:
        # deleteSnapshot
        api_response = api_instance.delete_snapshot_using_delete1(api_key, snapshot_id)
        print("The response of SnapshotsApi->delete_snapshot_using_delete1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->delete_snapshot_using_delete1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 

### Return type

[**MessageModel**](MessageModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_live_snapshot_id_using_get**
> MessageModel get_live_snapshot_id_using_get(api_key)

getLiveSnapshotId

### Example


```python
import openapi_client
from openapi_client.models.message_model import MessageModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # getLiveSnapshotId
        api_response = api_instance.get_live_snapshot_id_using_get(api_key)
        print("The response of SnapshotsApi->get_live_snapshot_id_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->get_live_snapshot_id_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**MessageModel**](MessageModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_snapshot_using_get**
> SnapshotModel get_snapshot_using_get(api_key, snapshot_id)

getSnapshot

### Example


```python
import openapi_client
from openapi_client.models.snapshot_model import SnapshotModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId

    try:
        # getSnapshot
        api_response = api_instance.get_snapshot_using_get(api_key, snapshot_id)
        print("The response of SnapshotsApi->get_snapshot_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->get_snapshot_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 

### Return type

[**SnapshotModel**](SnapshotModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_snapshots_using_get**
> List[SnapshotModel] get_snapshots_using_get(api_key, page, page_size=page_size)

getSnapshots

### Example


```python
import openapi_client
from openapi_client.models.snapshot_model import SnapshotModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    page = 56 # int | page
    page_size = 20 # int | pageSize (optional) (default to 20)

    try:
        # getSnapshots
        api_response = api_instance.get_snapshots_using_get(api_key, page, page_size=page_size)
        print("The response of SnapshotsApi->get_snapshots_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->get_snapshots_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **page** | **int**| page | 
 **page_size** | **int**| pageSize | [optional] [default to 20]

### Return type

[**List[SnapshotModel]**](SnapshotModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_snapshots_using_get1**
> List[SnapshotModel] get_snapshots_using_get1(api_key, page_size=page_size)

getSnapshots

### Example


```python
import openapi_client
from openapi_client.models.snapshot_model import SnapshotModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    page_size = 20 # int | pageSize (optional) (default to 20)

    try:
        # getSnapshots
        api_response = api_instance.get_snapshots_using_get1(api_key, page_size=page_size)
        print("The response of SnapshotsApi->get_snapshots_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->get_snapshots_using_get1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **page_size** | **int**| pageSize | [optional] [default to 20]

### Return type

[**List[SnapshotModel]**](SnapshotModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publish_snapshot_using_post1**
> publish_snapshot_using_post1(api_key, snapshot_id)

publishSnapshot

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId

    try:
        # publishSnapshot
        api_instance.publish_snapshot_using_post1(api_key, snapshot_id)
    except Exception as e:
        print("Exception when calling SnapshotsApi->publish_snapshot_using_post1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revert_to_snapshot_using_post**
> MessageModel revert_to_snapshot_using_post(api_key, snapshot_id)

revertToSnapshot

### Example


```python
import openapi_client
from openapi_client.models.message_model import MessageModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId

    try:
        # revertToSnapshot
        api_response = api_instance.revert_to_snapshot_using_post(api_key, snapshot_id)
        print("The response of SnapshotsApi->revert_to_snapshot_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->revert_to_snapshot_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 

### Return type

[**MessageModel**](MessageModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unpublish_snapshot_using_post**
> MessageModel unpublish_snapshot_using_post(api_key, snapshot_id)

unpublishSnapshot

### Example


```python
import openapi_client
from openapi_client.models.message_model import MessageModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnapshotsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId

    try:
        # unpublishSnapshot
        api_response = api_instance.unpublish_snapshot_using_post(api_key, snapshot_id)
        print("The response of SnapshotsApi->unpublish_snapshot_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->unpublish_snapshot_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 

### Return type

[**MessageModel**](MessageModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

