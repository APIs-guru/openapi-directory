# AnalysisRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_string** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**display_string** | **str** |  | [optional] 
**editor_type** | **str** |  | [optional] 
**has_children** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**is_configured** | **bool** |  | [optional] 
**is_initializing** | **bool** |  | [optional] 
**links** | [**AnalysisRuleLinks**](AnalysisRuleLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**plug_in_name** | **str** |  | [optional] 
**supported_behaviors** | **List[str]** |  | [optional] 
**variable_mapping** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analysis_rule import AnalysisRule

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisRule from a JSON string
analysis_rule_instance = AnalysisRule.from_json(json)
# print the JSON string representation of the object
print(AnalysisRule.to_json())

# convert the object into a dict
analysis_rule_dict = analysis_rule_instance.to_dict()
# create an instance of AnalysisRule from a dict
analysis_rule_from_dict = AnalysisRule.from_dict(analysis_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


