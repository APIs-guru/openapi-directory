# TemplatesPushResponseTemplatesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**alias** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**template_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.templates_push_response_templates_inner import TemplatesPushResponseTemplatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplatesPushResponseTemplatesInner from a JSON string
templates_push_response_templates_inner_instance = TemplatesPushResponseTemplatesInner.from_json(json)
# print the JSON string representation of the object
print(TemplatesPushResponseTemplatesInner.to_json())

# convert the object into a dict
templates_push_response_templates_inner_dict = templates_push_response_templates_inner_instance.to_dict()
# create an instance of TemplatesPushResponseTemplatesInner from a dict
templates_push_response_templates_inner_from_dict = TemplatesPushResponseTemplatesInner.from_dict(templates_push_response_templates_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


