# ServerUpdate

Represents an update to a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServerProperties**](ServerProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_update import ServerUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ServerUpdate from a JSON string
server_update_instance = ServerUpdate.from_json(json)
# print the JSON string representation of the object
print(ServerUpdate.to_json())

# convert the object into a dict
server_update_dict = server_update_instance.to_dict()
# create an instance of ServerUpdate from a dict
server_update_from_dict = ServerUpdate.from_dict(server_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


