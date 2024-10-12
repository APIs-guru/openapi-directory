# TemplateApplyActionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**properties** | [**TemplateApplyActionsInnerOneOf1Properties**](TemplateApplyActionsInnerOneOf1Properties.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_apply_actions_inner import TemplateApplyActionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateApplyActionsInner from a JSON string
template_apply_actions_inner_instance = TemplateApplyActionsInner.from_json(json)
# print the JSON string representation of the object
print(TemplateApplyActionsInner.to_json())

# convert the object into a dict
template_apply_actions_inner_dict = template_apply_actions_inner_instance.to_dict()
# create an instance of TemplateApplyActionsInner from a dict
template_apply_actions_inner_from_dict = TemplateApplyActionsInner.from_dict(template_apply_actions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


