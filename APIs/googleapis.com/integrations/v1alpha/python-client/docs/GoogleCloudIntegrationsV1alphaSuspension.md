# GoogleCloudIntegrationsV1alphaSuspension

A record representing a suspension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_config** | [**GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig**](GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig.md) |  | [optional] 
**audit** | [**GoogleCloudIntegrationsV1alphaSuspensionAudit**](GoogleCloudIntegrationsV1alphaSuspensionAudit.md) |  | [optional] 
**create_time** | **str** | Output only. Auto-generated. | [optional] [readonly] 
**event_execution_info_id** | **str** | Required. ID of the associated execution. | [optional] 
**integration** | **str** | Required. The name of the originating integration. | [optional] 
**last_modify_time** | **str** | Output only. Auto-generated. | [optional] [readonly] 
**name** | **str** | Resource name for suspensions suspension/{suspension_id} | [optional] 
**state** | **str** | Required. State of this suspension, indicating what action a resolver has taken. | [optional] 
**suspension_config** | [**EnterpriseCrmEventbusProtoSuspensionConfig**](EnterpriseCrmEventbusProtoSuspensionConfig.md) |  | [optional] 
**task_id** | **str** | Required. Task id of the associated SuspensionTask. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_suspension import GoogleCloudIntegrationsV1alphaSuspension

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaSuspension from a JSON string
google_cloud_integrations_v1alpha_suspension_instance = GoogleCloudIntegrationsV1alphaSuspension.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaSuspension.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_suspension_dict = google_cloud_integrations_v1alpha_suspension_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaSuspension from a dict
google_cloud_integrations_v1alpha_suspension_from_dict = GoogleCloudIntegrationsV1alphaSuspension.from_dict(google_cloud_integrations_v1alpha_suspension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


