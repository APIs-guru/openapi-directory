# openapi_client.SearchApi

All URIs are relative to *https://youtube.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**youtube_search_list**](SearchApi.md#youtube_search_list) | **GET** /youtube/v3/search | 


# **youtube_search_list**
> SearchListResponse youtube_search_list(part, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, channel_id=channel_id, channel_type=channel_type, event_type=event_type, for_content_owner=for_content_owner, for_developer=for_developer, for_mine=for_mine, location=location, location_radius=location_radius, max_results=max_results, on_behalf_of_content_owner=on_behalf_of_content_owner, order=order, page_token=page_token, published_after=published_after, published_before=published_before, q=q, region_code=region_code, relevance_language=relevance_language, safe_search=safe_search, topic_id=topic_id, type=type, video_caption=video_caption, video_category_id=video_category_id, video_definition=video_definition, video_dimension=video_dimension, video_duration=video_duration, video_embeddable=video_embeddable, video_license=video_license, video_paid_product_placement=video_paid_product_placement, video_syndicated=video_syndicated, video_type=video_type)



Retrieves a list of search resources

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.search_list_response import SearchListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://youtube.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://youtube.googleapis.com"
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
    api_instance = openapi_client.SearchApi(api_client)
    part = ['part_example'] # List[str] | The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    channel_id = 'channel_id_example' # str | Filter on resources belonging to this channelId. (optional)
    channel_type = 'channel_type_example' # str | Add a filter on the channel search. (optional)
    event_type = 'event_type_example' # str | Filter on the livestream status of the videos. (optional)
    for_content_owner = True # bool | Search owned by a content owner. (optional)
    for_developer = True # bool | Restrict the search to only retrieve videos uploaded using the project id of the authenticated user. (optional)
    for_mine = True # bool | Search for the private videos of the authenticated user. (optional)
    location = 'location_example' # str | Filter on location of the video (optional)
    location_radius = 'location_radius_example' # str | Filter on distance from the location (specified above). (optional)
    max_results = 56 # int | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. (optional)
    on_behalf_of_content_owner = 'on_behalf_of_content_owner_example' # str | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. (optional)
    order = 'order_example' # str | Sort order of the results. (optional)
    page_token = 'page_token_example' # str | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. (optional)
    published_after = 'published_after_example' # str | Filter on resources published after this date. (optional)
    published_before = 'published_before_example' # str | Filter on resources published before this date. (optional)
    q = 'q_example' # str | Textual search terms to match. (optional)
    region_code = 'region_code_example' # str | Display the content as seen by viewers in this country. (optional)
    relevance_language = 'relevance_language_example' # str | Return results relevant to this language. (optional)
    safe_search = 'safe_search_example' # str | Indicates whether the search results should include restricted content as well as standard content. (optional)
    topic_id = 'topic_id_example' # str | Restrict results to a particular topic. (optional)
    type = ['type_example'] # List[str] | Restrict results to a particular set of resource types from One Platform. (optional)
    video_caption = 'video_caption_example' # str | Filter on the presence of captions on the videos. (optional)
    video_category_id = 'video_category_id_example' # str | Filter on videos in a specific category. (optional)
    video_definition = 'video_definition_example' # str | Filter on the definition of the videos. (optional)
    video_dimension = 'video_dimension_example' # str | Filter on 3d videos. (optional)
    video_duration = 'video_duration_example' # str | Filter on the duration of the videos. (optional)
    video_embeddable = 'video_embeddable_example' # str | Filter on embeddable videos. (optional)
    video_license = 'video_license_example' # str | Filter on the license of the videos. (optional)
    video_paid_product_placement = 'video_paid_product_placement_example' # str |  (optional)
    video_syndicated = 'video_syndicated_example' # str | Filter on syndicated videos. (optional)
    video_type = 'video_type_example' # str | Filter on videos of a specific type. (optional)

    try:
        api_response = api_instance.youtube_search_list(part, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, channel_id=channel_id, channel_type=channel_type, event_type=event_type, for_content_owner=for_content_owner, for_developer=for_developer, for_mine=for_mine, location=location, location_radius=location_radius, max_results=max_results, on_behalf_of_content_owner=on_behalf_of_content_owner, order=order, page_token=page_token, published_after=published_after, published_before=published_before, q=q, region_code=region_code, relevance_language=relevance_language, safe_search=safe_search, topic_id=topic_id, type=type, video_caption=video_caption, video_category_id=video_category_id, video_definition=video_definition, video_dimension=video_dimension, video_duration=video_duration, video_embeddable=video_embeddable, video_license=video_license, video_paid_product_placement=video_paid_product_placement, video_syndicated=video_syndicated, video_type=video_type)
        print("The response of SearchApi->youtube_search_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->youtube_search_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **part** | [**List[str]**](str.md)| The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **channel_id** | **str**| Filter on resources belonging to this channelId. | [optional] 
 **channel_type** | **str**| Add a filter on the channel search. | [optional] 
 **event_type** | **str**| Filter on the livestream status of the videos. | [optional] 
 **for_content_owner** | **bool**| Search owned by a content owner. | [optional] 
 **for_developer** | **bool**| Restrict the search to only retrieve videos uploaded using the project id of the authenticated user. | [optional] 
 **for_mine** | **bool**| Search for the private videos of the authenticated user. | [optional] 
 **location** | **str**| Filter on location of the video | [optional] 
 **location_radius** | **str**| Filter on distance from the location (specified above). | [optional] 
 **max_results** | **int**| The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. | [optional] 
 **on_behalf_of_content_owner** | **str**| *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request&#39;s authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. | [optional] 
 **order** | **str**| Sort order of the results. | [optional] 
 **page_token** | **str**| The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. | [optional] 
 **published_after** | **str**| Filter on resources published after this date. | [optional] 
 **published_before** | **str**| Filter on resources published before this date. | [optional] 
 **q** | **str**| Textual search terms to match. | [optional] 
 **region_code** | **str**| Display the content as seen by viewers in this country. | [optional] 
 **relevance_language** | **str**| Return results relevant to this language. | [optional] 
 **safe_search** | **str**| Indicates whether the search results should include restricted content as well as standard content. | [optional] 
 **topic_id** | **str**| Restrict results to a particular topic. | [optional] 
 **type** | [**List[str]**](str.md)| Restrict results to a particular set of resource types from One Platform. | [optional] 
 **video_caption** | **str**| Filter on the presence of captions on the videos. | [optional] 
 **video_category_id** | **str**| Filter on videos in a specific category. | [optional] 
 **video_definition** | **str**| Filter on the definition of the videos. | [optional] 
 **video_dimension** | **str**| Filter on 3d videos. | [optional] 
 **video_duration** | **str**| Filter on the duration of the videos. | [optional] 
 **video_embeddable** | **str**| Filter on embeddable videos. | [optional] 
 **video_license** | **str**| Filter on the license of the videos. | [optional] 
 **video_paid_product_placement** | **str**|  | [optional] 
 **video_syndicated** | **str**| Filter on syndicated videos. | [optional] 
 **video_type** | **str**| Filter on videos of a specific type. | [optional] 

### Return type

[**SearchListResponse**](SearchListResponse.md)

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

