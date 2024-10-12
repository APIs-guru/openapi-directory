# AddHeldAccountResult

The status of each account creation, and the **HeldAccount**, if successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**HeldAccount**](HeldAccount.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_held_account_result import AddHeldAccountResult

# TODO update the JSON string below
json = "{}"
# create an instance of AddHeldAccountResult from a JSON string
add_held_account_result_instance = AddHeldAccountResult.from_json(json)
# print the JSON string representation of the object
print(AddHeldAccountResult.to_json())

# convert the object into a dict
add_held_account_result_dict = add_held_account_result_instance.to_dict()
# create an instance of AddHeldAccountResult from a dict
add_held_account_result_from_dict = AddHeldAccountResult.from_dict(add_held_account_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


