# SchemaContract

Schema Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SchemaContractProperties**](SchemaContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.schema_contract import SchemaContract

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaContract from a JSON string
schema_contract_instance = SchemaContract.from_json(json)
# print the JSON string representation of the object
print(SchemaContract.to_json())

# convert the object into a dict
schema_contract_dict = schema_contract_instance.to_dict()
# create an instance of SchemaContract from a dict
schema_contract_from_dict = SchemaContract.from_dict(schema_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


