# MachinesSummary

A summary of the machines in the workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MachinesSummaryProperties**](MachinesSummaryProperties.md) |  | [optional] 
**id** | **str** | Resource identifier. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.machines_summary import MachinesSummary

# TODO update the JSON string below
json = "{}"
# create an instance of MachinesSummary from a JSON string
machines_summary_instance = MachinesSummary.from_json(json)
# print the JSON string representation of the object
print(MachinesSummary.to_json())

# convert the object into a dict
machines_summary_dict = machines_summary_instance.to_dict()
# create an instance of MachinesSummary from a dict
machines_summary_from_dict = MachinesSummary.from_dict(machines_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


