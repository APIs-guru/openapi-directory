# ConversationMPIMObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_user** | **str** |  | [optional] 
**connected_team_ids** | **List[str]** |  | [optional] 
**conversation_host_id** | **str** |  | [optional] 
**created** | **int** |  | 
**creator** | **str** |  | 
**display_counts** | [**ConversationObjectDisplayCounts**](ConversationObjectDisplayCounts.md) |  | [optional] 
**id** | **str** |  | 
**internal_team_ids** | **List[str]** |  | [optional] 
**is_archived** | **bool** |  | 
**is_channel** | **bool** |  | 
**is_ext_shared** | **bool** |  | [optional] 
**is_frozen** | **bool** |  | [optional] 
**is_general** | **bool** |  | 
**is_group** | **bool** |  | 
**is_im** | **bool** |  | 
**is_member** | **bool** |  | [optional] 
**is_moved** | **int** |  | [optional] 
**is_mpim** | **bool** |  | 
**is_non_threadable** | **bool** |  | [optional] 
**is_open** | **bool** |  | [optional] 
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
**priority** | **float** |  | [optional] 
**purpose** | [**ObjsChannelPurpose**](ObjsChannelPurpose.md) |  | 
**shared_team_ids** | **List[str]** |  | [optional] 
**shares** | [**List[ConversationObjectSharesInner]**](ConversationObjectSharesInner.md) |  | [optional] 
**timezone_count** | **int** |  | [optional] 
**topic** | [**ObjsChannelPurpose**](ObjsChannelPurpose.md) |  | 
**unlinked** | **int** |  | [optional] 
**unread_count** | **int** |  | [optional] 
**unread_count_display** | **int** |  | [optional] 
**user** | **str** |  | [optional] 
**version** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.conversation_mpim_object import ConversationMPIMObject

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationMPIMObject from a JSON string
conversation_mpim_object_instance = ConversationMPIMObject.from_json(json)
# print the JSON string representation of the object
print(ConversationMPIMObject.to_json())

# convert the object into a dict
conversation_mpim_object_dict = conversation_mpim_object_instance.to_dict()
# create an instance of ConversationMPIMObject from a dict
conversation_mpim_object_from_dict = ConversationMPIMObject.from_dict(conversation_mpim_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


