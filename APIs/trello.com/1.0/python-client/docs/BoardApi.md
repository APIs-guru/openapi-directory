# openapi_client.BoardApi

All URIs are relative to *https://trello.com/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_boards**](BoardApi.md#add_boards) | **POST** /boards | addBoards()
[**add_boards_calendar_key_generate_by_id_board**](BoardApi.md#add_boards_calendar_key_generate_by_id_board) | **POST** /boards/{idBoard}/calendarKey/generate | addBoardsCalendarKeyGenerateByIdBoard()
[**add_boards_checklists_by_id_board**](BoardApi.md#add_boards_checklists_by_id_board) | **POST** /boards/{idBoard}/checklists | addBoardsChecklistsByIdBoard()
[**add_boards_email_key_generate_by_id_board**](BoardApi.md#add_boards_email_key_generate_by_id_board) | **POST** /boards/{idBoard}/emailKey/generate | addBoardsEmailKeyGenerateByIdBoard()
[**add_boards_labels_by_id_board**](BoardApi.md#add_boards_labels_by_id_board) | **POST** /boards/{idBoard}/labels | addBoardsLabelsByIdBoard()
[**add_boards_lists_by_id_board**](BoardApi.md#add_boards_lists_by_id_board) | **POST** /boards/{idBoard}/lists | addBoardsListsByIdBoard()
[**add_boards_mark_as_viewed_by_id_board**](BoardApi.md#add_boards_mark_as_viewed_by_id_board) | **POST** /boards/{idBoard}/markAsViewed | addBoardsMarkAsViewedByIdBoard()
[**add_boards_power_ups_by_id_board**](BoardApi.md#add_boards_power_ups_by_id_board) | **POST** /boards/{idBoard}/powerUps | addBoardsPowerUpsByIdBoard()
[**delete_boards_members_by_id_board_by_id_member**](BoardApi.md#delete_boards_members_by_id_board_by_id_member) | **DELETE** /boards/{idBoard}/members/{idMember} | deleteBoardsMembersByIdBoardByIdMember()
[**delete_boards_power_ups_by_id_board_by_power_up**](BoardApi.md#delete_boards_power_ups_by_id_board_by_power_up) | **DELETE** /boards/{idBoard}/powerUps/{powerUp} | deleteBoardsPowerUpsByIdBoardByPowerUp()
[**get_boards_actions_by_id_board**](BoardApi.md#get_boards_actions_by_id_board) | **GET** /boards/{idBoard}/actions | getBoardsActionsByIdBoard()
[**get_boards_board_stars_by_id_board**](BoardApi.md#get_boards_board_stars_by_id_board) | **GET** /boards/{idBoard}/boardStars | getBoardsBoardStarsByIdBoard()
[**get_boards_by_id_board**](BoardApi.md#get_boards_by_id_board) | **GET** /boards/{idBoard} | getBoardsByIdBoard()
[**get_boards_by_id_board_by_field**](BoardApi.md#get_boards_by_id_board_by_field) | **GET** /boards/{idBoard}/{field} | getBoardsByIdBoardByField()
[**get_boards_cards_by_id_board**](BoardApi.md#get_boards_cards_by_id_board) | **GET** /boards/{idBoard}/cards | getBoardsCardsByIdBoard()
[**get_boards_cards_by_id_board_by_filter**](BoardApi.md#get_boards_cards_by_id_board_by_filter) | **GET** /boards/{idBoard}/cards/{filter} | getBoardsCardsByIdBoardByFilter()
[**get_boards_cards_by_id_board_by_id_card**](BoardApi.md#get_boards_cards_by_id_board_by_id_card) | **GET** /boards/{idBoard}/cards/{idCard} | getBoardsCardsByIdBoardByIdCard()
[**get_boards_checklists_by_id_board**](BoardApi.md#get_boards_checklists_by_id_board) | **GET** /boards/{idBoard}/checklists | getBoardsChecklistsByIdBoard()
[**get_boards_deltas_by_id_board**](BoardApi.md#get_boards_deltas_by_id_board) | **GET** /boards/{idBoard}/deltas | getBoardsDeltasByIdBoard()
[**get_boards_labels_by_id_board**](BoardApi.md#get_boards_labels_by_id_board) | **GET** /boards/{idBoard}/labels | getBoardsLabelsByIdBoard()
[**get_boards_labels_by_id_board_by_id_label**](BoardApi.md#get_boards_labels_by_id_board_by_id_label) | **GET** /boards/{idBoard}/labels/{idLabel} | getBoardsLabelsByIdBoardByIdLabel()
[**get_boards_lists_by_id_board**](BoardApi.md#get_boards_lists_by_id_board) | **GET** /boards/{idBoard}/lists | getBoardsListsByIdBoard()
[**get_boards_lists_by_id_board_by_filter**](BoardApi.md#get_boards_lists_by_id_board_by_filter) | **GET** /boards/{idBoard}/lists/{filter} | getBoardsListsByIdBoardByFilter()
[**get_boards_members_by_id_board**](BoardApi.md#get_boards_members_by_id_board) | **GET** /boards/{idBoard}/members | getBoardsMembersByIdBoard()
[**get_boards_members_by_id_board_by_filter**](BoardApi.md#get_boards_members_by_id_board_by_filter) | **GET** /boards/{idBoard}/members/{filter} | getBoardsMembersByIdBoardByFilter()
[**get_boards_members_cards_by_id_board_by_id_member**](BoardApi.md#get_boards_members_cards_by_id_board_by_id_member) | **GET** /boards/{idBoard}/members/{idMember}/cards | getBoardsMembersCardsByIdBoardByIdMember()
[**get_boards_members_invited_by_id_board**](BoardApi.md#get_boards_members_invited_by_id_board) | **GET** /boards/{idBoard}/membersInvited | getBoardsMembersInvitedByIdBoard()
[**get_boards_members_invited_by_id_board_by_field**](BoardApi.md#get_boards_members_invited_by_id_board_by_field) | **GET** /boards/{idBoard}/membersInvited/{field} | getBoardsMembersInvitedByIdBoardByField()
[**get_boards_memberships_by_id_board**](BoardApi.md#get_boards_memberships_by_id_board) | **GET** /boards/{idBoard}/memberships | getBoardsMembershipsByIdBoard()
[**get_boards_memberships_by_id_board_by_id_membership**](BoardApi.md#get_boards_memberships_by_id_board_by_id_membership) | **GET** /boards/{idBoard}/memberships/{idMembership} | getBoardsMembershipsByIdBoardByIdMembership()
[**get_boards_my_prefs_by_id_board**](BoardApi.md#get_boards_my_prefs_by_id_board) | **GET** /boards/{idBoard}/myPrefs | getBoardsMyPrefsByIdBoard()
[**get_boards_organization_by_id_board**](BoardApi.md#get_boards_organization_by_id_board) | **GET** /boards/{idBoard}/organization | getBoardsOrganizationByIdBoard()
[**get_boards_organization_by_id_board_by_field**](BoardApi.md#get_boards_organization_by_id_board_by_field) | **GET** /boards/{idBoard}/organization/{field} | getBoardsOrganizationByIdBoardByField()
[**update_boards_by_id_board**](BoardApi.md#update_boards_by_id_board) | **PUT** /boards/{idBoard} | updateBoardsByIdBoard()
[**update_boards_closed_by_id_board**](BoardApi.md#update_boards_closed_by_id_board) | **PUT** /boards/{idBoard}/closed | updateBoardsClosedByIdBoard()
[**update_boards_desc_by_id_board**](BoardApi.md#update_boards_desc_by_id_board) | **PUT** /boards/{idBoard}/desc | updateBoardsDescByIdBoard()
[**update_boards_id_organization_by_id_board**](BoardApi.md#update_boards_id_organization_by_id_board) | **PUT** /boards/{idBoard}/idOrganization | updateBoardsIdOrganizationByIdBoard()
[**update_boards_label_names_blue_by_id_board**](BoardApi.md#update_boards_label_names_blue_by_id_board) | **PUT** /boards/{idBoard}/labelNames/blue | updateBoardsLabelNamesBlueByIdBoard()
[**update_boards_label_names_green_by_id_board**](BoardApi.md#update_boards_label_names_green_by_id_board) | **PUT** /boards/{idBoard}/labelNames/green | updateBoardsLabelNamesGreenByIdBoard()
[**update_boards_label_names_orange_by_id_board**](BoardApi.md#update_boards_label_names_orange_by_id_board) | **PUT** /boards/{idBoard}/labelNames/orange | updateBoardsLabelNamesOrangeByIdBoard()
[**update_boards_label_names_purple_by_id_board**](BoardApi.md#update_boards_label_names_purple_by_id_board) | **PUT** /boards/{idBoard}/labelNames/purple | updateBoardsLabelNamesPurpleByIdBoard()
[**update_boards_label_names_red_by_id_board**](BoardApi.md#update_boards_label_names_red_by_id_board) | **PUT** /boards/{idBoard}/labelNames/red | updateBoardsLabelNamesRedByIdBoard()
[**update_boards_label_names_yellow_by_id_board**](BoardApi.md#update_boards_label_names_yellow_by_id_board) | **PUT** /boards/{idBoard}/labelNames/yellow | updateBoardsLabelNamesYellowByIdBoard()
[**update_boards_members_by_id_board**](BoardApi.md#update_boards_members_by_id_board) | **PUT** /boards/{idBoard}/members | updateBoardsMembersByIdBoard()
[**update_boards_members_by_id_board_by_id_member**](BoardApi.md#update_boards_members_by_id_board_by_id_member) | **PUT** /boards/{idBoard}/members/{idMember} | updateBoardsMembersByIdBoardByIdMember()
[**update_boards_memberships_by_id_board_by_id_membership**](BoardApi.md#update_boards_memberships_by_id_board_by_id_membership) | **PUT** /boards/{idBoard}/memberships/{idMembership} | updateBoardsMembershipsByIdBoardByIdMembership()
[**update_boards_my_prefs_email_position_by_id_board**](BoardApi.md#update_boards_my_prefs_email_position_by_id_board) | **PUT** /boards/{idBoard}/myPrefs/emailPosition | updateBoardsMyPrefsEmailPositionByIdBoard()
[**update_boards_my_prefs_id_email_list_by_id_board**](BoardApi.md#update_boards_my_prefs_id_email_list_by_id_board) | **PUT** /boards/{idBoard}/myPrefs/idEmailList | updateBoardsMyPrefsIdEmailListByIdBoard()
[**update_boards_my_prefs_show_list_guide_by_id_board**](BoardApi.md#update_boards_my_prefs_show_list_guide_by_id_board) | **PUT** /boards/{idBoard}/myPrefs/showListGuide | updateBoardsMyPrefsShowListGuideByIdBoard()
[**update_boards_my_prefs_show_sidebar_activity_by_id_board**](BoardApi.md#update_boards_my_prefs_show_sidebar_activity_by_id_board) | **PUT** /boards/{idBoard}/myPrefs/showSidebarActivity | updateBoardsMyPrefsShowSidebarActivityByIdBoard()
[**update_boards_my_prefs_show_sidebar_board_actions_by_id_board**](BoardApi.md#update_boards_my_prefs_show_sidebar_board_actions_by_id_board) | **PUT** /boards/{idBoard}/myPrefs/showSidebarBoardActions | updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()
[**update_boards_my_prefs_show_sidebar_by_id_board**](BoardApi.md#update_boards_my_prefs_show_sidebar_by_id_board) | **PUT** /boards/{idBoard}/myPrefs/showSidebar | updateBoardsMyPrefsShowSidebarByIdBoard()
[**update_boards_my_prefs_show_sidebar_members_by_id_board**](BoardApi.md#update_boards_my_prefs_show_sidebar_members_by_id_board) | **PUT** /boards/{idBoard}/myPrefs/showSidebarMembers | updateBoardsMyPrefsShowSidebarMembersByIdBoard()
[**update_boards_name_by_id_board**](BoardApi.md#update_boards_name_by_id_board) | **PUT** /boards/{idBoard}/name | updateBoardsNameByIdBoard()
[**update_boards_prefs_background_by_id_board**](BoardApi.md#update_boards_prefs_background_by_id_board) | **PUT** /boards/{idBoard}/prefs/background | updateBoardsPrefsBackgroundByIdBoard()
[**update_boards_prefs_calendar_feed_enabled_by_id_board**](BoardApi.md#update_boards_prefs_calendar_feed_enabled_by_id_board) | **PUT** /boards/{idBoard}/prefs/calendarFeedEnabled | updateBoardsPrefsCalendarFeedEnabledByIdBoard()
[**update_boards_prefs_card_aging_by_id_board**](BoardApi.md#update_boards_prefs_card_aging_by_id_board) | **PUT** /boards/{idBoard}/prefs/cardAging | updateBoardsPrefsCardAgingByIdBoard()
[**update_boards_prefs_card_covers_by_id_board**](BoardApi.md#update_boards_prefs_card_covers_by_id_board) | **PUT** /boards/{idBoard}/prefs/cardCovers | updateBoardsPrefsCardCoversByIdBoard()
[**update_boards_prefs_comments_by_id_board**](BoardApi.md#update_boards_prefs_comments_by_id_board) | **PUT** /boards/{idBoard}/prefs/comments | updateBoardsPrefsCommentsByIdBoard()
[**update_boards_prefs_invitations_by_id_board**](BoardApi.md#update_boards_prefs_invitations_by_id_board) | **PUT** /boards/{idBoard}/prefs/invitations | updateBoardsPrefsInvitationsByIdBoard()
[**update_boards_prefs_permission_level_by_id_board**](BoardApi.md#update_boards_prefs_permission_level_by_id_board) | **PUT** /boards/{idBoard}/prefs/permissionLevel | updateBoardsPrefsPermissionLevelByIdBoard()
[**update_boards_prefs_self_join_by_id_board**](BoardApi.md#update_boards_prefs_self_join_by_id_board) | **PUT** /boards/{idBoard}/prefs/selfJoin | updateBoardsPrefsSelfJoinByIdBoard()
[**update_boards_prefs_voting_by_id_board**](BoardApi.md#update_boards_prefs_voting_by_id_board) | **PUT** /boards/{idBoard}/prefs/voting | updateBoardsPrefsVotingByIdBoard()
[**update_boards_subscribed_by_id_board**](BoardApi.md#update_boards_subscribed_by_id_board) | **PUT** /boards/{idBoard}/subscribed | updateBoardsSubscribedByIdBoard()


# **add_boards**
> add_boards(key, token, boards)

addBoards()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards import Boards
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
    api_instance = openapi_client.BoardApi(api_client)
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards = openapi_client.Boards() # Boards | Attributes of \"Boards\" to be added.

    try:
        # addBoards()
        api_instance.add_boards(key, token, boards)
    except Exception as e:
        print("Exception when calling BoardApi->add_boards: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards** | [**Boards**](Boards.md)| Attributes of \&quot;Boards\&quot; to be added. | 

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

# **add_boards_calendar_key_generate_by_id_board**
> add_boards_calendar_key_generate_by_id_board(id_board, key, token)

addBoardsCalendarKeyGenerateByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # addBoardsCalendarKeyGenerateByIdBoard()
        api_instance.add_boards_calendar_key_generate_by_id_board(id_board, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->add_boards_calendar_key_generate_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
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

# **add_boards_checklists_by_id_board**
> add_boards_checklists_by_id_board(id_board, key, token, boards_checklists)

addBoardsChecklistsByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_checklists import BoardsChecklists
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_checklists = openapi_client.BoardsChecklists() # BoardsChecklists | Attributes of \"Boards Checklists\" to be added.

    try:
        # addBoardsChecklistsByIdBoard()
        api_instance.add_boards_checklists_by_id_board(id_board, key, token, boards_checklists)
    except Exception as e:
        print("Exception when calling BoardApi->add_boards_checklists_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_checklists** | [**BoardsChecklists**](BoardsChecklists.md)| Attributes of \&quot;Boards Checklists\&quot; to be added. | 

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

# **add_boards_email_key_generate_by_id_board**
> add_boards_email_key_generate_by_id_board(id_board, key, token)

addBoardsEmailKeyGenerateByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # addBoardsEmailKeyGenerateByIdBoard()
        api_instance.add_boards_email_key_generate_by_id_board(id_board, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->add_boards_email_key_generate_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
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

# **add_boards_labels_by_id_board**
> add_boards_labels_by_id_board(id_board, key, token, boards_labels)

addBoardsLabelsByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_labels import BoardsLabels
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_labels = openapi_client.BoardsLabels() # BoardsLabels | Attributes of \"Boards Labels\" to be added.

    try:
        # addBoardsLabelsByIdBoard()
        api_instance.add_boards_labels_by_id_board(id_board, key, token, boards_labels)
    except Exception as e:
        print("Exception when calling BoardApi->add_boards_labels_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_labels** | [**BoardsLabels**](BoardsLabels.md)| Attributes of \&quot;Boards Labels\&quot; to be added. | 

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

# **add_boards_lists_by_id_board**
> add_boards_lists_by_id_board(id_board, key, token, boards_lists)

addBoardsListsByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_lists import BoardsLists
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_lists = openapi_client.BoardsLists() # BoardsLists | Attributes of \"Boards Lists\" to be added.

    try:
        # addBoardsListsByIdBoard()
        api_instance.add_boards_lists_by_id_board(id_board, key, token, boards_lists)
    except Exception as e:
        print("Exception when calling BoardApi->add_boards_lists_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_lists** | [**BoardsLists**](BoardsLists.md)| Attributes of \&quot;Boards Lists\&quot; to be added. | 

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

# **add_boards_mark_as_viewed_by_id_board**
> add_boards_mark_as_viewed_by_id_board(id_board, key, token)

addBoardsMarkAsViewedByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # addBoardsMarkAsViewedByIdBoard()
        api_instance.add_boards_mark_as_viewed_by_id_board(id_board, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->add_boards_mark_as_viewed_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
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

# **add_boards_power_ups_by_id_board**
> add_boards_power_ups_by_id_board(id_board, key, token, boards_power_ups)

addBoardsPowerUpsByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_power_ups import BoardsPowerUps
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_power_ups = openapi_client.BoardsPowerUps() # BoardsPowerUps | Attributes of \"Boards Power Ups\" to be added.

    try:
        # addBoardsPowerUpsByIdBoard()
        api_instance.add_boards_power_ups_by_id_board(id_board, key, token, boards_power_ups)
    except Exception as e:
        print("Exception when calling BoardApi->add_boards_power_ups_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_power_ups** | [**BoardsPowerUps**](BoardsPowerUps.md)| Attributes of \&quot;Boards Power Ups\&quot; to be added. | 

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

# **delete_boards_members_by_id_board_by_id_member**
> delete_boards_members_by_id_board_by_id_member(id_board, id_member, key, token)

deleteBoardsMembersByIdBoardByIdMember()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    id_member = 'id_member_example' # str | idMember
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteBoardsMembersByIdBoardByIdMember()
        api_instance.delete_boards_members_by_id_board_by_id_member(id_board, id_member, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->delete_boards_members_by_id_board_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **id_member** | **str**| idMember | 
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

# **delete_boards_power_ups_by_id_board_by_power_up**
> delete_boards_power_ups_by_id_board_by_power_up(id_board, power_up, key, token)

deleteBoardsPowerUpsByIdBoardByPowerUp()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    power_up = 'power_up_example' # str | powerUp
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteBoardsPowerUpsByIdBoardByPowerUp()
        api_instance.delete_boards_power_ups_by_id_board_by_power_up(id_board, power_up, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->delete_boards_power_ups_by_id_board_by_power_up: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **power_up** | **str**| powerUp | 
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

# **get_boards_actions_by_id_board**
> get_boards_actions_by_id_board(id_board, key, token, entities=entities, display=display, filter=filter, fields=fields, limit=limit, format=format, since=since, before=before, page=page, id_models=id_models, member=member, member_fields=member_fields, member_creator=member_creator, member_creator_fields=member_creator_fields)

getBoardsActionsByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    entities = 'entities_example' # str |  true or false (optional)
    display = 'display_example' # str |  true or false (optional)
    filter = 'all' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional) (default to 'all')
    fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator or type (optional) (default to 'all')
    limit = '50' # str | a number from 0 to 1000 (optional) (default to '50')
    format = 'list' # str | One of: count, list or minimal (optional) (default to 'list')
    since = 'since_example' # str | A date, null or lastView (optional)
    before = 'before_example' # str | A date, or null (optional)
    page = '0' # str | Page * limit must be less than 1000 (optional) (default to '0')
    id_models = 'id_models_example' # str | Only return actions related to these model ids (optional)
    member = 'member_example' # str |  true or false (optional)
    member_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    member_creator = 'member_creator_example' # str |  true or false (optional)
    member_creator_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')

    try:
        # getBoardsActionsByIdBoard()
        api_instance.get_boards_actions_by_id_board(id_board, key, token, entities=entities, display=display, filter=filter, fields=fields, limit=limit, format=format, since=since, before=before, page=page, id_models=id_models, member=member, member_fields=member_fields, member_creator=member_creator, member_creator_fields=member_creator_fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_actions_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **entities** | **str**|  true or false | [optional] 
 **display** | **str**|  true or false | [optional] 
 **filter** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] [default to &#39;all&#39;]
 **fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator or type | [optional] [default to &#39;all&#39;]
 **limit** | **str**| a number from 0 to 1000 | [optional] [default to &#39;50&#39;]
 **format** | **str**| One of: count, list or minimal | [optional] [default to &#39;list&#39;]
 **since** | **str**| A date, null or lastView | [optional] 
 **before** | **str**| A date, or null | [optional] 
 **page** | **str**| Page * limit must be less than 1000 | [optional] [default to &#39;0&#39;]
 **id_models** | **str**| Only return actions related to these model ids | [optional] 
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

# **get_boards_board_stars_by_id_board**
> get_boards_board_stars_by_id_board(id_board, key, token, filter=filter)

getBoardsBoardStarsByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'mine' # str | One of: mine or none (optional) (default to 'mine')

    try:
        # getBoardsBoardStarsByIdBoard()
        api_instance.get_boards_board_stars_by_id_board(id_board, key, token, filter=filter)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_board_stars_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| One of: mine or none | [optional] [default to &#39;mine&#39;]

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

# **get_boards_by_id_board**
> get_boards_by_id_board(id_board, key, token, actions=actions, actions_entities=actions_entities, actions_display=actions_display, actions_format=actions_format, actions_since=actions_since, actions_limit=actions_limit, action_fields=action_fields, action_member=action_member, action_member_fields=action_member_fields, action_member_creator=action_member_creator, action_member_creator_fields=action_member_creator_fields, cards=cards, card_fields=card_fields, card_attachments=card_attachments, card_attachment_fields=card_attachment_fields, card_checklists=card_checklists, card_stickers=card_stickers, board_stars=board_stars, labels=labels, label_fields=label_fields, labels_limit=labels_limit, lists=lists, list_fields=list_fields, memberships=memberships, memberships_member=memberships_member, memberships_member_fields=memberships_member_fields, members=members, member_fields=member_fields, members_invited=members_invited, members_invited_fields=members_invited_fields, checklists=checklists, checklist_fields=checklist_fields, organization=organization, organization_fields=organization_fields, organization_memberships=organization_memberships, my_prefs=my_prefs, fields=fields)

getBoardsByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    actions = 'actions_example' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional)
    actions_entities = 'actions_entities_example' # str |  true or false (optional)
    actions_display = 'actions_display_example' # str |  true or false (optional)
    actions_format = 'list' # str | One of: count, list or minimal (optional) (default to 'list')
    actions_since = 'actions_since_example' # str | A date, null or lastView (optional)
    actions_limit = '50' # str | a number from 0 to 1000 (optional) (default to '50')
    action_fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator or type (optional) (default to 'all')
    action_member = 'action_member_example' # str |  true or false (optional)
    action_member_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    action_member_creator = 'action_member_creator_example' # str |  true or false (optional)
    action_member_creator_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    cards = 'none' # str | One of: all, closed, none, open or visible (optional) (default to 'none')
    card_fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')
    card_attachments = 'card_attachments_example' # str | A boolean value or &quot;cover&quot; for only card cover attachments (optional)
    card_attachment_fields = 'all' # str | all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url (optional) (default to 'all')
    card_checklists = 'none' # str | One of: all or none (optional) (default to 'none')
    card_stickers = 'card_stickers_example' # str |  true or false (optional)
    board_stars = 'none' # str | One of: mine or none (optional) (default to 'none')
    labels = 'none' # str | One of: all or none (optional) (default to 'none')
    label_fields = 'all' # str | all or a comma-separated list of: color, idBoard, name or uses (optional) (default to 'all')
    labels_limit = '50' # str | a number from 0 to 1000 (optional) (default to '50')
    lists = 'none' # str | One of: all, closed, none or open (optional) (default to 'none')
    list_fields = 'all' # str | all or a comma-separated list of: closed, idBoard, name, pos or subscribed (optional) (default to 'all')
    memberships = 'none' # str | all or a comma-separated list of: active, admin, deactivated, me or normal (optional) (default to 'none')
    memberships_member = 'memberships_member_example' # str |  true or false (optional)
    memberships_member_fields = 'fullName and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'fullName and username')
    members = 'none' # str | One of: admins, all, none, normal or owners (optional) (default to 'none')
    member_fields = 'avatarHash, initials, fullName, username and confirmed' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, initials, fullName, username and confirmed')
    members_invited = 'none' # str | One of: admins, all, none, normal or owners (optional) (default to 'none')
    members_invited_fields = 'avatarHash, initials, fullName and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, initials, fullName and username')
    checklists = 'none' # str | One of: all or none (optional) (default to 'none')
    checklist_fields = 'all' # str | all or a comma-separated list of: idBoard, idCard, name or pos (optional) (default to 'all')
    organization = 'organization_example' # str |  true or false (optional)
    organization_fields = 'name and displayName' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'name and displayName')
    organization_memberships = 'none' # str | all or a comma-separated list of: active, admin, deactivated, me or normal (optional) (default to 'none')
    my_prefs = 'my_prefs_example' # str |  true or false (optional)
    fields = 'name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs and labelNames' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs and labelNames')

    try:
        # getBoardsByIdBoard()
        api_instance.get_boards_by_id_board(id_board, key, token, actions=actions, actions_entities=actions_entities, actions_display=actions_display, actions_format=actions_format, actions_since=actions_since, actions_limit=actions_limit, action_fields=action_fields, action_member=action_member, action_member_fields=action_member_fields, action_member_creator=action_member_creator, action_member_creator_fields=action_member_creator_fields, cards=cards, card_fields=card_fields, card_attachments=card_attachments, card_attachment_fields=card_attachment_fields, card_checklists=card_checklists, card_stickers=card_stickers, board_stars=board_stars, labels=labels, label_fields=label_fields, labels_limit=labels_limit, lists=lists, list_fields=list_fields, memberships=memberships, memberships_member=memberships_member, memberships_member_fields=memberships_member_fields, members=members, member_fields=member_fields, members_invited=members_invited, members_invited_fields=members_invited_fields, checklists=checklists, checklist_fields=checklist_fields, organization=organization, organization_fields=organization_fields, organization_memberships=organization_memberships, my_prefs=my_prefs, fields=fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **actions** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] 
 **actions_entities** | **str**|  true or false | [optional] 
 **actions_display** | **str**|  true or false | [optional] 
 **actions_format** | **str**| One of: count, list or minimal | [optional] [default to &#39;list&#39;]
 **actions_since** | **str**| A date, null or lastView | [optional] 
 **actions_limit** | **str**| a number from 0 to 1000 | [optional] [default to &#39;50&#39;]
 **action_fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator or type | [optional] [default to &#39;all&#39;]
 **action_member** | **str**|  true or false | [optional] 
 **action_member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **action_member_creator** | **str**|  true or false | [optional] 
 **action_member_creator_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **cards** | **str**| One of: all, closed, none, open or visible | [optional] [default to &#39;none&#39;]
 **card_fields** | **str**| all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url | [optional] [default to &#39;all&#39;]
 **card_attachments** | **str**| A boolean value or &amp;quot;cover&amp;quot; for only card cover attachments | [optional] 
 **card_attachment_fields** | **str**| all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url | [optional] [default to &#39;all&#39;]
 **card_checklists** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **card_stickers** | **str**|  true or false | [optional] 
 **board_stars** | **str**| One of: mine or none | [optional] [default to &#39;none&#39;]
 **labels** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **label_fields** | **str**| all or a comma-separated list of: color, idBoard, name or uses | [optional] [default to &#39;all&#39;]
 **labels_limit** | **str**| a number from 0 to 1000 | [optional] [default to &#39;50&#39;]
 **lists** | **str**| One of: all, closed, none or open | [optional] [default to &#39;none&#39;]
 **list_fields** | **str**| all or a comma-separated list of: closed, idBoard, name, pos or subscribed | [optional] [default to &#39;all&#39;]
 **memberships** | **str**| all or a comma-separated list of: active, admin, deactivated, me or normal | [optional] [default to &#39;none&#39;]
 **memberships_member** | **str**|  true or false | [optional] 
 **memberships_member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;fullName and username&#39;]
 **members** | **str**| One of: admins, all, none, normal or owners | [optional] [default to &#39;none&#39;]
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, initials, fullName, username and confirmed&#39;]
 **members_invited** | **str**| One of: admins, all, none, normal or owners | [optional] [default to &#39;none&#39;]
 **members_invited_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, initials, fullName and username&#39;]
 **checklists** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **checklist_fields** | **str**| all or a comma-separated list of: idBoard, idCard, name or pos | [optional] [default to &#39;all&#39;]
 **organization** | **str**|  true or false | [optional] 
 **organization_fields** | **str**| all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website | [optional] [default to &#39;name and displayName&#39;]
 **organization_memberships** | **str**| all or a comma-separated list of: active, admin, deactivated, me or normal | [optional] [default to &#39;none&#39;]
 **my_prefs** | **str**|  true or false | [optional] 
 **fields** | **str**| all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url | [optional] [default to &#39;name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs and labelNames&#39;]

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

# **get_boards_by_id_board_by_field**
> get_boards_by_id_board_by_field(id_board, var_field, key, token)

getBoardsByIdBoardByField()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getBoardsByIdBoardByField()
        api_instance.get_boards_by_id_board_by_field(id_board, var_field, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_by_id_board_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
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

# **get_boards_cards_by_id_board**
> get_boards_cards_by_id_board(id_board, key, token, actions=actions, attachments=attachments, attachment_fields=attachment_fields, stickers=stickers, members=members, member_fields=member_fields, check_item_states=check_item_states, checklists=checklists, limit=limit, since=since, before=before, filter=filter, fields=fields)

getBoardsCardsByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    actions = 'actions_example' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional)
    attachments = 'attachments_example' # str | A boolean value or &quot;cover&quot; for only card cover attachments (optional)
    attachment_fields = 'all' # str | all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url (optional) (default to 'all')
    stickers = 'stickers_example' # str |  true or false (optional)
    members = 'members_example' # str |  true or false (optional)
    member_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    check_item_states = 'check_item_states_example' # str |  true or false (optional)
    checklists = 'none' # str | One of: all or none (optional) (default to 'none')
    limit = 'limit_example' # str | a number from 1 to 1000 (optional)
    since = 'since_example' # str | A date, or null (optional)
    before = 'before_example' # str | A date, or null (optional)
    filter = 'visible' # str | One of: all, closed, none, open or visible (optional) (default to 'visible')
    fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')

    try:
        # getBoardsCardsByIdBoard()
        api_instance.get_boards_cards_by_id_board(id_board, key, token, actions=actions, attachments=attachments, attachment_fields=attachment_fields, stickers=stickers, members=members, member_fields=member_fields, check_item_states=check_item_states, checklists=checklists, limit=limit, since=since, before=before, filter=filter, fields=fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_cards_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **actions** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] 
 **attachments** | **str**| A boolean value or &amp;quot;cover&amp;quot; for only card cover attachments | [optional] 
 **attachment_fields** | **str**| all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url | [optional] [default to &#39;all&#39;]
 **stickers** | **str**|  true or false | [optional] 
 **members** | **str**|  true or false | [optional] 
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **check_item_states** | **str**|  true or false | [optional] 
 **checklists** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **limit** | **str**| a number from 1 to 1000 | [optional] 
 **since** | **str**| A date, or null | [optional] 
 **before** | **str**| A date, or null | [optional] 
 **filter** | **str**| One of: all, closed, none, open or visible | [optional] [default to &#39;visible&#39;]
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

# **get_boards_cards_by_id_board_by_filter**
> get_boards_cards_by_id_board_by_filter(id_board, filter, key, token)

getBoardsCardsByIdBoardByFilter()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    filter = 'filter_example' # str | filter
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getBoardsCardsByIdBoardByFilter()
        api_instance.get_boards_cards_by_id_board_by_filter(id_board, filter, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_cards_by_id_board_by_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **filter** | **str**| filter | 
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

# **get_boards_cards_by_id_board_by_id_card**
> get_boards_cards_by_id_board_by_id_card(id_board, id_card, key, token, attachments=attachments, attachment_fields=attachment_fields, actions=actions, actions_entities=actions_entities, actions_display=actions_display, actions_limit=actions_limit, action_fields=action_fields, action_member_creator_fields=action_member_creator_fields, members=members, member_fields=member_fields, check_item_states=check_item_states, check_item_state_fields=check_item_state_fields, labels=labels, checklists=checklists, checklist_fields=checklist_fields, fields=fields)

getBoardsCardsByIdBoardByIdCard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    id_card = 'id_card_example' # str | idCard
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    attachments = 'attachments_example' # str | A boolean value or &quot;cover&quot; for only card cover attachments (optional)
    attachment_fields = 'all' # str | all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url (optional) (default to 'all')
    actions = 'actions_example' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional)
    actions_entities = 'actions_entities_example' # str |  true or false (optional)
    actions_display = 'actions_display_example' # str |  true or false (optional)
    actions_limit = '50' # str | a number from 0 to 1000 (optional) (default to '50')
    action_fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator or type (optional) (default to 'all')
    action_member_creator_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    members = 'members_example' # str |  true or false (optional)
    member_fields = 'avatarHash, initials, fullName and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, initials, fullName and username')
    check_item_states = 'check_item_states_example' # str |  true or false (optional)
    check_item_state_fields = 'all' # str | all or a comma-separated list of: idCheckItem or state (optional) (default to 'all')
    labels = 'labels_example' # str |  true or false (optional)
    checklists = 'none' # str | One of: all or none (optional) (default to 'none')
    checklist_fields = 'all' # str | all or a comma-separated list of: idBoard, idCard, name or pos (optional) (default to 'all')
    fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')

    try:
        # getBoardsCardsByIdBoardByIdCard()
        api_instance.get_boards_cards_by_id_board_by_id_card(id_board, id_card, key, token, attachments=attachments, attachment_fields=attachment_fields, actions=actions, actions_entities=actions_entities, actions_display=actions_display, actions_limit=actions_limit, action_fields=action_fields, action_member_creator_fields=action_member_creator_fields, members=members, member_fields=member_fields, check_item_states=check_item_states, check_item_state_fields=check_item_state_fields, labels=labels, checklists=checklists, checklist_fields=checklist_fields, fields=fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_cards_by_id_board_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **id_card** | **str**| idCard | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **attachments** | **str**| A boolean value or &amp;quot;cover&amp;quot; for only card cover attachments | [optional] 
 **attachment_fields** | **str**| all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url | [optional] [default to &#39;all&#39;]
 **actions** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] 
 **actions_entities** | **str**|  true or false | [optional] 
 **actions_display** | **str**|  true or false | [optional] 
 **actions_limit** | **str**| a number from 0 to 1000 | [optional] [default to &#39;50&#39;]
 **action_fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator or type | [optional] [default to &#39;all&#39;]
 **action_member_creator_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **members** | **str**|  true or false | [optional] 
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, initials, fullName and username&#39;]
 **check_item_states** | **str**|  true or false | [optional] 
 **check_item_state_fields** | **str**| all or a comma-separated list of: idCheckItem or state | [optional] [default to &#39;all&#39;]
 **labels** | **str**|  true or false | [optional] 
 **checklists** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **checklist_fields** | **str**| all or a comma-separated list of: idBoard, idCard, name or pos | [optional] [default to &#39;all&#39;]
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

# **get_boards_checklists_by_id_board**
> get_boards_checklists_by_id_board(id_board, key, token, cards=cards, card_fields=card_fields, check_items=check_items, check_item_fields=check_item_fields, filter=filter, fields=fields)

getBoardsChecklistsByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards = 'none' # str | One of: all, closed, none, open or visible (optional) (default to 'none')
    card_fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')
    check_items = 'all' # str | One of: all or none (optional) (default to 'all')
    check_item_fields = 'name, nameData, pos and state' # str | all or a comma-separated list of: name, nameData, pos, state or type (optional) (default to 'name, nameData, pos and state')
    filter = 'all' # str | One of: all or none (optional) (default to 'all')
    fields = 'all' # str | all or a comma-separated list of: idBoard, idCard, name or pos (optional) (default to 'all')

    try:
        # getBoardsChecklistsByIdBoard()
        api_instance.get_boards_checklists_by_id_board(id_board, key, token, cards=cards, card_fields=card_fields, check_items=check_items, check_item_fields=check_item_fields, filter=filter, fields=fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_checklists_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards** | **str**| One of: all, closed, none, open or visible | [optional] [default to &#39;none&#39;]
 **card_fields** | **str**| all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url | [optional] [default to &#39;all&#39;]
 **check_items** | **str**| One of: all or none | [optional] [default to &#39;all&#39;]
 **check_item_fields** | **str**| all or a comma-separated list of: name, nameData, pos, state or type | [optional] [default to &#39;name, nameData, pos and state&#39;]
 **filter** | **str**| One of: all or none | [optional] [default to &#39;all&#39;]
 **fields** | **str**| all or a comma-separated list of: idBoard, idCard, name or pos | [optional] [default to &#39;all&#39;]

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

# **get_boards_deltas_by_id_board**
> get_boards_deltas_by_id_board(id_board, tags, ix_last_update, key, token)

getBoardsDeltasByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    tags = 'tags_example' # str | A valid tag for subscribing
    ix_last_update = 'ix_last_update_example' # str | a number from -1 to Infinity
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getBoardsDeltasByIdBoard()
        api_instance.get_boards_deltas_by_id_board(id_board, tags, ix_last_update, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_deltas_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **tags** | **str**| A valid tag for subscribing | 
 **ix_last_update** | **str**| a number from -1 to Infinity | 
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

# **get_boards_labels_by_id_board**
> get_boards_labels_by_id_board(id_board, key, token, fields=fields, limit=limit)

getBoardsLabelsByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: color, idBoard, name or uses (optional) (default to 'all')
    limit = '50' # str | a number from 0 to 1000 (optional) (default to '50')

    try:
        # getBoardsLabelsByIdBoard()
        api_instance.get_boards_labels_by_id_board(id_board, key, token, fields=fields, limit=limit)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_labels_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: color, idBoard, name or uses | [optional] [default to &#39;all&#39;]
 **limit** | **str**| a number from 0 to 1000 | [optional] [default to &#39;50&#39;]

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

# **get_boards_labels_by_id_board_by_id_label**
> get_boards_labels_by_id_board_by_id_label(id_board, id_label, key, token, fields=fields)

getBoardsLabelsByIdBoardByIdLabel()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    id_label = 'id_label_example' # str | idLabel
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: color, idBoard, name or uses (optional) (default to 'all')

    try:
        # getBoardsLabelsByIdBoardByIdLabel()
        api_instance.get_boards_labels_by_id_board_by_id_label(id_board, id_label, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_labels_by_id_board_by_id_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **id_label** | **str**| idLabel | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: color, idBoard, name or uses | [optional] [default to &#39;all&#39;]

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

# **get_boards_lists_by_id_board**
> get_boards_lists_by_id_board(id_board, key, token, cards=cards, card_fields=card_fields, filter=filter, fields=fields)

getBoardsListsByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards = 'none' # str | One of: all, closed, none, open or visible (optional) (default to 'none')
    card_fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')
    filter = 'open' # str | One of: all, closed, none or open (optional) (default to 'open')
    fields = 'all' # str | all or a comma-separated list of: closed, idBoard, name, pos or subscribed (optional) (default to 'all')

    try:
        # getBoardsListsByIdBoard()
        api_instance.get_boards_lists_by_id_board(id_board, key, token, cards=cards, card_fields=card_fields, filter=filter, fields=fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_lists_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards** | **str**| One of: all, closed, none, open or visible | [optional] [default to &#39;none&#39;]
 **card_fields** | **str**| all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url | [optional] [default to &#39;all&#39;]
 **filter** | **str**| One of: all, closed, none or open | [optional] [default to &#39;open&#39;]
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

# **get_boards_lists_by_id_board_by_filter**
> get_boards_lists_by_id_board_by_filter(id_board, filter, key, token)

getBoardsListsByIdBoardByFilter()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    filter = 'filter_example' # str | filter
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getBoardsListsByIdBoardByFilter()
        api_instance.get_boards_lists_by_id_board_by_filter(id_board, filter, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_lists_by_id_board_by_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **filter** | **str**| filter | 
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

# **get_boards_members_by_id_board**
> get_boards_members_by_id_board(id_board, key, token, filter=filter, fields=fields, activity=activity)

getBoardsMembersByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'all' # str | One of: admins, all, none, normal or owners (optional) (default to 'all')
    fields = 'fullName and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'fullName and username')
    activity = 'activity_example' # str | true or false ; works for premium organizations only. (optional)

    try:
        # getBoardsMembersByIdBoard()
        api_instance.get_boards_members_by_id_board(id_board, key, token, filter=filter, fields=fields, activity=activity)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_members_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| One of: admins, all, none, normal or owners | [optional] [default to &#39;all&#39;]
 **fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;fullName and username&#39;]
 **activity** | **str**| true or false ; works for premium organizations only. | [optional] 

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

# **get_boards_members_by_id_board_by_filter**
> get_boards_members_by_id_board_by_filter(id_board, filter, key, token)

getBoardsMembersByIdBoardByFilter()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    filter = 'filter_example' # str | filter
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getBoardsMembersByIdBoardByFilter()
        api_instance.get_boards_members_by_id_board_by_filter(id_board, filter, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_members_by_id_board_by_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **filter** | **str**| filter | 
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

# **get_boards_members_cards_by_id_board_by_id_member**
> get_boards_members_cards_by_id_board_by_id_member(id_board, id_member, key, token, actions=actions, attachments=attachments, attachment_fields=attachment_fields, members=members, member_fields=member_fields, check_item_states=check_item_states, checklists=checklists, board=board, board_fields=board_fields, list=list, list_fields=list_fields, filter=filter, fields=fields)

getBoardsMembersCardsByIdBoardByIdMember()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    id_member = 'id_member_example' # str | idMember
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    actions = 'actions_example' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional)
    attachments = 'attachments_example' # str | A boolean value or &quot;cover&quot; for only card cover attachments (optional)
    attachment_fields = 'all' # str | all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url (optional) (default to 'all')
    members = 'members_example' # str |  true or false (optional)
    member_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    check_item_states = 'check_item_states_example' # str |  true or false (optional)
    checklists = 'none' # str | One of: all or none (optional) (default to 'none')
    board = 'board_example' # str |  true or false (optional)
    board_fields = 'name, desc, closed, idOrganization, pinned, url and prefs' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'name, desc, closed, idOrganization, pinned, url and prefs')
    list = 'list_example' # str |  true or false (optional)
    list_fields = 'all' # str | all or a comma-separated list of: closed, idBoard, name, pos or subscribed (optional) (default to 'all')
    filter = 'visible' # str | One of: all, closed, none, open or visible (optional) (default to 'visible')
    fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')

    try:
        # getBoardsMembersCardsByIdBoardByIdMember()
        api_instance.get_boards_members_cards_by_id_board_by_id_member(id_board, id_member, key, token, actions=actions, attachments=attachments, attachment_fields=attachment_fields, members=members, member_fields=member_fields, check_item_states=check_item_states, checklists=checklists, board=board, board_fields=board_fields, list=list, list_fields=list_fields, filter=filter, fields=fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_members_cards_by_id_board_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **id_member** | **str**| idMember | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **actions** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] 
 **attachments** | **str**| A boolean value or &amp;quot;cover&amp;quot; for only card cover attachments | [optional] 
 **attachment_fields** | **str**| all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url | [optional] [default to &#39;all&#39;]
 **members** | **str**|  true or false | [optional] 
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **check_item_states** | **str**|  true or false | [optional] 
 **checklists** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **board** | **str**|  true or false | [optional] 
 **board_fields** | **str**| all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url | [optional] [default to &#39;name, desc, closed, idOrganization, pinned, url and prefs&#39;]
 **list** | **str**|  true or false | [optional] 
 **list_fields** | **str**| all or a comma-separated list of: closed, idBoard, name, pos or subscribed | [optional] [default to &#39;all&#39;]
 **filter** | **str**| One of: all, closed, none, open or visible | [optional] [default to &#39;visible&#39;]
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

# **get_boards_members_invited_by_id_board**
> get_boards_members_invited_by_id_board(id_board, key, token, fields=fields)

getBoardsMembersInvitedByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username (optional) (default to 'all')

    try:
        # getBoardsMembersInvitedByIdBoard()
        api_instance.get_boards_members_invited_by_id_board(id_board, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_members_invited_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
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

# **get_boards_members_invited_by_id_board_by_field**
> get_boards_members_invited_by_id_board_by_field(id_board, var_field, key, token)

getBoardsMembersInvitedByIdBoardByField()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getBoardsMembersInvitedByIdBoardByField()
        api_instance.get_boards_members_invited_by_id_board_by_field(id_board, var_field, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_members_invited_by_id_board_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
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

# **get_boards_memberships_by_id_board**
> get_boards_memberships_by_id_board(id_board, key, token, filter=filter, member=member, member_fields=member_fields)

getBoardsMembershipsByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'all' # str | all or a comma-separated list of: active, admin, deactivated, me or normal (optional) (default to 'all')
    member = 'member_example' # str |  true or false (optional)
    member_fields = 'fullName and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'fullName and username')

    try:
        # getBoardsMembershipsByIdBoard()
        api_instance.get_boards_memberships_by_id_board(id_board, key, token, filter=filter, member=member, member_fields=member_fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_memberships_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| all or a comma-separated list of: active, admin, deactivated, me or normal | [optional] [default to &#39;all&#39;]
 **member** | **str**|  true or false | [optional] 
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;fullName and username&#39;]

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

# **get_boards_memberships_by_id_board_by_id_membership**
> get_boards_memberships_by_id_board_by_id_membership(id_board, id_membership, key, token, member=member, member_fields=member_fields)

getBoardsMembershipsByIdBoardByIdMembership()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    id_membership = 'id_membership_example' # str | idMembership
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    member = 'member_example' # str |  true or false (optional)
    member_fields = 'fullName and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'fullName and username')

    try:
        # getBoardsMembershipsByIdBoardByIdMembership()
        api_instance.get_boards_memberships_by_id_board_by_id_membership(id_board, id_membership, key, token, member=member, member_fields=member_fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_memberships_by_id_board_by_id_membership: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **id_membership** | **str**| idMembership | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **member** | **str**|  true or false | [optional] 
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;fullName and username&#39;]

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

# **get_boards_my_prefs_by_id_board**
> get_boards_my_prefs_by_id_board(id_board, key, token)

getBoardsMyPrefsByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getBoardsMyPrefsByIdBoard()
        api_instance.get_boards_my_prefs_by_id_board(id_board, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_my_prefs_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
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

# **get_boards_organization_by_id_board**
> get_boards_organization_by_id_board(id_board, key, token, fields=fields)

getBoardsOrganizationByIdBoard()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'all')

    try:
        # getBoardsOrganizationByIdBoard()
        api_instance.get_boards_organization_by_id_board(id_board, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_organization_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
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

# **get_boards_organization_by_id_board_by_field**
> get_boards_organization_by_id_board_by_field(id_board, var_field, key, token)

getBoardsOrganizationByIdBoardByField()

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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getBoardsOrganizationByIdBoardByField()
        api_instance.get_boards_organization_by_id_board_by_field(id_board, var_field, key, token)
    except Exception as e:
        print("Exception when calling BoardApi->get_boards_organization_by_id_board_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
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

# **update_boards_by_id_board**
> update_boards_by_id_board(id_board, key, token, boards)

updateBoardsByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards import Boards
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards = openapi_client.Boards() # Boards | Attributes of \"Boards\" to be updated.

    try:
        # updateBoardsByIdBoard()
        api_instance.update_boards_by_id_board(id_board, key, token, boards)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards** | [**Boards**](Boards.md)| Attributes of \&quot;Boards\&quot; to be updated. | 

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

# **update_boards_closed_by_id_board**
> update_boards_closed_by_id_board(id_board, key, token, boards_closed)

updateBoardsClosedByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_closed import BoardsClosed
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_closed = openapi_client.BoardsClosed() # BoardsClosed | Attributes of \"Boards Closed\" to be updated.

    try:
        # updateBoardsClosedByIdBoard()
        api_instance.update_boards_closed_by_id_board(id_board, key, token, boards_closed)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_closed_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_closed** | [**BoardsClosed**](BoardsClosed.md)| Attributes of \&quot;Boards Closed\&quot; to be updated. | 

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

# **update_boards_desc_by_id_board**
> update_boards_desc_by_id_board(id_board, key, token, boards_desc)

updateBoardsDescByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_desc import BoardsDesc
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_desc = openapi_client.BoardsDesc() # BoardsDesc | Attributes of \"Boards Desc\" to be updated.

    try:
        # updateBoardsDescByIdBoard()
        api_instance.update_boards_desc_by_id_board(id_board, key, token, boards_desc)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_desc_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_desc** | [**BoardsDesc**](BoardsDesc.md)| Attributes of \&quot;Boards Desc\&quot; to be updated. | 

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

# **update_boards_id_organization_by_id_board**
> update_boards_id_organization_by_id_board(id_board, key, token, boards_id_organization)

updateBoardsIdOrganizationByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_id_organization import BoardsIdOrganization
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_id_organization = openapi_client.BoardsIdOrganization() # BoardsIdOrganization | Attributes of \"Boards Id Organization\" to be updated.

    try:
        # updateBoardsIdOrganizationByIdBoard()
        api_instance.update_boards_id_organization_by_id_board(id_board, key, token, boards_id_organization)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_id_organization_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_id_organization** | [**BoardsIdOrganization**](BoardsIdOrganization.md)| Attributes of \&quot;Boards Id Organization\&quot; to be updated. | 

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

# **update_boards_label_names_blue_by_id_board**
> update_boards_label_names_blue_by_id_board(id_board, key, token, label_names_blue)

updateBoardsLabelNamesBlueByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.label_names_blue import LabelNamesBlue
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    label_names_blue = openapi_client.LabelNamesBlue() # LabelNamesBlue | Attributes of \"Label Names Blue\" to be updated.

    try:
        # updateBoardsLabelNamesBlueByIdBoard()
        api_instance.update_boards_label_names_blue_by_id_board(id_board, key, token, label_names_blue)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_label_names_blue_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **label_names_blue** | [**LabelNamesBlue**](LabelNamesBlue.md)| Attributes of \&quot;Label Names Blue\&quot; to be updated. | 

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

# **update_boards_label_names_green_by_id_board**
> update_boards_label_names_green_by_id_board(id_board, key, token, label_names_green)

updateBoardsLabelNamesGreenByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.label_names_green import LabelNamesGreen
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    label_names_green = openapi_client.LabelNamesGreen() # LabelNamesGreen | Attributes of \"Label Names Green\" to be updated.

    try:
        # updateBoardsLabelNamesGreenByIdBoard()
        api_instance.update_boards_label_names_green_by_id_board(id_board, key, token, label_names_green)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_label_names_green_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **label_names_green** | [**LabelNamesGreen**](LabelNamesGreen.md)| Attributes of \&quot;Label Names Green\&quot; to be updated. | 

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

# **update_boards_label_names_orange_by_id_board**
> update_boards_label_names_orange_by_id_board(id_board, key, token, label_names_orange)

updateBoardsLabelNamesOrangeByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.label_names_orange import LabelNamesOrange
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    label_names_orange = openapi_client.LabelNamesOrange() # LabelNamesOrange | Attributes of \"Label Names Orange\" to be updated.

    try:
        # updateBoardsLabelNamesOrangeByIdBoard()
        api_instance.update_boards_label_names_orange_by_id_board(id_board, key, token, label_names_orange)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_label_names_orange_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **label_names_orange** | [**LabelNamesOrange**](LabelNamesOrange.md)| Attributes of \&quot;Label Names Orange\&quot; to be updated. | 

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

# **update_boards_label_names_purple_by_id_board**
> update_boards_label_names_purple_by_id_board(id_board, key, token, label_names_purple)

updateBoardsLabelNamesPurpleByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.label_names_purple import LabelNamesPurple
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    label_names_purple = openapi_client.LabelNamesPurple() # LabelNamesPurple | Attributes of \"Label Names Purple\" to be updated.

    try:
        # updateBoardsLabelNamesPurpleByIdBoard()
        api_instance.update_boards_label_names_purple_by_id_board(id_board, key, token, label_names_purple)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_label_names_purple_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **label_names_purple** | [**LabelNamesPurple**](LabelNamesPurple.md)| Attributes of \&quot;Label Names Purple\&quot; to be updated. | 

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

# **update_boards_label_names_red_by_id_board**
> update_boards_label_names_red_by_id_board(id_board, key, token, label_names_red)

updateBoardsLabelNamesRedByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.label_names_red import LabelNamesRed
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    label_names_red = openapi_client.LabelNamesRed() # LabelNamesRed | Attributes of \"Label Names Red\" to be updated.

    try:
        # updateBoardsLabelNamesRedByIdBoard()
        api_instance.update_boards_label_names_red_by_id_board(id_board, key, token, label_names_red)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_label_names_red_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **label_names_red** | [**LabelNamesRed**](LabelNamesRed.md)| Attributes of \&quot;Label Names Red\&quot; to be updated. | 

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

# **update_boards_label_names_yellow_by_id_board**
> update_boards_label_names_yellow_by_id_board(id_board, key, token, label_names_yellow)

updateBoardsLabelNamesYellowByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.label_names_yellow import LabelNamesYellow
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    label_names_yellow = openapi_client.LabelNamesYellow() # LabelNamesYellow | Attributes of \"Label Names Yellow\" to be updated.

    try:
        # updateBoardsLabelNamesYellowByIdBoard()
        api_instance.update_boards_label_names_yellow_by_id_board(id_board, key, token, label_names_yellow)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_label_names_yellow_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **label_names_yellow** | [**LabelNamesYellow**](LabelNamesYellow.md)| Attributes of \&quot;Label Names Yellow\&quot; to be updated. | 

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

# **update_boards_members_by_id_board**
> update_boards_members_by_id_board(id_board, key, token, boards_members)

updateBoardsMembersByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_members import BoardsMembers
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_members = openapi_client.BoardsMembers() # BoardsMembers | Attributes of \"Boards Members\" to be updated.

    try:
        # updateBoardsMembersByIdBoard()
        api_instance.update_boards_members_by_id_board(id_board, key, token, boards_members)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_members_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_members** | [**BoardsMembers**](BoardsMembers.md)| Attributes of \&quot;Boards Members\&quot; to be updated. | 

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

# **update_boards_members_by_id_board_by_id_member**
> update_boards_members_by_id_board_by_id_member(id_board, id_member, key, token, boards_members)

updateBoardsMembersByIdBoardByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_members import BoardsMembers
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    id_member = 'id_member_example' # str | idMember
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_members = openapi_client.BoardsMembers() # BoardsMembers | Attributes of \"Boards Members\" to be updated.

    try:
        # updateBoardsMembersByIdBoardByIdMember()
        api_instance.update_boards_members_by_id_board_by_id_member(id_board, id_member, key, token, boards_members)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_members_by_id_board_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **id_member** | **str**| idMember | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_members** | [**BoardsMembers**](BoardsMembers.md)| Attributes of \&quot;Boards Members\&quot; to be updated. | 

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

# **update_boards_memberships_by_id_board_by_id_membership**
> update_boards_memberships_by_id_board_by_id_membership(id_board, id_membership, key, token, boards_memberships)

updateBoardsMembershipsByIdBoardByIdMembership()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_memberships import BoardsMemberships
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    id_membership = 'id_membership_example' # str | idMembership
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_memberships = openapi_client.BoardsMemberships() # BoardsMemberships | Attributes of \"Boards Memberships\" to be updated.

    try:
        # updateBoardsMembershipsByIdBoardByIdMembership()
        api_instance.update_boards_memberships_by_id_board_by_id_membership(id_board, id_membership, key, token, boards_memberships)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_memberships_by_id_board_by_id_membership: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **id_membership** | **str**| idMembership | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_memberships** | [**BoardsMemberships**](BoardsMemberships.md)| Attributes of \&quot;Boards Memberships\&quot; to be updated. | 

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

# **update_boards_my_prefs_email_position_by_id_board**
> update_boards_my_prefs_email_position_by_id_board(id_board, key, token, my_prefs_email_position)

updateBoardsMyPrefsEmailPositionByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.my_prefs_email_position import MyPrefsEmailPosition
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    my_prefs_email_position = openapi_client.MyPrefsEmailPosition() # MyPrefsEmailPosition | Attributes of \"My Prefs Email Position\" to be updated.

    try:
        # updateBoardsMyPrefsEmailPositionByIdBoard()
        api_instance.update_boards_my_prefs_email_position_by_id_board(id_board, key, token, my_prefs_email_position)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_my_prefs_email_position_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **my_prefs_email_position** | [**MyPrefsEmailPosition**](MyPrefsEmailPosition.md)| Attributes of \&quot;My Prefs Email Position\&quot; to be updated. | 

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

# **update_boards_my_prefs_id_email_list_by_id_board**
> update_boards_my_prefs_id_email_list_by_id_board(id_board, key, token, my_prefs_id_email_list)

updateBoardsMyPrefsIdEmailListByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.my_prefs_id_email_list import MyPrefsIdEmailList
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    my_prefs_id_email_list = openapi_client.MyPrefsIdEmailList() # MyPrefsIdEmailList | Attributes of \"My Prefs Id Email List\" to be updated.

    try:
        # updateBoardsMyPrefsIdEmailListByIdBoard()
        api_instance.update_boards_my_prefs_id_email_list_by_id_board(id_board, key, token, my_prefs_id_email_list)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_my_prefs_id_email_list_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **my_prefs_id_email_list** | [**MyPrefsIdEmailList**](MyPrefsIdEmailList.md)| Attributes of \&quot;My Prefs Id Email List\&quot; to be updated. | 

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

# **update_boards_my_prefs_show_list_guide_by_id_board**
> update_boards_my_prefs_show_list_guide_by_id_board(id_board, key, token, my_prefs_show_list_guide)

updateBoardsMyPrefsShowListGuideByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.my_prefs_show_list_guide import MyPrefsShowListGuide
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    my_prefs_show_list_guide = openapi_client.MyPrefsShowListGuide() # MyPrefsShowListGuide | Attributes of \"My Prefs Show List Guide\" to be updated.

    try:
        # updateBoardsMyPrefsShowListGuideByIdBoard()
        api_instance.update_boards_my_prefs_show_list_guide_by_id_board(id_board, key, token, my_prefs_show_list_guide)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_my_prefs_show_list_guide_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **my_prefs_show_list_guide** | [**MyPrefsShowListGuide**](MyPrefsShowListGuide.md)| Attributes of \&quot;My Prefs Show List Guide\&quot; to be updated. | 

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

# **update_boards_my_prefs_show_sidebar_activity_by_id_board**
> update_boards_my_prefs_show_sidebar_activity_by_id_board(id_board, key, token, my_prefs_show_sidebar_activity)

updateBoardsMyPrefsShowSidebarActivityByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.my_prefs_show_sidebar_activity import MyPrefsShowSidebarActivity
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    my_prefs_show_sidebar_activity = openapi_client.MyPrefsShowSidebarActivity() # MyPrefsShowSidebarActivity | Attributes of \"My Prefs Show Sidebar Activity\" to be updated.

    try:
        # updateBoardsMyPrefsShowSidebarActivityByIdBoard()
        api_instance.update_boards_my_prefs_show_sidebar_activity_by_id_board(id_board, key, token, my_prefs_show_sidebar_activity)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_my_prefs_show_sidebar_activity_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **my_prefs_show_sidebar_activity** | [**MyPrefsShowSidebarActivity**](MyPrefsShowSidebarActivity.md)| Attributes of \&quot;My Prefs Show Sidebar Activity\&quot; to be updated. | 

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

# **update_boards_my_prefs_show_sidebar_board_actions_by_id_board**
> update_boards_my_prefs_show_sidebar_board_actions_by_id_board(id_board, key, token, my_prefs_show_sidebar_board_actions)

updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.my_prefs_show_sidebar_board_actions import MyPrefsShowSidebarBoardActions
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    my_prefs_show_sidebar_board_actions = openapi_client.MyPrefsShowSidebarBoardActions() # MyPrefsShowSidebarBoardActions | Attributes of \"My Prefs Show Sidebar Board Actions\" to be updated.

    try:
        # updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()
        api_instance.update_boards_my_prefs_show_sidebar_board_actions_by_id_board(id_board, key, token, my_prefs_show_sidebar_board_actions)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_my_prefs_show_sidebar_board_actions_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **my_prefs_show_sidebar_board_actions** | [**MyPrefsShowSidebarBoardActions**](MyPrefsShowSidebarBoardActions.md)| Attributes of \&quot;My Prefs Show Sidebar Board Actions\&quot; to be updated. | 

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

# **update_boards_my_prefs_show_sidebar_by_id_board**
> update_boards_my_prefs_show_sidebar_by_id_board(id_board, key, token, my_prefs_show_sidebar)

updateBoardsMyPrefsShowSidebarByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.my_prefs_show_sidebar import MyPrefsShowSidebar
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    my_prefs_show_sidebar = openapi_client.MyPrefsShowSidebar() # MyPrefsShowSidebar | Attributes of \"My Prefs Show Sidebar\" to be updated.

    try:
        # updateBoardsMyPrefsShowSidebarByIdBoard()
        api_instance.update_boards_my_prefs_show_sidebar_by_id_board(id_board, key, token, my_prefs_show_sidebar)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_my_prefs_show_sidebar_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **my_prefs_show_sidebar** | [**MyPrefsShowSidebar**](MyPrefsShowSidebar.md)| Attributes of \&quot;My Prefs Show Sidebar\&quot; to be updated. | 

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

# **update_boards_my_prefs_show_sidebar_members_by_id_board**
> update_boards_my_prefs_show_sidebar_members_by_id_board(id_board, key, token, my_prefs_show_sidebar_members)

updateBoardsMyPrefsShowSidebarMembersByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.my_prefs_show_sidebar_members import MyPrefsShowSidebarMembers
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    my_prefs_show_sidebar_members = openapi_client.MyPrefsShowSidebarMembers() # MyPrefsShowSidebarMembers | Attributes of \"My Prefs Show Sidebar Members\" to be updated.

    try:
        # updateBoardsMyPrefsShowSidebarMembersByIdBoard()
        api_instance.update_boards_my_prefs_show_sidebar_members_by_id_board(id_board, key, token, my_prefs_show_sidebar_members)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_my_prefs_show_sidebar_members_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **my_prefs_show_sidebar_members** | [**MyPrefsShowSidebarMembers**](MyPrefsShowSidebarMembers.md)| Attributes of \&quot;My Prefs Show Sidebar Members\&quot; to be updated. | 

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

# **update_boards_name_by_id_board**
> update_boards_name_by_id_board(id_board, key, token, boards_name)

updateBoardsNameByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_name import BoardsName
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_name = openapi_client.BoardsName() # BoardsName | Attributes of \"Boards Name\" to be updated.

    try:
        # updateBoardsNameByIdBoard()
        api_instance.update_boards_name_by_id_board(id_board, key, token, boards_name)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_name_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_name** | [**BoardsName**](BoardsName.md)| Attributes of \&quot;Boards Name\&quot; to be updated. | 

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

# **update_boards_prefs_background_by_id_board**
> update_boards_prefs_background_by_id_board(id_board, key, token, prefs_background)

updateBoardsPrefsBackgroundByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_background import PrefsBackground
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_background = openapi_client.PrefsBackground() # PrefsBackground | Attributes of \"Prefs Background\" to be updated.

    try:
        # updateBoardsPrefsBackgroundByIdBoard()
        api_instance.update_boards_prefs_background_by_id_board(id_board, key, token, prefs_background)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_prefs_background_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_background** | [**PrefsBackground**](PrefsBackground.md)| Attributes of \&quot;Prefs Background\&quot; to be updated. | 

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

# **update_boards_prefs_calendar_feed_enabled_by_id_board**
> update_boards_prefs_calendar_feed_enabled_by_id_board(id_board, key, token, prefs_calendar_feed_enabled)

updateBoardsPrefsCalendarFeedEnabledByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_calendar_feed_enabled import PrefsCalendarFeedEnabled
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_calendar_feed_enabled = openapi_client.PrefsCalendarFeedEnabled() # PrefsCalendarFeedEnabled | Attributes of \"Prefs Calendar Feed Enabled\" to be updated.

    try:
        # updateBoardsPrefsCalendarFeedEnabledByIdBoard()
        api_instance.update_boards_prefs_calendar_feed_enabled_by_id_board(id_board, key, token, prefs_calendar_feed_enabled)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_prefs_calendar_feed_enabled_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_calendar_feed_enabled** | [**PrefsCalendarFeedEnabled**](PrefsCalendarFeedEnabled.md)| Attributes of \&quot;Prefs Calendar Feed Enabled\&quot; to be updated. | 

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

# **update_boards_prefs_card_aging_by_id_board**
> update_boards_prefs_card_aging_by_id_board(id_board, key, token, prefs_card_aging)

updateBoardsPrefsCardAgingByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_card_aging import PrefsCardAging
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_card_aging = openapi_client.PrefsCardAging() # PrefsCardAging | Attributes of \"Prefs Card Aging\" to be updated.

    try:
        # updateBoardsPrefsCardAgingByIdBoard()
        api_instance.update_boards_prefs_card_aging_by_id_board(id_board, key, token, prefs_card_aging)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_prefs_card_aging_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_card_aging** | [**PrefsCardAging**](PrefsCardAging.md)| Attributes of \&quot;Prefs Card Aging\&quot; to be updated. | 

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

# **update_boards_prefs_card_covers_by_id_board**
> update_boards_prefs_card_covers_by_id_board(id_board, key, token, prefs_card_covers)

updateBoardsPrefsCardCoversByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_card_covers import PrefsCardCovers
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_card_covers = openapi_client.PrefsCardCovers() # PrefsCardCovers | Attributes of \"Prefs Card Covers\" to be updated.

    try:
        # updateBoardsPrefsCardCoversByIdBoard()
        api_instance.update_boards_prefs_card_covers_by_id_board(id_board, key, token, prefs_card_covers)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_prefs_card_covers_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_card_covers** | [**PrefsCardCovers**](PrefsCardCovers.md)| Attributes of \&quot;Prefs Card Covers\&quot; to be updated. | 

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

# **update_boards_prefs_comments_by_id_board**
> update_boards_prefs_comments_by_id_board(id_board, key, token, prefs_comments)

updateBoardsPrefsCommentsByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_comments import PrefsComments
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_comments = openapi_client.PrefsComments() # PrefsComments | Attributes of \"Prefs Comments\" to be updated.

    try:
        # updateBoardsPrefsCommentsByIdBoard()
        api_instance.update_boards_prefs_comments_by_id_board(id_board, key, token, prefs_comments)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_prefs_comments_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_comments** | [**PrefsComments**](PrefsComments.md)| Attributes of \&quot;Prefs Comments\&quot; to be updated. | 

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

# **update_boards_prefs_invitations_by_id_board**
> update_boards_prefs_invitations_by_id_board(id_board, key, token, prefs_invitations)

updateBoardsPrefsInvitationsByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_invitations import PrefsInvitations
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_invitations = openapi_client.PrefsInvitations() # PrefsInvitations | Attributes of \"Prefs Invitations\" to be updated.

    try:
        # updateBoardsPrefsInvitationsByIdBoard()
        api_instance.update_boards_prefs_invitations_by_id_board(id_board, key, token, prefs_invitations)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_prefs_invitations_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_invitations** | [**PrefsInvitations**](PrefsInvitations.md)| Attributes of \&quot;Prefs Invitations\&quot; to be updated. | 

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

# **update_boards_prefs_permission_level_by_id_board**
> update_boards_prefs_permission_level_by_id_board(id_board, key, token, prefs_permission_level)

updateBoardsPrefsPermissionLevelByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_permission_level import PrefsPermissionLevel
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_permission_level = openapi_client.PrefsPermissionLevel() # PrefsPermissionLevel | Attributes of \"Prefs Permission Level\" to be updated.

    try:
        # updateBoardsPrefsPermissionLevelByIdBoard()
        api_instance.update_boards_prefs_permission_level_by_id_board(id_board, key, token, prefs_permission_level)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_prefs_permission_level_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_permission_level** | [**PrefsPermissionLevel**](PrefsPermissionLevel.md)| Attributes of \&quot;Prefs Permission Level\&quot; to be updated. | 

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

# **update_boards_prefs_self_join_by_id_board**
> update_boards_prefs_self_join_by_id_board(id_board, key, token, prefs_self_join)

updateBoardsPrefsSelfJoinByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_self_join import PrefsSelfJoin
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_self_join = openapi_client.PrefsSelfJoin() # PrefsSelfJoin | Attributes of \"Prefs Self Join\" to be updated.

    try:
        # updateBoardsPrefsSelfJoinByIdBoard()
        api_instance.update_boards_prefs_self_join_by_id_board(id_board, key, token, prefs_self_join)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_prefs_self_join_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_self_join** | [**PrefsSelfJoin**](PrefsSelfJoin.md)| Attributes of \&quot;Prefs Self Join\&quot; to be updated. | 

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

# **update_boards_prefs_voting_by_id_board**
> update_boards_prefs_voting_by_id_board(id_board, key, token, prefs_voting)

updateBoardsPrefsVotingByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_voting import PrefsVoting
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_voting = openapi_client.PrefsVoting() # PrefsVoting | Attributes of \"Prefs Voting\" to be updated.

    try:
        # updateBoardsPrefsVotingByIdBoard()
        api_instance.update_boards_prefs_voting_by_id_board(id_board, key, token, prefs_voting)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_prefs_voting_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_voting** | [**PrefsVoting**](PrefsVoting.md)| Attributes of \&quot;Prefs Voting\&quot; to be updated. | 

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

# **update_boards_subscribed_by_id_board**
> update_boards_subscribed_by_id_board(id_board, key, token, boards_subscribed)

updateBoardsSubscribedByIdBoard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.boards_subscribed import BoardsSubscribed
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
    api_instance = openapi_client.BoardApi(api_client)
    id_board = 'id_board_example' # str | board_id
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    boards_subscribed = openapi_client.BoardsSubscribed() # BoardsSubscribed | Attributes of \"Boards Subscribed\" to be updated.

    try:
        # updateBoardsSubscribedByIdBoard()
        api_instance.update_boards_subscribed_by_id_board(id_board, key, token, boards_subscribed)
    except Exception as e:
        print("Exception when calling BoardApi->update_boards_subscribed_by_id_board: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_board** | **str**| board_id | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **boards_subscribed** | [**BoardsSubscribed**](BoardsSubscribed.md)| Attributes of \&quot;Boards Subscribed\&quot; to be updated. | 

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

