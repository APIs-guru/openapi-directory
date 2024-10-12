# Timeseries

Defines the Timeseries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TimeseriesProperties**](TimeseriesProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.timeseries import Timeseries

# TODO update the JSON string below
json = "{}"
# create an instance of Timeseries from a JSON string
timeseries_instance = Timeseries.from_json(json)
# print the JSON string representation of the object
print(Timeseries.to_json())

# convert the object into a dict
timeseries_dict = timeseries_instance.to_dict()
# create an instance of Timeseries from a dict
timeseries_from_dict = Timeseries.from_dict(timeseries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


