# UtilizationReport

Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed). | [optional] [readonly] 
**display_name** | **str** | The report display name, as assigned by the user. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**frame_end_time** | **str** | Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the \&quot;frame_end_time\&quot; value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14. | [optional] [readonly] 
**name** | **str** | Output only. The report unique name. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the report. | [optional] [readonly] 
**state_time** | **str** | Output only. The time the state was last set. | [optional] [readonly] 
**time_frame** | **str** | Time frame of the report. | [optional] 
**vm_count** | **int** | Output only. Total number of VMs included in the report. | [optional] [readonly] 
**vms** | [**List[VmUtilizationInfo]**](VmUtilizationInfo.md) | List of utilization information per VM. When sent as part of the request, the \&quot;vm_id\&quot; field is used in order to specify which VMs to include in the report. In that case all other fields are ignored. | [optional] 

## Example

```python
from openapi_client.models.utilization_report import UtilizationReport

# TODO update the JSON string below
json = "{}"
# create an instance of UtilizationReport from a JSON string
utilization_report_instance = UtilizationReport.from_json(json)
# print the JSON string representation of the object
print(UtilizationReport.to_json())

# convert the object into a dict
utilization_report_dict = utilization_report_instance.to_dict()
# create an instance of UtilizationReport from a dict
utilization_report_from_dict = UtilizationReport.from_dict(utilization_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


