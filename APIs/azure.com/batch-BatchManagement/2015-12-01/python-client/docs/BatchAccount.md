# BatchAccount

Contains information about an Azure Batch account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BatchAccountProperties**](BatchAccountProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource | [optional] [readonly] 
**location** | **str** | The location of the resource | [optional] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource | [optional] 
**type** | **str** | The type of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.batch_account import BatchAccount

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccount from a JSON string
batch_account_instance = BatchAccount.from_json(json)
# print the JSON string representation of the object
print(BatchAccount.to_json())

# convert the object into a dict
batch_account_dict = batch_account_instance.to_dict()
# create an instance of BatchAccount from a dict
batch_account_from_dict = BatchAccount.from_dict(batch_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


