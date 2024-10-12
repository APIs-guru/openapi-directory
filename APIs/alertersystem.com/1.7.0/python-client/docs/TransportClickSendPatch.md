# TransportClickSendPatch

The TransportClickSend resource is a collection of transports that carry dispatched alerts to the external ClickSend service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_send_api_key** | **str** | The API key for the ClickSend service. Stored in encrypted format. | 
**click_send_api_username** | **str** | The API username for the ClickSend service. | 
**click_send_from** | **str** | The from value for the ClickSend service. | [optional] 
**click_send_from_email** | **str** | The from email value where replies must be emailed for the ClickSend service. | [optional] 
**click_send_list_id** | **str** | The recipient list ID value for the ClickSend service. | [optional] 
**click_send_source** | **str** | The source method of sending value for the ClickSend service. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_click_send_patch import TransportClickSendPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportClickSendPatch from a JSON string
transport_click_send_patch_instance = TransportClickSendPatch.from_json(json)
# print the JSON string representation of the object
print(TransportClickSendPatch.to_json())

# convert the object into a dict
transport_click_send_patch_dict = transport_click_send_patch_instance.to_dict()
# create an instance of TransportClickSendPatch from a dict
transport_click_send_patch_from_dict = TransportClickSendPatch.from_dict(transport_click_send_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


