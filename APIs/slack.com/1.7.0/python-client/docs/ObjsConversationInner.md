# ObjsConversationInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_user** | **str** |  | [optional] 
**connected_team_ids** | **List[str]** |  | [optional] 
**conversation_host_id** | **str** |  | [optional] 
**created** | **int** |  | 
**creator** | **str** |  | 
**display_counts** | [**ConversationObjectDisplayCounts**](ConversationObjectDisplayCounts.md) |  | [optional] 
**enterprise_id** | **str** |  | [optional] 
**has_pins** | **bool** |  | [optional] 
**id** | **str** |  | 
**internal_team_ids** | **List[str]** |  | [optional] 
**is_archived** | **bool** |  | 
**is_channel** | **bool** |  | 
**is_ext_shared** | **bool** |  | [optional] 
**is_frozen** | **bool** |  | [optional] 
**is_general** | **bool** |  | 
**is_global_shared** | **bool** |  | [optional] 
**is_group** | **bool** |  | 
**is_im** | **bool** |  | 
**is_member** | **bool** |  | [optional] 
**is_moved** | **int** |  | [optional] 
**is_mpim** | **bool** |  | 
**is_non_threadable** | **bool** |  | [optional] 
**is_open** | **bool** |  | [optional] 
**is_org_default** | **bool** |  | [optional] 
**is_org_mandatory** | **bool** |  | [optional] 
**is_org_shared** | **bool** |  | 
**is_pending_ext_shared** | **bool** |  | [optional] 
**is_private** | **bool** |  | 
**is_read_only** | **bool** |  | [optional] 
**is_shared** | **bool** |  | 
**is_starred** | **bool** |  | [optional] 
**is_thread_only** | **bool** |  | [optional] 
**last_read** | **str** |  | [optional] 
**latest** | [**List[ObjsChannelLatestInner]**](ObjsChannelLatestInner.md) |  | [optional] 
**members** | **List[str]** |  | [optional] 
**name** | **str** |  | 
**name_normalized** | **str** |  | 
**num_members** | **int** |  | [optional] 
**parent_conversation** | [**List[ConversationObjectParentConversationInner]**](ConversationObjectParentConversationInner.md) |  | [optional] 
**pending_connected_team_ids** | **List[str]** |  | [optional] 
**pending_shared** | **List[str]** |  | [optional] 
**pin_count** | **int** |  | [optional] 
**previous_names** | **List[str]** |  | [optional] 
**priority** | **float** |  | 
**purpose** | [**ObjsChannelPurpose**](ObjsChannelPurpose.md) |  | 
**shared_team_ids** | **List[str]** |  | [optional] 
**shares** | [**List[ConversationIMChannelObjectFromConversationsMethodsSharesInner]**](ConversationIMChannelObjectFromConversationsMethodsSharesInner.md) |  | [optional] 
**timezone_count** | **int** |  | [optional] 
**topic** | [**ObjsChannelPurpose**](ObjsChannelPurpose.md) |  | 
**unlinked** | **int** |  | [optional] 
**unread_count** | **int** |  | [optional] 
**unread_count_display** | **int** |  | [optional] 
**use_case** | **str** |  | [optional] 
**user** | **str** |  | 
**version** | **int** |  | [optional] 
**is_user_deleted** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.objs_conversation_inner import ObjsConversationInner

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsConversationInner from a JSON string
objs_conversation_inner_instance = ObjsConversationInner.from_json(json)
# print the JSON string representation of the object
print(ObjsConversationInner.to_json())

# convert the object into a dict
objs_conversation_inner_dict = objs_conversation_inner_instance.to_dict()
# create an instance of ObjsConversationInner from a dict
objs_conversation_inner_from_dict = ObjsConversationInner.from_dict(objs_conversation_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


