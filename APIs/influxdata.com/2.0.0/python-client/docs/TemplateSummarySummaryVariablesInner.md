# TemplateSummarySummaryVariablesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**VariableProperties**](VariableProperties.md) |  | [optional] 
**description** | **str** |  | [optional] 
**env_references** | [**List[TemplateEnvReferencesInner]**](TemplateEnvReferencesInner.md) |  | [optional] 
**id** | **str** |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**label_associations** | [**List[TemplateSummaryLabel]**](TemplateSummaryLabel.md) |  | [optional] 
**name** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_summary_variables_inner import TemplateSummarySummaryVariablesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummarySummaryVariablesInner from a JSON string
template_summary_summary_variables_inner_instance = TemplateSummarySummaryVariablesInner.from_json(json)
# print the JSON string representation of the object
print(TemplateSummarySummaryVariablesInner.to_json())

# convert the object into a dict
template_summary_summary_variables_inner_dict = template_summary_summary_variables_inner_instance.to_dict()
# create an instance of TemplateSummarySummaryVariablesInner from a dict
template_summary_summary_variables_inner_from_dict = TemplateSummarySummaryVariablesInner.from_dict(template_summary_summary_variables_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


