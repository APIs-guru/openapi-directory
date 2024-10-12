# TemplateProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the template. | [optional] 
**parameters** | [**List[TemplatePropertyParametersInner]**](TemplatePropertyParametersInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_property import TemplateProperty

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateProperty from a JSON string
template_property_instance = TemplateProperty.from_json(json)
# print the JSON string representation of the object
print(TemplateProperty.to_json())

# convert the object into a dict
template_property_dict = template_property_instance.to_dict()
# create an instance of TemplateProperty from a dict
template_property_from_dict = TemplateProperty.from_dict(template_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


