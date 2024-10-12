# MonitoredProject

A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when this MonitoredProject was created. | [optional] [readonly] 
**name** | **str** | Immutable. The resource name of the MonitoredProject. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER} | [optional] 

## Example

```python
from openapi_client.models.monitored_project import MonitoredProject

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoredProject from a JSON string
monitored_project_instance = MonitoredProject.from_json(json)
# print the JSON string representation of the object
print(MonitoredProject.to_json())

# convert the object into a dict
monitored_project_dict = monitored_project_instance.to_dict()
# create an instance of MonitoredProject from a dict
monitored_project_from_dict = MonitoredProject.from_dict(monitored_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


