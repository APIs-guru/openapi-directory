# DepositMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**DepositMethodAttributes**](DepositMethodAttributes.md) |  | [optional] 
**id** | **str** | Deposit-methods&#x60;s ID | [optional] 
**links** | [**SelfLinks**](SelfLinks.md) |  | [optional] 
**relationships** | [**DepositMethodRelationships**](DepositMethodRelationships.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deposit_method import DepositMethod

# TODO update the JSON string below
json = "{}"
# create an instance of DepositMethod from a JSON string
deposit_method_instance = DepositMethod.from_json(json)
# print the JSON string representation of the object
print(DepositMethod.to_json())

# convert the object into a dict
deposit_method_dict = deposit_method_instance.to_dict()
# create an instance of DepositMethod from a dict
deposit_method_from_dict = DepositMethod.from_dict(deposit_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


