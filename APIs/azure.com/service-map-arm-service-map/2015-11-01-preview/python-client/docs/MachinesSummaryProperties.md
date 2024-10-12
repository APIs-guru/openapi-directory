# MachinesSummaryProperties

Summarizes machines in the workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live** | **int** | Number of live machines. | 
**os** | [**MachineCountsByOperatingSystem**](MachineCountsByOperatingSystem.md) |  | 
**total** | **int** | Total number of machines. | 
**end_time** | **datetime** | Summary interval end time. | 
**start_time** | **datetime** | Summary interval start time. | 

## Example

```python
from openapi_client.models.machines_summary_properties import MachinesSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MachinesSummaryProperties from a JSON string
machines_summary_properties_instance = MachinesSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(MachinesSummaryProperties.to_json())

# convert the object into a dict
machines_summary_properties_dict = machines_summary_properties_instance.to_dict()
# create an instance of MachinesSummaryProperties from a dict
machines_summary_properties_from_dict = MachinesSummaryProperties.from_dict(machines_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


