# ATMDefinition

Environment of the ATM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | [**List[BrandInner]**](BrandInner.md) | Brand of the Acquirer of transactions captured by the ATM | 

## Example

```python
from openapi_client.models.atm_definition import ATMDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ATMDefinition from a JSON string
atm_definition_instance = ATMDefinition.from_json(json)
# print the JSON string representation of the object
print(ATMDefinition.to_json())

# convert the object into a dict
atm_definition_dict = atm_definition_instance.to_dict()
# create an instance of ATMDefinition from a dict
atm_definition_from_dict = ATMDefinition.from_dict(atm_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


