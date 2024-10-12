# ItemsAnalysisRulePlugIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AnalysisRulePlugIn]**](AnalysisRulePlugIn.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_analysis_rule_plug_in import ItemsAnalysisRulePlugIn

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAnalysisRulePlugIn from a JSON string
items_analysis_rule_plug_in_instance = ItemsAnalysisRulePlugIn.from_json(json)
# print the JSON string representation of the object
print(ItemsAnalysisRulePlugIn.to_json())

# convert the object into a dict
items_analysis_rule_plug_in_dict = items_analysis_rule_plug_in_instance.to_dict()
# create an instance of ItemsAnalysisRulePlugIn from a dict
items_analysis_rule_plug_in_from_dict = ItemsAnalysisRulePlugIn.from_dict(items_analysis_rule_plug_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


