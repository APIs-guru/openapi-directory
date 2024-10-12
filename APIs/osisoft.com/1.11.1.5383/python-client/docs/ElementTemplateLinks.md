# ElementTemplateLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_templates** | **str** |  | [optional] 
**attribute_templates** | **str** |  | [optional] 
**base_template** | **str** |  | [optional] 
**base_templates** | **str** |  | [optional] 
**categories** | **str** |  | [optional] 
**database** | **str** |  | [optional] 
**default_attribute** | **str** |  | [optional] 
**derived_templates** | **str** |  | [optional] 
**notification_rule_templates** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.element_template_links import ElementTemplateLinks

# TODO update the JSON string below
json = "{}"
# create an instance of ElementTemplateLinks from a JSON string
element_template_links_instance = ElementTemplateLinks.from_json(json)
# print the JSON string representation of the object
print(ElementTemplateLinks.to_json())

# convert the object into a dict
element_template_links_dict = element_template_links_instance.to_dict()
# create an instance of ElementTemplateLinks from a dict
element_template_links_from_dict = ElementTemplateLinks.from_dict(element_template_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


