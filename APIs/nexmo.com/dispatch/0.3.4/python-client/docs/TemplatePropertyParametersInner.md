# TemplatePropertyParametersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **str** | The parameters are an array. The first value being {{1}} in the template. | [optional] 

## Example

```python
from openapi_client.models.template_property_parameters_inner import TemplatePropertyParametersInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplatePropertyParametersInner from a JSON string
template_property_parameters_inner_instance = TemplatePropertyParametersInner.from_json(json)
# print the JSON string representation of the object
print(TemplatePropertyParametersInner.to_json())

# convert the object into a dict
template_property_parameters_inner_dict = template_property_parameters_inner_instance.to_dict()
# create an instance of TemplatePropertyParametersInner from a dict
template_property_parameters_inner_from_dict = TemplatePropertyParametersInner.from_dict(template_property_parameters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


