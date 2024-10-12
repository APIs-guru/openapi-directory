# openapi_client.GamesAdminApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_games_endpoints_using_get**](GamesAdminApi.md#get_games_endpoints_using_get) | **GET** /restv2/game/{apiKey}/endpoints | getGamesEndpoints
[**list_deleted_using_get**](GamesAdminApi.md#list_deleted_using_get) | **GET** /restv2/games/deleted | listDeleted
[**list_using_get**](GamesAdminApi.md#list_using_get) | **GET** /restv2/games | list
[**restore_deleted_game_using_post**](GamesAdminApi.md#restore_deleted_game_using_post) | **POST** /restv2/game/{apiKey}/restore | restoreDeletedGame


# **get_games_endpoints_using_get**
> GameEndpointsModel get_games_endpoints_using_get(api_key)

getGamesEndpoints

### Example


```python
import openapi_client
from openapi_client.models.game_endpoints_model import GameEndpointsModel
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
    api_instance = openapi_client.GamesAdminApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # getGamesEndpoints
        api_response = api_instance.get_games_endpoints_using_get(api_key)
        print("The response of GamesAdminApi->get_games_endpoints_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesAdminApi->get_games_endpoints_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**GameEndpointsModel**](GameEndpointsModel.md)

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

# **list_deleted_using_get**
> List[DeletedGameModel] list_deleted_using_get()

listDeleted

### Example


```python
import openapi_client
from openapi_client.models.deleted_game_model import DeletedGameModel
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
    api_instance = openapi_client.GamesAdminApi(api_client)

    try:
        # listDeleted
        api_response = api_instance.list_deleted_using_get()
        print("The response of GamesAdminApi->list_deleted_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesAdminApi->list_deleted_using_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[DeletedGameModel]**](DeletedGameModel.md)

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

# **list_using_get**
> List[GameModel] list_using_get()

list

### Example


```python
import openapi_client
from openapi_client.models.game_model import GameModel
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
    api_instance = openapi_client.GamesAdminApi(api_client)

    try:
        # list
        api_response = api_instance.list_using_get()
        print("The response of GamesAdminApi->list_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesAdminApi->list_using_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[GameModel]**](GameModel.md)

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

# **restore_deleted_game_using_post**
> MessageModel restore_deleted_game_using_post(api_key)

restoreDeletedGame

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
    api_instance = openapi_client.GamesAdminApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # restoreDeletedGame
        api_response = api_instance.restore_deleted_game_using_post(api_key)
        print("The response of GamesAdminApi->restore_deleted_game_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesAdminApi->restore_deleted_game_using_post: %s\n" % e)
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

