# openapi_client.PeopleApi

All URIs are relative to *https://www.googleapis.com/plus/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**plus_people_get**](PeopleApi.md#plus_people_get) | **GET** /people/{userId} | 
[**plus_people_list**](PeopleApi.md#plus_people_list) | **GET** /people/{userId}/people/{collection} | 
[**plus_people_list_by_activity**](PeopleApi.md#plus_people_list_by_activity) | **GET** /activities/{activityId}/people/{collection} | 
[**plus_people_search**](PeopleApi.md#plus_people_search) | **GET** /people | 


# **plus_people_get**
> Person plus_people_get(user_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.person import Person
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/plus/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/plus/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PeopleApi(api_client)
    user_id = 'user_id_example' # str | The ID of the person to get the profile for. The special value \"me\" can be used to indicate the authenticated user.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.plus_people_get(user_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of PeopleApi->plus_people_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeopleApi->plus_people_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the person to get the profile for. The special value \&quot;me\&quot; can be used to indicate the authenticated user. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Person**](Person.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plus_people_list**
> PeopleFeed plus_people_list(user_id, collection, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, order_by=order_by, page_token=page_token)



List all of the people in the specified collection.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.people_feed import PeopleFeed
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/plus/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/plus/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PeopleApi(api_client)
    user_id = 'user_id_example' # str | Get the collection of people for the person identified. Use \"me\" to indicate the authenticated user.
    collection = 'collection_example' # str | The collection of people to list.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults. (optional)
    order_by = 'order_by_example' # str | The order to return people in. (optional)
    page_token = 'page_token_example' # str | The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of \"nextPageToken\" from the previous response. (optional)

    try:
        api_response = api_instance.plus_people_list(user_id, collection, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, order_by=order_by, page_token=page_token)
        print("The response of PeopleApi->plus_people_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeopleApi->plus_people_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| Get the collection of people for the person identified. Use \&quot;me\&quot; to indicate the authenticated user. | 
 **collection** | **str**| The collection of people to list. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults. | [optional] 
 **order_by** | **str**| The order to return people in. | [optional] 
 **page_token** | **str**| The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of \&quot;nextPageToken\&quot; from the previous response. | [optional] 

### Return type

[**PeopleFeed**](PeopleFeed.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plus_people_list_by_activity**
> PeopleFeed plus_people_list_by_activity(activity_id, collection, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, page_token=page_token)



Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.people_feed import PeopleFeed
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/plus/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/plus/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PeopleApi(api_client)
    activity_id = 'activity_id_example' # str | The ID of the activity to get the list of people for.
    collection = 'collection_example' # str | The collection of people to list.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults. (optional)
    page_token = 'page_token_example' # str | The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of \"nextPageToken\" from the previous response. (optional)

    try:
        api_response = api_instance.plus_people_list_by_activity(activity_id, collection, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, page_token=page_token)
        print("The response of PeopleApi->plus_people_list_by_activity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeopleApi->plus_people_list_by_activity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_id** | **str**| The ID of the activity to get the list of people for. | 
 **collection** | **str**| The collection of people to list. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults. | [optional] 
 **page_token** | **str**| The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of \&quot;nextPageToken\&quot; from the previous response. | [optional] 

### Return type

[**PeopleFeed**](PeopleFeed.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plus_people_search**
> PeopleFeed plus_people_search(query, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, language=language, max_results=max_results, page_token=page_token)



Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.people_feed import PeopleFeed
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/plus/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/plus/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PeopleApi(api_client)
    query = 'query_example' # str | Specify a query string for full text search of public text in all profiles.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    language = 'language_example' # str | Specify the preferred language to search with. See search language codes for available values. (optional)
    max_results = 56 # int | The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults. (optional)
    page_token = 'page_token_example' # str | The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of \"nextPageToken\" from the previous response. This token can be of any length. (optional)

    try:
        api_response = api_instance.plus_people_search(query, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, language=language, max_results=max_results, page_token=page_token)
        print("The response of PeopleApi->plus_people_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeopleApi->plus_people_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Specify a query string for full text search of public text in all profiles. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **language** | **str**| Specify the preferred language to search with. See search language codes for available values. | [optional] 
 **max_results** | **int**| The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults. | [optional] 
 **page_token** | **str**| The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of \&quot;nextPageToken\&quot; from the previous response. This token can be of any length. | [optional] 

### Return type

[**PeopleFeed**](PeopleFeed.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

