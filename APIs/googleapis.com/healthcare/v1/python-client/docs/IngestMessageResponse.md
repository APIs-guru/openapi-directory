# IngestMessageResponse

Acknowledges that a message has been ingested into the specified HL7v2 store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hl7_ack** | **bytearray** | HL7v2 ACK message. | [optional] 
**message** | [**Message**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.ingest_message_response import IngestMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IngestMessageResponse from a JSON string
ingest_message_response_instance = IngestMessageResponse.from_json(json)
# print the JSON string representation of the object
print(IngestMessageResponse.to_json())

# convert the object into a dict
ingest_message_response_dict = ingest_message_response_instance.to_dict()
# create an instance of IngestMessageResponse from a dict
ingest_message_response_from_dict = IngestMessageResponse.from_dict(ingest_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


