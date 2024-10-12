# AcknowledgeRequest

Request for the Acknowledge method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ack_ids** | **List[str]** | The acknowledgment ID for the messages being acknowledged that was returned by the Pub/Sub system in the &#x60;Pull&#x60; response. Must not be empty. | [optional] 

## Example

```python
from openapi_client.models.acknowledge_request import AcknowledgeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AcknowledgeRequest from a JSON string
acknowledge_request_instance = AcknowledgeRequest.from_json(json)
# print the JSON string representation of the object
print(AcknowledgeRequest.to_json())

# convert the object into a dict
acknowledge_request_dict = acknowledge_request_instance.to_dict()
# create an instance of AcknowledgeRequest from a dict
acknowledge_request_from_dict = AcknowledgeRequest.from_dict(acknowledge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


