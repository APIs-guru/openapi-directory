# IngestMessageRequest

Ingests a message into the specified HL7v2 store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**Message**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.ingest_message_request import IngestMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IngestMessageRequest from a JSON string
ingest_message_request_instance = IngestMessageRequest.from_json(json)
# print the JSON string representation of the object
print(IngestMessageRequest.to_json())

# convert the object into a dict
ingest_message_request_dict = ingest_message_request_instance.to_dict()
# create an instance of IngestMessageRequest from a dict
ingest_message_request_from_dict = IngestMessageRequest.from_dict(ingest_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


