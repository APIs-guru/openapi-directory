# openapi_client.ActionApi

All URIs are relative to *https://trello.com/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_actions_by_id_action**](ActionApi.md#delete_actions_by_id_action) | **DELETE** /actions/{idAction} | deleteActionsByIdAction()
[**get_actions_board_by_id_action**](ActionApi.md#get_actions_board_by_id_action) | **GET** /actions/{idAction}/board | getActionsBoardByIdAction()
[**get_actions_board_by_id_action_by_field**](ActionApi.md#get_actions_board_by_id_action_by_field) | **GET** /actions/{idAction}/board/{field} | getActionsBoardByIdActionByField()
[**get_actions_by_id_action**](ActionApi.md#get_actions_by_id_action) | **GET** /actions/{idAction} | getActionsByIdAction()
[**get_actions_by_id_action_by_field**](ActionApi.md#get_actions_by_id_action_by_field) | **GET** /actions/{idAction}/{field} | getActionsByIdActionByField()
[**get_actions_card_by_id_action**](ActionApi.md#get_actions_card_by_id_action) | **GET** /actions/{idAction}/card | getActionsCardByIdAction()
[**get_actions_card_by_id_action_by_field**](ActionApi.md#get_actions_card_by_id_action_by_field) | **GET** /actions/{idAction}/card/{field} | getActionsCardByIdActionByField()
[**get_actions_display_by_id_action**](ActionApi.md#get_actions_display_by_id_action) | **GET** /actions/{idAction}/display | getActionsDisplayByIdAction()
[**get_actions_entities_by_id_action**](ActionApi.md#get_actions_entities_by_id_action) | **GET** /actions/{idAction}/entities | getActionsEntitiesByIdAction()
[**get_actions_list_by_id_action**](ActionApi.md#get_actions_list_by_id_action) | **GET** /actions/{idAction}/list | getActionsListByIdAction()
[**get_actions_list_by_id_action_by_field**](ActionApi.md#get_actions_list_by_id_action_by_field) | **GET** /actions/{idAction}/list/{field} | getActionsListByIdActionByField()
[**get_actions_member_by_id_action**](ActionApi.md#get_actions_member_by_id_action) | **GET** /actions/{idAction}/member | getActionsMemberByIdAction()
[**get_actions_member_by_id_action_by_field**](ActionApi.md#get_actions_member_by_id_action_by_field) | **GET** /actions/{idAction}/member/{field} | getActionsMemberByIdActionByField()
[**get_actions_member_creator_by_id_action**](ActionApi.md#get_actions_member_creator_by_id_action) | **GET** /actions/{idAction}/memberCreator | getActionsMemberCreatorByIdAction()
[**get_actions_member_creator_by_id_action_by_field**](ActionApi.md#get_actions_member_creator_by_id_action_by_field) | **GET** /actions/{idAction}/memberCreator/{field} | getActionsMemberCreatorByIdActionByField()
[**get_actions_organization_by_id_action**](ActionApi.md#get_actions_organization_by_id_action) | **GET** /actions/{idAction}/organization | getActionsOrganizationByIdAction()
[**get_actions_organization_by_id_action_by_field**](ActionApi.md#get_actions_organization_by_id_action_by_field) | **GET** /actions/{idAction}/organization/{field} | getActionsOrganizationByIdActionByField()
[**update_actions_by_id_action**](ActionApi.md#update_actions_by_id_action) | **PUT** /actions/{idAction} | updateActionsByIdAction()
[**update_actions_text_by_id_action**](ActionApi.md#update_actions_text_by_id_action) | **PUT** /actions/{idAction}/text | updateActionsTextByIdAction()


# **delete_actions_by_id_action**
> delete_actions_by_id_action(id_action, key, token)

deleteActionsByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteActionsByIdAction()
        api_instance.delete_actions_by_id_action(id_action, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->delete_actions_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_board_by_id_action**
> get_actions_board_by_id_action(id_action, key, token, fields=fields)

getActionsBoardByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'all')

    try:
        # getActionsBoardByIdAction()
        api_instance.get_actions_board_by_id_action(id_action, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_board_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url | [optional] [default to &#39;all&#39;]

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_board_by_id_action_by_field**
> get_actions_board_by_id_action_by_field(id_action, var_field, key, token)

getActionsBoardByIdActionByField()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getActionsBoardByIdActionByField()
        api_instance.get_actions_board_by_id_action_by_field(id_action, var_field, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_board_by_id_action_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **var_field** | **str**| field | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_by_id_action**
> get_actions_by_id_action(id_action, key, token, display=display, entities=entities, fields=fields, member=member, member_fields=member_fields, member_creator=member_creator, member_creator_fields=member_creator_fields)

getActionsByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    display = 'display_example' # str |  true or false (optional)
    entities = 'entities_example' # str |  true or false (optional)
    fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator or type (optional) (default to 'all')
    member = 'member_example' # str |  true or false (optional)
    member_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    member_creator = 'member_creator_example' # str |  true or false (optional)
    member_creator_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')

    try:
        # getActionsByIdAction()
        api_instance.get_actions_by_id_action(id_action, key, token, display=display, entities=entities, fields=fields, member=member, member_fields=member_fields, member_creator=member_creator, member_creator_fields=member_creator_fields)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **display** | **str**|  true or false | [optional] 
 **entities** | **str**|  true or false | [optional] 
 **fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator or type | [optional] [default to &#39;all&#39;]
 **member** | **str**|  true or false | [optional] 
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **member_creator** | **str**|  true or false | [optional] 
 **member_creator_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_by_id_action_by_field**
> get_actions_by_id_action_by_field(id_action, var_field, key, token)

getActionsByIdActionByField()

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getActionsByIdActionByField()
        api_instance.get_actions_by_id_action_by_field(id_action, var_field, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_by_id_action_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **var_field** | **str**| field | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

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
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_card_by_id_action**
> get_actions_card_by_id_action(id_action, key, token, fields=fields)

getActionsCardByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')

    try:
        # getActionsCardByIdAction()
        api_instance.get_actions_card_by_id_action(id_action, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_card_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url | [optional] [default to &#39;all&#39;]

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_card_by_id_action_by_field**
> get_actions_card_by_id_action_by_field(id_action, var_field, key, token)

getActionsCardByIdActionByField()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getActionsCardByIdActionByField()
        api_instance.get_actions_card_by_id_action_by_field(id_action, var_field, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_card_by_id_action_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **var_field** | **str**| field | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_display_by_id_action**
> get_actions_display_by_id_action(id_action, key, token)

getActionsDisplayByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getActionsDisplayByIdAction()
        api_instance.get_actions_display_by_id_action(id_action, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_display_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_entities_by_id_action**
> get_actions_entities_by_id_action(id_action, key, token)

getActionsEntitiesByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getActionsEntitiesByIdAction()
        api_instance.get_actions_entities_by_id_action(id_action, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_entities_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_list_by_id_action**
> get_actions_list_by_id_action(id_action, key, token, fields=fields)

getActionsListByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: closed, idBoard, name, pos or subscribed (optional) (default to 'all')

    try:
        # getActionsListByIdAction()
        api_instance.get_actions_list_by_id_action(id_action, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_list_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: closed, idBoard, name, pos or subscribed | [optional] [default to &#39;all&#39;]

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_list_by_id_action_by_field**
> get_actions_list_by_id_action_by_field(id_action, var_field, key, token)

getActionsListByIdActionByField()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getActionsListByIdActionByField()
        api_instance.get_actions_list_by_id_action_by_field(id_action, var_field, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_list_by_id_action_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **var_field** | **str**| field | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_member_by_id_action**
> get_actions_member_by_id_action(id_action, key, token, fields=fields)

getActionsMemberByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username (optional) (default to 'all')

    try:
        # getActionsMemberByIdAction()
        api_instance.get_actions_member_by_id_action(id_action, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_member_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username | [optional] [default to &#39;all&#39;]

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_member_by_id_action_by_field**
> get_actions_member_by_id_action_by_field(id_action, var_field, key, token)

getActionsMemberByIdActionByField()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getActionsMemberByIdActionByField()
        api_instance.get_actions_member_by_id_action_by_field(id_action, var_field, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_member_by_id_action_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **var_field** | **str**| field | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_member_creator_by_id_action**
> get_actions_member_creator_by_id_action(id_action, key, token, fields=fields)

getActionsMemberCreatorByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username (optional) (default to 'all')

    try:
        # getActionsMemberCreatorByIdAction()
        api_instance.get_actions_member_creator_by_id_action(id_action, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_member_creator_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username | [optional] [default to &#39;all&#39;]

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_member_creator_by_id_action_by_field**
> get_actions_member_creator_by_id_action_by_field(id_action, var_field, key, token)

getActionsMemberCreatorByIdActionByField()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getActionsMemberCreatorByIdActionByField()
        api_instance.get_actions_member_creator_by_id_action_by_field(id_action, var_field, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_member_creator_by_id_action_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **var_field** | **str**| field | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_organization_by_id_action**
> get_actions_organization_by_id_action(id_action, key, token, fields=fields)

getActionsOrganizationByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'all')

    try:
        # getActionsOrganizationByIdAction()
        api_instance.get_actions_organization_by_id_action(id_action, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_organization_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website | [optional] [default to &#39;all&#39;]

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_actions_organization_by_id_action_by_field**
> get_actions_organization_by_id_action_by_field(id_action, var_field, key, token)

getActionsOrganizationByIdActionByField()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getActionsOrganizationByIdActionByField()
        api_instance.get_actions_organization_by_id_action_by_field(id_action, var_field, key, token)
    except Exception as e:
        print("Exception when calling ActionApi->get_actions_organization_by_id_action_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **var_field** | **str**| field | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_actions_by_id_action**
> update_actions_by_id_action(id_action, key, token, actions)

updateActionsByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.actions import Actions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    actions = openapi_client.Actions() # Actions | Attributes of \"Actions\" to be updated.

    try:
        # updateActionsByIdAction()
        api_instance.update_actions_by_id_action(id_action, key, token, actions)
    except Exception as e:
        print("Exception when calling ActionApi->update_actions_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **actions** | [**Actions**](Actions.md)| Attributes of \&quot;Actions\&quot; to be updated. | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_actions_text_by_id_action**
> update_actions_text_by_id_action(id_action, key, token, actions_text)

updateActionsTextByIdAction()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.actions_text import ActionsText
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trello.com/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trello.com/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: api_token
configuration.api_key['api_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    actions_text = openapi_client.ActionsText() # ActionsText | Attributes of \"Actions Text\" to be updated.

    try:
        # updateActionsTextByIdAction()
        api_instance.update_actions_text_by_id_action(id_action, key, token, actions_text)
    except Exception as e:
        print("Exception when calling ActionApi->update_actions_text_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **actions_text** | [**ActionsText**](ActionsText.md)| Attributes of \&quot;Actions Text\&quot; to be updated. | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [api_token](../README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Server rejection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

