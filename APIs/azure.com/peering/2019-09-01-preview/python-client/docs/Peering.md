# Peering

Peering is a logical representation of a set of connections to the Microsoft Cloud Edge at a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of the peering. | 
**location** | **str** | The location of the resource. | 
**properties** | [**PeeringProperties**](PeeringProperties.md) |  | [optional] 
**sku** | [**PeeringSku**](PeeringSku.md) |  | 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering import Peering

# TODO update the JSON string below
json = "{}"
# create an instance of Peering from a JSON string
peering_instance = Peering.from_json(json)
# print the JSON string representation of the object
print(Peering.to_json())

# convert the object into a dict
peering_dict = peering_instance.to_dict()
# create an instance of Peering from a dict
peering_from_dict = Peering.from_dict(peering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


