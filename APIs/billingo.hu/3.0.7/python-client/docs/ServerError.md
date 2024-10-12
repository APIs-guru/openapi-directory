# ServerError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**trace_id** | **str** | You should send us this ID to investigate the issue. | [optional] 

## Example

```python
from openapi_client.models.server_error import ServerError

# TODO update the JSON string below
json = "{}"
# create an instance of ServerError from a JSON string
server_error_instance = ServerError.from_json(json)
# print the JSON string representation of the object
print(ServerError.to_json())

# convert the object into a dict
server_error_dict = server_error_instance.to_dict()
# create an instance of ServerError from a dict
server_error_from_dict = ServerError.from_dict(server_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


