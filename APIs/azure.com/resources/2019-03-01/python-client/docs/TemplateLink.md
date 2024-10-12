# TemplateLink

Entity representing the reference to the template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_version** | **str** | If included, must match the ContentVersion in the template. | [optional] 
**uri** | **str** | The URI of the template to deploy. | 

## Example

```python
from openapi_client.models.template_link import TemplateLink

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateLink from a JSON string
template_link_instance = TemplateLink.from_json(json)
# print the JSON string representation of the object
print(TemplateLink.to_json())

# convert the object into a dict
template_link_dict = template_link_instance.to_dict()
# create an instance of TemplateLink from a dict
template_link_from_dict = TemplateLink.from_dict(template_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


