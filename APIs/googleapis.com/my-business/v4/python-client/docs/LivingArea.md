# LivingArea

An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | [**LivingAreaAccessibility**](LivingAreaAccessibility.md) |  | [optional] 
**eating** | [**LivingAreaEating**](LivingAreaEating.md) |  | [optional] 
**features** | [**LivingAreaFeatures**](LivingAreaFeatures.md) |  | [optional] 
**layout** | [**LivingAreaLayout**](LivingAreaLayout.md) |  | [optional] 
**sleeping** | [**LivingAreaSleeping**](LivingAreaSleeping.md) |  | [optional] 

## Example

```python
from openapi_client.models.living_area import LivingArea

# TODO update the JSON string below
json = "{}"
# create an instance of LivingArea from a JSON string
living_area_instance = LivingArea.from_json(json)
# print the JSON string representation of the object
print(LivingArea.to_json())

# convert the object into a dict
living_area_dict = living_area_instance.to_dict()
# create an instance of LivingArea from a dict
living_area_from_dict = LivingArea.from_dict(living_area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


