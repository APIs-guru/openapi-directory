# ReportInstanceInfoSystemRequest

Request for notebook instances to report information to Notebooks API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**Event**](Event.md) |  | [optional] 
**vm_id** | **str** | Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity | [optional] 

## Example

```python
from openapi_client.models.report_instance_info_system_request import ReportInstanceInfoSystemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportInstanceInfoSystemRequest from a JSON string
report_instance_info_system_request_instance = ReportInstanceInfoSystemRequest.from_json(json)
# print the JSON string representation of the object
print(ReportInstanceInfoSystemRequest.to_json())

# convert the object into a dict
report_instance_info_system_request_dict = report_instance_info_system_request_instance.to_dict()
# create an instance of ReportInstanceInfoSystemRequest from a dict
report_instance_info_system_request_from_dict = ReportInstanceInfoSystemRequest.from_dict(report_instance_info_system_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


