# Participant

Describes a profile type participating in an interaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **Dict[str, str]** | Localized descriptions. | [optional] 
**display_name** | **Dict[str, str]** | Localized display name. | [optional] 
**participant_name** | **str** | Participant name. | 
**participant_property_references** | [**List[ParticipantPropertyReference]**](ParticipantPropertyReference.md) | The property references. | 
**profile_type_name** | **str** | Profile type name. | 
**role** | **str** | The role that the participant is playing in the interaction. | [optional] 

## Example

```python
from openapi_client.models.participant import Participant

# TODO update the JSON string below
json = "{}"
# create an instance of Participant from a JSON string
participant_instance = Participant.from_json(json)
# print the JSON string representation of the object
print(Participant.to_json())

# convert the object into a dict
participant_dict = participant_instance.to_dict()
# create an instance of Participant from a dict
participant_from_dict = Participant.from_dict(participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


