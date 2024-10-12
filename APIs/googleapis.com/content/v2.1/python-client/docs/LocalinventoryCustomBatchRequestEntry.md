# LocalinventoryCustomBatchRequestEntry

Batch entry encoding a single local inventory update request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**local_inventory** | [**LocalInventory**](LocalInventory.md) |  | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | Method of the batch request entry. Acceptable values are: - \&quot;&#x60;insert&#x60;\&quot;  | [optional] 
**product_id** | **str** | The ID of the product for which to update local inventory. | [optional] 

## Example

```python
from openapi_client.models.localinventory_custom_batch_request_entry import LocalinventoryCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of LocalinventoryCustomBatchRequestEntry from a JSON string
localinventory_custom_batch_request_entry_instance = LocalinventoryCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(LocalinventoryCustomBatchRequestEntry.to_json())

# convert the object into a dict
localinventory_custom_batch_request_entry_dict = localinventory_custom_batch_request_entry_instance.to_dict()
# create an instance of LocalinventoryCustomBatchRequestEntry from a dict
localinventory_custom_batch_request_entry_from_dict = LocalinventoryCustomBatchRequestEntry.from_dict(localinventory_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


