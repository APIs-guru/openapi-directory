# SingleCategoryStats

The statistics of a single CATEGORY value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of occurrences of this value in the series. | [optional] 
**value** | **str** | The CATEGORY value. | [optional] 

## Example

```python
from openapi_client.models.single_category_stats import SingleCategoryStats

# TODO update the JSON string below
json = "{}"
# create an instance of SingleCategoryStats from a JSON string
single_category_stats_instance = SingleCategoryStats.from_json(json)
# print the JSON string representation of the object
print(SingleCategoryStats.to_json())

# convert the object into a dict
single_category_stats_dict = single_category_stats_instance.to_dict()
# create an instance of SingleCategoryStats from a dict
single_category_stats_from_dict = SingleCategoryStats.from_dict(single_category_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


