# SchemaDocumentProperties

Schema Document Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Json escaped string defining the document representing the Schema. | [optional] 

## Example

```python
from openapi_client.models.schema_document_properties import SchemaDocumentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaDocumentProperties from a JSON string
schema_document_properties_instance = SchemaDocumentProperties.from_json(json)
# print the JSON string representation of the object
print(SchemaDocumentProperties.to_json())

# convert the object into a dict
schema_document_properties_dict = schema_document_properties_instance.to_dict()
# create an instance of SchemaDocumentProperties from a dict
schema_document_properties_from_dict = SchemaDocumentProperties.from_dict(schema_document_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


