# Participant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **float** | Time when the participant was added to the space | [optional] 
**label_ids** | **List[str]** | The list of label IDs of all the labels assigned to the space. | [optional] 
**last_content_creation_time** | **float** | Time stamp when user last created content in the space. | [optional] 
**last_read_timestamp** | **float** | Last time stamp when the user read content in this space. | [optional] 
**modification_time** | **float** | Time when the participant was changed last. | [optional] 
**number_of_replies** | **float** | Number of replies in the space created by this participant. | [optional] 
**number_of_topics** | **float** | Number of topics in the space created by this participant. | [optional] 
**role** | **str** | The name of the role of the participant. | [optional] 
**space_id** | **str** | The unique ID of the space to which the participant. | [optional] 
**state** | **str** | The name of the state of the participant; | [optional] 
**tenant_id** | **str** | The unique tenant id of the participant. | [optional] 
**user_id** | **str** | The unique user id of the participant. | [optional] 

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


