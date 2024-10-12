# ListTransferRunsResponse

The returned list of pipelines in the project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. The next-pagination token. For multiple-page list results, this token can be used as the &#x60;ListTransferRunsRequest.page_token&#x60; to request the next page of list results. | [optional] [readonly] 
**transfer_runs** | [**List[TransferRun]**](TransferRun.md) | Output only. The stored pipeline transfer runs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_transfer_runs_response import ListTransferRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTransferRunsResponse from a JSON string
list_transfer_runs_response_instance = ListTransferRunsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTransferRunsResponse.to_json())

# convert the object into a dict
list_transfer_runs_response_dict = list_transfer_runs_response_instance.to_dict()
# create an instance of ListTransferRunsResponse from a dict
list_transfer_runs_response_from_dict = ListTransferRunsResponse.from_dict(list_transfer_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


