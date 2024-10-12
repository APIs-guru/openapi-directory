# PosCustomBatchResponseEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry to which this entry responds. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**inventory** | [**PosInventory**](PosInventory.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#posCustomBatchResponseEntry&#x60;\&quot; | [optional] 
**sale** | [**PosSale**](PosSale.md) |  | [optional] 
**store** | [**PosStore**](PosStore.md) |  | [optional] 

## Example

```python
from openapi_client.models.pos_custom_batch_response_entry import PosCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of PosCustomBatchResponseEntry from a JSON string
pos_custom_batch_response_entry_instance = PosCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(PosCustomBatchResponseEntry.to_json())

# convert the object into a dict
pos_custom_batch_response_entry_dict = pos_custom_batch_response_entry_instance.to_dict()
# create an instance of PosCustomBatchResponseEntry from a dict
pos_custom_batch_response_entry_from_dict = PosCustomBatchResponseEntry.from_dict(pos_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


