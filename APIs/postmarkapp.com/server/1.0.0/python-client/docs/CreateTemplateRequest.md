# CreateTemplateRequest

The contents required for creating a new template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | The optional string identifier for referring to this Template (numbers, letters, and &#39;.&#39;, &#39;-&#39;, &#39;_&#39; characters, starts with a letter). | [optional] 
**html_body** | **str** | The HTML template definition for this Template. | [optional] 
**name** | **str** | The friendly display name for the template. | 
**subject** | **str** | The Subject template definition for this Template. | 
**text_body** | **str** | The Text template definition for this Template. | [optional] 

## Example

```python
from openapi_client.models.create_template_request import CreateTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTemplateRequest from a JSON string
create_template_request_instance = CreateTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTemplateRequest.to_json())

# convert the object into a dict
create_template_request_dict = create_template_request_instance.to_dict()
# create an instance of CreateTemplateRequest from a dict
create_template_request_from_dict = CreateTemplateRequest.from_dict(create_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


