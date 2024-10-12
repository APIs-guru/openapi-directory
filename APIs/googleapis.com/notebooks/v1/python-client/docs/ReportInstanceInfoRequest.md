# ReportInstanceInfoRequest

Request for notebook instances to report information to Notebooks API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Dict[str, str]** | The metadata reported to Notebooks API. This will be merged to the instance metadata store | [optional] 
**vm_id** | **str** | Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity | [optional] 

## Example

```python
from openapi_client.models.report_instance_info_request import ReportInstanceInfoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportInstanceInfoRequest from a JSON string
report_instance_info_request_instance = ReportInstanceInfoRequest.from_json(json)
# print the JSON string representation of the object
print(ReportInstanceInfoRequest.to_json())

# convert the object into a dict
report_instance_info_request_dict = report_instance_info_request_instance.to_dict()
# create an instance of ReportInstanceInfoRequest from a dict
report_instance_info_request_from_dict = ReportInstanceInfoRequest.from_dict(report_instance_info_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


