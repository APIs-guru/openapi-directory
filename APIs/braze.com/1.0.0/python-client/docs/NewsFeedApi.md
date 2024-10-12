# openapi_client.NewsFeedApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**news_feed_card_analytics_0**](NewsFeedApi.md#news_feed_card_analytics_0) | **GET** /feed/data_series | News Feed Card Analytics
[**news_feed_cards_details_0**](NewsFeedApi.md#news_feed_cards_details_0) | **GET** /feed/details | News Feed Cards Details
[**news_feed_cards_list_0**](NewsFeedApi.md#news_feed_cards_list_0) | **GET** /feed/list | News Feed Cards List


# **news_feed_card_analytics_0**
> news_feed_card_analytics_0(card_id=card_id, length=length, unit=unit, ending_at=ending_at)

News Feed Card Analytics

This endpoint allows you to retrieve a daily series of engagement stats for a card over time.  ### Components Used - [Card ID](https://www.braze.com/docs/api/identifier_types/) - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) point in time - as ISO 8601 extended when unit is \"hour\" and as ISO 8601 date when unit is \"day\",             \"clicks\" : (int) ,             \"impressions\" : (int),             \"unique_clicks\" : (int),             \"unique_impressions\" : (int)         },         ...     ] } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NewsFeedApi(api_client)
    card_id = '{{card_identifier}}' # str | (Required) String  Card API identifier (optional)
    length = '14' # str | (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    unit = 'day' # str | (Optional) String  Unit of time between data points - can be \"day\" or \"hour\" (defaults to \"day\") (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Date on which the data series should end - defaults to time of the request (optional)

    try:
        # News Feed Card Analytics
        api_instance.news_feed_card_analytics_0(card_id=card_id, length=length, unit=unit, ending_at=ending_at)
    except Exception as e:
        print("Exception when calling NewsFeedApi->news_feed_card_analytics_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_id** | **str**| (Required) String  Card API identifier | [optional] 
 **length** | **str**| (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **unit** | **str**| (Optional) String  Unit of time between data points - can be \&quot;day\&quot; or \&quot;hour\&quot; (defaults to \&quot;day\&quot;) | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Date on which the data series should end - defaults to time of the request | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **news_feed_cards_details_0**
> news_feed_cards_details_0(card_id=card_id)

News Feed Cards Details

This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.  ### Components Used - [Card ID](https://www.braze.com/docs/api/identifier_types/) - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) The status of the export, returns 'success' when completed without errors,     \"created_at\" : (string) Date created as ISO 8601 date,     \"updated_at\" : (string) Date last updated as ISO 8601 date,     \"name\" : (string) Card name,     \"publish_at\" : (string) Date card was published as ISO 8601 date,     \"end_at\" : (string) Date card will stop displaying for users as ISO 8601 date,     \"tags\" : (array) Tag names associated with the card,     \"title\" : (string) Title of the card,     \"image_url\" : (string) Image URL used by this card,     \"extras\" : (dictionary) Dictionary containing key-value pair data attached to this card,     \"description\" : (string) Description text used by this card,     \"archived\": (boolean) whether this Card is archived,     \"draft\": (boolean) whether this Card is a draft, } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NewsFeedApi(api_client)
    card_id = '{{card_identifier}}' # str | (Required) String  Card API identifier  (optional)

    try:
        # News Feed Cards Details
        api_instance.news_feed_cards_details_0(card_id=card_id)
    except Exception as e:
        print("Exception when calling NewsFeedApi->news_feed_cards_details_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_id** | **str**| (Required) String  Card API identifier  | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **news_feed_cards_list_0**
> news_feed_cards_list_0(page=page, include_archived=include_archived, sort_direction=sort_direction)

News Feed Cards List

This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"cards\" : [         {             \"id\" : (string) Card API Identifier,             \"type\" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),             \"title\" : (string) title of the card,             \"tags\" : (array) tag names associated with the card         },         ...     ] } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NewsFeedApi(api_client)
    page = '1' # str | (Optional) Integer  The page of cards to return, defaults to 0 (returns the first set of up to 100) (optional)
    include_archived = 'true' # str | (Optional) Boolean  Whether or not to include archived cards, defaults to false (optional)
    sort_direction = 'desc' # str | (Optional) String  Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. (optional)

    try:
        # News Feed Cards List
        api_instance.news_feed_cards_list_0(page=page, include_archived=include_archived, sort_direction=sort_direction)
    except Exception as e:
        print("Exception when calling NewsFeedApi->news_feed_cards_list_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| (Optional) Integer  The page of cards to return, defaults to 0 (returns the first set of up to 100) | [optional] 
 **include_archived** | **str**| (Optional) Boolean  Whether or not to include archived cards, defaults to false | [optional] 
 **sort_direction** | **str**| (Optional) String  Pass in the value &#x60;desc&#x60; to sort by creation time from newest to oldest. Pass in &#x60;asc&#x60; to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

