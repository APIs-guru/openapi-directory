# ObjsChannel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_user** | **str** |  | [optional] 
**created** | **int** |  | 
**creator** | **str** |  | 
**id** | **str** |  | 
**is_archived** | **bool** |  | [optional] 
**is_channel** | **bool** |  | 
**is_frozen** | **bool** |  | [optional] 
**is_general** | **bool** |  | [optional] 
**is_member** | **bool** |  | [optional] 
**is_moved** | **int** |  | [optional] 
**is_mpim** | **bool** |  | 
**is_non_threadable** | **bool** |  | [optional] 
**is_org_shared** | **bool** |  | 
**is_pending_ext_shared** | **bool** |  | [optional] 
**is_private** | **bool** |  | 
**is_read_only** | **bool** |  | [optional] 
**is_shared** | **bool** |  | 
**is_thread_only** | **bool** |  | [optional] 
**last_read** | **str** |  | [optional] 
**latest** | [**List[ObjsChannelLatestInner]**](ObjsChannelLatestInner.md) |  | [optional] 
**members** | **List[str]** |  | 
**name** | **str** |  | 
**name_normalized** | **str** |  | 
**num_members** | **int** |  | [optional] 
**pending_shared** | **List[str]** |  | [optional] 
**previous_names** | **List[str]** |  | [optional] 
**priority** | **float** |  | [optional] 
**purpose** | [**ObjsChannelPurpose**](ObjsChannelPurpose.md) |  | 
**topic** | [**ObjsChannelPurpose**](ObjsChannelPurpose.md) |  | 
**unlinked** | **int** |  | [optional] 
**unread_count** | **int** |  | [optional] 
**unread_count_display** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.objs_channel import ObjsChannel

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsChannel from a JSON string
objs_channel_instance = ObjsChannel.from_json(json)
# print the JSON string representation of the object
print(ObjsChannel.to_json())

# convert the object into a dict
objs_channel_dict = objs_channel_instance.to_dict()
# create an instance of ObjsChannel from a dict
objs_channel_from_dict = ObjsChannel.from_dict(objs_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


