# DepreciationStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **float** | Price of year make model combination | [optional] 
**five_year_from_now** | **float** | price after five year from now | [optional] 
**five_year_from_now_percent** | **float** | price depreciation percent after five year from now | [optional] 
**name** | **str** | ymm_comb_name | [optional] 
**one_year_from_now** | **float** | price after one year from now | [optional] 
**one_year_from_now_percent** | **float** | price depreciation percent after one year from now | [optional] 
**two_year_from_now** | **float** | price after two year from now | [optional] 
**two_year_from_now_percent** | **float** | price depreciation percent after two year from now | [optional] 

## Example

```python
from openapi_client.models.depreciation_stats import DepreciationStats

# TODO update the JSON string below
json = "{}"
# create an instance of DepreciationStats from a JSON string
depreciation_stats_instance = DepreciationStats.from_json(json)
# print the JSON string representation of the object
print(DepreciationStats.to_json())

# convert the object into a dict
depreciation_stats_dict = depreciation_stats_instance.to_dict()
# create an instance of DepreciationStats from a dict
depreciation_stats_from_dict = DepreciationStats.from_dict(depreciation_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


