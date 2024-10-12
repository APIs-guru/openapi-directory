# TokenStatusHistoryRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_status_history_request** | [**TokenStatusHistoryRequest**](TokenStatusHistoryRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_status_history_request_schema import TokenStatusHistoryRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenStatusHistoryRequestSchema from a JSON string
token_status_history_request_schema_instance = TokenStatusHistoryRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TokenStatusHistoryRequestSchema.to_json())

# convert the object into a dict
token_status_history_request_schema_dict = token_status_history_request_schema_instance.to_dict()
# create an instance of TokenStatusHistoryRequestSchema from a dict
token_status_history_request_schema_from_dict = TokenStatusHistoryRequestSchema.from_dict(token_status_history_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


