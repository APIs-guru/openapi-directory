# InvitationRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.invitation_read import InvitationRead

# TODO update the JSON string below
json = "{}"
# create an instance of InvitationRead from a JSON string
invitation_read_instance = InvitationRead.from_json(json)
# print the JSON string representation of the object
print(InvitationRead.to_json())

# convert the object into a dict
invitation_read_dict = invitation_read_instance.to_dict()
# create an instance of InvitationRead from a dict
invitation_read_from_dict = InvitationRead.from_dict(invitation_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


