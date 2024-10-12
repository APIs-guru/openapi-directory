# OutboundMessageDumpResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Raw source of message. If no dump is available this will return an empty string. | [optional] 

## Example

```python
from openapi_client.models.outbound_message_dump_response import OutboundMessageDumpResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OutboundMessageDumpResponse from a JSON string
outbound_message_dump_response_instance = OutboundMessageDumpResponse.from_json(json)
# print the JSON string representation of the object
print(OutboundMessageDumpResponse.to_json())

# convert the object into a dict
outbound_message_dump_response_dict = outbound_message_dump_response_instance.to_dict()
# create an instance of OutboundMessageDumpResponse from a dict
outbound_message_dump_response_from_dict = OutboundMessageDumpResponse.from_dict(outbound_message_dump_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


