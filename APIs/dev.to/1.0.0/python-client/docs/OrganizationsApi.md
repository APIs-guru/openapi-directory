# openapi_client.OrganizationsApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_org_articles**](OrganizationsApi.md#get_org_articles) | **GET** /api/organizations/{username}/articles | Organization&#39;s Articles
[**get_org_users**](OrganizationsApi.md#get_org_users) | **GET** /api/organizations/{username}/users | Organization&#39;s users
[**get_organization**](OrganizationsApi.md#get_organization) | **GET** /api/organizations/{username} | An organization


# **get_org_articles**
> List[ArticleIndex] get_org_articles(username, page=page, per_page=per_page)

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
    api_instance = openapi_client.OrganizationsApi(api_client)
    username = 'username_example' # str | 
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # Organization's Articles
        api_response = api_instance.get_org_articles(username, page=page, per_page=per_page)
        print("The response of OrganizationsApi->get_org_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_org_articles: %s\n" % e)
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

# **get_org_users**
> List[User] get_org_users(username, page=page, per_page=per_page)

Organization's users

This endpoint allows the client to retrieve a list of users belonging to the organization  It supports pagination, each page will contain `30` users by default.

### Example


```python
import openapi_client
from openapi_client.models.user import User
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    username = 'username_example' # str | 
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # Organization's users
        api_response = api_instance.get_org_users(username, page=page, per_page=per_page)
        print("The response of OrganizationsApi->get_org_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_org_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**|  | 
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Organization&#39;s users |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization**
> List[Organization] get_organization(username)

An organization

This endpoint allows the client to retrieve a single organization by their username

### Example


```python
import openapi_client
from openapi_client.models.organization import Organization
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    username = 'username_example' # str | 

    try:
        # An organization
        api_response = api_instance.get_organization(username)
        print("The response of OrganizationsApi->get_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**|  | 

### Return type

[**List[Organization]**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Organization |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

