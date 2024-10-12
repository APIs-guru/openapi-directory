# PointInTimeRange

Provides details for log ranges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | End time of the time range for log recovery. | [optional] 
**start_time** | **datetime** | Start time of the time range for log recovery. | [optional] 

## Example

```python
from openapi_client.models.point_in_time_range import PointInTimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of PointInTimeRange from a JSON string
point_in_time_range_instance = PointInTimeRange.from_json(json)
# print the JSON string representation of the object
print(PointInTimeRange.to_json())

# convert the object into a dict
point_in_time_range_dict = point_in_time_range_instance.to_dict()
# create an instance of PointInTimeRange from a dict
point_in_time_range_from_dict = PointInTimeRange.from_dict(point_in_time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


