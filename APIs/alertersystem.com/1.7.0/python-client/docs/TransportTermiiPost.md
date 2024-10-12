# TransportTermiiPost

The TransportTermii resource is a collection of transports that carry dispatched alerts to the external Termii service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**termii_api_key** | **str** | The API key for the Termii service. Stored in encrypted format. | 
**termii_channel** | **str** | The channel for the Termii service. | 
**termii_from** | **str** | The sender value for the Termii service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_termii_post import TransportTermiiPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTermiiPost from a JSON string
transport_termii_post_instance = TransportTermiiPost.from_json(json)
# print the JSON string representation of the object
print(TransportTermiiPost.to_json())

# convert the object into a dict
transport_termii_post_dict = transport_termii_post_instance.to_dict()
# create an instance of TransportTermiiPost from a dict
transport_termii_post_from_dict = TransportTermiiPost.from_dict(transport_termii_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


