# XPSCommonStats

Common statistics for a column with a specified data type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distinct_value_count** | **str** |  | [optional] 
**null_value_count** | **str** |  | [optional] 
**valid_value_count** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.xps_common_stats import XPSCommonStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSCommonStats from a JSON string
xps_common_stats_instance = XPSCommonStats.from_json(json)
# print the JSON string representation of the object
print(XPSCommonStats.to_json())

# convert the object into a dict
xps_common_stats_dict = xps_common_stats_instance.to_dict()
# create an instance of XPSCommonStats from a dict
xps_common_stats_from_dict = XPSCommonStats.from_dict(xps_common_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


