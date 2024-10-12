# Template


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_additional_properties** | **bool** |  | 
**description** | **str** |  | 
**document_url** | **str** |  | 
**editable_submissions** | **bool** |  | 
**expiration_interval** | **str** |  | 
**expire_after** | **float** |  | 
**expire_submissions** | **bool** |  | 
**id** | **str** |  | 
**locked** | **bool** |  | 
**name** | **str** |  | 
**page_dimensions** | **List[List[float]]** |  | 
**parent_folder_id** | **str** |  | 
**path** | **str** |  | 
**permanent_document_url** | **str** |  | 
**public_submissions** | **bool** |  | 
**public_web_form** | **bool** |  | 
**redirect_url** | **str** |  | 
**slack_webhook_url** | **str** |  | 
**template_type** | **str** |  | 
**webhook_url** | **str** |  | 

## Example

```python
from openapi_client.models.template import Template

# TODO update the JSON string below
json = "{}"
# create an instance of Template from a JSON string
template_instance = Template.from_json(json)
# print the JSON string representation of the object
print(Template.to_json())

# convert the object into a dict
template_dict = template_instance.to_dict()
# create an instance of Template from a dict
template_from_dict = Template.from_dict(template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


