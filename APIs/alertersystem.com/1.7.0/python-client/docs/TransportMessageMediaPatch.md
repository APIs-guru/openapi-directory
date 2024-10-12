# TransportMessageMediaPatch

The TransportMessageMedia resource is a collection of transports that carry dispatched alerts to the external MessageMedia service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**message_media_api_key** | **str** | The API key for the MessageMedia service. | 
**message_media_api_secret** | **str** | The API secret for the MessageMedia service. Stored in encrypted format. | 
**message_media_from** | **str** | The optional registered sender ID for the MessageMedia service. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_message_media_patch import TransportMessageMediaPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMessageMediaPatch from a JSON string
transport_message_media_patch_instance = TransportMessageMediaPatch.from_json(json)
# print the JSON string representation of the object
print(TransportMessageMediaPatch.to_json())

# convert the object into a dict
transport_message_media_patch_dict = transport_message_media_patch_instance.to_dict()
# create an instance of TransportMessageMediaPatch from a dict
transport_message_media_patch_from_dict = TransportMessageMediaPatch.from_dict(transport_message_media_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


