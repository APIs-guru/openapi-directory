# ScreenDensity

Represents a screen density.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**density_alias** | **str** | Alias for a screen density. | [optional] 
**density_dpi** | **int** | Value for density dpi. | [optional] 

## Example

```python
from openapi_client.models.screen_density import ScreenDensity

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenDensity from a JSON string
screen_density_instance = ScreenDensity.from_json(json)
# print the JSON string representation of the object
print(ScreenDensity.to_json())

# convert the object into a dict
screen_density_dict = screen_density_instance.to_dict()
# create an instance of ScreenDensity from a dict
screen_density_from_dict = ScreenDensity.from_dict(screen_density_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


