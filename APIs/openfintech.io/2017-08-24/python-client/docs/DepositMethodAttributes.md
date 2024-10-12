# DepositMethodAttributes

Array of Deposit-method attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**code** | **str** | Deposit-method&#x60;s code | [optional] 
**name** | **str** | Deposit-method&#x60;s name | [optional] 
**processor_name** | **str** | Deposit-method&#x60;s processor | [optional] 

## Example

```python
from openapi_client.models.deposit_method_attributes import DepositMethodAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DepositMethodAttributes from a JSON string
deposit_method_attributes_instance = DepositMethodAttributes.from_json(json)
# print the JSON string representation of the object
print(DepositMethodAttributes.to_json())

# convert the object into a dict
deposit_method_attributes_dict = deposit_method_attributes_instance.to_dict()
# create an instance of DepositMethodAttributes from a dict
deposit_method_attributes_from_dict = DepositMethodAttributes.from_dict(deposit_method_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


