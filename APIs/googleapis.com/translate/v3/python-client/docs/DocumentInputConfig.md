# DocumentInputConfig

A document translation request input config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | Document&#39;s content represented as a stream of bytes. | [optional] 
**gcs_source** | [**GcsSource**](GcsSource.md) |  | [optional] 
**mime_type** | **str** | Specifies the input document&#39;s mime_type. If not specified it will be determined using the file extension for gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently supported mime types are: - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet | [optional] 

## Example

```python
from openapi_client.models.document_input_config import DocumentInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentInputConfig from a JSON string
document_input_config_instance = DocumentInputConfig.from_json(json)
# print the JSON string representation of the object
print(DocumentInputConfig.to_json())

# convert the object into a dict
document_input_config_dict = document_input_config_instance.to_dict()
# create an instance of DocumentInputConfig from a dict
document_input_config_from_dict = DocumentInputConfig.from_dict(document_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


