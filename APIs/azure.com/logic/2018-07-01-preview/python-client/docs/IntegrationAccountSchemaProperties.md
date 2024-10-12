# IntegrationAccountSchemaProperties

The integration account schema properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_time** | **datetime** | The changed time. | [optional] [readonly] 
**content** | **object** | The content. | [optional] 
**content_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**content_type** | **str** | The content type. | [optional] 
**created_time** | **datetime** | The created time. | [optional] [readonly] 
**document_name** | **str** | The document name. | [optional] 
**file_name** | **str** | The file name. | [optional] 
**metadata** | **object** | The metadata. | [optional] 
**schema_type** | [**SchemaType**](SchemaType.md) |  | 
**target_namespace** | **str** | The target namespace of the schema. | [optional] 

## Example

```python
from openapi_client.models.integration_account_schema_properties import IntegrationAccountSchemaProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountSchemaProperties from a JSON string
integration_account_schema_properties_instance = IntegrationAccountSchemaProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountSchemaProperties.to_json())

# convert the object into a dict
integration_account_schema_properties_dict = integration_account_schema_properties_instance.to_dict()
# create an instance of IntegrationAccountSchemaProperties from a dict
integration_account_schema_properties_from_dict = IntegrationAccountSchemaProperties.from_dict(integration_account_schema_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


