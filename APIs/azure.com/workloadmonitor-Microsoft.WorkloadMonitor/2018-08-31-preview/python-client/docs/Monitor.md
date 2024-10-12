# Monitor

Model for Monitor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | For optimistic concurrency control. | [optional] [readonly] 
**properties** | [**MonitorProperties**](MonitorProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitor import Monitor

# TODO update the JSON string below
json = "{}"
# create an instance of Monitor from a JSON string
monitor_instance = Monitor.from_json(json)
# print the JSON string representation of the object
print(Monitor.to_json())

# convert the object into a dict
monitor_dict = monitor_instance.to_dict()
# create an instance of Monitor from a dict
monitor_from_dict = Monitor.from_dict(monitor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


