# TransportExpoPost

The TransportExpo resource is a collection of transports that carry dispatched alerts to the external Expo service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**expo_token** | **str** | The token for the Expo service. Stored in encrypted format. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_expo_post import TransportExpoPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportExpoPost from a JSON string
transport_expo_post_instance = TransportExpoPost.from_json(json)
# print the JSON string representation of the object
print(TransportExpoPost.to_json())

# convert the object into a dict
transport_expo_post_dict = transport_expo_post_instance.to_dict()
# create an instance of TransportExpoPost from a dict
transport_expo_post_from_dict = TransportExpoPost.from_dict(transport_expo_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


