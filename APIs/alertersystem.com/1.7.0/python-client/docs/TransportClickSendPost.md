# TransportClickSendPost

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
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_click_send_post import TransportClickSendPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportClickSendPost from a JSON string
transport_click_send_post_instance = TransportClickSendPost.from_json(json)
# print the JSON string representation of the object
print(TransportClickSendPost.to_json())

# convert the object into a dict
transport_click_send_post_dict = transport_click_send_post_instance.to_dict()
# create an instance of TransportClickSendPost from a dict
transport_click_send_post_from_dict = TransportClickSendPost.from_dict(transport_click_send_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


