# PointData

A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_interval** | [**TimeInterval**](TimeInterval.md) |  | [optional] 
**values** | [**List[TypedValue]**](TypedValue.md) | The values that make up the point. | [optional] 

## Example

```python
from openapi_client.models.point_data import PointData

# TODO update the JSON string below
json = "{}"
# create an instance of PointData from a JSON string
point_data_instance = PointData.from_json(json)
# print the JSON string representation of the object
print(PointData.to_json())

# convert the object into a dict
point_data_dict = point_data_instance.to_dict()
# create an instance of PointData from a dict
point_data_from_dict = PointData.from_dict(point_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


