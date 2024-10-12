# ProgressTimeseries

Information about the progress of some component of job execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_progress** | **float** | The current progress of the component, in the range [0,1]. | [optional] 
**data_points** | [**List[Point]**](Point.md) | History of progress for the component. Points are sorted by time. | [optional] 

## Example

```python
from openapi_client.models.progress_timeseries import ProgressTimeseries

# TODO update the JSON string below
json = "{}"
# create an instance of ProgressTimeseries from a JSON string
progress_timeseries_instance = ProgressTimeseries.from_json(json)
# print the JSON string representation of the object
print(ProgressTimeseries.to_json())

# convert the object into a dict
progress_timeseries_dict = progress_timeseries_instance.to_dict()
# create an instance of ProgressTimeseries from a dict
progress_timeseries_from_dict = ProgressTimeseries.from_dict(progress_timeseries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


