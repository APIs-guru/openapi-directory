# Sustainability

Sustainability practices implemented at the hotel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**energy_efficiency** | [**EnergyEfficiency**](EnergyEfficiency.md) |  | [optional] 
**sustainability_certifications** | [**SustainabilityCertifications**](SustainabilityCertifications.md) |  | [optional] 
**sustainable_sourcing** | [**SustainableSourcing**](SustainableSourcing.md) |  | [optional] 
**waste_reduction** | [**WasteReduction**](WasteReduction.md) |  | [optional] 
**water_conservation** | [**WaterConservation**](WaterConservation.md) |  | [optional] 

## Example

```python
from openapi_client.models.sustainability import Sustainability

# TODO update the JSON string below
json = "{}"
# create an instance of Sustainability from a JSON string
sustainability_instance = Sustainability.from_json(json)
# print the JSON string representation of the object
print(Sustainability.to_json())

# convert the object into a dict
sustainability_dict = sustainability_instance.to_dict()
# create an instance of Sustainability from a dict
sustainability_from_dict = Sustainability.from_dict(sustainability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


