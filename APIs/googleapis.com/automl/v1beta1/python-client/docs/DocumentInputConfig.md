# DocumentInputConfig

Input configuration of a Document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GcsSource**](GcsSource.md) |  | [optional] 

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


