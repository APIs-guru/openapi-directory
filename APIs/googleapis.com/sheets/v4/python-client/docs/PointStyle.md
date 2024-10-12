# PointStyle

The style of a point on the chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shape** | **str** | The point shape. If empty or unspecified, a default shape is used. | [optional] 
**size** | **float** | The point size. If empty, a default size is used. | [optional] 

## Example

```python
from openapi_client.models.point_style import PointStyle

# TODO update the JSON string below
json = "{}"
# create an instance of PointStyle from a JSON string
point_style_instance = PointStyle.from_json(json)
# print the JSON string representation of the object
print(PointStyle.to_json())

# convert the object into a dict
point_style_dict = point_style_instance.to_dict()
# create an instance of PointStyle from a dict
point_style_from_dict = PointStyle.from_dict(point_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


