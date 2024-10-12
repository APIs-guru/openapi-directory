# openapi_client.ArticlesApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_article**](ArticlesApi.md#create_article) | **POST** /api/articles | Publish article
[**get_article_by_id**](ArticlesApi.md#get_article_by_id) | **GET** /api/articles/{id} | Published article by id
[**get_article_by_path**](ArticlesApi.md#get_article_by_path) | **GET** /api/articles/{username}/{slug} | Published article by path
[**get_articles**](ArticlesApi.md#get_articles) | **GET** /api/articles | Published articles
[**get_latest_articles**](ArticlesApi.md#get_latest_articles) | **GET** /api/articles/latest | Published articles sorted by published date
[**get_org_articles_0**](ArticlesApi.md#get_org_articles_0) | **GET** /api/organizations/{username}/articles | Organization&#39;s Articles
[**get_user_all_articles**](ArticlesApi.md#get_user_all_articles) | **GET** /api/articles/me/all | User&#39;s all articles
[**get_user_articles**](ArticlesApi.md#get_user_articles) | **GET** /api/articles/me | User&#39;s articles
[**get_user_published_articles**](ArticlesApi.md#get_user_published_articles) | **GET** /api/articles/me/published | User&#39;s published articles
[**get_user_unpublished_articles**](ArticlesApi.md#get_user_unpublished_articles) | **GET** /api/articles/me/unpublished | User&#39;s unpublished articles
[**unpublish_article**](ArticlesApi.md#unpublish_article) | **PUT** /api/articles/{id}/unpublish | Unpublish an article
[**update_article**](ArticlesApi.md#update_article) | **PUT** /api/articles/{id} | Update an article by id
[**videos_0**](ArticlesApi.md#videos_0) | **GET** /api/videos | Articles with a video


# **create_article**
> create_article(article=article)

Publish article

This endpoint allows the client to create a new article.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article import Article
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    article = openapi_client.Article() # Article |  (optional)

    try:
        # Publish article
        api_instance.create_article(article=article)
    except Exception as e:
        print("Exception when calling ArticlesApi->create_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article** | [**Article**](Article.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | An Article |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_article_by_id**
> List[ArticleIndex] get_article_by_id(id)

Published article by id

This endpoint allows the client to retrieve a single published article given its `id`.

### Example


```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    id = 56 # int | 

    try:
        # Published article by id
        api_response = api_instance.get_article_by_id(id)
        print("The response of ArticlesApi->get_article_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_article_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Article |  -  |
**404** | Article Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_article_by_path**
> List[ArticleIndex] get_article_by_path(username, slug)

Published article by path

This endpoint allows the client to retrieve a single published article given its `path`.

### Example


```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    username = 'username_example' # str | 
    slug = 'slug_example' # str | 

    try:
        # Published article by path
        api_response = api_instance.get_article_by_path(username, slug)
        print("The response of ArticlesApi->get_article_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_article_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**|  | 
 **slug** | **str**|  | 

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Article |  -  |
**404** | Article Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_articles**
> List[ArticleIndex] get_articles(page=page, per_page=per_page, tag=tag, tags=tags, tags_exclude=tags_exclude, username=username, state=state, top=top, collection_id=collection_id)

Published articles

This endpoint allows the client to retrieve a list of articles.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  By default it will return featured, published articles ordered by descending popularity.  It supports pagination, each page will contain `30` articles by default.

### Example


```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)
    tag = 'discuss' # str | Using this parameter will retrieve articles that contain the requested tag. Articles will be ordered by descending popularity.This parameter can be used in conjuction with `top`. (optional)
    tags = 'javascript, css' # str | Using this parameter will retrieve articles with any of the comma-separated tags. Articles will be ordered by descending popularity. (optional)
    tags_exclude = 'node, java' # str | Using this parameter will retrieve articles that do _not_ contain _any_ of comma-separated tags. Articles will be ordered by descending popularity. (optional)
    username = 'ben' # str | Using this parameter will retrieve articles belonging             to a User or Organization ordered by descending publication date.             If `state=all` the number of items returned will be `1000` instead of the default `30`.             This parameter can be used in conjuction with `state`. (optional)
    state = 'fresh' # str | Using this parameter will allow the client to check which articles are fresh or rising.             If `state=fresh` the server will return fresh articles.             If `state=rising` the server will return rising articles.             This param can be used in conjuction with `username`, only if set to `all`. (optional)
    top = 2 # int | Using this parameter will allow the client to return the most popular articles in the last `N` days. `top` indicates the number of days since publication of the articles returned. This param can be used in conjuction with `tag`. (optional)
    collection_id = 99 # int | Adding this will allow the client to return the list of articles belonging to the requested collection, ordered by ascending publication date. (optional)

    try:
        # Published articles
        api_response = api_instance.get_articles(page=page, per_page=per_page, tag=tag, tags=tags, tags_exclude=tags_exclude, username=username, state=state, top=top, collection_id=collection_id)
        print("The response of ArticlesApi->get_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_articles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]
 **tag** | **str**| Using this parameter will retrieve articles that contain the requested tag. Articles will be ordered by descending popularity.This parameter can be used in conjuction with &#x60;top&#x60;. | [optional] 
 **tags** | **str**| Using this parameter will retrieve articles with any of the comma-separated tags. Articles will be ordered by descending popularity. | [optional] 
 **tags_exclude** | **str**| Using this parameter will retrieve articles that do _not_ contain _any_ of comma-separated tags. Articles will be ordered by descending popularity. | [optional] 
 **username** | **str**| Using this parameter will retrieve articles belonging             to a User or Organization ordered by descending publication date.             If &#x60;state&#x3D;all&#x60; the number of items returned will be &#x60;1000&#x60; instead of the default &#x60;30&#x60;.             This parameter can be used in conjuction with &#x60;state&#x60;. | [optional] 
 **state** | **str**| Using this parameter will allow the client to check which articles are fresh or rising.             If &#x60;state&#x3D;fresh&#x60; the server will return fresh articles.             If &#x60;state&#x3D;rising&#x60; the server will return rising articles.             This param can be used in conjuction with &#x60;username&#x60;, only if set to &#x60;all&#x60;. | [optional] 
 **top** | **int**| Using this parameter will allow the client to return the most popular articles in the last &#x60;N&#x60; days. &#x60;top&#x60; indicates the number of days since publication of the articles returned. This param can be used in conjuction with &#x60;tag&#x60;. | [optional] 
 **collection_id** | **int**| Adding this will allow the client to return the list of articles belonging to the requested collection, ordered by ascending publication date. | [optional] 

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of Articles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_articles**
> List[ArticleIndex] get_latest_articles(page=page, per_page=per_page)

Published articles sorted by published date

This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.  It supports pagination, each page will contain 30 articles by default.

### Example


```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # Published articles sorted by published date
        api_response = api_instance.get_latest_articles(page=page, per_page=per_page)
        print("The response of ArticlesApi->get_latest_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_latest_articles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of Articles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_org_articles_0**
> List[ArticleIndex] get_org_articles_0(username, page=page, per_page=per_page)

Organization's Articles

This endpoint allows the client to retrieve a list of Articles belonging to the organization  It supports pagination, each page will contain `30` users by default.

### Example


```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    username = 'username_example' # str | 
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # Organization's Articles
        api_response = api_instance.get_org_articles_0(username, page=page, per_page=per_page)
        print("The response of ArticlesApi->get_org_articles_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_org_articles_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**|  | 
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Organization&#39;s Articles |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_all_articles**
> List[ArticleIndex] get_user_all_articles(page=page, per_page=per_page)

User's all articles

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  It will return both published and unpublished articles with pagination.  Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.  By default a page will contain 30 articles.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # User's all articles
        api_response = api_instance.get_user_all_articles(page=page, per_page=per_page)
        print("The response of ArticlesApi->get_user_all_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_user_all_articles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of the authenticated user&#39;s Articles |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_articles**
> List[ArticleIndex] get_user_articles(page=page, per_page=per_page)

User's articles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  Published articles will be in reverse chronological publication order.  It will return published articles with pagination. By default a page will contain 30 articles.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # User's articles
        api_response = api_instance.get_user_articles(page=page, per_page=per_page)
        print("The response of ArticlesApi->get_user_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_user_articles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of the authenticated user&#39;s Articles |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_published_articles**
> List[ArticleIndex] get_user_published_articles(page=page, per_page=per_page)

User's published articles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  Published articles will be in reverse chronological publication order.  It will return published articles with pagination. By default a page will contain 30 articles.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # User's published articles
        api_response = api_instance.get_user_published_articles(page=page, per_page=per_page)
        print("The response of ArticlesApi->get_user_published_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_user_published_articles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of the authenticated user&#39;s Articles |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_unpublished_articles**
> List[ArticleIndex] get_user_unpublished_articles(page=page, per_page=per_page)

User's unpublished articles

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  Unpublished articles will be in reverse chronological creation order.  It will return unpublished articles with pagination. By default a page will contain 30 articles.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # User's unpublished articles
        api_response = api_instance.get_user_unpublished_articles(page=page, per_page=per_page)
        print("The response of ArticlesApi->get_user_unpublished_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_user_unpublished_articles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of the authenticated user&#39;s Articles |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unpublish_article**
> unpublish_article(id, note=note)

Unpublish an article

This endpoint allows the client to unpublish an article.  The user associated with the API key must have any 'admin' or 'moderator' role.  The article will be unpublished and will no longer be visible to the public. It will remain in the database and will set back to draft status on the author's posts dashboard. Any notifications associated with the article will be deleted. Any comments on the article will remain.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    id = 1 # int | The ID of the article to unpublish.
    note = 'Admin requested unpublishing all articles via API' # str | Content for the note that's created along with unpublishing (optional)

    try:
        # Unpublish an article
        api_instance.unpublish_article(id, note=note)
    except Exception as e:
        print("Exception when calling ArticlesApi->unpublish_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the article to unpublish. | 
 **note** | **str**| Content for the note that&#39;s created along with unpublishing | [optional] 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Article successfully unpublished |  -  |
**401** | Unauthorized |  -  |
**404** | Article Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_article**
> update_article(id, article=article)

Update an article by id

This endpoint allows the client to update an existing article.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article import Article
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    id = 123 # int | The ID of the user to unpublish.
    article = openapi_client.Article() # Article |  (optional)

    try:
        # Update an article by id
        api_instance.update_article(id, article=article)
    except Exception as e:
        print("Exception when calling ArticlesApi->update_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the user to unpublish. | 
 **article** | [**Article**](Article.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Article |  -  |
**401** | Unauthorized |  -  |
**404** | Article Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videos_0**
> List[VideoArticle] videos_0(page=page, per_page=per_page)

Articles with a video

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.  It will only return published video articles ordered by descending popularity.  It supports pagination, each page will contain 24 articles by default.

### Example


```python
import openapi_client
from openapi_client.models.video_article import VideoArticle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 24 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 24)

    try:
        # Articles with a video
        api_response = api_instance.videos_0(page=page, per_page=per_page)
        print("The response of ArticlesApi->videos_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->videos_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 24]

### Return type

[**List[VideoArticle]**](VideoArticle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of all articles with videos |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

