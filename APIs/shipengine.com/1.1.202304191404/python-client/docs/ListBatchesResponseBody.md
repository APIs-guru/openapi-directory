# ListBatchesResponseBody

A list batch response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batches** | [**List[Batch]**](Batch.md) | Batch List | [readonly] 
**links** | [**PaginationLink**](PaginationLink.md) |  | [readonly] 
**page** | **int** | The page that is currently being read | [readonly] 
**pages** | **int** | The total number of batch pages the API call returned | [readonly] 
**total** | **int** | The total number of batches the API call returned | [readonly] 

## Example

```python
from openapi_client.models.list_batches_response_body import ListBatchesResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListBatchesResponseBody from a JSON string
list_batches_response_body_instance = ListBatchesResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListBatchesResponseBody.to_json())

# convert the object into a dict
list_batches_response_body_dict = list_batches_response_body_instance.to_dict()
# create an instance of ListBatchesResponseBody from a dict
list_batches_response_body_from_dict = ListBatchesResponseBody.from_dict(list_batches_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


