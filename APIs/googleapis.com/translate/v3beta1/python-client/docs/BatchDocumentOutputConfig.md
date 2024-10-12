# BatchDocumentOutputConfig

Output configuration for BatchTranslateDocument request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GcsDestination**](GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_document_output_config import BatchDocumentOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDocumentOutputConfig from a JSON string
batch_document_output_config_instance = BatchDocumentOutputConfig.from_json(json)
# print the JSON string representation of the object
print(BatchDocumentOutputConfig.to_json())

# convert the object into a dict
batch_document_output_config_dict = batch_document_output_config_instance.to_dict()
# create an instance of BatchDocumentOutputConfig from a dict
batch_document_output_config_from_dict = BatchDocumentOutputConfig.from_dict(batch_document_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


