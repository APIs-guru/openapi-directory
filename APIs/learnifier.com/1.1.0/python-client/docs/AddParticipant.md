# AddParticipant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the user. If no user exists with the specified email a user will be created with default values and the specified email. | [optional] 
**extid** | **str** | An optional external id for the participation | [optional] 
**userid** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.add_participant import AddParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of AddParticipant from a JSON string
add_participant_instance = AddParticipant.from_json(json)
# print the JSON string representation of the object
print(AddParticipant.to_json())

# convert the object into a dict
add_participant_dict = add_participant_instance.to_dict()
# create an instance of AddParticipant from a dict
add_participant_from_dict = AddParticipant.from_dict(add_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


