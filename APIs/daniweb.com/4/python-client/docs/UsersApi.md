# openapi_client.UsersApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_get**](UsersApi.md#users_get) | **GET** /users | 
[**users_get_0**](UsersApi.md#users_get_0) | **GET** /users/~ | 
[**users_id_get**](UsersApi.md#users_id_get) | **GET** /users/{ID} | 
[**users_id_groups_get**](UsersApi.md#users_id_groups_get) | **GET** /users/{ID}/groups | 
[**users_id_groups_messages_get**](UsersApi.md#users_id_groups_messages_get) | **GET** /users/{ID}/groups/messages | 
[**users_id_messages_post**](UsersApi.md#users_id_messages_post) | **POST** /users/{ID}/messages | 
[**users_id_metadata_collections_get**](UsersApi.md#users_id_metadata_collections_get) | **GET** /users/{ID}/metadata/collections | 
[**users_id_metadata_get**](UsersApi.md#users_id_metadata_get) | **GET** /users/{ID}/metadata | 
[**users_id_metadata_post**](UsersApi.md#users_id_metadata_post) | **POST** /users/{ID}/metadata | 
[**users_id_positions_get**](UsersApi.md#users_id_positions_get) | **GET** /users/{ID}/positions | 
[**users_id_synergies_get**](UsersApi.md#users_id_synergies_get) | **GET** /users/{ID}/synergies | 
[**users_id_synergies_patch**](UsersApi.md#users_id_synergies_patch) | **PATCH** /users/{ID}/synergies | 
[**users_invites_post**](UsersApi.md#users_invites_post) | **POST** /users/invites | 
[**users_metadata_filters_post**](UsersApi.md#users_metadata_filters_post) | **POST** /users/metadata/filters | 
[**users_nearby_get**](UsersApi.md#users_nearby_get) | **GET** /users/nearby | 
[**users_patch**](UsersApi.md#users_patch) | **PATCH** /users/~ | 
[**users_searches_post**](UsersApi.md#users_searches_post) | **POST** /users/searches | 


# **users_get**
> EndpointGetUsers users_get(filter=filter, order_by=order_by, bubbled=bubbled, offset=offset, limit=limit)



Fetch an array of users that you've been matched with, connected with, skipped, or muted. You can only retrieve users existing within the current access token's bubble. This report may be limited to the last ~500-1000 users you've communicated with within the access token's bubble. Matches are always ordered by synergy, and the order_by parameter is ignored. You can only retrieve bubbled users when retrieving matches, and the bubbled parameter is ignored otherwise. Your 100 best algorithmic matches are based on: Complementary data submitted to Profiles, CVs, and Metadata; Complementary data acquired from third-parties; Location information; Many behavioral data points, such as how responsive users are to connections; Degrees of separation (mutual connections); etc. You may connect with 3 of these algorithmic matches per day for free. However, new members are allowed a grace period of additional daily matches. Each time you choose to meet or mute one of your algorithmic matches, a new match is introduced.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users import EndpointGetUsers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    filter = connections # str |  (optional) (default to connections)
    order_by = id # str |  (optional) (default to id)
    bubbled = False # bool |  (optional) (default to False)
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.users_get(filter=filter, order_by=order_by, bubbled=bubbled, offset=offset, limit=limit)
        print("The response of UsersApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**|  | [optional] [default to connections]
 **order_by** | **str**|  | [optional] [default to id]
 **bubbled** | **bool**|  | [optional] [default to False]
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetUsers**](EndpointGetUsers.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get_0**
> EndpointGetUsers users_get_0()



Retrieve the currently OAuth'ed end-user, based on the access token being used, including private information and settings such as their email address.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users import EndpointGetUsers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)

    try:
        api_response = api_instance.users_get_0()
        print("The response of UsersApi->users_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_get_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**EndpointGetUsers**](EndpointGetUsers.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_get**
> EndpointGetUsersID users_id_get(id)



Fetch an array of users. You can only retrieve users existing within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users_id import EndpointGetUsersID
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.users_id_get(id)
        print("The response of UsersApi->users_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetUsersID**](EndpointGetUsersID.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_groups_get**
> EndpointGetUsersIDGroups users_id_groups_get(id)



You can only retrieve groups that were created by users existing within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users_id_groups import EndpointGetUsersIDGroups
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.users_id_groups_get(id)
        print("The response of UsersApi->users_id_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**EndpointGetUsersIDGroups**](EndpointGetUsersIDGroups.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_groups_messages_get**
> EndpointGetUsersIDGroupsMessages users_id_groups_messages_get(id, offset=offset, limit=limit)



Paginated transcript of group messages authored by an individual user who exists within the current access token's bubble. Messages are sorted oldest to newest.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users_id_groups_messages import EndpointGetUsersIDGroupsMessages
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | 
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.users_id_groups_messages_get(id, offset=offset, limit=limit)
        print("The response of UsersApi->users_id_groups_messages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_groups_messages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetUsersIDGroupsMessages**](EndpointGetUsersIDGroupsMessages.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_messages_post**
> EndpointPostUsersIDMessages users_id_messages_post(id, bubbled=bubbled, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values, text_emoticons=text_emoticons, text_raw=text_raw)



Initiate a conversation with a user who exists within the current access token's bubble by sending them an introductory message. If you aren't already in a conversation with them, this endpoint meets them first, and then sends the message. Note that if you aren't in an existing conversation, you still must meet the criteria to meet them, meaning the user must currently be free for you to meet. You will receive an error message unless it is currently free for you to meet the user. You can use the users/{:IDS}/synergies endpoint to first determine if the user isn't already in a conversation with you and is free for you to meet and, if they aren't, how to pay to meet them. If you don't specify a message, it defaults to your custom introductory message defined in your settings.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_users_id_messages import EndpointPostUsersIDMessages
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | 
    bubbled = False # bool |  (optional) (default to False)
    metadata_0_key = 'metadata_0_key_example' # str |  (optional)
    metadata_0_privacy = 'metadata_0_privacy_example' # str |  (optional)
    metadata_0_values = ['metadata_0_values_example'] # List[str] |  (optional)
    metadata_1_key = 'metadata_1_key_example' # str |  (optional)
    metadata_1_privacy = 'metadata_1_privacy_example' # str |  (optional)
    metadata_1_values = ['metadata_1_values_example'] # List[str] |  (optional)
    metadata_2_key = 'metadata_2_key_example' # str |  (optional)
    metadata_2_privacy = 'metadata_2_privacy_example' # str |  (optional)
    metadata_2_values = ['metadata_2_values_example'] # List[str] |  (optional)
    text_emoticons = False # bool |  (optional) (default to False)
    text_raw = 'text_raw_example' # str |  (optional)

    try:
        api_response = api_instance.users_id_messages_post(id, bubbled=bubbled, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values, text_emoticons=text_emoticons, text_raw=text_raw)
        print("The response of UsersApi->users_id_messages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_messages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **bubbled** | **bool**|  | [optional] [default to False]
 **metadata_0_key** | **str**|  | [optional] 
 **metadata_0_privacy** | **str**|  | [optional] 
 **metadata_0_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_1_key** | **str**|  | [optional] 
 **metadata_1_privacy** | **str**|  | [optional] 
 **metadata_1_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_2_key** | **str**|  | [optional] 
 **metadata_2_privacy** | **str**|  | [optional] 
 **metadata_2_values** | [**List[str]**](str.md)|  | [optional] 
 **text_emoticons** | **bool**|  | [optional] [default to False]
 **text_raw** | **str**|  | [optional] 

### Return type

[**EndpointPostUsersIDMessages**](EndpointPostUsersIDMessages.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_metadata_collections_get**
> EndpointGetUsersIDMetadataCollections users_id_metadata_collections_get(id)



Retrieve all key/value pairs attached to the current user that you have access to, so long as the user exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. However, you can always use the /users/metadata/filters endpoint to filter across all users, including those that are unmatched, existing within the current access token's bubble based on preknown metadata key/value pairs. Metadata will be grouped by key.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users_id_metadata_collections import EndpointGetUsersIDMetadataCollections
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.users_id_metadata_collections_get(id)
        print("The response of UsersApi->users_id_metadata_collections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_metadata_collections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**EndpointGetUsersIDMetadataCollections**](EndpointGetUsersIDMetadataCollections.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_metadata_get**
> EndpointGetUsersIDMetadata users_id_metadata_get(id, offset=offset, limit=limit)



Retrieve all key/value pairs attached to the current user that you have access to, so long as the user exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. However, you can always use the /users/metadata/filters endpoint to filter across all users, including those that are unmatched, existing within the current access token's bubble based on preknown metadata key/value pairs.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users_id_metadata import EndpointGetUsersIDMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | 
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.users_id_metadata_get(id, offset=offset, limit=limit)
        print("The response of UsersApi->users_id_metadata_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_metadata_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetUsersIDMetadata**](EndpointGetUsersIDMetadata.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_metadata_post**
> EndpointPostUsersIDMetadata users_id_metadata_post(id, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values)



Attach one-to-many key/value pairs of metadata to a user, so long as the user exists within the current access token's bubble. You can set one key at a time, with one or many values. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by anyone using an access token which grants them access to the user; Bubbled metadata by anyone using an access token existing within the current bubble; User metadata by you, so long as you are using an access token which grants you access to the user; Private metadata by you, so long as you are using an access token existing within the current bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_users_id_metadata import EndpointPostUsersIDMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | 
    metadata_0_key = 'metadata_0_key_example' # str |  (optional)
    metadata_0_privacy = 'metadata_0_privacy_example' # str |  (optional)
    metadata_0_values = ['metadata_0_values_example'] # List[str] |  (optional)
    metadata_1_key = 'metadata_1_key_example' # str |  (optional)
    metadata_1_privacy = 'metadata_1_privacy_example' # str |  (optional)
    metadata_1_values = ['metadata_1_values_example'] # List[str] |  (optional)
    metadata_2_key = 'metadata_2_key_example' # str |  (optional)
    metadata_2_privacy = 'metadata_2_privacy_example' # str |  (optional)
    metadata_2_values = ['metadata_2_values_example'] # List[str] |  (optional)

    try:
        api_response = api_instance.users_id_metadata_post(id, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values)
        print("The response of UsersApi->users_id_metadata_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_metadata_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **metadata_0_key** | **str**|  | [optional] 
 **metadata_0_privacy** | **str**|  | [optional] 
 **metadata_0_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_1_key** | **str**|  | [optional] 
 **metadata_1_privacy** | **str**|  | [optional] 
 **metadata_1_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_2_key** | **str**|  | [optional] 
 **metadata_2_privacy** | **str**|  | [optional] 
 **metadata_2_values** | [**List[str]**](str.md)|  | [optional] 

### Return type

[**EndpointPostUsersIDMetadata**](EndpointPostUsersIDMetadata.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_positions_get**
> EndpointGetUsersIDPositions users_id_positions_get(id, bubbled=bubbled)



Retrieve the CV of a user who exists within the current access token's bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. You can only record CV data to your own account. However, any app that you have OAuth'ed against can do so. By default, you will receive CV data that all apps have recorded for the user. Optionally, you can choose to only receive data that the current access token's bubble has recorded.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users_id_positions import EndpointGetUsersIDPositions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | 
    bubbled = False # bool |  (optional) (default to False)

    try:
        api_response = api_instance.users_id_positions_get(id, bubbled=bubbled)
        print("The response of UsersApi->users_id_positions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_positions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **bubbled** | **bool**|  | [optional] [default to False]

### Return type

[**EndpointGetUsersIDPositions**](EndpointGetUsersIDPositions.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_synergies_get**
> EndpointGetUsersIDSynergies users_id_synergies_get(id)



Determine your match relationship with one or more users who exist within the current access token's bubble. Under some conditions, the price to meet the user will be $0. However, if this is not the case, the PayPal URL payment method will be provided along with the price to meet the user. The PayPal API can be leveraged to send payments programatically, provided the parameters passed in remain the same to ensure that the payment is correctly recorded. Once the payment has been recorded via PayPal IPN, the price to meet the user changes to $0. You can then call the users/{:ID}/meet endpoint to meet the user.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users_id_synergies import EndpointGetUsersIDSynergies
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.users_id_synergies_get(id)
        print("The response of UsersApi->users_id_synergies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_synergies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetUsersIDSynergies**](EndpointGetUsersIDSynergies.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_synergies_patch**
> EndpointPatchUsersIDSynergies users_id_synergies_patch(id, relationship_muted=relationship_muted, relationship_skipped=relationship_skipped)



Skip, mute or unmute a user you've been matched with. Skipped matches are only presented as algorithmic matches after all other candidates have been exhausted. You cannot be matched with or meet muted users. You can only skip, mute or unmute users existing within the same bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_patch_users_id_synergies import EndpointPatchUsersIDSynergies
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | 
    relationship_muted = True # bool |  (optional)
    relationship_skipped = True # bool |  (optional)

    try:
        api_response = api_instance.users_id_synergies_patch(id, relationship_muted=relationship_muted, relationship_skipped=relationship_skipped)
        print("The response of UsersApi->users_id_synergies_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_synergies_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **relationship_muted** | **bool**|  | [optional] 
 **relationship_skipped** | **bool**|  | [optional] 

### Return type

[**EndpointPatchUsersIDSynergies**](EndpointPatchUsersIDSynergies.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_invites_post**
> EndpointPostUsersInvites users_invites_post(csv=csv, emails=emails)



Invite users to into your current access token's bubble by having Dazah send out email invitations on your behalf. The invitation sends users to begin the OAuth flow for the current application (based on the settings specified in the application's profile), and therefore they will be redirected to the application upon signing up / logging in. Upon doing so, if they aren't already, they will automatically be connected with you as well. If your current access token does not escape the bubble, the invitation will specify you wish to connect within the application's name. If your current access token escapes the bubble, the invitation will specify you wish to connect within Dazah. Submit either a list of emails, or a LinkedIn or Outlook CSV file. You can retrieve your LinkedIn CSV file by exporting your LinkedIn Connections at https://www.linkedin.com/people/export-settings. You can retrieve your Outlook CSV file by using the Outlook Import and Export Wizard. This endpoint buckets the invitations into four categories: Existing invites are existing users who are already connected with you within the current bubble, and are therefore not emailed; Discovered invites are existing Dazah users who are available to be connected with within the current bubble, and are therefore not emailed. Now that they have been discovered, the users/{:ID}/meet API endpoint may be used to connect with them; Invalid invites are existing Dazah users who are unavailable to be connected with, because they have deactivated accounts, are muting you, etc., and are therefore not emailed; Emailed invites are queued to receive an invitation within approximately 1 hour. Note that if you are attempting to invite an existing Dazah user who does not currently exist within your current access token's bubble, they will fall within the Discovered bucket if your current access token escapes the bubble, but will be emailed an invitation to join the application if your current access token does not escape the bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_users_invites import EndpointPostUsersInvites
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    csv = None # bytearray |  (optional)
    emails = ['emails_example'] # List[str] |  (optional)

    try:
        api_response = api_instance.users_invites_post(csv=csv, emails=emails)
        print("The response of UsersApi->users_invites_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_invites_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **csv** | **bytearray**|  | [optional] 
 **emails** | [**List[str]**](str.md)|  | [optional] 

### Return type

[**EndpointPostUsersInvites**](EndpointPostUsersInvites.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_metadata_filters_post**
> EndpointPostUsersMetadataFilters users_metadata_filters_post(limit=limit, metadata_0_key=metadata_0_key, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_values=metadata_2_values, offset=offset)



Paginated listing of users filtered by arbitrary metadata criteria. Users must match on all key/value pairs passed in. Users may only match on one value of an array passed in. However, users are sorted based on how many distinct values they match on (most matches first).

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_users_metadata_filters import EndpointPostUsersMetadataFilters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    limit = 50 # int |  (optional) (default to 50)
    metadata_0_key = 'metadata_0_key_example' # str |  (optional)
    metadata_0_values = ['metadata_0_values_example'] # List[str] |  (optional)
    metadata_1_key = 'metadata_1_key_example' # str |  (optional)
    metadata_1_values = ['metadata_1_values_example'] # List[str] |  (optional)
    metadata_2_key = 'metadata_2_key_example' # str |  (optional)
    metadata_2_values = ['metadata_2_values_example'] # List[str] |  (optional)
    offset = 0 # int |  (optional) (default to 0)

    try:
        api_response = api_instance.users_metadata_filters_post(limit=limit, metadata_0_key=metadata_0_key, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_values=metadata_2_values, offset=offset)
        print("The response of UsersApi->users_metadata_filters_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_metadata_filters_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] [default to 50]
 **metadata_0_key** | **str**|  | [optional] 
 **metadata_0_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_1_key** | **str**|  | [optional] 
 **metadata_1_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_2_key** | **str**|  | [optional] 
 **metadata_2_values** | [**List[str]**](str.md)|  | [optional] 
 **offset** | **int**|  | [optional] [default to 0]

### Return type

[**EndpointPostUsersMetadataFilters**](EndpointPostUsersMetadataFilters.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_nearby_get**
> EndpointGetUsersNearby users_nearby_get(latitude=latitude, longitude=longitude, offset=offset, limit=limit)



Fetch an array of users that are geographically close to a set of coordinates. You can only retrieve users existing within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_users_nearby import EndpointGetUsersNearby
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    latitude = 3.4 # float |  (optional)
    longitude = 3.4 # float |  (optional)
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.users_nearby_get(latitude=latitude, longitude=longitude, offset=offset, limit=limit)
        print("The response of UsersApi->users_nearby_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_nearby_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **float**|  | [optional] 
 **longitude** | **float**|  | [optional] 
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetUsersNearby**](EndpointGetUsersNearby.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_patch**
> EndpointPatchUsers users_patch(company=company, company_size=company_size, first_name=first_name, goals=goals, headline=headline, industry=industry, introduction=introduction, job_position=job_position, last_name=last_name, location_importance=location_importance, match_tags=match_tags, pitch=pitch, tags=tags, targeted_industry=targeted_industry, url=url)



Update the OAuth'ed end user's account profile. At this time, for anti-spam reasons, restrictions preclude the ability to update email address and some other settings via the API.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_patch_users import EndpointPatchUsers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    company = 'company_example' # str |  (optional)
    company_size = 'company_size_example' # str |  (optional)
    first_name = 'first_name_example' # str |  (optional)
    goals = ['goals_example'] # List[str] |  (optional)
    headline = 'headline_example' # str |  (optional)
    industry = 'industry_example' # str |  (optional)
    introduction = 'introduction_example' # str |  (optional)
    job_position = 'job_position_example' # str |  (optional)
    last_name = 'last_name_example' # str |  (optional)
    location_importance = 'location_importance_example' # str |  (optional)
    match_tags = ['match_tags_example'] # List[str] |  (optional)
    pitch = 'pitch_example' # str |  (optional)
    tags = ['tags_example'] # List[str] |  (optional)
    targeted_industry = 'targeted_industry_example' # str |  (optional)
    url = 'url_example' # str |  (optional)

    try:
        api_response = api_instance.users_patch(company=company, company_size=company_size, first_name=first_name, goals=goals, headline=headline, industry=industry, introduction=introduction, job_position=job_position, last_name=last_name, location_importance=location_importance, match_tags=match_tags, pitch=pitch, tags=tags, targeted_industry=targeted_industry, url=url)
        print("The response of UsersApi->users_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | **str**|  | [optional] 
 **company_size** | **str**|  | [optional] 
 **first_name** | **str**|  | [optional] 
 **goals** | [**List[str]**](str.md)|  | [optional] 
 **headline** | **str**|  | [optional] 
 **industry** | **str**|  | [optional] 
 **introduction** | **str**|  | [optional] 
 **job_position** | **str**|  | [optional] 
 **last_name** | **str**|  | [optional] 
 **location_importance** | **str**|  | [optional] 
 **match_tags** | [**List[str]**](str.md)|  | [optional] 
 **pitch** | **str**|  | [optional] 
 **tags** | [**List[str]**](str.md)|  | [optional] 
 **targeted_industry** | **str**|  | [optional] 
 **url** | **str**|  | [optional] 

### Return type

[**EndpointPatchUsers**](EndpointPatchUsers.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_searches_post**
> EndpointPostUsersSearches users_searches_post(active_within_x_days=active_within_x_days, audience_ids=audience_ids, bubbled=bubbled, exclude_connections=exclude_connections, exclude_matches=exclude_matches, exclude_muted=exclude_muted, exclude_skipped=exclude_skipped, geo_latitude=geo_latitude, geo_longitude=geo_longitude, geo_miles_away=geo_miles_away, group_id=group_id, limit=limit, location_city_query=location_city_query, location_city_weight=location_city_weight, location_country_query=location_country_query, location_country_weight=location_country_weight, location_region_query=location_region_query, location_region_weight=location_region_weight, metadata_0_key=metadata_0_key, metadata_0_query=metadata_0_query, metadata_0_weight=metadata_0_weight, metadata_1_key=metadata_1_key, metadata_1_query=metadata_1_query, metadata_1_weight=metadata_1_weight, metadata_2_key=metadata_2_key, metadata_2_query=metadata_2_query, metadata_2_weight=metadata_2_weight, offset=offset, position_organization_query=position_organization_query, position_organization_weight=position_organization_weight, position_role_query=position_role_query, position_role_weight=position_role_weight, position_summary_query=position_summary_query, position_summary_weight=position_summary_weight, profile_first_name_query=profile_first_name_query, profile_first_name_weight=profile_first_name_weight, profile_goals_query=profile_goals_query, profile_goals_weight=profile_goals_weight, profile_headline_query=profile_headline_query, profile_headline_weight=profile_headline_weight, profile_industry_query=profile_industry_query, profile_industry_weight=profile_industry_weight, profile_last_name_query=profile_last_name_query, profile_last_name_weight=profile_last_name_weight, profile_pitch_query=profile_pitch_query, profile_pitch_weight=profile_pitch_weight)



Filter and perform a weighted search against user profile fields, CV fields, and metadata by specifying a string to search on for each individual field. By default, results are filtered such that all words in the string must exist, unless you seprate the words with OR. To perform a weighted search (as opposed to filtering), specify the weight (from 0-100) the search algorithm should assign to the field. You can optionally exclude users who you are already in or not in conversations with, exclude users who you previously skipped, or exclude users who you are muting. By doing so, you can effectively customize your own matching algorithm. You can specify geo coordinates to only find users a certain distance away from a specific location, or only find users within a certain distance from the OAuth'ed end-user's last known location. If your app utilizes multiple audience segments, you can specify which audiences you would like to search. You can also limit users to just those who have been recently active. You can also choose to only receive users originating from the current access token's bubble. Only users existing within the current access token's bubble will be matched, and you can only search within a group created by a bubbled user.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_users_searches import EndpointPostUsersSearches
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.UsersApi(api_client)
    active_within_x_days = 56 # int |  (optional)
    audience_ids = [56] # List[int] |  (optional)
    bubbled = False # bool |  (optional) (default to False)
    exclude_connections = False # bool |  (optional) (default to False)
    exclude_matches = False # bool |  (optional) (default to False)
    exclude_muted = False # bool |  (optional) (default to False)
    exclude_skipped = False # bool |  (optional) (default to False)
    geo_latitude = 3.4 # float |  (optional)
    geo_longitude = 3.4 # float |  (optional)
    geo_miles_away = 3.4 # float |  (optional)
    group_id = 56 # int |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    location_city_query = 'location_city_query_example' # str |  (optional)
    location_city_weight = 56 # int |  (optional)
    location_country_query = 'location_country_query_example' # str |  (optional)
    location_country_weight = 56 # int |  (optional)
    location_region_query = 'location_region_query_example' # str |  (optional)
    location_region_weight = 56 # int |  (optional)
    metadata_0_key = 'metadata_0_key_example' # str |  (optional)
    metadata_0_query = 'metadata_0_query_example' # str |  (optional)
    metadata_0_weight = 56 # int |  (optional)
    metadata_1_key = 'metadata_1_key_example' # str |  (optional)
    metadata_1_query = 'metadata_1_query_example' # str |  (optional)
    metadata_1_weight = 56 # int |  (optional)
    metadata_2_key = 'metadata_2_key_example' # str |  (optional)
    metadata_2_query = 'metadata_2_query_example' # str |  (optional)
    metadata_2_weight = 56 # int |  (optional)
    offset = 0 # int |  (optional) (default to 0)
    position_organization_query = 'position_organization_query_example' # str |  (optional)
    position_organization_weight = 56 # int |  (optional)
    position_role_query = 'position_role_query_example' # str |  (optional)
    position_role_weight = 56 # int |  (optional)
    position_summary_query = 'position_summary_query_example' # str |  (optional)
    position_summary_weight = 56 # int |  (optional)
    profile_first_name_query = 'profile_first_name_query_example' # str |  (optional)
    profile_first_name_weight = 56 # int |  (optional)
    profile_goals_query = 'profile_goals_query_example' # str |  (optional)
    profile_goals_weight = 'profile_goals_weight_example' # str |  (optional)
    profile_headline_query = 'profile_headline_query_example' # str |  (optional)
    profile_headline_weight = 56 # int |  (optional)
    profile_industry_query = 'profile_industry_query_example' # str |  (optional)
    profile_industry_weight = 56 # int |  (optional)
    profile_last_name_query = 'profile_last_name_query_example' # str |  (optional)
    profile_last_name_weight = 56 # int |  (optional)
    profile_pitch_query = 'profile_pitch_query_example' # str |  (optional)
    profile_pitch_weight = 56 # int |  (optional)

    try:
        api_response = api_instance.users_searches_post(active_within_x_days=active_within_x_days, audience_ids=audience_ids, bubbled=bubbled, exclude_connections=exclude_connections, exclude_matches=exclude_matches, exclude_muted=exclude_muted, exclude_skipped=exclude_skipped, geo_latitude=geo_latitude, geo_longitude=geo_longitude, geo_miles_away=geo_miles_away, group_id=group_id, limit=limit, location_city_query=location_city_query, location_city_weight=location_city_weight, location_country_query=location_country_query, location_country_weight=location_country_weight, location_region_query=location_region_query, location_region_weight=location_region_weight, metadata_0_key=metadata_0_key, metadata_0_query=metadata_0_query, metadata_0_weight=metadata_0_weight, metadata_1_key=metadata_1_key, metadata_1_query=metadata_1_query, metadata_1_weight=metadata_1_weight, metadata_2_key=metadata_2_key, metadata_2_query=metadata_2_query, metadata_2_weight=metadata_2_weight, offset=offset, position_organization_query=position_organization_query, position_organization_weight=position_organization_weight, position_role_query=position_role_query, position_role_weight=position_role_weight, position_summary_query=position_summary_query, position_summary_weight=position_summary_weight, profile_first_name_query=profile_first_name_query, profile_first_name_weight=profile_first_name_weight, profile_goals_query=profile_goals_query, profile_goals_weight=profile_goals_weight, profile_headline_query=profile_headline_query, profile_headline_weight=profile_headline_weight, profile_industry_query=profile_industry_query, profile_industry_weight=profile_industry_weight, profile_last_name_query=profile_last_name_query, profile_last_name_weight=profile_last_name_weight, profile_pitch_query=profile_pitch_query, profile_pitch_weight=profile_pitch_weight)
        print("The response of UsersApi->users_searches_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_searches_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active_within_x_days** | **int**|  | [optional] 
 **audience_ids** | [**List[int]**](int.md)|  | [optional] 
 **bubbled** | **bool**|  | [optional] [default to False]
 **exclude_connections** | **bool**|  | [optional] [default to False]
 **exclude_matches** | **bool**|  | [optional] [default to False]
 **exclude_muted** | **bool**|  | [optional] [default to False]
 **exclude_skipped** | **bool**|  | [optional] [default to False]
 **geo_latitude** | **float**|  | [optional] 
 **geo_longitude** | **float**|  | [optional] 
 **geo_miles_away** | **float**|  | [optional] 
 **group_id** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **location_city_query** | **str**|  | [optional] 
 **location_city_weight** | **int**|  | [optional] 
 **location_country_query** | **str**|  | [optional] 
 **location_country_weight** | **int**|  | [optional] 
 **location_region_query** | **str**|  | [optional] 
 **location_region_weight** | **int**|  | [optional] 
 **metadata_0_key** | **str**|  | [optional] 
 **metadata_0_query** | **str**|  | [optional] 
 **metadata_0_weight** | **int**|  | [optional] 
 **metadata_1_key** | **str**|  | [optional] 
 **metadata_1_query** | **str**|  | [optional] 
 **metadata_1_weight** | **int**|  | [optional] 
 **metadata_2_key** | **str**|  | [optional] 
 **metadata_2_query** | **str**|  | [optional] 
 **metadata_2_weight** | **int**|  | [optional] 
 **offset** | **int**|  | [optional] [default to 0]
 **position_organization_query** | **str**|  | [optional] 
 **position_organization_weight** | **int**|  | [optional] 
 **position_role_query** | **str**|  | [optional] 
 **position_role_weight** | **int**|  | [optional] 
 **position_summary_query** | **str**|  | [optional] 
 **position_summary_weight** | **int**|  | [optional] 
 **profile_first_name_query** | **str**|  | [optional] 
 **profile_first_name_weight** | **int**|  | [optional] 
 **profile_goals_query** | **str**|  | [optional] 
 **profile_goals_weight** | **str**|  | [optional] 
 **profile_headline_query** | **str**|  | [optional] 
 **profile_headline_weight** | **int**|  | [optional] 
 **profile_industry_query** | **str**|  | [optional] 
 **profile_industry_weight** | **int**|  | [optional] 
 **profile_last_name_query** | **str**|  | [optional] 
 **profile_last_name_weight** | **int**|  | [optional] 
 **profile_pitch_query** | **str**|  | [optional] 
 **profile_pitch_weight** | **int**|  | [optional] 

### Return type

[**EndpointPostUsersSearches**](EndpointPostUsersSearches.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

