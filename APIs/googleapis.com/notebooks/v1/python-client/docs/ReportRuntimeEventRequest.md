# ReportRuntimeEventRequest

Request for reporting a Managed Notebook Event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**Event**](Event.md) |  | [optional] 
**vm_id** | **str** | Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity | [optional] 

## Example

```python
from openapi_client.models.report_runtime_event_request import ReportRuntimeEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRuntimeEventRequest from a JSON string
report_runtime_event_request_instance = ReportRuntimeEventRequest.from_json(json)
# print the JSON string representation of the object
print(ReportRuntimeEventRequest.to_json())

# convert the object into a dict
report_runtime_event_request_dict = report_runtime_event_request_instance.to_dict()
# create an instance of ReportRuntimeEventRequest from a dict
report_runtime_event_request_from_dict = ReportRuntimeEventRequest.from_dict(report_runtime_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


