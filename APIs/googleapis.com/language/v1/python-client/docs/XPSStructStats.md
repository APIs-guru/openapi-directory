# XPSStructStats

The data statistics of a series of STRUCT values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_stats** | [**XPSCommonStats**](XPSCommonStats.md) |  | [optional] 
**field_stats** | [**Dict[str, XPSDataStats]**](XPSDataStats.md) | Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs. | [optional] 

## Example

```python
from openapi_client.models.xps_struct_stats import XPSStructStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSStructStats from a JSON string
xps_struct_stats_instance = XPSStructStats.from_json(json)
# print the JSON string representation of the object
print(XPSStructStats.to_json())

# convert the object into a dict
xps_struct_stats_dict = xps_struct_stats_instance.to_dict()
# create an instance of XPSStructStats from a dict
xps_struct_stats_from_dict = XPSStructStats.from_dict(xps_struct_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


