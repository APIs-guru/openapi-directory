# ParticipantProfilePropertyReference

The participant profile property reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interaction_property_name** | **str** | The source interaction property that maps to the target profile property. | 
**profile_property_name** | **str** | The target profile property that maps to the source interaction property. | 

## Example

```python
from openapi_client.models.participant_profile_property_reference import ParticipantProfilePropertyReference

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantProfilePropertyReference from a JSON string
participant_profile_property_reference_instance = ParticipantProfilePropertyReference.from_json(json)
# print the JSON string representation of the object
print(ParticipantProfilePropertyReference.to_json())

# convert the object into a dict
participant_profile_property_reference_dict = participant_profile_property_reference_instance.to_dict()
# create an instance of ParticipantProfilePropertyReference from a dict
participant_profile_property_reference_from_dict = ParticipantProfilePropertyReference.from_dict(participant_profile_property_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


