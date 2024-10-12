# TemplateApplyTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** |  | [optional] 
**contents** | [**List[TemplateInner]**](TemplateInner.md) |  | [optional] 
**sources** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.template_apply_template import TemplateApplyTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateApplyTemplate from a JSON string
template_apply_template_instance = TemplateApplyTemplate.from_json(json)
# print the JSON string representation of the object
print(TemplateApplyTemplate.to_json())

# convert the object into a dict
template_apply_template_dict = template_apply_template_instance.to_dict()
# create an instance of TemplateApplyTemplate from a dict
template_apply_template_from_dict = TemplateApplyTemplate.from_dict(template_apply_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


