# Collaboration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**List[CollaborationMembership]**](CollaborationMembership.md) | A list of users who are existing collaborators on this API | [optional] 
**owner** | **str** | Internal ID of the API owner (organization or user) | [optional] [readonly] 
**owner_name** | **str** | The name of the API owner (organization or user) | [optional] [readonly] 
**owners** | [**List[OrganizationOwner]**](OrganizationOwner.md) | If the API owner is an organization, this list contains the IDs of the organization owners. If the API owner is a user, an empty array is returned.  | [optional] [readonly] 
**pending_members** | [**List[CollaborationMembership]**](CollaborationMembership.md) | A list of pending collaborators - users who were invited to collaborate on this API but have not accepted the invitation yet | [optional] 
**teams** | [**List[CollaborationTeamMembership]**](CollaborationTeamMembership.md) | A list of teams that collaborate on this API | [optional] 

## Example

```python
from openapi_client.models.collaboration import Collaboration

# TODO update the JSON string below
json = "{}"
# create an instance of Collaboration from a JSON string
collaboration_instance = Collaboration.from_json(json)
# print the JSON string representation of the object
print(Collaboration.to_json())

# convert the object into a dict
collaboration_dict = collaboration_instance.to_dict()
# create an instance of Collaboration from a dict
collaboration_from_dict = Collaboration.from_dict(collaboration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


