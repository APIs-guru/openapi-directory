# ItemsAnalysisCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AnalysisCategory]**](AnalysisCategory.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_analysis_category import ItemsAnalysisCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAnalysisCategory from a JSON string
items_analysis_category_instance = ItemsAnalysisCategory.from_json(json)
# print the JSON string representation of the object
print(ItemsAnalysisCategory.to_json())

# convert the object into a dict
items_analysis_category_dict = items_analysis_category_instance.to_dict()
# create an instance of ItemsAnalysisCategory from a dict
items_analysis_category_from_dict = ItemsAnalysisCategory.from_dict(items_analysis_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


