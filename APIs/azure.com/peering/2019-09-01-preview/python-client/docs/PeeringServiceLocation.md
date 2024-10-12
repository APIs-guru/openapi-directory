# PeeringServiceLocation

The peering service location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PeeringServiceLocationProperties**](PeeringServiceLocationProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_service_location import PeeringServiceLocation

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceLocation from a JSON string
peering_service_location_instance = PeeringServiceLocation.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceLocation.to_json())

# convert the object into a dict
peering_service_location_dict = peering_service_location_instance.to_dict()
# create an instance of PeeringServiceLocation from a dict
peering_service_location_from_dict = PeeringServiceLocation.from_dict(peering_service_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


