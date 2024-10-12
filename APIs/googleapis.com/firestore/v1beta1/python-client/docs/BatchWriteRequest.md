# BatchWriteRequest

The request for Firestore.BatchWrite.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Labels associated with this batch write. | [optional] 
**writes** | [**List[Write]**](Write.md) | The writes to apply. Method does not apply writes atomically and does not guarantee ordering. Each write succeeds or fails independently. You cannot write to the same document more than once per request. | [optional] 

## Example

```python
from openapi_client.models.batch_write_request import BatchWriteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchWriteRequest from a JSON string
batch_write_request_instance = BatchWriteRequest.from_json(json)
# print the JSON string representation of the object
print(BatchWriteRequest.to_json())

# convert the object into a dict
batch_write_request_dict = batch_write_request_instance.to_dict()
# create an instance of BatchWriteRequest from a dict
batch_write_request_from_dict = BatchWriteRequest.from_dict(batch_write_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


