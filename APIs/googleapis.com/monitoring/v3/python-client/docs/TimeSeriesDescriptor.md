# TimeSeriesDescriptor

A descriptor for the labels and points in a time series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_descriptors** | [**List[LabelDescriptor]**](LabelDescriptor.md) | Descriptors for the labels. | [optional] 
**point_descriptors** | [**List[ValueDescriptor]**](ValueDescriptor.md) | Descriptors for the point data value columns. | [optional] 

## Example

```python
from openapi_client.models.time_series_descriptor import TimeSeriesDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesDescriptor from a JSON string
time_series_descriptor_instance = TimeSeriesDescriptor.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesDescriptor.to_json())

# convert the object into a dict
time_series_descriptor_dict = time_series_descriptor_instance.to_dict()
# create an instance of TimeSeriesDescriptor from a dict
time_series_descriptor_from_dict = TimeSeriesDescriptor.from_dict(time_series_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


