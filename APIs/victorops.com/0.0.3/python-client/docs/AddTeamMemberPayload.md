# AddTeamMemberPayload

The user information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | 

## Example

```python
from openapi_client.models.add_team_member_payload import AddTeamMemberPayload

# TODO update the JSON string below
json = "{}"
# create an instance of AddTeamMemberPayload from a JSON string
add_team_member_payload_instance = AddTeamMemberPayload.from_json(json)
# print the JSON string representation of the object
print(AddTeamMemberPayload.to_json())

# convert the object into a dict
add_team_member_payload_dict = add_team_member_payload_instance.to_dict()
# create an instance of AddTeamMemberPayload from a dict
add_team_member_payload_from_dict = AddTeamMemberPayload.from_dict(add_team_member_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


