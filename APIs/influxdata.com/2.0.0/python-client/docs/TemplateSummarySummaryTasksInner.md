# TemplateSummarySummaryTasksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**env_references** | [**List[TemplateEnvReferencesInner]**](TemplateEnvReferencesInner.md) |  | [optional] 
**every** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**name** | **str** |  | [optional] 
**offset** | **str** |  | [optional] 
**query** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_summary_tasks_inner import TemplateSummarySummaryTasksInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummarySummaryTasksInner from a JSON string
template_summary_summary_tasks_inner_instance = TemplateSummarySummaryTasksInner.from_json(json)
# print the JSON string representation of the object
print(TemplateSummarySummaryTasksInner.to_json())

# convert the object into a dict
template_summary_summary_tasks_inner_dict = template_summary_summary_tasks_inner_instance.to_dict()
# create an instance of TemplateSummarySummaryTasksInner from a dict
template_summary_summary_tasks_inner_from_dict = TemplateSummarySummaryTasksInner.from_dict(template_summary_summary_tasks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


