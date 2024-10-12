# RetroRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retro_request** | [**RetroRequest**](RetroRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.retro_request_schema import RetroRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RetroRequestSchema from a JSON string
retro_request_schema_instance = RetroRequestSchema.from_json(json)
# print the JSON string representation of the object
print(RetroRequestSchema.to_json())

# convert the object into a dict
retro_request_schema_dict = retro_request_schema_instance.to_dict()
# create an instance of RetroRequestSchema from a dict
retro_request_schema_from_dict = RetroRequestSchema.from_dict(retro_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


