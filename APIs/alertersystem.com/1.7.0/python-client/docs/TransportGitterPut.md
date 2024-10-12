# TransportGitterPut

The TransportGitter resource is a collection of transports that carry dispatched alerts to the external Gitter service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**gitter_room_id** | **str** | The room ID for the Gitter service. | 
**gitter_token** | **str** | The token for the Gitter service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_gitter_put import TransportGitterPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportGitterPut from a JSON string
transport_gitter_put_instance = TransportGitterPut.from_json(json)
# print the JSON string representation of the object
print(TransportGitterPut.to_json())

# convert the object into a dict
transport_gitter_put_dict = transport_gitter_put_instance.to_dict()
# create an instance of TransportGitterPut from a dict
transport_gitter_put_from_dict = TransportGitterPut.from_dict(transport_gitter_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


