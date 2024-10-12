# TransportExpoPatch

The TransportExpo resource is a collection of transports that carry dispatched alerts to the external Expo service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**expo_token** | **str** | The token for the Expo service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_expo_patch import TransportExpoPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportExpoPatch from a JSON string
transport_expo_patch_instance = TransportExpoPatch.from_json(json)
# print the JSON string representation of the object
print(TransportExpoPatch.to_json())

# convert the object into a dict
transport_expo_patch_dict = transport_expo_patch_instance.to_dict()
# create an instance of TransportExpoPatch from a dict
transport_expo_patch_from_dict = TransportExpoPatch.from_dict(transport_expo_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


