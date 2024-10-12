# FullTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_additional_properties** | **bool** |  | 
**defaults** | [**FullTemplateDefaults**](FullTemplateDefaults.md) |  | 
**demo** | **bool** |  | 
**description** | **str** |  | 
**document_filename** | **str** |  | 
**document_md5** | **str** |  | 
**document_parse_error** | **bool** |  | 
**document_processed** | **bool** |  | 
**document_state** | **str** |  | 
**document_url** | **str** |  | 
**editable_submissions** | **bool** |  | 
**embed_domains** | **List[str]** |  | 
**encrypt_pdfs** | **bool** |  | 
**encrypt_pdfs_password** | **str** |  | 
**expiration_interval** | **str** |  | 
**expire_after** | **float** |  | 
**expire_submissions** | **bool** |  | 
**field_order** | **List[List[float]]** |  | 
**fields** | **object** |  | 
**first_template** | **bool** |  | 
**footer_html** | **str** |  | 
**header_html** | **str** |  | 
**html** | **str** |  | 
**id** | **str** |  | 
**locked** | **bool** |  | 
**name** | **str** |  | 
**page_count** | **float** |  | 
**page_dimensions** | **List[List[float]]** |  | 
**parent_folder_id** | **str** |  | 
**path** | **str** |  | 
**permanent_document_url** | **str** |  | 
**public_submissions** | **bool** |  | 
**public_web_form** | **bool** |  | 
**redirect_url** | **str** |  | 
**scss** | **str** |  | 
**shared_field_data** | **object** |  | 
**slack_webhook_url** | **str** |  | 
**template_type** | **str** |  | 
**webhook_url** | **str** |  | 

## Example

```python
from openapi_client.models.full_template import FullTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of FullTemplate from a JSON string
full_template_instance = FullTemplate.from_json(json)
# print the JSON string representation of the object
print(FullTemplate.to_json())

# convert the object into a dict
full_template_dict = full_template_instance.to_dict()
# create an instance of FullTemplate from a dict
full_template_from_dict = FullTemplate.from_dict(full_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


