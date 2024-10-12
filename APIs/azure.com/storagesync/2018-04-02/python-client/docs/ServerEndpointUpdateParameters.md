# ServerEndpointUpdateParameters

Parameters for updating an Server Endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServerEndpointUpdateProperties**](ServerEndpointUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The user-specified tags associated with the server endpoint. | [optional] 

## Example

```python
from openapi_client.models.server_endpoint_update_parameters import ServerEndpointUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointUpdateParameters from a JSON string
server_endpoint_update_parameters_instance = ServerEndpointUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointUpdateParameters.to_json())

# convert the object into a dict
server_endpoint_update_parameters_dict = server_endpoint_update_parameters_instance.to_dict()
# create an instance of ServerEndpointUpdateParameters from a dict
server_endpoint_update_parameters_from_dict = ServerEndpointUpdateParameters.from_dict(server_endpoint_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


