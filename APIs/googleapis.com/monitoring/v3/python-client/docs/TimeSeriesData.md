# TimeSeriesData

Represents the values of a time series associated with a TimeSeriesDescriptor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_values** | [**List[LabelValue]**](LabelValue.md) | The values of the labels in the time series identifier, given in the same order as the label_descriptors field of the TimeSeriesDescriptor associated with this object. Each value must have a value of the type given in the corresponding entry of label_descriptors. | [optional] 
**point_data** | [**List[PointData]**](PointData.md) | The points in the time series. | [optional] 

## Example

```python
from openapi_client.models.time_series_data import TimeSeriesData

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesData from a JSON string
time_series_data_instance = TimeSeriesData.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesData.to_json())

# convert the object into a dict
time_series_data_dict = time_series_data_instance.to_dict()
# create an instance of TimeSeriesData from a dict
time_series_data_from_dict = TimeSeriesData.from_dict(time_series_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


