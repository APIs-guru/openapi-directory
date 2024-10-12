# MonitorInstancesCollection

Model for collection of health instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to the next set of results. | [optional] [readonly] 
**value** | [**List[MonitorInstance]**](MonitorInstance.md) | Collection of health instances. | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitor_instances_collection import MonitorInstancesCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorInstancesCollection from a JSON string
monitor_instances_collection_instance = MonitorInstancesCollection.from_json(json)
# print the JSON string representation of the object
print(MonitorInstancesCollection.to_json())

# convert the object into a dict
monitor_instances_collection_dict = monitor_instances_collection_instance.to_dict()
# create an instance of MonitorInstancesCollection from a dict
monitor_instances_collection_from_dict = MonitorInstancesCollection.from_dict(monitor_instances_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


