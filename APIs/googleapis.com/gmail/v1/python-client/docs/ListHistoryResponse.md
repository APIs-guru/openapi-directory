# ListHistoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history** | [**List[History]**](History.md) | List of history records. Any &#x60;messages&#x60; contained in the response will typically only have &#x60;id&#x60; and &#x60;threadId&#x60; fields populated. | [optional] 
**history_id** | **str** | The ID of the mailbox&#39;s current history record. | [optional] 
**next_page_token** | **str** | Page token to retrieve the next page of results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_history_response import ListHistoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHistoryResponse from a JSON string
list_history_response_instance = ListHistoryResponse.from_json(json)
# print the JSON string representation of the object
print(ListHistoryResponse.to_json())

# convert the object into a dict
list_history_response_dict = list_history_response_instance.to_dict()
# create an instance of ListHistoryResponse from a dict
list_history_response_from_dict = ListHistoryResponse.from_dict(list_history_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


