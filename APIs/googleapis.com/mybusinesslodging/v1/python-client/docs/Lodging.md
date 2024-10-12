# Lodging

Lodging of a location that provides accomodations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | [**Accessibility**](Accessibility.md) |  | [optional] 
**activities** | [**Activities**](Activities.md) |  | [optional] 
**all_units** | [**GuestUnitFeatures**](GuestUnitFeatures.md) |  | [optional] 
**business** | [**Business**](Business.md) |  | [optional] 
**common_living_area** | [**LivingArea**](LivingArea.md) |  | [optional] 
**connectivity** | [**Connectivity**](Connectivity.md) |  | [optional] 
**families** | [**Families**](Families.md) |  | [optional] 
**food_and_drink** | [**FoodAndDrink**](FoodAndDrink.md) |  | [optional] 
**guest_units** | [**List[GuestUnitType]**](GuestUnitType.md) | Individual GuestUnitTypes that are available in this Lodging. | [optional] 
**health_and_safety** | [**HealthAndSafety**](HealthAndSafety.md) |  | [optional] 
**housekeeping** | [**Housekeeping**](Housekeeping.md) |  | [optional] 
**metadata** | [**LodgingMetadata**](LodgingMetadata.md) |  | [optional] 
**name** | **str** | Required. Google identifier for this location in the form: &#x60;locations/{location_id}/lodging&#x60; | [optional] 
**parking** | [**Parking**](Parking.md) |  | [optional] 
**pets** | [**Pets**](Pets.md) |  | [optional] 
**policies** | [**Policies**](Policies.md) |  | [optional] 
**pools** | [**Pools**](Pools.md) |  | [optional] 
**var_property** | [**ModelProperty**](ModelProperty.md) |  | [optional] 
**services** | [**Services**](Services.md) |  | [optional] 
**some_units** | [**GuestUnitFeatures**](GuestUnitFeatures.md) |  | [optional] 
**sustainability** | [**Sustainability**](Sustainability.md) |  | [optional] 
**transportation** | [**Transportation**](Transportation.md) |  | [optional] 
**wellness** | [**Wellness**](Wellness.md) |  | [optional] 

## Example

```python
from openapi_client.models.lodging import Lodging

# TODO update the JSON string below
json = "{}"
# create an instance of Lodging from a JSON string
lodging_instance = Lodging.from_json(json)
# print the JSON string representation of the object
print(Lodging.to_json())

# convert the object into a dict
lodging_dict = lodging_instance.to_dict()
# create an instance of Lodging from a dict
lodging_from_dict = Lodging.from_dict(lodging_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


