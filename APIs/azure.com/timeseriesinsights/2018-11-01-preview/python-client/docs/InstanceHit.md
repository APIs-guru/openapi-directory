# InstanceHit

Time series instance that is returned by instances search call. Returned instance matched the search request and contains highlighted text to be displayed to the user if it is set to 'true'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hierarchy_ids** | **List[str]** | List of time series hierarchy IDs that time series instance which matched the search request belongs to. Cannot be used to lookup hierarchies. May be null. | [optional] [readonly] 
**highlights** | [**InstanceHitHighlights**](InstanceHitHighlights.md) |  | [optional] 
**name** | **str** | Name of the time series instance that matched the search request. May be null. | [optional] [readonly] 
**time_series_id** | **List[object]** | A single Time Series ID value that is an array of primitive values that uniquely identifies a time series instance (e.g. a single device). Note that a single Time Series ID can be composite if multiple properties are specified as Time Series ID at environment creation time. The position and type of values must match Time Series ID properties specified on the environment and returned by Get Model Setting API. Cannot be empty. | [optional] 
**type_id** | **str** | Represents the type that time series instance which matched the search request belongs to. Never null. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_hit import InstanceHit

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceHit from a JSON string
instance_hit_instance = InstanceHit.from_json(json)
# print the JSON string representation of the object
print(InstanceHit.to_json())

# convert the object into a dict
instance_hit_dict = instance_hit_instance.to_dict()
# create an instance of InstanceHit from a dict
instance_hit_from_dict = InstanceHit.from_dict(instance_hit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


