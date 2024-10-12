# XPSCategoryStats

The data statistics of a series of CATEGORY values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_stats** | [**XPSCommonStats**](XPSCommonStats.md) |  | [optional] 
**top_category_stats** | [**List[XPSCategoryStatsSingleCategoryStats]**](XPSCategoryStatsSingleCategoryStats.md) | The statistics of the top 20 CATEGORY values, ordered by CategoryStats.SingleCategoryStats.count. | [optional] 

## Example

```python
from openapi_client.models.xps_category_stats import XPSCategoryStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSCategoryStats from a JSON string
xps_category_stats_instance = XPSCategoryStats.from_json(json)
# print the JSON string representation of the object
print(XPSCategoryStats.to_json())

# convert the object into a dict
xps_category_stats_dict = xps_category_stats_instance.to_dict()
# create an instance of XPSCategoryStats from a dict
xps_category_stats_from_dict = XPSCategoryStats.from_dict(xps_category_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


