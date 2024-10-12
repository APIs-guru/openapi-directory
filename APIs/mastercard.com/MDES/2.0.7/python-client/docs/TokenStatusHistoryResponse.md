# TokenStatusHistoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statuses** | [**Statuses**](Statuses.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_status_history_response import TokenStatusHistoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TokenStatusHistoryResponse from a JSON string
token_status_history_response_instance = TokenStatusHistoryResponse.from_json(json)
# print the JSON string representation of the object
print(TokenStatusHistoryResponse.to_json())

# convert the object into a dict
token_status_history_response_dict = token_status_history_response_instance.to_dict()
# create an instance of TokenStatusHistoryResponse from a dict
token_status_history_response_from_dict = TokenStatusHistoryResponse.from_dict(token_status_history_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


