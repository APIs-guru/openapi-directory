# ApiSchemaListByApi200ResponseValueInnerPropertiesDocument

Schema Document Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definitions** | **object** | Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise. | [optional] 
**value** | **str** | Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI. | [optional] 

## Example

```python
from openapi_client.models.api_schema_list_by_api200_response_value_inner_properties_document import ApiSchemaListByApi200ResponseValueInnerPropertiesDocument

# TODO update the JSON string below
json = "{}"
# create an instance of ApiSchemaListByApi200ResponseValueInnerPropertiesDocument from a JSON string
api_schema_list_by_api200_response_value_inner_properties_document_instance = ApiSchemaListByApi200ResponseValueInnerPropertiesDocument.from_json(json)
# print the JSON string representation of the object
print(ApiSchemaListByApi200ResponseValueInnerPropertiesDocument.to_json())

# convert the object into a dict
api_schema_list_by_api200_response_value_inner_properties_document_dict = api_schema_list_by_api200_response_value_inner_properties_document_instance.to_dict()
# create an instance of ApiSchemaListByApi200ResponseValueInnerPropertiesDocument from a dict
api_schema_list_by_api200_response_value_inner_properties_document_from_dict = ApiSchemaListByApi200ResponseValueInnerPropertiesDocument.from_dict(api_schema_list_by_api200_response_value_inner_properties_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


