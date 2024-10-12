# CollaborationMember

Represents a collaborator (user or team)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked** | **bool** |  | [optional] [readonly] 
**name** | **str** | The name of a user or team | 
**start_time** | **datetime** | The date and time this user or team was added as a collaborator | [optional] [readonly] 
**uuid** | **str** | Internal ID of a user or team | [optional] [readonly] 

## Example

```python
from openapi_client.models.collaboration_member import CollaborationMember

# TODO update the JSON string below
json = "{}"
# create an instance of CollaborationMember from a JSON string
collaboration_member_instance = CollaborationMember.from_json(json)
# print the JSON string representation of the object
print(CollaborationMember.to_json())

# convert the object into a dict
collaboration_member_dict = collaboration_member_instance.to_dict()
# create an instance of CollaborationMember from a dict
collaboration_member_from_dict = CollaborationMember.from_dict(collaboration_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


