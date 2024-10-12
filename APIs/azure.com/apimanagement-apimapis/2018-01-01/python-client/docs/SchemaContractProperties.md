# SchemaContractProperties

Schema contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). | 
**document** | [**SchemaDocumentProperties**](SchemaDocumentProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.schema_contract_properties import SchemaContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaContractProperties from a JSON string
schema_contract_properties_instance = SchemaContractProperties.from_json(json)
# print the JSON string representation of the object
print(SchemaContractProperties.to_json())

# convert the object into a dict
schema_contract_properties_dict = schema_contract_properties_instance.to_dict()
# create an instance of SchemaContractProperties from a dict
schema_contract_properties_from_dict = SchemaContractProperties.from_dict(schema_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


