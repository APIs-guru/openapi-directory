# BatchWriteResponse

The response from Firestore.BatchWrite.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**List[Status]**](Status.md) | The status of applying the writes. This i-th write status corresponds to the i-th write in the request. | [optional] 
**write_results** | [**List[WriteResult]**](WriteResult.md) | The result of applying the writes. This i-th write result corresponds to the i-th write in the request. | [optional] 

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


