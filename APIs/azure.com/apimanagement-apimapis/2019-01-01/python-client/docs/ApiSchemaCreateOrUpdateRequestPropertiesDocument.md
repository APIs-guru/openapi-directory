# ApiSchemaCreateOrUpdateRequestPropertiesDocument

Schema Document Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Json escaped string defining the document representing the Schema. | [optional] 

## Example

```python
from openapi_client.models.api_schema_create_or_update_request_properties_document import ApiSchemaCreateOrUpdateRequestPropertiesDocument

# TODO update the JSON string below
json = "{}"
# create an instance of ApiSchemaCreateOrUpdateRequestPropertiesDocument from a JSON string
api_schema_create_or_update_request_properties_document_instance = ApiSchemaCreateOrUpdateRequestPropertiesDocument.from_json(json)
# print the JSON string representation of the object
print(ApiSchemaCreateOrUpdateRequestPropertiesDocument.to_json())

# convert the object into a dict
api_schema_create_or_update_request_properties_document_dict = api_schema_create_or_update_request_properties_document_instance.to_dict()
# create an instance of ApiSchemaCreateOrUpdateRequestPropertiesDocument from a dict
api_schema_create_or_update_request_properties_document_from_dict = ApiSchemaCreateOrUpdateRequestPropertiesDocument.from_dict(api_schema_create_or_update_request_properties_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


