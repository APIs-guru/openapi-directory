# ServerErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ServerError**](ServerError.md) |  | [optional] 

## Example

```python
from openapi_client.models.server_error_response import ServerErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ServerErrorResponse from a JSON string
server_error_response_instance = ServerErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ServerErrorResponse.to_json())

# convert the object into a dict
server_error_response_dict = server_error_response_instance.to_dict()
# create an instance of ServerErrorResponse from a dict
server_error_response_from_dict = ServerErrorResponse.from_dict(server_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


