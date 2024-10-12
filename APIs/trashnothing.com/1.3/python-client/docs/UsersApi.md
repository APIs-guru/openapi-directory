# openapi_client.UsersApi

All URIs are relative to *https://trashnothing.com/api/v1.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user_posts**](UsersApi.md#get_user_posts) | **GET** /users/{user_id}/posts | List posts by a user
[**search_user_posts**](UsersApi.md#search_user_posts) | **GET** /users/{user_id}/posts/search | Search posts by a user


# **get_user_posts**
> GetPosts200Response get_user_posts(user_id, types, sources, sort_by=sort_by, group_ids=group_ids, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio, latitude=latitude, longitude=longitude, radius=radius, date_min=date_min, date_max=date_max, outcomes=outcomes, include_reposts=include_reposts)

List posts by a user



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
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user. 
    types = 'types_example' # str | A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin 
    sources = 'sources_example' # str | A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required. 
    sort_by = 'date' # str | How to sort the posts that are returned.  One of: date, active, distance <br /><br /> Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.  (optional) (default to 'date')
    group_ids = 'The group IDs of every group the current user is a member of.' # str | A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.  (optional) (default to 'The group IDs of every group the current user is a member of.')
    per_page = 20 # int | The number of posts to return per page (must be >= 1 and <= 100). (optional) (default to 20)
    page = 1 # int | The page of posts to return. (optional) (default to 1)
    device_pixel_ratio = 1 # float | Client device pixel ratio used to determine thumbnail size (default 1.0). (optional) (default to 1)
    latitude = 3.4 # float | The latitude of a point around which to return posts.  (optional)
    longitude = 3.4 # float | The longitude of a point around which to return posts.  (optional)
    radius = 3.4 # float | The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.  (optional)
    date_min = '2013-10-20T19:20:30+01:00' # datetime | Only posts newer than or equal to this UTC date and time will be returned.  (optional)
    date_max = '2013-10-20T19:20:30+01:00' # datetime | Only posts older than this UTC date and time will be returned. (optional)
    outcomes = '' # str | A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.  (optional) (default to '')
    include_reposts = 1 # int | If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.  (optional) (default to 1)

    try:
        # List posts by a user
        api_response = api_instance.get_user_posts(user_id, types, sources, sort_by=sort_by, group_ids=group_ids, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio, latitude=latitude, longitude=longitude, radius=radius, date_min=date_min, date_max=date_max, outcomes=outcomes, include_reposts=include_reposts)
        print("The response of UsersApi->get_user_posts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_posts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The user ID of the user whose posts will be retrieved. Using &#39;me&#39; as the user_id will return the posts for the current user.  | 
 **types** | **str**| A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin  | 
 **sources** | **str**| A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren&#39;t passed). &lt;br /&gt;&lt;br /&gt; NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.  | 
 **sort_by** | **str**| How to sort the posts that are returned.  One of: date, active, distance &lt;br /&gt;&lt;br /&gt; Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.  | [optional] [default to &#39;date&#39;]
 **group_ids** | **str**| A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the &#39;groups&#39; source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). &lt;br /&gt;&lt;br /&gt; NOTE: For requests using an api key instead of oauth, this field is required if the &#39;groups&#39; source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). &lt;br /&gt;&lt;br/&gt; *To determine which group IDs were used and which were discarded, use the group_ids field in the response.  | [optional] [default to &#39;The group IDs of every group the current user is a member of.&#39;]
 **per_page** | **int**| The number of posts to return per page (must be &gt;&#x3D; 1 and &lt;&#x3D; 100). | [optional] [default to 20]
 **page** | **int**| The page of posts to return. | [optional] [default to 1]
 **device_pixel_ratio** | **float**| Client device pixel ratio used to determine thumbnail size (default 1.0). | [optional] [default to 1]
 **latitude** | **float**| The latitude of a point around which to return posts.  | [optional] 
 **longitude** | **float**| The longitude of a point around which to return posts.  | [optional] 
 **radius** | **float**| The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.  | [optional] 
 **date_min** | **datetime**| Only posts newer than or equal to this UTC date and time will be returned.  | [optional] 
 **date_max** | **datetime**| Only posts older than this UTC date and time will be returned. | [optional] 
 **outcomes** | **str**| A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn &lt;br /&gt;&lt;br /&gt; There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to &#39;all&#39;, all posts will be returned no matter what outcome the posts have. If set to &#39;not-promised&#39;, only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.  | [optional] [default to &#39;&#39;]
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

# **search_user_posts**
> SearchPosts200Response search_user_posts(user_id, search, types, sources, sort_by=sort_by, group_ids=group_ids, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio, latitude=latitude, longitude=longitude, radius=radius, date_min=date_min, date_max=date_max, outcomes=outcomes, include_reposts=include_reposts)

Search posts by a user

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters. 

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
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user. 
    search = 'search_example' # str | The search query used to find posts.
    types = 'types_example' # str | A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin 
    sources = 'sources_example' # str | A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required. 
    sort_by = 'relevance' # str | How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.  (optional) (default to 'relevance')
    group_ids = 'The group IDs of every group the current user is a member of.' # str | A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.  (optional) (default to 'The group IDs of every group the current user is a member of.')
    per_page = 20 # int | The number of posts to return per page (must be >= 1 and <= 100). (optional) (default to 20)
    page = 1 # int | The page of posts to return. (optional) (default to 1)
    device_pixel_ratio = 1 # float | Client device pixel ratio used to determine thumbnail size (default 1.0). (optional) (default to 1)
    latitude = 3.4 # float | The latitude of a point around which to return posts.  (optional)
    longitude = 3.4 # float | The longitude of a point around which to return posts.  (optional)
    radius = 3.4 # float | The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.  (optional)
    date_min = '2013-10-20T19:20:30+01:00' # datetime | Only posts newer than or equal to this UTC date and time will be returned.  (optional)
    date_max = '2013-10-20T19:20:30+01:00' # datetime | Only posts older than this UTC date and time will be returned. (optional)
    outcomes = '' # str | A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.  (optional) (default to '')
    include_reposts = 1 # int | If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.  (optional) (default to 1)

    try:
        # Search posts by a user
        api_response = api_instance.search_user_posts(user_id, search, types, sources, sort_by=sort_by, group_ids=group_ids, per_page=per_page, page=page, device_pixel_ratio=device_pixel_ratio, latitude=latitude, longitude=longitude, radius=radius, date_min=date_min, date_max=date_max, outcomes=outcomes, include_reposts=include_reposts)
        print("The response of UsersApi->search_user_posts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->search_user_posts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The user ID of the user whose posts will be retrieved. Using &#39;me&#39; as the user_id will return the posts for the current user.  | 
 **search** | **str**| The search query used to find posts. | 
 **types** | **str**| A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin  | 
 **sources** | **str**| A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren&#39;t passed). &lt;br /&gt;&lt;br /&gt; NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.  | 
 **sort_by** | **str**| How to sort the posts that are returned.  One of: relevance, date, active, distance &lt;br /&gt;&lt;br /&gt; Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.  | [optional] [default to &#39;relevance&#39;]
 **group_ids** | **str**| A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the &#39;groups&#39; source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). &lt;br /&gt;&lt;br /&gt; NOTE: For requests using an api key instead of oauth, this field is required if the &#39;groups&#39; source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). &lt;br /&gt;&lt;br/&gt; *To determine which group IDs were used and which were discarded, use the group_ids field in the response.  | [optional] [default to &#39;The group IDs of every group the current user is a member of.&#39;]
 **per_page** | **int**| The number of posts to return per page (must be &gt;&#x3D; 1 and &lt;&#x3D; 100). | [optional] [default to 20]
 **page** | **int**| The page of posts to return. | [optional] [default to 1]
 **device_pixel_ratio** | **float**| Client device pixel ratio used to determine thumbnail size (default 1.0). | [optional] [default to 1]
 **latitude** | **float**| The latitude of a point around which to return posts.  | [optional] 
 **longitude** | **float**| The longitude of a point around which to return posts.  | [optional] 
 **radius** | **float**| The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.  | [optional] 
 **date_min** | **datetime**| Only posts newer than or equal to this UTC date and time will be returned.  | [optional] 
 **date_max** | **datetime**| Only posts older than this UTC date and time will be returned. | [optional] 
 **outcomes** | **str**| A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn &lt;br /&gt;&lt;br /&gt; There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to &#39;all&#39;, all posts will be returned no matter what outcome the posts have. If set to &#39;not-promised&#39;, only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.  | [optional] [default to &#39;&#39;]
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

