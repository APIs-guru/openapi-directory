# BuildingCoordinates

Public API: Resources.buildings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** | Latitude in decimal degrees. | [optional] 
**longitude** | **float** | Longitude in decimal degrees. | [optional] 

## Example

```python
from openapi_client.models.building_coordinates import BuildingCoordinates

# TODO update the JSON string below
json = "{}"
# create an instance of BuildingCoordinates from a JSON string
building_coordinates_instance = BuildingCoordinates.from_json(json)
# print the JSON string representation of the object
print(BuildingCoordinates.to_json())

# convert the object into a dict
building_coordinates_dict = building_coordinates_instance.to_dict()
# create an instance of BuildingCoordinates from a dict
building_coordinates_from_dict = BuildingCoordinates.from_dict(building_coordinates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


