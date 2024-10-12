# BatchWriteResponse

The result of applying a batch of mutations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_timestamp** | **str** | The commit timestamp of the transaction that applied this batch. Present if &#x60;status&#x60; is &#x60;OK&#x60;, absent otherwise. | [optional] 
**indexes** | **List[int]** | The mutation groups applied in this batch. The values index into the &#x60;mutation_groups&#x60; field in the corresponding &#x60;BatchWriteRequest&#x60;. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_write_response import BatchWriteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchWriteResponse from a JSON string
batch_write_response_instance = BatchWriteResponse.from_json(json)
# print the JSON string representation of the object
print(BatchWriteResponse.to_json())

# convert the object into a dict
batch_write_response_dict = batch_write_response_instance.to_dict()
# create an instance of BatchWriteResponse from a dict
batch_write_response_from_dict = BatchWriteResponse.from_dict(batch_write_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


