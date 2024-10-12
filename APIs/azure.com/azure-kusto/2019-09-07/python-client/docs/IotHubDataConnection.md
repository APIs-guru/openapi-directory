# IotHubDataConnection

Class representing an iot hub data connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IotHubConnectionProperties**](IotHubConnectionProperties.md) |  | [optional] 
**kind** | **str** | Kind of the endpoint for the data connection | 
**location** | **str** | Resource location. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iot_hub_data_connection import IotHubDataConnection

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubDataConnection from a JSON string
iot_hub_data_connection_instance = IotHubDataConnection.from_json(json)
# print the JSON string representation of the object
print(IotHubDataConnection.to_json())

# convert the object into a dict
iot_hub_data_connection_dict = iot_hub_data_connection_instance.to_dict()
# create an instance of IotHubDataConnection from a dict
iot_hub_data_connection_from_dict = IotHubDataConnection.from_dict(iot_hub_data_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


