# openapi_client.RegionApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_game_region_options_using_get**](RegionApi.md#get_game_region_options_using_get) | **GET** /restv2/game/{gameApiKey}/regions | getGameRegionOptions
[**get_region_options_using_get**](RegionApi.md#get_region_options_using_get) | **GET** /restv2/game/regions | getRegionOptions
[**set_game_region_using_post**](RegionApi.md#set_game_region_using_post) | **POST** /restv2/game/{gameApiKey}/region/{regionCode} | setGameRegion


# **get_game_region_options_using_get**
> GameRegionOptionsDTO get_game_region_options_using_get(game_api_key)

getGameRegionOptions

### Example


```python
import openapi_client
from openapi_client.models.game_region_options_dto import GameRegionOptionsDTO
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
    api_instance = openapi_client.RegionApi(api_client)
    game_api_key = 'game_api_key_example' # str | gameApiKey

    try:
        # getGameRegionOptions
        api_response = api_instance.get_game_region_options_using_get(game_api_key)
        print("The response of RegionApi->get_game_region_options_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegionApi->get_game_region_options_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_api_key** | **str**| gameApiKey | 

### Return type

[**GameRegionOptionsDTO**](GameRegionOptionsDTO.md)

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

# **get_region_options_using_get**
> GameRegionOptionsDTO get_region_options_using_get()

getRegionOptions

### Example


```python
import openapi_client
from openapi_client.models.game_region_options_dto import GameRegionOptionsDTO
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
    api_instance = openapi_client.RegionApi(api_client)

    try:
        # getRegionOptions
        api_response = api_instance.get_region_options_using_get()
        print("The response of RegionApi->get_region_options_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegionApi->get_region_options_using_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GameRegionOptionsDTO**](GameRegionOptionsDTO.md)

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

# **set_game_region_using_post**
> RegionResult set_game_region_using_post(game_api_key, region_code)

setGameRegion

### Example


```python
import openapi_client
from openapi_client.models.region_result import RegionResult
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
    api_instance = openapi_client.RegionApi(api_client)
    game_api_key = 'game_api_key_example' # str | gameApiKey
    region_code = 'region_code_example' # str | regionCode

    try:
        # setGameRegion
        api_response = api_instance.set_game_region_using_post(game_api_key, region_code)
        print("The response of RegionApi->set_game_region_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegionApi->set_game_region_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_api_key** | **str**| gameApiKey | 
 **region_code** | **str**| regionCode | 

### Return type

[**RegionResult**](RegionResult.md)

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

