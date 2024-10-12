# openapi_client.NotificationApi

All URIs are relative to *https://trello.com/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_notifications_all_read**](NotificationApi.md#add_notifications_all_read) | **POST** /notifications/all/read | addNotificationsAllRead()
[**get_notifications_board_by_id_notification**](NotificationApi.md#get_notifications_board_by_id_notification) | **GET** /notifications/{idNotification}/board | getNotificationsBoardByIdNotification()
[**get_notifications_board_by_id_notification_by_field**](NotificationApi.md#get_notifications_board_by_id_notification_by_field) | **GET** /notifications/{idNotification}/board/{field} | getNotificationsBoardByIdNotificationByField()
[**get_notifications_by_id_notification**](NotificationApi.md#get_notifications_by_id_notification) | **GET** /notifications/{idNotification} | getNotificationsByIdNotification()
[**get_notifications_by_id_notification_by_field**](NotificationApi.md#get_notifications_by_id_notification_by_field) | **GET** /notifications/{idNotification}/{field} | getNotificationsByIdNotificationByField()
[**get_notifications_card_by_id_notification**](NotificationApi.md#get_notifications_card_by_id_notification) | **GET** /notifications/{idNotification}/card | getNotificationsCardByIdNotification()
[**get_notifications_card_by_id_notification_by_field**](NotificationApi.md#get_notifications_card_by_id_notification_by_field) | **GET** /notifications/{idNotification}/card/{field} | getNotificationsCardByIdNotificationByField()
[**get_notifications_display_by_id_notification**](NotificationApi.md#get_notifications_display_by_id_notification) | **GET** /notifications/{idNotification}/display | getNotificationsDisplayByIdNotification()
[**get_notifications_entities_by_id_notification**](NotificationApi.md#get_notifications_entities_by_id_notification) | **GET** /notifications/{idNotification}/entities | getNotificationsEntitiesByIdNotification()
[**get_notifications_list_by_id_notification**](NotificationApi.md#get_notifications_list_by_id_notification) | **GET** /notifications/{idNotification}/list | getNotificationsListByIdNotification()
[**get_notifications_list_by_id_notification_by_field**](NotificationApi.md#get_notifications_list_by_id_notification_by_field) | **GET** /notifications/{idNotification}/list/{field} | getNotificationsListByIdNotificationByField()
[**get_notifications_member_by_id_notification**](NotificationApi.md#get_notifications_member_by_id_notification) | **GET** /notifications/{idNotification}/member | getNotificationsMemberByIdNotification()
[**get_notifications_member_by_id_notification_by_field**](NotificationApi.md#get_notifications_member_by_id_notification_by_field) | **GET** /notifications/{idNotification}/member/{field} | getNotificationsMemberByIdNotificationByField()
[**get_notifications_member_creator_by_id_notification**](NotificationApi.md#get_notifications_member_creator_by_id_notification) | **GET** /notifications/{idNotification}/memberCreator | getNotificationsMemberCreatorByIdNotification()
[**get_notifications_member_creator_by_id_notification_by_field**](NotificationApi.md#get_notifications_member_creator_by_id_notification_by_field) | **GET** /notifications/{idNotification}/memberCreator/{field} | getNotificationsMemberCreatorByIdNotificationByField()
[**get_notifications_organization_by_id_notification**](NotificationApi.md#get_notifications_organization_by_id_notification) | **GET** /notifications/{idNotification}/organization | getNotificationsOrganizationByIdNotification()
[**get_notifications_organization_by_id_notification_by_field**](NotificationApi.md#get_notifications_organization_by_id_notification_by_field) | **GET** /notifications/{idNotification}/organization/{field} | getNotificationsOrganizationByIdNotificationByField()
[**update_notifications_by_id_notification**](NotificationApi.md#update_notifications_by_id_notification) | **PUT** /notifications/{idNotification} | updateNotificationsByIdNotification()
[**update_notifications_unread_by_id_notification**](NotificationApi.md#update_notifications_unread_by_id_notification) | **PUT** /notifications/{idNotification}/unread | updateNotificationsUnreadByIdNotification()


# **add_notifications_all_read**
> add_notifications_all_read(key, token)

addNotificationsAllRead()

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
    api_instance = openapi_client.NotificationApi(api_client)
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # addNotificationsAllRead()
        api_instance.add_notifications_all_read(key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->add_notifications_all_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **get_notifications_board_by_id_notification**
> get_notifications_board_by_id_notification(id_notification, key, token, fields=fields)

getNotificationsBoardByIdNotification()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'all')

    try:
        # getNotificationsBoardByIdNotification()
        api_instance.get_notifications_board_by_id_notification(id_notification, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_board_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_board_by_id_notification_by_field**
> get_notifications_board_by_id_notification_by_field(id_notification, var_field, key, token)

getNotificationsBoardByIdNotificationByField()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getNotificationsBoardByIdNotificationByField()
        api_instance.get_notifications_board_by_id_notification_by_field(id_notification, var_field, key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_board_by_id_notification_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_by_id_notification**
> get_notifications_by_id_notification(id_notification, key, token, display=display, entities=entities, fields=fields, member_creator=member_creator, member_creator_fields=member_creator_fields, board=board, board_fields=board_fields, list=list, card=card, card_fields=card_fields, organization=organization, organization_fields=organization_fields, member=member, member_fields=member_fields)

getNotificationsByIdNotification()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    display = 'display_example' # str |  true or false (optional)
    entities = 'entities_example' # str |  true or false (optional)
    fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator, type or unread (optional) (default to 'all')
    member_creator = 'member_creator_example' # str |  true or false (optional)
    member_creator_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    board = 'board_example' # str |  true or false (optional)
    board_fields = 'name' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'name')
    list = 'list_example' # str |  true or false (optional)
    card = 'card_example' # str |  true or false (optional)
    card_fields = 'name' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'name')
    organization = 'organization_example' # str |  true or false (optional)
    organization_fields = 'displayName' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'displayName')
    member = 'member_example' # str |  true or false (optional)
    member_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')

    try:
        # getNotificationsByIdNotification()
        api_instance.get_notifications_by_id_notification(id_notification, key, token, display=display, entities=entities, fields=fields, member_creator=member_creator, member_creator_fields=member_creator_fields, board=board, board_fields=board_fields, list=list, card=card, card_fields=card_fields, organization=organization, organization_fields=organization_fields, member=member, member_fields=member_fields)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **display** | **str**|  true or false | [optional] 
 **entities** | **str**|  true or false | [optional] 
 **fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator, type or unread | [optional] [default to &#39;all&#39;]
 **member_creator** | **str**|  true or false | [optional] 
 **member_creator_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **board** | **str**|  true or false | [optional] 
 **board_fields** | **str**| all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url | [optional] [default to &#39;name&#39;]
 **list** | **str**|  true or false | [optional] 
 **card** | **str**|  true or false | [optional] 
 **card_fields** | **str**| all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url | [optional] [default to &#39;name&#39;]
 **organization** | **str**|  true or false | [optional] 
 **organization_fields** | **str**| all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website | [optional] [default to &#39;displayName&#39;]
 **member** | **str**|  true or false | [optional] 
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]

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

# **get_notifications_by_id_notification_by_field**
> get_notifications_by_id_notification_by_field(id_notification, var_field, key, token)

getNotificationsByIdNotificationByField()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getNotificationsByIdNotificationByField()
        api_instance.get_notifications_by_id_notification_by_field(id_notification, var_field, key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_by_id_notification_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_card_by_id_notification**
> get_notifications_card_by_id_notification(id_notification, key, token, fields=fields)

getNotificationsCardByIdNotification()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')

    try:
        # getNotificationsCardByIdNotification()
        api_instance.get_notifications_card_by_id_notification(id_notification, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_card_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_card_by_id_notification_by_field**
> get_notifications_card_by_id_notification_by_field(id_notification, var_field, key, token)

getNotificationsCardByIdNotificationByField()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getNotificationsCardByIdNotificationByField()
        api_instance.get_notifications_card_by_id_notification_by_field(id_notification, var_field, key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_card_by_id_notification_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_display_by_id_notification**
> get_notifications_display_by_id_notification(id_notification, key, token)

getNotificationsDisplayByIdNotification()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getNotificationsDisplayByIdNotification()
        api_instance.get_notifications_display_by_id_notification(id_notification, key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_display_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_entities_by_id_notification**
> get_notifications_entities_by_id_notification(id_notification, key, token)

getNotificationsEntitiesByIdNotification()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getNotificationsEntitiesByIdNotification()
        api_instance.get_notifications_entities_by_id_notification(id_notification, key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_entities_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_list_by_id_notification**
> get_notifications_list_by_id_notification(id_notification, key, token, fields=fields)

getNotificationsListByIdNotification()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: closed, idBoard, name, pos or subscribed (optional) (default to 'all')

    try:
        # getNotificationsListByIdNotification()
        api_instance.get_notifications_list_by_id_notification(id_notification, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_list_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_list_by_id_notification_by_field**
> get_notifications_list_by_id_notification_by_field(id_notification, var_field, key, token)

getNotificationsListByIdNotificationByField()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getNotificationsListByIdNotificationByField()
        api_instance.get_notifications_list_by_id_notification_by_field(id_notification, var_field, key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_list_by_id_notification_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_member_by_id_notification**
> get_notifications_member_by_id_notification(id_notification, key, token, fields=fields)

getNotificationsMemberByIdNotification()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username (optional) (default to 'all')

    try:
        # getNotificationsMemberByIdNotification()
        api_instance.get_notifications_member_by_id_notification(id_notification, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_member_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_member_by_id_notification_by_field**
> get_notifications_member_by_id_notification_by_field(id_notification, var_field, key, token)

getNotificationsMemberByIdNotificationByField()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getNotificationsMemberByIdNotificationByField()
        api_instance.get_notifications_member_by_id_notification_by_field(id_notification, var_field, key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_member_by_id_notification_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_member_creator_by_id_notification**
> get_notifications_member_creator_by_id_notification(id_notification, key, token, fields=fields)

getNotificationsMemberCreatorByIdNotification()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username (optional) (default to 'all')

    try:
        # getNotificationsMemberCreatorByIdNotification()
        api_instance.get_notifications_member_creator_by_id_notification(id_notification, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_member_creator_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_member_creator_by_id_notification_by_field**
> get_notifications_member_creator_by_id_notification_by_field(id_notification, var_field, key, token)

getNotificationsMemberCreatorByIdNotificationByField()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getNotificationsMemberCreatorByIdNotificationByField()
        api_instance.get_notifications_member_creator_by_id_notification_by_field(id_notification, var_field, key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_member_creator_by_id_notification_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_organization_by_id_notification**
> get_notifications_organization_by_id_notification(id_notification, key, token, fields=fields)

getNotificationsOrganizationByIdNotification()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'all')

    try:
        # getNotificationsOrganizationByIdNotification()
        api_instance.get_notifications_organization_by_id_notification(id_notification, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_organization_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **get_notifications_organization_by_id_notification_by_field**
> get_notifications_organization_by_id_notification_by_field(id_notification, var_field, key, token)

getNotificationsOrganizationByIdNotificationByField()

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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getNotificationsOrganizationByIdNotificationByField()
        api_instance.get_notifications_organization_by_id_notification_by_field(id_notification, var_field, key, token)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notifications_organization_by_id_notification_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
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

# **update_notifications_by_id_notification**
> update_notifications_by_id_notification(id_notification, key, token, notifications)

updateNotificationsByIdNotification()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.notifications import Notifications
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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    notifications = openapi_client.Notifications() # Notifications | Attributes of \"Notifications\" to be updated.

    try:
        # updateNotificationsByIdNotification()
        api_instance.update_notifications_by_id_notification(id_notification, key, token, notifications)
    except Exception as e:
        print("Exception when calling NotificationApi->update_notifications_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **notifications** | [**Notifications**](Notifications.md)| Attributes of \&quot;Notifications\&quot; to be updated. | 

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

# **update_notifications_unread_by_id_notification**
> update_notifications_unread_by_id_notification(id_notification, key, token, notifications_unread)

updateNotificationsUnreadByIdNotification()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.notifications_unread import NotificationsUnread
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
    api_instance = openapi_client.NotificationApi(api_client)
    id_notification = 'id_notification_example' # str | idNotification
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    notifications_unread = openapi_client.NotificationsUnread() # NotificationsUnread | Attributes of \"Notifications Unread\" to be updated.

    try:
        # updateNotificationsUnreadByIdNotification()
        api_instance.update_notifications_unread_by_id_notification(id_notification, key, token, notifications_unread)
    except Exception as e:
        print("Exception when calling NotificationApi->update_notifications_unread_by_id_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_notification** | **str**| idNotification | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **notifications_unread** | [**NotificationsUnread**](NotificationsUnread.md)| Attributes of \&quot;Notifications Unread\&quot; to be updated. | 

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

