# Coordinate

Container for coordinates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** | Decimal latitude. Range: -90 (South Pole) to +90 (North Pole), e.g. “51.540”. | [optional] 
**longitude** | **float** | Decimal longitude. Range: -180 (West of Prime Meridian) to +180 (East of Prime Meridian). | [optional] 

## Example

```python
from openapi_client.models.coordinate import Coordinate

# TODO update the JSON string below
json = "{}"
# create an instance of Coordinate from a JSON string
coordinate_instance = Coordinate.from_json(json)
# print the JSON string representation of the object
print(Coordinate.to_json())

# convert the object into a dict
coordinate_dict = coordinate_instance.to_dict()
# create an instance of Coordinate from a dict
coordinate_from_dict = Coordinate.from_dict(coordinate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


