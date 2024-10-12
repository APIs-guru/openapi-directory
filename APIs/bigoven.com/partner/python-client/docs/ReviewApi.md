# openapi_client.ReviewApi

All URIs are relative to *https://api2.bigoven.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_recipe_id_review_get**](ReviewApi.md#recipe_recipe_id_review_get) | **GET** /recipe/{recipeId}/review | Get *my* review for the recipe {recipeId}, where \&quot;me\&quot; is determined by standard authentication headers
[**recipe_review_review_id_get**](ReviewApi.md#recipe_review_review_id_get) | **GET** /recipe/review/{reviewId} | Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.              Recommended display is to list top-level reviews with one featured reply underneath.               Currently, the FeaturedReply is the most recent one for that rating.
[**review_delete**](ReviewApi.md#review_delete) | **DELETE** /recipe/{recipeId}/review/{reviewId} | DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.
[**review_delete_reply**](ReviewApi.md#review_delete_reply) | **DELETE** /recipe/review/replies/{replyId} | DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.
[**review_get**](ReviewApi.md#review_get) | **GET** /recipe/{recipeId}/review/{reviewId} | Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.              Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.              We are also supporting more of a \&quot;Google Play\&quot; style model for Reviews and Replies. That is, there are top-level Reviews and then              an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review               per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed              which do NOT carry the \&quot;DEPRECATED\&quot; flag.
[**review_get_replies**](ReviewApi.md#review_get_replies) | **GET** /recipe/review/{reviewId}/replies | Get a paged list of replies for a given review.
[**review_get_reviews**](ReviewApi.md#review_get_reviews) | **GET** /recipe/{recipeId}/reviews | Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.
[**review_post**](ReviewApi.md#review_post) | **POST** /recipe/{recipeId}/review | Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.
[**review_post_reply**](ReviewApi.md#review_post_reply) | **POST** /recipe/review/{reviewId}/replies | POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.
[**review_put**](ReviewApi.md#review_put) | **PUT** /recipe/review/{reviewId} | Update a given top-level review.
[**review_put_legacy**](ReviewApi.md#review_put_legacy) | **PUT** /recipe/{recipeId}/review/{reviewId} | HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.              We are moving to a string-based primary key system, no longer integers, for reviews and replies.
[**review_put_reply**](ReviewApi.md#review_put_reply) | **PUT** /recipe/review/replies/{replyId} | Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.


# **recipe_recipe_id_review_get**
> BigOvenModelAPIReview recipe_recipe_id_review_get(recipe_id)

Get *my* review for the recipe {recipeId}, where \"me\" is determined by standard authentication headers

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_review import BigOvenModelAPIReview
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    recipe_id = 56 # int | 

    try:
        # Get *my* review for the recipe {recipeId}, where \"me\" is determined by standard authentication headers
        api_response = api_instance.recipe_recipe_id_review_get(recipe_id)
        print("The response of ReviewApi->recipe_recipe_id_review_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->recipe_recipe_id_review_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**|  | 

### Return type

[**BigOvenModelAPIReview**](BigOvenModelAPIReview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_review_review_id_get**
> BigOvenModelAPIReview recipe_review_review_id_get(review_id)

Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.              Recommended display is to list top-level reviews with one featured reply underneath.               Currently, the FeaturedReply is the most recent one for that rating.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_review import BigOvenModelAPIReview
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    review_id = 'review_id_example' # str | 

    try:
        # Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.              Recommended display is to list top-level reviews with one featured reply underneath.               Currently, the FeaturedReply is the most recent one for that rating.
        api_response = api_instance.recipe_review_review_id_get(review_id)
        print("The response of ReviewApi->recipe_review_review_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->recipe_review_review_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_id** | **str**|  | 

### Return type

[**BigOvenModelAPIReview**](BigOvenModelAPIReview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_delete**
> object review_delete(recipe_id, review_id)

DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    recipe_id = 56 # int | 
    review_id = 56 # int | 

    try:
        # DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.
        api_response = api_instance.review_delete(recipe_id, review_id)
        print("The response of ReviewApi->review_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**|  | 
 **review_id** | **int**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_delete_reply**
> object review_delete_reply(reply_id)

DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    reply_id = 'reply_id_example' # str | 

    try:
        # DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.
        api_response = api_instance.review_delete_reply(reply_id)
        print("The response of ReviewApi->review_delete_reply:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_delete_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reply_id** | **str**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_get**
> BigOvenModelAPIReview review_get(review_id, recipe_id)

Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.              Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.              We are also supporting more of a \"Google Play\" style model for Reviews and Replies. That is, there are top-level Reviews and then              an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review               per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed              which do NOT carry the \"DEPRECATED\" flag.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_review import BigOvenModelAPIReview
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    review_id = 56 # int | int
    recipe_id = 56 # int | int

    try:
        # Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.              Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.              We are also supporting more of a \"Google Play\" style model for Reviews and Replies. That is, there are top-level Reviews and then              an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review               per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed              which do NOT carry the \"DEPRECATED\" flag.
        api_response = api_instance.review_get(review_id, recipe_id)
        print("The response of ReviewApi->review_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_id** | **int**| int | 
 **recipe_id** | **int**| int | 

### Return type

[**BigOvenModelAPIReview**](BigOvenModelAPIReview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_get_replies**
> List[BigOvenModelAPIReply] review_get_replies(review_id, pg=pg, rpp=rpp)

Get a paged list of replies for a given review.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_reply import BigOvenModelAPIReply
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    review_id = 'review_id_example' # str | 
    pg = 56 # int | the page (int), starting with 1 (optional)
    rpp = 56 # int | results per page (int) (optional)

    try:
        # Get a paged list of replies for a given review.
        api_response = api_instance.review_get_replies(review_id, pg=pg, rpp=rpp)
        print("The response of ReviewApi->review_get_replies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_get_replies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_id** | **str**|  | 
 **pg** | **int**| the page (int), starting with 1 | [optional] 
 **rpp** | **int**| results per page (int) | [optional] 

### Return type

[**List[BigOvenModelAPIReply]**](BigOvenModelAPIReply.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_get_reviews**
> List[BigOvenModelAPIReview] review_get_reviews(recipe_id, pg=pg, rpp=rpp)

Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api_review import BigOvenModelAPIReview
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    recipe_id = 56 # int | recipe id (int)
    pg = 56 # int | the page (int), starting with 1 (optional)
    rpp = 56 # int | results per page (int) (optional)

    try:
        # Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.
        api_response = api_instance.review_get_reviews(recipe_id, pg=pg, rpp=rpp)
        print("The response of ReviewApi->review_get_reviews:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_get_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**| recipe id (int) | 
 **pg** | **int**| the page (int), starting with 1 | [optional] 
 **rpp** | **int**| results per page (int) | [optional] 

### Return type

[**List[BigOvenModelAPIReview]**](BigOvenModelAPIReview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_post**
> object review_post(recipe_id, api2_controllers_web_api_review_controller_review_request)

Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_review_controller_review_request import API2ControllersWebAPIReviewControllerReviewRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    recipe_id = 56 # int | 
    api2_controllers_web_api_review_controller_review_request = openapi_client.API2ControllersWebAPIReviewControllerReviewRequest() # API2ControllersWebAPIReviewControllerReviewRequest | 

    try:
        # Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.
        api_response = api_instance.review_post(recipe_id, api2_controllers_web_api_review_controller_review_request)
        print("The response of ReviewApi->review_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe_id** | **int**|  | 
 **api2_controllers_web_api_review_controller_review_request** | [**API2ControllersWebAPIReviewControllerReviewRequest**](API2ControllersWebAPIReviewControllerReviewRequest.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_post_reply**
> BigOvenModelAPIReply review_post_reply(review_id, api2_controllers_web_api_review_controller_post_reply_req)

POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_review_controller_post_reply_req import API2ControllersWebAPIReviewControllerPostReplyReq
from openapi_client.models.big_oven_model_api_reply import BigOvenModelAPIReply
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    review_id = 'review_id_example' # str | 
    api2_controllers_web_api_review_controller_post_reply_req = openapi_client.API2ControllersWebAPIReviewControllerPostReplyReq() # API2ControllersWebAPIReviewControllerPostReplyReq | 

    try:
        # POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.
        api_response = api_instance.review_post_reply(review_id, api2_controllers_web_api_review_controller_post_reply_req)
        print("The response of ReviewApi->review_post_reply:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_post_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_id** | **str**|  | 
 **api2_controllers_web_api_review_controller_post_reply_req** | [**API2ControllersWebAPIReviewControllerPostReplyReq**](API2ControllersWebAPIReviewControllerPostReplyReq.md)|  | 

### Return type

[**BigOvenModelAPIReply**](BigOvenModelAPIReply.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_put**
> BigOvenModelAPIReview review_put(review_id, api2_controllers_web_api_review_controller_review_request)

Update a given top-level review.

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_review_controller_review_request import API2ControllersWebAPIReviewControllerReviewRequest
from openapi_client.models.big_oven_model_api_review import BigOvenModelAPIReview
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    review_id = 'review_id_example' # str | 
    api2_controllers_web_api_review_controller_review_request = openapi_client.API2ControllersWebAPIReviewControllerReviewRequest() # API2ControllersWebAPIReviewControllerReviewRequest | 

    try:
        # Update a given top-level review.
        api_response = api_instance.review_put(review_id, api2_controllers_web_api_review_controller_review_request)
        print("The response of ReviewApi->review_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_id** | **str**|  | 
 **api2_controllers_web_api_review_controller_review_request** | [**API2ControllersWebAPIReviewControllerReviewRequest**](API2ControllersWebAPIReviewControllerReviewRequest.md)|  | 

### Return type

[**BigOvenModelAPIReview**](BigOvenModelAPIReview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_put_legacy**
> BigOvenModelAPIReview review_put_legacy(review_id, recipe_id, api2_controllers_web_api_review_controller_review_request_legacy)

HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.              We are moving to a string-based primary key system, no longer integers, for reviews and replies.

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_review_controller_review_request_legacy import API2ControllersWebAPIReviewControllerReviewRequestLegacy
from openapi_client.models.big_oven_model_api_review import BigOvenModelAPIReview
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    review_id = 56 # int | reviewId (int)
    recipe_id = 56 # int | recipeId (int)
    api2_controllers_web_api_review_controller_review_request_legacy = openapi_client.API2ControllersWebAPIReviewControllerReviewRequestLegacy() # API2ControllersWebAPIReviewControllerReviewRequestLegacy | 

    try:
        # HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.              We are moving to a string-based primary key system, no longer integers, for reviews and replies.
        api_response = api_instance.review_put_legacy(review_id, recipe_id, api2_controllers_web_api_review_controller_review_request_legacy)
        print("The response of ReviewApi->review_put_legacy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_put_legacy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_id** | **int**| reviewId (int) | 
 **recipe_id** | **int**| recipeId (int) | 
 **api2_controllers_web_api_review_controller_review_request_legacy** | [**API2ControllersWebAPIReviewControllerReviewRequestLegacy**](API2ControllersWebAPIReviewControllerReviewRequestLegacy.md)|  | 

### Return type

[**BigOvenModelAPIReview**](BigOvenModelAPIReview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_put_reply**
> BigOvenModelAPIReply review_put_reply(reply_id, api2_controllers_web_api_review_controller_post_reply_req)

Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_review_controller_post_reply_req import API2ControllersWebAPIReviewControllerPostReplyReq
from openapi_client.models.big_oven_model_api_reply import BigOvenModelAPIReply
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewApi(api_client)
    reply_id = 'reply_id_example' # str | 
    api2_controllers_web_api_review_controller_post_reply_req = openapi_client.API2ControllersWebAPIReviewControllerPostReplyReq() # API2ControllersWebAPIReviewControllerPostReplyReq | 

    try:
        # Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.
        api_response = api_instance.review_put_reply(reply_id, api2_controllers_web_api_review_controller_post_reply_req)
        print("The response of ReviewApi->review_put_reply:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewApi->review_put_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reply_id** | **str**|  | 
 **api2_controllers_web_api_review_controller_post_reply_req** | [**API2ControllersWebAPIReviewControllerPostReplyReq**](API2ControllersWebAPIReviewControllerPostReplyReq.md)|  | 

### Return type

[**BigOvenModelAPIReply**](BigOvenModelAPIReply.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

