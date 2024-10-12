# ListBatchErrorsResponseBody

A batch errors response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[BatchResponseError]**](BatchResponseError.md) | The errors currently associated with the batch | [readonly] [default to []]
**links** | [**PaginationLink**](PaginationLink.md) |  | [readonly] 

## Example

```python
from openapi_client.models.list_batch_errors_response_body import ListBatchErrorsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListBatchErrorsResponseBody from a JSON string
list_batch_errors_response_body_instance = ListBatchErrorsResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListBatchErrorsResponseBody.to_json())

# convert the object into a dict
list_batch_errors_response_body_dict = list_batch_errors_response_body_instance.to_dict()
# create an instance of ListBatchErrorsResponseBody from a dict
list_batch_errors_response_body_from_dict = ListBatchErrorsResponseBody.from_dict(list_batch_errors_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


