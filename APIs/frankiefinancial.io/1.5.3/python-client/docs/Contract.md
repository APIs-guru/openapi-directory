# Contract

Plan contract details to be displayed to customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of this section when rendering | 
**value** | [**List[NameValue]**](NameValue.md) | Contract details for this plan | 

## Example

```python
from openapi_client.models.contract import Contract

# TODO update the JSON string below
json = "{}"
# create an instance of Contract from a JSON string
contract_instance = Contract.from_json(json)
# print the JSON string representation of the object
print(Contract.to_json())

# convert the object into a dict
contract_dict = contract_instance.to_dict()
# create an instance of Contract from a dict
contract_from_dict = Contract.from_dict(contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


