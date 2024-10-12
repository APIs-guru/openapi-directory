# TokenSuspendRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_suspend_request** | [**TokenSuspendRequest**](TokenSuspendRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_suspend_request_schema import TokenSuspendRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenSuspendRequestSchema from a JSON string
token_suspend_request_schema_instance = TokenSuspendRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TokenSuspendRequestSchema.to_json())

# convert the object into a dict
token_suspend_request_schema_dict = token_suspend_request_schema_instance.to_dict()
# create an instance of TokenSuspendRequestSchema from a dict
token_suspend_request_schema_from_dict = TokenSuspendRequestSchema.from_dict(token_suspend_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


