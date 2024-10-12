# CreateBatchRequestBody

A create batch request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_notes** | **str** | Add custom messages for a particular batch | [optional] 
**external_batch_id** | **str** | A string that uniquely identifies the external batch | [optional] 
**rate_ids** | **List[str]** | Array of rate IDs used in the batch | [optional] 
**shipment_ids** | **List[str]** | Array of shipment IDs used in the batch | [optional] 

## Example

```python
from openapi_client.models.create_batch_request_body import CreateBatchRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBatchRequestBody from a JSON string
create_batch_request_body_instance = CreateBatchRequestBody.from_json(json)
# print the JSON string representation of the object
print(CreateBatchRequestBody.to_json())

# convert the object into a dict
create_batch_request_body_dict = create_batch_request_body_instance.to_dict()
# create an instance of CreateBatchRequestBody from a dict
create_batch_request_body_from_dict = CreateBatchRequestBody.from_dict(create_batch_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


