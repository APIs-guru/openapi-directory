# openapi_client.CheckinApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_into_an_item**](CheckinApi.md#check_into_an_item) | **POST** /checkin | Check into an item
[**delete_any_active_checkins**](CheckinApi.md#delete_any_active_checkins) | **DELETE** /checkin | Delete any active checkins


# **check_into_an_item**
> check_into_an_item(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, check_into_an_item_request=check_into_an_item_request)

Check into an item

#### &#128274; OAuth Required  Check into a movie or episode. This should be tied to a user action to manually indicate they are watching something. The item will display as *watching* on the site, then automatically switch to *watched* status once the duration has elapsed. A unique history `id` (64-bit integer) will be returned and can be used to reference this checkin directly.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie` or `episode` object. (see examples &#8594;) | | `sharing`  | object | Control sharing to any connected social networks. (see below &#8595;) | | `message`  | string | Message used for sharing. If not sent, it will use the watching string in the user settings. | | `venue_id` | string | Foursquare venue ID. | | `venue_name` | string | Foursquare venue name. | | `app_version` | string | Version number of the app. | | `app_date` | string | Build date of the app. |  #### Sharing  The `sharing` object is optional and will apply the user's settings if not sent. If `sharing` is sent, each key will override the user's setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [**/users/settings**](/reference/users/settings) method.  | Key | Type | |---|---| | `twitter` | boolean | | `mastodon` | boolean | | `tumblr` | boolean |  **Note:** If a checkin is already in progress, a `409` HTTP status code will returned. The response will contain an `expires_at` timestamp which is when the user can check in again.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.check_into_an_item_request import CheckIntoAnItemRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CheckinApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    check_into_an_item_request = openapi_client.CheckIntoAnItemRequest() # CheckIntoAnItemRequest |  (optional)

    try:
        # Check into an item
        api_instance.check_into_an_item(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, check_into_an_item_request=check_into_an_item_request)
    except Exception as e:
        print("Exception when calling CheckinApi->check_into_an_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **check_into_an_item_request** | [**CheckIntoAnItemRequest**](CheckIntoAnItemRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**409** | There is already a checkin in progress. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_any_active_checkins**
> delete_any_active_checkins(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Delete any active checkins

#### &#128274; OAuth Required  Removes any active checkins, no need to provide a specific item.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CheckinApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Delete any active checkins
        api_instance.delete_any_active_checkins(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CheckinApi->delete_any_active_checkins: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

