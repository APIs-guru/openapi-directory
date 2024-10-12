# openapi_client.ListsApi

All URIs are relative to *https://api.twitter.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user_list_memberships**](ListsApi.md#get_user_list_memberships) | **GET** /2/users/{id}/list_memberships | Get a User&#39;s List Memberships
[**list_add_member**](ListsApi.md#list_add_member) | **POST** /2/lists/{id}/members | Add a List member
[**list_id_create**](ListsApi.md#list_id_create) | **POST** /2/lists | Create List
[**list_id_delete**](ListsApi.md#list_id_delete) | **DELETE** /2/lists/{id} | Delete List
[**list_id_get**](ListsApi.md#list_id_get) | **GET** /2/lists/{id} | List lookup by List ID.
[**list_id_update**](ListsApi.md#list_id_update) | **PUT** /2/lists/{id} | Update List.
[**list_remove_member**](ListsApi.md#list_remove_member) | **DELETE** /2/lists/{id}/members/{user_id} | Remove a List member
[**list_user_follow**](ListsApi.md#list_user_follow) | **POST** /2/users/{id}/followed_lists | Follow a List
[**list_user_owned_lists**](ListsApi.md#list_user_owned_lists) | **GET** /2/users/{id}/owned_lists | Get a User&#39;s Owned Lists.
[**list_user_pin**](ListsApi.md#list_user_pin) | **POST** /2/users/{id}/pinned_lists | Pin a List
[**list_user_pinned_lists**](ListsApi.md#list_user_pinned_lists) | **GET** /2/users/{id}/pinned_lists | Get a User&#39;s Pinned Lists
[**list_user_unfollow**](ListsApi.md#list_user_unfollow) | **DELETE** /2/users/{id}/followed_lists/{list_id} | Unfollow a List
[**list_user_unpin**](ListsApi.md#list_user_unpin) | **DELETE** /2/users/{id}/pinned_lists/{list_id} | Unpin a List
[**user_followed_lists**](ListsApi.md#user_followed_lists) | **GET** /2/users/{id}/followed_lists | Get User&#39;s Followed Lists


# **get_user_list_memberships**
> Get2UsersIdListMembershipsResponse get_user_list_memberships(id, max_results=max_results, pagination_token=pagination_token, list_fields=list_fields, expansions=expansions, user_fields=user_fields)

Get a User's List Memberships

Get a User's List Memberships.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_list_memberships_response import Get2UsersIdListMembershipsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = '2244994945' # str | The ID of the User to lookup.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    list_fields = ['[\"created_at\",\"description\",\"follower_count\",\"id\",\"member_count\",\"name\",\"owner_id\",\"private\"]'] # List[str] | A comma separated list of List fields to display. (optional)
    expansions = ['[\"owner_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)

    try:
        # Get a User's List Memberships
        api_response = api_instance.get_user_list_memberships(id, max_results=max_results, pagination_token=pagination_token, list_fields=list_fields, expansions=expansions, user_fields=user_fields)
        print("The response of ListsApi->get_user_list_memberships:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->get_user_list_memberships: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the User to lookup. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **list_fields** | [**List[str]**](str.md)| A comma separated list of List fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 

### Return type

[**Get2UsersIdListMembershipsResponse**](Get2UsersIdListMembershipsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_add_member**
> ListMutateResponse list_add_member(id, list_add_user_request=list_add_user_request)

Add a List member

Causes a User to become a member of a List.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.list_add_user_request import ListAddUserRequest
from openapi_client.models.list_mutate_response import ListMutateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the List for which to add a member.
    list_add_user_request = openapi_client.ListAddUserRequest() # ListAddUserRequest |  (optional)

    try:
        # Add a List member
        api_response = api_instance.list_add_member(id, list_add_user_request=list_add_user_request)
        print("The response of ListsApi->list_add_member:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_add_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the List for which to add a member. | 
 **list_add_user_request** | [**ListAddUserRequest**](ListAddUserRequest.md)|  | [optional] 

### Return type

[**ListMutateResponse**](ListMutateResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_id_create**
> ListCreateResponse list_id_create(list_create_request=list_create_request)

Create List

Creates a new List.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.list_create_request import ListCreateRequest
from openapi_client.models.list_create_response import ListCreateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    list_create_request = openapi_client.ListCreateRequest() # ListCreateRequest |  (optional)

    try:
        # Create List
        api_response = api_instance.list_id_create(list_create_request=list_create_request)
        print("The response of ListsApi->list_id_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_id_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_create_request** | [**ListCreateRequest**](ListCreateRequest.md)|  | [optional] 

### Return type

[**ListCreateResponse**](ListCreateResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_id_delete**
> ListDeleteResponse list_id_delete(id)

Delete List

Delete a List that you own.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.list_delete_response import ListDeleteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the List to delete.

    try:
        # Delete List
        api_response = api_instance.list_id_delete(id)
        print("The response of ListsApi->list_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the List to delete. | 

### Return type

[**ListDeleteResponse**](ListDeleteResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_id_get**
> Get2ListsIdResponse list_id_get(id, list_fields=list_fields, expansions=expansions, user_fields=user_fields)

List lookup by List ID.

Returns a List.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_lists_id_response import Get2ListsIdResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the List.
    list_fields = ['[\"created_at\",\"description\",\"follower_count\",\"id\",\"member_count\",\"name\",\"owner_id\",\"private\"]'] # List[str] | A comma separated list of List fields to display. (optional)
    expansions = ['[\"owner_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)

    try:
        # List lookup by List ID.
        api_response = api_instance.list_id_get(id, list_fields=list_fields, expansions=expansions, user_fields=user_fields)
        print("The response of ListsApi->list_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the List. | 
 **list_fields** | [**List[str]**](str.md)| A comma separated list of List fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 

### Return type

[**Get2ListsIdResponse**](Get2ListsIdResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_id_update**
> ListUpdateResponse list_id_update(id, list_update_request=list_update_request)

Update List.

Update a List that you own.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.list_update_request import ListUpdateRequest
from openapi_client.models.list_update_response import ListUpdateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the List to modify.
    list_update_request = openapi_client.ListUpdateRequest() # ListUpdateRequest |  (optional)

    try:
        # Update List.
        api_response = api_instance.list_id_update(id, list_update_request=list_update_request)
        print("The response of ListsApi->list_id_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_id_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the List to modify. | 
 **list_update_request** | [**ListUpdateRequest**](ListUpdateRequest.md)|  | [optional] 

### Return type

[**ListUpdateResponse**](ListUpdateResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_remove_member**
> ListMutateResponse list_remove_member(id, user_id)

Remove a List member

Causes a User to be removed from the members of a List.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.list_mutate_response import ListMutateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the List to remove a member.
    user_id = 'user_id_example' # str | The ID of User that will be removed from the List.

    try:
        # Remove a List member
        api_response = api_instance.list_remove_member(id, user_id)
        print("The response of ListsApi->list_remove_member:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_remove_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the List to remove a member. | 
 **user_id** | **str**| The ID of User that will be removed from the List. | 

### Return type

[**ListMutateResponse**](ListMutateResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_follow**
> ListFollowedResponse list_user_follow(id, list_followed_request=list_followed_request)

Follow a List

Causes a User to follow a List.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.list_followed_request import ListFollowedRequest
from openapi_client.models.list_followed_response import ListFollowedResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User that will follow the List.
    list_followed_request = openapi_client.ListFollowedRequest() # ListFollowedRequest |  (optional)

    try:
        # Follow a List
        api_response = api_instance.list_user_follow(id, list_followed_request=list_followed_request)
        print("The response of ListsApi->list_user_follow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_user_follow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that will follow the List. | 
 **list_followed_request** | [**ListFollowedRequest**](ListFollowedRequest.md)|  | [optional] 

### Return type

[**ListFollowedResponse**](ListFollowedResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_owned_lists**
> Get2UsersIdOwnedListsResponse list_user_owned_lists(id, max_results=max_results, pagination_token=pagination_token, list_fields=list_fields, expansions=expansions, user_fields=user_fields)

Get a User's Owned Lists.

Get a User's Owned Lists.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_owned_lists_response import Get2UsersIdOwnedListsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = '2244994945' # str | The ID of the User to lookup.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    list_fields = ['[\"created_at\",\"description\",\"follower_count\",\"id\",\"member_count\",\"name\",\"owner_id\",\"private\"]'] # List[str] | A comma separated list of List fields to display. (optional)
    expansions = ['[\"owner_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)

    try:
        # Get a User's Owned Lists.
        api_response = api_instance.list_user_owned_lists(id, max_results=max_results, pagination_token=pagination_token, list_fields=list_fields, expansions=expansions, user_fields=user_fields)
        print("The response of ListsApi->list_user_owned_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_user_owned_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the User to lookup. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **list_fields** | [**List[str]**](str.md)| A comma separated list of List fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 

### Return type

[**Get2UsersIdOwnedListsResponse**](Get2UsersIdOwnedListsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_pin**
> ListPinnedResponse list_user_pin(id, list_pinned_request)

Pin a List

Causes a User to pin a List.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.list_pinned_request import ListPinnedRequest
from openapi_client.models.list_pinned_response import ListPinnedResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User that will pin the List.
    list_pinned_request = openapi_client.ListPinnedRequest() # ListPinnedRequest | 

    try:
        # Pin a List
        api_response = api_instance.list_user_pin(id, list_pinned_request)
        print("The response of ListsApi->list_user_pin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_user_pin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that will pin the List. | 
 **list_pinned_request** | [**ListPinnedRequest**](ListPinnedRequest.md)|  | 

### Return type

[**ListPinnedResponse**](ListPinnedResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_pinned_lists**
> Get2UsersIdPinnedListsResponse list_user_pinned_lists(id, list_fields=list_fields, expansions=expansions, user_fields=user_fields)

Get a User's Pinned Lists

Get a User's Pinned Lists.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_pinned_lists_response import Get2UsersIdPinnedListsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User for whom to return results.
    list_fields = ['[\"created_at\",\"description\",\"follower_count\",\"id\",\"member_count\",\"name\",\"owner_id\",\"private\"]'] # List[str] | A comma separated list of List fields to display. (optional)
    expansions = ['[\"owner_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)

    try:
        # Get a User's Pinned Lists
        api_response = api_instance.list_user_pinned_lists(id, list_fields=list_fields, expansions=expansions, user_fields=user_fields)
        print("The response of ListsApi->list_user_pinned_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_user_pinned_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User for whom to return results. | 
 **list_fields** | [**List[str]**](str.md)| A comma separated list of List fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 

### Return type

[**Get2UsersIdPinnedListsResponse**](Get2UsersIdPinnedListsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_unfollow**
> ListFollowedResponse list_user_unfollow(id, list_id)

Unfollow a List

Causes a User to unfollow a List.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.list_followed_response import ListFollowedResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User that will unfollow the List.
    list_id = 'list_id_example' # str | The ID of the List to unfollow.

    try:
        # Unfollow a List
        api_response = api_instance.list_user_unfollow(id, list_id)
        print("The response of ListsApi->list_user_unfollow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_user_unfollow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that will unfollow the List. | 
 **list_id** | **str**| The ID of the List to unfollow. | 

### Return type

[**ListFollowedResponse**](ListFollowedResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_unpin**
> ListUnpinResponse list_user_unpin(id, list_id)

Unpin a List

Causes a User to remove a pinned List.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.list_unpin_response import ListUnpinResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User for whom to return results.
    list_id = 'list_id_example' # str | The ID of the List to unpin.

    try:
        # Unpin a List
        api_response = api_instance.list_user_unpin(id, list_id)
        print("The response of ListsApi->list_user_unpin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->list_user_unpin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User for whom to return results. | 
 **list_id** | **str**| The ID of the List to unpin. | 

### Return type

[**ListUnpinResponse**](ListUnpinResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_followed_lists**
> Get2UsersIdFollowedListsResponse user_followed_lists(id, max_results=max_results, pagination_token=pagination_token, list_fields=list_fields, expansions=expansions, user_fields=user_fields)

Get User's Followed Lists

Returns a User's followed Lists.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_followed_lists_response import Get2UsersIdFollowedListsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    id = '2244994945' # str | The ID of the User to lookup.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    list_fields = ['[\"created_at\",\"description\",\"follower_count\",\"id\",\"member_count\",\"name\",\"owner_id\",\"private\"]'] # List[str] | A comma separated list of List fields to display. (optional)
    expansions = ['[\"owner_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)

    try:
        # Get User's Followed Lists
        api_response = api_instance.user_followed_lists(id, max_results=max_results, pagination_token=pagination_token, list_fields=list_fields, expansions=expansions, user_fields=user_fields)
        print("The response of ListsApi->user_followed_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->user_followed_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the User to lookup. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **list_fields** | [**List[str]**](str.md)| A comma separated list of List fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 

### Return type

[**Get2UsersIdFollowedListsResponse**](Get2UsersIdFollowedListsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

