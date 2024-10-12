# XPSCategoryStatsSingleCategoryStats

The statistics of a single CATEGORY value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of occurrences of this value in the series. | [optional] 
**value** | **str** | The CATEGORY value. | [optional] 

## Example

```python
from openapi_client.models.xps_category_stats_single_category_stats import XPSCategoryStatsSingleCategoryStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSCategoryStatsSingleCategoryStats from a JSON string
xps_category_stats_single_category_stats_instance = XPSCategoryStatsSingleCategoryStats.from_json(json)
# print the JSON string representation of the object
print(XPSCategoryStatsSingleCategoryStats.to_json())

# convert the object into a dict
xps_category_stats_single_category_stats_dict = xps_category_stats_single_category_stats_instance.to_dict()
# create an instance of XPSCategoryStatsSingleCategoryStats from a dict
xps_category_stats_single_category_stats_from_dict = XPSCategoryStatsSingleCategoryStats.from_dict(xps_category_stats_single_category_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


