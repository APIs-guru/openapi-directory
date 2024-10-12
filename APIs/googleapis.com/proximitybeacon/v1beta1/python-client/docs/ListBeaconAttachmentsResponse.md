# ListBeaconAttachmentsResponse

Response to `ListBeaconAttachments` that contains the requested attachments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[BeaconAttachment]**](BeaconAttachment.md) | The attachments that corresponded to the request params. | [optional] 

## Example

```python
from openapi_client.models.list_beacon_attachments_response import ListBeaconAttachmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBeaconAttachmentsResponse from a JSON string
list_beacon_attachments_response_instance = ListBeaconAttachmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBeaconAttachmentsResponse.to_json())

# convert the object into a dict
list_beacon_attachments_response_dict = list_beacon_attachments_response_instance.to_dict()
# create an instance of ListBeaconAttachmentsResponse from a dict
list_beacon_attachments_response_from_dict = ListBeaconAttachmentsResponse.from_dict(list_beacon_attachments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


