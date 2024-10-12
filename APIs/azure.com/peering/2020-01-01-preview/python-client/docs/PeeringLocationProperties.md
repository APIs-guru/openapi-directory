# PeeringLocationProperties

The properties that define a peering location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_region** | **str** | The Azure region associated with the peering location. | [optional] 
**country** | **str** | The country in which the peering location exists. | [optional] 
**direct** | [**PeeringLocationPropertiesDirect**](PeeringLocationPropertiesDirect.md) |  | [optional] 
**exchange** | [**PeeringLocationPropertiesExchange**](PeeringLocationPropertiesExchange.md) |  | [optional] 
**peering_location** | **str** | The name of the peering location. | [optional] 

## Example

```python
from openapi_client.models.peering_location_properties import PeeringLocationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringLocationProperties from a JSON string
peering_location_properties_instance = PeeringLocationProperties.from_json(json)
# print the JSON string representation of the object
print(PeeringLocationProperties.to_json())

# convert the object into a dict
peering_location_properties_dict = peering_location_properties_instance.to_dict()
# create an instance of PeeringLocationProperties from a dict
peering_location_properties_from_dict = PeeringLocationProperties.from_dict(peering_location_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


