# ServerKey

A server key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of encryption protector. This is metadata used for the Azure portal experience. | [optional] 
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**ServerKeyProperties**](ServerKeyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_key import ServerKey

# TODO update the JSON string below
json = "{}"
# create an instance of ServerKey from a JSON string
server_key_instance = ServerKey.from_json(json)
# print the JSON string representation of the object
print(ServerKey.to_json())

# convert the object into a dict
server_key_dict = server_key_instance.to_dict()
# create an instance of ServerKey from a dict
server_key_from_dict = ServerKey.from_dict(server_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


