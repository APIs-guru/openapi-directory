# PolicyContract

Learning settings specifying how to train the model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **str** | Arguments of the Learning settings. | 
**name** | **str** | Name of the Learning settings. | 

## Example

```python
from openapi_client.models.policy_contract import PolicyContract

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyContract from a JSON string
policy_contract_instance = PolicyContract.from_json(json)
# print the JSON string representation of the object
print(PolicyContract.to_json())

# convert the object into a dict
policy_contract_dict = policy_contract_instance.to_dict()
# create an instance of PolicyContract from a dict
policy_contract_from_dict = PolicyContract.from_dict(policy_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


