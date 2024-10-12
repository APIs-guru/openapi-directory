# PropertyContractProperties

Property Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters. | 
**value** | **str** | Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace. | 
**secret** | **bool** | Determines whether the value is a secret and should be encrypted or not. Default value is false. | [optional] 
**tags** | **List[str]** | Optional tags that when provided can be used to filter the property list. | [optional] 

## Example

```python
from openapi_client.models.property_contract_properties import PropertyContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyContractProperties from a JSON string
property_contract_properties_instance = PropertyContractProperties.from_json(json)
# print the JSON string representation of the object
print(PropertyContractProperties.to_json())

# convert the object into a dict
property_contract_properties_dict = property_contract_properties_instance.to_dict()
# create an instance of PropertyContractProperties from a dict
property_contract_properties_from_dict = PropertyContractProperties.from_dict(property_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


