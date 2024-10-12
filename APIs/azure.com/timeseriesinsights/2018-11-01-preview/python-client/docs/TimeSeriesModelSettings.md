# TimeSeriesModelSettings

Time series model settings including model name, Time Series ID properties and default type ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_type_id** | **str** | Default type ID of the model that new time series instances will automatically belong to. | [optional] [readonly] 
**name** | **str** | Time series model display name which is shown in the UX. Examples: \&quot;Temperature Sensors\&quot;, \&quot;MyDevices\&quot;. | [optional] [readonly] 
**time_series_id_properties** | [**List[TimeSeriesIdProperty]**](TimeSeriesIdProperty.md) | Time series ID properties defined during environment creation. | [optional] 

## Example

```python
from openapi_client.models.time_series_model_settings import TimeSeriesModelSettings

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesModelSettings from a JSON string
time_series_model_settings_instance = TimeSeriesModelSettings.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesModelSettings.to_json())

# convert the object into a dict
time_series_model_settings_dict = time_series_model_settings_instance.to_dict()
# create an instance of TimeSeriesModelSettings from a dict
time_series_model_settings_from_dict = TimeSeriesModelSettings.from_dict(time_series_model_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


