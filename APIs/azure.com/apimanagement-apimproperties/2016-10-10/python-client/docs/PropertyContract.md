# PropertyContract

Property details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Uniquely identifies the property within the current API Management service instance. The value is a valid relative URL in the format of /properties/{propId} where {propId} is a property identifier. | [optional] [readonly] 
**name** | **str** | Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters. | 
**secret** | **bool** | Determines whether the value is a secret and should be encrypted or not. Default value is false. | [optional] 
**tags** | **List[str]** | Optional tags that when provided can be used to filter the property list. | [optional] 
**value** | **str** | Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace. | 

## Example

```python
from openapi_client.models.property_contract import PropertyContract

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyContract from a JSON string
property_contract_instance = PropertyContract.from_json(json)
# print the JSON string representation of the object
print(PropertyContract.to_json())

# convert the object into a dict
property_contract_dict = property_contract_instance.to_dict()
# create an instance of PropertyContract from a dict
property_contract_from_dict = PropertyContract.from_dict(property_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


