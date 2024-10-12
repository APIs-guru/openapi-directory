# Bank


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BankAttributes**](BankAttributes.md) |  | [optional] 
**id** | **str** | Bank&#x60;s ID | [optional] 
**links** | [**SelfLinks**](SelfLinks.md) |  | [optional] 
**relationships** | [**BankRelationships**](BankRelationships.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bank import Bank

# TODO update the JSON string below
json = "{}"
# create an instance of Bank from a JSON string
bank_instance = Bank.from_json(json)
# print the JSON string representation of the object
print(Bank.to_json())

# convert the object into a dict
bank_dict = bank_instance.to_dict()
# create an instance of Bank from a dict
bank_from_dict = Bank.from_dict(bank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


