# PeeringLocation

Peering location is where connectivity could be established to the Microsoft Cloud Edge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of peering that the peering location supports. | [optional] 
**properties** | [**PeeringLocationProperties**](PeeringLocationProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_location import PeeringLocation

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringLocation from a JSON string
peering_location_instance = PeeringLocation.from_json(json)
# print the JSON string representation of the object
print(PeeringLocation.to_json())

# convert the object into a dict
peering_location_dict = peering_location_instance.to_dict()
# create an instance of PeeringLocation from a dict
peering_location_from_dict = PeeringLocation.from_dict(peering_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


