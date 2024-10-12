# AttributeTemplateLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_templates** | **str** |  | [optional] 
**categories** | **str** |  | [optional] 
**element_template** | **str** |  | [optional] 
**parent** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**trait** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_template_links import AttributeTemplateLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeTemplateLinks from a JSON string
attribute_template_links_instance = AttributeTemplateLinks.from_json(json)
# print the JSON string representation of the object
print(AttributeTemplateLinks.to_json())

# convert the object into a dict
attribute_template_links_dict = attribute_template_links_instance.to_dict()
# create an instance of AttributeTemplateLinks from a dict
attribute_template_links_from_dict = AttributeTemplateLinks.from_dict(attribute_template_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


