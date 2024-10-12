# TransportPlivoPost

The TransportPlivo resource is a collection of transports that carry dispatched alerts to the external Plivo service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**plivo_auth_id** | **str** | The auth ID for the Plivo service. | 
**plivo_auth_token** | **str** | The auth token for the Plivo service. Stored in encrypted format. | 
**plivo_from** | **str** | The sender value for the Plivo service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_plivo_post import TransportPlivoPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPlivoPost from a JSON string
transport_plivo_post_instance = TransportPlivoPost.from_json(json)
# print the JSON string representation of the object
print(TransportPlivoPost.to_json())

# convert the object into a dict
transport_plivo_post_dict = transport_plivo_post_instance.to_dict()
# create an instance of TransportPlivoPost from a dict
transport_plivo_post_from_dict = TransportPlivoPost.from_dict(transport_plivo_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


