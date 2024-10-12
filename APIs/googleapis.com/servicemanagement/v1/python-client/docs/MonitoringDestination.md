# MonitoringDestination

Configuration of a specific monitoring destination (the producer project or the consumer project).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | **List[str]** | Types of the metrics to report to this monitoring destination. Each type must be defined in Service.metrics section. | [optional] 
**monitored_resource** | **str** | The monitored resource type. The type must be defined in Service.monitored_resources section. | [optional] 

## Example

```python
from openapi_client.models.monitoring_destination import MonitoringDestination

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringDestination from a JSON string
monitoring_destination_instance = MonitoringDestination.from_json(json)
# print the JSON string representation of the object
print(MonitoringDestination.to_json())

# convert the object into a dict
monitoring_destination_dict = monitoring_destination_instance.to_dict()
# create an instance of MonitoringDestination from a dict
monitoring_destination_from_dict = MonitoringDestination.from_dict(monitoring_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


