# PosCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[PosCustomBatchRequestEntry]**](PosCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.pos_custom_batch_request import PosCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PosCustomBatchRequest from a JSON string
pos_custom_batch_request_instance = PosCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(PosCustomBatchRequest.to_json())

# convert the object into a dict
pos_custom_batch_request_dict = pos_custom_batch_request_instance.to_dict()
# create an instance of PosCustomBatchRequest from a dict
pos_custom_batch_request_from_dict = PosCustomBatchRequest.from_dict(pos_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


