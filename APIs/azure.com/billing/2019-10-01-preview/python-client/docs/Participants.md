# Participants

Details about the participant or signer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the participant or signer. | [optional] [readonly] 
**status** | **str** | The signing status | [optional] [readonly] 
**status_date** | **datetime** | The date when status got changed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.participants import Participants

# TODO update the JSON string below
json = "{}"
# create an instance of Participants from a JSON string
participants_instance = Participants.from_json(json)
# print the JSON string representation of the object
print(Participants.to_json())

# convert the object into a dict
participants_dict = participants_instance.to_dict()
# create an instance of Participants from a dict
participants_from_dict = Participants.from_dict(participants_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


