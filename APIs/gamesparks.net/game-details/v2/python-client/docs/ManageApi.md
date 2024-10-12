# openapi_client.ManageApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copy_snapshot_to_existing_game_using_post**](ManageApi.md#copy_snapshot_to_existing_game_using_post) | **POST** /restv2/game/{apiKey}/manage/snapshots/{snapshotId}/copy/to/{targetApiKey} | copySnapshotToExistingGame
[**create_query_using_post**](ManageApi.md#create_query_using_post) | **POST** /restv2/game/{apiKey}/manage/queries | createQuery
[**create_screen_using_post**](ManageApi.md#create_screen_using_post) | **POST** /restv2/game/{apiKey}/manage/screens | createScreen
[**create_snapshot_using_post**](ManageApi.md#create_snapshot_using_post) | **POST** /restv2/game/{apiKey}/manage/snapshots | createSnapshot
[**create_snippet_using_post**](ManageApi.md#create_snippet_using_post) | **POST** /restv2/game/{apiKey}/manage/snippets | createSnippet
[**delete_query_using_delete**](ManageApi.md#delete_query_using_delete) | **DELETE** /restv2/game/{apiKey}/manage/queries/{shortCode} | deleteQuery
[**delete_screen_using_delete**](ManageApi.md#delete_screen_using_delete) | **DELETE** /restv2/game/{apiKey}/manage/screens/{shortCode} | deleteScreen
[**delete_snapshot_using_delete**](ManageApi.md#delete_snapshot_using_delete) | **DELETE** /restv2/game/{apiKey}/manage/snapshots/{snapshotId} | deleteSnapshot
[**delete_snippet_using_delete**](ManageApi.md#delete_snippet_using_delete) | **DELETE** /restv2/game/{apiKey}/manage/snippets/{shortCode} | deleteSnippet
[**get_query_using_get**](ManageApi.md#get_query_using_get) | **GET** /restv2/game/{apiKey}/manage/queries/{shortCode} | getQuery
[**get_screen_using_get**](ManageApi.md#get_screen_using_get) | **GET** /restv2/game/{apiKey}/manage/screens/{shortCode} | getScreen
[**get_snippet_using_get**](ManageApi.md#get_snippet_using_get) | **GET** /restv2/game/{apiKey}/manage/snippets/{shortCode} | getSnippet
[**list_executable_screens_using_get**](ManageApi.md#list_executable_screens_using_get) | **GET** /restv2/game/{apiKey}/manage/screens/executable | listExecutableScreens
[**list_queries_using_get**](ManageApi.md#list_queries_using_get) | **GET** /restv2/game/{apiKey}/manage/queries | listQueries
[**list_screens_using_get**](ManageApi.md#list_screens_using_get) | **GET** /restv2/game/{apiKey}/manage/screens | listScreens
[**list_snapshots_using_get**](ManageApi.md#list_snapshots_using_get) | **GET** /restv2/game/{apiKey}/manage/snapshots | listSnapshots
[**list_snippets_using_get**](ManageApi.md#list_snippets_using_get) | **GET** /restv2/game/{apiKey}/manage/snippets | listSnippets
[**publish_snapshot_using_post**](ManageApi.md#publish_snapshot_using_post) | **POST** /restv2/game/{apiKey}/manage/snapshots/{snapshotId}/publish | publishSnapshot
[**revert_snapshot_using_post**](ManageApi.md#revert_snapshot_using_post) | **POST** /restv2/game/{apiKey}/manage/snapshots/{snapshotId}/revert | revertSnapshot
[**update_query_using_put**](ManageApi.md#update_query_using_put) | **PUT** /restv2/game/{apiKey}/manage/queries/{shortCode} | updateQuery
[**update_screen_using_put**](ManageApi.md#update_screen_using_put) | **PUT** /restv2/game/{apiKey}/manage/screens/{shortCode} | updateScreen
[**update_snippet_using_put**](ManageApi.md#update_snippet_using_put) | **PUT** /restv2/game/{apiKey}/manage/snippets/{shortCode} | updateSnippet


# **copy_snapshot_to_existing_game_using_post**
> ManageResult copy_snapshot_to_existing_game_using_post(api_key, snapshot_id, target_api_key)

copySnapshotToExistingGame

### Example


```python
import openapi_client
from openapi_client.models.manage_result import ManageResult
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId
    target_api_key = 'target_api_key_example' # str | targetApiKey

    try:
        # copySnapshotToExistingGame
        api_response = api_instance.copy_snapshot_to_existing_game_using_post(api_key, snapshot_id, target_api_key)
        print("The response of ManageApi->copy_snapshot_to_existing_game_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->copy_snapshot_to_existing_game_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 
 **target_api_key** | **str**| targetApiKey | 

### Return type

[**ManageResult**](ManageResult.md)

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

# **create_query_using_post**
> ManageQuery create_query_using_post(api_key, manage_query)

createQuery

### Example


```python
import openapi_client
from openapi_client.models.manage_query import ManageQuery
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    manage_query = openapi_client.ManageQuery() # ManageQuery | query

    try:
        # createQuery
        api_response = api_instance.create_query_using_post(api_key, manage_query)
        print("The response of ManageApi->create_query_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->create_query_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **manage_query** | [**ManageQuery**](ManageQuery.md)| query | 

### Return type

[**ManageQuery**](ManageQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_screen_using_post**
> ManageScreen create_screen_using_post(api_key, manage_screen)

createScreen

### Example


```python
import openapi_client
from openapi_client.models.manage_screen import ManageScreen
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    manage_screen = openapi_client.ManageScreen() # ManageScreen | screen

    try:
        # createScreen
        api_response = api_instance.create_screen_using_post(api_key, manage_screen)
        print("The response of ManageApi->create_screen_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->create_screen_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **manage_screen** | [**ManageScreen**](ManageScreen.md)| screen | 

### Return type

[**ManageScreen**](ManageScreen.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_snapshot_using_post**
> ManageSnapshot create_snapshot_using_post(api_key, snapshot_creation_model)

createSnapshot

### Example


```python
import openapi_client
from openapi_client.models.manage_snapshot import ManageSnapshot
from openapi_client.models.snapshot_creation_model import SnapshotCreationModel
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_creation_model = openapi_client.SnapshotCreationModel() # SnapshotCreationModel | model

    try:
        # createSnapshot
        api_response = api_instance.create_snapshot_using_post(api_key, snapshot_creation_model)
        print("The response of ManageApi->create_snapshot_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->create_snapshot_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_creation_model** | [**SnapshotCreationModel**](SnapshotCreationModel.md)| model | 

### Return type

[**ManageSnapshot**](ManageSnapshot.md)

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

# **create_snippet_using_post**
> ManageSnippet create_snippet_using_post(api_key, manage_snippet)

createSnippet

### Example


```python
import openapi_client
from openapi_client.models.manage_snippet import ManageSnippet
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    manage_snippet = openapi_client.ManageSnippet() # ManageSnippet | snippet

    try:
        # createSnippet
        api_response = api_instance.create_snippet_using_post(api_key, manage_snippet)
        print("The response of ManageApi->create_snippet_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->create_snippet_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **manage_snippet** | [**ManageSnippet**](ManageSnippet.md)| snippet | 

### Return type

[**ManageSnippet**](ManageSnippet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_query_using_delete**
> ManageResult delete_query_using_delete(api_key, short_code)

deleteQuery

### Example


```python
import openapi_client
from openapi_client.models.manage_result import ManageResult
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    short_code = 'short_code_example' # str | shortCode

    try:
        # deleteQuery
        api_response = api_instance.delete_query_using_delete(api_key, short_code)
        print("The response of ManageApi->delete_query_using_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->delete_query_using_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **short_code** | **str**| shortCode | 

### Return type

[**ManageResult**](ManageResult.md)

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

# **delete_screen_using_delete**
> ManageResult delete_screen_using_delete(api_key, short_code)

deleteScreen

### Example


```python
import openapi_client
from openapi_client.models.manage_result import ManageResult
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    short_code = 'short_code_example' # str | shortCode

    try:
        # deleteScreen
        api_response = api_instance.delete_screen_using_delete(api_key, short_code)
        print("The response of ManageApi->delete_screen_using_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->delete_screen_using_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **short_code** | **str**| shortCode | 

### Return type

[**ManageResult**](ManageResult.md)

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

# **delete_snapshot_using_delete**
> delete_snapshot_using_delete(api_key, snapshot_id)

deleteSnapshot

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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId

    try:
        # deleteSnapshot
        api_instance.delete_snapshot_using_delete(api_key, snapshot_id)
    except Exception as e:
        print("Exception when calling ManageApi->delete_snapshot_using_delete: %s\n" % e)
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
**200** | success |  -  |
**201** | Created |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_snippet_using_delete**
> ManageResult delete_snippet_using_delete(api_key, short_code)

deleteSnippet

### Example


```python
import openapi_client
from openapi_client.models.manage_result import ManageResult
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    short_code = 'short_code_example' # str | shortCode

    try:
        # deleteSnippet
        api_response = api_instance.delete_snippet_using_delete(api_key, short_code)
        print("The response of ManageApi->delete_snippet_using_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->delete_snippet_using_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **short_code** | **str**| shortCode | 

### Return type

[**ManageResult**](ManageResult.md)

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

# **get_query_using_get**
> ManageQuery get_query_using_get(api_key, short_code)

getQuery

### Example


```python
import openapi_client
from openapi_client.models.manage_query import ManageQuery
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    short_code = 'short_code_example' # str | shortCode

    try:
        # getQuery
        api_response = api_instance.get_query_using_get(api_key, short_code)
        print("The response of ManageApi->get_query_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->get_query_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **short_code** | **str**| shortCode | 

### Return type

[**ManageQuery**](ManageQuery.md)

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

# **get_screen_using_get**
> ManageScreen get_screen_using_get(api_key, short_code)

getScreen

### Example


```python
import openapi_client
from openapi_client.models.manage_screen import ManageScreen
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    short_code = 'short_code_example' # str | shortCode

    try:
        # getScreen
        api_response = api_instance.get_screen_using_get(api_key, short_code)
        print("The response of ManageApi->get_screen_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->get_screen_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **short_code** | **str**| shortCode | 

### Return type

[**ManageScreen**](ManageScreen.md)

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

# **get_snippet_using_get**
> ManageSnippet get_snippet_using_get(api_key, short_code)

getSnippet

### Example


```python
import openapi_client
from openapi_client.models.manage_snippet import ManageSnippet
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    short_code = 'short_code_example' # str | shortCode

    try:
        # getSnippet
        api_response = api_instance.get_snippet_using_get(api_key, short_code)
        print("The response of ManageApi->get_snippet_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->get_snippet_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **short_code** | **str**| shortCode | 

### Return type

[**ManageSnippet**](ManageSnippet.md)

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

# **list_executable_screens_using_get**
> List[ManageItemSummary] list_executable_screens_using_get(api_key)

listExecutableScreens

### Example


```python
import openapi_client
from openapi_client.models.manage_item_summary import ManageItemSummary
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # listExecutableScreens
        api_response = api_instance.list_executable_screens_using_get(api_key)
        print("The response of ManageApi->list_executable_screens_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->list_executable_screens_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**List[ManageItemSummary]**](ManageItemSummary.md)

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

# **list_queries_using_get**
> List[ManageItemSummary] list_queries_using_get(api_key)

listQueries

### Example


```python
import openapi_client
from openapi_client.models.manage_item_summary import ManageItemSummary
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # listQueries
        api_response = api_instance.list_queries_using_get(api_key)
        print("The response of ManageApi->list_queries_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->list_queries_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**List[ManageItemSummary]**](ManageItemSummary.md)

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

# **list_screens_using_get**
> List[ManageItemSummary] list_screens_using_get(api_key)

listScreens

### Example


```python
import openapi_client
from openapi_client.models.manage_item_summary import ManageItemSummary
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # listScreens
        api_response = api_instance.list_screens_using_get(api_key)
        print("The response of ManageApi->list_screens_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->list_screens_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**List[ManageItemSummary]**](ManageItemSummary.md)

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

# **list_snapshots_using_get**
> List[ManageSnapshot] list_snapshots_using_get(api_key)

listSnapshots

### Example


```python
import openapi_client
from openapi_client.models.manage_snapshot import ManageSnapshot
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # listSnapshots
        api_response = api_instance.list_snapshots_using_get(api_key)
        print("The response of ManageApi->list_snapshots_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->list_snapshots_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**List[ManageSnapshot]**](ManageSnapshot.md)

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

# **list_snippets_using_get**
> List[ManageItemSummary] list_snippets_using_get(api_key)

listSnippets

### Example


```python
import openapi_client
from openapi_client.models.manage_item_summary import ManageItemSummary
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # listSnippets
        api_response = api_instance.list_snippets_using_get(api_key)
        print("The response of ManageApi->list_snippets_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->list_snippets_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**List[ManageItemSummary]**](ManageItemSummary.md)

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

# **publish_snapshot_using_post**
> ManageResult publish_snapshot_using_post(api_key, snapshot_id)

publishSnapshot

### Example


```python
import openapi_client
from openapi_client.models.manage_result import ManageResult
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId

    try:
        # publishSnapshot
        api_response = api_instance.publish_snapshot_using_post(api_key, snapshot_id)
        print("The response of ManageApi->publish_snapshot_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->publish_snapshot_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 

### Return type

[**ManageResult**](ManageResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revert_snapshot_using_post**
> ManageResult revert_snapshot_using_post(api_key, snapshot_id)

revertSnapshot

### Example


```python
import openapi_client
from openapi_client.models.manage_result import ManageResult
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id = 'snapshot_id_example' # str | snapshotId

    try:
        # revertSnapshot
        api_response = api_instance.revert_snapshot_using_post(api_key, snapshot_id)
        print("The response of ManageApi->revert_snapshot_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->revert_snapshot_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id** | **str**| snapshotId | 

### Return type

[**ManageResult**](ManageResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_query_using_put**
> ManageQuery update_query_using_put(api_key, short_code, manage_query)

updateQuery

### Example


```python
import openapi_client
from openapi_client.models.manage_query import ManageQuery
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    short_code = 'short_code_example' # str | shortCode
    manage_query = openapi_client.ManageQuery() # ManageQuery | query

    try:
        # updateQuery
        api_response = api_instance.update_query_using_put(api_key, short_code, manage_query)
        print("The response of ManageApi->update_query_using_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->update_query_using_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **short_code** | **str**| shortCode | 
 **manage_query** | [**ManageQuery**](ManageQuery.md)| query | 

### Return type

[**ManageQuery**](ManageQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_screen_using_put**
> ManageScreen update_screen_using_put(api_key, short_code, manage_screen)

updateScreen

### Example


```python
import openapi_client
from openapi_client.models.manage_screen import ManageScreen
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    short_code = 'short_code_example' # str | shortCode
    manage_screen = openapi_client.ManageScreen() # ManageScreen | screen

    try:
        # updateScreen
        api_response = api_instance.update_screen_using_put(api_key, short_code, manage_screen)
        print("The response of ManageApi->update_screen_using_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->update_screen_using_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **short_code** | **str**| shortCode | 
 **manage_screen** | [**ManageScreen**](ManageScreen.md)| screen | 

### Return type

[**ManageScreen**](ManageScreen.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_snippet_using_put**
> ManageSnippet update_snippet_using_put(api_key, short_code, manage_snippet)

updateSnippet

### Example


```python
import openapi_client
from openapi_client.models.manage_snippet import ManageSnippet
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
    api_instance = openapi_client.ManageApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    short_code = 'short_code_example' # str | shortCode
    manage_snippet = openapi_client.ManageSnippet() # ManageSnippet | snippet

    try:
        # updateSnippet
        api_response = api_instance.update_snippet_using_put(api_key, short_code, manage_snippet)
        print("The response of ManageApi->update_snippet_using_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManageApi->update_snippet_using_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **short_code** | **str**| shortCode | 
 **manage_snippet** | [**ManageSnippet**](ManageSnippet.md)| snippet | 

### Return type

[**ManageSnippet**](ManageSnippet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

