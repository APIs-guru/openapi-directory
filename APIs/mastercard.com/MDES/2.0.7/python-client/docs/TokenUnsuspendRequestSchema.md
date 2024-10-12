# TokenUnsuspendRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_unsuspend_request** | [**TokenUnsuspendRequest**](TokenUnsuspendRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_unsuspend_request_schema import TokenUnsuspendRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenUnsuspendRequestSchema from a JSON string
token_unsuspend_request_schema_instance = TokenUnsuspendRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TokenUnsuspendRequestSchema.to_json())

# convert the object into a dict
token_unsuspend_request_schema_dict = token_unsuspend_request_schema_instance.to_dict()
# create an instance of TokenUnsuspendRequestSchema from a dict
token_unsuspend_request_schema_from_dict = TokenUnsuspendRequestSchema.from_dict(token_unsuspend_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


