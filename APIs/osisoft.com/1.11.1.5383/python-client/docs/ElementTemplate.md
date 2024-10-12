# ElementTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_element_to_extend** | **bool** |  | [optional] 
**base_template** | **str** |  | [optional] 
**can_be_acknowledged** | **bool** |  | [optional] 
**category_names** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**extended_properties** | [**Dict[str, Value]**](Value.md) |  | [optional] 
**id** | **str** |  | [optional] 
**instance_type** | **str** |  | [optional] 
**links** | [**ElementTemplateLinks**](ElementTemplateLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**naming_pattern** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.element_template import ElementTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ElementTemplate from a JSON string
element_template_instance = ElementTemplate.from_json(json)
# print the JSON string representation of the object
print(ElementTemplate.to_json())

# convert the object into a dict
element_template_dict = element_template_instance.to_dict()
# create an instance of ElementTemplate from a dict
element_template_from_dict = ElementTemplate.from_dict(element_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


