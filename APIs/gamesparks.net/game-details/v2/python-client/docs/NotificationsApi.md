# openapi_client.NotificationsApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_game_summary_using_get**](NotificationsApi.md#get_game_summary_using_get) | **GET** /restv2/game/{apiKey}/admin/notifications/summary | getGameSummary


# **get_game_summary_using_get**
> GameSummaryModel get_game_summary_using_get(api_key, stage, start_date, end_date)

getGameSummary

### Example


```python
import openapi_client
from openapi_client.models.game_summary_model import GameSummaryModel
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
    api_instance = openapi_client.NotificationsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    stage = 'stage_example' # str | stage
    start_date = '2013-10-20' # date | yyyy-MM-dd
    end_date = '2013-10-20' # date | yyyy-MM-dd

    try:
        # getGameSummary
        api_response = api_instance.get_game_summary_using_get(api_key, stage, start_date, end_date)
        print("The response of NotificationsApi->get_game_summary_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->get_game_summary_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **stage** | **str**| stage | 
 **start_date** | **date**| yyyy-MM-dd | 
 **end_date** | **date**| yyyy-MM-dd | 

### Return type

[**GameSummaryModel**](GameSummaryModel.md)

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

