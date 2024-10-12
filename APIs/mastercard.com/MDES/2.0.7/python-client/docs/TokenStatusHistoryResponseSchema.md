# TokenStatusHistoryResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_status_history_response** | [**TokenStatusHistoryResponse**](TokenStatusHistoryResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_status_history_response_schema import TokenStatusHistoryResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenStatusHistoryResponseSchema from a JSON string
token_status_history_response_schema_instance = TokenStatusHistoryResponseSchema.from_json(json)
# print the JSON string representation of the object
print(TokenStatusHistoryResponseSchema.to_json())

# convert the object into a dict
token_status_history_response_schema_dict = token_status_history_response_schema_instance.to_dict()
# create an instance of TokenStatusHistoryResponseSchema from a dict
token_status_history_response_schema_from_dict = TokenStatusHistoryResponseSchema.from_dict(token_status_history_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


