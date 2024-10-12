# BatchAccountKeys

A set of Azure Batch account keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **str** | The primary key associated with the account. | [optional] [readonly] 
**secondary** | **str** | The secondary key associated with the account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.batch_account_keys import BatchAccountKeys

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccountKeys from a JSON string
batch_account_keys_instance = BatchAccountKeys.from_json(json)
# print the JSON string representation of the object
print(BatchAccountKeys.to_json())

# convert the object into a dict
batch_account_keys_dict = batch_account_keys_instance.to_dict()
# create an instance of BatchAccountKeys from a dict
batch_account_keys_from_dict = BatchAccountKeys.from_dict(batch_account_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


