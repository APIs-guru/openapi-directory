# EventHubConnection

Class representing an event hub connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] 
**properties** | [**EventHubConnectionProperties**](EventHubConnectionProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_hub_connection import EventHubConnection

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubConnection from a JSON string
event_hub_connection_instance = EventHubConnection.from_json(json)
# print the JSON string representation of the object
print(EventHubConnection.to_json())

# convert the object into a dict
event_hub_connection_dict = event_hub_connection_instance.to_dict()
# create an instance of EventHubConnection from a dict
event_hub_connection_from_dict = EventHubConnection.from_dict(event_hub_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


