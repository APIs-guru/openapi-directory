# UploadTemplateDataDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | [**UploadTemplateDataDocumentMetadata**](UploadTemplateDataDocumentMetadata.md) |  | 
**storage** | **str** |  | 

## Example

```python
from openapi_client.models.upload_template_data_document import UploadTemplateDataDocument

# TODO update the JSON string below
json = "{}"
# create an instance of UploadTemplateDataDocument from a JSON string
upload_template_data_document_instance = UploadTemplateDataDocument.from_json(json)
# print the JSON string representation of the object
print(UploadTemplateDataDocument.to_json())

# convert the object into a dict
upload_template_data_document_dict = upload_template_data_document_instance.to_dict()
# create an instance of UploadTemplateDataDocument from a dict
upload_template_data_document_from_dict = UploadTemplateDataDocument.from_dict(upload_template_data_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


