# TimeSeriesIdProperty

A definition of a single property that can be used in time series ID properties defined during environment creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the property. | [optional] [readonly] 
**type** | **str** | The type of the property. Currently, only \&quot;String\&quot; is supported. | [optional] [readonly] 

## Example

```python
from openapi_client.models.time_series_id_property import TimeSeriesIdProperty

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesIdProperty from a JSON string
time_series_id_property_instance = TimeSeriesIdProperty.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesIdProperty.to_json())

# convert the object into a dict
time_series_id_property_dict = time_series_id_property_instance.to_dict()
# create an instance of TimeSeriesIdProperty from a dict
time_series_id_property_from_dict = TimeSeriesIdProperty.from_dict(time_series_id_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


