# ItemsAnalysisRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AnalysisRule]**](AnalysisRule.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_analysis_rule import ItemsAnalysisRule

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAnalysisRule from a JSON string
items_analysis_rule_instance = ItemsAnalysisRule.from_json(json)
# print the JSON string representation of the object
print(ItemsAnalysisRule.to_json())

# convert the object into a dict
items_analysis_rule_dict = items_analysis_rule_instance.to_dict()
# create an instance of ItemsAnalysisRule from a dict
items_analysis_rule_from_dict = ItemsAnalysisRule.from_dict(items_analysis_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


