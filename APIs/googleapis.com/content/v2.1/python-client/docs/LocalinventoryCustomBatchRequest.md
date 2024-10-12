# LocalinventoryCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[LocalinventoryCustomBatchRequestEntry]**](LocalinventoryCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.localinventory_custom_batch_request import LocalinventoryCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LocalinventoryCustomBatchRequest from a JSON string
localinventory_custom_batch_request_instance = LocalinventoryCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(LocalinventoryCustomBatchRequest.to_json())

# convert the object into a dict
localinventory_custom_batch_request_dict = localinventory_custom_batch_request_instance.to_dict()
# create an instance of LocalinventoryCustomBatchRequest from a dict
localinventory_custom_batch_request_from_dict = LocalinventoryCustomBatchRequest.from_dict(localinventory_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


