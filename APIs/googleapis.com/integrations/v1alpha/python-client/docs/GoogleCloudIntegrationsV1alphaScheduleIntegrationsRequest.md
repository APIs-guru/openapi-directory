# GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest

The request for scheduling an integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_parameters** | [**Dict[str, GoogleCloudIntegrationsV1alphaValueType]**](GoogleCloudIntegrationsV1alphaValueType.md) | Optional. Input parameters used by integration execution. | [optional] 
**parameter_entries** | [**List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoParameterEntry.md) | Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution. | [optional] 
**parameters** | [**EnterpriseCrmEventbusProtoEventParameters**](EnterpriseCrmEventbusProtoEventParameters.md) |  | [optional] 
**request_id** | **str** | This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. | [optional] 
**schedule_time** | **str** | The time that the integration should be executed. If the time is less or equal to the current time, the integration is executed immediately. | [optional] 
**trigger_id** | **str** | Required. Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_schedule_integrations_request import GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest from a JSON string
google_cloud_integrations_v1alpha_schedule_integrations_request_instance = GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_schedule_integrations_request_dict = google_cloud_integrations_v1alpha_schedule_integrations_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest from a dict
google_cloud_integrations_v1alpha_schedule_integrations_request_from_dict = GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest.from_dict(google_cloud_integrations_v1alpha_schedule_integrations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


