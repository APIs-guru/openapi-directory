# openapi_client.DefaultApi

All URIs are relative to *http://crucible.local/context*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_changeset_to_review**](DefaultApi.md#add_changeset_to_review) | **POST** /rest-service/reviews-v1/{id}/addChangeset | 
[**add_file**](DefaultApi.md#add_file) | **POST** /rest-service/reviews-v1/{id}/addFile | 
[**add_fisheye_review_item**](DefaultApi.md#add_fisheye_review_item) | **POST** /rest-service/reviews-v1/{id}/reviewitems | 
[**add_general_comment**](DefaultApi.md#add_general_comment) | **POST** /rest-service/reviews-v1/{id}/comments | 
[**add_patch_review0**](DefaultApi.md#add_patch_review0) | **POST** /rest-service/reviews-v1/{id}/addPatch | 
[**add_patch_to_review**](DefaultApi.md#add_patch_to_review) | **POST** /rest-service/reviews-v1/{id}/patch | 
[**add_reply**](DefaultApi.md#add_reply) | **POST** /rest-service/reviews-v1/{id}/comments/{cId}/replies | 
[**add_review_item**](DefaultApi.md#add_review_item) | **POST** /rest-service/reviews-v1/{id}/reviewitems/details | 
[**add_review_item_revisions**](DefaultApi.md#add_review_item_revisions) | **POST** /rest-service/reviews-v1/{id}/reviewitems/{riId}/revisions | 
[**add_review_items**](DefaultApi.md#add_review_items) | **POST** /rest-service/reviews-v1/{id}/reviewitems/revisions | 
[**add_reviewers**](DefaultApi.md#add_reviewers) | **POST** /rest-service/reviews-v1/{id}/reviewers | 
[**add_versioned_comment**](DefaultApi.md#add_versioned_comment) | **POST** /rest-service/reviews-v1/{id}/reviewitems/{riId}/comments | 
[**browse**](DefaultApi.md#browse) | **GET** /rest-service/repositories-v1/browse/{repository}/{path} | 
[**change**](DefaultApi.md#change) | **GET** /rest-service/repositories-v1/change/{repository}/{revision} | 
[**change_state**](DefaultApi.md#change_state) | **POST** /rest-service/reviews-v1/{id}/transition | 
[**changes**](DefaultApi.md#changes) | **GET** /rest-service/repositories-v1/changes/{repository}/{path} | 
[**close_review_with_comment**](DefaultApi.md#close_review_with_comment) | **POST** /rest-service/reviews-v1/{id}/close | 
[**complete_review**](DefaultApi.md#complete_review) | **POST** /rest-service/reviews-v1/{id}/complete | 
[**create_review**](DefaultApi.md#create_review) | **POST** /rest-service/reviews-v1 | 
[**delete_review**](DefaultApi.md#delete_review) | **DELETE** /rest-service/reviews-v1/{id} | 
[**details**](DefaultApi.md#details) | **GET** /rest-service/repositories-v1/{repository}/{revision}/{path} | 
[**get_all_comments**](DefaultApi.md#get_all_comments) | **GET** /rest-service/reviews-v1/{id}/comments | 
[**get_all_detailed_reviews**](DefaultApi.md#get_all_detailed_reviews) | **GET** /rest-service/reviews-v1/details | 
[**get_all_projects**](DefaultApi.md#get_all_projects) | **GET** /rest-service/projects-v1 | 
[**get_all_repositories**](DefaultApi.md#get_all_repositories) | **GET** /rest-service/repositories-v1 | 
[**get_all_reviews**](DefaultApi.md#get_all_reviews) | **GET** /rest-service/reviews-v1 | 
[**get_available_actions**](DefaultApi.md#get_available_actions) | **GET** /rest-service/reviews-v1/{id}/actions | 
[**get_available_transitions**](DefaultApi.md#get_available_transitions) | **GET** /rest-service/reviews-v1/{id}/transitions | 
[**get_comment**](DefaultApi.md#get_comment) | **GET** /rest-service/reviews-v1/{id}/comments/{cId} | 
[**get_completed_reviewers**](DefaultApi.md#get_completed_reviewers) | **GET** /rest-service/reviews-v1/{id}/reviewers/completed | 
[**get_contents**](DefaultApi.md#get_contents) | **GET** /rest-service/repositories-v1/content/{repository}/{revision}/{path} | 
[**get_custom_filter_reviews**](DefaultApi.md#get_custom_filter_reviews) | **GET** /rest-service/reviews-v1/filter | 
[**get_detailed_custom_filter_reviews**](DefaultApi.md#get_detailed_custom_filter_reviews) | **GET** /rest-service/reviews-v1/filter/details | 
[**get_detailed_filtered_reviews_for_user**](DefaultApi.md#get_detailed_filtered_reviews_for_user) | **GET** /rest-service/reviews-v1/filter/{filter}/details | 
[**get_detailed_review**](DefaultApi.md#get_detailed_review) | **GET** /rest-service/reviews-v1/{id}/details | 
[**get_filtered_reviews_for_user**](DefaultApi.md#get_filtered_reviews_for_user) | **GET** /rest-service/reviews-v1/filter/{filter} | 
[**get_general_comments**](DefaultApi.md#get_general_comments) | **GET** /rest-service/reviews-v1/{id}/comments/general | 
[**get_mapped_user**](DefaultApi.md#get_mapped_user) | **GET** /rest-service/users-v1/{repository}/{username} | 
[**get_metrics**](DefaultApi.md#get_metrics) | **GET** /rest-service/reviews-v1/metrics/{version} | 
[**get_project**](DefaultApi.md#get_project) | **GET** /rest-service/projects-v1/{key} | 
[**get_replies**](DefaultApi.md#get_replies) | **GET** /rest-service/reviews-v1/{id}/comments/{cId}/replies | 
[**get_repository_details**](DefaultApi.md#get_repository_details) | **GET** /rest-service/repositories-v1/{repository} | 
[**get_review**](DefaultApi.md#get_review) | **GET** /rest-service/reviews-v1/{id} | 
[**get_review_item**](DefaultApi.md#get_review_item) | **GET** /rest-service/reviews-v1/{id}/reviewitems/{riId} | 
[**get_review_items_comments**](DefaultApi.md#get_review_items_comments) | **GET** /rest-service/reviews-v1/{id}/reviewitems/{riId}/comments | 
[**get_review_items_for_review**](DefaultApi.md#get_review_items_for_review) | **GET** /rest-service/reviews-v1/{id}/reviewitems | 
[**get_review_patches**](DefaultApi.md#get_review_patches) | **GET** /rest-service/reviews-v1/{id}/patch | 
[**get_reviewers**](DefaultApi.md#get_reviewers) | **GET** /rest-service/reviews-v1/{id}/reviewers | 
[**get_reviews_details_for_path**](DefaultApi.md#get_reviews_details_for_path) | **GET** /rest-service/reviews-v1/search/{repository}/details | 
[**get_reviews_for_issue_key**](DefaultApi.md#get_reviews_for_issue_key) | **GET** /rest-service/search-v1/reviewsForIssue | 
[**get_reviews_for_path**](DefaultApi.md#get_reviews_for_path) | **GET** /rest-service/reviews-v1/search/{repository} | 
[**get_reviews_for_term**](DefaultApi.md#get_reviews_for_term) | **GET** /rest-service/search-v1/reviews | 
[**get_svn_repository_details**](DefaultApi.md#get_svn_repository_details) | **GET** /rest-service/repositories-v1/{repository}/svn | 
[**get_uncompleted_reviewers**](DefaultApi.md#get_uncompleted_reviewers) | **GET** /rest-service/reviews-v1/{id}/reviewers/uncompleted | 
[**get_user_profile**](DefaultApi.md#get_user_profile) | **GET** /rest-service/users-v1/{username} | 
[**get_users**](DefaultApi.md#get_users) | **GET** /rest-service/users-v1 | 
[**get_version_info**](DefaultApi.md#get_version_info) | **GET** /rest-service/reviews-v1/versionInfo | 
[**get_versioned_comments**](DefaultApi.md#get_versioned_comments) | **GET** /rest-service/reviews-v1/{id}/comments/versioned | 
[**history**](DefaultApi.md#history) | **GET** /rest-service/repositories-v1/history/{repository}/{revision}/{path} | 
[**login**](DefaultApi.md#login) | **GET** /rest-service/auth-v1/login | 
[**login_post**](DefaultApi.md#login_post) | **POST** /rest-service/auth-v1/login | 
[**mark_all_comments_as_read**](DefaultApi.md#mark_all_comments_as_read) | **POST** /rest-service/reviews-v1/{id}/comments/markAllAsRead | 
[**mark_comment_as_leave_unread**](DefaultApi.md#mark_comment_as_leave_unread) | **POST** /rest-service/reviews-v1/{id}/comments/{cId}/markAsLeaveUnread | 
[**mark_comment_as_read**](DefaultApi.md#mark_comment_as_read) | **POST** /rest-service/reviews-v1/{id}/comments/{cId}/markAsRead | 
[**post_custom_filter_reviews**](DefaultApi.md#post_custom_filter_reviews) | **POST** /rest-service/reviews-v1/filter | 
[**post_detailed_custom_filter_reviews**](DefaultApi.md#post_detailed_custom_filter_reviews) | **POST** /rest-service/reviews-v1/filter/details | 
[**publish_all_comments**](DefaultApi.md#publish_all_comments) | **POST** /rest-service/reviews-v1/{id}/publish | 
[**publish_comment**](DefaultApi.md#publish_comment) | **POST** /rest-service/reviews-v1/{id}/publish/{cId} | 
[**remind_incomplete_reviewers**](DefaultApi.md#remind_incomplete_reviewers) | **POST** /rest-service/reviews-v1/{id}/remind | 
[**remove_comment**](DefaultApi.md#remove_comment) | **DELETE** /rest-service/reviews-v1/{id}/comments/{cId} | 
[**remove_patch**](DefaultApi.md#remove_patch) | **DELETE** /rest-service/reviews-v1/{id}/patch/{patchId} | 
[**remove_reply**](DefaultApi.md#remove_reply) | **DELETE** /rest-service/reviews-v1/{id}/comments/{cId}/replies/{rId} | 
[**remove_review_item**](DefaultApi.md#remove_review_item) | **DELETE** /rest-service/reviews-v1/{id}/reviewitems/{riId} | 
[**remove_review_item_revisions**](DefaultApi.md#remove_review_item_revisions) | **DELETE** /rest-service/reviews-v1/{id}/reviewitems/{riId}/revisions | 
[**remove_reviewer**](DefaultApi.md#remove_reviewer) | **DELETE** /rest-service/reviews-v1/{id}/reviewers/{username} | 
[**set_review_item**](DefaultApi.md#set_review_item) | **PUT** /rest-service/reviews-v1/{id}/reviewitems/{riId}/details | 
[**uncomplete_review**](DefaultApi.md#uncomplete_review) | **POST** /rest-service/reviews-v1/{id}/uncomplete | 
[**update_comment**](DefaultApi.md#update_comment) | **POST** /rest-service/reviews-v1/{id}/comments/{cId} | 
[**update_reply**](DefaultApi.md#update_reply) | **POST** /rest-service/reviews-v1/{id}/comments/{cId}/replies/{rId} | 


# **add_changeset_to_review**
> add_changeset_to_review(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the perm id of the review to add the changeset to

    try:
        api_instance.add_changeset_to_review(id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_changeset_to_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the perm id of the review to add the changeset to | 

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

# **add_file**
> add_file(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id to add the file

    try:
        api_instance.add_file(id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id to add the file | 

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

# **add_fisheye_review_item**
> add_fisheye_review_item(id)



Add the changes between two files in a fisheye repository to the review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the id of the review (e.g. \"CR-362\").

    try:
        api_instance.add_fisheye_review_item(id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_fisheye_review_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the review (e.g. \&quot;CR-362\&quot;). | 

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

# **add_general_comment**
> add_general_comment(id)



Add a general comment to the review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma-id

    try:
        api_instance.add_general_comment(id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_general_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma-id | 

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

# **add_patch_review0**
> add_patch_review0(id)



Old, non-restful name. Kept for backwards compatibility. Exactly the same as POSTing to /{id}/patch

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.add_patch_review0(id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_patch_review0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

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

# **add_patch_to_review**
> add_patch_to_review(id)



Add the revisions in a patch to an existing review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review id to get the patches for

    try:
        api_instance.add_patch_to_review(id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_patch_to_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review id to get the patches for | 

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

# **add_reply**
> add_reply(id, c_id)



Adds a reply to the given comment. This call includes the  repsonse header that  contains the URL of the newly created entity.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma-id (e.g. \"CR-45\").
    c_id = 'c_id_example' # str | the comment to reply to

    try:
        api_instance.add_reply(id, c_id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma-id (e.g. \&quot;CR-45\&quot;). | 
 **c_id** | **str**| the comment to reply to | 

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

# **add_review_item**
> add_review_item(id)



Adds the given review item to the review. This will always create a new review item, even if there is an existing  one with the same data in the review (in which case the existing item will be replaced).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the id of the review (e.g. \"CR-362\").

    try:
        api_instance.add_review_item(id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_review_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the review (e.g. \&quot;CR-362\&quot;). | 

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

# **add_review_item_revisions**
> add_review_item_revisions(ri_id, id, rev=rev)



Adds the given list of revisions to the supplied review item, merging if required. For example, if the review  item for  contains revisions 3 to 6, and if:

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ri_id = 'ri_id_example' # str | the id of the review item (e.g. \"CFR-5622\").
    id = 'id_example' # str | the id of the review (e.g. \"CR-345\").
    rev = 'rev_example' # str | a list of revisions to add to the review item, merging if required. If a revision already exists  in the given review item, then the given revision is ignored. (optional)

    try:
        api_instance.add_review_item_revisions(ri_id, id, rev=rev)
    except Exception as e:
        print("Exception when calling DefaultApi->add_review_item_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ri_id** | **str**| the id of the review item (e.g. \&quot;CFR-5622\&quot;). | 
 **id** | **str**| the id of the review (e.g. \&quot;CR-345\&quot;). | 
 **rev** | **str**| a list of revisions to add to the review item, merging if required. If a revision already exists  in the given review item, then the given revision is ignored. | [optional] 

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

# **add_review_items**
> add_review_items(id)



Adds a review item for each of the supplied crucibleRevisionData elements.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the id of the review (e.g. \"CR-362\").

    try:
        api_instance.add_review_items(id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_review_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the review (e.g. \&quot;CR-362\&quot;). | 

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

# **add_reviewers**
> add_reviewers(id)



Adds the given list of reviewers to the review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the id of the review to add to

    try:
        api_instance.add_reviewers(id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_reviewers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the review to add to | 

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

# **add_versioned_comment**
> add_versioned_comment(ri_id, id)



This call includes the  repsonse header that contains the URL of the newly created entity.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ri_id = 'ri_id_example' # str | the review item id.
    id = 'id_example' # str | the review perma id

    try:
        api_instance.add_versioned_comment(ri_id, id)
    except Exception as e:
        print("Exception when calling DefaultApi->add_versioned_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ri_id** | **str**| the review item id. | 
 **id** | **str**| the review perma id | 

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

# **browse**
> browse(path, repository)



Lists the contents of the specified directory.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    path = 'path_example' # str | path to a directory. When path represents a file name, the result is unspecified.
    repository = 'repository_example' # str | the key of the Crucible SCM plugin repository.

    try:
        api_instance.browse(path, repository)
    except Exception as e:
        print("Exception when calling DefaultApi->browse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| path to a directory. When path represents a file name, the result is unspecified. | 
 **repository** | **str**| the key of the Crucible SCM plugin repository. | 

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

# **change**
> change(repository, revision)



Represents a particular changeset.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the Crucible SCM plugin repository.
    revision = 'revision_example' # str | the SCM revision string.

    try:
        api_instance.change(repository, revision)
    except Exception as e:
        print("Exception when calling DefaultApi->change: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the Crucible SCM plugin repository. | 
 **revision** | **str**| the SCM revision string. | 

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

# **change_state**
> change_state(id, action=action, ignore_warnings=ignore_warnings)



Change the state of a review by performing an action on it.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma-id (e.g. \"CR-45\").
    action = 'action_example' # str | the string representation of the action to perform. Valid actions are:    Note: (optional)
    ignore_warnings = True # bool | if  then condition failure warnings will be ignored (optional) (default to True)

    try:
        api_instance.change_state(id, action=action, ignore_warnings=ignore_warnings)
    except Exception as e:
        print("Exception when calling DefaultApi->change_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma-id (e.g. \&quot;CR-45\&quot;). | 
 **action** | **str**| the string representation of the action to perform. Valid actions are:    Note: | [optional] 
 **ignore_warnings** | **bool**| if  then condition failure warnings will be ignored | [optional] [default to True]

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

# **changes**
> changes(path, repository, oldest_csid=oldest_csid, include_oldest=include_oldest, newest_csid=newest_csid, include_newest=include_newest, max=max)



Represents a sorted list of changesets, newest first.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    path = 'path_example' # str | only show change sets which contain at least one revision with a path under this path.  Changesets with some revisions outside this path still include all revisions.  i.e. Revisions outside the path are *not* excluded from the change set.
    repository = 'repository_example' # str | the key of the Crucible SCM plugin repository.
    oldest_csid = 'oldest_csid_example' # str | only return change sets after this change set. If omitted there is no restriction. (optional)
    include_oldest = True # bool | include the change set with id \"from\" in the change sets returned. (optional)
    newest_csid = 'newest_csid_example' # str | only return change sets before this change set. If omitted there is no restriction. (optional)
    include_newest = True # bool | include the change set with id \"to\" in the change sets returned. (optional)
    max = 56 # int | return only the newest change sets, to a maximum of maxChangesets. (optional)

    try:
        api_instance.changes(path, repository, oldest_csid=oldest_csid, include_oldest=include_oldest, newest_csid=newest_csid, include_newest=include_newest, max=max)
    except Exception as e:
        print("Exception when calling DefaultApi->changes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| only show change sets which contain at least one revision with a path under this path.  Changesets with some revisions outside this path still include all revisions.  i.e. Revisions outside the path are *not* excluded from the change set. | 
 **repository** | **str**| the key of the Crucible SCM plugin repository. | 
 **oldest_csid** | **str**| only return change sets after this change set. If omitted there is no restriction. | [optional] 
 **include_oldest** | **bool**| include the change set with id \&quot;from\&quot; in the change sets returned. | [optional] 
 **newest_csid** | **str**| only return change sets before this change set. If omitted there is no restriction. | [optional] 
 **include_newest** | **bool**| include the change set with id \&quot;to\&quot; in the change sets returned. | [optional] 
 **max** | **int**| return only the newest change sets, to a maximum of maxChangesets. | [optional] 

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

# **close_review_with_comment**
> close_review_with_comment(id)



Closes the given review with the summary given.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id to close. it should be in the open state.

    try:
        api_instance.close_review_with_comment(id)
    except Exception as e:
        print("Exception when calling DefaultApi->close_review_with_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id to close. it should be in the open state. | 

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

# **complete_review**
> complete_review(id, ignore_warnings=ignore_warnings)



Completes the review for the current user

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id
    ignore_warnings = True # bool | if {@code ignoreWarnings==true} then condition failure warnings will be ignored (optional) (default to True)

    try:
        api_instance.complete_review(id, ignore_warnings=ignore_warnings)
    except Exception as e:
        print("Exception when calling DefaultApi->complete_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id | 
 **ignore_warnings** | **bool**| if {@code ignoreWarnings&#x3D;&#x3D;true} then condition failure warnings will be ignored | [optional] [default to True]

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

# **create_review**
> create_review()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.create_review()
    except Exception as e:
        print("Exception when calling DefaultApi->create_review: %s\n" % e)
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

# **delete_review**
> delete_review(id)



Permanently deletes the specified review.  The review must have been abandoned.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the permId of the review to delete (e.g. \"CR-45\").

    try:
        api_instance.delete_review(id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the permId of the review to delete (e.g. \&quot;CR-45\&quot;). | 

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

# **details**
> details(path, repository, revision)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    path = 'path_example' # str | the path of a file or versioned directory (note that  versioned directories are not supported by all SCM plugins).
    repository = 'repository_example' # str | the key of the Crucible SCM plugin repository.
    revision = 'revision_example' # str | the SCM revision string.

    try:
        api_instance.details(path, repository, revision)
    except Exception as e:
        print("Exception when calling DefaultApi->details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| the path of a file or versioned directory (note that  versioned directories are not supported by all SCM plugins). | 
 **repository** | **str**| the key of the Crucible SCM plugin repository. | 
 **revision** | **str**| the SCM revision string. | 

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

# **get_all_comments**
> get_all_comments(id, render=render)



Return all the comments visible to the requesting user for the review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma-id
    render = False # bool | indicate whether to render the wiki text in the returned comments. If set to \"true\", the comments will contain a  <messageAsHtml> element containing the wiki rendered html. (optional) (default to False)

    try:
        api_instance.get_all_comments(id, render=render)
    except Exception as e:
        print("Exception when calling DefaultApi->get_all_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma-id | 
 **render** | **bool**| indicate whether to render the wiki text in the returned comments. If set to \&quot;true\&quot;, the comments will contain a  &lt;messageAsHtml&gt; element containing the wiki rendered html. | [optional] [default to False]

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

# **get_all_detailed_reviews**
> get_all_detailed_reviews(state=state)



Retrieves all reviews that are in one of the the specified states. For each review all details are included (review items + comments). The  wiki rendered comments will be available via the <messageAsHtml> element

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    state = 'state_example' # str | the review states to match. (optional)

    try:
        api_instance.get_all_detailed_reviews(state=state)
    except Exception as e:
        print("Exception when calling DefaultApi->get_all_detailed_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **str**| the review states to match. | [optional] 

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

# **get_all_projects**
> get_all_projects(exclude_allowed_reviewers=exclude_allowed_reviewers)



Get the list of projects that the authenticated user is entitled to access.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    exclude_allowed_reviewers = False # bool | if set to true, user data (e.g. allowedReviewers) which is expensive  to compute, will not be included in the response data. Defaults to false so allowedReviewers are included in the response. (optional) (default to False)

    try:
        api_instance.get_all_projects(exclude_allowed_reviewers=exclude_allowed_reviewers)
    except Exception as e:
        print("Exception when calling DefaultApi->get_all_projects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exclude_allowed_reviewers** | **bool**| if set to true, user data (e.g. allowedReviewers) which is expensive  to compute, will not be included in the response data. Defaults to false so allowedReviewers are included in the response. | [optional] [default to False]

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

# **get_all_repositories**
> get_all_repositories(name=name, enabled=enabled, available=available, type=type, limit=limit)



Returns a list of all repositories. This includes plugin provided repositories

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    name = 'name_example' # str | filter repositories by the repository key, only repositories of keys containing this value  would be returned if value was provided.  Case insensitive. (optional)
    enabled = True # bool | filter repositories by enabled flag.  Only enabled/disabled repositories would be returned  accordingly if value was provided. (optional)
    available = True # bool | filter repositories by its availability.  Only available/unavailable repositories would be returned  accordingly if value was provided. (optional)
    type = 'type_example' # str | filter repositories by type.  Allowed values: cvs, svn, p4, git, hg, plugin (for light SCM repositories).  Parameter can be specified more than once. (optional)
    limit = 10000 # int | maximum number of repositories to be returned. (optional) (default to 10000)

    try:
        api_instance.get_all_repositories(name=name, enabled=enabled, available=available, type=type, limit=limit)
    except Exception as e:
        print("Exception when calling DefaultApi->get_all_repositories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| filter repositories by the repository key, only repositories of keys containing this value  would be returned if value was provided.  Case insensitive. | [optional] 
 **enabled** | **bool**| filter repositories by enabled flag.  Only enabled/disabled repositories would be returned  accordingly if value was provided. | [optional] 
 **available** | **bool**| filter repositories by its availability.  Only available/unavailable repositories would be returned  accordingly if value was provided. | [optional] 
 **type** | **str**| filter repositories by type.  Allowed values: cvs, svn, p4, git, hg, plugin (for light SCM repositories).  Parameter can be specified more than once. | [optional] 
 **limit** | **int**| maximum number of repositories to be returned. | [optional] [default to 10000]

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

# **get_all_reviews**
> get_all_reviews(state=state)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    state = 'state_example' # str | only return reviews that are in these states. (optional)

    try:
        api_instance.get_all_reviews(state=state)
    except Exception as e:
        print("Exception when calling DefaultApi->get_all_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **str**| only return reviews that are in these states. | [optional] 

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

# **get_available_actions**
> get_available_actions(id)



Get a list of the actions which the current user is allowed to perform  on the review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the permId of the a review (e.g. \"CR-45\").

    try:
        api_instance.get_available_actions(id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_available_actions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the permId of the a review (e.g. \&quot;CR-45\&quot;). | 

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

# **get_available_transitions**
> get_available_transitions(id)



Get a list of the actions which the current user can perform on this  review, given its current state and the user's permissions.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the permId of the a review (e.g. \"CR-45\").

    try:
        api_instance.get_available_transitions(id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_available_transitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the permId of the a review (e.g. \&quot;CR-45\&quot;). | 

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

# **get_comment**
> get_comment(id, c_id, render=render)



Gets the given comment.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the perma id of the review
    c_id = 'c_id_example' # str | the id of the comment
    render = False # bool | true if the wiki text should be rendered into html, into the field <messageAsHtml>. (optional) (default to False)

    try:
        api_instance.get_comment(id, c_id, render=render)
    except Exception as e:
        print("Exception when calling DefaultApi->get_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the perma id of the review | 
 **c_id** | **str**| the id of the comment | 
 **render** | **bool**| true if the wiki text should be rendered into html, into the field &lt;messageAsHtml&gt;. | [optional] [default to False]

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

# **get_completed_reviewers**
> get_completed_reviewers(id)



Gets a list of completed reviewers.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id to retrieve reviewers

    try:
        api_instance.get_completed_reviewers(id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_completed_reviewers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id to retrieve reviewers | 

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

# **get_contents**
> get_contents(path, repository, revision)



Returns the raw content of the specified file revision as a binary  stream. No attempt is made to identify the content type and no mime  type is provided.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    path = 'path_example' # str | the path of a file.
    repository = 'repository_example' # str | the key of the Crucible SCM plugin repository.
    revision = 'revision_example' # str | the SCM revision string.

    try:
        api_instance.get_contents(path, repository, revision)
    except Exception as e:
        print("Exception when calling DefaultApi->get_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| the path of a file. | 
 **repository** | **str**| the key of the Crucible SCM plugin repository. | 
 **revision** | **str**| the SCM revision string. | 

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

# **get_custom_filter_reviews**
> get_custom_filter_reviews(title=title, author=author, moderator=moderator, creator=creator, states=states, reviewer=reviewer, or_roles=or_roles, complete=complete, all_reviewers_complete=all_reviewers_complete, project=project, from_date=from_date, to_date=to_date)



To ignore a property, omit it from the query string.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    title = 'title_example' # str | a string that will be searched for in review titles. (optional)
    author = 'author_example' # str | reviews authored by this user. (optional)
    moderator = 'moderator_example' # str | reviews moderated by this user. (optional)
    creator = 'creator_example' # str | reviews created by this user. (optional)
    states = 'states_example' # str | comma-separated list of amy of the following strings: (Draft,  Approval, Review, Summarize, Closed, Dead, Rejected, Unknown). (optional)
    reviewer = 'reviewer_example' # str | reviews reviewed by this user. (optional)
    or_roles = True # bool | whether the value of , ,   and  should be OR'd  () or AND'd ()  together. (optional)
    complete = True # bool | reviews that the specified reviewer has completed. (optional)
    all_reviewers_complete = True # bool | Reviews that all reviewers have completed. (optional)
    project = 'project_example' # str | reviews for the specified project. (optional)
    from_date = 56 # int | reviews with last activity date after the specified timestamp, in milliseconds. Inclusive. (optional)
    to_date = 56 # int | reviews with last activity date before the specified timestamp, in milliseconds. Inclusive. (optional)

    try:
        api_instance.get_custom_filter_reviews(title=title, author=author, moderator=moderator, creator=creator, states=states, reviewer=reviewer, or_roles=or_roles, complete=complete, all_reviewers_complete=all_reviewers_complete, project=project, from_date=from_date, to_date=to_date)
    except Exception as e:
        print("Exception when calling DefaultApi->get_custom_filter_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **str**| a string that will be searched for in review titles. | [optional] 
 **author** | **str**| reviews authored by this user. | [optional] 
 **moderator** | **str**| reviews moderated by this user. | [optional] 
 **creator** | **str**| reviews created by this user. | [optional] 
 **states** | **str**| comma-separated list of amy of the following strings: (Draft,  Approval, Review, Summarize, Closed, Dead, Rejected, Unknown). | [optional] 
 **reviewer** | **str**| reviews reviewed by this user. | [optional] 
 **or_roles** | **bool**| whether the value of , ,   and  should be OR&#39;d  () or AND&#39;d ()  together. | [optional] 
 **complete** | **bool**| reviews that the specified reviewer has completed. | [optional] 
 **all_reviewers_complete** | **bool**| Reviews that all reviewers have completed. | [optional] 
 **project** | **str**| reviews for the specified project. | [optional] 
 **from_date** | **int**| reviews with last activity date after the specified timestamp, in milliseconds. Inclusive. | [optional] 
 **to_date** | **int**| reviews with last activity date before the specified timestamp, in milliseconds. Inclusive. | [optional] 

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

# **get_detailed_custom_filter_reviews**
> get_detailed_custom_filter_reviews(title=title, author=author, moderator=moderator, creator=creator, states=states, reviewer=reviewer, or_roles=or_roles, complete=complete, all_reviewers_complete=all_reviewers_complete, project=project, from_date=from_date, to_date=to_date)



To ignore a property, omit it from the query string.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    title = 'title_example' # str | a string that will be searched for in review titles. (optional)
    author = 'author_example' # str | reviews authored by this user. (optional)
    moderator = 'moderator_example' # str | reviews moderated by this user. (optional)
    creator = 'creator_example' # str | reviews created by this user. (optional)
    states = 'states_example' # str | comma-separated list of amy of the following strings: (Draft,  Approval, Review, Summarize, Closed, Dead, Rejected, Unknown). (optional)
    reviewer = 'reviewer_example' # str | reviews reviewed by this user. (optional)
    or_roles = True # bool | whether the value of , ,   and  should be OR'd  () or AND'd ()  together. (optional)
    complete = True # bool | reviews that the specified reviewer has completed. (optional)
    all_reviewers_complete = True # bool | Reviews that all reviewers have completed. (optional)
    project = 'project_example' # str | reviews for the specified project. (optional)
    from_date = 56 # int | reviews with last activity date after the specified timestamp, in milliseconds. Inclusive. (optional)
    to_date = 56 # int | reviews with last activity date before the specified timestamp, in milliseconds. Inclusive. (optional)

    try:
        api_instance.get_detailed_custom_filter_reviews(title=title, author=author, moderator=moderator, creator=creator, states=states, reviewer=reviewer, or_roles=or_roles, complete=complete, all_reviewers_complete=all_reviewers_complete, project=project, from_date=from_date, to_date=to_date)
    except Exception as e:
        print("Exception when calling DefaultApi->get_detailed_custom_filter_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **str**| a string that will be searched for in review titles. | [optional] 
 **author** | **str**| reviews authored by this user. | [optional] 
 **moderator** | **str**| reviews moderated by this user. | [optional] 
 **creator** | **str**| reviews created by this user. | [optional] 
 **states** | **str**| comma-separated list of amy of the following strings: (Draft,  Approval, Review, Summarize, Closed, Dead, Rejected, Unknown). | [optional] 
 **reviewer** | **str**| reviews reviewed by this user. | [optional] 
 **or_roles** | **bool**| whether the value of , ,   and  should be OR&#39;d  () or AND&#39;d ()  together. | [optional] 
 **complete** | **bool**| reviews that the specified reviewer has completed. | [optional] 
 **all_reviewers_complete** | **bool**| Reviews that all reviewers have completed. | [optional] 
 **project** | **str**| reviews for the specified project. | [optional] 
 **from_date** | **int**| reviews with last activity date after the specified timestamp, in milliseconds. Inclusive. | [optional] 
 **to_date** | **int**| reviews with last activity date before the specified timestamp, in milliseconds. Inclusive. | [optional] 

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

# **get_detailed_filtered_reviews_for_user**
> get_detailed_filtered_reviews_for_user(filter)



Gets a list of all the reviews that match the specified filter criteria.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    filter = 'filter_example' # str | a predefined filter type.

    try:
        api_instance.get_detailed_filtered_reviews_for_user(filter)
    except Exception as e:
        print("Exception when calling DefaultApi->get_detailed_filtered_reviews_for_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| a predefined filter type. | 

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

# **get_detailed_review**
> get_detailed_review(id)



Returns the specified review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the permId of the review (e.g. \"CR-45\").

    try:
        api_instance.get_detailed_review(id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_detailed_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the permId of the review (e.g. \&quot;CR-45\&quot;). | 

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

# **get_filtered_reviews_for_user**
> get_filtered_reviews_for_user(filter)



Get all the reviews which match the given filter, for the current user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    filter = 'filter_example' # str | a predefined filter type.

    try:
        api_instance.get_filtered_reviews_for_user(filter)
    except Exception as e:
        print("Exception when calling DefaultApi->get_filtered_reviews_for_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| a predefined filter type. | 

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

# **get_general_comments**
> get_general_comments(id, render=render)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | review perma-id
    render = False # bool | indicate whether to render the wiki text in the returned comments. If set to \"true\", the comments will contain a  <messageAsHtml> element containing the wiki rendered html. (optional) (default to False)

    try:
        api_instance.get_general_comments(id, render=render)
    except Exception as e:
        print("Exception when calling DefaultApi->get_general_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| review perma-id | 
 **render** | **bool**| indicate whether to render the wiki text in the returned comments. If set to \&quot;true\&quot;, the comments will contain a  &lt;messageAsHtml&gt; element containing the wiki rendered html. | [optional] [default to False]

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

# **get_mapped_user**
> get_mapped_user(repository, username)



Returns the user details of the user mapped to a committer in a repository.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository
    username = 'username_example' # str | the name of the committer

    try:
        api_instance.get_mapped_user(repository, username)
    except Exception as e:
        print("Exception when calling DefaultApi->get_mapped_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository | 
 **username** | **str**| the name of the committer | 

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

# **get_metrics**
> get_metrics(version)



Get comment metrics metadata for the specified metrics version.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    version = 'version_example' # str | a metrics version.

    try:
        api_instance.get_metrics(version)
    except Exception as e:
        print("Exception when calling DefaultApi->get_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**| a metrics version. | 

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

# **get_project**
> get_project(key, exclude_allowed_reviewers=exclude_allowed_reviewers)



Returns a project description.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | the key of a Crucible project.
    exclude_allowed_reviewers = False # bool |  (optional) (default to False)

    try:
        api_instance.get_project(key, exclude_allowed_reviewers=exclude_allowed_reviewers)
    except Exception as e:
        print("Exception when calling DefaultApi->get_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| the key of a Crucible project. | 
 **exclude_allowed_reviewers** | **bool**|  | [optional] [default to False]

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

# **get_replies**
> get_replies(id, c_id, render=render)



Gets the replies to the given comment.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma-id (e.g. \"CR-45\").
    c_id = 'c_id_example' # str | the comment to reply to
    render = False # bool | true if the comments should also be rendered into html, into the element <messageAsHtml> (optional) (default to False)

    try:
        api_instance.get_replies(id, c_id, render=render)
    except Exception as e:
        print("Exception when calling DefaultApi->get_replies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma-id (e.g. \&quot;CR-45\&quot;). | 
 **c_id** | **str**| the comment to reply to | 
 **render** | **bool**| true if the comments should also be rendered into html, into the element &lt;messageAsHtml&gt; | [optional] [default to False]

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

# **get_repository_details**
> get_repository_details(repository)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the Crucible SCM plugin repository.

    try:
        api_instance.get_repository_details(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->get_repository_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the Crucible SCM plugin repository. | 

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

# **get_review**
> get_review(id)



Get a single review by its permId (e.g. \"CR-45\").  If the review does not exist, a 404 is returned.    The moderator element may not exist if the review does not have a Moderator.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the permId of the review to delete (e.g. \"CR-45\").

    try:
        api_instance.get_review(id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the permId of the review to delete (e.g. \&quot;CR-45\&quot;). | 

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

# **get_review_item**
> get_review_item(ri_id, id)



Returns detailed information for a specific review item.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ri_id = 'ri_id_example' # str | review item id (e.g. \"CFR-6312\").
    id = 'id_example' # str | review id (e.g. \"CR-345\").

    try:
        api_instance.get_review_item(ri_id, id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_review_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ri_id** | **str**| review item id (e.g. \&quot;CFR-6312\&quot;). | 
 **id** | **str**| review id (e.g. \&quot;CR-345\&quot;). | 

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

# **get_review_items_comments**
> get_review_items_comments(ri_id, id, render=render)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ri_id = 'ri_id_example' # str | the review item id.
    id = 'id_example' # str | the review perma id
    render = False # bool | indicate whether to render the wiki text in the returned comments. If set to \"true\", the comments will contain a  <messageAsHtml> element containing the wiki rendered html. (optional) (default to False)

    try:
        api_instance.get_review_items_comments(ri_id, id, render=render)
    except Exception as e:
        print("Exception when calling DefaultApi->get_review_items_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ri_id** | **str**| the review item id. | 
 **id** | **str**| the review perma id | 
 **render** | **bool**| indicate whether to render the wiki text in the returned comments. If set to \&quot;true\&quot;, the comments will contain a  &lt;messageAsHtml&gt; element containing the wiki rendered html. | [optional] [default to False]

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

# **get_review_items_for_review**
> get_review_items_for_review(id)



Returns a list of all the items in a review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the id of the review (e.g. \"CR-362\").

    try:
        api_instance.get_review_items_for_review(id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_review_items_for_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the review (e.g. \&quot;CR-362\&quot;). | 

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

# **get_review_patches**
> get_review_patches(id)



Get a list of patches and their details for the given review

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review id to get the patches for

    try:
        api_instance.get_review_patches(id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_review_patches: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review id to get the patches for | 

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

# **get_reviewers**
> get_reviewers(id)



Get a list of reviewers in the review given by the permaid id.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the id of the review to add to

    try:
        api_instance.get_reviewers(id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_reviewers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the review to add to | 

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

# **get_reviews_details_for_path**
> get_reviews_details_for_path(repository, path=path)



Return a list of Reviews which include a particular file.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to search for file.
    path = 'path_example' # str | path to find in reviews. (optional)

    try:
        api_instance.get_reviews_details_for_path(repository, path=path)
    except Exception as e:
        print("Exception when calling DefaultApi->get_reviews_details_for_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to search for file. | 
 **path** | **str**| path to find in reviews. | [optional] 

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

# **get_reviews_for_issue_key**
> get_reviews_for_issue_key(jira_key=jira_key, max_return=max_return)



Get a list of all reviews that have been linked to the specified JIRA issue key.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    jira_key = 'jira_key_example' # str | a Jira issue key (e.g. \"FOO-3453\") (optional)
    max_return = 'max_return_example' # str | the maximum number of reviews to return. (optional)

    try:
        api_instance.get_reviews_for_issue_key(jira_key=jira_key, max_return=max_return)
    except Exception as e:
        print("Exception when calling DefaultApi->get_reviews_for_issue_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jira_key** | **str**| a Jira issue key (e.g. \&quot;FOO-3453\&quot;) | [optional] 
 **max_return** | **str**| the maximum number of reviews to return. | [optional] 

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

# **get_reviews_for_path**
> get_reviews_for_path(repository, path=path)



Return a list of Reviews which include a particular file.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of the repository to search for file
    path = 'path_example' # str | path to find in reviews (optional)

    try:
        api_instance.get_reviews_for_path(repository, path=path)
    except Exception as e:
        print("Exception when calling DefaultApi->get_reviews_for_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of the repository to search for file | 
 **path** | **str**| path to find in reviews | [optional] 

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

# **get_reviews_for_term**
> get_reviews_for_term(term=term, max_return=max_return)



Search for reviews where the name, description, state or permaId contain the specified term.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    term = 'term_example' # str | a search term. (optional)
    max_return = 'max_return_example' # str | the maximum number of reviews to return. (optional)

    try:
        api_instance.get_reviews_for_term(term=term, max_return=max_return)
    except Exception as e:
        print("Exception when calling DefaultApi->get_reviews_for_term: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **str**| a search term. | [optional] 
 **max_return** | **str**| the maximum number of reviews to return. | [optional] 

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

# **get_svn_repository_details**
> get_svn_repository_details(repository)



For backward compatibility we provide this method, but repositories should be referred to just by their key.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    repository = 'repository_example' # str | the key of a FishEye or Crucible SCM plugin repository

    try:
        api_instance.get_svn_repository_details(repository)
    except Exception as e:
        print("Exception when calling DefaultApi->get_svn_repository_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | **str**| the key of a FishEye or Crucible SCM plugin repository | 

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

# **get_uncompleted_reviewers**
> get_uncompleted_reviewers(id)



Gets a list of reviewers that have not completed the review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id to retrieve reviewers

    try:
        api_instance.get_uncompleted_reviewers(id)
    except Exception as e:
        print("Exception when calling DefaultApi->get_uncompleted_reviewers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id to retrieve reviewers | 

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

# **get_user_profile**
> get_user_profile(username)



Returns the user's profile details.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | the username of the user

    try:
        api_instance.get_user_profile(username)
    except Exception as e:
        print("Exception when calling DefaultApi->get_user_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| the username of the user | 

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

# **get_users**
> get_users(username=username)



Get a list of all the users. You can also ask for a set of users.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | a username (or a few) to limit the number of returned entries. It will return only existing users. (optional)

    try:
        api_instance.get_users(username=username)
    except Exception as e:
        print("Exception when calling DefaultApi->get_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| a username (or a few) to limit the number of returned entries. It will return only existing users. | [optional] 

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

# **get_version_info**
> get_version_info()



Returns Crucible version information.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.get_version_info()
    except Exception as e:
        print("Exception when calling DefaultApi->get_version_info: %s\n" % e)
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

# **get_versioned_comments**
> get_versioned_comments(id, render=render)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | review perma-id
    render = False # bool | indicate whether to render the wiki text in the returned comments. If set to \"true\", the comments will contain a  <messageAsHtml> element containing the wiki rendered html. (optional) (default to False)

    try:
        api_instance.get_versioned_comments(id, render=render)
    except Exception as e:
        print("Exception when calling DefaultApi->get_versioned_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| review perma-id | 
 **render** | **bool**| indicate whether to render the wiki text in the returned comments. If set to \&quot;true\&quot;, the comments will contain a  &lt;messageAsHtml&gt; element containing the wiki rendered html. | [optional] [default to False]

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

# **history**
> history(path, repository, revision)



Represents the history of a versioned entity.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    path = 'path_example' # str | the path of a file or versioned directory (note that  versioned directories are not supported by all SCM plugins).
    repository = 'repository_example' # str | the key of the Crucible SCM plugin repository.
    revision = 'revision_example' # str | the SCM revision string.

    try:
        api_instance.history(path, repository, revision)
    except Exception as e:
        print("Exception when calling DefaultApi->history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| the path of a file or versioned directory (note that  versioned directories are not supported by all SCM plugins). | 
 **repository** | **str**| the key of the Crucible SCM plugin repository. | 
 **revision** | **str**| the SCM revision string. | 

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

# **login**
> login(user_name=user_name, password=password)



Get the user authentication token.    This is a legacy version of the login request. Using GET is deprecated as your password is likely to appear in logs which record request URLs.  Use the POST version instead.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    user_name = 'user_name_example' # str | the username of the user to get the token for (optional)
    password = 'password_example' # str | the password for the user to get the token for (optional)

    try:
        api_instance.login(user_name=user_name, password=password)
    except Exception as e:
        print("Exception when calling DefaultApi->login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| the username of the user to get the token for | [optional] 
 **password** | **str**| the password for the user to get the token for | [optional] 

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

# **login_post**
> login_post()



Get the user authentication token.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.login_post()
    except Exception as e:
        print("Exception when calling DefaultApi->login_post: %s\n" % e)
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

# **mark_all_comments_as_read**
> mark_all_comments_as_read(id)



For the effective user, mark all comments in a review as read (except  those marked as leave unread).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma-id (e.g. \"CR-45\").

    try:
        api_instance.mark_all_comments_as_read(id)
    except Exception as e:
        print("Exception when calling DefaultApi->mark_all_comments_as_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma-id (e.g. \&quot;CR-45\&quot;). | 

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

# **mark_comment_as_leave_unread**
> mark_comment_as_leave_unread(id, c_id)



Marks the comment as leave unread to the current user - it will not automatically be marked as read by crucible.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id for the comment
    c_id = 'c_id_example' # str | the comment perma id

    try:
        api_instance.mark_comment_as_leave_unread(id, c_id)
    except Exception as e:
        print("Exception when calling DefaultApi->mark_comment_as_leave_unread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id for the comment | 
 **c_id** | **str**| the comment perma id | 

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

# **mark_comment_as_read**
> mark_comment_as_read(id, c_id)



Mark the given comment as read for the user used to make this POST.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id
    c_id = 'c_id_example' # str | the comment perma id.

    try:
        api_instance.mark_comment_as_read(id, c_id)
    except Exception as e:
        print("Exception when calling DefaultApi->mark_comment_as_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id | 
 **c_id** | **str**| the comment perma id. | 

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

# **post_custom_filter_reviews**
> post_custom_filter_reviews()



This method should no longer be used, as it uses a POST for a read-only  retrieval operation and is provided for backward compatibility only.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.post_custom_filter_reviews()
    except Exception as e:
        print("Exception when calling DefaultApi->post_custom_filter_reviews: %s\n" % e)
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

# **post_detailed_custom_filter_reviews**
> post_detailed_custom_filter_reviews()



This method should no longer be used, as it uses a POST for a read-only  retrieval operation and is provided for backward compatibility only.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.post_detailed_custom_filter_reviews()
    except Exception as e:
        print("Exception when calling DefaultApi->post_detailed_custom_filter_reviews: %s\n" % e)
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

# **publish_all_comments**
> publish_all_comments(id)



Publishes all the draft comments of the current user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id to look for draft comments

    try:
        api_instance.publish_all_comments(id)
    except Exception as e:
        print("Exception when calling DefaultApi->publish_all_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id to look for draft comments | 

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

# **publish_comment**
> publish_comment(id, c_id)



publishes the given draft comment.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id
    c_id = 'c_id_example' # str | the comment perma id

    try:
        api_instance.publish_comment(id, c_id)
    except Exception as e:
        print("Exception when calling DefaultApi->publish_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id | 
 **c_id** | **str**| the comment perma id | 

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

# **remind_incomplete_reviewers**
> remind_incomplete_reviewers(id)



Immediately send a reminder to incomplete reviewers about the given review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id to remind about. it should be in the open state.

    try:
        api_instance.remind_incomplete_reviewers(id)
    except Exception as e:
        print("Exception when calling DefaultApi->remind_incomplete_reviewers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id to remind about. it should be in the open state. | 

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

# **remove_comment**
> remove_comment(id, c_id)



Deletes the given comment.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the perma id of the review
    c_id = 'c_id_example' # str | the id of the comment

    try:
        api_instance.remove_comment(id, c_id)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the perma id of the review | 
 **c_id** | **str**| the id of the comment | 

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

# **remove_patch**
> remove_patch(patch_id, id)



Removes the patch with the given id from the review. All of the revisions provided by the patch will be removed as well.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    patch_id = 56 # int | the id of the patch (as returned by the '{id}/patch' resource)
    id = 'id_example' # str | the permaId of the review

    try:
        api_instance.remove_patch(patch_id, id)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patch_id** | **int**| the id of the patch (as returned by the &#39;{id}/patch&#39; resource) | 
 **id** | **str**| the permaId of the review | 

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

# **remove_reply**
> remove_reply(id, r_id, c_id)



Deletes the reply.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The review perma id
    r_id = 'r_id_example' # str | the perma id of the reply to delete
    c_id = 'c_id_example' # str | the reply's parent comment perma id

    try:
        api_instance.remove_reply(id, r_id, c_id)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The review perma id | 
 **r_id** | **str**| the perma id of the reply to delete | 
 **c_id** | **str**| the reply&#39;s parent comment perma id | 

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

# **remove_review_item**
> remove_review_item(ri_id, id)



Removes an item from a review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ri_id = 'ri_id_example' # str | review item id (e.g. \"CFR-6312\").
    id = 'id_example' # str | review id (e.g. \"CR-345\").

    try:
        api_instance.remove_review_item(ri_id, id)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_review_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ri_id** | **str**| review item id (e.g. \&quot;CFR-6312\&quot;). | 
 **id** | **str**| review id (e.g. \&quot;CR-345\&quot;). | 

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

# **remove_review_item_revisions**
> remove_review_item_revisions(ri_id, id, rev=rev)



Removes the revisions given from the review item in the review specified by the id. If the review item has no  more revisions left, it is automatically deleted.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ri_id = 'ri_id_example' # str | the id of the review item (e.g. \"CFR-5622\").
    id = 'id_example' # str | the id of the review (e.g. \"CR-345\").
    rev = 'rev_example' # str | a list of revisions to add to the review item, merging if required. If a revision already exists  in the given review item, then the given revision is ignored. (optional)

    try:
        api_instance.remove_review_item_revisions(ri_id, id, rev=rev)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_review_item_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ri_id** | **str**| the id of the review item (e.g. \&quot;CFR-5622\&quot;). | 
 **id** | **str**| the id of the review (e.g. \&quot;CR-345\&quot;). | 
 **rev** | **str**| a list of revisions to add to the review item, merging if required. If a revision already exists  in the given review item, then the given revision is ignored. | [optional] 

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

# **remove_reviewer**
> remove_reviewer(id, username)



Removes the reviewer from the review.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the perma id of the review
    username = 'username_example' # str | the name of the reviewer.

    try:
        api_instance.remove_reviewer(id, username)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_reviewer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the perma id of the review | 
 **username** | **str**| the name of the reviewer. | 

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

# **set_review_item**
> set_review_item(ri_id, id)



Sets the review item specified by itemId with the given reviewItem. The old review item is discarded. Can only  perform this operation if the old review item specified by itemId can be deleted. The old review item's permId is  not changed.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ri_id = 'ri_id_example' # str | a valid review item id (e.g. \"CFR-5622\").
    id = 'id_example' # str | a valid review id (e.g. \"CR-345\").

    try:
        api_instance.set_review_item(ri_id, id)
    except Exception as e:
        print("Exception when calling DefaultApi->set_review_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ri_id** | **str**| a valid review item id (e.g. \&quot;CFR-5622\&quot;). | 
 **id** | **str**| a valid review id (e.g. \&quot;CR-345\&quot;). | 

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

# **uncomplete_review**
> uncomplete_review(id, ignore_warnings=ignore_warnings)



Uncompletes the review for the current user.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the review perma id
    ignore_warnings = True # bool | if {@code ignoreWarnings==true} then condition failure warnings will be ignored (optional) (default to True)

    try:
        api_instance.uncomplete_review(id, ignore_warnings=ignore_warnings)
    except Exception as e:
        print("Exception when calling DefaultApi->uncomplete_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the review perma id | 
 **ignore_warnings** | **bool**| if {@code ignoreWarnings&#x3D;&#x3D;true} then condition failure warnings will be ignored | [optional] [default to True]

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

# **update_comment**
> update_comment(id, c_id)



Updates the comment given by the perma id to the new comment posted.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | the perma id of the review
    c_id = 'c_id_example' # str | the id of the comment

    try:
        api_instance.update_comment(id, c_id)
    except Exception as e:
        print("Exception when calling DefaultApi->update_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the perma id of the review | 
 **c_id** | **str**| the id of the comment | 

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

# **update_reply**
> update_reply(id, r_id, c_id)



Updates a reply with the given newComment.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://crucible.local/context
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://crucible.local/context"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The review perma id
    r_id = 'r_id_example' # str | the perma id of the reply to delete
    c_id = 'c_id_example' # str | the reply's parent comment perma id

    try:
        api_instance.update_reply(id, r_id, c_id)
    except Exception as e:
        print("Exception when calling DefaultApi->update_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The review perma id | 
 **r_id** | **str**| the perma id of the reply to delete | 
 **c_id** | **str**| the reply&#39;s parent comment perma id | 

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

