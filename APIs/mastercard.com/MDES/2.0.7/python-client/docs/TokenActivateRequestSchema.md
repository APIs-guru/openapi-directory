# TokenActivateRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_activate_request** | [**TokenActivateRequest**](TokenActivateRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_activate_request_schema import TokenActivateRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenActivateRequestSchema from a JSON string
token_activate_request_schema_instance = TokenActivateRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TokenActivateRequestSchema.to_json())

# convert the object into a dict
token_activate_request_schema_dict = token_activate_request_schema_instance.to_dict()
# create an instance of TokenActivateRequestSchema from a dict
token_activate_request_schema_from_dict = TokenActivateRequestSchema.from_dict(token_activate_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


