# EditTemplateRequest

The contents required for creating a new template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | The optional string identifier for referring to this Template (numbers, letters, and &#39;.&#39;, &#39;-&#39;, &#39;_&#39; characters, starts with a letter). | [optional] 
**html_body** | **str** | The HTML template definition for this Template. | [optional] 
**name** | **str** | The friendly display name for the template. | [optional] 
**subject** | **str** | The Subject template definition for this Template. | [optional] 
**text_body** | **str** | The Text template definition for this Template. | [optional] 

## Example

```python
from openapi_client.models.edit_template_request import EditTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditTemplateRequest from a JSON string
edit_template_request_instance = EditTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(EditTemplateRequest.to_json())

# convert the object into a dict
edit_template_request_dict = edit_template_request_instance.to_dict()
# create an instance of EditTemplateRequest from a dict
edit_template_request_from_dict = EditTemplateRequest.from_dict(edit_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


