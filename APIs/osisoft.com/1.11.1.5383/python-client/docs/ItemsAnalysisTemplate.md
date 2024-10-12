# ItemsAnalysisTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AnalysisTemplate]**](AnalysisTemplate.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_analysis_template import ItemsAnalysisTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAnalysisTemplate from a JSON string
items_analysis_template_instance = ItemsAnalysisTemplate.from_json(json)
# print the JSON string representation of the object
print(ItemsAnalysisTemplate.to_json())

# convert the object into a dict
items_analysis_template_dict = items_analysis_template_instance.to_dict()
# create an instance of ItemsAnalysisTemplate from a dict
items_analysis_template_from_dict = ItemsAnalysisTemplate.from_dict(items_analysis_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


