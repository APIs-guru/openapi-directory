# ParticipantPropertyReference

The participant property reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interaction_property_name** | **str** | The interaction property that maps to the profile property. | 
**profile_property_name** | **str** | The profile property that maps to the interaction property. | 

## Example

```python
from openapi_client.models.participant_property_reference import ParticipantPropertyReference

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantPropertyReference from a JSON string
participant_property_reference_instance = ParticipantPropertyReference.from_json(json)
# print the JSON string representation of the object
print(ParticipantPropertyReference.to_json())

# convert the object into a dict
participant_property_reference_dict = participant_property_reference_instance.to_dict()
# create an instance of ParticipantPropertyReference from a dict
participant_property_reference_from_dict = ParticipantPropertyReference.from_dict(participant_property_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


