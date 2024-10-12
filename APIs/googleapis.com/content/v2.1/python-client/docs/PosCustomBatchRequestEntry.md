# PosCustomBatchRequestEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**inventory** | [**PosInventory**](PosInventory.md) |  | [optional] 
**merchant_id** | **str** | The ID of the POS data provider. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;delete&#x60;\&quot; - \&quot;&#x60;get&#x60;\&quot; - \&quot;&#x60;insert&#x60;\&quot; - \&quot;&#x60;inventory&#x60;\&quot; - \&quot;&#x60;sale&#x60;\&quot;  | [optional] 
**sale** | [**PosSale**](PosSale.md) |  | [optional] 
**store** | [**PosStore**](PosStore.md) |  | [optional] 
**store_code** | **str** | The store code. This should be set only if the method is &#x60;delete&#x60; or &#x60;get&#x60;. | [optional] 
**target_merchant_id** | **str** | The ID of the account for which to get/submit data. | [optional] 

## Example

```python
from openapi_client.models.pos_custom_batch_request_entry import PosCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of PosCustomBatchRequestEntry from a JSON string
pos_custom_batch_request_entry_instance = PosCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(PosCustomBatchRequestEntry.to_json())

# convert the object into a dict
pos_custom_batch_request_entry_dict = pos_custom_batch_request_entry_instance.to_dict()
# create an instance of PosCustomBatchRequestEntry from a dict
pos_custom_batch_request_entry_from_dict = PosCustomBatchRequestEntry.from_dict(pos_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


