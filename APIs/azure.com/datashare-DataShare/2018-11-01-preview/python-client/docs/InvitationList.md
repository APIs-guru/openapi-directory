# InvitationList

List response for get InvitationList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[Invitation]**](Invitation.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.invitation_list import InvitationList

# TODO update the JSON string below
json = "{}"
# create an instance of InvitationList from a JSON string
invitation_list_instance = InvitationList.from_json(json)
# print the JSON string representation of the object
print(InvitationList.to_json())

# convert the object into a dict
invitation_list_dict = invitation_list_instance.to_dict()
# create an instance of InvitationList from a dict
invitation_list_from_dict = InvitationList.from_dict(invitation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


