# ExportStatus

The details of the export status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | The date and time when the export ended. | [optional] 
**run_step_result_id** | **str** | The run step result Id. | [optional] 
**service_id** | **str** | The id of the service for whom the export status is being reported. | [optional] 
**service_member_id** | **str** | The server Id for whom the export status is being reported. | [optional] 

## Example

```python
from openapi_client.models.export_status import ExportStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ExportStatus from a JSON string
export_status_instance = ExportStatus.from_json(json)
# print the JSON string representation of the object
print(ExportStatus.to_json())

# convert the object into a dict
export_status_dict = export_status_instance.to_dict()
# create an instance of ExportStatus from a dict
export_status_from_dict = ExportStatus.from_dict(export_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


