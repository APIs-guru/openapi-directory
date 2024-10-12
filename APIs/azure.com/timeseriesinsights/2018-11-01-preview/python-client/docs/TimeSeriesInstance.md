# TimeSeriesInstance

Time series instances are the time series themselves. In most cases, the deviceId or assetId is the unique identifier of the asset in the environment. Instances have descriptive information associated with them called instance fields. At a minimum, instance fields include hierarchy information. They can also include useful, descriptive data like the manufacturer, operator, or the last service date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | This optional field contains description about the instance. | [optional] 
**hierarchy_ids** | **List[str]** | Set of time series hierarchy IDs that the instance belong to. May be null. | [optional] 
**instance_fields** | **Dict[str, object]** | Set of key-value pairs that contain user-defined instance properties. May be null. | [optional] 
**name** | **str** | Optional name of the instance which is unique in an environment. Names acts as a mutable alias or display name of the time series instance. Mutable, may be null. | [optional] 
**time_series_id** | **List[object]** | A single Time Series ID value that is an array of primitive values that uniquely identifies a time series instance (e.g. a single device). Note that a single Time Series ID can be composite if multiple properties are specified as Time Series ID at environment creation time. The position and type of values must match Time Series ID properties specified on the environment and returned by Get Model Setting API. Cannot be empty. | 
**type_id** | **str** | This represents the type that this instance belongs to. Never null. | 

## Example

```python
from openapi_client.models.time_series_instance import TimeSeriesInstance

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesInstance from a JSON string
time_series_instance_instance = TimeSeriesInstance.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesInstance.to_json())

# convert the object into a dict
time_series_instance_dict = time_series_instance_instance.to_dict()
# create an instance of TimeSeriesInstance from a dict
time_series_instance_from_dict = TimeSeriesInstance.from_dict(time_series_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


