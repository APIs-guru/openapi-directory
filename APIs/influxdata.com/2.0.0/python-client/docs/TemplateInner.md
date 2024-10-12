# TemplateInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**meta** | [**TemplateInnerMeta**](TemplateInnerMeta.md) |  | [optional] 
**spec** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.template_inner import TemplateInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateInner from a JSON string
template_inner_instance = TemplateInner.from_json(json)
# print the JSON string representation of the object
print(TemplateInner.to_json())

# convert the object into a dict
template_inner_dict = template_inner_instance.to_dict()
# create an instance of TemplateInner from a dict
template_inner_from_dict = TemplateInner.from_dict(template_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


