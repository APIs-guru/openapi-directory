# TemplateApply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[TemplateApplyActionsInner]**](TemplateApplyActionsInner.md) |  | [optional] 
**dry_run** | **bool** |  | [optional] 
**env_refs** | [**Dict[str, TemplateApplyEnvRefsValue]**](TemplateApplyEnvRefsValue.md) |  | [optional] 
**org_id** | **str** |  | [optional] 
**remotes** | [**List[TemplateApplyRemotesInner]**](TemplateApplyRemotesInner.md) |  | [optional] 
**secrets** | **Dict[str, str]** |  | [optional] 
**stack_id** | **str** |  | [optional] 
**template** | [**TemplateApplyTemplate**](TemplateApplyTemplate.md) |  | [optional] 
**templates** | [**List[TemplateApplyTemplate]**](TemplateApplyTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_apply import TemplateApply

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateApply from a JSON string
template_apply_instance = TemplateApply.from_json(json)
# print the JSON string representation of the object
print(TemplateApply.to_json())

# convert the object into a dict
template_apply_dict = template_apply_instance.to_dict()
# create an instance of TemplateApply from a dict
template_apply_from_dict = TemplateApply.from_dict(template_apply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


