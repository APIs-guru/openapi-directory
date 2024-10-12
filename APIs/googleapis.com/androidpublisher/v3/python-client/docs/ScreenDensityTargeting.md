# ScreenDensityTargeting

Targeting based on screen density.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternatives** | [**List[ScreenDensity]**](ScreenDensity.md) | Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. | [optional] 
**value** | [**List[ScreenDensity]**](ScreenDensity.md) | Value of a screen density. | [optional] 

## Example

```python
from openapi_client.models.screen_density_targeting import ScreenDensityTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenDensityTargeting from a JSON string
screen_density_targeting_instance = ScreenDensityTargeting.from_json(json)
# print the JSON string representation of the object
print(ScreenDensityTargeting.to_json())

# convert the object into a dict
screen_density_targeting_dict = screen_density_targeting_instance.to_dict()
# create an instance of ScreenDensityTargeting from a dict
screen_density_targeting_from_dict = ScreenDensityTargeting.from_dict(screen_density_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


