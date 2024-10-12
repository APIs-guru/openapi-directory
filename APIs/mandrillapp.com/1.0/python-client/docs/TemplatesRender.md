# TemplatesRender


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**merge_vars** | [**List[MessagesSendMessageGlobalMergeVarsInner]**](MessagesSendMessageGlobalMergeVarsInner.md) |  | [optional] 
**template_content** | [**List[MessagesSendMessageGlobalMergeVarsInner]**](MessagesSendMessageGlobalMergeVarsInner.md) |  | [optional] 
**template_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.templates_render import TemplatesRender

# TODO update the JSON string below
json = "{}"
# create an instance of TemplatesRender from a JSON string
templates_render_instance = TemplatesRender.from_json(json)
# print the JSON string representation of the object
print(TemplatesRender.to_json())

# convert the object into a dict
templates_render_dict = templates_render_instance.to_dict()
# create an instance of TemplatesRender from a dict
templates_render_from_dict = TemplatesRender.from_dict(templates_render_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


