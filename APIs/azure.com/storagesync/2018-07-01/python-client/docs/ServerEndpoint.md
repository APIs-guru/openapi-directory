# ServerEndpoint

Server Endpoint object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServerEndpointProperties**](ServerEndpointProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_endpoint import ServerEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpoint from a JSON string
server_endpoint_instance = ServerEndpoint.from_json(json)
# print the JSON string representation of the object
print(ServerEndpoint.to_json())

# convert the object into a dict
server_endpoint_dict = server_endpoint_instance.to_dict()
# create an instance of ServerEndpoint from a dict
server_endpoint_from_dict = ServerEndpoint.from_dict(server_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


