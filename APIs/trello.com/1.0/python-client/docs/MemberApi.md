# openapi_client.MemberApi

All URIs are relative to *https://trello.com/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_members_avatar_by_id_member**](MemberApi.md#add_members_avatar_by_id_member) | **POST** /members/{idMember}/avatar | addMembersAvatarByIdMember()
[**add_members_board_backgrounds_by_id_member**](MemberApi.md#add_members_board_backgrounds_by_id_member) | **POST** /members/{idMember}/boardBackgrounds | addMembersBoardBackgroundsByIdMember()
[**add_members_board_stars_by_id_member**](MemberApi.md#add_members_board_stars_by_id_member) | **POST** /members/{idMember}/boardStars | addMembersBoardStarsByIdMember()
[**add_members_custom_board_backgrounds_by_id_member**](MemberApi.md#add_members_custom_board_backgrounds_by_id_member) | **POST** /members/{idMember}/customBoardBackgrounds | addMembersCustomBoardBackgroundsByIdMember()
[**add_members_custom_emoji_by_id_member**](MemberApi.md#add_members_custom_emoji_by_id_member) | **POST** /members/{idMember}/customEmoji | addMembersCustomEmojiByIdMember()
[**add_members_custom_stickers_by_id_member**](MemberApi.md#add_members_custom_stickers_by_id_member) | **POST** /members/{idMember}/customStickers | addMembersCustomStickersByIdMember()
[**add_members_one_time_messages_dismissed_by_id_member**](MemberApi.md#add_members_one_time_messages_dismissed_by_id_member) | **POST** /members/{idMember}/oneTimeMessagesDismissed | addMembersOneTimeMessagesDismissedByIdMember()
[**add_members_saved_searches_by_id_member**](MemberApi.md#add_members_saved_searches_by_id_member) | **POST** /members/{idMember}/savedSearches | addMembersSavedSearchesByIdMember()
[**delete_members_board_backgrounds_by_id_member_by_id_board_background**](MemberApi.md#delete_members_board_backgrounds_by_id_member_by_id_board_background) | **DELETE** /members/{idMember}/boardBackgrounds/{idBoardBackground} | deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()
[**delete_members_board_stars_by_id_member_by_id_board_star**](MemberApi.md#delete_members_board_stars_by_id_member_by_id_board_star) | **DELETE** /members/{idMember}/boardStars/{idBoardStar} | deleteMembersBoardStarsByIdMemberByIdBoardStar()
[**delete_members_custom_board_backgrounds_by_id_member_by_id_board_background**](MemberApi.md#delete_members_custom_board_backgrounds_by_id_member_by_id_board_background) | **DELETE** /members/{idMember}/customBoardBackgrounds/{idBoardBackground} | deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()
[**delete_members_custom_stickers_by_id_member_by_id_custom_sticker**](MemberApi.md#delete_members_custom_stickers_by_id_member_by_id_custom_sticker) | **DELETE** /members/{idMember}/customStickers/{idCustomSticker} | deleteMembersCustomStickersByIdMemberByIdCustomSticker()
[**delete_members_saved_searches_by_id_member_by_id_saved_search**](MemberApi.md#delete_members_saved_searches_by_id_member_by_id_saved_search) | **DELETE** /members/{idMember}/savedSearches/{idSavedSearch} | deleteMembersSavedSearchesByIdMemberByIdSavedSearch()
[**get_members_actions_by_id_member**](MemberApi.md#get_members_actions_by_id_member) | **GET** /members/{idMember}/actions | getMembersActionsByIdMember()
[**get_members_board_backgrounds_by_id_member**](MemberApi.md#get_members_board_backgrounds_by_id_member) | **GET** /members/{idMember}/boardBackgrounds | getMembersBoardBackgroundsByIdMember()
[**get_members_board_backgrounds_by_id_member_by_id_board_background**](MemberApi.md#get_members_board_backgrounds_by_id_member_by_id_board_background) | **GET** /members/{idMember}/boardBackgrounds/{idBoardBackground} | getMembersBoardBackgroundsByIdMemberByIdBoardBackground()
[**get_members_board_stars_by_id_member**](MemberApi.md#get_members_board_stars_by_id_member) | **GET** /members/{idMember}/boardStars | getMembersBoardStarsByIdMember()
[**get_members_board_stars_by_id_member_by_id_board_star**](MemberApi.md#get_members_board_stars_by_id_member_by_id_board_star) | **GET** /members/{idMember}/boardStars/{idBoardStar} | getMembersBoardStarsByIdMemberByIdBoardStar()
[**get_members_boards_by_id_member**](MemberApi.md#get_members_boards_by_id_member) | **GET** /members/{idMember}/boards | getMembersBoardsByIdMember()
[**get_members_boards_by_id_member_by_filter**](MemberApi.md#get_members_boards_by_id_member_by_filter) | **GET** /members/{idMember}/boards/{filter} | getMembersBoardsByIdMemberByFilter()
[**get_members_boards_invited_by_id_member**](MemberApi.md#get_members_boards_invited_by_id_member) | **GET** /members/{idMember}/boardsInvited | getMembersBoardsInvitedByIdMember()
[**get_members_boards_invited_by_id_member_by_field**](MemberApi.md#get_members_boards_invited_by_id_member_by_field) | **GET** /members/{idMember}/boardsInvited/{field} | getMembersBoardsInvitedByIdMemberByField()
[**get_members_by_id_member**](MemberApi.md#get_members_by_id_member) | **GET** /members/{idMember} | getMembersByIdMember()
[**get_members_by_id_member_by_field**](MemberApi.md#get_members_by_id_member_by_field) | **GET** /members/{idMember}/{field} | getMembersByIdMemberByField()
[**get_members_cards_by_id_member**](MemberApi.md#get_members_cards_by_id_member) | **GET** /members/{idMember}/cards | getMembersCardsByIdMember()
[**get_members_cards_by_id_member_by_filter**](MemberApi.md#get_members_cards_by_id_member_by_filter) | **GET** /members/{idMember}/cards/{filter} | getMembersCardsByIdMemberByFilter()
[**get_members_custom_board_backgrounds_by_id_member**](MemberApi.md#get_members_custom_board_backgrounds_by_id_member) | **GET** /members/{idMember}/customBoardBackgrounds | getMembersCustomBoardBackgroundsByIdMember()
[**get_members_custom_board_backgrounds_by_id_member_by_id_board_background**](MemberApi.md#get_members_custom_board_backgrounds_by_id_member_by_id_board_background) | **GET** /members/{idMember}/customBoardBackgrounds/{idBoardBackground} | getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()
[**get_members_custom_emoji_by_id_member**](MemberApi.md#get_members_custom_emoji_by_id_member) | **GET** /members/{idMember}/customEmoji | getMembersCustomEmojiByIdMember()
[**get_members_custom_emoji_by_id_member_by_id_custom_emoji**](MemberApi.md#get_members_custom_emoji_by_id_member_by_id_custom_emoji) | **GET** /members/{idMember}/customEmoji/{idCustomEmoji} | getMembersCustomEmojiByIdMemberByIdCustomEmoji()
[**get_members_custom_stickers_by_id_member**](MemberApi.md#get_members_custom_stickers_by_id_member) | **GET** /members/{idMember}/customStickers | getMembersCustomStickersByIdMember()
[**get_members_custom_stickers_by_id_member_by_id_custom_sticker**](MemberApi.md#get_members_custom_stickers_by_id_member_by_id_custom_sticker) | **GET** /members/{idMember}/customStickers/{idCustomSticker} | getMembersCustomStickersByIdMemberByIdCustomSticker()
[**get_members_deltas_by_id_member**](MemberApi.md#get_members_deltas_by_id_member) | **GET** /members/{idMember}/deltas | getMembersDeltasByIdMember()
[**get_members_notifications_by_id_member**](MemberApi.md#get_members_notifications_by_id_member) | **GET** /members/{idMember}/notifications | getMembersNotificationsByIdMember()
[**get_members_notifications_by_id_member_by_filter**](MemberApi.md#get_members_notifications_by_id_member_by_filter) | **GET** /members/{idMember}/notifications/{filter} | getMembersNotificationsByIdMemberByFilter()
[**get_members_organizations_by_id_member**](MemberApi.md#get_members_organizations_by_id_member) | **GET** /members/{idMember}/organizations | getMembersOrganizationsByIdMember()
[**get_members_organizations_by_id_member_by_filter**](MemberApi.md#get_members_organizations_by_id_member_by_filter) | **GET** /members/{idMember}/organizations/{filter} | getMembersOrganizationsByIdMemberByFilter()
[**get_members_organizations_invited_by_id_member**](MemberApi.md#get_members_organizations_invited_by_id_member) | **GET** /members/{idMember}/organizationsInvited | getMembersOrganizationsInvitedByIdMember()
[**get_members_organizations_invited_by_id_member_by_field**](MemberApi.md#get_members_organizations_invited_by_id_member_by_field) | **GET** /members/{idMember}/organizationsInvited/{field} | getMembersOrganizationsInvitedByIdMemberByField()
[**get_members_saved_searches_by_id_member**](MemberApi.md#get_members_saved_searches_by_id_member) | **GET** /members/{idMember}/savedSearches | getMembersSavedSearchesByIdMember()
[**get_members_saved_searches_by_id_member_by_id_saved_search**](MemberApi.md#get_members_saved_searches_by_id_member_by_id_saved_search) | **GET** /members/{idMember}/savedSearches/{idSavedSearch} | getMembersSavedSearchesByIdMemberByIdSavedSearch()
[**get_members_tokens_by_id_member**](MemberApi.md#get_members_tokens_by_id_member) | **GET** /members/{idMember}/tokens | getMembersTokensByIdMember()
[**update_members_avatar_source_by_id_member**](MemberApi.md#update_members_avatar_source_by_id_member) | **PUT** /members/{idMember}/avatarSource | updateMembersAvatarSourceByIdMember()
[**update_members_bio_by_id_member**](MemberApi.md#update_members_bio_by_id_member) | **PUT** /members/{idMember}/bio | updateMembersBioByIdMember()
[**update_members_board_backgrounds_by_id_member_by_id_board_background**](MemberApi.md#update_members_board_backgrounds_by_id_member_by_id_board_background) | **PUT** /members/{idMember}/boardBackgrounds/{idBoardBackground} | updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()
[**update_members_board_stars_by_id_member_by_id_board_star**](MemberApi.md#update_members_board_stars_by_id_member_by_id_board_star) | **PUT** /members/{idMember}/boardStars/{idBoardStar} | updateMembersBoardStarsByIdMemberByIdBoardStar()
[**update_members_board_stars_id_board_by_id_member_by_id_board_star**](MemberApi.md#update_members_board_stars_id_board_by_id_member_by_id_board_star) | **PUT** /members/{idMember}/boardStars/{idBoardStar}/idBoard | updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()
[**update_members_board_stars_pos_by_id_member_by_id_board_star**](MemberApi.md#update_members_board_stars_pos_by_id_member_by_id_board_star) | **PUT** /members/{idMember}/boardStars/{idBoardStar}/pos | updateMembersBoardStarsPosByIdMemberByIdBoardStar()
[**update_members_by_id_member**](MemberApi.md#update_members_by_id_member) | **PUT** /members/{idMember} | updateMembersByIdMember()
[**update_members_custom_board_backgrounds_by_id_member_by_id_board_background**](MemberApi.md#update_members_custom_board_backgrounds_by_id_member_by_id_board_background) | **PUT** /members/{idMember}/customBoardBackgrounds/{idBoardBackground} | updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()
[**update_members_full_name_by_id_member**](MemberApi.md#update_members_full_name_by_id_member) | **PUT** /members/{idMember}/fullName | updateMembersFullNameByIdMember()
[**update_members_initials_by_id_member**](MemberApi.md#update_members_initials_by_id_member) | **PUT** /members/{idMember}/initials | updateMembersInitialsByIdMember()
[**update_members_prefs_color_blind_by_id_member**](MemberApi.md#update_members_prefs_color_blind_by_id_member) | **PUT** /members/{idMember}/prefs/colorBlind | updateMembersPrefsColorBlindByIdMember()
[**update_members_prefs_locale_by_id_member**](MemberApi.md#update_members_prefs_locale_by_id_member) | **PUT** /members/{idMember}/prefs/locale | updateMembersPrefsLocaleByIdMember()
[**update_members_prefs_minutes_between_summaries_by_id_member**](MemberApi.md#update_members_prefs_minutes_between_summaries_by_id_member) | **PUT** /members/{idMember}/prefs/minutesBetweenSummaries | updateMembersPrefsMinutesBetweenSummariesByIdMember()
[**update_members_saved_searches_by_id_member_by_id_saved_search**](MemberApi.md#update_members_saved_searches_by_id_member_by_id_saved_search) | **PUT** /members/{idMember}/savedSearches/{idSavedSearch} | updateMembersSavedSearchesByIdMemberByIdSavedSearch()
[**update_members_saved_searches_name_by_id_member_by_id_saved_search**](MemberApi.md#update_members_saved_searches_name_by_id_member_by_id_saved_search) | **PUT** /members/{idMember}/savedSearches/{idSavedSearch}/name | updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()
[**update_members_saved_searches_pos_by_id_member_by_id_saved_search**](MemberApi.md#update_members_saved_searches_pos_by_id_member_by_id_saved_search) | **PUT** /members/{idMember}/savedSearches/{idSavedSearch}/pos | updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()
[**update_members_saved_searches_query_by_id_member_by_id_saved_search**](MemberApi.md#update_members_saved_searches_query_by_id_member_by_id_saved_search) | **PUT** /members/{idMember}/savedSearches/{idSavedSearch}/query | updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()
[**update_members_username_by_id_member**](MemberApi.md#update_members_username_by_id_member) | **PUT** /members/{idMember}/username | updateMembersUsernameByIdMember()


# **add_members_avatar_by_id_member**
> add_members_avatar_by_id_member(id_member, key, token, members_avatar)

addMembersAvatarByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_avatar import MembersAvatar
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_avatar = openapi_client.MembersAvatar() # MembersAvatar | Attributes of \"Members Avatar\" to be added.

    try:
        # addMembersAvatarByIdMember()
        api_instance.add_members_avatar_by_id_member(id_member, key, token, members_avatar)
    except Exception as e:
        print("Exception when calling MemberApi->add_members_avatar_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_avatar** | [**MembersAvatar**](MembersAvatar.md)| Attributes of \&quot;Members Avatar\&quot; to be added. | 

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

# **add_members_board_backgrounds_by_id_member**
> add_members_board_backgrounds_by_id_member(id_member, key, token, members_board_backgrounds)

addMembersBoardBackgroundsByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_board_backgrounds import MembersBoardBackgrounds
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_board_backgrounds = openapi_client.MembersBoardBackgrounds() # MembersBoardBackgrounds | Attributes of \"Members Board Backgrounds\" to be added.

    try:
        # addMembersBoardBackgroundsByIdMember()
        api_instance.add_members_board_backgrounds_by_id_member(id_member, key, token, members_board_backgrounds)
    except Exception as e:
        print("Exception when calling MemberApi->add_members_board_backgrounds_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_board_backgrounds** | [**MembersBoardBackgrounds**](MembersBoardBackgrounds.md)| Attributes of \&quot;Members Board Backgrounds\&quot; to be added. | 

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

# **add_members_board_stars_by_id_member**
> add_members_board_stars_by_id_member(id_member, key, token, members_board_stars)

addMembersBoardStarsByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_board_stars import MembersBoardStars
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_board_stars = openapi_client.MembersBoardStars() # MembersBoardStars | Attributes of \"Members Board Stars\" to be added.

    try:
        # addMembersBoardStarsByIdMember()
        api_instance.add_members_board_stars_by_id_member(id_member, key, token, members_board_stars)
    except Exception as e:
        print("Exception when calling MemberApi->add_members_board_stars_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_board_stars** | [**MembersBoardStars**](MembersBoardStars.md)| Attributes of \&quot;Members Board Stars\&quot; to be added. | 

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

# **add_members_custom_board_backgrounds_by_id_member**
> add_members_custom_board_backgrounds_by_id_member(id_member, key, token, members_custom_board_backgrounds)

addMembersCustomBoardBackgroundsByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_custom_board_backgrounds import MembersCustomBoardBackgrounds
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_custom_board_backgrounds = openapi_client.MembersCustomBoardBackgrounds() # MembersCustomBoardBackgrounds | Attributes of \"Members Custom Board Backgrounds\" to be added.

    try:
        # addMembersCustomBoardBackgroundsByIdMember()
        api_instance.add_members_custom_board_backgrounds_by_id_member(id_member, key, token, members_custom_board_backgrounds)
    except Exception as e:
        print("Exception when calling MemberApi->add_members_custom_board_backgrounds_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_custom_board_backgrounds** | [**MembersCustomBoardBackgrounds**](MembersCustomBoardBackgrounds.md)| Attributes of \&quot;Members Custom Board Backgrounds\&quot; to be added. | 

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

# **add_members_custom_emoji_by_id_member**
> add_members_custom_emoji_by_id_member(id_member, key, token, members_custom_emoji)

addMembersCustomEmojiByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_custom_emoji import MembersCustomEmoji
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_custom_emoji = openapi_client.MembersCustomEmoji() # MembersCustomEmoji | Attributes of \"Members Custom Emoji\" to be added.

    try:
        # addMembersCustomEmojiByIdMember()
        api_instance.add_members_custom_emoji_by_id_member(id_member, key, token, members_custom_emoji)
    except Exception as e:
        print("Exception when calling MemberApi->add_members_custom_emoji_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_custom_emoji** | [**MembersCustomEmoji**](MembersCustomEmoji.md)| Attributes of \&quot;Members Custom Emoji\&quot; to be added. | 

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

# **add_members_custom_stickers_by_id_member**
> add_members_custom_stickers_by_id_member(id_member, key, token, members_custom_stickers)

addMembersCustomStickersByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_custom_stickers import MembersCustomStickers
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_custom_stickers = openapi_client.MembersCustomStickers() # MembersCustomStickers | Attributes of \"Members Custom Stickers\" to be added.

    try:
        # addMembersCustomStickersByIdMember()
        api_instance.add_members_custom_stickers_by_id_member(id_member, key, token, members_custom_stickers)
    except Exception as e:
        print("Exception when calling MemberApi->add_members_custom_stickers_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_custom_stickers** | [**MembersCustomStickers**](MembersCustomStickers.md)| Attributes of \&quot;Members Custom Stickers\&quot; to be added. | 

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

# **add_members_one_time_messages_dismissed_by_id_member**
> add_members_one_time_messages_dismissed_by_id_member(id_member, key, token, members_one_time_messages_dismissed)

addMembersOneTimeMessagesDismissedByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_one_time_messages_dismissed import MembersOneTimeMessagesDismissed
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_one_time_messages_dismissed = openapi_client.MembersOneTimeMessagesDismissed() # MembersOneTimeMessagesDismissed | Attributes of \"Members One Time Messages Dismissed\" to be added.

    try:
        # addMembersOneTimeMessagesDismissedByIdMember()
        api_instance.add_members_one_time_messages_dismissed_by_id_member(id_member, key, token, members_one_time_messages_dismissed)
    except Exception as e:
        print("Exception when calling MemberApi->add_members_one_time_messages_dismissed_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_one_time_messages_dismissed** | [**MembersOneTimeMessagesDismissed**](MembersOneTimeMessagesDismissed.md)| Attributes of \&quot;Members One Time Messages Dismissed\&quot; to be added. | 

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

# **add_members_saved_searches_by_id_member**
> add_members_saved_searches_by_id_member(id_member, key, token, members_saved_searches)

addMembersSavedSearchesByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_saved_searches import MembersSavedSearches
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_saved_searches = openapi_client.MembersSavedSearches() # MembersSavedSearches | Attributes of \"Members Saved Searches\" to be added.

    try:
        # addMembersSavedSearchesByIdMember()
        api_instance.add_members_saved_searches_by_id_member(id_member, key, token, members_saved_searches)
    except Exception as e:
        print("Exception when calling MemberApi->add_members_saved_searches_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_saved_searches** | [**MembersSavedSearches**](MembersSavedSearches.md)| Attributes of \&quot;Members Saved Searches\&quot; to be added. | 

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

# **delete_members_board_backgrounds_by_id_member_by_id_board_background**
> delete_members_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token)

deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_background = 'id_board_background_example' # str | idBoardBackground
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()
        api_instance.delete_members_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->delete_members_board_backgrounds_by_id_member_by_id_board_background: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_background** | **str**| idBoardBackground | 
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

# **delete_members_board_stars_by_id_member_by_id_board_star**
> delete_members_board_stars_by_id_member_by_id_board_star(id_member, id_board_star, key, token)

deleteMembersBoardStarsByIdMemberByIdBoardStar()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_star = 'id_board_star_example' # str | idBoardStar
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteMembersBoardStarsByIdMemberByIdBoardStar()
        api_instance.delete_members_board_stars_by_id_member_by_id_board_star(id_member, id_board_star, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->delete_members_board_stars_by_id_member_by_id_board_star: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_star** | **str**| idBoardStar | 
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

# **delete_members_custom_board_backgrounds_by_id_member_by_id_board_background**
> delete_members_custom_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token)

deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_background = 'id_board_background_example' # str | idBoardBackground
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()
        api_instance.delete_members_custom_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->delete_members_custom_board_backgrounds_by_id_member_by_id_board_background: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_background** | **str**| idBoardBackground | 
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

# **delete_members_custom_stickers_by_id_member_by_id_custom_sticker**
> delete_members_custom_stickers_by_id_member_by_id_custom_sticker(id_member, id_custom_sticker, key, token)

deleteMembersCustomStickersByIdMemberByIdCustomSticker()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_custom_sticker = 'id_custom_sticker_example' # str | idCustomSticker
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteMembersCustomStickersByIdMemberByIdCustomSticker()
        api_instance.delete_members_custom_stickers_by_id_member_by_id_custom_sticker(id_member, id_custom_sticker, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->delete_members_custom_stickers_by_id_member_by_id_custom_sticker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_custom_sticker** | **str**| idCustomSticker | 
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

# **delete_members_saved_searches_by_id_member_by_id_saved_search**
> delete_members_saved_searches_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token)

deleteMembersSavedSearchesByIdMemberByIdSavedSearch()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_saved_search = 'id_saved_search_example' # str | idSavedSearch
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteMembersSavedSearchesByIdMemberByIdSavedSearch()
        api_instance.delete_members_saved_searches_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->delete_members_saved_searches_by_id_member_by_id_saved_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_saved_search** | **str**| idSavedSearch | 
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

# **get_members_actions_by_id_member**
> get_members_actions_by_id_member(id_member, key, token, entities=entities, display=display, filter=filter, fields=fields, limit=limit, format=format, since=since, before=before, page=page, id_models=id_models, member=member, member_fields=member_fields, member_creator=member_creator, member_creator_fields=member_creator_fields)

getMembersActionsByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
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
        # getMembersActionsByIdMember()
        api_instance.get_members_actions_by_id_member(id_member, key, token, entities=entities, display=display, filter=filter, fields=fields, limit=limit, format=format, since=since, before=before, page=page, id_models=id_models, member=member, member_fields=member_fields, member_creator=member_creator, member_creator_fields=member_creator_fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_actions_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_board_backgrounds_by_id_member**
> get_members_board_backgrounds_by_id_member(id_member, key, token, filter=filter)

getMembersBoardBackgroundsByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'all' # str | One of: all, custom, default, none or premium (optional) (default to 'all')

    try:
        # getMembersBoardBackgroundsByIdMember()
        api_instance.get_members_board_backgrounds_by_id_member(id_member, key, token, filter=filter)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_board_backgrounds_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| One of: all, custom, default, none or premium | [optional] [default to &#39;all&#39;]

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

# **get_members_board_backgrounds_by_id_member_by_id_board_background**
> get_members_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token, fields=fields)

getMembersBoardBackgroundsByIdMemberByIdBoardBackground()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_background = 'id_board_background_example' # str | idBoardBackground
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile (optional) (default to 'all')

    try:
        # getMembersBoardBackgroundsByIdMemberByIdBoardBackground()
        api_instance.get_members_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_board_backgrounds_by_id_member_by_id_board_background: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_background** | **str**| idBoardBackground | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile | [optional] [default to &#39;all&#39;]

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

# **get_members_board_stars_by_id_member**
> get_members_board_stars_by_id_member(id_member, key, token)

getMembersBoardStarsByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersBoardStarsByIdMember()
        api_instance.get_members_board_stars_by_id_member(id_member, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_board_stars_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_board_stars_by_id_member_by_id_board_star**
> get_members_board_stars_by_id_member_by_id_board_star(id_member, id_board_star, key, token)

getMembersBoardStarsByIdMemberByIdBoardStar()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_star = 'id_board_star_example' # str | idBoardStar
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersBoardStarsByIdMemberByIdBoardStar()
        api_instance.get_members_board_stars_by_id_member_by_id_board_star(id_member, id_board_star, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_board_stars_by_id_member_by_id_board_star: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_star** | **str**| idBoardStar | 
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

# **get_members_boards_by_id_member**
> get_members_boards_by_id_member(id_member, key, token, filter=filter, fields=fields, actions=actions, actions_entities=actions_entities, actions_limit=actions_limit, actions_format=actions_format, actions_since=actions_since, action_fields=action_fields, memberships=memberships, organization=organization, organization_fields=organization_fields, lists=lists)

getMembersBoardsByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'all' # str | all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned (optional) (default to 'all')
    fields = 'all' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'all')
    actions = 'actions_example' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional)
    actions_entities = 'actions_entities_example' # str |  true or false (optional)
    actions_limit = '50' # str | a number from 0 to 1000 (optional) (default to '50')
    actions_format = 'list' # str | One of: count, list or minimal (optional) (default to 'list')
    actions_since = 'actions_since_example' # str | A date, null or lastView (optional)
    action_fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator or type (optional) (default to 'all')
    memberships = 'none' # str | all or a comma-separated list of: active, admin, deactivated, me or normal (optional) (default to 'none')
    organization = 'organization_example' # str |  true or false (optional)
    organization_fields = 'name and displayName' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'name and displayName')
    lists = 'none' # str | One of: all, closed, none or open (optional) (default to 'none')

    try:
        # getMembersBoardsByIdMember()
        api_instance.get_members_boards_by_id_member(id_member, key, token, filter=filter, fields=fields, actions=actions, actions_entities=actions_entities, actions_limit=actions_limit, actions_format=actions_format, actions_since=actions_since, action_fields=action_fields, memberships=memberships, organization=organization, organization_fields=organization_fields, lists=lists)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_boards_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned | [optional] [default to &#39;all&#39;]
 **fields** | **str**| all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url | [optional] [default to &#39;all&#39;]
 **actions** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] 
 **actions_entities** | **str**|  true or false | [optional] 
 **actions_limit** | **str**| a number from 0 to 1000 | [optional] [default to &#39;50&#39;]
 **actions_format** | **str**| One of: count, list or minimal | [optional] [default to &#39;list&#39;]
 **actions_since** | **str**| A date, null or lastView | [optional] 
 **action_fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator or type | [optional] [default to &#39;all&#39;]
 **memberships** | **str**| all or a comma-separated list of: active, admin, deactivated, me or normal | [optional] [default to &#39;none&#39;]
 **organization** | **str**|  true or false | [optional] 
 **organization_fields** | **str**| all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website | [optional] [default to &#39;name and displayName&#39;]
 **lists** | **str**| One of: all, closed, none or open | [optional] [default to &#39;none&#39;]

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

# **get_members_boards_by_id_member_by_filter**
> get_members_boards_by_id_member_by_filter(id_member, filter, key, token)

getMembersBoardsByIdMemberByFilter()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    filter = 'filter_example' # str | filter
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersBoardsByIdMemberByFilter()
        api_instance.get_members_boards_by_id_member_by_filter(id_member, filter, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_boards_by_id_member_by_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_boards_invited_by_id_member**
> get_members_boards_invited_by_id_member(id_member, key, token, fields=fields)

getMembersBoardsInvitedByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'all')

    try:
        # getMembersBoardsInvitedByIdMember()
        api_instance.get_members_boards_invited_by_id_member(id_member, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_boards_invited_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_boards_invited_by_id_member_by_field**
> get_members_boards_invited_by_id_member_by_field(id_member, var_field, key, token)

getMembersBoardsInvitedByIdMemberByField()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersBoardsInvitedByIdMemberByField()
        api_instance.get_members_boards_invited_by_id_member_by_field(id_member, var_field, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_boards_invited_by_id_member_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_by_id_member**
> get_members_by_id_member(id_member, key, token, actions=actions, actions_entities=actions_entities, actions_display=actions_display, actions_limit=actions_limit, action_fields=action_fields, action_since=action_since, action_before=action_before, cards=cards, card_fields=card_fields, card_members=card_members, card_member_fields=card_member_fields, card_attachments=card_attachments, card_attachment_fields=card_attachment_fields, card_stickers=card_stickers, boards=boards, board_fields=board_fields, board_actions=board_actions, board_actions_entities=board_actions_entities, board_actions_display=board_actions_display, board_actions_format=board_actions_format, board_actions_since=board_actions_since, board_actions_limit=board_actions_limit, board_action_fields=board_action_fields, board_lists=board_lists, board_memberships=board_memberships, board_organization=board_organization, board_organization_fields=board_organization_fields, boards_invited=boards_invited, boards_invited_fields=boards_invited_fields, board_stars=board_stars, saved_searches=saved_searches, organizations=organizations, organization_fields=organization_fields, organization_paid_account=organization_paid_account, organizations_invited=organizations_invited, organizations_invited_fields=organizations_invited_fields, notifications=notifications, notifications_entities=notifications_entities, notifications_display=notifications_display, notifications_limit=notifications_limit, notification_fields=notification_fields, notification_member_creator=notification_member_creator, notification_member_creator_fields=notification_member_creator_fields, notification_before=notification_before, notification_since=notification_since, tokens=tokens, paid_account=paid_account, board_backgrounds=board_backgrounds, custom_board_backgrounds=custom_board_backgrounds, custom_stickers=custom_stickers, custom_emoji=custom_emoji, fields=fields)

getMembersByIdMember()

If you specify 'me' as the username, this call will respond as if you had supplied the username associated with the supplied token

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    actions = 'actions_example' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional)
    actions_entities = 'actions_entities_example' # str |  true or false (optional)
    actions_display = 'actions_display_example' # str |  true or false (optional)
    actions_limit = '50' # str | a number from 0 to 1000 (optional) (default to '50')
    action_fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator or type (optional) (default to 'all')
    action_since = 'action_since_example' # str | A date, null or lastView (optional)
    action_before = 'action_before_example' # str | A date, or null (optional)
    cards = 'none' # str | One of: all, closed, none, open or visible (optional) (default to 'none')
    card_fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')
    card_members = 'card_members_example' # str |  true or false (optional)
    card_member_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    card_attachments = 'card_attachments_example' # str | A boolean value or &quot;cover&quot; for only card cover attachments (optional)
    card_attachment_fields = 'url and previews' # str | all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url (optional) (default to 'url and previews')
    card_stickers = 'card_stickers_example' # str |  true or false (optional)
    boards = 'boards_example' # str | all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned (optional)
    board_fields = 'name, closed, idOrganization and pinned' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'name, closed, idOrganization and pinned')
    board_actions = 'board_actions_example' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional)
    board_actions_entities = 'board_actions_entities_example' # str |  true or false (optional)
    board_actions_display = 'board_actions_display_example' # str |  true or false (optional)
    board_actions_format = 'list' # str | One of: count, list or minimal (optional) (default to 'list')
    board_actions_since = 'board_actions_since_example' # str | A date, null or lastView (optional)
    board_actions_limit = '50' # str | a number from 0 to 1000 (optional) (default to '50')
    board_action_fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator or type (optional) (default to 'all')
    board_lists = 'none' # str | One of: all, closed, none or open (optional) (default to 'none')
    board_memberships = 'none' # str | all or a comma-separated list of: active, admin, deactivated, me or normal (optional) (default to 'none')
    board_organization = 'board_organization_example' # str |  true or false (optional)
    board_organization_fields = 'name and displayName' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'name and displayName')
    boards_invited = 'boards_invited_example' # str | all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned (optional)
    boards_invited_fields = 'name, closed, idOrganization and pinned' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'name, closed, idOrganization and pinned')
    board_stars = 'board_stars_example' # str |  true or false (optional)
    saved_searches = 'saved_searches_example' # str |  true or false (optional)
    organizations = 'none' # str | One of: all, members, none or public (optional) (default to 'none')
    organization_fields = 'all' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'all')
    organization_paid_account = 'organization_paid_account_example' # str |  true or false (optional)
    organizations_invited = 'none' # str | One of: all, members, none or public (optional) (default to 'none')
    organizations_invited_fields = 'all' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'all')
    notifications = 'notifications_example' # str | all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard (optional)
    notifications_entities = 'notifications_entities_example' # str |  true or false (optional)
    notifications_display = 'notifications_display_example' # str |  true or false (optional)
    notifications_limit = '50' # str | a number from 1 to 1000 (optional) (default to '50')
    notification_fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator, type or unread (optional) (default to 'all')
    notification_member_creator = 'notification_member_creator_example' # str |  true or false (optional)
    notification_member_creator_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    notification_before = 'notification_before_example' # str | An id, or null (optional)
    notification_since = 'notification_since_example' # str | An id, or null (optional)
    tokens = 'none' # str | One of: all or none (optional) (default to 'none')
    paid_account = 'paid_account_example' # str |  true or false (optional)
    board_backgrounds = 'none' # str | One of: all, custom, default, none or premium (optional) (default to 'none')
    custom_board_backgrounds = 'none' # str | One of: all or none (optional) (default to 'none')
    custom_stickers = 'none' # str | One of: all or none (optional) (default to 'none')
    custom_emoji = 'none' # str | One of: all or none (optional) (default to 'none')
    fields = 'all' # str | all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username (optional) (default to 'all')

    try:
        # getMembersByIdMember()
        api_instance.get_members_by_id_member(id_member, key, token, actions=actions, actions_entities=actions_entities, actions_display=actions_display, actions_limit=actions_limit, action_fields=action_fields, action_since=action_since, action_before=action_before, cards=cards, card_fields=card_fields, card_members=card_members, card_member_fields=card_member_fields, card_attachments=card_attachments, card_attachment_fields=card_attachment_fields, card_stickers=card_stickers, boards=boards, board_fields=board_fields, board_actions=board_actions, board_actions_entities=board_actions_entities, board_actions_display=board_actions_display, board_actions_format=board_actions_format, board_actions_since=board_actions_since, board_actions_limit=board_actions_limit, board_action_fields=board_action_fields, board_lists=board_lists, board_memberships=board_memberships, board_organization=board_organization, board_organization_fields=board_organization_fields, boards_invited=boards_invited, boards_invited_fields=boards_invited_fields, board_stars=board_stars, saved_searches=saved_searches, organizations=organizations, organization_fields=organization_fields, organization_paid_account=organization_paid_account, organizations_invited=organizations_invited, organizations_invited_fields=organizations_invited_fields, notifications=notifications, notifications_entities=notifications_entities, notifications_display=notifications_display, notifications_limit=notifications_limit, notification_fields=notification_fields, notification_member_creator=notification_member_creator, notification_member_creator_fields=notification_member_creator_fields, notification_before=notification_before, notification_since=notification_since, tokens=tokens, paid_account=paid_account, board_backgrounds=board_backgrounds, custom_board_backgrounds=custom_board_backgrounds, custom_stickers=custom_stickers, custom_emoji=custom_emoji, fields=fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **actions** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] 
 **actions_entities** | **str**|  true or false | [optional] 
 **actions_display** | **str**|  true or false | [optional] 
 **actions_limit** | **str**| a number from 0 to 1000 | [optional] [default to &#39;50&#39;]
 **action_fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator or type | [optional] [default to &#39;all&#39;]
 **action_since** | **str**| A date, null or lastView | [optional] 
 **action_before** | **str**| A date, or null | [optional] 
 **cards** | **str**| One of: all, closed, none, open or visible | [optional] [default to &#39;none&#39;]
 **card_fields** | **str**| all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url | [optional] [default to &#39;all&#39;]
 **card_members** | **str**|  true or false | [optional] 
 **card_member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **card_attachments** | **str**| A boolean value or &amp;quot;cover&amp;quot; for only card cover attachments | [optional] 
 **card_attachment_fields** | **str**| all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url | [optional] [default to &#39;url and previews&#39;]
 **card_stickers** | **str**|  true or false | [optional] 
 **boards** | **str**| all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned | [optional] 
 **board_fields** | **str**| all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url | [optional] [default to &#39;name, closed, idOrganization and pinned&#39;]
 **board_actions** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] 
 **board_actions_entities** | **str**|  true or false | [optional] 
 **board_actions_display** | **str**|  true or false | [optional] 
 **board_actions_format** | **str**| One of: count, list or minimal | [optional] [default to &#39;list&#39;]
 **board_actions_since** | **str**| A date, null or lastView | [optional] 
 **board_actions_limit** | **str**| a number from 0 to 1000 | [optional] [default to &#39;50&#39;]
 **board_action_fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator or type | [optional] [default to &#39;all&#39;]
 **board_lists** | **str**| One of: all, closed, none or open | [optional] [default to &#39;none&#39;]
 **board_memberships** | **str**| all or a comma-separated list of: active, admin, deactivated, me or normal | [optional] [default to &#39;none&#39;]
 **board_organization** | **str**|  true or false | [optional] 
 **board_organization_fields** | **str**| all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website | [optional] [default to &#39;name and displayName&#39;]
 **boards_invited** | **str**| all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned | [optional] 
 **boards_invited_fields** | **str**| all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url | [optional] [default to &#39;name, closed, idOrganization and pinned&#39;]
 **board_stars** | **str**|  true or false | [optional] 
 **saved_searches** | **str**|  true or false | [optional] 
 **organizations** | **str**| One of: all, members, none or public | [optional] [default to &#39;none&#39;]
 **organization_fields** | **str**| all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website | [optional] [default to &#39;all&#39;]
 **organization_paid_account** | **str**|  true or false | [optional] 
 **organizations_invited** | **str**| One of: all, members, none or public | [optional] [default to &#39;none&#39;]
 **organizations_invited_fields** | **str**| all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website | [optional] [default to &#39;all&#39;]
 **notifications** | **str**| all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard | [optional] 
 **notifications_entities** | **str**|  true or false | [optional] 
 **notifications_display** | **str**|  true or false | [optional] 
 **notifications_limit** | **str**| a number from 1 to 1000 | [optional] [default to &#39;50&#39;]
 **notification_fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator, type or unread | [optional] [default to &#39;all&#39;]
 **notification_member_creator** | **str**|  true or false | [optional] 
 **notification_member_creator_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **notification_before** | **str**| An id, or null | [optional] 
 **notification_since** | **str**| An id, or null | [optional] 
 **tokens** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **paid_account** | **str**|  true or false | [optional] 
 **board_backgrounds** | **str**| One of: all, custom, default, none or premium | [optional] [default to &#39;none&#39;]
 **custom_board_backgrounds** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **custom_stickers** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **custom_emoji** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
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

# **get_members_by_id_member_by_field**
> get_members_by_id_member_by_field(id_member, var_field, key, token)

getMembersByIdMemberByField()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersByIdMemberByField()
        api_instance.get_members_by_id_member_by_field(id_member, var_field, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_by_id_member_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_cards_by_id_member**
> get_members_cards_by_id_member(id_member, key, token, actions=actions, attachments=attachments, attachment_fields=attachment_fields, stickers=stickers, members=members, member_fields=member_fields, check_item_states=check_item_states, checklists=checklists, limit=limit, since=since, before=before, filter=filter, fields=fields)

getMembersCardsByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
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
        # getMembersCardsByIdMember()
        api_instance.get_members_cards_by_id_member(id_member, key, token, actions=actions, attachments=attachments, attachment_fields=attachment_fields, stickers=stickers, members=members, member_fields=member_fields, check_item_states=check_item_states, checklists=checklists, limit=limit, since=since, before=before, filter=filter, fields=fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_cards_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_cards_by_id_member_by_filter**
> get_members_cards_by_id_member_by_filter(id_member, filter, key, token)

getMembersCardsByIdMemberByFilter()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    filter = 'filter_example' # str | filter
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersCardsByIdMemberByFilter()
        api_instance.get_members_cards_by_id_member_by_filter(id_member, filter, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_cards_by_id_member_by_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_custom_board_backgrounds_by_id_member**
> get_members_custom_board_backgrounds_by_id_member(id_member, key, token, filter=filter)

getMembersCustomBoardBackgroundsByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'all' # str | One of: all or none (optional) (default to 'all')

    try:
        # getMembersCustomBoardBackgroundsByIdMember()
        api_instance.get_members_custom_board_backgrounds_by_id_member(id_member, key, token, filter=filter)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_custom_board_backgrounds_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| One of: all or none | [optional] [default to &#39;all&#39;]

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

# **get_members_custom_board_backgrounds_by_id_member_by_id_board_background**
> get_members_custom_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token, fields=fields)

getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_background = 'id_board_background_example' # str | idBoardBackground
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile (optional) (default to 'all')

    try:
        # getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()
        api_instance.get_members_custom_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_custom_board_backgrounds_by_id_member_by_id_board_background: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_background** | **str**| idBoardBackground | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile | [optional] [default to &#39;all&#39;]

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

# **get_members_custom_emoji_by_id_member**
> get_members_custom_emoji_by_id_member(id_member, key, token, filter=filter)

getMembersCustomEmojiByIdMember()

This gets the list of all of the user’s uploaded emoji

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'all' # str | One of: all or none (optional) (default to 'all')

    try:
        # getMembersCustomEmojiByIdMember()
        api_instance.get_members_custom_emoji_by_id_member(id_member, key, token, filter=filter)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_custom_emoji_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| One of: all or none | [optional] [default to &#39;all&#39;]

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

# **get_members_custom_emoji_by_id_member_by_id_custom_emoji**
> get_members_custom_emoji_by_id_member_by_id_custom_emoji(id_member, id_custom_emoji, key, token, fields=fields)

getMembersCustomEmojiByIdMemberByIdCustomEmoji()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_custom_emoji = 'id_custom_emoji_example' # str | idCustomEmoji
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: name or url (optional) (default to 'all')

    try:
        # getMembersCustomEmojiByIdMemberByIdCustomEmoji()
        api_instance.get_members_custom_emoji_by_id_member_by_id_custom_emoji(id_member, id_custom_emoji, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_custom_emoji_by_id_member_by_id_custom_emoji: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_custom_emoji** | **str**| idCustomEmoji | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: name or url | [optional] [default to &#39;all&#39;]

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

# **get_members_custom_stickers_by_id_member**
> get_members_custom_stickers_by_id_member(id_member, key, token, filter=filter)

getMembersCustomStickersByIdMember()

This gets a list of all of the user’s uploaded stickers

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'all' # str | One of: all or none (optional) (default to 'all')

    try:
        # getMembersCustomStickersByIdMember()
        api_instance.get_members_custom_stickers_by_id_member(id_member, key, token, filter=filter)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_custom_stickers_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| One of: all or none | [optional] [default to &#39;all&#39;]

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

# **get_members_custom_stickers_by_id_member_by_id_custom_sticker**
> get_members_custom_stickers_by_id_member_by_id_custom_sticker(id_member, id_custom_sticker, key, token, fields=fields)

getMembersCustomStickersByIdMemberByIdCustomSticker()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_custom_sticker = 'id_custom_sticker_example' # str | idCustomSticker
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: scaled or url (optional) (default to 'all')

    try:
        # getMembersCustomStickersByIdMemberByIdCustomSticker()
        api_instance.get_members_custom_stickers_by_id_member_by_id_custom_sticker(id_member, id_custom_sticker, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_custom_stickers_by_id_member_by_id_custom_sticker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_custom_sticker** | **str**| idCustomSticker | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: scaled or url | [optional] [default to &#39;all&#39;]

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

# **get_members_deltas_by_id_member**
> get_members_deltas_by_id_member(id_member, tags, ix_last_update, key, token)

getMembersDeltasByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    tags = 'tags_example' # str | A valid tag for subscribing
    ix_last_update = 'ix_last_update_example' # str | a number from -1 to Infinity
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersDeltasByIdMember()
        api_instance.get_members_deltas_by_id_member(id_member, tags, ix_last_update, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_deltas_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_notifications_by_id_member**
> get_members_notifications_by_id_member(id_member, key, token, entities=entities, display=display, filter=filter, read_filter=read_filter, fields=fields, limit=limit, page=page, before=before, since=since, member_creator=member_creator, member_creator_fields=member_creator_fields)

getMembersNotificationsByIdMember()

You can only read the notifications for the member associated with the supplied token

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    entities = 'entities_example' # str |  true or false (optional)
    display = 'display_example' # str |  true or false (optional)
    filter = 'all' # str | all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard (optional) (default to 'all')
    read_filter = 'all' # str | One of: all, read or unread (optional) (default to 'all')
    fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator, type or unread (optional) (default to 'all')
    limit = '50' # str | a number from 1 to 1000 (optional) (default to '50')
    page = '0' # str | a number from 0 to 100 (optional) (default to '0')
    before = 'before_example' # str | An id, or null (optional)
    since = 'since_example' # str | An id, or null (optional)
    member_creator = 'member_creator_example' # str |  true or false (optional)
    member_creator_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')

    try:
        # getMembersNotificationsByIdMember()
        api_instance.get_members_notifications_by_id_member(id_member, key, token, entities=entities, display=display, filter=filter, read_filter=read_filter, fields=fields, limit=limit, page=page, before=before, since=since, member_creator=member_creator, member_creator_fields=member_creator_fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_notifications_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **entities** | **str**|  true or false | [optional] 
 **display** | **str**|  true or false | [optional] 
 **filter** | **str**| all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard | [optional] [default to &#39;all&#39;]
 **read_filter** | **str**| One of: all, read or unread | [optional] [default to &#39;all&#39;]
 **fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator, type or unread | [optional] [default to &#39;all&#39;]
 **limit** | **str**| a number from 1 to 1000 | [optional] [default to &#39;50&#39;]
 **page** | **str**| a number from 0 to 100 | [optional] [default to &#39;0&#39;]
 **before** | **str**| An id, or null | [optional] 
 **since** | **str**| An id, or null | [optional] 
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

# **get_members_notifications_by_id_member_by_filter**
> get_members_notifications_by_id_member_by_filter(id_member, filter, key, token)

getMembersNotificationsByIdMemberByFilter()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    filter = 'filter_example' # str | filter
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersNotificationsByIdMemberByFilter()
        api_instance.get_members_notifications_by_id_member_by_filter(id_member, filter, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_notifications_by_id_member_by_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_organizations_by_id_member**
> get_members_organizations_by_id_member(id_member, key, token, filter=filter, fields=fields, paid_account=paid_account)

getMembersOrganizationsByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'all' # str | One of: all, members, none or public (optional) (default to 'all')
    fields = 'all' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'all')
    paid_account = 'paid_account_example' # str |  true or false (optional)

    try:
        # getMembersOrganizationsByIdMember()
        api_instance.get_members_organizations_by_id_member(id_member, key, token, filter=filter, fields=fields, paid_account=paid_account)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_organizations_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| One of: all, members, none or public | [optional] [default to &#39;all&#39;]
 **fields** | **str**| all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website | [optional] [default to &#39;all&#39;]
 **paid_account** | **str**|  true or false | [optional] 

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

# **get_members_organizations_by_id_member_by_filter**
> get_members_organizations_by_id_member_by_filter(id_member, filter, key, token)

getMembersOrganizationsByIdMemberByFilter()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    filter = 'filter_example' # str | filter
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersOrganizationsByIdMemberByFilter()
        api_instance.get_members_organizations_by_id_member_by_filter(id_member, filter, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_organizations_by_id_member_by_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_organizations_invited_by_id_member**
> get_members_organizations_invited_by_id_member(id_member, key, token, fields=fields)

getMembersOrganizationsInvitedByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'all')

    try:
        # getMembersOrganizationsInvitedByIdMember()
        api_instance.get_members_organizations_invited_by_id_member(id_member, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_organizations_invited_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_organizations_invited_by_id_member_by_field**
> get_members_organizations_invited_by_id_member_by_field(id_member, var_field, key, token)

getMembersOrganizationsInvitedByIdMemberByField()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersOrganizationsInvitedByIdMemberByField()
        api_instance.get_members_organizations_invited_by_id_member_by_field(id_member, var_field, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_organizations_invited_by_id_member_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_saved_searches_by_id_member**
> get_members_saved_searches_by_id_member(id_member, key, token)

getMembersSavedSearchesByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersSavedSearchesByIdMember()
        api_instance.get_members_saved_searches_by_id_member(id_member, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_saved_searches_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
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

# **get_members_saved_searches_by_id_member_by_id_saved_search**
> get_members_saved_searches_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token)

getMembersSavedSearchesByIdMemberByIdSavedSearch()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_saved_search = 'id_saved_search_example' # str | idSavedSearch
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getMembersSavedSearchesByIdMemberByIdSavedSearch()
        api_instance.get_members_saved_searches_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_saved_searches_by_id_member_by_id_saved_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_saved_search** | **str**| idSavedSearch | 
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

# **get_members_tokens_by_id_member**
> get_members_tokens_by_id_member(id_member, key, token, filter=filter)

getMembersTokensByIdMember()

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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    filter = 'all' # str | One of: all or none (optional) (default to 'all')

    try:
        # getMembersTokensByIdMember()
        api_instance.get_members_tokens_by_id_member(id_member, key, token, filter=filter)
    except Exception as e:
        print("Exception when calling MemberApi->get_members_tokens_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **filter** | **str**| One of: all or none | [optional] [default to &#39;all&#39;]

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

# **update_members_avatar_source_by_id_member**
> update_members_avatar_source_by_id_member(id_member, key, token, members_avatar_source)

updateMembersAvatarSourceByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_avatar_source import MembersAvatarSource
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_avatar_source = openapi_client.MembersAvatarSource() # MembersAvatarSource | Attributes of \"Members Avatar Source\" to be updated.

    try:
        # updateMembersAvatarSourceByIdMember()
        api_instance.update_members_avatar_source_by_id_member(id_member, key, token, members_avatar_source)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_avatar_source_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_avatar_source** | [**MembersAvatarSource**](MembersAvatarSource.md)| Attributes of \&quot;Members Avatar Source\&quot; to be updated. | 

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

# **update_members_bio_by_id_member**
> update_members_bio_by_id_member(id_member, key, token, members_bio)

updateMembersBioByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_bio import MembersBio
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_bio = openapi_client.MembersBio() # MembersBio | Attributes of \"Members Bio\" to be updated.

    try:
        # updateMembersBioByIdMember()
        api_instance.update_members_bio_by_id_member(id_member, key, token, members_bio)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_bio_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_bio** | [**MembersBio**](MembersBio.md)| Attributes of \&quot;Members Bio\&quot; to be updated. | 

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

# **update_members_board_backgrounds_by_id_member_by_id_board_background**
> update_members_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token, members_board_backgrounds)

updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_board_backgrounds import MembersBoardBackgrounds
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_background = 'id_board_background_example' # str | idBoardBackground
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_board_backgrounds = openapi_client.MembersBoardBackgrounds() # MembersBoardBackgrounds | Attributes of \"Members Board Backgrounds\" to be updated.

    try:
        # updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()
        api_instance.update_members_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token, members_board_backgrounds)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_board_backgrounds_by_id_member_by_id_board_background: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_background** | **str**| idBoardBackground | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_board_backgrounds** | [**MembersBoardBackgrounds**](MembersBoardBackgrounds.md)| Attributes of \&quot;Members Board Backgrounds\&quot; to be updated. | 

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

# **update_members_board_stars_by_id_member_by_id_board_star**
> update_members_board_stars_by_id_member_by_id_board_star(id_member, id_board_star, key, token, members_board_stars)

updateMembersBoardStarsByIdMemberByIdBoardStar()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_board_stars import MembersBoardStars
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_star = 'id_board_star_example' # str | idBoardStar
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_board_stars = openapi_client.MembersBoardStars() # MembersBoardStars | Attributes of \"Members Board Stars\" to be updated.

    try:
        # updateMembersBoardStarsByIdMemberByIdBoardStar()
        api_instance.update_members_board_stars_by_id_member_by_id_board_star(id_member, id_board_star, key, token, members_board_stars)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_board_stars_by_id_member_by_id_board_star: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_star** | **str**| idBoardStar | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_board_stars** | [**MembersBoardStars**](MembersBoardStars.md)| Attributes of \&quot;Members Board Stars\&quot; to be updated. | 

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

# **update_members_board_stars_id_board_by_id_member_by_id_board_star**
> update_members_board_stars_id_board_by_id_member_by_id_board_star(id_member, id_board_star, key, token, members_board_stars_id_board)

updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_board_stars_id_board import MembersBoardStarsIdBoard
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_star = 'id_board_star_example' # str | idBoardStar
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_board_stars_id_board = openapi_client.MembersBoardStarsIdBoard() # MembersBoardStarsIdBoard | Attributes of \"Members Board Stars Id Board\" to be updated.

    try:
        # updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()
        api_instance.update_members_board_stars_id_board_by_id_member_by_id_board_star(id_member, id_board_star, key, token, members_board_stars_id_board)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_board_stars_id_board_by_id_member_by_id_board_star: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_star** | **str**| idBoardStar | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_board_stars_id_board** | [**MembersBoardStarsIdBoard**](MembersBoardStarsIdBoard.md)| Attributes of \&quot;Members Board Stars Id Board\&quot; to be updated. | 

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

# **update_members_board_stars_pos_by_id_member_by_id_board_star**
> update_members_board_stars_pos_by_id_member_by_id_board_star(id_member, id_board_star, key, token, members_board_stars_pos)

updateMembersBoardStarsPosByIdMemberByIdBoardStar()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_board_stars_pos import MembersBoardStarsPos
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_star = 'id_board_star_example' # str | idBoardStar
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_board_stars_pos = openapi_client.MembersBoardStarsPos() # MembersBoardStarsPos | Attributes of \"Members Board Stars Pos\" to be updated.

    try:
        # updateMembersBoardStarsPosByIdMemberByIdBoardStar()
        api_instance.update_members_board_stars_pos_by_id_member_by_id_board_star(id_member, id_board_star, key, token, members_board_stars_pos)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_board_stars_pos_by_id_member_by_id_board_star: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_star** | **str**| idBoardStar | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_board_stars_pos** | [**MembersBoardStarsPos**](MembersBoardStarsPos.md)| Attributes of \&quot;Members Board Stars Pos\&quot; to be updated. | 

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

# **update_members_by_id_member**
> update_members_by_id_member(id_member, key, token, members)

updateMembersByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members import Members
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members = openapi_client.Members() # Members | Attributes of \"Members\" to be updated.

    try:
        # updateMembersByIdMember()
        api_instance.update_members_by_id_member(id_member, key, token, members)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members** | [**Members**](Members.md)| Attributes of \&quot;Members\&quot; to be updated. | 

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

# **update_members_custom_board_backgrounds_by_id_member_by_id_board_background**
> update_members_custom_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token, members_custom_board_backgrounds)

updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_custom_board_backgrounds import MembersCustomBoardBackgrounds
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_board_background = 'id_board_background_example' # str | idBoardBackground
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_custom_board_backgrounds = openapi_client.MembersCustomBoardBackgrounds() # MembersCustomBoardBackgrounds | Attributes of \"Members Custom Board Backgrounds\" to be updated.

    try:
        # updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()
        api_instance.update_members_custom_board_backgrounds_by_id_member_by_id_board_background(id_member, id_board_background, key, token, members_custom_board_backgrounds)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_custom_board_backgrounds_by_id_member_by_id_board_background: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_board_background** | **str**| idBoardBackground | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_custom_board_backgrounds** | [**MembersCustomBoardBackgrounds**](MembersCustomBoardBackgrounds.md)| Attributes of \&quot;Members Custom Board Backgrounds\&quot; to be updated. | 

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

# **update_members_full_name_by_id_member**
> update_members_full_name_by_id_member(id_member, key, token, members_full_name)

updateMembersFullNameByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_full_name import MembersFullName
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_full_name = openapi_client.MembersFullName() # MembersFullName | Attributes of \"Members Full Name\" to be updated.

    try:
        # updateMembersFullNameByIdMember()
        api_instance.update_members_full_name_by_id_member(id_member, key, token, members_full_name)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_full_name_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_full_name** | [**MembersFullName**](MembersFullName.md)| Attributes of \&quot;Members Full Name\&quot; to be updated. | 

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

# **update_members_initials_by_id_member**
> update_members_initials_by_id_member(id_member, key, token, members_initials)

updateMembersInitialsByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_initials import MembersInitials
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_initials = openapi_client.MembersInitials() # MembersInitials | Attributes of \"Members Initials\" to be updated.

    try:
        # updateMembersInitialsByIdMember()
        api_instance.update_members_initials_by_id_member(id_member, key, token, members_initials)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_initials_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_initials** | [**MembersInitials**](MembersInitials.md)| Attributes of \&quot;Members Initials\&quot; to be updated. | 

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

# **update_members_prefs_color_blind_by_id_member**
> update_members_prefs_color_blind_by_id_member(id_member, key, token, prefs_color_blind)

updateMembersPrefsColorBlindByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_color_blind import PrefsColorBlind
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_color_blind = openapi_client.PrefsColorBlind() # PrefsColorBlind | Attributes of \"Prefs Color Blind\" to be updated.

    try:
        # updateMembersPrefsColorBlindByIdMember()
        api_instance.update_members_prefs_color_blind_by_id_member(id_member, key, token, prefs_color_blind)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_prefs_color_blind_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_color_blind** | [**PrefsColorBlind**](PrefsColorBlind.md)| Attributes of \&quot;Prefs Color Blind\&quot; to be updated. | 

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

# **update_members_prefs_locale_by_id_member**
> update_members_prefs_locale_by_id_member(id_member, key, token, prefs_locale)

updateMembersPrefsLocaleByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_locale import PrefsLocale
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_locale = openapi_client.PrefsLocale() # PrefsLocale | Attributes of \"Prefs Locale\" to be updated.

    try:
        # updateMembersPrefsLocaleByIdMember()
        api_instance.update_members_prefs_locale_by_id_member(id_member, key, token, prefs_locale)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_prefs_locale_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_locale** | [**PrefsLocale**](PrefsLocale.md)| Attributes of \&quot;Prefs Locale\&quot; to be updated. | 

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

# **update_members_prefs_minutes_between_summaries_by_id_member**
> update_members_prefs_minutes_between_summaries_by_id_member(id_member, key, token, prefs_minutes_between_summaries)

updateMembersPrefsMinutesBetweenSummariesByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.prefs_minutes_between_summaries import PrefsMinutesBetweenSummaries
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    prefs_minutes_between_summaries = openapi_client.PrefsMinutesBetweenSummaries() # PrefsMinutesBetweenSummaries | Attributes of \"Prefs Minutes Between Summaries\" to be updated.

    try:
        # updateMembersPrefsMinutesBetweenSummariesByIdMember()
        api_instance.update_members_prefs_minutes_between_summaries_by_id_member(id_member, key, token, prefs_minutes_between_summaries)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_prefs_minutes_between_summaries_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **prefs_minutes_between_summaries** | [**PrefsMinutesBetweenSummaries**](PrefsMinutesBetweenSummaries.md)| Attributes of \&quot;Prefs Minutes Between Summaries\&quot; to be updated. | 

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

# **update_members_saved_searches_by_id_member_by_id_saved_search**
> update_members_saved_searches_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token, members_saved_searches)

updateMembersSavedSearchesByIdMemberByIdSavedSearch()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_saved_searches import MembersSavedSearches
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_saved_search = 'id_saved_search_example' # str | idSavedSearch
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_saved_searches = openapi_client.MembersSavedSearches() # MembersSavedSearches | Attributes of \"Members Saved Searches\" to be updated.

    try:
        # updateMembersSavedSearchesByIdMemberByIdSavedSearch()
        api_instance.update_members_saved_searches_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token, members_saved_searches)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_saved_searches_by_id_member_by_id_saved_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_saved_search** | **str**| idSavedSearch | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_saved_searches** | [**MembersSavedSearches**](MembersSavedSearches.md)| Attributes of \&quot;Members Saved Searches\&quot; to be updated. | 

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

# **update_members_saved_searches_name_by_id_member_by_id_saved_search**
> update_members_saved_searches_name_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token, members_saved_searches_name)

updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_saved_searches_name import MembersSavedSearchesName
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_saved_search = 'id_saved_search_example' # str | idSavedSearch
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_saved_searches_name = openapi_client.MembersSavedSearchesName() # MembersSavedSearchesName | Attributes of \"Members Saved Searches Name\" to be updated.

    try:
        # updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()
        api_instance.update_members_saved_searches_name_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token, members_saved_searches_name)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_saved_searches_name_by_id_member_by_id_saved_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_saved_search** | **str**| idSavedSearch | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_saved_searches_name** | [**MembersSavedSearchesName**](MembersSavedSearchesName.md)| Attributes of \&quot;Members Saved Searches Name\&quot; to be updated. | 

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

# **update_members_saved_searches_pos_by_id_member_by_id_saved_search**
> update_members_saved_searches_pos_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token, members_saved_searches_pos)

updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_saved_searches_pos import MembersSavedSearchesPos
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_saved_search = 'id_saved_search_example' # str | idSavedSearch
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_saved_searches_pos = openapi_client.MembersSavedSearchesPos() # MembersSavedSearchesPos | Attributes of \"Members Saved Searches Pos\" to be updated.

    try:
        # updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()
        api_instance.update_members_saved_searches_pos_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token, members_saved_searches_pos)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_saved_searches_pos_by_id_member_by_id_saved_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_saved_search** | **str**| idSavedSearch | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_saved_searches_pos** | [**MembersSavedSearchesPos**](MembersSavedSearchesPos.md)| Attributes of \&quot;Members Saved Searches Pos\&quot; to be updated. | 

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

# **update_members_saved_searches_query_by_id_member_by_id_saved_search**
> update_members_saved_searches_query_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token, members_saved_searches_query)

updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_saved_searches_query import MembersSavedSearchesQuery
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    id_saved_search = 'id_saved_search_example' # str | idSavedSearch
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_saved_searches_query = openapi_client.MembersSavedSearchesQuery() # MembersSavedSearchesQuery | Attributes of \"Members Saved Searches Query\" to be updated.

    try:
        # updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()
        api_instance.update_members_saved_searches_query_by_id_member_by_id_saved_search(id_member, id_saved_search, key, token, members_saved_searches_query)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_saved_searches_query_by_id_member_by_id_saved_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **id_saved_search** | **str**| idSavedSearch | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_saved_searches_query** | [**MembersSavedSearchesQuery**](MembersSavedSearchesQuery.md)| Attributes of \&quot;Members Saved Searches Query\&quot; to be updated. | 

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

# **update_members_username_by_id_member**
> update_members_username_by_id_member(id_member, key, token, members_username)

updateMembersUsernameByIdMember()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.members_username import MembersUsername
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
    api_instance = openapi_client.MemberApi(api_client)
    id_member = 'id_member_example' # str | idMember or username
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    members_username = openapi_client.MembersUsername() # MembersUsername | Attributes of \"Members Username\" to be updated.

    try:
        # updateMembersUsernameByIdMember()
        api_instance.update_members_username_by_id_member(id_member, key, token, members_username)
    except Exception as e:
        print("Exception when calling MemberApi->update_members_username_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_member** | **str**| idMember or username | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **members_username** | [**MembersUsername**](MembersUsername.md)| Attributes of \&quot;Members Username\&quot; to be updated. | 

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

