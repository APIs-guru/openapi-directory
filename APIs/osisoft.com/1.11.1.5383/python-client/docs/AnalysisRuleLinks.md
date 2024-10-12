# AnalysisRuleLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis** | **str** |  | [optional] 
**analysis_rules** | **str** |  | [optional] 
**analysis_template** | **str** |  | [optional] 
**parent** | **str** |  | [optional] 
**plug_in** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analysis_rule_links import AnalysisRuleLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisRuleLinks from a JSON string
analysis_rule_links_instance = AnalysisRuleLinks.from_json(json)
# print the JSON string representation of the object
print(AnalysisRuleLinks.to_json())

# convert the object into a dict
analysis_rule_links_dict = analysis_rule_links_instance.to_dict()
# create an instance of AnalysisRuleLinks from a dict
analysis_rule_links_from_dict = AnalysisRuleLinks.from_dict(analysis_rule_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


