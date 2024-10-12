# ServerForCreate

Represents a server to be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location the resource resides in. | 
**properties** | [**ServerPropertiesForCreate**](ServerPropertiesForCreate.md) |  | 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Application-specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.server_for_create import ServerForCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ServerForCreate from a JSON string
server_for_create_instance = ServerForCreate.from_json(json)
# print the JSON string representation of the object
print(ServerForCreate.to_json())

# convert the object into a dict
server_for_create_dict = server_for_create_instance.to_dict()
# create an instance of ServerForCreate from a dict
server_for_create_from_dict = ServerForCreate.from_dict(server_for_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


