# openapi_client.GroupsApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groups_get**](GroupsApi.md#groups_get) | **GET** /groups | 
[**groups_id_get**](GroupsApi.md#groups_id_get) | **GET** /groups/{ID} | 
[**groups_id_memberships_delete**](GroupsApi.md#groups_id_memberships_delete) | **DELETE** /groups/{ID}/memberships | 
[**groups_id_memberships_get**](GroupsApi.md#groups_id_memberships_get) | **GET** /groups/{ID}/memberships | 
[**groups_id_memberships_patch**](GroupsApi.md#groups_id_memberships_patch) | **PATCH** /groups/{ID}/memberships | 
[**groups_id_memberships_post**](GroupsApi.md#groups_id_memberships_post) | **POST** /groups/{ID}/memberships | 
[**groups_id_messages_get**](GroupsApi.md#groups_id_messages_get) | **GET** /groups/{ID}/messages | 
[**groups_id_messages_post**](GroupsApi.md#groups_id_messages_post) | **POST** /groups/{ID}/messages | 
[**groups_id_patch**](GroupsApi.md#groups_id_patch) | **PATCH** /groups/{ID} | 
[**groups_id_schedules_post**](GroupsApi.md#groups_id_schedules_post) | **POST** /groups/{ID}/schedules | 
[**groups_id_statuses_get**](GroupsApi.md#groups_id_statuses_get) | **GET** /groups/{ID}/statuses | 
[**groups_messages_id_delete**](GroupsApi.md#groups_messages_id_delete) | **DELETE** /groups/messages/{ID} | 
[**groups_messages_id_get**](GroupsApi.md#groups_messages_id_get) | **GET** /groups/messages/{ID} | 
[**groups_messages_id_metadata_collections_get**](GroupsApi.md#groups_messages_id_metadata_collections_get) | **GET** /groups/messages/{ID}/metadata/collections | 
[**groups_messages_id_metadata_get**](GroupsApi.md#groups_messages_id_metadata_get) | **GET** /groups/messages/{ID}/metadata | 
[**groups_messages_id_metadata_post**](GroupsApi.md#groups_messages_id_metadata_post) | **POST** /groups/messages/{ID}/metadata | 
[**groups_messages_metadata_filters_post**](GroupsApi.md#groups_messages_metadata_filters_post) | **POST** /groups/messages/metadata/filters | 
[**groups_post**](GroupsApi.md#groups_post) | **POST** /groups | 
[**groups_schedules_post**](GroupsApi.md#groups_schedules_post) | **POST** /groups/schedules | 
[**groups_statuses_get**](GroupsApi.md#groups_statuses_get) | **GET** /groups/statuses | 


# **groups_get**
> EndpointGetGroups groups_get(offset=offset, limit=limit)



Fetch an array of all groups that were created by users existing within the current access token's bubble. The groups must be either Public or you must be a member of them. Unlisted and Private groups that you are not a member of are not listed.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_groups import EndpointGetGroups
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
    api_instance = openapi_client.GroupsApi(api_client)
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.groups_get(offset=offset, limit=limit)
        print("The response of GroupsApi->groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetGroups**](EndpointGetGroups.md)

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

# **groups_id_get**
> EndpointGetGroupsID groups_id_get(id)



Fetch an array of groups. You can only retrieve groups created by users existing within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_groups_id import EndpointGetGroupsID
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.groups_id_get(id)
        print("The response of GroupsApi->groups_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetGroupsID**](EndpointGetGroupsID.md)

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

# **groups_id_memberships_delete**
> EndpointDeleteGroupsIDMemberships groups_id_memberships_delete(id)



Leave a group that you are a member of and that was created by a user who exists within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_delete_groups_id_memberships import EndpointDeleteGroupsIDMemberships
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.groups_id_memberships_delete(id)
        print("The response of GroupsApi->groups_id_memberships_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_memberships_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**EndpointDeleteGroupsIDMemberships**](EndpointDeleteGroupsIDMemberships.md)

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

# **groups_id_memberships_get**
> EndpointGetGroupsIDMemberships groups_id_memberships_get(id, moderators_only=moderators_only, offset=offset)



Fetch an array of users who are members of specific groups that you are also a member of. You can only retrieve users existing within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_groups_id_memberships import EndpointGetGroupsIDMemberships
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = [56] # List[int] | 
    moderators_only = False # bool |  (optional) (default to False)
    offset = 0 # int |  (optional) (default to 0)

    try:
        api_response = api_instance.groups_id_memberships_get(id, moderators_only=moderators_only, offset=offset)
        print("The response of GroupsApi->groups_id_memberships_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_memberships_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 
 **moderators_only** | **bool**|  | [optional] [default to False]
 **offset** | **int**|  | [optional] [default to 0]

### Return type

[**EndpointGetGroupsIDMemberships**](EndpointGetGroupsIDMemberships.md)

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

# **groups_id_memberships_patch**
> EndpointPatchGroupsIDMemberships groups_id_memberships_patch(id, user_id, moderator=moderator)



Promote or demote a member's privileges within a group that you created. The user must exist within the current access token's bubble and be an existing member of the group.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_patch_groups_id_memberships import EndpointPatchGroupsIDMemberships
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = 56 # int | 
    user_id = 56 # int | 
    moderator = False # bool |  (optional) (default to False)

    try:
        api_response = api_instance.groups_id_memberships_patch(id, user_id, moderator=moderator)
        print("The response of GroupsApi->groups_id_memberships_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_memberships_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **user_id** | **int**|  | 
 **moderator** | **bool**|  | [optional] [default to False]

### Return type

[**EndpointPatchGroupsIDMemberships**](EndpointPatchGroupsIDMemberships.md)

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

# **groups_id_memberships_post**
> EndpointPostGroupsIDMemberships groups_id_memberships_post(id, passphrase=passphrase, user_id=user_id)



Join a group that was created by a user who exists within the current access token's bubble, or join other users into a group that you created. If you are the group owner, you can pass in a user_id to create membership records for a user you are in a conversation with. The user must exist within the current access token's bubble. If the group is private, you must successfully pass in its passphrase in order to join. You can obtain the passphrase from the group's owner.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_groups_id_memberships import EndpointPostGroupsIDMemberships
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = 56 # int | 
    passphrase = 'passphrase_example' # str |  (optional)
    user_id = 56 # int |  (optional)

    try:
        api_response = api_instance.groups_id_memberships_post(id, passphrase=passphrase, user_id=user_id)
        print("The response of GroupsApi->groups_id_memberships_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_memberships_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **passphrase** | **str**|  | [optional] 
 **user_id** | **int**|  | [optional] 

### Return type

[**EndpointPostGroupsIDMemberships**](EndpointPostGroupsIDMemberships.md)

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

# **groups_id_messages_get**
> EndpointGetGroupsIDMessages groups_id_messages_get(id, gt_message_id=gt_message_id, exclude_self=exclude_self, include_deleted=include_deleted, var_date=var_date, bubbled=bubbled, record_seen=record_seen, timeout=timeout, offset=offset, limit=limit)



Retrieve the last {limit} messages in the group, for messages authored by users within the current access token's bubble. If a timeout is 0 or greater, the batch is sorted oldest first. Otherwise, if timeout is a negative number, the transcript is paginated and sorted newest first. Specify a timeout for long polling (which delays the server sending back results for up to n seconds or until results are available, whichever comes first), or default to 0 for immediate results. Optionally record your status as online along with sharing the latest message you've seen with other group members. Optionally specify a gt_message_id to retrieve only messages with an ID greater than that specified (such as greater than the latest message ID received in the last poll). Optionally only poll for messages authored by other members of the group, and echo messages authored by you when sending, for a perceived increase in performance. Optionally only retrieve messages that were posted from within the current access token's bubble. Optionally specify a date formatted as YYYY-MM-DD to retrieve a transcript of messages from a single day. When record_seen is set to true, the new message count for the group is reset to zero.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_groups_id_messages import EndpointGetGroupsIDMessages
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = 56 # int | 
    gt_message_id = 56 # int |  (optional)
    exclude_self = False # bool |  (optional) (default to False)
    include_deleted = False # bool |  (optional) (default to False)
    var_date = 'var_date_example' # str |  (optional)
    bubbled = False # bool |  (optional) (default to False)
    record_seen = False # bool |  (optional) (default to False)
    timeout = 0 # int |  (optional) (default to 0)
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.groups_id_messages_get(id, gt_message_id=gt_message_id, exclude_self=exclude_self, include_deleted=include_deleted, var_date=var_date, bubbled=bubbled, record_seen=record_seen, timeout=timeout, offset=offset, limit=limit)
        print("The response of GroupsApi->groups_id_messages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_messages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **gt_message_id** | **int**|  | [optional] 
 **exclude_self** | **bool**|  | [optional] [default to False]
 **include_deleted** | **bool**|  | [optional] [default to False]
 **var_date** | **str**|  | [optional] 
 **bubbled** | **bool**|  | [optional] [default to False]
 **record_seen** | **bool**|  | [optional] [default to False]
 **timeout** | **int**|  | [optional] [default to 0]
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetGroupsIDMessages**](EndpointGetGroupsIDMessages.md)

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

# **groups_id_messages_post**
> EndpointPostGroupsIDMessages groups_id_messages_post(id, text_raw, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values, text_emoticons=text_emoticons)



Post a message to a group that you are a member of and that was created by a user who exists within the current access token's bubble. Optionally specify whether emoticons should be parsed into smiley images. Additionally, optionally attach a single metadata key/value pair to the group message upon submission.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_groups_id_messages import EndpointPostGroupsIDMessages
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = 56 # int | 
    text_raw = 'text_raw_example' # str | 
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

    try:
        api_response = api_instance.groups_id_messages_post(id, text_raw, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values, text_emoticons=text_emoticons)
        print("The response of GroupsApi->groups_id_messages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_messages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **text_raw** | **str**|  | 
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

### Return type

[**EndpointPostGroupsIDMessages**](EndpointPostGroupsIDMessages.md)

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

# **groups_id_patch**
> EndpointPatchGroupsID groups_id_patch(id, description=description, name=name, passphrase=passphrase, privacy=privacy, slug=slug)



Modify a group you previously created.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_patch_groups_id import EndpointPatchGroupsID
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = 56 # int | 
    description = 'description_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    passphrase = 'passphrase_example' # str |  (optional)
    privacy = 'privacy_example' # str |  (optional)
    slug = 'slug_example' # str |  (optional)

    try:
        api_response = api_instance.groups_id_patch(id, description=description, name=name, passphrase=passphrase, privacy=privacy, slug=slug)
        print("The response of GroupsApi->groups_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **description** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **passphrase** | **str**|  | [optional] 
 **privacy** | **str**|  | [optional] 
 **slug** | **str**|  | [optional] 

### Return type

[**EndpointPatchGroupsID**](EndpointPatchGroupsID.md)

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

# **groups_id_schedules_post**
> EndpointPostGroupsIDSchedules groups_id_schedules_post(id, var_date=var_date, limit=limit, offset=offset, roll_up=roll_up, sort=sort)



Paginated report of information about group messages contributed by conversation and date. Only groups you're a member of and group messages authored by users existing within the current access token's bubble are considered in the calculations. Optionally roll up all groups to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages within the group discussion(s).

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_groups_id_schedules import EndpointPostGroupsIDSchedules
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = [56] # List[int] | 
    var_date = 'var_date_example' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    offset = 0 # int |  (optional) (default to 0)
    roll_up = False # bool |  (optional) (default to False)
    sort = desc # str |  (optional) (default to desc)

    try:
        api_response = api_instance.groups_id_schedules_post(id, var_date=var_date, limit=limit, offset=offset, roll_up=roll_up, sort=sort)
        print("The response of GroupsApi->groups_id_schedules_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_schedules_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 
 **var_date** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **offset** | **int**|  | [optional] [default to 0]
 **roll_up** | **bool**|  | [optional] [default to False]
 **sort** | **str**|  | [optional] [default to desc]

### Return type

[**EndpointPostGroupsIDSchedules**](EndpointPostGroupsIDSchedules.md)

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

# **groups_id_statuses_get**
> EndpointGetGroupsIDStatuses groups_id_statuses_get(id)



Status information about your current relationship with one or more groups you are a member of, provided the users who created the groups exist within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_groups_id_statuses import EndpointGetGroupsIDStatuses
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.groups_id_statuses_get(id)
        print("The response of GroupsApi->groups_id_statuses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_id_statuses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetGroupsIDStatuses**](EndpointGetGroupsIDStatuses.md)

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

# **groups_messages_id_delete**
> EndpointDeleteGroupsMessagesID groups_messages_id_delete(id)



Delete an array of group messages. You must be the owner or moderator of the group.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_delete_groups_messages_id import EndpointDeleteGroupsMessagesID
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.groups_messages_id_delete(id)
        print("The response of GroupsApi->groups_messages_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_messages_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointDeleteGroupsMessagesID**](EndpointDeleteGroupsMessagesID.md)

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

# **groups_messages_id_get**
> EndpointGetGroupsMessagesID groups_messages_id_get(id)



Fetch an array of group messages. You can only retrieve messages authored by you or by users existing within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_groups_messages_id import EndpointGetGroupsMessagesID
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.groups_messages_id_get(id)
        print("The response of GroupsApi->groups_messages_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_messages_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetGroupsMessagesID**](EndpointGetGroupsMessagesID.md)

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

# **groups_messages_id_metadata_collections_get**
> EndpointGetGroupsMessagesIDMetadataCollections groups_messages_id_metadata_collections_get(id)



Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who created the group exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. Metadata will be grouped by key.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_groups_messages_id_metadata_collections import EndpointGetGroupsMessagesIDMetadataCollections
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.groups_messages_id_metadata_collections_get(id)
        print("The response of GroupsApi->groups_messages_id_metadata_collections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_messages_id_metadata_collections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**EndpointGetGroupsMessagesIDMetadataCollections**](EndpointGetGroupsMessagesIDMetadataCollections.md)

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

# **groups_messages_id_metadata_get**
> EndpointGetGroupsMessagesIDMetadata groups_messages_id_metadata_get(id, offset=offset, limit=limit)



Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who created the group exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_groups_messages_id_metadata import EndpointGetGroupsMessagesIDMetadata
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
    api_instance = openapi_client.GroupsApi(api_client)
    id = 56 # int | 
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.groups_messages_id_metadata_get(id, offset=offset, limit=limit)
        print("The response of GroupsApi->groups_messages_id_metadata_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_messages_id_metadata_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetGroupsMessagesIDMetadata**](EndpointGetGroupsMessagesIDMetadata.md)

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

# **groups_messages_id_metadata_post**
> EndpointPostGroupsMessagesIDMetadata groups_messages_id_metadata_post(id, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values)



Attach one-to-many key/value pairs of metadata to a group message, so long as the user who authored the message exists within the current access token's bubble and you are a member of their group. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by anyone using an access token which grants them access to the user who authored the message and who is also a member of the group the message belongs to; Bubbled metadata by anyone using an access token existing within the current bubble who is also a member of the group the message belongs to; User metadata by you, so long as you are using an access token which grants you access to the user who authored the message and you remain a member of the group; Private metadata by you, so long as you are using an access token existing within the current bubble and you remain a member of the group.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_groups_messages_id_metadata import EndpointPostGroupsMessagesIDMetadata
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
    api_instance = openapi_client.GroupsApi(api_client)
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
        api_response = api_instance.groups_messages_id_metadata_post(id, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values)
        print("The response of GroupsApi->groups_messages_id_metadata_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_messages_id_metadata_post: %s\n" % e)
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

[**EndpointPostGroupsMessagesIDMetadata**](EndpointPostGroupsMessagesIDMetadata.md)

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

# **groups_messages_metadata_filters_post**
> EndpointPostGroupsMessagesMetadataFilters groups_messages_metadata_filters_post(limit=limit, metadata_0_key=metadata_0_key, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_values=metadata_2_values, offset=offset)



Paginated listing of messages filtered by arbitrary metadata criteria. Messages must match on all key/value pairs passed in. Messages may only match on one value of an array passed in. However, messages are sorted based on how many distinct values they match on (most matches first).

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_groups_messages_metadata_filters import EndpointPostGroupsMessagesMetadataFilters
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
    api_instance = openapi_client.GroupsApi(api_client)
    limit = 50 # int |  (optional) (default to 50)
    metadata_0_key = 'metadata_0_key_example' # str |  (optional)
    metadata_0_values = ['metadata_0_values_example'] # List[str] |  (optional)
    metadata_1_key = 'metadata_1_key_example' # str |  (optional)
    metadata_1_values = ['metadata_1_values_example'] # List[str] |  (optional)
    metadata_2_key = 'metadata_2_key_example' # str |  (optional)
    metadata_2_values = ['metadata_2_values_example'] # List[str] |  (optional)
    offset = 0 # int |  (optional) (default to 0)

    try:
        api_response = api_instance.groups_messages_metadata_filters_post(limit=limit, metadata_0_key=metadata_0_key, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_values=metadata_2_values, offset=offset)
        print("The response of GroupsApi->groups_messages_metadata_filters_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_messages_metadata_filters_post: %s\n" % e)
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

[**EndpointPostGroupsMessagesMetadataFilters**](EndpointPostGroupsMessagesMetadataFilters.md)

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

# **groups_post**
> EndpointPostGroups groups_post(description, name, privacy, slug, passphrase=passphrase)



Create a new group for other members to join. Any user who is using an access token whose bubble you exist in can join your group provided it is not a private group. Private groups can only be joined by members who know its passphrase. Unlisted groups can be joined by anybody as long as they know the Group ID, but they are not referenced anywhere to non-members. Public groups can be joined by anybody, are discoverable, and anyone can see the public groups a user is a member of, provided the group owner exists in their access token's bubble. Groups each have their own discussions, transcripts, schedules, and ability to list and search their members.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_groups import EndpointPostGroups
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
    api_instance = openapi_client.GroupsApi(api_client)
    description = 'description_example' # str | 
    name = 'name_example' # str | 
    privacy = 'privacy_example' # str | 
    slug = 'slug_example' # str | 
    passphrase = 'passphrase_example' # str |  (optional)

    try:
        api_response = api_instance.groups_post(description, name, privacy, slug, passphrase=passphrase)
        print("The response of GroupsApi->groups_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | **str**|  | 
 **name** | **str**|  | 
 **privacy** | **str**|  | 
 **slug** | **str**|  | 
 **passphrase** | **str**|  | [optional] 

### Return type

[**EndpointPostGroups**](EndpointPostGroups.md)

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

# **groups_schedules_post**
> EndpointPostGroupsSchedules groups_schedules_post(var_date=var_date, limit=limit, offset=offset, roll_up=roll_up, sort=sort)



Paginated report of information about messages contributed by group and date. Only groups you're a member of and group messages authored by users the current access token has access to are considered in the calculations. Optionally roll up all groups to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_groups_schedules import EndpointPostGroupsSchedules
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
    api_instance = openapi_client.GroupsApi(api_client)
    var_date = 'var_date_example' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    offset = 0 # int |  (optional) (default to 0)
    roll_up = False # bool |  (optional) (default to False)
    sort = desc # str |  (optional) (default to desc)

    try:
        api_response = api_instance.groups_schedules_post(var_date=var_date, limit=limit, offset=offset, roll_up=roll_up, sort=sort)
        print("The response of GroupsApi->groups_schedules_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_schedules_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **offset** | **int**|  | [optional] [default to 0]
 **roll_up** | **bool**|  | [optional] [default to False]
 **sort** | **str**|  | [optional] [default to desc]

### Return type

[**EndpointPostGroupsSchedules**](EndpointPostGroupsSchedules.md)

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

# **groups_statuses_get**
> EndpointGetGroupsStatuses groups_statuses_get(existing_membership=existing_membership, offset=offset, limit=limit)



Retrieve groups that were created by users within the current access token's bubble, along with your current relationship with the groups. The groups must be either Public or you must be a member of them. Unlisted and Private groups that you are not a member of are not listed. Optionally only retrieve groups that you are a member of.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_groups_statuses import EndpointGetGroupsStatuses
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
    api_instance = openapi_client.GroupsApi(api_client)
    existing_membership = False # bool |  (optional) (default to False)
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.groups_statuses_get(existing_membership=existing_membership, offset=offset, limit=limit)
        print("The response of GroupsApi->groups_statuses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->groups_statuses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existing_membership** | **bool**|  | [optional] [default to False]
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetGroupsStatuses**](EndpointGetGroupsStatuses.md)

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

