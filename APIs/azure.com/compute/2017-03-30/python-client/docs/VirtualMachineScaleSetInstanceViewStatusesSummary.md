# VirtualMachineScaleSetInstanceViewStatusesSummary

Instance view statuses summary for virtual machines of a virtual machine scale set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statuses_summary** | [**List[VirtualMachineStatusCodeCount]**](VirtualMachineStatusCodeCount.md) | The extensions information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_instance_view_statuses_summary import VirtualMachineScaleSetInstanceViewStatusesSummary

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetInstanceViewStatusesSummary from a JSON string
virtual_machine_scale_set_instance_view_statuses_summary_instance = VirtualMachineScaleSetInstanceViewStatusesSummary.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetInstanceViewStatusesSummary.to_json())

# convert the object into a dict
virtual_machine_scale_set_instance_view_statuses_summary_dict = virtual_machine_scale_set_instance_view_statuses_summary_instance.to_dict()
# create an instance of VirtualMachineScaleSetInstanceViewStatusesSummary from a dict
virtual_machine_scale_set_instance_view_statuses_summary_from_dict = VirtualMachineScaleSetInstanceViewStatusesSummary.from_dict(virtual_machine_scale_set_instance_view_statuses_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


