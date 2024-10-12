# openapi_client.FollowedPeopleApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_follows_people_get**](FollowedPeopleApi.md#user_follows_people_get) | **GET** /user/follows/people | List the followed people
[**user_follows_people_person_id_delete**](FollowedPeopleApi.md#user_follows_people_person_id_delete) | **DELETE** /user/follows/people/{person_id} | Unfollow a person
[**user_follows_people_person_id_get**](FollowedPeopleApi.md#user_follows_people_person_id_get) | **GET** /user/follows/people/{person_id} | Check if a person is followed
[**user_follows_people_person_id_put**](FollowedPeopleApi.md#user_follows_people_person_id_put) | **PUT** /user/follows/people/{person_id} | Follow a person


# **user_follows_people_get**
> List[PersonFollow] user_follows_people_get(embed=embed)

List the followed people

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.person_follow import PersonFollow
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FollowedPeopleApi(api_client)
    embed = 'embed_example' # str | Embed full person info (optional)

    try:
        # List the followed people
        api_response = api_instance.user_follows_people_get(embed=embed)
        print("The response of FollowedPeopleApi->user_follows_people_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedPeopleApi->user_follows_people_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **embed** | **str**| Embed full person info | [optional] 

### Return type

[**List[PersonFollow]**](PersonFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of followed people |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_people_person_id_delete**
> user_follows_people_person_id_delete(person_id)

Unfollow a person

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FollowedPeopleApi(api_client)
    person_id = 56 # int | 

    try:
        # Unfollow a person
        api_instance.user_follows_people_person_id_delete(person_id)
    except Exception as e:
        print("Exception when calling FollowedPeopleApi->user_follows_people_person_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the person is now unfollowed |  -  |
**404** | this person was not followed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_people_person_id_get**
> PersonFollow user_follows_people_person_id_get(person_id)

Check if a person is followed

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.person_follow import PersonFollow
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FollowedPeopleApi(api_client)
    person_id = 56 # int | 

    try:
        # Check if a person is followed
        api_response = api_instance.user_follows_people_person_id_get(person_id)
        print("The response of FollowedPeopleApi->user_follows_people_person_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedPeopleApi->user_follows_people_person_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_id** | **int**|  | 

### Return type

[**PersonFollow**](PersonFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The followed person |  -  |
**404** | this person is not followed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_people_person_id_put**
> PersonFollow user_follows_people_person_id_put(person_id)

Follow a person

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.person_follow import PersonFollow
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FollowedPeopleApi(api_client)
    person_id = 56 # int | 

    try:
        # Follow a person
        api_response = api_instance.user_follows_people_person_id_put(person_id)
        print("The response of FollowedPeopleApi->user_follows_people_person_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedPeopleApi->user_follows_people_person_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_id** | **int**|  | 

### Return type

[**PersonFollow**](PersonFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | this person is now followed |  -  |
**404** | this person does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

