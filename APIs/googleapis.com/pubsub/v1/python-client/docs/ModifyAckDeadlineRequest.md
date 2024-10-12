# ModifyAckDeadlineRequest

Request for the ModifyAckDeadline method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ack_deadline_seconds** | **int** | Required. The new ack deadline with respect to the time this request was sent to the Pub/Sub system. For example, if the value is 10, the new ack deadline will expire 10 seconds after the &#x60;ModifyAckDeadline&#x60; call was made. Specifying zero might immediately make the message available for delivery to another subscriber client. This typically results in an increase in the rate of message redeliveries (that is, duplicates). The minimum deadline you can specify is 0 seconds. The maximum deadline you can specify in a single request is 600 seconds (10 minutes). | [optional] 
**ack_ids** | **List[str]** | Required. List of acknowledgment IDs. | [optional] 

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


