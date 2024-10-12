# PeeringProperties

The properties that define connectivity to the Microsoft Cloud Edge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct** | [**PeeringPropertiesDirect**](PeeringPropertiesDirect.md) |  | [optional] 
**exchange** | [**PeeringPropertiesExchange**](PeeringPropertiesExchange.md) |  | [optional] 
**peering_location** | **str** | The location of the peering. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_properties import PeeringProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringProperties from a JSON string
peering_properties_instance = PeeringProperties.from_json(json)
# print the JSON string representation of the object
print(PeeringProperties.to_json())

# convert the object into a dict
peering_properties_dict = peering_properties_instance.to_dict()
# create an instance of PeeringProperties from a dict
peering_properties_from_dict = PeeringProperties.from_dict(peering_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


