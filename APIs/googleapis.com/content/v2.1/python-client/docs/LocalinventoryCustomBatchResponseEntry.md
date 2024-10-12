# LocalinventoryCustomBatchResponseEntry

Batch entry encoding a single local inventory update response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry this entry responds to. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#localinventoryCustomBatchResponseEntry&#x60;\&quot; | [optional] 

## Example

```python
from openapi_client.models.localinventory_custom_batch_response_entry import LocalinventoryCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of LocalinventoryCustomBatchResponseEntry from a JSON string
localinventory_custom_batch_response_entry_instance = LocalinventoryCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(LocalinventoryCustomBatchResponseEntry.to_json())

# convert the object into a dict
localinventory_custom_batch_response_entry_dict = localinventory_custom_batch_response_entry_instance.to_dict()
# create an instance of LocalinventoryCustomBatchResponseEntry from a dict
localinventory_custom_batch_response_entry_from_dict = LocalinventoryCustomBatchResponseEntry.from_dict(localinventory_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


