# XPSArrayStats

The data statistics of a series of ARRAY values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_stats** | [**XPSCommonStats**](XPSCommonStats.md) |  | [optional] 
**member_stats** | [**XPSDataStats**](XPSDataStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_array_stats import XPSArrayStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSArrayStats from a JSON string
xps_array_stats_instance = XPSArrayStats.from_json(json)
# print the JSON string representation of the object
print(XPSArrayStats.to_json())

# convert the object into a dict
xps_array_stats_dict = xps_array_stats_instance.to_dict()
# create an instance of XPSArrayStats from a dict
xps_array_stats_from_dict = XPSArrayStats.from_dict(xps_array_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


