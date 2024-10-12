# TimeSeriesType

Time series type defines variables or formulas for doing computation on events associated with time series instances. Each time series instance is associated with exactly one type. A type can have one or more variables. For example, a time series instance might be of type Temperature Sensor, which consists of the variables avg temperature, min temperature, and max temperature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the type. May be null. | [optional] 
**id** | **str** | Unique type identifier that is immutable. Can be null on create or update requests, and then server generates the ID. Not null on get and delete operations. | [optional] 
**name** | **str** | User-given unique name for the type. Mutable, not null. | 
**variables** | **object** | Different variables associated with the type. Not empty, not null. | 

## Example

```python
from openapi_client.models.time_series_type import TimeSeriesType

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesType from a JSON string
time_series_type_instance = TimeSeriesType.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesType.to_json())

# convert the object into a dict
time_series_type_dict = time_series_type_instance.to_dict()
# create an instance of TimeSeriesType from a dict
time_series_type_from_dict = TimeSeriesType.from_dict(time_series_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


