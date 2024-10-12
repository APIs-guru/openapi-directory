# Message

A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The datetime when the message was created. Set by the server. | [optional] [readonly] 
**data** | **bytearray** | Required. Raw message bytes. | [optional] 
**labels** | **Dict[str, str]** | User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. | [optional] 
**message_type** | **str** | The message type for this message. MSH-9.1. | [optional] 
**name** | **str** | Output only. Resource name of the Message, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}&#x60;. Assigned by the server. | [optional] [readonly] 
**parsed_data** | [**ParsedData**](ParsedData.md) |  | [optional] 
**patient_ids** | [**List[PatientId]**](PatientId.md) | All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this message. | [optional] 
**schematized_data** | [**SchematizedData**](SchematizedData.md) |  | [optional] 
**send_facility** | **str** | The hospital that this message came from. MSH-4. | [optional] 
**send_time** | **str** | The datetime the sending application sent this message. MSH-7. | [optional] 

## Example

```python
from openapi_client.models.message import Message

# TODO update the JSON string below
json = "{}"
# create an instance of Message from a JSON string
message_instance = Message.from_json(json)
# print the JSON string representation of the object
print(Message.to_json())

# convert the object into a dict
message_dict = message_instance.to_dict()
# create an instance of Message from a dict
message_from_dict = Message.from_dict(message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


