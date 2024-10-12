# EventHubDataConnection

Class representing an event hub data connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EventHubConnectionProperties**](EventHubConnectionProperties.md) |  | [optional] 
**kind** | **str** | Kind of the endpoint for the data connection | 
**location** | **str** | Resource location. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_hub_data_connection import EventHubDataConnection

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubDataConnection from a JSON string
event_hub_data_connection_instance = EventHubDataConnection.from_json(json)
# print the JSON string representation of the object
print(EventHubDataConnection.to_json())

# convert the object into a dict
event_hub_data_connection_dict = event_hub_data_connection_instance.to_dict()
# create an instance of EventHubDataConnection from a dict
event_hub_data_connection_from_dict = EventHubDataConnection.from_dict(event_hub_data_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


