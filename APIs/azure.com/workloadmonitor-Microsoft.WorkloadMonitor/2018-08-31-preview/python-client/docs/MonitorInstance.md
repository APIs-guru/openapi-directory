# MonitorInstance

Model for monitor instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | For optimistic concurrency control. | [optional] [readonly] 
**properties** | [**MonitorInstanceProperties**](MonitorInstanceProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitor_instance import MonitorInstance

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorInstance from a JSON string
monitor_instance_instance = MonitorInstance.from_json(json)
# print the JSON string representation of the object
print(MonitorInstance.to_json())

# convert the object into a dict
monitor_instance_dict = monitor_instance_instance.to_dict()
# create an instance of MonitorInstance from a dict
monitor_instance_from_dict = MonitorInstance.from_dict(monitor_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


