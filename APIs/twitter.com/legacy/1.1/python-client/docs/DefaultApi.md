# openapi_client.DefaultApi

All URIs are relative to *https://api.twitter.com/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_settings_get**](DefaultApi.md#account_settings_get) | **GET** /account/settings.json | 
[**account_settings_post**](DefaultApi.md#account_settings_post) | **POST** /account/settings.json | 
[**account_update_delivery_device**](DefaultApi.md#account_update_delivery_device) | **POST** /account/update_delivery_device.json | 
[**account_update_profile**](DefaultApi.md#account_update_profile) | **POST** /account/update_profile.json | 
[**accounts_update_profile_background_image**](DefaultApi.md#accounts_update_profile_background_image) | **POST** /account/update_profile_background_image.json | 
[**accounts_update_profile_colors**](DefaultApi.md#accounts_update_profile_colors) | **POST** /account/update_profile_colors.json | 
[**accounts_update_profile_image**](DefaultApi.md#accounts_update_profile_image) | **POST** /account/update_profile_image.json | 
[**application_rate_limit_status**](DefaultApi.md#application_rate_limit_status) | **GET** /application/rate_limit_status.json | 
[**blocks_create**](DefaultApi.md#blocks_create) | **POST** /blocks/create.json | 
[**blocks_destroy**](DefaultApi.md#blocks_destroy) | **POST** /blocks/destroy.json | 
[**blocks_ids**](DefaultApi.md#blocks_ids) | **GET** /blocks/ids.json | 
[**blocks_list**](DefaultApi.md#blocks_list) | **GET** /blocks/list.json | 
[**direct_messages**](DefaultApi.md#direct_messages) | **GET** /direct_messages.json | 
[**direct_messages_destroy**](DefaultApi.md#direct_messages_destroy) | **POST** /direct_messages/destroy.json | 
[**direct_messages_new**](DefaultApi.md#direct_messages_new) | **POST** /direct_messages/new.json | 
[**direct_messages_sent**](DefaultApi.md#direct_messages_sent) | **GET** /direct_messages/sent.json | 
[**direct_messages_show**](DefaultApi.md#direct_messages_show) | **GET** /direct_messages/show.json | 
[**favorites_create**](DefaultApi.md#favorites_create) | **POST** /favorites/create.json | 
[**favorites_destroy**](DefaultApi.md#favorites_destroy) | **POST** /favorites/destroy.json | 
[**favorites_list**](DefaultApi.md#favorites_list) | **GET** /favorites/list.json | 
[**followers_ids**](DefaultApi.md#followers_ids) | **GET** /followers/ids.json | 
[**friends_ids**](DefaultApi.md#friends_ids) | **GET** /friends/ids.json | 
[**friendships_create**](DefaultApi.md#friendships_create) | **POST** /friendships/create.json | 
[**friendships_destroy**](DefaultApi.md#friendships_destroy) | **POST** /friendships/destroy.json | 
[**friendships_incoming**](DefaultApi.md#friendships_incoming) | **GET** /friendships/incoming.json | 
[**friendships_lookup**](DefaultApi.md#friendships_lookup) | **GET** /friendships/lookup.json | 
[**friendships_outgoing**](DefaultApi.md#friendships_outgoing) | **GET** /friendships/outgoing.json | 
[**friendships_show**](DefaultApi.md#friendships_show) | **GET** /friendships/show.json | 
[**friendships_update**](DefaultApi.md#friendships_update) | **POST** /friendships/update.json | 
[**geo_place_id**](DefaultApi.md#geo_place_id) | **GET** /geo/id/{place_id}.json | 
[**geo_places**](DefaultApi.md#geo_places) | **POST** /geo/places.json | 
[**geo_reverse_geocode**](DefaultApi.md#geo_reverse_geocode) | **GET** /geo/reverse_geocode.json | 
[**geo_search**](DefaultApi.md#geo_search) | **GET** /geo/search.json | 
[**geo_similar_places**](DefaultApi.md#geo_similar_places) | **GET** /geo/similar_places.json | 
[**help_configurations**](DefaultApi.md#help_configurations) | **GET** /help/configuration.json | 
[**help_languages**](DefaultApi.md#help_languages) | **GET** /help/languages.json | 
[**help_privacy**](DefaultApi.md#help_privacy) | **GET** /help/privacy.json | 
[**help_tos**](DefaultApi.md#help_tos) | **GET** /help/tos.json | 
[**lists_create**](DefaultApi.md#lists_create) | **POST** /lists/create.json | 
[**lists_destroy**](DefaultApi.md#lists_destroy) | **POST** /lists/destroy.json | 
[**lists_list**](DefaultApi.md#lists_list) | **GET** /lists/list.json | 
[**lists_members**](DefaultApi.md#lists_members) | **GET** /lists/members.json | 
[**lists_members_create**](DefaultApi.md#lists_members_create) | **POST** /lists/members/create.json | 
[**lists_members_create_all**](DefaultApi.md#lists_members_create_all) | **POST** /lists/members/create_all.json | 
[**lists_members_destroy**](DefaultApi.md#lists_members_destroy) | **POST** /lists/members/destroy.json | 
[**lists_members_destroy_all**](DefaultApi.md#lists_members_destroy_all) | **POST** /lists/members/destroy_all.json | 
[**lists_members_show**](DefaultApi.md#lists_members_show) | **GET** /lists/members/show.json | 
[**lists_memberships**](DefaultApi.md#lists_memberships) | **GET** /lists/memberships.json | 
[**lists_show**](DefaultApi.md#lists_show) | **GET** /lists/show.json | 
[**lists_statuses**](DefaultApi.md#lists_statuses) | **GET** /lists/statuses.json | 
[**lists_subscribers**](DefaultApi.md#lists_subscribers) | **GET** /lists/subscribers.json | 
[**lists_subscribers_create**](DefaultApi.md#lists_subscribers_create) | **POST** /lists/subscribers/create.json | 
[**lists_subscribers_destroy**](DefaultApi.md#lists_subscribers_destroy) | **POST** /lists/subscribers/destroy.json | 
[**lists_subscribers_show**](DefaultApi.md#lists_subscribers_show) | **GET** /lists/subscribers/show.json | 
[**lists_subscriptions**](DefaultApi.md#lists_subscriptions) | **GET** /lists/subscriptions.json | 
[**lists_update**](DefaultApi.md#lists_update) | **POST** /lists/update.json | 
[**saved_searches_create**](DefaultApi.md#saved_searches_create) | **POST** /saved_searches/create.json | 
[**saved_searches_destroy**](DefaultApi.md#saved_searches_destroy) | **POST** /saved_searches/destroy/{id}.json | 
[**saved_searches_list**](DefaultApi.md#saved_searches_list) | **GET** /saved_searches/list.json | 
[**savedsearchesid**](DefaultApi.md#savedsearchesid) | **GET** /saved_searches/show/{id}.json | 
[**search_tweets**](DefaultApi.md#search_tweets) | **GET** /search/tweets.json | 
[**statuses_destroy**](DefaultApi.md#statuses_destroy) | **POST** /statuses/destroy/{id}.json | 
[**statuses_home_timeline**](DefaultApi.md#statuses_home_timeline) | **GET** /statuses/home_timeline.json | 
[**statuses_mentions_timeline**](DefaultApi.md#statuses_mentions_timeline) | **GET** /statuses/mentions_timeline.json | 
[**statuses_oembed**](DefaultApi.md#statuses_oembed) | **GET** /statuses/oembed.json | 
[**statuses_retweets**](DefaultApi.md#statuses_retweets) | **GET** /statuses/retweets/{id}.json | 
[**statuses_show**](DefaultApi.md#statuses_show) | **GET** /statuses/show/{id}.json | 
[**statuses_update**](DefaultApi.md#statuses_update) | **POST** /statuses/update.json | 
[**statuses_update_with_media**](DefaultApi.md#statuses_update_with_media) | **POST** /statuses/update_with_media.json | 
[**statuses_user_timeline**](DefaultApi.md#statuses_user_timeline) | **GET** /statuses/user_timeline.json | 
[**statusesretweetid**](DefaultApi.md#statusesretweetid) | **POST** /statuses/retweet/{id}.json | 
[**trends_available**](DefaultApi.md#trends_available) | **GET** /trends/available.json | 
[**trends_closest**](DefaultApi.md#trends_closest) | **GET** /trends/closest.json | 
[**trends_place**](DefaultApi.md#trends_place) | **GET** /trends/place.json | 
[**users_contributees**](DefaultApi.md#users_contributees) | **GET** /users/contributees.json | 
[**users_contributors**](DefaultApi.md#users_contributors) | **GET** /users/contributors.json | 
[**users_lookup**](DefaultApi.md#users_lookup) | **GET** /users/lookup.json | 
[**users_report_spam**](DefaultApi.md#users_report_spam) | **POST** /users/report_spam.json | 
[**users_search**](DefaultApi.md#users_search) | **GET** /users/search.json | 
[**users_show**](DefaultApi.md#users_show) | **GET** /users/show.json | 
[**users_suggestions**](DefaultApi.md#users_suggestions) | **GET** /users/suggestions.json | 
[**users_suggestions_slug**](DefaultApi.md#users_suggestions_slug) | **GET** /users/suggestions/{slug}.json | 
[**users_suggestionsslugmembers**](DefaultApi.md#users_suggestionsslugmembers) | **GET** /users/suggestions/{slug}/members.json | 


# **account_settings_get**
> account_settings_get(trend_location_woeid=trend_location_woeid, sleep_time_enabled=sleep_time_enabled, start_sleep_time=start_sleep_time, end_sleep_time=end_sleep_time, time_zone=time_zone, lang=lang)



Returns settings (including current trend, geo and sleep time information) for the authenticating user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    trend_location_woeid = 'trend_location_woeid_example' # str | The Yahoo! Where On Earth ID to use as the user's default trend location. Global information is available by using 1 as the WOEID. The woeid must be one of the locations returned by GET trends/available.  Example Values: 1 (optional)
    sleep_time_enabled = 'sleep_time_enabled_example' # str | When set to true, t or 1, will enable sleep time for the user. Sleep time is the time when push or SMS notifications should not be sent to the user.  Example Values: true (optional)
    start_sleep_time = 'start_sleep_time_example' # str | The hour that sleep time should begin if it is enabled. The value for this parameter should be provided in ISO8601 format (i.e. 00-23). The time is considered to be in the same timezone as the user's time_zone setting.  Example Values: 13 (optional)
    end_sleep_time = 'end_sleep_time_example' # str | The hour that sleep time should end if it is enabled. The value for this parameter should be provided in ISO8601 format (i.e. 00-23). The time is considered to be in the same timezone as the user's time_zone setting.  Example Values: 13 (optional)
    time_zone = 'time_zone_example' # str | The timezone dates and times should be displayed in for the user. The timezone must be one of the Rails TimeZone names.  Example Values: Europe/Copenhagen, Pacific/Tongatapu (optional)
    lang = 'lang_example' # str | The language which Twitter should render in for this user. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by GET help/languages.  Example Values: it, en, es (optional)

    try:
        api_instance.account_settings_get(trend_location_woeid=trend_location_woeid, sleep_time_enabled=sleep_time_enabled, start_sleep_time=start_sleep_time, end_sleep_time=end_sleep_time, time_zone=time_zone, lang=lang)
    except Exception as e:
        print("Exception when calling DefaultApi->account_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trend_location_woeid** | **str**| The Yahoo! Where On Earth ID to use as the user&#39;s default trend location. Global information is available by using 1 as the WOEID. The woeid must be one of the locations returned by GET trends/available.  Example Values: 1 | [optional] 
 **sleep_time_enabled** | **str**| When set to true, t or 1, will enable sleep time for the user. Sleep time is the time when push or SMS notifications should not be sent to the user.  Example Values: true | [optional] 
 **start_sleep_time** | **str**| The hour that sleep time should begin if it is enabled. The value for this parameter should be provided in ISO8601 format (i.e. 00-23). The time is considered to be in the same timezone as the user&#39;s time_zone setting.  Example Values: 13 | [optional] 
 **end_sleep_time** | **str**| The hour that sleep time should end if it is enabled. The value for this parameter should be provided in ISO8601 format (i.e. 00-23). The time is considered to be in the same timezone as the user&#39;s time_zone setting.  Example Values: 13 | [optional] 
 **time_zone** | **str**| The timezone dates and times should be displayed in for the user. The timezone must be one of the Rails TimeZone names.  Example Values: Europe/Copenhagen, Pacific/Tongatapu | [optional] 
 **lang** | **str**| The language which Twitter should render in for this user. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by GET help/languages.  Example Values: it, en, es | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_settings_post**
> account_settings_post(trend_location_woeid=trend_location_woeid, sleep_time_enabled=sleep_time_enabled, start_sleep_time=start_sleep_time, end_sleep_time=end_sleep_time, time_zone=time_zone, lang=lang)



Updates the authenticating user's settings.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    trend_location_woeid = 'trend_location_woeid_example' # str | The Yahoo! Where On Earth ID to use as the user's default trend location. Global information is available by using 1 as the WOEID. The woeid must be one of the locations returned by GET trends/available.  Example Values: 1 (optional)
    sleep_time_enabled = 'sleep_time_enabled_example' # str | When set to true, t or 1, will enable sleep time for the user. Sleep time is the time when push or SMS notifications should not be sent to the user.  Example Values: true (optional)
    start_sleep_time = 'start_sleep_time_example' # str | The hour that sleep time should begin if it is enabled. The value for this parameter should be provided in ISO8601 format (i.e. 00-23). The time is considered to be in the same timezone as the user's time_zone setting.  Example Values: 13 (optional)
    end_sleep_time = 'end_sleep_time_example' # str | The hour that sleep time should end if it is enabled. The value for this parameter should be provided in ISO8601 format (i.e. 00-23). The time is considered to be in the same timezone as the user's time_zone setting.  Example Values: 13 (optional)
    time_zone = 'time_zone_example' # str | The timezone dates and times should be displayed in for the user. The timezone must be one of the Rails TimeZone names.  Example Values: Europe/Copenhagen, Pacific/Tongatapu (optional)
    lang = 'lang_example' # str | The language which Twitter should render in for this user. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by GET help/languages.  Example Values: it, en, es (optional)

    try:
        api_instance.account_settings_post(trend_location_woeid=trend_location_woeid, sleep_time_enabled=sleep_time_enabled, start_sleep_time=start_sleep_time, end_sleep_time=end_sleep_time, time_zone=time_zone, lang=lang)
    except Exception as e:
        print("Exception when calling DefaultApi->account_settings_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trend_location_woeid** | **str**| The Yahoo! Where On Earth ID to use as the user&#39;s default trend location. Global information is available by using 1 as the WOEID. The woeid must be one of the locations returned by GET trends/available.  Example Values: 1 | [optional] 
 **sleep_time_enabled** | **str**| When set to true, t or 1, will enable sleep time for the user. Sleep time is the time when push or SMS notifications should not be sent to the user.  Example Values: true | [optional] 
 **start_sleep_time** | **str**| The hour that sleep time should begin if it is enabled. The value for this parameter should be provided in ISO8601 format (i.e. 00-23). The time is considered to be in the same timezone as the user&#39;s time_zone setting.  Example Values: 13 | [optional] 
 **end_sleep_time** | **str**| The hour that sleep time should end if it is enabled. The value for this parameter should be provided in ISO8601 format (i.e. 00-23). The time is considered to be in the same timezone as the user&#39;s time_zone setting.  Example Values: 13 | [optional] 
 **time_zone** | **str**| The timezone dates and times should be displayed in for the user. The timezone must be one of the Rails TimeZone names.  Example Values: Europe/Copenhagen, Pacific/Tongatapu | [optional] 
 **lang** | **str**| The language which Twitter should render in for this user. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by GET help/languages.  Example Values: it, en, es | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_update_delivery_device**
> account_update_delivery_device(device, include_entities=include_entities)



Sets which device Twitter delivers updates to for the authenticating user. Sending none as the device parameter will disable SMS updates.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device = 'device_example' # str | Must be one of: sms, none.  Example Values: sms
    include_entities = 'include_entities_example' # str | When set to either true, t or 1, each tweet will include a node called \"entities,\". This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. See Tweet Entities for more detail on entities.  Example Values: true (optional)

    try:
        api_instance.account_update_delivery_device(device, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->account_update_delivery_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | **str**| Must be one of: sms, none.  Example Values: sms | 
 **include_entities** | **str**| When set to either true, t or 1, each tweet will include a node called \&quot;entities,\&quot;. This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. See Tweet Entities for more detail on entities.  Example Values: true | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_update_profile**
> account_update_profile(name=name, url=url, location=location, description=description, include_entities=include_entities, skip_status=skip_status)



Sets values that users are able to set under the Account tab of their settings page. Only the parameters specified will be updated.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | Full name associated with the profile. Maximum of 20 characters.  Example Values: Marcel Molina (optional)
    url = 'url_example' # str | URL associated with the profile. Will be prepended with \"http://\" if not present. Maximum of 100 characters.  Example Values: http://project.ioni.st (optional)
    location = 'location_example' # str | The city or country describing where the user of the account is located. The contents are not normalized or geocoded in any way. Maximum of 30 characters.  Example Values: San Francisco, CA (optional)
    description = 'description_example' # str | A description of the user owning the account. Maximum of 160 characters.  Example Values: Flipped my wig at age 22 and it never grew back. Also: I work at Twitter. (optional)
    include_entities = 'include_entities_example' # str | The entities node will not be included when set to false.  Example Values: false (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.account_update_profile(name=name, url=url, location=location, description=description, include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->account_update_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Full name associated with the profile. Maximum of 20 characters.  Example Values: Marcel Molina | [optional] 
 **url** | **str**| URL associated with the profile. Will be prepended with \&quot;http://\&quot; if not present. Maximum of 100 characters.  Example Values: http://project.ioni.st | [optional] 
 **location** | **str**| The city or country describing where the user of the account is located. The contents are not normalized or geocoded in any way. Maximum of 30 characters.  Example Values: San Francisco, CA | [optional] 
 **description** | **str**| A description of the user owning the account. Maximum of 160 characters.  Example Values: Flipped my wig at age 22 and it never grew back. Also: I work at Twitter. | [optional] 
 **include_entities** | **str**| The entities node will not be included when set to false.  Example Values: false | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_update_profile_background_image**
> accounts_update_profile_background_image(content_type, tile=tile, use=use, include_entities=include_entities, skip_status=skip_status)



Updates the authenticating user's profile background image. This method can also be used to enable or disable the profile background image. Although each parameter is marked as optional, at least one of image, tile or use must be provided when making this request.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    content_type = 'multipart/form-data' # str | Content type header (default to 'multipart/form-data')
    tile = 'tile_example' # str | Whether or not to tile the background image. If set to true, t or 1 the background image will be displayed tiled. The image will not be tiled otherwise. (optional)
    use = 'use_example' # str | Determines whether to display the profile background image or not. When set to true, t or 1 the background image will be displayed if an image is being uploaded with the request, or has been uploaded previously. An error will be returned if you try to use a background image when one is not being uploaded or does not exist. If this parameter is defined but set to anything other than true, t or 1, the background image will stop being used. (optional)
    include_entities = 'include_entities_example' # str | The entities node will not be included when set to false.  Example Values: false (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.accounts_update_profile_background_image(content_type, tile=tile, use=use, include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_update_profile_background_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Content type header | [default to &#39;multipart/form-data&#39;]
 **tile** | **str**| Whether or not to tile the background image. If set to true, t or 1 the background image will be displayed tiled. The image will not be tiled otherwise. | [optional] 
 **use** | **str**| Determines whether to display the profile background image or not. When set to true, t or 1 the background image will be displayed if an image is being uploaded with the request, or has been uploaded previously. An error will be returned if you try to use a background image when one is not being uploaded or does not exist. If this parameter is defined but set to anything other than true, t or 1, the background image will stop being used. | [optional] 
 **include_entities** | **str**| The entities node will not be included when set to false.  Example Values: false | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_update_profile_colors**
> accounts_update_profile_colors(profile_background_color=profile_background_color, profile_link_color=profile_link_color, profile_sidebar_border_color=profile_sidebar_border_color, profile_sidebar_fill_color=profile_sidebar_fill_color, profile_text_color=profile_text_color, include_entities=include_entities, skip_status=skip_status)



Sets one or more hex values that control the color scheme of the authenticating user's profile page on twitter.com. Each parameter's value must be a valid hexidecimal value, and may be either three or six characters (ex: #fff or #ffffff).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    profile_background_color = 'profile_background_color_example' # str | Profile background color. Example Values: 3D3D3D (optional)
    profile_link_color = 'profile_link_color_example' # str | Profile link color.Example Values: 0000FF (optional)
    profile_sidebar_border_color = 'profile_sidebar_border_color_example' # str | Profile sidebar's border color. Example Values: 0F0F0F (optional)
    profile_sidebar_fill_color = 'profile_sidebar_fill_color_example' # str | Profile sidebar's background color. Example Values: 00FF00 (optional)
    profile_text_color = 'profile_text_color_example' # str | Profile text color. Example Values: 000000 (optional)
    include_entities = 'include_entities_example' # str | The entities node will not be included when set to false. Example Values: false (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.accounts_update_profile_colors(profile_background_color=profile_background_color, profile_link_color=profile_link_color, profile_sidebar_border_color=profile_sidebar_border_color, profile_sidebar_fill_color=profile_sidebar_fill_color, profile_text_color=profile_text_color, include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_update_profile_colors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_background_color** | **str**| Profile background color. Example Values: 3D3D3D | [optional] 
 **profile_link_color** | **str**| Profile link color.Example Values: 0000FF | [optional] 
 **profile_sidebar_border_color** | **str**| Profile sidebar&#39;s border color. Example Values: 0F0F0F | [optional] 
 **profile_sidebar_fill_color** | **str**| Profile sidebar&#39;s background color. Example Values: 00FF00 | [optional] 
 **profile_text_color** | **str**| Profile text color. Example Values: 000000 | [optional] 
 **include_entities** | **str**| The entities node will not be included when set to false. Example Values: false | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_update_profile_image**
> accounts_update_profile_image(content_type, skip_status=skip_status)



Updates the authenticating user's profile image. Note that this method expects raw multipart data, not a URL to an image. This method asynchronously processes the uploaded file before updating the user's profile image URL. You can either update your local cache the next time you request the user's information, or, at least 5 seconds after uploading the image, ask for the updated URL using GET users/profile_image/:screen_name (https://dev.twitter.com/docs/api/1/get/users/profile_image/:screen_name).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    content_type = 'multipart/form-data' # str | Content type header (default to 'multipart/form-data')
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.accounts_update_profile_image(content_type, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_update_profile_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Content type header | [default to &#39;multipart/form-data&#39;]
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_rate_limit_status**
> application_rate_limit_status(resources=resources)



Returns the current rate limits for methods belonging to the specified resource families.  Each 1.1 API resource belongs to a \"resource family\" which is indicated in its method documentation. You can typically determine a method's resource family from the first component of the path after the resource version.  This method responds with a map of methods belonging to the families specified by the resources parameter, the current remaining uses for each of those resources within the current rate limiting window, and its expiration time in epoch time. It also includes a rate_limit_context field that indicates the current access token context.  You may also issue requests to this method without any parameters to receive a map of all rate limited GET methods. If your application only uses a few of methods, please explicitly provide a resources parameter with the specified resource families you work with.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    resources = 'resources_example' # str | A comma-separated list of resource families you want to know the current rate limit disposition for. For best performance, only specify the resource families pertinent to your application.Example Values: statuses,friends,trends,help (optional)

    try:
        api_instance.application_rate_limit_status(resources=resources)
    except Exception as e:
        print("Exception when calling DefaultApi->application_rate_limit_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resources** | **str**| A comma-separated list of resource families you want to know the current rate limit disposition for. For best performance, only specify the resource families pertinent to your application.Example Values: statuses,friends,trends,help | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blocks_create**
> blocks_create(include_entities=include_entities, skip_status=skip_status)



Blocks the specified user from following the authenticating user. In addition the blocked user will not show in the authenticating users mentions or timeline (unless retweeted by another user). If a follow or friend relationship exists it is destroyed.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    include_entities = 'include_entities_example' # str | The entities node will not be included when set to false.  Example Values: false (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.blocks_create(include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->blocks_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_entities** | **str**| The entities node will not be included when set to false.  Example Values: false | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blocks_destroy**
> blocks_destroy(include_entities=include_entities, skip_status=skip_status)



Un-blocks the user specified in the ID parameter for the authenticating user. Returns the un-blocked user in the requested format when successful. If relationships existed before the block was instated, they will not be restored.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    include_entities = 'include_entities_example' # str | The entities node will not be included when set to false.  Example Values: false (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.blocks_destroy(include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->blocks_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_entities** | **str**| The entities node will not be included when set to false.  Example Values: false | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blocks_ids**
> blocks_ids(stringify_ids=stringify_ids, cursor=cursor)



Returns an array of numeric user ids the authenticating user is blocking.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    stringify_ids = 'stringify_ids_example' # str | Many programming environments will not consume our ids due to their size. Provide this option to have ids returned as strings instead. Read more about Twitter IDs, JSON and Snowflake.  Example Values: true (optional)
    cursor = 'cursor_example' # str | Causes the list of blocked users to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \"page.\"  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth. See Using cursors to navigate collections for more information.  Example Values: 12893764510938 (optional)

    try:
        api_instance.blocks_ids(stringify_ids=stringify_ids, cursor=cursor)
    except Exception as e:
        print("Exception when calling DefaultApi->blocks_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stringify_ids** | **str**| Many programming environments will not consume our ids due to their size. Provide this option to have ids returned as strings instead. Read more about Twitter IDs, JSON and Snowflake.  Example Values: true | [optional] 
 **cursor** | **str**| Causes the list of blocked users to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \&quot;page.\&quot;  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth. See Using cursors to navigate collections for more information.  Example Values: 12893764510938 | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blocks_list**
> blocks_list(include_entities=include_entities, skip_status=skip_status, cursor=cursor)



Allows one to enable or disable retweets and device notifications from the specified user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    include_entities = 'include_entities_example' # str | The entities node will not be included when set to false. Example Values: false (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)
    cursor = 'cursor_example' # str | Causes the list of blocked users to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \"page.\"  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth. See Using cursors to navigate collections for more information.  Example Values: 12893764510938 (optional)

    try:
        api_instance.blocks_list(include_entities=include_entities, skip_status=skip_status, cursor=cursor)
    except Exception as e:
        print("Exception when calling DefaultApi->blocks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_entities** | **str**| The entities node will not be included when set to false. Example Values: false | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 
 **cursor** | **str**| Causes the list of blocked users to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \&quot;page.\&quot;  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth. See Using cursors to navigate collections for more information.  Example Values: 12893764510938 | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **direct_messages**
> direct_messages(count=count, since_id=since_id, max_id=max_id, include_entities=include_entities, page=page, skip_status=skip_status)



Returns the 20 most recent direct messages sent to the authenticating user. Includes detailed information about the sender and recipient user. You can request up to 200 direct messages per call, up to a maximum of 800 incoming DMs.  Important: This method requires an access token with RWD (read, write and direct message) permissions. Consult The Application Permission Model for more information.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    count = 'count_example' # str | Specifies the number of direct messages to try and retrieve, up to a maximum of 200. The value of count is best thought of as a limit to the number of Tweets to return because suspended or deleted content is removed after the count has been applied.  Example Values: 5 (optional)
    since_id = 'since_id_example' # str | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. Example Values: 12345 (optional)
    max_id = 'max_id_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID.  Example Values: 54321 (optional)
    include_entities = 'include_entities_example' # str | The entities node will not be included when set to false.  Example Values: false (optional)
    page = 'page_example' # str | Specifies the page of results to retrieve.  Example Values: 3 (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.direct_messages(count=count, since_id=since_id, max_id=max_id, include_entities=include_entities, page=page, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->direct_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **str**| Specifies the number of direct messages to try and retrieve, up to a maximum of 200. The value of count is best thought of as a limit to the number of Tweets to return because suspended or deleted content is removed after the count has been applied.  Example Values: 5 | [optional] 
 **since_id** | **str**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. Example Values: 12345 | [optional] 
 **max_id** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID.  Example Values: 54321 | [optional] 
 **include_entities** | **str**| The entities node will not be included when set to false.  Example Values: false | [optional] 
 **page** | **str**| Specifies the page of results to retrieve.  Example Values: 3 | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **direct_messages_destroy**
> direct_messages_destroy(id, include_entities=include_entities)



Destroys the direct message specified in the required ID parameter. The authenticating user must be the recipient of the specified direct message.  Important: This method requires an access token with RWD (read, write and direct message) permissions. Consult The Application Permission Model for more information.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The ID of the direct message to delete.  Example Values: 1270516771
    include_entities = 'include_entities_example' # str | The entities node will not be included when set to false.  Example Values: false (optional)

    try:
        api_instance.direct_messages_destroy(id, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->direct_messages_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the direct message to delete.  Example Values: 1270516771 | 
 **include_entities** | **str**| The entities node will not be included when set to false.  Example Values: false | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **direct_messages_new**
> direct_messages_new(text)



Sends a new direct message to the specified user from the authenticating user. Requires both the user and text parameters and must be a POST. Returns the sent message in the requested format if successful.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    text = 'text_example' # str | The text of your direct message. Be sure to URL encode as necessary, and keep the message under 140 characters.  Example Values: Meet me behind the cafeteria after school

    try:
        api_instance.direct_messages_new(text)
    except Exception as e:
        print("Exception when calling DefaultApi->direct_messages_new: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| The text of your direct message. Be sure to URL encode as necessary, and keep the message under 140 characters.  Example Values: Meet me behind the cafeteria after school | 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **direct_messages_sent**
> direct_messages_sent(count=count, since_id=since_id, max_id=max_id, include_entities=include_entities, page=page)



Returns the 20 most recent direct messages sent by the authenticating user. Includes detailed information about the sender and recipient user. You can request up to 200 direct messages per call, up to a maximum of 800 outgoing DMs.  Important: This method requires an access token with RWD (read, write and direct message) permissions. Consult The Application Permission Model for more information.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    count = 'count_example' # str | Specifies the number of direct messages to try and retrieve, up to a maximum of 200. The value of count is best thought of as a limit to the number of Tweets to return because suspended or deleted content is removed after the count has been applied.  Example Values: 5 (optional)
    since_id = 'since_id_example' # str | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.  Example Values: 12345 (optional)
    max_id = 'max_id_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID.  Example Values: 54321 (optional)
    include_entities = 'include_entities_example' # str | The entities node will not be included when set to false.  Example Values: false (optional)
    page = 'page_example' # str | Specifies the page of results to retrieve.  Example Values: 3 (optional)

    try:
        api_instance.direct_messages_sent(count=count, since_id=since_id, max_id=max_id, include_entities=include_entities, page=page)
    except Exception as e:
        print("Exception when calling DefaultApi->direct_messages_sent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **str**| Specifies the number of direct messages to try and retrieve, up to a maximum of 200. The value of count is best thought of as a limit to the number of Tweets to return because suspended or deleted content is removed after the count has been applied.  Example Values: 5 | [optional] 
 **since_id** | **str**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.  Example Values: 12345 | [optional] 
 **max_id** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID.  Example Values: 54321 | [optional] 
 **include_entities** | **str**| The entities node will not be included when set to false.  Example Values: false | [optional] 
 **page** | **str**| Specifies the page of results to retrieve.  Example Values: 3 | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **direct_messages_show**
> direct_messages_show(id)



Returns a single direct message, specified by an id parameter. Like the /1.1/direct_messages.format request, this method will include the user objects of the sender and recipient.  Important: This method requires an access token with RWD (read, write and direct message) permissions. Consult The Application Permission Model for more information.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The ID of the direct message.  Example Values: 587424932

    try:
        api_instance.direct_messages_show(id)
    except Exception as e:
        print("Exception when calling DefaultApi->direct_messages_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the direct message.  Example Values: 587424932 | 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favorites_create**
> favorites_create(id, include_entities=include_entities)



Favorites the status specified in the ID parameter as the authenticating user. Returns the favorite status when successful.  This process invoked by this method is asynchronous. The immediately returned status may not indicate the resultant favorited status of the tweet. A 200 OK response from this method will indicate whether the intended action was successful or not.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The numerical ID of the desired status.  Example Values: 123
    include_entities = 'include_entities_example' # str | The entities node will be omitted when set to false.  Example Values: false (optional)

    try:
        api_instance.favorites_create(id, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->favorites_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The numerical ID of the desired status.  Example Values: 123 | 
 **include_entities** | **str**| The entities node will be omitted when set to false.  Example Values: false | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favorites_destroy**
> favorites_destroy(id, include_entities=include_entities)



Un-favorites the status specified in the ID parameter as the authenticating user. Returns the un-favorited status in the requested format when successful.  This process invoked by this method is asynchronous. The immediately returned status may not indicate the resultant favorited status of the tweet. A 200 OK response from this method will indicate whether the intended action was successful or not.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The numerical ID of the desired status.  Example Values: 123
    include_entities = 'include_entities_example' # str | The entities node will be omitted when set to false.  Example Values: false (optional)

    try:
        api_instance.favorites_destroy(id, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->favorites_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The numerical ID of the desired status.  Example Values: 123 | 
 **include_entities** | **str**| The entities node will be omitted when set to false.  Example Values: false | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favorites_list**
> favorites_list(count=count, since_id=since_id, max_id=max_id, include_entities=include_entities)



Returns the 20 most recent Tweets favorited by the authenticating or specified user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    count = 'count_example' # str | Specifies the number of records to retrieve. Must be less than or equal to 200. Defaults to 20.  Example Values: 5 (optional)
    since_id = 'since_id_example' # str | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.  Example Values: 12345 (optional)
    max_id = 'max_id_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID.  Example Values: 54321 (optional)
    include_entities = 'include_entities_example' # str | The entities node will be omitted when set to false.  Example Values: false (optional)

    try:
        api_instance.favorites_list(count=count, since_id=since_id, max_id=max_id, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->favorites_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **str**| Specifies the number of records to retrieve. Must be less than or equal to 200. Defaults to 20.  Example Values: 5 | [optional] 
 **since_id** | **str**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.  Example Values: 12345 | [optional] 
 **max_id** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID.  Example Values: 54321 | [optional] 
 **include_entities** | **str**| The entities node will be omitted when set to false.  Example Values: false | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followers_ids**
> followers_ids(stringify_ids=stringify_ids, cursor=cursor)



Returns a cursored collection of user IDs for every user following the specified user.  At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple \"pages\" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.  This method is especially powerful when used in conjunction with GET users/lookup, a method that allows you to convert user IDs into full user objects in bulk.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    stringify_ids = 'stringify_ids_example' # str | Many programming environments will not consume our Tweet ids due to their size. Provide this option to have ids returned as strings instead. Example Values: true (optional)
    cursor = 'cursor_example' # str | Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \"page.\"  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.Example Values: 12893764510938 (optional)

    try:
        api_instance.followers_ids(stringify_ids=stringify_ids, cursor=cursor)
    except Exception as e:
        print("Exception when calling DefaultApi->followers_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stringify_ids** | **str**| Many programming environments will not consume our Tweet ids due to their size. Provide this option to have ids returned as strings instead. Example Values: true | [optional] 
 **cursor** | **str**| Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \&quot;page.\&quot;  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.Example Values: 12893764510938 | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **friends_ids**
> friends_ids(stringify_ids=stringify_ids, cursor=cursor)



Returns a cursored collection of user IDs for every user the specified user is following (otherwise known as their \"friends\").  At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple \"pages\" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.  This method is especially powerful when used in conjunction with GET users/lookup, a method that allows you to convert user IDs into full user objects in bulk.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    stringify_ids = 'stringify_ids_example' # str | Many programming environments will not consume our Tweet ids due to their size. Provide this option to have ids returned as strings instead. Example Values: true (optional)
    cursor = 'cursor_example' # str | Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \"page.\"  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.Example Values: 12893764510938 (optional)

    try:
        api_instance.friends_ids(stringify_ids=stringify_ids, cursor=cursor)
    except Exception as e:
        print("Exception when calling DefaultApi->friends_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stringify_ids** | **str**| Many programming environments will not consume our Tweet ids due to their size. Provide this option to have ids returned as strings instead. Example Values: true | [optional] 
 **cursor** | **str**| Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \&quot;page.\&quot;  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.Example Values: 12893764510938 | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **friendships_create**
> friendships_create(follow=follow)



Allows the authenticating users to follow the user specified in the ID parameter.  Returns the befriended user in the requested format when successful. Returns a string describing the failure condition when unsuccessful. If you are already friends with the user a HTTP 403 may be returned, though for performance reasons you may get a 200 OK message even if the friendship already exists.  Actions taken in this method are asynchronous and changes will be eventually consistent.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    follow = 'follow_example' # str | Enable notifications for the target user. Example Values: true (optional)

    try:
        api_instance.friendships_create(follow=follow)
    except Exception as e:
        print("Exception when calling DefaultApi->friendships_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **follow** | **str**| Enable notifications for the target user. Example Values: true | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **friendships_destroy**
> friendships_destroy()



Allows the authenticating user to unfollow the user specified in the ID parameter.  Returns the unfollowed user in the requested format when successful. Returns a string describing the failure condition when unsuccessful.  Actions taken in this method are asynchronous and changes will be eventually consistent.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.friendships_destroy()
    except Exception as e:
        print("Exception when calling DefaultApi->friendships_destroy: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **friendships_incoming**
> friendships_incoming(stringify_ids=stringify_ids, cursor=cursor)



Returns the relationships of the authenticating user to the comma-separated list of up to 100 screen_names or user_ids provided. Values for connections can be: following, following_requested, followed_by, none.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    stringify_ids = 'stringify_ids_example' # str | Many programming environments will not consume our Tweet ids due to their size. Provide this option to have ids returned as strings instead. Example Values: true (optional)
    cursor = 'cursor_example' # str | Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \"page.\"  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.Example Values: 12893764510938 (optional)

    try:
        api_instance.friendships_incoming(stringify_ids=stringify_ids, cursor=cursor)
    except Exception as e:
        print("Exception when calling DefaultApi->friendships_incoming: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stringify_ids** | **str**| Many programming environments will not consume our Tweet ids due to their size. Provide this option to have ids returned as strings instead. Example Values: true | [optional] 
 **cursor** | **str**| Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \&quot;page.\&quot;  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.Example Values: 12893764510938 | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **friendships_lookup**
> friendships_lookup()



Returns the relationships of the authenticating user to the comma-separated list of up to 100 screen_names or user_ids provided. Values for connections can be: following, following_requested, followed_by, none.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.friendships_lookup()
    except Exception as e:
        print("Exception when calling DefaultApi->friendships_lookup: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **friendships_outgoing**
> friendships_outgoing(stringify_ids=stringify_ids, cursor=cursor)



Returns a collection of numeric IDs for every protected user for whom the authenticating user has a pending follow request.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    stringify_ids = 'stringify_ids_example' # str | Many programming environments will not consume our Tweet ids due to their size. Provide this option to have ids returned as strings instead. Example Values: true (optional)
    cursor = 'cursor_example' # str | Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \"page.\"  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.Example Values: 12893764510938 (optional)

    try:
        api_instance.friendships_outgoing(stringify_ids=stringify_ids, cursor=cursor)
    except Exception as e:
        print("Exception when calling DefaultApi->friendships_outgoing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stringify_ids** | **str**| Many programming environments will not consume our Tweet ids due to their size. Provide this option to have ids returned as strings instead. Example Values: true | [optional] 
 **cursor** | **str**| Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first \&quot;page.\&quot;  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.Example Values: 12893764510938 | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **friendships_show**
> friendships_show(target_id, target_screen_name, source_id=source_id, source_screen_name=source_screen_name)



Returns detailed information about the relationship between two arbitrary users.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    target_id = 'target_id_example' # str | The user_id of the target user.  Example Values: 20
    target_screen_name = 'target_screen_name_example' # str | The screen_name of the target user.  Example Values: noradio
    source_id = 'source_id_example' # str | The user_id of the subject user.  Example Values: 3191321 (optional)
    source_screen_name = 'source_screen_name_example' # str | The screen_name of the subject user.  Example Values: raffi (optional)

    try:
        api_instance.friendships_show(target_id, target_screen_name, source_id=source_id, source_screen_name=source_screen_name)
    except Exception as e:
        print("Exception when calling DefaultApi->friendships_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target_id** | **str**| The user_id of the target user.  Example Values: 20 | 
 **target_screen_name** | **str**| The screen_name of the target user.  Example Values: noradio | 
 **source_id** | **str**| The user_id of the subject user.  Example Values: 3191321 | [optional] 
 **source_screen_name** | **str**| The screen_name of the subject user.  Example Values: raffi | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **friendships_update**
> friendships_update(device, retweets)



Allows one to enable or disable retweets and device notifications from the specified user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device = 'device_example' # str | Enable/disable device notifications from the target user. Example Values: true, false
    retweets = 'retweets_example' # str | Enable/disable retweets from the target user. Example Values: true, false

    try:
        api_instance.friendships_update(device, retweets)
    except Exception as e:
        print("Exception when calling DefaultApi->friendships_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | **str**| Enable/disable device notifications from the target user. Example Values: true, false | 
 **retweets** | **str**| Enable/disable retweets from the target user. Example Values: true, false | 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **geo_place_id**
> geo_place_id(place_id)



Returns all the information about a known place.Example Values: df51dec6f4ee2b2c

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    place_id = 'place_id_example' # str | A place in the world. These IDs can be retrieved from geo/reverse_geocode.  Example Values: df51dec6f4ee2b2c

    try:
        api_instance.geo_place_id(place_id)
    except Exception as e:
        print("Exception when calling DefaultApi->geo_place_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **place_id** | **str**| A place in the world. These IDs can be retrieved from geo/reverse_geocode.  Example Values: df51dec6f4ee2b2c | 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **geo_places**
> geo_places(attributestreet_address=attributestreet_address, param_callback=param_callback)



Creates a new place object at the given latitude and longitude.  Before creating a place you need to query GET geo/similar_places with the latitude, longitude and name of the place you wish to create. The query will return an array of places which are similar to the one you wish to create, and a token. If the place you wish to create isn't in the returned array you can use the token with this method to create a new one.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    attributestreet_address = 'attributestreet_address_example' # str | This parameter searches for places which have this given street address. There are other well-known, and application specific attributes available. Custom attributes are also permitted. Learn more about Place Attributes.  Example Values: 795%20Folsom%20St (optional)
    param_callback = 'param_callback_example' # str | If supplied, the response will use the JSONP format with a callback of the given name. (optional)

    try:
        api_instance.geo_places(attributestreet_address=attributestreet_address, param_callback=param_callback)
    except Exception as e:
        print("Exception when calling DefaultApi->geo_places: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributestreet_address** | **str**| This parameter searches for places which have this given street address. There are other well-known, and application specific attributes available. Custom attributes are also permitted. Learn more about Place Attributes.  Example Values: 795%20Folsom%20St | [optional] 
 **param_callback** | **str**| If supplied, the response will use the JSONP format with a callback of the given name. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **geo_reverse_geocode**
> geo_reverse_geocode(lat, long, accuracy=accuracy, granularity=granularity, max_results=max_results, param_callback=param_callback)



Given a latitude and a longitude, searches for up to 20 places that can be used as a place_id when updating a status.  This request is an informative call and will deliver generalized results about geography

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lat = 'lat_example' # str | The latitude to search around. This parameter will be ignored unless it is inside the range -90.0 to +90.0 (North is positive) inclusive. It will also be ignored if there isn't a corresponding long parameter.  Example Values: 37.7821120598956
    long = 'long_example' # str | The longitude to search around. The valid ranges for longitude is -180.0 to +180.0 (East is positive) inclusive. This parameter will be ignored if outside that range, if it is not a number, if geo_enabled is disabled, or if there not a corresponding lat parameter.  Example Values: -122.400612831116
    accuracy = 'accuracy_example' # str | A hint on the \"region\" in which to search. If a number, then this is a radius in meters, but it can also take a string that is suffixed with ft to specify feet. If this is not passed in, then it is assumed to be 0m. If coming from a device, in practice, this value is whatever accuracy the device has measuring its location (whether it be coming from a GPS, WiFi triangulation, etc.).  Example Values: 5ft (optional)
    granularity = 'granularity_example' # str | This is the minimal granularity of place types to return and must be one of: poi, neighborhood, city, admin or country. If no granularity is provided for the request neighborhood is assumed. Setting this to city, for example, will find places which have a type of city, admin or country.  Example Values: city (optional)
    max_results = 'max_results_example' # str | A hint as to the number of results to return. This does not guarantee that the number of results returned will equal max_results, but instead informs how many \"nearby\" results to return. Ideally, only pass in the number of places you intend to display to the user here.  Example Values: 3 (optional)
    param_callback = 'param_callback_example' # str | If supplied, the response will use the JSONP format with a callback of the given name. (optional)

    try:
        api_instance.geo_reverse_geocode(lat, long, accuracy=accuracy, granularity=granularity, max_results=max_results, param_callback=param_callback)
    except Exception as e:
        print("Exception when calling DefaultApi->geo_reverse_geocode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **str**| The latitude to search around. This parameter will be ignored unless it is inside the range -90.0 to +90.0 (North is positive) inclusive. It will also be ignored if there isn&#39;t a corresponding long parameter.  Example Values: 37.7821120598956 | 
 **long** | **str**| The longitude to search around. The valid ranges for longitude is -180.0 to +180.0 (East is positive) inclusive. This parameter will be ignored if outside that range, if it is not a number, if geo_enabled is disabled, or if there not a corresponding lat parameter.  Example Values: -122.400612831116 | 
 **accuracy** | **str**| A hint on the \&quot;region\&quot; in which to search. If a number, then this is a radius in meters, but it can also take a string that is suffixed with ft to specify feet. If this is not passed in, then it is assumed to be 0m. If coming from a device, in practice, this value is whatever accuracy the device has measuring its location (whether it be coming from a GPS, WiFi triangulation, etc.).  Example Values: 5ft | [optional] 
 **granularity** | **str**| This is the minimal granularity of place types to return and must be one of: poi, neighborhood, city, admin or country. If no granularity is provided for the request neighborhood is assumed. Setting this to city, for example, will find places which have a type of city, admin or country.  Example Values: city | [optional] 
 **max_results** | **str**| A hint as to the number of results to return. This does not guarantee that the number of results returned will equal max_results, but instead informs how many \&quot;nearby\&quot; results to return. Ideally, only pass in the number of places you intend to display to the user here.  Example Values: 3 | [optional] 
 **param_callback** | **str**| If supplied, the response will use the JSONP format with a callback of the given name. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **geo_search**
> geo_search(accuracy=accuracy, granularity=granularity, contained_within=contained_within, attributestreet_address=attributestreet_address, param_callback=param_callback)



Search for places that can be attached to a statuses/update. Given a latitude and a longitude pair, an IP address, or a name, this request will return a list of all the valid places that can be used as the place_id when updating a status.  Conceptually, a query can be made from the user's location, retrieve a list of places, have the user validate the location he or she is at, and then send the ID of this location with a call to POST statuses/update.  This is the recommended method to use find places that can be attached to statuses/update. Unlike GET geo/reverse_geocode which provides raw data access, this endpoint can potentially re-order places with regards to the user who is authenticated. This approach is also preferred for interactive place matching with the user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    accuracy = 'accuracy_example' # str | A hint on the \"region\" in which to search. If a number, then this is a radius in meters, but it can also take a string that is suffixed with ft to specify feet. If this is not passed in, then it is assumed to be 0m. If coming from a device, in practice, this value is whatever accuracy the device has measuring its location (whether it be coming from a GPS, WiFi triangulation, etc.).  Example Values: 5ft (optional)
    granularity = 'granularity_example' # str | This is the minimal granularity of place types to return and must be one of: poi, neighborhood, city, admin or country. If no granularity is provided for the request neighborhood is assumed. Setting this to city, for example, will find places which have a type of city, admin or country.  Example Values: city (optional)
    contained_within = 'contained_within_example' # str | This is the place_id which you would like to restrict the search results to. Setting this value means only places within the given place_id will be found.  Specify a place_id. For example, to scope all results to places within \"San Francisco, CA USA\", you would specify a place_id of \"5a110d312052166f\"  Example Values: 247f43d441defc03 (optional)
    attributestreet_address = 'attributestreet_address_example' # str | This parameter searches for places which have this given street address. There are other well-known, and application specific attributes available. Custom attributes are also permitted. Learn more about Place Attributes.  Example Values: 795%20Folsom%20St (optional)
    param_callback = 'param_callback_example' # str | If supplied, the response will use the JSONP format with a callback of the given name. (optional)

    try:
        api_instance.geo_search(accuracy=accuracy, granularity=granularity, contained_within=contained_within, attributestreet_address=attributestreet_address, param_callback=param_callback)
    except Exception as e:
        print("Exception when calling DefaultApi->geo_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accuracy** | **str**| A hint on the \&quot;region\&quot; in which to search. If a number, then this is a radius in meters, but it can also take a string that is suffixed with ft to specify feet. If this is not passed in, then it is assumed to be 0m. If coming from a device, in practice, this value is whatever accuracy the device has measuring its location (whether it be coming from a GPS, WiFi triangulation, etc.).  Example Values: 5ft | [optional] 
 **granularity** | **str**| This is the minimal granularity of place types to return and must be one of: poi, neighborhood, city, admin or country. If no granularity is provided for the request neighborhood is assumed. Setting this to city, for example, will find places which have a type of city, admin or country.  Example Values: city | [optional] 
 **contained_within** | **str**| This is the place_id which you would like to restrict the search results to. Setting this value means only places within the given place_id will be found.  Specify a place_id. For example, to scope all results to places within \&quot;San Francisco, CA USA\&quot;, you would specify a place_id of \&quot;5a110d312052166f\&quot;  Example Values: 247f43d441defc03 | [optional] 
 **attributestreet_address** | **str**| This parameter searches for places which have this given street address. There are other well-known, and application specific attributes available. Custom attributes are also permitted. Learn more about Place Attributes.  Example Values: 795%20Folsom%20St | [optional] 
 **param_callback** | **str**| If supplied, the response will use the JSONP format with a callback of the given name. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **geo_similar_places**
> geo_similar_places(contained_within=contained_within, attributestreet_address=attributestreet_address, param_callback=param_callback)



Locates places near the given coordinates which are similar in name.  Conceptually you would use this method to get a list of known places to choose from first. Then, if the desired place doesn't exist, make a request to POST geo/place to create a new one.  The token contained in the response is the token needed to be able to create a new place.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    contained_within = 'contained_within_example' # str | This is the place_id which you would like to restrict the search results to. Setting this value means only places within the given place_id will be found.  Specify a place_id. For example, to scope all results to places within \"San Francisco, CA USA\", you would specify a place_id of \"5a110d312052166f\"  Example Values: 247f43d441defc03 (optional)
    attributestreet_address = 'attributestreet_address_example' # str | This parameter searches for places which have this given street address. There are other well-known, and application specific attributes available. Custom attributes are also permitted. Learn more about Place Attributes.  Example Values: 795%20Folsom%20St (optional)
    param_callback = 'param_callback_example' # str | If supplied, the response will use the JSONP format with a callback of the given name. (optional)

    try:
        api_instance.geo_similar_places(contained_within=contained_within, attributestreet_address=attributestreet_address, param_callback=param_callback)
    except Exception as e:
        print("Exception when calling DefaultApi->geo_similar_places: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contained_within** | **str**| This is the place_id which you would like to restrict the search results to. Setting this value means only places within the given place_id will be found.  Specify a place_id. For example, to scope all results to places within \&quot;San Francisco, CA USA\&quot;, you would specify a place_id of \&quot;5a110d312052166f\&quot;  Example Values: 247f43d441defc03 | [optional] 
 **attributestreet_address** | **str**| This parameter searches for places which have this given street address. There are other well-known, and application specific attributes available. Custom attributes are also permitted. Learn more about Place Attributes.  Example Values: 795%20Folsom%20St | [optional] 
 **param_callback** | **str**| If supplied, the response will use the JSONP format with a callback of the given name. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **help_configurations**
> help_configurations()



Returns the current configuration used by Twitter including twitter.com slugs which are not usernames, maximum photo resolutions, and t.co URL lengths.  It is recommended applications request this endpoint when they are loaded, but no more than once a day.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.help_configurations()
    except Exception as e:
        print("Exception when calling DefaultApi->help_configurations: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **help_languages**
> help_languages()



Returns the list of languages supported by Twitter along with their ISO 639-1 code. The ISO 639-1 code is the two letter value to use if you include lang with any of your requests.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.help_languages()
    except Exception as e:
        print("Exception when calling DefaultApi->help_languages: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **help_privacy**
> help_privacy()



Returns Twitter's Privacy Policy

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.help_privacy()
    except Exception as e:
        print("Exception when calling DefaultApi->help_privacy: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **help_tos**
> help_tos()



Returns the Twitter Terms of Service in the requested format. These are not the same as the Developer Rules of the Road.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.help_tos()
    except Exception as e:
        print("Exception when calling DefaultApi->help_tos: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_create**
> lists_create(name, mode=mode, description=description)



Creates a new list for the authenticated user. Note that you can't create more than 20 lists per account.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | The name for the list.A list's name must start with a letter and can consist only of 25 or fewer letters, numbers, \"-\", or \"_\" characters.
    mode = 'mode_example' # str | Whether your list is public or private. Values can be public or private. If no mode is specified the list will be public. (optional)
    description = 'description_example' # str | The description to give the list. (optional)

    try:
        api_instance.lists_create(name, mode=mode, description=description)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name for the list.A list&#39;s name must start with a letter and can consist only of 25 or fewer letters, numbers, \&quot;-\&quot;, or \&quot;_\&quot; characters. | 
 **mode** | **str**| Whether your list is public or private. Values can be public or private. If no mode is specified the list will be public. | [optional] 
 **description** | **str**| The description to give the list. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_destroy**
> lists_destroy(owner_screen_name=owner_screen_name, owner_id=owner_id)



Deletes the specified list. The authenticated user must own the list to be able to destroy it.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)

    try:
        api_instance.lists_destroy(owner_screen_name=owner_screen_name, owner_id=owner_id)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_list**
> lists_list(screen_name, user_id)



Returns all lists the authenticating or specified user subscribes to, including their own. The user is specified using the user_id or screen_name parameters. If no user is given, the authenticating user is used.  This method used to be GET lists in version 1.0 of the API and has been renamed for consistency with other call.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    screen_name = 'screen_name_example' # str | The screen name of the user for whom to return results for. Helpful for disambiguating when a valid screen name is also a user ID.  Example Values: noradio
    user_id = 'user_id_example' # str | The ID of the user for whom to return results for. Helpful for disambiguating when a valid user ID is also a valid screen name.  Example Values: 12345  Note:: Specifies the ID of the user to get lists from. Helpful for disambiguating when a valid user ID is also a valid screen name.

    try:
        api_instance.lists_list(screen_name, user_id)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **screen_name** | **str**| The screen name of the user for whom to return results for. Helpful for disambiguating when a valid screen name is also a user ID.  Example Values: noradio | 
 **user_id** | **str**| The ID of the user for whom to return results for. Helpful for disambiguating when a valid user ID is also a valid screen name.  Example Values: 12345  Note:: Specifies the ID of the user to get lists from. Helpful for disambiguating when a valid user ID is also a valid screen name. | 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_members**
> lists_members(owner_screen_name=owner_screen_name, owner_id=owner_id, include_entities=include_entities, skip_status=skip_status, cursor=cursor)



Returns the members of the specified list. Private list members will only be shown if the authenticated user owns the specified list.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)
    include_entities = 'include_entities_example' # str | The entities node will be disincluded when set to false.  Example Values: false (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)
    cursor = 'cursor_example' # str | Causes the collection of list members to be broken into \"pages\" of somewhat consistent size. If no cursor is provided, a value of -1 will be assumed, which is the first \"page.\"  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth. See Using cursors to navigate collections for more information.  Example Values: 12893764510938 (optional)

    try:
        api_instance.lists_members(owner_screen_name=owner_screen_name, owner_id=owner_id, include_entities=include_entities, skip_status=skip_status, cursor=cursor)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 
 **include_entities** | **str**| The entities node will be disincluded when set to false.  Example Values: false | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 
 **cursor** | **str**| Causes the collection of list members to be broken into \&quot;pages\&quot; of somewhat consistent size. If no cursor is provided, a value of -1 will be assumed, which is the first \&quot;page.\&quot;  The response from the API will include a previous_cursor and next_cursor to allow paging back and forth. See Using cursors to navigate collections for more information.  Example Values: 12893764510938 | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_members_create**
> lists_members_create(owner_screen_name=owner_screen_name, owner_id=owner_id)



Add a member to a list. The authenticated user must own the list to be able to add members to it. Note that lists can't have more than 500 members.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)

    try:
        api_instance.lists_members_create(owner_screen_name=owner_screen_name, owner_id=owner_id)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_members_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_members_create_all**
> lists_members_create_all(owner_screen_name=owner_screen_name, owner_id=owner_id, user_id=user_id, screen_name=screen_name)



Adds multiple members to a list, by specifying a comma-separated list of member ids or screen names. The authenticated user must own the list to be able to add members to it. Note that lists can't have more than 500 members, and you are limited to adding up to 100 members to a list at a time with this method.  Please note that there can be issues with lists that rapidly remove and add memberships. Take care when using these methods such that you are not too rapidly switching between removals and adds on the same list.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)
    user_id = 'user_id_example' # str | A comma separated list of user IDs, up to 100 are allowed in a single request. (optional)
    screen_name = 'screen_name_example' # str | A comma separated list of screen names, up to 100 are allowed in a single request. (optional)

    try:
        api_instance.lists_members_create_all(owner_screen_name=owner_screen_name, owner_id=owner_id, user_id=user_id, screen_name=screen_name)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_members_create_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 
 **user_id** | **str**| A comma separated list of user IDs, up to 100 are allowed in a single request. | [optional] 
 **screen_name** | **str**| A comma separated list of screen names, up to 100 are allowed in a single request. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_members_destroy**
> lists_members_destroy(list_id, slug, owner_screen_name=owner_screen_name, owner_id=owner_id, user_id=user_id, screen_name=screen_name)



Removes the specified member from the list. The authenticated user must be the list's owner to remove members from the list.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    list_id = 'list_id_example' # str | The numerical id of the list.
    slug = 'slug_example' # str | You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)
    user_id = 'user_id_example' # str | The ID of the user to remove from the list. Helpful for disambiguating when a valid user ID is also a valid screen name. (optional)
    screen_name = 'screen_name_example' # str | The screen name of the user for whom to remove from the list. Helpful for disambiguating when a valid screen name is also a user ID. (optional)

    try:
        api_instance.lists_members_destroy(list_id, slug, owner_screen_name=owner_screen_name, owner_id=owner_id, user_id=user_id, screen_name=screen_name)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_members_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| The numerical id of the list. | 
 **slug** | **str**| You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you&#39;ll also have to specify the list owner using the owner_id or owner_screen_name parameters. | 
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 
 **user_id** | **str**| The ID of the user to remove from the list. Helpful for disambiguating when a valid user ID is also a valid screen name. | [optional] 
 **screen_name** | **str**| The screen name of the user for whom to remove from the list. Helpful for disambiguating when a valid screen name is also a user ID. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_members_destroy_all**
> lists_members_destroy_all(owner_screen_name=owner_screen_name, owner_id=owner_id, screen_name=screen_name, user_id=user_id)



Removes multiple members from a list, by specifying a comma-separated list of member ids or screen names. The authenticated user must own the list to be able to remove members from it. Note that lists can't have more than 500 members, and you are limited to removing up to 100 members to a list at a time with this method.  Please note that there can be issues with lists that rapidly remove and add memberships. Take care when using these methods such that you are not too rapidly switching between removals and adds on the same list.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)
    screen_name = 'screen_name_example' # str | A comma separated list of screen names, up to 100 are allowed in a single request. (optional)
    user_id = 'user_id_example' # str | A comma separated list of user IDs, up to 100 are allowed in a single request. (optional)

    try:
        api_instance.lists_members_destroy_all(owner_screen_name=owner_screen_name, owner_id=owner_id, screen_name=screen_name, user_id=user_id)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_members_destroy_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 
 **screen_name** | **str**| A comma separated list of screen names, up to 100 are allowed in a single request. | [optional] 
 **user_id** | **str**| A comma separated list of user IDs, up to 100 are allowed in a single request. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_members_show**
> lists_members_show(owner_screen_name=owner_screen_name, owner_id=owner_id, include_entities=include_entities, skip_status=skip_status)



Check if the specified user is a member of the specified list.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)
    include_entities = 'include_entities_example' # str | When set to either true, t or 1, each tweet will include a node called \"entities\". This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.lists_members_show(owner_screen_name=owner_screen_name, owner_id=owner_id, include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_members_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 
 **include_entities** | **str**| When set to either true, t or 1, each tweet will include a node called \&quot;entities\&quot;. This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_memberships**
> lists_memberships(user_id=user_id, screen_name=screen_name, cursor=cursor, filter_to_owned_lists=filter_to_owned_lists)



Returns the lists the specified user has been added to. If user_id or screen_name are not provided the memberships for the authenticating user are returned.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user for whom to return results for. Helpful for disambiguating when a valid user ID is also a valid screen name. (optional)
    screen_name = 'screen_name_example' # str | The screen name of the user for whom to return results for. Helpful for disambiguating when a valid screen name is also a user ID. (optional)
    cursor = 'cursor_example' # str | Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin paging. Provide values as returned in the response body's next_cursor and previous_cursor attributes to page back and forth in the list. (optional)
    filter_to_owned_lists = 'filter_to_owned_lists_example' # str | When set to true, t or 1, will return just lists the authenticating user owns, and the user represented by user_id or screen_name is a member of. (optional)

    try:
        api_instance.lists_memberships(user_id=user_id, screen_name=screen_name, cursor=cursor, filter_to_owned_lists=filter_to_owned_lists)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_memberships: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user for whom to return results for. Helpful for disambiguating when a valid user ID is also a valid screen name. | [optional] 
 **screen_name** | **str**| The screen name of the user for whom to return results for. Helpful for disambiguating when a valid screen name is also a user ID. | [optional] 
 **cursor** | **str**| Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin paging. Provide values as returned in the response body&#39;s next_cursor and previous_cursor attributes to page back and forth in the list. | [optional] 
 **filter_to_owned_lists** | **str**| When set to true, t or 1, will return just lists the authenticating user owns, and the user represented by user_id or screen_name is a member of. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_show**
> lists_show(owner_screen_name=owner_screen_name, owner_id=owner_id)



Returns the specified list. Private lists will only be shown if the authenticated user owns the specified list.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)

    try:
        api_instance.lists_show(owner_screen_name=owner_screen_name, owner_id=owner_id)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_statuses**
> lists_statuses(include_rts, owner_screen_name=owner_screen_name, owner_id=owner_id, since_id=since_id, max_id=max_id, count=count, include_entities=include_entities)



Returns tweet timeline for members of the specified list. Retweets are included by default. You can use the include_rts=false parameter to omit retweet objects.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    include_rts = 'include_rts_example' # str | When set to either true, t or 1, the list timeline will contain native retweets (if they exist) in addition to the standard stream of tweets. The output format of retweeted tweets is identical to the representation you see in home_timeline.
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)
    since_id = 'since_id_example' # str | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional)
    max_id = 'max_id_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)
    count = 'count_example' # str | Specifies the number of results to retrieve per \"page. (optional)
    include_entities = 'include_entities_example' # str | Entities are ON by default in API 1.1, each tweet includes a node called \"entities\". This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. You can omit entities from the result by using include_entities=false (optional)

    try:
        api_instance.lists_statuses(include_rts, owner_screen_name=owner_screen_name, owner_id=owner_id, since_id=since_id, max_id=max_id, count=count, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_rts** | **str**| When set to either true, t or 1, the list timeline will contain native retweets (if they exist) in addition to the standard stream of tweets. The output format of retweeted tweets is identical to the representation you see in home_timeline. | 
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 
 **since_id** | **str**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **max_id** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **count** | **str**| Specifies the number of results to retrieve per \&quot;page. | [optional] 
 **include_entities** | **str**| Entities are ON by default in API 1.1, each tweet includes a node called \&quot;entities\&quot;. This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. You can omit entities from the result by using include_entities&#x3D;false | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_subscribers**
> lists_subscribers(owner_screen_name=owner_screen_name, owner_id=owner_id, cursor=cursor, include_entities=include_entities, skip_status=skip_status)



Returns the subscribers of the specified list. Private list subscribers will only be shown if the authenticated user owns the specified list.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)
    cursor = 'cursor_example' # str | Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin paging. Provide values as returned in the response body's next_cursor and previous_cursor attributes to page back and forth in the list. (optional)
    include_entities = 'include_entities_example' # str | When set to either true, t or 1, each tweet will include a node called \"entities\". This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. See Tweet Entities for more details. (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.lists_subscribers(owner_screen_name=owner_screen_name, owner_id=owner_id, cursor=cursor, include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_subscribers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 
 **cursor** | **str**| Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin paging. Provide values as returned in the response body&#39;s next_cursor and previous_cursor attributes to page back and forth in the list. | [optional] 
 **include_entities** | **str**| When set to either true, t or 1, each tweet will include a node called \&quot;entities\&quot;. This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. See Tweet Entities for more details. | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_subscribers_create**
> lists_subscribers_create(owner_screen_name=owner_screen_name, owner_id=owner_id)



Subscribes the authenticated user to the specified list.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)

    try:
        api_instance.lists_subscribers_create(owner_screen_name=owner_screen_name, owner_id=owner_id)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_subscribers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_subscribers_destroy**
> lists_subscribers_destroy(owner_screen_name=owner_screen_name, owner_id=owner_id)



Unsubscribes the authenticated user from the specified list.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)

    try:
        api_instance.lists_subscribers_destroy(owner_screen_name=owner_screen_name, owner_id=owner_id)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_subscribers_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_subscribers_show**
> lists_subscribers_show(owner_screen_name=owner_screen_name, owner_id=owner_id, include_entities=include_entities, skip_status=skip_status)



Check if the specified user is a subscriber of the specified list. Returns the user if they are subscriber.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)
    include_entities = 'include_entities_example' # str | When set to either true, t or 1, each tweet will include a node called \"entities\". This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. See Tweet Entities for more details. (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.lists_subscribers_show(owner_screen_name=owner_screen_name, owner_id=owner_id, include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_subscribers_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 
 **include_entities** | **str**| When set to either true, t or 1, each tweet will include a node called \&quot;entities\&quot;. This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. See Tweet Entities for more details. | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_subscriptions**
> lists_subscriptions(count=count, cursor=cursor)



Obtain a collection of the lists the specified user is subscribed to, 20 lists per page by default. Does not include the user's own lists.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    count = 'count_example' # str | The amount of results to return per page. Defaults to 20. Maximum of 1,000 when using cursors. (optional)
    cursor = 'cursor_example' # str | Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin paging. Provide values as returned in the response body's next_cursor and previous_cursor attributes to page back and forth in the list. It is recommended to always use cursors when the method supports them. (optional)

    try:
        api_instance.lists_subscriptions(count=count, cursor=cursor)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **str**| The amount of results to return per page. Defaults to 20. Maximum of 1,000 when using cursors. | [optional] 
 **cursor** | **str**| Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin paging. Provide values as returned in the response body&#39;s next_cursor and previous_cursor attributes to page back and forth in the list. It is recommended to always use cursors when the method supports them. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_update**
> lists_update(owner_screen_name=owner_screen_name, owner_id=owner_id, name=name, mode=mode, description=description)



Updates the specified list. The authenticated user must own the list to be able to update it.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    owner_screen_name = 'owner_screen_name_example' # str | The screen name of the user who owns the list being requested by a slug. (optional)
    owner_id = 'owner_id_example' # str | The user ID of the user who owns the list being requested by a slug. (optional)
    name = 'name_example' # str | The name for the list. (optional)
    mode = 'mode_example' # str | Whether your list is public or private. Values can be public or private. If no mode is specified the list will be public. (optional)
    description = 'description_example' # str | The description to give the list. (optional)

    try:
        api_instance.lists_update(owner_screen_name=owner_screen_name, owner_id=owner_id, name=name, mode=mode, description=description)
    except Exception as e:
        print("Exception when calling DefaultApi->lists_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_screen_name** | **str**| The screen name of the user who owns the list being requested by a slug. | [optional] 
 **owner_id** | **str**| The user ID of the user who owns the list being requested by a slug. | [optional] 
 **name** | **str**| The name for the list. | [optional] 
 **mode** | **str**| Whether your list is public or private. Values can be public or private. If no mode is specified the list will be public. | [optional] 
 **description** | **str**| The description to give the list. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saved_searches_create**
> saved_searches_create(query)



Create a new saved search for the authenticated user. A user may only have 25 saved searches.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    query = 'query_example' # str | The query of the search the user would like to save.

    try:
        api_instance.saved_searches_create(query)
    except Exception as e:
        print("Exception when calling DefaultApi->saved_searches_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The query of the search the user would like to save. | 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saved_searches_destroy**
> saved_searches_destroy(id)



Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The ID of the saved search.  Example Values: 313006

    try:
        api_instance.saved_searches_destroy(id)
    except Exception as e:
        print("Exception when calling DefaultApi->saved_searches_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the saved search.  Example Values: 313006 | 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saved_searches_list**
> saved_searches_list()



Returns the authenticated user's saved search queries.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.saved_searches_list()
    except Exception as e:
        print("Exception when calling DefaultApi->saved_searches_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **savedsearchesid**
> savedsearchesid(id)



Returns the authenticated user's saved search queries.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The ID of the saved search.  Example Values: 313006

    try:
        api_instance.savedsearchesid(id)
    except Exception as e:
        print("Exception when calling DefaultApi->savedsearchesid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the saved search.  Example Values: 313006 | 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_tweets**
> search_tweets(q, geocode=geocode, lang=lang, locale=locale, result_type=result_type, count=count, until=until, since_id=since_id, max_id=max_id, include_entities=include_entities, param_callback=param_callback)



Returns a collection of relevant Tweets matching a specified query.  Please note that Twitter's search service and, by extension, the Search API is not meant to be an exhaustive source of Tweets. Not all Tweets will be indexed or made available via the search interface.  In API v1.1, the response format of the Search API has been improved to return Tweet objects more similar to the objects you'll find across the REST API and platform. You may need to tolerate some inconsistencies and variance in perspectival values (fields that pertain to the perspective of the authenticating user) and embedded user objects.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    q = 'q_example' # str | A UTF-8, URL-encoded search query of 1,000 characters maximum, including operators. Queries may additionally be limited by complexity.Example: @noradio.
    geocode = 'geocode_example' # str | Returns tweets by users located within a given radius of the given latitude/longitude. The location is preferentially taking from the Geotagging API, but will fall back to their Twitter profile. The parameter value is specified by \"latitude,longitude,radius\", where radius units must be specified as either \"mi\" (miles) or \"km\" (kilometers). Note that you cannot use the near operator via the API to geocode arbitrary locations; however you can use this geocode parameter to search near geocodes directly. A maximum of 1,000 distinct \"sub-regions\" will be considered when using the radius modifier. (optional)
    lang = 'lang_example' # str | Restricts tweets to the given language, given by an ISO 639-1 code. Language detection is best-effort.Example Values: eu (optional)
    locale = 'locale_example' # str | Specify the language of the query you are sending (only ja is currently effective). This is intended for language-specific consumers and the default should work in the majority of cases.Example Values: ja (optional)
    result_type = 'result_type_example' # str | Optional. Specifies what type of search results you would prefer to receive. The current default is \"mixed.\" Valid values include: * mixed: Include both popular and real time results in the response. * recent: return only the most recent results in the response * popular: return only the most popular results in the response. Example Values: mixed, recent, popular (optional)
    count = 'count_example' # str | The number of tweets to return per page, up to a maximum of 100. Defaults to 15. This was formerly the \"rpp\" parameter in the old Search API. Example Values: 100 (optional)
    until = 'until_example' # str | Returns tweets generated before the given date. Date should be formatted as YYYY-MM-DD. Keep in mind that the search index may not go back as far as the date you specify here. Example Values: 2012-09-01 (optional)
    since_id = 'since_id_example' # str | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. Example Values: 12345 (optional)
    max_id = 'max_id_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID. Example Values: 12345 (optional)
    include_entities = 'include_entities_example' # str | The entities node will be disincluded when set to false. Example Values: false (optional)
    param_callback = 'param_callback_example' # str | If supplied, the response will use the JSONP format with a callback of the given name. The usefulness of this parameter is somewhat diminished by the requirement of authentication for requests to this endpoint. Example Values: processTweets (optional)

    try:
        api_instance.search_tweets(q, geocode=geocode, lang=lang, locale=locale, result_type=result_type, count=count, until=until, since_id=since_id, max_id=max_id, include_entities=include_entities, param_callback=param_callback)
    except Exception as e:
        print("Exception when calling DefaultApi->search_tweets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| A UTF-8, URL-encoded search query of 1,000 characters maximum, including operators. Queries may additionally be limited by complexity.Example: @noradio. | 
 **geocode** | **str**| Returns tweets by users located within a given radius of the given latitude/longitude. The location is preferentially taking from the Geotagging API, but will fall back to their Twitter profile. The parameter value is specified by \&quot;latitude,longitude,radius\&quot;, where radius units must be specified as either \&quot;mi\&quot; (miles) or \&quot;km\&quot; (kilometers). Note that you cannot use the near operator via the API to geocode arbitrary locations; however you can use this geocode parameter to search near geocodes directly. A maximum of 1,000 distinct \&quot;sub-regions\&quot; will be considered when using the radius modifier. | [optional] 
 **lang** | **str**| Restricts tweets to the given language, given by an ISO 639-1 code. Language detection is best-effort.Example Values: eu | [optional] 
 **locale** | **str**| Specify the language of the query you are sending (only ja is currently effective). This is intended for language-specific consumers and the default should work in the majority of cases.Example Values: ja | [optional] 
 **result_type** | **str**| Optional. Specifies what type of search results you would prefer to receive. The current default is \&quot;mixed.\&quot; Valid values include: * mixed: Include both popular and real time results in the response. * recent: return only the most recent results in the response * popular: return only the most popular results in the response. Example Values: mixed, recent, popular | [optional] 
 **count** | **str**| The number of tweets to return per page, up to a maximum of 100. Defaults to 15. This was formerly the \&quot;rpp\&quot; parameter in the old Search API. Example Values: 100 | [optional] 
 **until** | **str**| Returns tweets generated before the given date. Date should be formatted as YYYY-MM-DD. Keep in mind that the search index may not go back as far as the date you specify here. Example Values: 2012-09-01 | [optional] 
 **since_id** | **str**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. Example Values: 12345 | [optional] 
 **max_id** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID. Example Values: 12345 | [optional] 
 **include_entities** | **str**| The entities node will be disincluded when set to false. Example Values: false | [optional] 
 **param_callback** | **str**| If supplied, the response will use the JSONP format with a callback of the given name. The usefulness of this parameter is somewhat diminished by the requirement of authentication for requests to this endpoint. Example Values: processTweets | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statuses_destroy**
> statuses_destroy(id, trim_user=trim_user)



Destroys the status specified by the required ID parameter. The authenticating user must be the author of the specified status. Returns the destroyed status if successful.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The numerical ID of the desired status.
    trim_user = 'trim_user_example' # str | When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. (optional)

    try:
        api_instance.statuses_destroy(id, trim_user=trim_user)
    except Exception as e:
        print("Exception when calling DefaultApi->statuses_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The numerical ID of the desired status. | 
 **trim_user** | **str**| When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statuses_home_timeline**
> statuses_home_timeline(count=count, max_id=max_id, since_id=since_id, trim_user=trim_user, exclude_replies=exclude_replies, contributor_details=contributor_details)



Returns a collection of the most recent Tweets and retweets posted by the authenticating user and the users they follow. The home timeline is central to how most users interact with the Twitter service.  Up to 800 Tweets are obtainable on the home timeline. It is more volatile for users that follow many users or follow users who tweet frequently.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    count = 56 # int | Specifies the number of records to retrieve. Must be less than or equal to 200. (optional)
    max_id = 56 # int | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)
    since_id = 56 # int | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional)
    trim_user = 'trim_user_example' # str | When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. (optional)
    exclude_replies = 'exclude_replies_example' # str | This parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count tweets — this is because the count parameter retrieves that many tweets before filtering out retweets and replies. (optional)
    contributor_details = 'contributor_details_example' # str | This parameter enhances the contributors element of the status response to include the screen_name of the contributor. By default only the user_id of the contributor is included. (optional)

    try:
        api_instance.statuses_home_timeline(count=count, max_id=max_id, since_id=since_id, trim_user=trim_user, exclude_replies=exclude_replies, contributor_details=contributor_details)
    except Exception as e:
        print("Exception when calling DefaultApi->statuses_home_timeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **int**| Specifies the number of records to retrieve. Must be less than or equal to 200. | [optional] 
 **max_id** | **int**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **since_id** | **int**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **trim_user** | **str**| When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. | [optional] 
 **exclude_replies** | **str**| This parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count tweets — this is because the count parameter retrieves that many tweets before filtering out retweets and replies. | [optional] 
 **contributor_details** | **str**| This parameter enhances the contributors element of the status response to include the screen_name of the contributor. By default only the user_id of the contributor is included. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statuses_mentions_timeline**
> statuses_mentions_timeline(count=count, since_id=since_id, max_id=max_id, trim_user=trim_user, contributor_details=contributor_details, include_entities=include_entities)



Returns the 20 most recent mentions (tweets containing a users's @screen_name) for the authenticating user.The timeline returned is the equivalent of the one seen when you view your mentions on twitter.com.This method can only return up to 800 statuses.This method will include retweets in the JSON response regardless of whether the include_rts parameter is set.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    count = 56 # int | Specifies the number of tweets to try and retrieve, up to a maximum of 200. The value of count is best thought of as a limit to the number of tweets to return because suspended or deleted content is removed after the count has been applied. We include retweets in the count, even if include_rts is not supplied. It is recommended you always send include_rts=1 when using this API method. (optional)
    since_id = 56 # int | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional)
    max_id = 56 # int | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)
    trim_user = 'trim_user_example' # str | When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. (optional)
    contributor_details = 'contributor_details_example' # str | This parameter enhances the contributors element of the status response to include the screen_name of the contributor. By default only the user_id of the contributor is included. (optional)
    include_entities = True # bool | The entities node will be disincluded when set to false. (optional)

    try:
        api_instance.statuses_mentions_timeline(count=count, since_id=since_id, max_id=max_id, trim_user=trim_user, contributor_details=contributor_details, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->statuses_mentions_timeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **int**| Specifies the number of tweets to try and retrieve, up to a maximum of 200. The value of count is best thought of as a limit to the number of tweets to return because suspended or deleted content is removed after the count has been applied. We include retweets in the count, even if include_rts is not supplied. It is recommended you always send include_rts&#x3D;1 when using this API method. | [optional] 
 **since_id** | **int**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **max_id** | **int**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **trim_user** | **str**| When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. | [optional] 
 **contributor_details** | **str**| This parameter enhances the contributors element of the status response to include the screen_name of the contributor. By default only the user_id of the contributor is included. | [optional] 
 **include_entities** | **bool**| The entities node will be disincluded when set to false. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statuses_oembed**
> statuses_oembed(maxwidth=maxwidth, hide_media=hide_media, hide_thread=hide_thread, omit_script=omit_script, align=align, related=related, lang=lang)



Returns information allowing the creation of an embedded representation of a Tweet on third party sites. See the oEmbed specification (http://oembed.com) for information about the response format. Either the id or url parameters must be specified in a request, it is not necessary to include both. While this endpoint allows a bit of customization for the final appearance of the embedded Tweet, be aware that the appearance of the rendered Tweet may change over time to be consistent with Twitter's Display Guidelines (https://dev.twitter.com/terms/display-guidelines). Do not rely on any class or id parameters to stay constant in the returned markup.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    maxwidth = 56 # int | The maximum width in pixels that the embed should be rendered at. This value is constrained to be between 250 and 550 pixels. Note that Twitter does not support the oEmbed maxheight parameter. Tweets are fundamentally text, and are therefore of unpredictable height that cannot be scaled like an image or video. Relatedly, the oEmbed response will not provide a value for height. Implementations that need consistent heights for Tweets should refer to the hide_thread and hide_media parameters below. (optional)
    hide_media = 'hide_media_example' # str | Specifies whether the embedded Tweet should automatically expand images which were uploaded via POST statuses/update_with_media. When set to either true, t or 1 images will not be expanded. Defaults to false. (optional)
    hide_thread = 'hide_thread_example' # str | Specifies whether the embedded Tweet should automatically show the original message in the case that the embedded Tweet is a reply. When set to either true, t or 1 the original Tweet will not be shown. Defaults to false. (optional)
    omit_script = 'omit_script_example' # str | Specifies whether the embedded Tweet HTML should include a 'script' element pointing to widgets.js. In cases where a page already includes widgets.js, setting this value to true will prevent a redundant script element from being included. When set to either true, t or 1 the 'script'element will not be included in the embed HTML, meaning that pages must include a reference to widgets.js manually. Defaults to false. (optional)
    align = 'align_example' # str | Specifies whether the embedded Tweet should be left aligned, right aligned, or centered in the page. Valid values are left, right, center, and none. Defaults to none, meaning no alignment styles are specified for the Tweet. (optional)
    related = 'related_example' # str | A value for the TWT related parameter, as described in Web Intents (https://dev.twitter.com/docs/intents). This value will be forwarded to all Web Intents calls. Example values: twitterapi, twittermedia, twitter. (optional)
    lang = 'lang_example' # str | Language code for the rendered embed. This will affect the text and localization of the rendered HTML. Example value: fr (optional)

    try:
        api_instance.statuses_oembed(maxwidth=maxwidth, hide_media=hide_media, hide_thread=hide_thread, omit_script=omit_script, align=align, related=related, lang=lang)
    except Exception as e:
        print("Exception when calling DefaultApi->statuses_oembed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maxwidth** | **int**| The maximum width in pixels that the embed should be rendered at. This value is constrained to be between 250 and 550 pixels. Note that Twitter does not support the oEmbed maxheight parameter. Tweets are fundamentally text, and are therefore of unpredictable height that cannot be scaled like an image or video. Relatedly, the oEmbed response will not provide a value for height. Implementations that need consistent heights for Tweets should refer to the hide_thread and hide_media parameters below. | [optional] 
 **hide_media** | **str**| Specifies whether the embedded Tweet should automatically expand images which were uploaded via POST statuses/update_with_media. When set to either true, t or 1 images will not be expanded. Defaults to false. | [optional] 
 **hide_thread** | **str**| Specifies whether the embedded Tweet should automatically show the original message in the case that the embedded Tweet is a reply. When set to either true, t or 1 the original Tweet will not be shown. Defaults to false. | [optional] 
 **omit_script** | **str**| Specifies whether the embedded Tweet HTML should include a &#39;script&#39; element pointing to widgets.js. In cases where a page already includes widgets.js, setting this value to true will prevent a redundant script element from being included. When set to either true, t or 1 the &#39;script&#39;element will not be included in the embed HTML, meaning that pages must include a reference to widgets.js manually. Defaults to false. | [optional] 
 **align** | **str**| Specifies whether the embedded Tweet should be left aligned, right aligned, or centered in the page. Valid values are left, right, center, and none. Defaults to none, meaning no alignment styles are specified for the Tweet. | [optional] 
 **related** | **str**| A value for the TWT related parameter, as described in Web Intents (https://dev.twitter.com/docs/intents). This value will be forwarded to all Web Intents calls. Example values: twitterapi, twittermedia, twitter. | [optional] 
 **lang** | **str**| Language code for the rendered embed. This will affect the text and localization of the rendered HTML. Example value: fr | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statuses_retweets**
> statuses_retweets(id, count=count, trim_user=trim_user)



Returns up to 100 of the first retweets of a given tweet.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The numerical ID of the desired status.
    count = 'count_example' # str | Specifies the number of records to retrieve. Must be less than or equal to 100. (optional)
    trim_user = 'trim_user_example' # str | When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. (optional)

    try:
        api_instance.statuses_retweets(id, count=count, trim_user=trim_user)
    except Exception as e:
        print("Exception when calling DefaultApi->statuses_retweets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The numerical ID of the desired status. | 
 **count** | **str**| Specifies the number of records to retrieve. Must be less than or equal to 100. | [optional] 
 **trim_user** | **str**| When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statuses_show**
> statuses_show(id, trim_user=trim_user, include_my_retweet=include_my_retweet, include_entities=include_entities)



Returns a single status, specified by the id parameter below. The status's author will be returned inline.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The numerical ID of the desired status.
    trim_user = 'trim_user_example' # str | When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. (optional)
    include_my_retweet = 'include_my_retweet_example' # str | When set to either true, t or 1, any Tweets returned that have been retweeted by the authenticating user will include an additional current_user_retweet node, containing the ID of the source status for the retweet. (optional)
    include_entities = 'include_entities_example' # str | The entities node will be disincluded when set to false. (optional)

    try:
        api_instance.statuses_show(id, trim_user=trim_user, include_my_retweet=include_my_retweet, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->statuses_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The numerical ID of the desired status. | 
 **trim_user** | **str**| When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. | [optional] 
 **include_my_retweet** | **str**| When set to either true, t or 1, any Tweets returned that have been retweeted by the authenticating user will include an additional current_user_retweet node, containing the ID of the source status for the retweet. | [optional] 
 **include_entities** | **str**| The entities node will be disincluded when set to false. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statuses_update**
> statuses_update(status, in_reply_to_status_id=in_reply_to_status_id, lat=lat, long=long, place_id=place_id, display_coordinates=display_coordinates, trim_user=trim_user)



Updates the authenticating user's status, also known as tweeting. To upload an image to accompany the tweet, use POST statuses/update_with_media (https://dev.twitter.com/docs/api/1/post/statuses/update_with_media). For each update attempt, the update text is compared with the authenticating user's recent tweets. Any attempt that would result in duplication will be blocked, resulting in a 403 error. Therefore, a user cannot submit the same status twice in a row. While not rate limited by the API a user is limited in the number of tweets they can create at a time. If the number of updates posted by the user reaches the current allowed limit this method will return an HTTP 403 error.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    status = 'Posting from @apigee's API test console. It's like a command line for the Twitter API! #apitools' # str | The text of your status update, typically up to 140 characters. URL encode as necessary. t.co link short-url wrapping (https://dev.twitter.com/docs/tco-link-wrapper/faq) may effect character counts. (default to 'Posting from @apigee's API test console. It's like a command line for the Twitter API! #apitools')
    in_reply_to_status_id = 'in_reply_to_status_id_example' # str | The ID of an existing status that the update is in reply to. Note: This parameter will be ignored unless the author of the tweet this parameter references is mentioned within the status text. Therefore, you must include @username, where username is the author of the referenced tweet, within the update. (optional)
    lat = '37.426363' # str | The latitude of the location this tweet refers to. This parameter will be ignored unless it is inside the range -90.0 to +90.0 (North is positive) inclusive. It will also be ignored if there isn't a corresponding long parameter. (optional) (default to '37.426363')
    long = '-122.141114' # str | The longitude of the location this tweet refers to. The valid ranges for longitude is -180.0 to +180.0 (East is positive) inclusive. This parameter will be ignored if outside that range, if it is not a number, if geo_enabled is disabled, or if there not a corresponding lat parameter. (optional) (default to '-122.141114')
    place_id = 'place_id_example' # str | A place in the world. These IDs can be retrieved from GET geo/reverse_geocode (https://dev.twitter.com/docs/api/1/get/geo/reverse_geocode). (optional)
    display_coordinates = false # str | Whether or not to put a pin on the exact coordinates a tweet has been sent from. (optional) (default to false)
    trim_user = 'trim_user_example' # str | When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. (optional)

    try:
        api_instance.statuses_update(status, in_reply_to_status_id=in_reply_to_status_id, lat=lat, long=long, place_id=place_id, display_coordinates=display_coordinates, trim_user=trim_user)
    except Exception as e:
        print("Exception when calling DefaultApi->statuses_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**| The text of your status update, typically up to 140 characters. URL encode as necessary. t.co link short-url wrapping (https://dev.twitter.com/docs/tco-link-wrapper/faq) may effect character counts. | [default to &#39;Posting from @apigee&#39;s API test console. It&#39;s like a command line for the Twitter API! #apitools&#39;]
 **in_reply_to_status_id** | **str**| The ID of an existing status that the update is in reply to. Note: This parameter will be ignored unless the author of the tweet this parameter references is mentioned within the status text. Therefore, you must include @username, where username is the author of the referenced tweet, within the update. | [optional] 
 **lat** | **str**| The latitude of the location this tweet refers to. This parameter will be ignored unless it is inside the range -90.0 to +90.0 (North is positive) inclusive. It will also be ignored if there isn&#39;t a corresponding long parameter. | [optional] [default to &#39;37.426363&#39;]
 **long** | **str**| The longitude of the location this tweet refers to. The valid ranges for longitude is -180.0 to +180.0 (East is positive) inclusive. This parameter will be ignored if outside that range, if it is not a number, if geo_enabled is disabled, or if there not a corresponding lat parameter. | [optional] [default to &#39;-122.141114&#39;]
 **place_id** | **str**| A place in the world. These IDs can be retrieved from GET geo/reverse_geocode (https://dev.twitter.com/docs/api/1/get/geo/reverse_geocode). | [optional] 
 **display_coordinates** | **str**| Whether or not to put a pin on the exact coordinates a tweet has been sent from. | [optional] [default to false]
 **trim_user** | **str**| When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statuses_update_with_media**
> statuses_update_with_media(status, media, content_type, possibly_sensitive=possibly_sensitive, in_reply_to_status_id=in_reply_to_status_id, lat=lat, long=long, place_id=place_id, display_coordinates=display_coordinates)



Updates the authenticating user's status and attaches media for upload. Unlike POST statuses/update (https://dev.twitter.com/docs/api/1.1/post/statuses/update), this method expects raw multipart data. Your POST request's Content-Type should be set to multipart/form-data with the media[] parameter. The Tweet text will be rewritten to include the media URL(s), which will reduce the number of characters allowed in the Tweet text. If the URL(s) cannot be appended without text truncation, the tweet will be rejected and this method will return an HTTP 403 error. Important: Make sure that you're using upload.twitter.com as your host while posting statuses with media. It is strongly recommended to use SSL with this method.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    status = 'status_example' # str | The text of your status update. URL encode as necessary. t.co link wrapping (https://dev.twitter.com/docs/tco-link-wrapper/faq) may affect character counts if the post contains URLs. You must additionally account for the characters_reserved_per_media per uploaded media, additionally accounting for space characters in between finalized URLs. Note: Request the GET help/configuration (https://dev.twitter.com/docs/api/1.1/get/help/configuration) endpoint to get the current characters_reserved_per_media and max_media_per_upload values.
    media = 'media_example' # str | Up to max_media_per_upload files may be specified in the request, each named media[]. Supported image formats are PNG, JPG and GIF. Animated GIFs are not supported. Note: Request the GET help/configuration (https://dev.twitter.com/docs/api/1.1/get/help/configuration) endpoint to get the current max_media_per_upload and photo_size_limit values.
    content_type = 'multipart/form-data' # str | Content type. (default to 'multipart/form-data')
    possibly_sensitive = 'possibly_sensitive_example' # str | Set to true for content which may not be suitable for every audience. (optional)
    in_reply_to_status_id = 'in_reply_to_status_id_example' # str | The ID of an existing status that the update is in reply to. Note: This parameter will be ignored unless the author of the tweet this parameter references is mentioned within the status text. Therefore, you must include @username, where username is the author of the referenced tweet, within the update. (optional)
    lat = 'lat_example' # str | The latitude of the location this tweet refers to. This parameter will be ignored unless it is inside the range -90.0 to +90.0 (North is positive) inclusive. It will also be ignored if there isn't a corresponding long parameter. Example value: 37.7821120598956. (optional)
    long = 'long_example' # str | The longitude of the location this tweet refers to. The valid ranges for longitude is -180.0 to +180.0 (East is positive) inclusive. This parameter will be ignored if outside that range, not a number, geo_enabled is disabled, or if there not a corresponding lat parameter. Example value: -122.400612831116. (optional)
    place_id = 'place_id_example' # str | A place in the world identified by a Twitter place ID. Place IDs can be retrieved from geo/reverse_geocode. (optional)
    display_coordinates = 'display_coordinates_example' # str | Whether or not to put a pin on the exact coordinates a tweet has been sent from. (optional)

    try:
        api_instance.statuses_update_with_media(status, media, content_type, possibly_sensitive=possibly_sensitive, in_reply_to_status_id=in_reply_to_status_id, lat=lat, long=long, place_id=place_id, display_coordinates=display_coordinates)
    except Exception as e:
        print("Exception when calling DefaultApi->statuses_update_with_media: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**| The text of your status update. URL encode as necessary. t.co link wrapping (https://dev.twitter.com/docs/tco-link-wrapper/faq) may affect character counts if the post contains URLs. You must additionally account for the characters_reserved_per_media per uploaded media, additionally accounting for space characters in between finalized URLs. Note: Request the GET help/configuration (https://dev.twitter.com/docs/api/1.1/get/help/configuration) endpoint to get the current characters_reserved_per_media and max_media_per_upload values. | 
 **media** | **str**| Up to max_media_per_upload files may be specified in the request, each named media[]. Supported image formats are PNG, JPG and GIF. Animated GIFs are not supported. Note: Request the GET help/configuration (https://dev.twitter.com/docs/api/1.1/get/help/configuration) endpoint to get the current max_media_per_upload and photo_size_limit values. | 
 **content_type** | **str**| Content type. | [default to &#39;multipart/form-data&#39;]
 **possibly_sensitive** | **str**| Set to true for content which may not be suitable for every audience. | [optional] 
 **in_reply_to_status_id** | **str**| The ID of an existing status that the update is in reply to. Note: This parameter will be ignored unless the author of the tweet this parameter references is mentioned within the status text. Therefore, you must include @username, where username is the author of the referenced tweet, within the update. | [optional] 
 **lat** | **str**| The latitude of the location this tweet refers to. This parameter will be ignored unless it is inside the range -90.0 to +90.0 (North is positive) inclusive. It will also be ignored if there isn&#39;t a corresponding long parameter. Example value: 37.7821120598956. | [optional] 
 **long** | **str**| The longitude of the location this tweet refers to. The valid ranges for longitude is -180.0 to +180.0 (East is positive) inclusive. This parameter will be ignored if outside that range, not a number, geo_enabled is disabled, or if there not a corresponding lat parameter. Example value: -122.400612831116. | [optional] 
 **place_id** | **str**| A place in the world identified by a Twitter place ID. Place IDs can be retrieved from geo/reverse_geocode. | [optional] 
 **display_coordinates** | **str**| Whether or not to put a pin on the exact coordinates a tweet has been sent from. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statuses_user_timeline**
> statuses_user_timeline(count=count, since_id=since_id, max_id=max_id, trim_user=trim_user, exclude_replies=exclude_replies, contributor_details=contributor_details, include_rts=include_rts)



Returns the 20 most recent statuses posted by the authenticating user. It is also possible to request another user's timeline by using the screen_name or user_id parameter. The other users timeline will only be visible if they are not protected, or if the authenticating user's follow request was accepted by the protected user. The timeline returned is the equivalent of the one seen when you view a user's profile on twitter.com. This method can only return up to 3,200 of a user's most recent statuses. Native retweets of other statuses by the user is included in this total, regardless of whether include_rts is specified when requesting this resource. This method will not include retweets in the XML and JSON responses unless the include_rts parameter is set. The RSS and Atom responses will always include retweets as statuses prefixed with RT, regardless of provided parameters. Always specify either an user_id or screen_name when requesting a user timeline.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    count = 56 # int | Specifies the number of tweets to try and retrieve, up to a maximum of 200. The value of count is best thought of as a limit to the number of tweets to return because suspended or deleted content is removed after the count has been applied. We include retweets in the count, even if include_rts is not supplied. It is recommended you always send include_rts=1 when using this API method. (optional)
    since_id = 56 # int | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional)
    max_id = 56 # int | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)
    trim_user = 'trim_user_example' # str | When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. (optional)
    exclude_replies = True # bool | This parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count tweets — this is because the count parameter retrieves that many tweets before filtering out retweets and replies. This parameter is only supported for JSON and XML responses. (optional)
    contributor_details = True # bool | This parameter enhances the contributors element of the status response to include the screen_name of the contributor. By default only the user_id of the contributor is included. (optional)
    include_rts = True # bool | When set to false, the timeline will strip any native retweets (though they will still count toward both the maximal length of the timeline and the slice selected by the count parameter). Note: If you're using the trim_user parameter in conjunction with include_rts, the retweets will still contain a full user object. (optional)

    try:
        api_instance.statuses_user_timeline(count=count, since_id=since_id, max_id=max_id, trim_user=trim_user, exclude_replies=exclude_replies, contributor_details=contributor_details, include_rts=include_rts)
    except Exception as e:
        print("Exception when calling DefaultApi->statuses_user_timeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **int**| Specifies the number of tweets to try and retrieve, up to a maximum of 200. The value of count is best thought of as a limit to the number of tweets to return because suspended or deleted content is removed after the count has been applied. We include retweets in the count, even if include_rts is not supplied. It is recommended you always send include_rts&#x3D;1 when using this API method. | [optional] 
 **since_id** | **int**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **max_id** | **int**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **trim_user** | **str**| When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. | [optional] 
 **exclude_replies** | **bool**| This parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count tweets — this is because the count parameter retrieves that many tweets before filtering out retweets and replies. This parameter is only supported for JSON and XML responses. | [optional] 
 **contributor_details** | **bool**| This parameter enhances the contributors element of the status response to include the screen_name of the contributor. By default only the user_id of the contributor is included. | [optional] 
 **include_rts** | **bool**| When set to false, the timeline will strip any native retweets (though they will still count toward both the maximal length of the timeline and the slice selected by the count parameter). Note: If you&#39;re using the trim_user parameter in conjunction with include_rts, the retweets will still contain a full user object. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statusesretweetid**
> statusesretweetid(id, trim_user=trim_user)



Retweets a tweet. Returns the original tweet with retweet details embedded.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The numerical ID of the desired status.
    trim_user = 'trim_user_example' # str | When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. (optional)

    try:
        api_instance.statusesretweetid(id, trim_user=trim_user)
    except Exception as e:
        print("Exception when calling DefaultApi->statusesretweetid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The numerical ID of the desired status. | 
 **trim_user** | **str**| When set to either true, t or 1, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trends_available**
> trends_available()



Returns the locations that Twitter has trending topic information for.  The response is an array of \"locations\" that encode the location's WOEID and some other human-readable information such as a canonical name and country the location belongs in.  A WOEID is a Yahoo! Where On Earth ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.trends_available()
    except Exception as e:
        print("Exception when calling DefaultApi->trends_available: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trends_closest**
> trends_closest(lat=lat, long=long)



Returns the locations that Twitter has trending topic information for, closest to a specified location.  The response is an array of \"locations\" that encode the location's WOEID and some other human-readable information such as a canonical name and country the location belongs in.  A WOEID is a Yahoo! Where On Earth ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lat = 'lat_example' # str | If provided with a long parameter the available trend locations will be sorted by distance, nearest to furthest, to the co-ordinate pair. The valid ranges for longitude is -180.0 to +180.0 (West is negative, East is positive) inclusive.  Example Values: 37.781157 (optional)
    long = 'long_example' # str | If provided with a lat parameter the available trend locations will be sorted by distance, nearest to furthest, to the co-ordinate pair. The valid ranges for longitude is -180.0 to +180.0 (West is negative, East is positive) inclusive.  Example Values: -122.400612831116 (optional)

    try:
        api_instance.trends_closest(lat=lat, long=long)
    except Exception as e:
        print("Exception when calling DefaultApi->trends_closest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **str**| If provided with a long parameter the available trend locations will be sorted by distance, nearest to furthest, to the co-ordinate pair. The valid ranges for longitude is -180.0 to +180.0 (West is negative, East is positive) inclusive.  Example Values: 37.781157 | [optional] 
 **long** | **str**| If provided with a lat parameter the available trend locations will be sorted by distance, nearest to furthest, to the co-ordinate pair. The valid ranges for longitude is -180.0 to +180.0 (West is negative, East is positive) inclusive.  Example Values: -122.400612831116 | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trends_place**
> trends_place(id, exclude=exclude)



Returns the top 10 trending topics for a specific WOEID, if trending information is available for it.  The response is an array of \"trend\" objects that encode the name of the trending topic, the query parameter that can be used to search for the topic on Twitter Search, and the Twitter Search URL.  This information is cached for 5 minutes. Requesting more frequently than that will not return any more data, and will count against your rate limit usage.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The Yahoo! Where On Earth ID of the location to return trending information for. Global information is available by using 1 as the WOEID.
    exclude = 'exclude_example' # str | Setting this equal to hashtags will remove all hashtags from the trends list. (optional)

    try:
        api_instance.trends_place(id, exclude=exclude)
    except Exception as e:
        print("Exception when calling DefaultApi->trends_place: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Yahoo! Where On Earth ID of the location to return trending information for. Global information is available by using 1 as the WOEID. | 
 **exclude** | **str**| Setting this equal to hashtags will remove all hashtags from the trends list. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_contributees**
> users_contributees(include_entities=include_entities, skip_status=skip_status)



Returns a collection of users that the specified user can contribute to.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    include_entities = 'include_entities_example' # str | The entities node will be disincluded when set to false. Example Values: false (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.users_contributees(include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->users_contributees: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_entities** | **str**| The entities node will be disincluded when set to false. Example Values: false | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_contributors**
> users_contributors(include_entities=include_entities, skip_status=skip_status)



Returns a collection of users who can contribute to the specified account.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    include_entities = 'include_entities_example' # str | The entities node will be disincluded when set to false. Example Values: false (optional)
    skip_status = 'skip_status_example' # str | When set to either true, t or 1 statuses will not be included in the returned user objects. (optional)

    try:
        api_instance.users_contributors(include_entities=include_entities, skip_status=skip_status)
    except Exception as e:
        print("Exception when calling DefaultApi->users_contributors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_entities** | **str**| The entities node will be disincluded when set to false. Example Values: false | [optional] 
 **skip_status** | **str**| When set to either true, t or 1 statuses will not be included in the returned user objects. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_lookup**
> users_lookup(screen_name=screen_name, user_id=user_id, include_entities=include_entities)



Returns fully-hydrated user objects for up to 100 users per request, as specified by comma-separated values passed to the user_id and/or screen_name parameters.  This method is especially useful when used in conjunction with collections of user IDs returned from GET friends/ids and GET followers/ids.  GET users/show is used to retrieve a single user object.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    screen_name = 'screen_name_example' # str | A comma separated list of screen names, up to 100 are allowed in a single request. You are strongly encouraged to use a POST for larger (up to 100 screen names) requests.  Example Values: twitterapi,twitter (optional)
    user_id = 'user_id_example' # str | A comma separated list of user IDs, up to 100 are allowed in a single request. You are strongly encouraged to use a POST for larger requests.  Example Values: 783214,6253282 (optional)
    include_entities = 'include_entities_example' # str | The entities node that may appear within embedded statuses will be disincluded when set to false.  Example Values: false (optional)

    try:
        api_instance.users_lookup(screen_name=screen_name, user_id=user_id, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->users_lookup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **screen_name** | **str**| A comma separated list of screen names, up to 100 are allowed in a single request. You are strongly encouraged to use a POST for larger (up to 100 screen names) requests.  Example Values: twitterapi,twitter | [optional] 
 **user_id** | **str**| A comma separated list of user IDs, up to 100 are allowed in a single request. You are strongly encouraged to use a POST for larger requests.  Example Values: 783214,6253282 | [optional] 
 **include_entities** | **str**| The entities node that may appear within embedded statuses will be disincluded when set to false.  Example Values: false | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_report_spam**
> users_report_spam()



The user specified in the id is blocked by the authenticated user and reported as a spammer.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.users_report_spam()
    except Exception as e:
        print("Exception when calling DefaultApi->users_report_spam: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_search**
> users_search(q, page=page, count=count, include_entities=include_entities)



Provides a simple, relevance-based search interface to public user accounts on Twitter. Try querying by topical interest, full name, company name, location, or other criteria. Exact match searches are not supported.  Only the first 1,000 matching results are available.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    q = 'q_example' # str | The search query to run against people search.  Example Values: Twitter%20API
    page = 'page_example' # str | Specifies the page of results to retrieve.  Example Values: 3 (optional)
    count = 'count_example' # str | The number of potential user results to retrieve per page. This value has a maximum of 20.  Example Values: 5 (optional)
    include_entities = 'include_entities_example' # str | The entities node will be disincluded when set to false.  Example Values: false (optional)

    try:
        api_instance.users_search(q, page=page, count=count, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->users_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| The search query to run against people search.  Example Values: Twitter%20API | 
 **page** | **str**| Specifies the page of results to retrieve.  Example Values: 3 | [optional] 
 **count** | **str**| The number of potential user results to retrieve per page. This value has a maximum of 20.  Example Values: 5 | [optional] 
 **include_entities** | **str**| The entities node will be disincluded when set to false.  Example Values: false | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_show**
> users_show(screen_name, user_id, include_entities=include_entities)



Returns a variety of information about the user specified by the required user_id or screen_name parameter. The author's most recent Tweet will be returned inline when possible.  GET users/lookup is used to retrieve a bulk collection of user objects.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    screen_name = 'screen_name_example' # str | The screen name of the user for whom to return results for. Either a id or screen_name is required for this method.  Example Values: noradio
    user_id = 'user_id_example' # str | The ID of the user for whom to return results for. Either an id or screen_name is required for this method.  Example Values: 12345
    include_entities = 'include_entities_example' # str | The entities node will be disincluded when set to false.  Example Values: false (optional)

    try:
        api_instance.users_show(screen_name, user_id, include_entities=include_entities)
    except Exception as e:
        print("Exception when calling DefaultApi->users_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **screen_name** | **str**| The screen name of the user for whom to return results for. Either a id or screen_name is required for this method.  Example Values: noradio | 
 **user_id** | **str**| The ID of the user for whom to return results for. Either an id or screen_name is required for this method.  Example Values: 12345 | 
 **include_entities** | **str**| The entities node will be disincluded when set to false.  Example Values: false | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_suggestions**
> users_suggestions(lang=lang)



Access to Twitter's suggested user list. This returns the list of suggested user categories. The category can be used in GET users/suggestions/:slug to get the users in that category.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lang = 'lang_example' # str | Restricts the suggested categories to the requested language. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by the GET help/languages API request. Unsupported language codes will receive English (en) results. If you use lang in this request, ensure you also include it when requesting the GET users/suggestions/:slug list. (optional)

    try:
        api_instance.users_suggestions(lang=lang)
    except Exception as e:
        print("Exception when calling DefaultApi->users_suggestions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lang** | **str**| Restricts the suggested categories to the requested language. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by the GET help/languages API request. Unsupported language codes will receive English (en) results. If you use lang in this request, ensure you also include it when requesting the GET users/suggestions/:slug list. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_suggestions_slug**
> users_suggestions_slug(slug, lang=lang)



Access the users in a given category of the Twitter suggested user list. It is recommended that applications cache this data for no more than one hour.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    slug = 'slug_example' # str | The short name of list or a category  Example Values: twitter
    lang = 'lang_example' # str | Restricts the suggested categories to the requested language. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by the GET help/languages API request. Unsupported language codes will receive English (en) results. If you use lang in this request, ensure you also include it when requesting the GET users/suggestions/:slug list. (optional)

    try:
        api_instance.users_suggestions_slug(slug, lang=lang)
    except Exception as e:
        print("Exception when calling DefaultApi->users_suggestions_slug: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **str**| The short name of list or a category  Example Values: twitter | 
 **lang** | **str**| Restricts the suggested categories to the requested language. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by the GET help/languages API request. Unsupported language codes will receive English (en) results. If you use lang in this request, ensure you also include it when requesting the GET users/suggestions/:slug list. | [optional] 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_suggestionsslugmembers**
> users_suggestionsslugmembers(slug)



Access the users in a given category of the Twitter suggested user list and return their most recent status if they are not a protected user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com/1.1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    slug = 'slug_example' # str | The short name of list or a category  Example Values: twitter

    try:
        api_instance.users_suggestionsslugmembers(slug)
    except Exception as e:
        print("Exception when calling DefaultApi->users_suggestionsslugmembers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **str**| The short name of list or a category  Example Values: twitter | 

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
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

