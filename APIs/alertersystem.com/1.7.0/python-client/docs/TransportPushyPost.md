# TransportPushyPost

The TransportPushy resource is a collection of transports that carry dispatched alerts to the external Pushy service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**pushy_api_key** | **str** | The API key for the Pushy service. Stored in encrypted format. | 
**pushy_to** | **str** | The recipient ID for the Pushy service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_pushy_post import TransportPushyPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPushyPost from a JSON string
transport_pushy_post_instance = TransportPushyPost.from_json(json)
# print the JSON string representation of the object
print(TransportPushyPost.to_json())

# convert the object into a dict
transport_pushy_post_dict = transport_pushy_post_instance.to_dict()
# create an instance of TransportPushyPost from a dict
transport_pushy_post_from_dict = TransportPushyPost.from_dict(transport_pushy_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


