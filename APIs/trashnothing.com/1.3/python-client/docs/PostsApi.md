# openapi_client.PostsApi

All URIs are relative to *https://trashnothing.com/api/v1.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_all_posts**](PostsApi.md#get_all_posts) | **GET** /posts/all | List all posts
[**get_all_posts_changes**](PostsApi.md#get_all_posts_changes) | **GET** /posts/all/changes | List all post changes
[**get_post**](PostsApi.md#get_post) | **GET** /posts/{post_id} | Retrieve a post
[**get_post_and_related_data**](PostsApi.md#get_post_and_related_data) | **GET** /posts/{post_id}/display | Retrieve post display data
[**get_posts**](PostsApi.md#get_posts) | **GET** /posts | List posts
[**get_posts_by_ids**](PostsApi.md#get_posts_by_ids) | **GET** /posts/multiple | Retrieve multiple posts
[**search_posts**](PostsApi.md#search_posts) | **GET** /posts/search | Search posts


# **get_all_posts**
> GetAllPosts200Response get_all_posts(types, date_min, date_max, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio)

List all posts

This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_all_posts200_response import GetAllPosts200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostsApi(api_client)
    types = 'types_example' # str | A comma separated list of the post types to return.  The available post types are: offer, wanted 
    date_min = '2013-10-20T19:20:30+01:00' # datetime | Only posts newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second. 
    date_max = '2013-10-20T19:20:30+01:00' # datetime | Only posts older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second. 
    per_page = 20 # int | The number of posts to return per page (must be >= 1 and <= 50). (optional) (default to 20)
    page = 1 # int | The page of posts to return. (optional) (default to 1)
    device_pixel_ratio = 1 # float | Client device pixel ratio used to determine thumbnail size (default 1.0). (optional) (default to 1)

    try:
        # List all posts
        api_response = api_instance.get_all_posts(types, date_min, date_max, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio)
        print("The response of PostsApi->get_all_posts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostsApi->get_all_posts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **types** | **str**| A comma separated list of the post types to return.  The available post types are: offer, wanted  | 
 **date_min** | **datetime**| Only posts newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.  | 
 **date_max** | **datetime**| Only posts older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.  | 
 **per_page** | **int**| The number of posts to return per page (must be &gt;&#x3D; 1 and &lt;&#x3D; 50). | [optional] [default to 20]
 **page** | **int**| The page of posts to return. | [optional] [default to 1]
 **device_pixel_ratio** | **float**| Client device pixel ratio used to determine thumbnail size (default 1.0). | [optional] [default to 1]

### Return type

[**GetAllPosts200Response**](GetAllPosts200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The posts. |  -  |
**400** | Missing or invalid parameters. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_posts_changes**
> GetAllPostsChanges200Response get_all_posts_changes(date_min, date_max, per_page=per_page, page=page)

List all post changes

This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_all_posts_changes200_response import GetAllPostsChanges200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostsApi(api_client)
    date_min = '2013-10-20T19:20:30+01:00' # datetime | Only changes newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second. 
    date_max = '2013-10-20T19:20:30+01:00' # datetime | Only changes older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second. 
    per_page = 20 # int | The number of changes to return per page (must be >= 1 and <= 50). (optional) (default to 20)
    page = 1 # int | The page of changes to return. (optional) (default to 1)

    try:
        # List all post changes
        api_response = api_instance.get_all_posts_changes(date_min, date_max, per_page=per_page, page=page)
        print("The response of PostsApi->get_all_posts_changes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostsApi->get_all_posts_changes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_min** | **datetime**| Only changes newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.  | 
 **date_max** | **datetime**| Only changes older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.  | 
 **per_page** | **int**| The number of changes to return per page (must be &gt;&#x3D; 1 and &lt;&#x3D; 50). | [optional] [default to 20]
 **page** | **int**| The page of changes to return. | [optional] [default to 1]

### Return type

[**GetAllPostsChanges200Response**](GetAllPostsChanges200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The changes. |  -  |
**400** | Missing or invalid parameters. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_post**
> Post get_post(post_id)

Retrieve a post

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.post import Post
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostsApi(api_client)
    post_id = 'post_id_example' # str | The ID of the post to retrieve.

    try:
        # Retrieve a post
        api_response = api_instance.get_post(post_id)
        print("The response of PostsApi->get_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostsApi->get_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_id** | **str**| The ID of the post to retrieve. | 

### Return type

[**Post**](Post.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The post. |  -  |
**403** | The user doesn&#39;t have permission to access the post. |  -  |
**404** | Post not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_post_and_related_data**
> GetPostAndRelatedData200Response get_post_and_related_data(post_id)

Retrieve post display data

Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_post_and_related_data200_response import GetPostAndRelatedData200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostsApi(api_client)
    post_id = 'post_id_example' # str | The ID of the post to retrieve.

    try:
        # Retrieve post display data
        api_response = api_instance.get_post_and_related_data(post_id)
        print("The response of PostsApi->get_post_and_related_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostsApi->get_post_and_related_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_id** | **str**| The ID of the post to retrieve. | 

### Return type

[**GetPostAndRelatedData200Response**](GetPostAndRelatedData200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The post and related data. |  -  |
**403** | The user doesn&#39;t have permission to access the post. |  -  |
**404** | Post not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_posts**
> GetPosts200Response get_posts(types, sources, sort_by=sort_by, group_ids=group_ids, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio, latitude=latitude, longitude=longitude, radius=radius, date_min=date_min, date_max=date_max, outcomes=outcomes, user_state=user_state, include_reposts=include_reposts)

List posts

NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned. NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_posts200_response import GetPosts200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostsApi(api_client)
    types = 'types_example' # str | A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin 
    sources = 'sources_example' # str | A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required. 
    sort_by = 'date' # str | How to sort the posts that are returned.  One of: date, active, distance <br /><br /> Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.  (optional) (default to 'date')
    group_ids = 'The group IDs of every group the current user is a member of.' # str | A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.  (optional) (default to 'The group IDs of every group the current user is a member of.')
    per_page = 20 # int | The number of posts to return per page (must be >= 1 and <= 100). (optional) (default to 20)
    page = 1 # int | The page of posts to return. (optional) (default to 1)
    device_pixel_ratio = 1 # float | Client device pixel ratio used to determine thumbnail size (default 1.0). (optional) (default to 1)
    latitude = 3.4 # float | The latitude of a point around which to return posts.  (optional)
    longitude = 3.4 # float | The longitude of a point around which to return posts.  (optional)
    radius = 3.4 # float | The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.  (optional)
    date_min = '2013-10-20T19:20:30+01:00' # datetime | Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.  (optional)
    date_max = '2013-10-20T19:20:30+01:00' # datetime | Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time. (optional)
    outcomes = '' # str | A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.  (optional) (default to '')
    user_state = '' # str | If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.  (optional) (default to '')
    include_reposts = 1 # int | If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.  (optional) (default to 1)

    try:
        # List posts
        api_response = api_instance.get_posts(types, sources, sort_by=sort_by, group_ids=group_ids, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio, latitude=latitude, longitude=longitude, radius=radius, date_min=date_min, date_max=date_max, outcomes=outcomes, user_state=user_state, include_reposts=include_reposts)
        print("The response of PostsApi->get_posts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostsApi->get_posts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **types** | **str**| A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin  | 
 **sources** | **str**| A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users&#39; location if latitude, longitude and radius aren&#39;t passed). &lt;br /&gt;&lt;br /&gt; NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.  | 
 **sort_by** | **str**| How to sort the posts that are returned.  One of: date, active, distance &lt;br /&gt;&lt;br /&gt; Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.  | [optional] [default to &#39;date&#39;]
 **group_ids** | **str**| A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the &#39;groups&#39; source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). &lt;br /&gt;&lt;br /&gt; NOTE: For requests using an api key instead of oauth, this field is required if the &#39;groups&#39; source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). &lt;br /&gt;&lt;br/&gt; *To determine which group IDs were used and which were discarded, use the group_ids field in the response.  | [optional] [default to &#39;The group IDs of every group the current user is a member of.&#39;]
 **per_page** | **int**| The number of posts to return per page (must be &gt;&#x3D; 1 and &lt;&#x3D; 100). | [optional] [default to 20]
 **page** | **int**| The page of posts to return. | [optional] [default to 1]
 **device_pixel_ratio** | **float**| Client device pixel ratio used to determine thumbnail size (default 1.0). | [optional] [default to 1]
 **latitude** | **float**| The latitude of a point around which to return posts.  | [optional] 
 **longitude** | **float**| The longitude of a point around which to return posts.  | [optional] 
 **radius** | **float**| The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.  | [optional] 
 **date_min** | **datetime**| Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.  | [optional] 
 **date_max** | **datetime**| Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time. | [optional] 
 **outcomes** | **str**| A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn &lt;br /&gt;&lt;br /&gt; There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to &#39;all&#39;, all posts will be returned no matter what outcome the posts have. If set to &#39;not-promised&#39;, only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.  | [optional] [default to &#39;&#39;]
 **user_state** | **str**| If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked &lt;br&gt;&lt;br&gt; NOTE: This option will only work with oauth requests.  | [optional] [default to &#39;&#39;]
 **include_reposts** | **int**| If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.  | [optional] [default to 1]

### Return type

[**GetPosts200Response**](GetPosts200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The posts and paging data. |  -  |
**400** | Missing or invalid parameters. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_posts_by_ids**
> GetPostsByIds200Response get_posts_by_ids(post_ids)

Retrieve multiple posts

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_posts_by_ids200_response import GetPostsByIds200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostsApi(api_client)
    post_ids = 'post_ids_example' # str | A comma separated list of the post IDs. If more than 10 post IDs are passed, only the first 10 posts will be returned. 

    try:
        # Retrieve multiple posts
        api_response = api_instance.get_posts_by_ids(post_ids)
        print("The response of PostsApi->get_posts_by_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostsApi->get_posts_by_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_ids** | **str**| A comma separated list of the post IDs. If more than 10 post IDs are passed, only the first 10 posts will be returned.  | 

### Return type

[**GetPostsByIds200Response**](GetPostsByIds200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The posts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_posts**
> SearchPosts200Response search_posts(search, types, sources, sort_by=sort_by, group_ids=group_ids, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio, latitude=latitude, longitude=longitude, radius=radius, date_min=date_min, date_max=date_max, outcomes=outcomes, user_state=user_state, include_reposts=include_reposts)

Search posts

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters. NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.search_posts200_response import SearchPosts200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trashnothing.com/api/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trashnothing.com/api/v1.3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostsApi(api_client)
    search = 'search_example' # str | The search query used to find posts.
    types = 'types_example' # str | A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin 
    sources = 'sources_example' # str | A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required. 
    sort_by = 'relevance' # str | How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.  (optional) (default to 'relevance')
    group_ids = 'The group IDs of every group the current user is a member of.' # str | A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.  (optional) (default to 'The group IDs of every group the current user is a member of.')
    per_page = 20 # int | The number of posts to return per page (must be >= 1 and <= 100). (optional) (default to 20)
    page = 1 # int | The page of posts to return. (optional) (default to 1)
    device_pixel_ratio = 1 # float | Client device pixel ratio used to determine thumbnail size (default 1.0). (optional) (default to 1)
    latitude = 3.4 # float | The latitude of a point around which to return posts.  (optional)
    longitude = 3.4 # float | The longitude of a point around which to return posts.  (optional)
    radius = 3.4 # float | The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.  (optional)
    date_min = '2013-10-20T19:20:30+01:00' # datetime | Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.  (optional)
    date_max = '2013-10-20T19:20:30+01:00' # datetime | Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time. (optional)
    outcomes = '' # str | A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.  (optional) (default to '')
    user_state = '' # str | If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.  (optional) (default to '')
    include_reposts = 1 # int | If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.  (optional) (default to 1)

    try:
        # Search posts
        api_response = api_instance.search_posts(search, types, sources, sort_by=sort_by, group_ids=group_ids, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio, latitude=latitude, longitude=longitude, radius=radius, date_min=date_min, date_max=date_max, outcomes=outcomes, user_state=user_state, include_reposts=include_reposts)
        print("The response of PostsApi->search_posts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostsApi->search_posts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| The search query used to find posts. | 
 **types** | **str**| A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin  | 
 **sources** | **str**| A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users&#39; location if latitude, longitude and radius aren&#39;t passed). &lt;br /&gt;&lt;br /&gt; NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.  | 
 **sort_by** | **str**| How to sort the posts that are returned.  One of: relevance, date, active, distance &lt;br /&gt;&lt;br /&gt; Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.  | [optional] [default to &#39;relevance&#39;]
 **group_ids** | **str**| A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the &#39;groups&#39; source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). &lt;br /&gt;&lt;br /&gt; NOTE: For requests using an api key instead of oauth, this field is required if the &#39;groups&#39; source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). &lt;br /&gt;&lt;br/&gt; *To determine which group IDs were used and which were discarded, use the group_ids field in the response.  | [optional] [default to &#39;The group IDs of every group the current user is a member of.&#39;]
 **per_page** | **int**| The number of posts to return per page (must be &gt;&#x3D; 1 and &lt;&#x3D; 100). | [optional] [default to 20]
 **page** | **int**| The page of posts to return. | [optional] [default to 1]
 **device_pixel_ratio** | **float**| Client device pixel ratio used to determine thumbnail size (default 1.0). | [optional] [default to 1]
 **latitude** | **float**| The latitude of a point around which to return posts.  | [optional] 
 **longitude** | **float**| The longitude of a point around which to return posts.  | [optional] 
 **radius** | **float**| The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.  | [optional] 
 **date_min** | **datetime**| Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.  | [optional] 
 **date_max** | **datetime**| Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time. | [optional] 
 **outcomes** | **str**| A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn &lt;br /&gt;&lt;br /&gt; There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to &#39;all&#39;, all posts will be returned no matter what outcome the posts have. If set to &#39;not-promised&#39;, only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.  | [optional] [default to &#39;&#39;]
 **user_state** | **str**| If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked &lt;br&gt;&lt;br&gt; NOTE: This option will only work with oauth requests.  | [optional] [default to &#39;&#39;]
 **include_reposts** | **int**| If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.  | [optional] [default to 1]

### Return type

[**SearchPosts200Response**](SearchPosts200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The posts and paging data. |  -  |
**400** | Missing or invalid parameters. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

