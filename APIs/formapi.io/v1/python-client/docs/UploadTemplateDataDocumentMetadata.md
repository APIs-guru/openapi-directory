# UploadTemplateDataDocumentMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** |  | 
**mime_type** | **str** |  | 
**size** | **int** |  | 

## Example

```python
from openapi_client.models.upload_template_data_document_metadata import UploadTemplateDataDocumentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UploadTemplateDataDocumentMetadata from a JSON string
upload_template_data_document_metadata_instance = UploadTemplateDataDocumentMetadata.from_json(json)
# print the JSON string representation of the object
print(UploadTemplateDataDocumentMetadata.to_json())

# convert the object into a dict
upload_template_data_document_metadata_dict = upload_template_data_document_metadata_instance.to_dict()
# create an instance of UploadTemplateDataDocumentMetadata from a dict
upload_template_data_document_metadata_from_dict = UploadTemplateDataDocumentMetadata.from_dict(upload_template_data_document_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


