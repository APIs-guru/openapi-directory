# RemoveTeamMemberPayload

The user information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replacement** | **str** |  | 

## Example

```python
from openapi_client.models.remove_team_member_payload import RemoveTeamMemberPayload

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveTeamMemberPayload from a JSON string
remove_team_member_payload_instance = RemoveTeamMemberPayload.from_json(json)
# print the JSON string representation of the object
print(RemoveTeamMemberPayload.to_json())

# convert the object into a dict
remove_team_member_payload_dict = remove_team_member_payload_instance.to_dict()
# create an instance of RemoveTeamMemberPayload from a dict
remove_team_member_payload_from_dict = RemoveTeamMemberPayload.from_dict(remove_team_member_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


