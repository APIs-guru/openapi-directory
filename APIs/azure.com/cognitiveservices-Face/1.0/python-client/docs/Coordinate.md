# Coordinate

Coordinates within an image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **float** | The horizontal component, in pixels. | 
**y** | **float** | The vertical component, in pixels. | 

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


