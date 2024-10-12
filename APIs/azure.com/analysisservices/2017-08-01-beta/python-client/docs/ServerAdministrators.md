# ServerAdministrators

An array of administrator user identities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | **List[str]** | An array of administrator user identities. | [optional] 

## Example

```python
from openapi_client.models.server_administrators import ServerAdministrators

# TODO update the JSON string below
json = "{}"
# create an instance of ServerAdministrators from a JSON string
server_administrators_instance = ServerAdministrators.from_json(json)
# print the JSON string representation of the object
print(ServerAdministrators.to_json())

# convert the object into a dict
server_administrators_dict = server_administrators_instance.to_dict()
# create an instance of ServerAdministrators from a dict
server_administrators_from_dict = ServerAdministrators.from_dict(server_administrators_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


