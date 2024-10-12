# openapi_client.SearchApi

All URIs are relative to *https://trello.com/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_search**](SearchApi.md#get_search) | **GET** /search | getSearch()
[**get_search_members**](SearchApi.md#get_search_members) | **GET** /search/members | getSearchMembers()


# **get_search**
> get_search(query, id_organizations, key, token, id_boards=id_boards, id_cards=id_cards, model_types=model_types, board_fields=board_fields, boards_limit=boards_limit, card_fields=card_fields, cards_limit=cards_limit, cards_page=cards_page, card_board=card_board, card_list=card_list, card_members=card_members, card_stickers=card_stickers, card_attachments=card_attachments, organization_fields=organization_fields, organizations_limit=organizations_limit, member_fields=member_fields, members_limit=members_limit, partial=partial)

getSearch()

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
    api_instance = openapi_client.SearchApi(api_client)
    query = 'query_example' # str | a string with a length from 1 to 16384
    id_organizations = 'id_organizations_example' # str | A comma-separated list of objectIds, 24-character hex strings
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    id_boards = 'mine' # str | A comma-separated list of objectIds, 24-character hex strings (optional) (default to 'mine')
    id_cards = 'id_cards_example' # str | A comma-separated list of objectIds, 24-character hex strings (optional)
    model_types = 'all' # str | all or a comma-separated list of: actions, boards, cards, members or organizations (optional) (default to 'all')
    board_fields = 'name and idOrganization' # str | all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url (optional) (default to 'name and idOrganization')
    boards_limit = '10' # str | a number from 1 to 1000 (optional) (default to '10')
    card_fields = 'all' # str | all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url (optional) (default to 'all')
    cards_limit = '10' # str | a number from 1 to 1000 (optional) (default to '10')
    cards_page = '0' # str | a number from 0 to 100 (optional) (default to '0')
    card_board = 'card_board_example' # str |  true or false (optional)
    card_list = 'card_list_example' # str |  true or false (optional)
    card_members = 'card_members_example' # str |  true or false (optional)
    card_stickers = 'card_stickers_example' # str |  true or false (optional)
    card_attachments = 'card_attachments_example' # str | A boolean value or &quot;cover&quot; for only card cover attachments (optional)
    organization_fields = 'name and displayName' # str | all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website (optional) (default to 'name and displayName')
    organizations_limit = '10' # str | a number from 1 to 1000 (optional) (default to '10')
    member_fields = 'avatarHash, fullName, initials, username and confirmed' # str | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username (optional) (default to 'avatarHash, fullName, initials, username and confirmed')
    members_limit = '10' # str | a number from 1 to 1000 (optional) (default to '10')
    partial = 'partial_example' # str |  true or false (optional)

    try:
        # getSearch()
        api_instance.get_search(query, id_organizations, key, token, id_boards=id_boards, id_cards=id_cards, model_types=model_types, board_fields=board_fields, boards_limit=boards_limit, card_fields=card_fields, cards_limit=cards_limit, cards_page=cards_page, card_board=card_board, card_list=card_list, card_members=card_members, card_stickers=card_stickers, card_attachments=card_attachments, organization_fields=organization_fields, organizations_limit=organizations_limit, member_fields=member_fields, members_limit=members_limit, partial=partial)
    except Exception as e:
        print("Exception when calling SearchApi->get_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| a string with a length from 1 to 16384 | 
 **id_organizations** | **str**| A comma-separated list of objectIds, 24-character hex strings | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **id_boards** | **str**| A comma-separated list of objectIds, 24-character hex strings | [optional] [default to &#39;mine&#39;]
 **id_cards** | **str**| A comma-separated list of objectIds, 24-character hex strings | [optional] 
 **model_types** | **str**| all or a comma-separated list of: actions, boards, cards, members or organizations | [optional] [default to &#39;all&#39;]
 **board_fields** | **str**| all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url | [optional] [default to &#39;name and idOrganization&#39;]
 **boards_limit** | **str**| a number from 1 to 1000 | [optional] [default to &#39;10&#39;]
 **card_fields** | **str**| all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url | [optional] [default to &#39;all&#39;]
 **cards_limit** | **str**| a number from 1 to 1000 | [optional] [default to &#39;10&#39;]
 **cards_page** | **str**| a number from 0 to 100 | [optional] [default to &#39;0&#39;]
 **card_board** | **str**|  true or false | [optional] 
 **card_list** | **str**|  true or false | [optional] 
 **card_members** | **str**|  true or false | [optional] 
 **card_stickers** | **str**|  true or false | [optional] 
 **card_attachments** | **str**| A boolean value or &amp;quot;cover&amp;quot; for only card cover attachments | [optional] 
 **organization_fields** | **str**| all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website | [optional] [default to &#39;name and displayName&#39;]
 **organizations_limit** | **str**| a number from 1 to 1000 | [optional] [default to &#39;10&#39;]
 **member_fields** | **str**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] [default to &#39;avatarHash, fullName, initials, username and confirmed&#39;]
 **members_limit** | **str**| a number from 1 to 1000 | [optional] [default to &#39;10&#39;]
 **partial** | **str**|  true or false | [optional] 

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

# **get_search_members**
> get_search_members(query, key, token, limit=limit, id_board=id_board, id_organization=id_organization, only_org_members=only_org_members)

getSearchMembers()

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
    api_instance = openapi_client.SearchApi(api_client)
    query = 'query_example' # str | a string with a length from 1 to 16384
    key = 'key_example' # str | <a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>
    token = 'token_example' # str | <a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>
    limit = '8' # str | a number from 1 to 20 (optional) (default to '8')
    id_board = 'id_board_example' # str | An id, or null (optional)
    id_organization = 'id_organization_example' # str | An id, or null (optional)
    only_org_members = 'only_org_members_example' # str | A boolean (optional)

    try:
        # getSearchMembers()
        api_instance.get_search_members(query, key, token, limit=limit, id_board=id_board, id_organization=id_organization, only_org_members=only_org_members)
    except Exception as e:
        print("Exception when calling SearchApi->get_search_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| a string with a length from 1 to 16384 | 
 **key** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/1/appKey/generate\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Generate your application key&lt;/a&gt; | 
 **token** | **str**| &lt;a href&#x3D;\&quot;https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\&quot;  target&#x3D;\&quot;_blank\&quot;&gt;Getting a token from a user&lt;/a&gt; | 
 **limit** | **str**| a number from 1 to 20 | [optional] [default to &#39;8&#39;]
 **id_board** | **str**| An id, or null | [optional] 
 **id_organization** | **str**| An id, or null | [optional] 
 **only_org_members** | **str**| A boolean | [optional] 

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

