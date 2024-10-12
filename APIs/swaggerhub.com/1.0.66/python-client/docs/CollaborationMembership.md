# CollaborationMembership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked** | **bool** |  | [optional] [readonly] 
**name** | **str** | The name of a user or team | 
**start_time** | **datetime** | The date and time this user or team was added as a collaborator | [optional] [readonly] 
**uuid** | **str** | Internal ID of a user or team | [optional] [readonly] 
**donotdisturb** | **bool** |  | [optional] [readonly] 
**roles** | **List[str]** | A list of this collaborator&#39;s roles | 

## Example

```python
from openapi_client.models.collaboration_membership import CollaborationMembership

# TODO update the JSON string below
json = "{}"
# create an instance of CollaborationMembership from a JSON string
collaboration_membership_instance = CollaborationMembership.from_json(json)
# print the JSON string representation of the object
print(CollaborationMembership.to_json())

# convert the object into a dict
collaboration_membership_dict = collaboration_membership_instance.to_dict()
# create an instance of CollaborationMembership from a dict
collaboration_membership_from_dict = CollaborationMembership.from_dict(collaboration_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


