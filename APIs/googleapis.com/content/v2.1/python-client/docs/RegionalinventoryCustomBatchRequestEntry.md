# RegionalinventoryCustomBatchRequestEntry

A batch entry encoding a single non-batch regional inventory request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | Method of the batch request entry. Acceptable values are: - \&quot;&#x60;insert&#x60;\&quot;  | [optional] 
**product_id** | **str** | The ID of the product for which to update price and availability. | [optional] 
**regional_inventory** | [**RegionalInventory**](RegionalInventory.md) |  | [optional] 

## Example

```python
from openapi_client.models.regionalinventory_custom_batch_request_entry import RegionalinventoryCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalinventoryCustomBatchRequestEntry from a JSON string
regionalinventory_custom_batch_request_entry_instance = RegionalinventoryCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(RegionalinventoryCustomBatchRequestEntry.to_json())

# convert the object into a dict
regionalinventory_custom_batch_request_entry_dict = regionalinventory_custom_batch_request_entry_instance.to_dict()
# create an instance of RegionalinventoryCustomBatchRequestEntry from a dict
regionalinventory_custom_batch_request_entry_from_dict = RegionalinventoryCustomBatchRequestEntry.from_dict(regionalinventory_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


