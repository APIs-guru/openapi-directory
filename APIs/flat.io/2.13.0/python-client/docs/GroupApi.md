# openapi_client.GroupApi

All URIs are relative to *https://api.flat.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_group_details**](GroupApi.md#get_group_details) | **GET** /groups/{group} | Get group information
[**get_group_scores**](GroupApi.md#get_group_scores) | **GET** /groups/{group}/scores | List group&#39;s scores
[**list_group_users**](GroupApi.md#list_group_users) | **GET** /groups/{group}/users | List group&#39;s users


# **get_group_details**
> GroupDetails get_group_details(group)

Get group information

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.group_details import GroupDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupApi(api_client)
    group = 'group_example' # str | Unique identifier of a Flat group 

    try:
        # Get group information
        api_response = api_instance.get_group_details(group)
        print("The response of GroupApi->get_group_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->get_group_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **str**| Unique identifier of a Flat group  | 

### Return type

[**GroupDetails**](GroupDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The group details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_group_scores**
> List[ScoreDetails] get_group_scores(group, parent=parent)

List group's scores

Get the list of scores shared with a group. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.score_details import ScoreDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupApi(api_client)
    group = 'group_example' # str | Unique identifier of a Flat group 
    parent = 'parent_example' # str | Filter the score forked from the score id `parent` (optional)

    try:
        # List group's scores
        api_response = api_instance.get_group_scores(group, parent=parent)
        print("The response of GroupApi->get_group_scores:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->get_group_scores: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **str**| Unique identifier of a Flat group  | 
 **parent** | **str**| Filter the score forked from the score id &#x60;parent&#x60; | [optional] 

### Return type

[**List[ScoreDetails]**](ScoreDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The group&#39;s scores |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_group_users**
> List[UserPublic] list_group_users(group, source=source)

List group's users

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.user_public import UserPublic
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupApi(api_client)
    group = 'group_example' # str | Unique identifier of a Flat group 
    source = 'source_example' # str | Filter the users by their source  (optional)

    try:
        # List group's users
        api_response = api_instance.list_group_users(group, source=source)
        print("The response of GroupApi->list_group_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->list_group_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **str**| Unique identifier of a Flat group  | 
 **source** | **str**| Filter the users by their source  | [optional] 

### Return type

[**List[UserPublic]**](UserPublic.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of users member of the group |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

