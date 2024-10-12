# PointDetailsPattern

This holds all the properties of one point

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **float** | This represents the x coordinate of the point | 
**y** | **float** | This represents the y coordinate of the point | 

## Example

```python
from openapi_client.models.point_details_pattern import PointDetailsPattern

# TODO update the JSON string below
json = "{}"
# create an instance of PointDetailsPattern from a JSON string
point_details_pattern_instance = PointDetailsPattern.from_json(json)
# print the JSON string representation of the object
print(PointDetailsPattern.to_json())

# convert the object into a dict
point_details_pattern_dict = point_details_pattern_instance.to_dict()
# create an instance of PointDetailsPattern from a dict
point_details_pattern_from_dict = PointDetailsPattern.from_dict(point_details_pattern_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


