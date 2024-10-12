# openapi_client.CardApi

All URIs are relative to *https://trello.com/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_cards**](CardApi.md#add_cards) | **POST** /cards | addCards()
[**add_cards_actions_comments_by_id_card**](CardApi.md#add_cards_actions_comments_by_id_card) | **POST** /cards/{idCard}/actions/comments | addCardsActionsCommentsByIdCard()
[**add_cards_attachments_by_id_card**](CardApi.md#add_cards_attachments_by_id_card) | **POST** /cards/{idCard}/attachments | addCardsAttachmentsByIdCard()
[**add_cards_checklist_check_item_by_id_card_by_id_checklist**](CardApi.md#add_cards_checklist_check_item_by_id_card_by_id_checklist) | **POST** /cards/{idCard}/checklist/{idChecklist}/checkItem | addCardsChecklistCheckItemByIdCardByIdChecklist()
[**add_cards_checklist_check_item_convert_to_card_by_id_card_by_id_checklist_by_id_check_item**](CardApi.md#add_cards_checklist_check_item_convert_to_card_by_id_card_by_id_checklist_by_id_check_item) | **POST** /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/convertToCard | addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()
[**add_cards_checklists_by_id_card**](CardApi.md#add_cards_checklists_by_id_card) | **POST** /cards/{idCard}/checklists | addCardsChecklistsByIdCard()
[**add_cards_id_labels_by_id_card**](CardApi.md#add_cards_id_labels_by_id_card) | **POST** /cards/{idCard}/idLabels | addCardsIdLabelsByIdCard()
[**add_cards_id_members_by_id_card**](CardApi.md#add_cards_id_members_by_id_card) | **POST** /cards/{idCard}/idMembers | addCardsIdMembersByIdCard()
[**add_cards_labels_by_id_card**](CardApi.md#add_cards_labels_by_id_card) | **POST** /cards/{idCard}/labels | addCardsLabelsByIdCard()
[**add_cards_mark_associated_notifications_read_by_id_card**](CardApi.md#add_cards_mark_associated_notifications_read_by_id_card) | **POST** /cards/{idCard}/markAssociatedNotificationsRead | addCardsMarkAssociatedNotificationsReadByIdCard()
[**add_cards_members_voted_by_id_card**](CardApi.md#add_cards_members_voted_by_id_card) | **POST** /cards/{idCard}/membersVoted | addCardsMembersVotedByIdCard()
[**add_cards_stickers_by_id_card**](CardApi.md#add_cards_stickers_by_id_card) | **POST** /cards/{idCard}/stickers | addCardsStickersByIdCard()
[**delete_cards_actions_comments_by_id_card_by_id_action**](CardApi.md#delete_cards_actions_comments_by_id_card_by_id_action) | **DELETE** /cards/{idCard}/actions/{idAction}/comments | deleteCardsActionsCommentsByIdCardByIdAction()
[**delete_cards_attachments_by_id_card_by_id_attachment**](CardApi.md#delete_cards_attachments_by_id_card_by_id_attachment) | **DELETE** /cards/{idCard}/attachments/{idAttachment} | deleteCardsAttachmentsByIdCardByIdAttachment()
[**delete_cards_by_id_card**](CardApi.md#delete_cards_by_id_card) | **DELETE** /cards/{idCard} | deleteCardsByIdCard()
[**delete_cards_checklist_check_item_by_id_card_by_id_checklist_by_id_check_item**](CardApi.md#delete_cards_checklist_check_item_by_id_card_by_id_checklist_by_id_check_item) | **DELETE** /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem} | deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()
[**delete_cards_checklists_by_id_card_by_id_checklist**](CardApi.md#delete_cards_checklists_by_id_card_by_id_checklist) | **DELETE** /cards/{idCard}/checklists/{idChecklist} | deleteCardsChecklistsByIdCardByIdChecklist()
[**delete_cards_id_labels_by_id_card_by_id_label**](CardApi.md#delete_cards_id_labels_by_id_card_by_id_label) | **DELETE** /cards/{idCard}/idLabels/{idLabel} | deleteCardsIdLabelsByIdCardByIdLabel()
[**delete_cards_id_members_by_id_card_by_id_member**](CardApi.md#delete_cards_id_members_by_id_card_by_id_member) | **DELETE** /cards/{idCard}/idMembers/{idMember} | deleteCardsIdMembersByIdCardByIdMember()
[**delete_cards_labels_by_id_card_by_color**](CardApi.md#delete_cards_labels_by_id_card_by_color) | **DELETE** /cards/{idCard}/labels/{color} | deleteCardsLabelsByIdCardByColor()
[**delete_cards_members_voted_by_id_card_by_id_member**](CardApi.md#delete_cards_members_voted_by_id_card_by_id_member) | **DELETE** /cards/{idCard}/membersVoted/{idMember} | deleteCardsMembersVotedByIdCardByIdMember()
[**delete_cards_stickers_by_id_card_by_id_sticker**](CardApi.md#delete_cards_stickers_by_id_card_by_id_sticker) | **DELETE** /cards/{idCard}/stickers/{idSticker} | deleteCardsStickersByIdCardByIdSticker()
[**get_cards_actions_by_id_card**](CardApi.md#get_cards_actions_by_id_card) | **GET** /cards/{idCard}/actions | getCardsActionsByIdCard()
[**get_cards_attachments_by_id_card**](CardApi.md#get_cards_attachments_by_id_card) | **GET** /cards/{idCard}/attachments | getCardsAttachmentsByIdCard()
[**get_cards_attachments_by_id_card_by_id_attachment**](CardApi.md#get_cards_attachments_by_id_card_by_id_attachment) | **GET** /cards/{idCard}/attachments/{idAttachment} | getCardsAttachmentsByIdCardByIdAttachment()
[**get_cards_board_by_id_card**](CardApi.md#get_cards_board_by_id_card) | **GET** /cards/{idCard}/board | getCardsBoardByIdCard()
[**get_cards_board_by_id_card_by_field**](CardApi.md#get_cards_board_by_id_card_by_field) | **GET** /cards/{idCard}/board/{field} | getCardsBoardByIdCardByField()
[**get_cards_by_id_card**](CardApi.md#get_cards_by_id_card) | **GET** /cards/{idCard} | getCardsByIdCard()
[**get_cards_by_id_card_by_field**](CardApi.md#get_cards_by_id_card_by_field) | **GET** /cards/{idCard}/{field} | getCardsByIdCardByField()
[**get_cards_check_item_states_by_id_card**](CardApi.md#get_cards_check_item_states_by_id_card) | **GET** /cards/{idCard}/checkItemStates | getCardsCheckItemStatesByIdCard()
[**get_cards_checklists_by_id_card**](CardApi.md#get_cards_checklists_by_id_card) | **GET** /cards/{idCard}/checklists | getCardsChecklistsByIdCard()
[**get_cards_list_by_id_card**](CardApi.md#get_cards_list_by_id_card) | **GET** /cards/{idCard}/list | getCardsListByIdCard()
[**get_cards_list_by_id_card_by_field**](CardApi.md#get_cards_list_by_id_card_by_field) | **GET** /cards/{idCard}/list/{field} | getCardsListByIdCardByField()
[**get_cards_members_by_id_card**](CardApi.md#get_cards_members_by_id_card) | **GET** /cards/{idCard}/members | getCardsMembersByIdCard()
[**get_cards_members_voted_by_id_card**](CardApi.md#get_cards_members_voted_by_id_card) | **GET** /cards/{idCard}/membersVoted | getCardsMembersVotedByIdCard()
[**get_cards_stickers_by_id_card**](CardApi.md#get_cards_stickers_by_id_card) | **GET** /cards/{idCard}/stickers | getCardsStickersByIdCard()
[**get_cards_stickers_by_id_card_by_id_sticker**](CardApi.md#get_cards_stickers_by_id_card_by_id_sticker) | **GET** /cards/{idCard}/stickers/{idSticker} | getCardsStickersByIdCardByIdSticker()
[**update_cards_actions_comments_by_id_card_by_id_action**](CardApi.md#update_cards_actions_comments_by_id_card_by_id_action) | **PUT** /cards/{idCard}/actions/{idAction}/comments | updateCardsActionsCommentsByIdCardByIdAction()
[**update_cards_by_id_card**](CardApi.md#update_cards_by_id_card) | **PUT** /cards/{idCard} | updateCardsByIdCard()
[**update_cards_checklist_check_item_by_id_card_by_id_checklist_current_by_id_check_item**](CardApi.md#update_cards_checklist_check_item_by_id_card_by_id_checklist_current_by_id_check_item) | **PUT** /cards/{idCard}/checklist/{idChecklistCurrent}/checkItem/{idCheckItem} | updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()
[**update_cards_checklist_check_item_name_by_id_card_by_id_checklist_by_id_check_item**](CardApi.md#update_cards_checklist_check_item_name_by_id_card_by_id_checklist_by_id_check_item) | **PUT** /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/name | updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()
[**update_cards_checklist_check_item_pos_by_id_card_by_id_checklist_by_id_check_item**](CardApi.md#update_cards_checklist_check_item_pos_by_id_card_by_id_checklist_by_id_check_item) | **PUT** /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/pos | updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()
[**update_cards_checklist_check_item_state_by_id_card_by_id_checklist_by_id_check_item**](CardApi.md#update_cards_checklist_check_item_state_by_id_card_by_id_checklist_by_id_check_item) | **PUT** /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/state | updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()
[**update_cards_closed_by_id_card**](CardApi.md#update_cards_closed_by_id_card) | **PUT** /cards/{idCard}/closed | updateCardsClosedByIdCard()
[**update_cards_desc_by_id_card**](CardApi.md#update_cards_desc_by_id_card) | **PUT** /cards/{idCard}/desc | updateCardsDescByIdCard()
[**update_cards_due_by_id_card**](CardApi.md#update_cards_due_by_id_card) | **PUT** /cards/{idCard}/due | updateCardsDueByIdCard()
[**update_cards_id_attachment_cover_by_id_card**](CardApi.md#update_cards_id_attachment_cover_by_id_card) | **PUT** /cards/{idCard}/idAttachmentCover | updateCardsIdAttachmentCoverByIdCard()
[**update_cards_id_board_by_id_card**](CardApi.md#update_cards_id_board_by_id_card) | **PUT** /cards/{idCard}/idBoard | updateCardsIdBoardByIdCard()
[**update_cards_id_list_by_id_card**](CardApi.md#update_cards_id_list_by_id_card) | **PUT** /cards/{idCard}/idList | updateCardsIdListByIdCard()
[**update_cards_id_members_by_id_card**](CardApi.md#update_cards_id_members_by_id_card) | **PUT** /cards/{idCard}/idMembers | updateCardsIdMembersByIdCard()
[**update_cards_labels_by_id_card**](CardApi.md#update_cards_labels_by_id_card) | **PUT** /cards/{idCard}/labels | updateCardsLabelsByIdCard()
[**update_cards_name_by_id_card**](CardApi.md#update_cards_name_by_id_card) | **PUT** /cards/{idCard}/name | updateCardsNameByIdCard()
[**update_cards_pos_by_id_card**](CardApi.md#update_cards_pos_by_id_card) | **PUT** /cards/{idCard}/pos | updateCardsPosByIdCard()
[**update_cards_stickers_by_id_card_by_id_sticker**](CardApi.md#update_cards_stickers_by_id_card_by_id_sticker) | **PUT** /cards/{idCard}/stickers/{idSticker} | updateCardsStickersByIdCardByIdSticker()
[**update_cards_subscribed_by_id_card**](CardApi.md#update_cards_subscribed_by_id_card) | **PUT** /cards/{idCard}/subscribed | updateCardsSubscribedByIdCard()


# **add_cards**
> add_cards(key, token, cards)

addCards()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards import Cards
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
    api_instance = openapi_client.CardApi(api_client)
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards = openapi_client.Cards() # Cards | Attributes of \"Cards\" to be added.

    try:
        # addCards()
        api_instance.add_cards(key, token, cards)
    except Exception as e:
        print("Exception when calling CardApi->add_cards: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards** | [**Cards**](Cards.md)| Attributes of \&quot;Cards\&quot; to be added. | 

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

# **add_cards_actions_comments_by_id_card**
> add_cards_actions_comments_by_id_card(id_card, key, token, actions_comments)

addCardsActionsCommentsByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.actions_comments import ActionsComments
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    actions_comments = openapi_client.ActionsComments() # ActionsComments | Attributes of \"Actions Comments\" to be added.

    try:
        # addCardsActionsCommentsByIdCard()
        api_instance.add_cards_actions_comments_by_id_card(id_card, key, token, actions_comments)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_actions_comments_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **actions_comments** | [**ActionsComments**](ActionsComments.md)| Attributes of \&quot;Actions Comments\&quot; to be added. | 

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

# **add_cards_attachments_by_id_card**
> add_cards_attachments_by_id_card(id_card, key, token, cards_attachments)

addCardsAttachmentsByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_attachments import CardsAttachments
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_attachments = openapi_client.CardsAttachments() # CardsAttachments | Attributes of \"Cards Attachments\" to be added.

    try:
        # addCardsAttachmentsByIdCard()
        api_instance.add_cards_attachments_by_id_card(id_card, key, token, cards_attachments)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_attachments_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_attachments** | [**CardsAttachments**](CardsAttachments.md)| Attributes of \&quot;Cards Attachments\&quot; to be added. | 

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

# **add_cards_checklist_check_item_by_id_card_by_id_checklist**
> add_cards_checklist_check_item_by_id_card_by_id_checklist(id_card, id_checklist, key, token, cards_checklist_check_item)

addCardsChecklistCheckItemByIdCardByIdChecklist()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_checklist_check_item import CardsChecklistCheckItem
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_checklist = 'id_checklist_example' # str | idChecklist
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_checklist_check_item = openapi_client.CardsChecklistCheckItem() # CardsChecklistCheckItem | Attributes of \"Cards Checklist Check Item\" to be added.

    try:
        # addCardsChecklistCheckItemByIdCardByIdChecklist()
        api_instance.add_cards_checklist_check_item_by_id_card_by_id_checklist(id_card, id_checklist, key, token, cards_checklist_check_item)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_checklist_check_item_by_id_card_by_id_checklist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_checklist** | **str**| idChecklist | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_checklist_check_item** | [**CardsChecklistCheckItem**](CardsChecklistCheckItem.md)| Attributes of \&quot;Cards Checklist Check Item\&quot; to be added. | 

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

# **add_cards_checklist_check_item_convert_to_card_by_id_card_by_id_checklist_by_id_check_item**
> add_cards_checklist_check_item_convert_to_card_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token)

addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_checklist = 'id_checklist_example' # str | idChecklist
    id_check_item = 'id_check_item_example' # str | idCheckItem
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()
        api_instance.add_cards_checklist_check_item_convert_to_card_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_checklist_check_item_convert_to_card_by_id_card_by_id_checklist_by_id_check_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_checklist** | **str**| idChecklist | 
 **id_check_item** | **str**| idCheckItem | 
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

# **add_cards_checklists_by_id_card**
> add_cards_checklists_by_id_card(id_card, key, token, cards_checklists)

addCardsChecklistsByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_checklists import CardsChecklists
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_checklists = openapi_client.CardsChecklists() # CardsChecklists | Attributes of \"Cards Checklists\" to be added.

    try:
        # addCardsChecklistsByIdCard()
        api_instance.add_cards_checklists_by_id_card(id_card, key, token, cards_checklists)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_checklists_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_checklists** | [**CardsChecklists**](CardsChecklists.md)| Attributes of \&quot;Cards Checklists\&quot; to be added. | 

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

# **add_cards_id_labels_by_id_card**
> add_cards_id_labels_by_id_card(id_card, key, token, cards_id_labels)

addCardsIdLabelsByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_id_labels import CardsIdLabels
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_id_labels = openapi_client.CardsIdLabels() # CardsIdLabels | Attributes of \"Cards Id Labels\" to be added.

    try:
        # addCardsIdLabelsByIdCard()
        api_instance.add_cards_id_labels_by_id_card(id_card, key, token, cards_id_labels)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_id_labels_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_id_labels** | [**CardsIdLabels**](CardsIdLabels.md)| Attributes of \&quot;Cards Id Labels\&quot; to be added. | 

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

# **add_cards_id_members_by_id_card**
> add_cards_id_members_by_id_card(id_card, key, token, cards_id_members)

addCardsIdMembersByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_id_members import CardsIdMembers
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_id_members = openapi_client.CardsIdMembers() # CardsIdMembers | Attributes of \"Cards Id Members\" to be added.

    try:
        # addCardsIdMembersByIdCard()
        api_instance.add_cards_id_members_by_id_card(id_card, key, token, cards_id_members)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_id_members_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_id_members** | [**CardsIdMembers**](CardsIdMembers.md)| Attributes of \&quot;Cards Id Members\&quot; to be added. | 

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

# **add_cards_labels_by_id_card**
> add_cards_labels_by_id_card(id_card, key, token, cards_labels)

addCardsLabelsByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_labels import CardsLabels
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_labels = openapi_client.CardsLabels() # CardsLabels | Attributes of \"Cards Labels\" to be added.

    try:
        # addCardsLabelsByIdCard()
        api_instance.add_cards_labels_by_id_card(id_card, key, token, cards_labels)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_labels_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_labels** | [**CardsLabels**](CardsLabels.md)| Attributes of \&quot;Cards Labels\&quot; to be added. | 

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

# **add_cards_mark_associated_notifications_read_by_id_card**
> add_cards_mark_associated_notifications_read_by_id_card(id_card, key, token)

addCardsMarkAssociatedNotificationsReadByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # addCardsMarkAssociatedNotificationsReadByIdCard()
        api_instance.add_cards_mark_associated_notifications_read_by_id_card(id_card, key, token)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_mark_associated_notifications_read_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **add_cards_members_voted_by_id_card**
> add_cards_members_voted_by_id_card(id_card, key, token, cards_members_voted)

addCardsMembersVotedByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_members_voted import CardsMembersVoted
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_members_voted = openapi_client.CardsMembersVoted() # CardsMembersVoted | Attributes of \"Cards Members Voted\" to be added.

    try:
        # addCardsMembersVotedByIdCard()
        api_instance.add_cards_members_voted_by_id_card(id_card, key, token, cards_members_voted)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_members_voted_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_members_voted** | [**CardsMembersVoted**](CardsMembersVoted.md)| Attributes of \&quot;Cards Members Voted\&quot; to be added. | 

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

# **add_cards_stickers_by_id_card**
> add_cards_stickers_by_id_card(id_card, key, token, cards_stickers)

addCardsStickersByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_stickers import CardsStickers
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_stickers = openapi_client.CardsStickers() # CardsStickers | Attributes of \"Cards Stickers\" to be added.

    try:
        # addCardsStickersByIdCard()
        api_instance.add_cards_stickers_by_id_card(id_card, key, token, cards_stickers)
    except Exception as e:
        print("Exception when calling CardApi->add_cards_stickers_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_stickers** | [**CardsStickers**](CardsStickers.md)| Attributes of \&quot;Cards Stickers\&quot; to be added. | 

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

# **delete_cards_actions_comments_by_id_card_by_id_action**
> delete_cards_actions_comments_by_id_card_by_id_action(id_card, id_action, key, token)

deleteCardsActionsCommentsByIdCardByIdAction()

This can only be done by the original author of the comment, or someone with higher permissions than the original author.

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsActionsCommentsByIdCardByIdAction()
        api_instance.delete_cards_actions_comments_by_id_card_by_id_action(id_card, id_action, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_actions_comments_by_id_card_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **delete_cards_attachments_by_id_card_by_id_attachment**
> delete_cards_attachments_by_id_card_by_id_attachment(id_card, id_attachment, key, token)

deleteCardsAttachmentsByIdCardByIdAttachment()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_attachment = 'id_attachment_example' # str | idAttachment
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsAttachmentsByIdCardByIdAttachment()
        api_instance.delete_cards_attachments_by_id_card_by_id_attachment(id_card, id_attachment, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_attachments_by_id_card_by_id_attachment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_attachment** | **str**| idAttachment | 
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

# **delete_cards_by_id_card**
> delete_cards_by_id_card(id_card, key, token)

deleteCardsByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsByIdCard()
        api_instance.delete_cards_by_id_card(id_card, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **delete_cards_checklist_check_item_by_id_card_by_id_checklist_by_id_check_item**
> delete_cards_checklist_check_item_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token)

deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_checklist = 'id_checklist_example' # str | idChecklist
    id_check_item = 'id_check_item_example' # str | idCheckItem
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()
        api_instance.delete_cards_checklist_check_item_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_checklist_check_item_by_id_card_by_id_checklist_by_id_check_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_checklist** | **str**| idChecklist | 
 **id_check_item** | **str**| idCheckItem | 
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

# **delete_cards_checklists_by_id_card_by_id_checklist**
> delete_cards_checklists_by_id_card_by_id_checklist(id_card, id_checklist, key, token)

deleteCardsChecklistsByIdCardByIdChecklist()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_checklist = 'id_checklist_example' # str | idChecklist
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsChecklistsByIdCardByIdChecklist()
        api_instance.delete_cards_checklists_by_id_card_by_id_checklist(id_card, id_checklist, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_checklists_by_id_card_by_id_checklist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_checklist** | **str**| idChecklist | 
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

# **delete_cards_id_labels_by_id_card_by_id_label**
> delete_cards_id_labels_by_id_card_by_id_label(id_card, id_label, key, token)

deleteCardsIdLabelsByIdCardByIdLabel()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_label = 'id_label_example' # str | idLabel
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsIdLabelsByIdCardByIdLabel()
        api_instance.delete_cards_id_labels_by_id_card_by_id_label(id_card, id_label, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_id_labels_by_id_card_by_id_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_label** | **str**| idLabel | 
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

# **delete_cards_id_members_by_id_card_by_id_member**
> delete_cards_id_members_by_id_card_by_id_member(id_card, id_member, key, token)

deleteCardsIdMembersByIdCardByIdMember()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_member = 'id_member_example' # str | idMember
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsIdMembersByIdCardByIdMember()
        api_instance.delete_cards_id_members_by_id_card_by_id_member(id_card, id_member, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_id_members_by_id_card_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **delete_cards_labels_by_id_card_by_color**
> delete_cards_labels_by_id_card_by_color(id_card, color, key, token)

deleteCardsLabelsByIdCardByColor()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    color = 'color_example' # str | color
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsLabelsByIdCardByColor()
        api_instance.delete_cards_labels_by_id_card_by_color(id_card, color, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_labels_by_id_card_by_color: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **color** | **str**| color | 
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

# **delete_cards_members_voted_by_id_card_by_id_member**
> delete_cards_members_voted_by_id_card_by_id_member(id_card, id_member, key, token)

deleteCardsMembersVotedByIdCardByIdMember()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_member = 'id_member_example' # str | idMember
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsMembersVotedByIdCardByIdMember()
        api_instance.delete_cards_members_voted_by_id_card_by_id_member(id_card, id_member, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_members_voted_by_id_card_by_id_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **delete_cards_stickers_by_id_card_by_id_sticker**
> delete_cards_stickers_by_id_card_by_id_sticker(id_card, id_sticker, key, token)

deleteCardsStickersByIdCardByIdSticker()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_sticker = 'id_sticker_example' # str | idSticker
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # deleteCardsStickersByIdCardByIdSticker()
        api_instance.delete_cards_stickers_by_id_card_by_id_sticker(id_card, id_sticker, key, token)
    except Exception as e:
        print("Exception when calling CardApi->delete_cards_stickers_by_id_card_by_id_sticker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_sticker** | **str**| idSticker | 
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

# **get_cards_actions_by_id_card**
> get_cards_actions_by_id_card(id_card, key, token, entities=entities, display=display, filter=filter, fields=fields, limit=limit, format=format, since=since, before=before, page=page, id_models=id_models, member=member, member_fields=member_fields, member_creator=member_creator, member_creator_fields=member_creator_fields)

getCardsActionsByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    entities = 'entities_example' # str |  true or false (optional)
    display = 'display_example' # str |  true or false (optional)
    filter = 'commentCard and updateCard:idList' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional) (default to 'commentCard and updateCard:idList')
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
        # getCardsActionsByIdCard()
        api_instance.get_cards_actions_by_id_card(id_card, key, token, entities=entities, display=display, filter=filter, fields=fields, limit=limit, format=format, since=since, before=before, page=page, id_models=id_models, member=member, member_fields=member_fields, member_creator=member_creator, member_creator_fields=member_creator_fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_actions_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **entities** | **str**|  true or false | [optional] 
 **display** | **str**|  true or false | [optional] 
 **filter** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] [default to &#39;commentCard and updateCard:idList&#39;]
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

# **get_cards_attachments_by_id_card**
> get_cards_attachments_by_id_card(id_card, key, token, fields=fields, filter=filter)

getCardsAttachmentsByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url (optional) (default to 'all')
    filter = 'filter_example' # str | A boolean value or &quot;cover&quot; for only card cover attachments (optional)

    try:
        # getCardsAttachmentsByIdCard()
        api_instance.get_cards_attachments_by_id_card(id_card, key, token, fields=fields, filter=filter)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_attachments_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url | [optional] [default to &#39;all&#39;]
 **filter** | **str**| A boolean value or &amp;quot;cover&amp;quot; for only card cover attachments | [optional] 

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

# **get_cards_attachments_by_id_card_by_id_attachment**
> get_cards_attachments_by_id_card_by_id_attachment(id_card, id_attachment, key, token, fields=fields)

getCardsAttachmentsByIdCardByIdAttachment()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_attachment = 'id_attachment_example' # str | idAttachment
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url (optional) (default to 'all')

    try:
        # getCardsAttachmentsByIdCardByIdAttachment()
        api_instance.get_cards_attachments_by_id_card_by_id_attachment(id_card, id_attachment, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_attachments_by_id_card_by_id_attachment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_attachment** | **str**| idAttachment | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url | [optional] [default to &#39;all&#39;]

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

# **get_cards_board_by_id_card**
> get_cards_board_by_id_card(id_card, key, token, fields=fields)

getCardsBoardByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'all')

    try:
        # getCardsBoardByIdCard()
        api_instance.get_cards_board_by_id_card(id_card, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_board_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **get_cards_board_by_id_card_by_field**
> get_cards_board_by_id_card_by_field(id_card, var_field, key, token)

getCardsBoardByIdCardByField()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getCardsBoardByIdCardByField()
        api_instance.get_cards_board_by_id_card_by_field(id_card, var_field, key, token)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_board_by_id_card_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **get_cards_by_id_card**
> get_cards_by_id_card(id_card, key, token, actions=actions, actions_entities=actions_entities, actions_display=actions_display, actions_limit=actions_limit, action_fields=action_fields, action_member_creator_fields=action_member_creator_fields, attachments=attachments, attachment_fields=attachment_fields, members=members, member_fields=member_fields, members_voted=members_voted, member_voted_fields=member_voted_fields, check_item_states=check_item_states, check_item_state_fields=check_item_state_fields, checklists=checklists, checklist_fields=checklist_fields, board=board, board_fields=board_fields, list=list, list_fields=list_fields, stickers=stickers, sticker_fields=sticker_fields, fields=fields)

getCardsByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    actions = 'actions_example' # str | all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization (optional)
    actions_entities = 'actions_entities_example' # str |  true or false (optional)
    actions_display = 'actions_display_example' # str |  true or false (optional)
    actions_limit = '50' # str | a number from 0 to 1000 (optional) (default to '50')
    action_fields = 'all' # str | all or a comma-separated list of: data, date, idMemberCreator or type (optional) (default to 'all')
    action_member_creator_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    attachments = 'attachments_example' # str | A boolean value or &quot;cover&quot; for only card cover attachments (optional)
    attachment_fields = 'all' # str | all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url (optional) (default to 'all')
    members = 'members_example' # str |  true or false (optional)
    member_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    members_voted = 'members_voted_example' # str |  true or false (optional)
    member_voted_fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')
    check_item_states = 'check_item_states_example' # str |  true or false (optional)
    check_item_state_fields = 'all' # str | all or a comma-separated list of: idCheckItem or state (optional) (default to 'all')
    checklists = 'none' # str | One of: all or none (optional) (default to 'none')
    checklist_fields = 'all' # str | all or a comma-separated list of: idBoard, idCard, name or pos (optional) (default to 'all')
    board = 'board_example' # str |  true or false (optional)
    board_fields = 'name, desc, descData, closed, idOrganization, pinned, url and prefs' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'name, desc, descData, closed, idOrganization, pinned, url and prefs')
    list = 'list_example' # str |  true or false (optional)
    list_fields = 'all' # str | all or a comma-separated list of: closed, idBoard, name, pos or subscribed (optional) (default to 'all')
    stickers = 'stickers_example' # str |  true or false (optional)
    sticker_fields = 'all' # str | all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex (optional) (default to 'all')
    fields = 'badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl and url' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl and url')

    try:
        # getCardsByIdCard()
        api_instance.get_cards_by_id_card(id_card, key, token, actions=actions, actions_entities=actions_entities, actions_display=actions_display, actions_limit=actions_limit, action_fields=action_fields, action_member_creator_fields=action_member_creator_fields, attachments=attachments, attachment_fields=attachment_fields, members=members, member_fields=member_fields, members_voted=members_voted, member_voted_fields=member_voted_fields, check_item_states=check_item_states, check_item_state_fields=check_item_state_fields, checklists=checklists, checklist_fields=checklist_fields, board=board, board_fields=board_fields, list=list, list_fields=list_fields, stickers=stickers, sticker_fields=sticker_fields, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **actions** | **str**| all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization | [optional] 
 **actions_entities** | **str**|  true or false | [optional] 
 **actions_display** | **str**|  true or false | [optional] 
 **actions_limit** | **str**| a number from 0 to 1000 | [optional] [default to &#39;50&#39;]
 **action_fields** | **str**| all or a comma-separated list of: data, date, idMemberCreator or type | [optional] [default to &#39;all&#39;]
 **action_member_creator_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **attachments** | **str**| A boolean value or &amp;quot;cover&amp;quot; for only card cover attachments | [optional] 
 **attachment_fields** | **str**| all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url | [optional] [default to &#39;all&#39;]
 **members** | **str**|  true or false | [optional] 
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **members_voted** | **str**|  true or false | [optional] 
 **member_voted_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]
 **check_item_states** | **str**|  true or false | [optional] 
 **check_item_state_fields** | **str**| all or a comma-separated list of: idCheckItem or state | [optional] [default to &#39;all&#39;]
 **checklists** | **str**| One of: all or none | [optional] [default to &#39;none&#39;]
 **checklist_fields** | **str**| all or a comma-separated list of: idBoard, idCard, name or pos | [optional] [default to &#39;all&#39;]
 **board** | **str**|  true or false | [optional] 
 **board_fields** | **str**| all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url | [optional] [default to &#39;name, desc, descData, closed, idOrganization, pinned, url and prefs&#39;]
 **list** | **str**|  true or false | [optional] 
 **list_fields** | **str**| all or a comma-separated list of: closed, idBoard, name, pos or subscribed | [optional] [default to &#39;all&#39;]
 **stickers** | **str**|  true or false | [optional] 
 **sticker_fields** | **str**| all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex | [optional] [default to &#39;all&#39;]
 **fields** | **str**| all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url | [optional] [default to &#39;badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl and url&#39;]

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

# **get_cards_by_id_card_by_field**
> get_cards_by_id_card_by_field(id_card, var_field, key, token)

getCardsByIdCardByField()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getCardsByIdCardByField()
        api_instance.get_cards_by_id_card_by_field(id_card, var_field, key, token)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_by_id_card_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **get_cards_check_item_states_by_id_card**
> get_cards_check_item_states_by_id_card(id_card, key, token, fields=fields)

getCardsCheckItemStatesByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: idCheckItem or state (optional) (default to 'all')

    try:
        # getCardsCheckItemStatesByIdCard()
        api_instance.get_cards_check_item_states_by_id_card(id_card, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_check_item_states_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: idCheckItem or state | [optional] [default to &#39;all&#39;]

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

# **get_cards_checklists_by_id_card**
> get_cards_checklists_by_id_card(id_card, key, token, cards=cards, card_fields=card_fields, check_items=check_items, check_item_fields=check_item_fields, filter=filter, fields=fields)

getCardsChecklistsByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards = 'none' # str | One of: all, closed, none, open or visible (optional) (default to 'none')
    card_fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')
    check_items = 'all' # str | One of: all or none (optional) (default to 'all')
    check_item_fields = 'name, nameData, pos and state' # str | all or a comma-separated list of: name, nameData, pos, state or type (optional) (default to 'name, nameData, pos and state')
    filter = 'all' # str | One of: all or none (optional) (default to 'all')
    fields = 'all' # str | all or a comma-separated list of: idBoard, idCard, name or pos (optional) (default to 'all')

    try:
        # getCardsChecklistsByIdCard()
        api_instance.get_cards_checklists_by_id_card(id_card, key, token, cards=cards, card_fields=card_fields, check_items=check_items, check_item_fields=check_item_fields, filter=filter, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_checklists_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **get_cards_list_by_id_card**
> get_cards_list_by_id_card(id_card, key, token, fields=fields)

getCardsListByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: closed, idBoard, name, pos or subscribed (optional) (default to 'all')

    try:
        # getCardsListByIdCard()
        api_instance.get_cards_list_by_id_card(id_card, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_list_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **get_cards_list_by_id_card_by_field**
> get_cards_list_by_id_card_by_field(id_card, var_field, key, token)

getCardsListByIdCardByField()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    var_field = 'var_field_example' # str | field
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>

    try:
        # getCardsListByIdCardByField()
        api_instance.get_cards_list_by_id_card_by_field(id_card, var_field, key, token)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_list_by_id_card_by_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
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

# **get_cards_members_by_id_card**
> get_cards_members_by_id_card(id_card, key, token, fields=fields)

getCardsMembersByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')

    try:
        # getCardsMembersByIdCard()
        api_instance.get_cards_members_by_id_card(id_card, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_members_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]

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

# **get_cards_members_voted_by_id_card**
> get_cards_members_voted_by_id_card(id_card, key, token, fields=fields)

getCardsMembersVotedByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'avatarHash, fullName, initials and username' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials and username')

    try:
        # getCardsMembersVotedByIdCard()
        api_instance.get_cards_members_voted_by_id_card(id_card, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_members_voted_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials and username&#39;]

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

# **get_cards_stickers_by_id_card**
> get_cards_stickers_by_id_card(id_card, key, token, fields=fields)

getCardsStickersByIdCard()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex (optional) (default to 'all')

    try:
        # getCardsStickersByIdCard()
        api_instance.get_cards_stickers_by_id_card(id_card, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_stickers_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex | [optional] [default to &#39;all&#39;]

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

# **get_cards_stickers_by_id_card_by_id_sticker**
> get_cards_stickers_by_id_card_by_id_sticker(id_card, id_sticker, key, token, fields=fields)

getCardsStickersByIdCardByIdSticker()

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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_sticker = 'id_sticker_example' # str | idSticker
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    fields = 'all' # str | all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex (optional) (default to 'all')

    try:
        # getCardsStickersByIdCardByIdSticker()
        api_instance.get_cards_stickers_by_id_card_by_id_sticker(id_card, id_sticker, key, token, fields=fields)
    except Exception as e:
        print("Exception when calling CardApi->get_cards_stickers_by_id_card_by_id_sticker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_sticker** | **str**| idSticker | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **fields** | **str**| all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex | [optional] [default to &#39;all&#39;]

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

# **update_cards_actions_comments_by_id_card_by_id_action**
> update_cards_actions_comments_by_id_card_by_id_action(id_card, id_action, key, token, cards_actions_comments)

updateCardsActionsCommentsByIdCardByIdAction()

This can only be done by the original author of the comment.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_actions_comments import CardsActionsComments
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_action = 'id_action_example' # str | idAction
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_actions_comments = openapi_client.CardsActionsComments() # CardsActionsComments | Attributes of \"Cards Actions Comments\" to be updated.

    try:
        # updateCardsActionsCommentsByIdCardByIdAction()
        api_instance.update_cards_actions_comments_by_id_card_by_id_action(id_card, id_action, key, token, cards_actions_comments)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_actions_comments_by_id_card_by_id_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_action** | **str**| idAction | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_actions_comments** | [**CardsActionsComments**](CardsActionsComments.md)| Attributes of \&quot;Cards Actions Comments\&quot; to be updated. | 

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

# **update_cards_by_id_card**
> update_cards_by_id_card(id_card, key, token, cards)

updateCardsByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards import Cards
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards = openapi_client.Cards() # Cards | Attributes of \"Cards\" to be updated.

    try:
        # updateCardsByIdCard()
        api_instance.update_cards_by_id_card(id_card, key, token, cards)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards** | [**Cards**](Cards.md)| Attributes of \&quot;Cards\&quot; to be updated. | 

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

# **update_cards_checklist_check_item_by_id_card_by_id_checklist_current_by_id_check_item**
> update_cards_checklist_check_item_by_id_card_by_id_checklist_current_by_id_check_item(id_card, id_checklist_current, id_check_item, key, token, cards_checklist_id_checklist_current_check_item)

updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_checklist_id_checklist_current_check_item import CardsChecklistIdChecklistCurrentCheckItem
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_checklist_current = 'id_checklist_current_example' # str | idChecklistCurrent
    id_check_item = 'id_check_item_example' # str | idCheckItem
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_checklist_id_checklist_current_check_item = openapi_client.CardsChecklistIdChecklistCurrentCheckItem() # CardsChecklistIdChecklistCurrentCheckItem | Attributes of \"Cards Checklist Id Checklist Current Check Item\" to be updated.

    try:
        # updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()
        api_instance.update_cards_checklist_check_item_by_id_card_by_id_checklist_current_by_id_check_item(id_card, id_checklist_current, id_check_item, key, token, cards_checklist_id_checklist_current_check_item)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_checklist_check_item_by_id_card_by_id_checklist_current_by_id_check_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_checklist_current** | **str**| idChecklistCurrent | 
 **id_check_item** | **str**| idCheckItem | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_checklist_id_checklist_current_check_item** | [**CardsChecklistIdChecklistCurrentCheckItem**](CardsChecklistIdChecklistCurrentCheckItem.md)| Attributes of \&quot;Cards Checklist Id Checklist Current Check Item\&quot; to be updated. | 

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

# **update_cards_checklist_check_item_name_by_id_card_by_id_checklist_by_id_check_item**
> update_cards_checklist_check_item_name_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token, cards_checklist_check_item_name)

updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_checklist_check_item_name import CardsChecklistCheckItemName
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_checklist = 'id_checklist_example' # str | idChecklist
    id_check_item = 'id_check_item_example' # str | idCheckItem
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_checklist_check_item_name = openapi_client.CardsChecklistCheckItemName() # CardsChecklistCheckItemName | Attributes of \"Cards Checklist Check Item Name\" to be updated.

    try:
        # updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()
        api_instance.update_cards_checklist_check_item_name_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token, cards_checklist_check_item_name)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_checklist_check_item_name_by_id_card_by_id_checklist_by_id_check_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_checklist** | **str**| idChecklist | 
 **id_check_item** | **str**| idCheckItem | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_checklist_check_item_name** | [**CardsChecklistCheckItemName**](CardsChecklistCheckItemName.md)| Attributes of \&quot;Cards Checklist Check Item Name\&quot; to be updated. | 

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

# **update_cards_checklist_check_item_pos_by_id_card_by_id_checklist_by_id_check_item**
> update_cards_checklist_check_item_pos_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token, cards_checklist_check_item_pos)

updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_checklist_check_item_pos import CardsChecklistCheckItemPos
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_checklist = 'id_checklist_example' # str | idChecklist
    id_check_item = 'id_check_item_example' # str | idCheckItem
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_checklist_check_item_pos = openapi_client.CardsChecklistCheckItemPos() # CardsChecklistCheckItemPos | Attributes of \"Cards Checklist Check Item Pos\" to be updated.

    try:
        # updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()
        api_instance.update_cards_checklist_check_item_pos_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token, cards_checklist_check_item_pos)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_checklist_check_item_pos_by_id_card_by_id_checklist_by_id_check_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_checklist** | **str**| idChecklist | 
 **id_check_item** | **str**| idCheckItem | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_checklist_check_item_pos** | [**CardsChecklistCheckItemPos**](CardsChecklistCheckItemPos.md)| Attributes of \&quot;Cards Checklist Check Item Pos\&quot; to be updated. | 

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

# **update_cards_checklist_check_item_state_by_id_card_by_id_checklist_by_id_check_item**
> update_cards_checklist_check_item_state_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token, cards_checklist_check_item_state)

updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_checklist_check_item_state import CardsChecklistCheckItemState
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_checklist = 'id_checklist_example' # str | idChecklist
    id_check_item = 'id_check_item_example' # str | idCheckItem
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_checklist_check_item_state = openapi_client.CardsChecklistCheckItemState() # CardsChecklistCheckItemState | Attributes of \"Cards Checklist Check Item State\" to be updated.

    try:
        # updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()
        api_instance.update_cards_checklist_check_item_state_by_id_card_by_id_checklist_by_id_check_item(id_card, id_checklist, id_check_item, key, token, cards_checklist_check_item_state)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_checklist_check_item_state_by_id_card_by_id_checklist_by_id_check_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_checklist** | **str**| idChecklist | 
 **id_check_item** | **str**| idCheckItem | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_checklist_check_item_state** | [**CardsChecklistCheckItemState**](CardsChecklistCheckItemState.md)| Attributes of \&quot;Cards Checklist Check Item State\&quot; to be updated. | 

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

# **update_cards_closed_by_id_card**
> update_cards_closed_by_id_card(id_card, key, token, cards_closed)

updateCardsClosedByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_closed import CardsClosed
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_closed = openapi_client.CardsClosed() # CardsClosed | Attributes of \"Cards Closed\" to be updated.

    try:
        # updateCardsClosedByIdCard()
        api_instance.update_cards_closed_by_id_card(id_card, key, token, cards_closed)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_closed_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_closed** | [**CardsClosed**](CardsClosed.md)| Attributes of \&quot;Cards Closed\&quot; to be updated. | 

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

# **update_cards_desc_by_id_card**
> update_cards_desc_by_id_card(id_card, key, token, cards_desc)

updateCardsDescByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_desc import CardsDesc
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_desc = openapi_client.CardsDesc() # CardsDesc | Attributes of \"Cards Desc\" to be updated.

    try:
        # updateCardsDescByIdCard()
        api_instance.update_cards_desc_by_id_card(id_card, key, token, cards_desc)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_desc_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_desc** | [**CardsDesc**](CardsDesc.md)| Attributes of \&quot;Cards Desc\&quot; to be updated. | 

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

# **update_cards_due_by_id_card**
> update_cards_due_by_id_card(id_card, key, token, cards_due)

updateCardsDueByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_due import CardsDue
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_due = openapi_client.CardsDue() # CardsDue | Attributes of \"Cards Due\" to be updated.

    try:
        # updateCardsDueByIdCard()
        api_instance.update_cards_due_by_id_card(id_card, key, token, cards_due)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_due_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_due** | [**CardsDue**](CardsDue.md)| Attributes of \&quot;Cards Due\&quot; to be updated. | 

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

# **update_cards_id_attachment_cover_by_id_card**
> update_cards_id_attachment_cover_by_id_card(id_card, key, token, cards_id_attachment_cover)

updateCardsIdAttachmentCoverByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_id_attachment_cover import CardsIdAttachmentCover
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_id_attachment_cover = openapi_client.CardsIdAttachmentCover() # CardsIdAttachmentCover | Attributes of \"Cards Id Attachment Cover\" to be updated.

    try:
        # updateCardsIdAttachmentCoverByIdCard()
        api_instance.update_cards_id_attachment_cover_by_id_card(id_card, key, token, cards_id_attachment_cover)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_id_attachment_cover_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_id_attachment_cover** | [**CardsIdAttachmentCover**](CardsIdAttachmentCover.md)| Attributes of \&quot;Cards Id Attachment Cover\&quot; to be updated. | 

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

# **update_cards_id_board_by_id_card**
> update_cards_id_board_by_id_card(id_card, key, token, cards_id_board)

updateCardsIdBoardByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_id_board import CardsIdBoard
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_id_board = openapi_client.CardsIdBoard() # CardsIdBoard | Attributes of \"Cards Id Board\" to be updated.

    try:
        # updateCardsIdBoardByIdCard()
        api_instance.update_cards_id_board_by_id_card(id_card, key, token, cards_id_board)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_id_board_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_id_board** | [**CardsIdBoard**](CardsIdBoard.md)| Attributes of \&quot;Cards Id Board\&quot; to be updated. | 

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

# **update_cards_id_list_by_id_card**
> update_cards_id_list_by_id_card(id_card, key, token, cards_id_list)

updateCardsIdListByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_id_list import CardsIdList
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_id_list = openapi_client.CardsIdList() # CardsIdList | Attributes of \"Cards Id List\" to be updated.

    try:
        # updateCardsIdListByIdCard()
        api_instance.update_cards_id_list_by_id_card(id_card, key, token, cards_id_list)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_id_list_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_id_list** | [**CardsIdList**](CardsIdList.md)| Attributes of \&quot;Cards Id List\&quot; to be updated. | 

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

# **update_cards_id_members_by_id_card**
> update_cards_id_members_by_id_card(id_card, key, token, cards_id_members)

updateCardsIdMembersByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_id_members import CardsIdMembers
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_id_members = openapi_client.CardsIdMembers() # CardsIdMembers | Attributes of \"Cards Id Members\" to be updated.

    try:
        # updateCardsIdMembersByIdCard()
        api_instance.update_cards_id_members_by_id_card(id_card, key, token, cards_id_members)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_id_members_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_id_members** | [**CardsIdMembers**](CardsIdMembers.md)| Attributes of \&quot;Cards Id Members\&quot; to be updated. | 

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

# **update_cards_labels_by_id_card**
> update_cards_labels_by_id_card(id_card, key, token, cards_labels)

updateCardsLabelsByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_labels import CardsLabels
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_labels = openapi_client.CardsLabels() # CardsLabels | Attributes of \"Cards Labels\" to be updated.

    try:
        # updateCardsLabelsByIdCard()
        api_instance.update_cards_labels_by_id_card(id_card, key, token, cards_labels)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_labels_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_labels** | [**CardsLabels**](CardsLabels.md)| Attributes of \&quot;Cards Labels\&quot; to be updated. | 

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

# **update_cards_name_by_id_card**
> update_cards_name_by_id_card(id_card, key, token, cards_name)

updateCardsNameByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_name import CardsName
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_name = openapi_client.CardsName() # CardsName | Attributes of \"Cards Name\" to be updated.

    try:
        # updateCardsNameByIdCard()
        api_instance.update_cards_name_by_id_card(id_card, key, token, cards_name)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_name_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_name** | [**CardsName**](CardsName.md)| Attributes of \&quot;Cards Name\&quot; to be updated. | 

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

# **update_cards_pos_by_id_card**
> update_cards_pos_by_id_card(id_card, key, token, cards_pos)

updateCardsPosByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_pos import CardsPos
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_pos = openapi_client.CardsPos() # CardsPos | Attributes of \"Cards Pos\" to be updated.

    try:
        # updateCardsPosByIdCard()
        api_instance.update_cards_pos_by_id_card(id_card, key, token, cards_pos)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_pos_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_pos** | [**CardsPos**](CardsPos.md)| Attributes of \&quot;Cards Pos\&quot; to be updated. | 

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

# **update_cards_stickers_by_id_card_by_id_sticker**
> update_cards_stickers_by_id_card_by_id_sticker(id_card, id_sticker, key, token, cards_stickers)

updateCardsStickersByIdCardByIdSticker()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_stickers import CardsStickers
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    id_sticker = 'id_sticker_example' # str | idSticker
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_stickers = openapi_client.CardsStickers() # CardsStickers | Attributes of \"Cards Stickers\" to be updated.

    try:
        # updateCardsStickersByIdCardByIdSticker()
        api_instance.update_cards_stickers_by_id_card_by_id_sticker(id_card, id_sticker, key, token, cards_stickers)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_stickers_by_id_card_by_id_sticker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **id_sticker** | **str**| idSticker | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_stickers** | [**CardsStickers**](CardsStickers.md)| Attributes of \&quot;Cards Stickers\&quot; to be updated. | 

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

# **update_cards_subscribed_by_id_card**
> update_cards_subscribed_by_id_card(id_card, key, token, cards_subscribed)

updateCardsSubscribedByIdCard()

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (api_token):

```python
import openapi_client
from openapi_client.models.cards_subscribed import CardsSubscribed
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
    api_instance = openapi_client.CardApi(api_client)
    id_card = 'id_card_example' # str | card id or shortlink
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    cards_subscribed = openapi_client.CardsSubscribed() # CardsSubscribed | Attributes of \"Cards Subscribed\" to be updated.

    try:
        # updateCardsSubscribedByIdCard()
        api_instance.update_cards_subscribed_by_id_card(id_card, key, token, cards_subscribed)
    except Exception as e:
        print("Exception when calling CardApi->update_cards_subscribed_by_id_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_card** | **str**| card id or shortlink | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **cards_subscribed** | [**CardsSubscribed**](CardsSubscribed.md)| Attributes of \&quot;Cards Subscribed\&quot; to be updated. | 

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

