# RegisteredServer

Registered Server resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RegisteredServerProperties**](RegisteredServerProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registered_server import RegisteredServer

# TODO update the JSON string below
json = "{}"
# create an instance of RegisteredServer from a JSON string
registered_server_instance = RegisteredServer.from_json(json)
# print the JSON string representation of the object
print(RegisteredServer.to_json())

# convert the object into a dict
registered_server_dict = registered_server_instance.to_dict()
# create an instance of RegisteredServer from a dict
registered_server_from_dict = RegisteredServer.from_dict(registered_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


