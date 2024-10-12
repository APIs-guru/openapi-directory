# DocumentOutputConfig

A document translation request output config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GcsDestination**](GcsDestination.md) |  | [optional] 
**mime_type** | **str** | Optional. Specifies the translated document&#39;s mime_type. If not specified, the translated file&#39;s mime type will be the same as the input file&#39;s mime type. Currently only support the output mime type to be the same as input mime type. - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet | [optional] 

## Example

```python
from openapi_client.models.document_output_config import DocumentOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentOutputConfig from a JSON string
document_output_config_instance = DocumentOutputConfig.from_json(json)
# print the JSON string representation of the object
print(DocumentOutputConfig.to_json())

# convert the object into a dict
document_output_config_dict = document_output_config_instance.to_dict()
# create an instance of DocumentOutputConfig from a dict
document_output_config_from_dict = DocumentOutputConfig.from_dict(document_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


