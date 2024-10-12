# ListBatchesResponse

A list of batch workloads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batches** | [**List[Batch]**](Batch.md) | Output only. The batches from the specified collection. | [optional] [readonly] 
**next_page_token** | **str** | A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Output only. List of Batches that could not be included in the response. Attempting to get one of these resources may indicate why it was not included in the list response. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_batches_response import ListBatchesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBatchesResponse from a JSON string
list_batches_response_instance = ListBatchesResponse.from_json(json)
# print the JSON string representation of the object
print(ListBatchesResponse.to_json())

# convert the object into a dict
list_batches_response_dict = list_batches_response_instance.to_dict()
# create an instance of ListBatchesResponse from a dict
list_batches_response_from_dict = ListBatchesResponse.from_dict(list_batches_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


