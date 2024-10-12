# ListTransferLogsResponse

The returned list transfer run messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. The next-pagination token. For multiple-page list results, this token can be used as the &#x60;GetTransferRunLogRequest.page_token&#x60; to request the next page of list results. | [optional] [readonly] 
**transfer_messages** | [**List[TransferMessage]**](TransferMessage.md) | Output only. The stored pipeline transfer messages. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_transfer_logs_response import ListTransferLogsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTransferLogsResponse from a JSON string
list_transfer_logs_response_instance = ListTransferLogsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTransferLogsResponse.to_json())

# convert the object into a dict
list_transfer_logs_response_dict = list_transfer_logs_response_instance.to_dict()
# create an instance of ListTransferLogsResponse from a dict
list_transfer_logs_response_from_dict = ListTransferLogsResponse.from_dict(list_transfer_logs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


