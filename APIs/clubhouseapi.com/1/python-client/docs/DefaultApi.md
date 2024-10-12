# openapi_client.DefaultApi

All URIs are relative to *https://www.clubhouseapi.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**call_phone_number_auth_post**](DefaultApi.md#call_phone_number_auth_post) | **POST** /call_phone_number_auth | Call phone number auth.
[**check_for_update_get**](DefaultApi.md#check_for_update_get) | **GET** /check_for_update | Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
[**check_waitlist_status_post**](DefaultApi.md#check_waitlist_status_post) | **POST** /check_waitlist_status | checks waitlist status.
[**complete_phone_number_auth_post**](DefaultApi.md#complete_phone_number_auth_post) | **POST** /complete_phone_number_auth | Call phone number auth.
[**create_channel_post**](DefaultApi.md#create_channel_post) | **POST** /create_channel | creates a channel
[**follow_post**](DefaultApi.md#follow_post) | **POST** /follow | follows a user
[**get_actionable_notifications_get**](DefaultApi.md#get_actionable_notifications_get) | **GET** /get_actionable_notifications | get actionable notifications (the bell again)
[**get_all_topics_get**](DefaultApi.md#get_all_topics_get) | **GET** /get_all_topics | gets all topics.
[**get_channels_get**](DefaultApi.md#get_channels_get) | **GET** /get_channels | get all channels
[**get_club_post**](DefaultApi.md#get_club_post) | **POST** /get_club | gets club by id
[**get_clubs_for_topic_post**](DefaultApi.md#get_clubs_for_topic_post) | **POST** /get_clubs_for_topic | looks up clubs by topic.
[**get_create_channel_targets_post**](DefaultApi.md#get_create_channel_targets_post) | **POST** /get_create_channel_targets | is fetched when you tap Create Room
[**get_events_get**](DefaultApi.md#get_events_get) | **GET** /get_events | the Upcoming for You page
[**get_following_post**](DefaultApi.md#get_following_post) | **POST** /get_following | get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
[**get_notifications_get**](DefaultApi.md#get_notifications_get) | **GET** /get_notifications | get notifications (the bell icon)
[**get_online_friends_post**](DefaultApi.md#get_online_friends_post) | **POST** /get_online_friends | gets online friends on the app homepage.
[**get_profile_post**](DefaultApi.md#get_profile_post) | **POST** /get_profile | looks up user profile by ID.
[**get_release_notes_post**](DefaultApi.md#get_release_notes_post) | **POST** /get_release_notes | gets release notes.
[**get_settings_get**](DefaultApi.md#get_settings_get) | **GET** /get_settings | get notification settings
[**get_suggested_club_invites_post**](DefaultApi.md#get_suggested_club_invites_post) | **POST** /get_suggested_club_invites | find users to invite to clubs based on phone number
[**get_suggested_follows_all_get**](DefaultApi.md#get_suggested_follows_all_get) | **GET** /get_suggested_follows_all | gets suggested follows during signup
[**get_suggested_follows_friends_only_post**](DefaultApi.md#get_suggested_follows_friends_only_post) | **POST** /get_suggested_follows_friends_only | find people to follow by uploading contacts during signup
[**get_suggested_follows_similar_post**](DefaultApi.md#get_suggested_follows_similar_post) | **POST** /get_suggested_follows_similar | find similar users. (The Sparkles button on Clubhouse&#39;s profile page)
[**get_suggested_invites_post**](DefaultApi.md#get_suggested_invites_post) | **POST** /get_suggested_invites | find users to invite based on phone number.
[**get_suggested_speakers_post**](DefaultApi.md#get_suggested_speakers_post) | **POST** /get_suggested_speakers | gets suggested users when you start a private room
[**get_topic_post**](DefaultApi.md#get_topic_post) | **POST** /get_topic | looks up topic by ID.
[**get_users_for_topic_get**](DefaultApi.md#get_users_for_topic_get) | **GET** /get_users_for_topic | looks up users by topic.
[**get_welcome_channel_get**](DefaultApi.md#get_welcome_channel_get) | **GET** /get_welcome_channel | called during signup
[**invite_from_waitlist_post**](DefaultApi.md#invite_from_waitlist_post) | **POST** /invite_from_waitlist | wave to another user on the waitlist to give them access
[**invite_to_app_post**](DefaultApi.md#invite_to_app_post) | **POST** /invite_to_app | invite a user to the app, using one of your invites
[**join_channel_post**](DefaultApi.md#join_channel_post) | **POST** /join_channel | join a channel.
[**leave_channel_post**](DefaultApi.md#leave_channel_post) | **POST** /leave_channel | leave a channel.
[**me_post**](DefaultApi.md#me_post) | **POST** /me | gets user
[**record_action_trails_post**](DefaultApi.md#record_action_trails_post) | **POST** /record_action_trails | analytics
[**refresh_token_post**](DefaultApi.md#refresh_token_post) | **POST** /refresh_token | gets an access_token from a refresh_token.
[**resend_phone_number_auth_post**](DefaultApi.md#resend_phone_number_auth_post) | **POST** /resend_phone_number_auth | Resend phone number auth.
[**search_clubs_post**](DefaultApi.md#search_clubs_post) | **POST** /search_clubs | search clubs.
[**search_users_post**](DefaultApi.md#search_users_post) | **POST** /search_users | search for users
[**start_phone_number_auth_post**](DefaultApi.md#start_phone_number_auth_post) | **POST** /start_phone_number_auth | Starts phone number auth.
[**update_notifications_post**](DefaultApi.md#update_notifications_post) | **POST** /update_notifications | updates notification during signup.
[**update_username_post**](DefaultApi.md#update_username_post) | **POST** /update_username | edits username.


# **call_phone_number_auth_post**
> call_phone_number_auth_post(body=body)

Call phone number auth.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {} # object |  (optional)

    try:
        # Call phone number auth.
        api_instance.call_phone_number_auth_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->call_phone_number_auth_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **check_for_update_get**
> check_for_update_get(is_testflight=is_testflight)

Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    is_testflight = 1 # int |  (optional)

    try:
        # Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
        api_instance.check_for_update_get(is_testflight=is_testflight)
    except Exception as e:
        print("Exception when calling DefaultApi->check_for_update_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **is_testflight** | **int**|  | [optional] 

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
**200** | successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **check_waitlist_status_post**
> check_waitlist_status_post()

checks waitlist status.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # checks waitlist status.
        api_instance.check_waitlist_status_post()
    except Exception as e:
        print("Exception when calling DefaultApi->check_waitlist_status_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | got waitlist status |  -  |
**401** | authorization not provided |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **complete_phone_number_auth_post**
> complete_phone_number_auth_post(body=body)

Call phone number auth.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"phone_number":"+1234567890","verification_code":"1234"} # object |  (optional)

    try:
        # Call phone number auth.
        api_instance.complete_phone_number_auth_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->complete_phone_number_auth_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_channel_post**
> create_channel_post(body=body)

creates a channel

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"club_id":null,"event_id":null,"is_private":false,"is_social_mode":false,"topic":null,"user_ids":[]} # object |  (optional)

    try:
        # creates a channel
        api_instance.create_channel_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->create_channel_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | waitlisted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **follow_post**
> follow_post(body=body)

follows a user

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"user_id":1234} # object |  (optional)

    try:
        # follows a user
        api_instance.follow_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->follow_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | waitlisted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actionable_notifications_get**
> get_actionable_notifications_get()

get actionable notifications (the bell again)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # get actionable notifications (the bell again)
        api_instance.get_actionable_notifications_get()
    except Exception as e:
        print("Exception when calling DefaultApi->get_actionable_notifications_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Returns a list of actionable notifications. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_topics_get**
> get_all_topics_get()

gets all topics.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # gets all topics.
        api_instance.get_all_topics_get()
    except Exception as e:
        print("Exception when calling DefaultApi->get_all_topics_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | a list of topics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_channels_get**
> get_channels_get()

get all channels

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # get all channels
        api_instance.get_channels_get()
    except Exception as e:
        print("Exception when calling DefaultApi->get_channels_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | list of channels |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_club_post**
> get_club_post(body=body)

gets club by id

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"club_id":1234} # object |  (optional)

    try:
        # gets club by id
        api_instance.get_club_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_club_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns club object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_clubs_for_topic_post**
> get_clubs_for_topic_post(body=body)

looks up clubs by topic.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"topic_id":140} # object |  (optional)

    try:
        # looks up clubs by topic.
        api_instance.get_clubs_for_topic_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_clubs_for_topic_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns list of clubs with pagination |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_create_channel_targets_post**
> get_create_channel_targets_post(body=body)

is fetched when you tap Create Room

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {} # object |  (optional)

    try:
        # is fetched when you tap Create Room
        api_instance.get_create_channel_targets_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_create_channel_targets_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | waitlisted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_events_get**
> get_events_get(is_filtered=is_filtered, page_size=page_size, page=page)

the Upcoming for You page

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    is_filtered = true # bool |  (optional)
    page_size = 25 # int |  (optional)
    page = 1 # int |  (optional)

    try:
        # the Upcoming for You page
        api_instance.get_events_get(is_filtered=is_filtered, page_size=page_size, page=page)
    except Exception as e:
        print("Exception when calling DefaultApi->get_events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **is_filtered** | **bool**|  | [optional] 
 **page_size** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 

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
**200** | a list of events |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_following_post**
> get_following_post(body=body)

get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"user_id":1234} # object |  (optional)

    try:
        # get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
        api_instance.get_following_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_following_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns list of users and clubs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notifications_get**
> get_notifications_get(page_size=page_size, page=page)

get notifications (the bell icon)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    page_size = 20 # int |  (optional)
    page = 1 # int |  (optional)

    try:
        # get notifications (the bell icon)
        api_instance.get_notifications_get(page_size=page_size, page=page)
    except Exception as e:
        print("Exception when calling DefaultApi->get_notifications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 

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
**200** | Returns a list of notifications. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_online_friends_post**
> get_online_friends_post(body=body)

gets online friends on the app homepage.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {} # object |  (optional)

    try:
        # gets online friends on the app homepage.
        api_instance.get_online_friends_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_online_friends_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of online clubs and users. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_profile_post**
> get_profile_post(body=body)

looks up user profile by ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"user_id":4075733} # object |  (optional)

    try:
        # looks up user profile by ID.
        api_instance.get_profile_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_profile_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns user profile info |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_release_notes_post**
> get_release_notes_post()

gets release notes.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # gets release notes.
        api_instance.get_release_notes_post()
    except Exception as e:
        print("Exception when calling DefaultApi->get_release_notes_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | the response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_settings_get**
> get_settings_get()

get notification settings

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # get notification settings
        api_instance.get_settings_get()
    except Exception as e:
        print("Exception when calling DefaultApi->get_settings_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | notification settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_suggested_club_invites_post**
> get_suggested_club_invites_post(body=body)

find users to invite to clubs based on phone number

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"contacts":[{"name":"aaa","phone_number":"+11234567890"}],"upload_contacts":true} # object |  (optional)

    try:
        # find users to invite to clubs based on phone number
        api_instance.get_suggested_club_invites_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_suggested_club_invites_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns list of suggested invites. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_suggested_follows_all_get**
> get_suggested_follows_all_get(in_onboarding=in_onboarding, page_size=page_size, page=page)

gets suggested follows during signup

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    in_onboarding = true # bool |  (optional)
    page_size = 50 # int |  (optional)
    page = 1 # int |  (optional)

    try:
        # gets suggested follows during signup
        api_instance.get_suggested_follows_all_get(in_onboarding=in_onboarding, page_size=page_size, page=page)
    except Exception as e:
        print("Exception when calling DefaultApi->get_suggested_follows_all_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **in_onboarding** | **bool**|  | [optional] 
 **page_size** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 

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
**200** | a list of users to follow. bios truncated to 80 chars. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_suggested_follows_friends_only_post**
> get_suggested_follows_friends_only_post(body=body)

find people to follow by uploading contacts during signup

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"club_id":null,"contacts":[],"upload_contacts":true} # object |  (optional)

    try:
        # find people to follow by uploading contacts during signup
        api_instance.get_suggested_follows_friends_only_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_suggested_follows_friends_only_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns list of users and clubs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_suggested_follows_similar_post**
> get_suggested_follows_similar_post(body=body)

find similar users. (The Sparkles button on Clubhouse's profile page)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"user_id":4} # object |  (optional)

    try:
        # find similar users. (The Sparkles button on Clubhouse's profile page)
        api_instance.get_suggested_follows_similar_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_suggested_follows_similar_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of users. Bios truncated to 80 chars. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_suggested_invites_post**
> get_suggested_invites_post(body=body)

find users to invite based on phone number.

(also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"club_id":null,"contacts":[{"phone_number":"+11234567890"}],"upload_contacts":false} # object |  (optional)

    try:
        # find users to invite based on phone number.
        api_instance.get_suggested_invites_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_suggested_invites_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns list of users that can be invited. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_suggested_speakers_post**
> get_suggested_speakers_post(body=body)

gets suggested users when you start a private room

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"channel":null} # object |  (optional)

    try:
        # gets suggested users when you start a private room
        api_instance.get_suggested_speakers_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_suggested_speakers_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of actionable notifications. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_topic_post**
> get_topic_post(body=body)

looks up topic by ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"topic_id":140} # object |  (optional)

    try:
        # looks up topic by ID.
        api_instance.get_topic_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->get_topic_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns topic info |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_users_for_topic_get**
> get_users_for_topic_get(topic_id=topic_id, page_size=page_size, page=page)

looks up users by topic.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    topic_id = 140 # int |  (optional)
    page_size = 25 # int |  (optional)
    page = 1 # int |  (optional)

    try:
        # looks up users by topic.
        api_instance.get_users_for_topic_get(topic_id=topic_id, page_size=page_size, page=page)
    except Exception as e:
        print("Exception when calling DefaultApi->get_users_for_topic_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topic_id** | **int**|  | [optional] 
 **page_size** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 

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
**200** | returns list of users with pagination. Bios truncated to 80 chars. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_welcome_channel_get**
> get_welcome_channel_get()

called during signup

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # called during signup
        api_instance.get_welcome_channel_get()
    except Exception as e:
        print("Exception when calling DefaultApi->get_welcome_channel_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | empty??? |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invite_from_waitlist_post**
> invite_from_waitlist_post(body=body)

wave to another user on the waitlist to give them access

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"user_id":1234} # object |  (optional)

    try:
        # wave to another user on the waitlist to give them access
        api_instance.invite_from_waitlist_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->invite_from_waitlist_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | your own account is waitlisted, or some other error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invite_to_app_post**
> invite_to_app_post(body=body)

invite a user to the app, using one of your invites

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"message":null,"name":"John Smith","phone_number":"+11234567890"} # object |  (optional)

    try:
        # invite a user to the app, using one of your invites
        api_instance.invite_to_app_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->invite_to_app_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | your own account doesn&#39;t have an invite either |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **join_channel_post**
> join_channel_post(body=body)

join a channel.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"attribution_details":"eyJpc19leHBsb3JlIjpmYWxzZSwicmFuayI6MX0=","attribution_source":"feed","channel":"abcdefgh"} # object |  (optional)

    try:
        # join a channel.
        api_instance.join_channel_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->join_channel_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | stuff needed to actually join a channel |  -  |
**400** | cannot join |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **leave_channel_post**
> leave_channel_post(body=body)

leave a channel.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"channel":"abcdefgh"} # object |  (optional)

    try:
        # leave a channel.
        api_instance.leave_channel_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->leave_channel_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | left the channel |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **me_post**
> me_post(body=body)

gets user

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"return_blocked_ids":true,"return_following_ids":true,"timezone_identifier":"America/Los_Angeles"} # object |  (optional)

    try:
        # gets user
        api_instance.me_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->me_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the response |  -  |
**403** | error response - happens if account is banned (is_blocked) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_action_trails_post**
> record_action_trails_post(body=body)

analytics

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"action_trails":[{"blob_data":{},"client_time_created":1612971962,"trail_type":"app_opened"}]} # object |  (optional)

    try:
        # analytics
        api_instance.record_action_trails_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->record_action_trails_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | always empty |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refresh_token_post**
> refresh_token_post(body=body)

gets an access_token from a refresh_token.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"refresh":"<refresh_token>"} # object |  (optional)

    try:
        # gets an access_token from a refresh_token.
        api_instance.refresh_token_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->refresh_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns new access and refresh token |  -  |
**401** | invalid refresh token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_phone_number_auth_post**
> resend_phone_number_auth_post(body=body)

Resend phone number auth.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {} # object |  (optional)

    try:
        # Resend phone number auth.
        api_instance.resend_phone_number_auth_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->resend_phone_number_auth_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_clubs_post**
> search_clubs_post(body=body)

search clubs.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"cofollows_only":false,"followers_only":false,"following_only":false,"query":"rohan"} # object |  (optional)

    try:
        # search clubs.
        api_instance.search_clubs_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->search_clubs_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of clubs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_users_post**
> search_users_post(body=body)

search for users

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"cofollows_only":false,"followers_only":false,"following_only":false,"query":"johnsmith"} # object |  (optional)

    try:
        # search for users
        api_instance.search_users_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->search_users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of users. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_phone_number_auth_post**
> start_phone_number_auth_post(body=body)

Starts phone number auth.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"phone_number":"+11234567890"} # object |  (optional)

    try:
        # Starts phone number auth.
        api_instance.start_phone_number_auth_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->start_phone_number_auth_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_notifications_post**
> update_notifications_post(body=body)

updates notification during signup.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"apn_token":null,"enable_trending":-1,"frequency":-1,"is_sandbox":false,"pause_till":-1,"system_enabled":2} # object |  (optional)

    try:
        # updates notification during signup.
        api_instance.update_notifications_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->update_notifications_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | waitlisted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_username_post**
> update_username_post(body=body)

edits username.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.clubhouseapi.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.clubhouseapi.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = {"username":"hipsterhouse"} # object |  (optional)

    try:
        # edits username.
        api_instance.update_username_post(body=body)
    except Exception as e:
        print("Exception when calling DefaultApi->update_username_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | username successfully set |  -  |
**400** | invalid/taken username (eg empty string) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

