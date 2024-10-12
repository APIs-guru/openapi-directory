# ServerUpdateParameters

Parameters allowed to update for a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServerUpdateParametersProperties**](ServerUpdateParametersProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Application-specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.server_update_parameters import ServerUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ServerUpdateParameters from a JSON string
server_update_parameters_instance = ServerUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ServerUpdateParameters.to_json())

# convert the object into a dict
server_update_parameters_dict = server_update_parameters_instance.to_dict()
# create an instance of ServerUpdateParameters from a dict
server_update_parameters_from_dict = ServerUpdateParameters.from_dict(server_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


