# BatchWriteRequest

The request for BatchWrite.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mutation_groups** | [**List[MutationGroup]**](MutationGroup.md) | Required. The groups of mutations to be applied. | [optional] 
**request_options** | [**RequestOptions**](RequestOptions.md) |  | [optional] 

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


