# DataConnection

Class representing an data connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of the endpoint for the data connection | 
**location** | **str** | Resource location. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_connection import DataConnection

# TODO update the JSON string below
json = "{}"
# create an instance of DataConnection from a JSON string
data_connection_instance = DataConnection.from_json(json)
# print the JSON string representation of the object
print(DataConnection.to_json())

# convert the object into a dict
data_connection_dict = data_connection_instance.to_dict()
# create an instance of DataConnection from a dict
data_connection_from_dict = DataConnection.from_dict(data_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


