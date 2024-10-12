# RegisteredServerCreateParameters

The parameters used when creating a registered server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RegisteredServerCreateParametersProperties**](RegisteredServerCreateParametersProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registered_server_create_parameters import RegisteredServerCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegisteredServerCreateParameters from a JSON string
registered_server_create_parameters_instance = RegisteredServerCreateParameters.from_json(json)
# print the JSON string representation of the object
print(RegisteredServerCreateParameters.to_json())

# convert the object into a dict
registered_server_create_parameters_dict = registered_server_create_parameters_instance.to_dict()
# create an instance of RegisteredServerCreateParameters from a dict
registered_server_create_parameters_from_dict = RegisteredServerCreateParameters.from_dict(registered_server_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


