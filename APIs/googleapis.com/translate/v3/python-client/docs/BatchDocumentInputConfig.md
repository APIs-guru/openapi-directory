# BatchDocumentInputConfig

Input configuration for BatchTranslateDocument request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GcsSource**](GcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_document_input_config import BatchDocumentInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDocumentInputConfig from a JSON string
batch_document_input_config_instance = BatchDocumentInputConfig.from_json(json)
# print the JSON string representation of the object
print(BatchDocumentInputConfig.to_json())

# convert the object into a dict
batch_document_input_config_dict = batch_document_input_config_instance.to_dict()
# create an instance of BatchDocumentInputConfig from a dict
batch_document_input_config_from_dict = BatchDocumentInputConfig.from_dict(batch_document_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


