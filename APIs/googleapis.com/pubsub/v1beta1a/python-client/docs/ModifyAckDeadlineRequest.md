# ModifyAckDeadlineRequest

Request for the ModifyAckDeadline method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ack_deadline_seconds** | **int** | The new ack deadline with respect to the time this request was sent to the Pub/Sub system. Must be &gt;&#x3D; 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after the ModifyAckDeadline call was made. Specifying zero may immediately make the message available for another pull request. | [optional] 
**ack_id** | **str** | The acknowledgment ID. Either this or ack_ids must be populated, not both. | [optional] 
**ack_ids** | **List[str]** | List of acknowledgment IDs. Either this field or ack_id should be populated, not both. | [optional] 
**subscription** | **str** | Next Index: 5 The name of the subscription from which messages are being pulled. | [optional] 

## Example

```python
from openapi_client.models.modify_ack_deadline_request import ModifyAckDeadlineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyAckDeadlineRequest from a JSON string
modify_ack_deadline_request_instance = ModifyAckDeadlineRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyAckDeadlineRequest.to_json())

# convert the object into a dict
modify_ack_deadline_request_dict = modify_ack_deadline_request_instance.to_dict()
# create an instance of ModifyAckDeadlineRequest from a dict
modify_ack_deadline_request_from_dict = ModifyAckDeadlineRequest.from_dict(modify_ack_deadline_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


