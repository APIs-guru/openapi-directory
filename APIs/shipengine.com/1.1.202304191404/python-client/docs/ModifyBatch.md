# ModifyBatch

A modify batch object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_ids** | **List[str]** | Array of Rate IDs to be modifed on the batch | [optional] 
**shipment_ids** | **List[str]** | The Shipment Ids to be modified on the batch | [optional] 

## Example

```python
from openapi_client.models.modify_batch import ModifyBatch

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyBatch from a JSON string
modify_batch_instance = ModifyBatch.from_json(json)
# print the JSON string representation of the object
print(ModifyBatch.to_json())

# convert the object into a dict
modify_batch_dict = modify_batch_instance.to_dict()
# create an instance of ModifyBatch from a dict
modify_batch_from_dict = ModifyBatch.from_dict(modify_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


