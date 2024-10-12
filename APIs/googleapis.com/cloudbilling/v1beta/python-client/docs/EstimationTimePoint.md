# EstimationTimePoint

Represents a point in time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimation_time_frame_offset** | **str** | The point in time, relative to the start of the time frame covered by the cost estimate. | [optional] 

## Example

```python
from openapi_client.models.estimation_time_point import EstimationTimePoint

# TODO update the JSON string below
json = "{}"
# create an instance of EstimationTimePoint from a JSON string
estimation_time_point_instance = EstimationTimePoint.from_json(json)
# print the JSON string representation of the object
print(EstimationTimePoint.to_json())

# convert the object into a dict
estimation_time_point_dict = estimation_time_point_instance.to_dict()
# create an instance of EstimationTimePoint from a dict
estimation_time_point_from_dict = EstimationTimePoint.from_dict(estimation_time_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


