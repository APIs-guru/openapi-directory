# TokenDeleteRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_delete_request** | [**TokenDeleteRequest**](TokenDeleteRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_delete_request_schema import TokenDeleteRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenDeleteRequestSchema from a JSON string
token_delete_request_schema_instance = TokenDeleteRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TokenDeleteRequestSchema.to_json())

# convert the object into a dict
token_delete_request_schema_dict = token_delete_request_schema_instance.to_dict()
# create an instance of TokenDeleteRequestSchema from a dict
token_delete_request_schema_from_dict = TokenDeleteRequestSchema.from_dict(token_delete_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


