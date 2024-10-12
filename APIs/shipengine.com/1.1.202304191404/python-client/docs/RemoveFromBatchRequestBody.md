# RemoveFromBatchRequestBody

A modify batch request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_ids** | **List[str]** | Array of Rate IDs to be modifed on the batch | [optional] 
**shipment_ids** | **List[str]** | The Shipment Ids to be modified on the batch | [optional] 

## Example

```python
from openapi_client.models.remove_from_batch_request_body import RemoveFromBatchRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveFromBatchRequestBody from a JSON string
remove_from_batch_request_body_instance = RemoveFromBatchRequestBody.from_json(json)
# print the JSON string representation of the object
print(RemoveFromBatchRequestBody.to_json())

# convert the object into a dict
remove_from_batch_request_body_dict = remove_from_batch_request_body_instance.to_dict()
# create an instance of RemoveFromBatchRequestBody from a dict
remove_from_batch_request_body_from_dict = RemoveFromBatchRequestBody.from_dict(remove_from_batch_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


