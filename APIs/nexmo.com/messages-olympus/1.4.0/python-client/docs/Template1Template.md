# Template1Template


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the template. For WhatsApp use your WhatsApp namespace (available via Facebook Business Manager), followed by a colon : and the name of the template to use. | 
**parameters** | **List[str]** | The parameters are an array of strings, with the first string being used for {{1}} in the template, with the second being {{2}} etc. Only required if the template specified by &#x60;name&#x60; contains parameters. | [optional] 

## Example

```python
from openapi_client.models.template1_template import Template1Template

# TODO update the JSON string below
json = "{}"
# create an instance of Template1Template from a JSON string
template1_template_instance = Template1Template.from_json(json)
# print the JSON string representation of the object
print(Template1Template.to_json())

# convert the object into a dict
template1_template_dict = template1_template_instance.to_dict()
# create an instance of Template1Template from a dict
template1_template_from_dict = Template1Template.from_dict(template1_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


