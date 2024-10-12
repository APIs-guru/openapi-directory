# MessageWithPendingMetadataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**message** | [**Message**](Message.md) |  | [optional] 
**pending_message_metadata** | **Dict[str, str]** | Metadata attached to a message while it is pending | [optional] 

## Example

```python
from openapi_client.models.message_with_pending_metadata_response import MessageWithPendingMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessageWithPendingMetadataResponse from a JSON string
message_with_pending_metadata_response_instance = MessageWithPendingMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(MessageWithPendingMetadataResponse.to_json())

# convert the object into a dict
message_with_pending_metadata_response_dict = message_with_pending_metadata_response_instance.to_dict()
# create an instance of MessageWithPendingMetadataResponse from a dict
message_with_pending_metadata_response_from_dict = MessageWithPendingMetadataResponse.from_dict(message_with_pending_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


