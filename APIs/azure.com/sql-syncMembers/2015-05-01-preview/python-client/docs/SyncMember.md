# SyncMember

An Azure SQL Database sync member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SyncMemberProperties**](SyncMemberProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_member import SyncMember

# TODO update the JSON string below
json = "{}"
# create an instance of SyncMember from a JSON string
sync_member_instance = SyncMember.from_json(json)
# print the JSON string representation of the object
print(SyncMember.to_json())

# convert the object into a dict
sync_member_dict = sync_member_instance.to_dict()
# create an instance of SyncMember from a dict
sync_member_from_dict = SyncMember.from_dict(sync_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


