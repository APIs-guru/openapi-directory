# QueryHistoryResponse

Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryHistoryRequest`. The returned response will have a history record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record** | [**HistoryRecord**](HistoryRecord.md) |  | [optional] 
**url_normalization_details** | [**UrlNormalization**](UrlNormalization.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_history_response import QueryHistoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryHistoryResponse from a JSON string
query_history_response_instance = QueryHistoryResponse.from_json(json)
# print the JSON string representation of the object
print(QueryHistoryResponse.to_json())

# convert the object into a dict
query_history_response_dict = query_history_response_instance.to_dict()
# create an instance of QueryHistoryResponse from a dict
query_history_response_from_dict = QueryHistoryResponse.from_dict(query_history_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


