# RegionalinventoryCustomBatchResponseEntry

A batch entry encoding a single non-batch regional inventory response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry this entry responds to. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#regionalinventoryCustomBatchResponseEntry&#x60;\&quot;. | [optional] 
**regional_inventory** | [**RegionalInventory**](RegionalInventory.md) |  | [optional] 

## Example

```python
from openapi_client.models.regionalinventory_custom_batch_response_entry import RegionalinventoryCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalinventoryCustomBatchResponseEntry from a JSON string
regionalinventory_custom_batch_response_entry_instance = RegionalinventoryCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(RegionalinventoryCustomBatchResponseEntry.to_json())

# convert the object into a dict
regionalinventory_custom_batch_response_entry_dict = regionalinventory_custom_batch_response_entry_instance.to_dict()
# create an instance of RegionalinventoryCustomBatchResponseEntry from a dict
regionalinventory_custom_batch_response_entry_from_dict = RegionalinventoryCustomBatchResponseEntry.from_dict(regionalinventory_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


