# RunAsAccount

CS Accounts Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The CS RunAs account Id. | [optional] 
**account_name** | **str** | The CS RunAs account name. | [optional] 

## Example

```python
from openapi_client.models.run_as_account import RunAsAccount

# TODO update the JSON string below
json = "{}"
# create an instance of RunAsAccount from a JSON string
run_as_account_instance = RunAsAccount.from_json(json)
# print the JSON string representation of the object
print(RunAsAccount.to_json())

# convert the object into a dict
run_as_account_dict = run_as_account_instance.to_dict()
# create an instance of RunAsAccount from a dict
run_as_account_from_dict = RunAsAccount.from_dict(run_as_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


