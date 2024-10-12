# ServerEndpointArray

Array of ServerEndpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ServerEndpoint]**](ServerEndpoint.md) | Collection of ServerEndpoint. | [optional] 

## Example

```python
from openapi_client.models.server_endpoint_array import ServerEndpointArray

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointArray from a JSON string
server_endpoint_array_instance = ServerEndpointArray.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointArray.to_json())

# convert the object into a dict
server_endpoint_array_dict = server_endpoint_array_instance.to_dict()
# create an instance of ServerEndpointArray from a dict
server_endpoint_array_from_dict = ServerEndpointArray.from_dict(server_endpoint_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


