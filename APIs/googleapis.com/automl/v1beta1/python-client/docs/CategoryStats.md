# CategoryStats

The data statistics of a series of CATEGORY values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**top_category_stats** | [**List[SingleCategoryStats]**](SingleCategoryStats.md) | The statistics of the top 20 CATEGORY values, ordered by count. | [optional] 

## Example

```python
from openapi_client.models.category_stats import CategoryStats

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryStats from a JSON string
category_stats_instance = CategoryStats.from_json(json)
# print the JSON string representation of the object
print(CategoryStats.to_json())

# convert the object into a dict
category_stats_dict = category_stats_instance.to_dict()
# create an instance of CategoryStats from a dict
category_stats_from_dict = CategoryStats.from_dict(category_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


