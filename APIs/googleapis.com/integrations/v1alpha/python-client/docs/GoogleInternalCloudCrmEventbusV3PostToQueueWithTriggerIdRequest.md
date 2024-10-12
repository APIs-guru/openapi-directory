# GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest

Use this request to post all workflows associated with a given trigger id. Next available id: 11

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Optional. If the client id is provided, then the combination of trigger id and client id is matched across all the workflows. If the client id is not provided, then workflows with matching trigger id are executed for each client id in the {@link TriggerConfig}. For Api Trigger, the client id is required and will be validated against the allowed clients. | [optional] 
**ignore_error_if_no_active_workflow** | **bool** | Optional. Flag to determine whether clients would suppress a warning when no ACTIVE workflows are not found. If this flag is set to be true, an error will not be thrown if the requested trigger_id or client_id is not found in any ACTIVE workflow. Otherwise, the error is always thrown. The flag is set to be false by default. | [optional] 
**parameters** | [**EnterpriseCrmEventbusProtoEventParameters**](EnterpriseCrmEventbusProtoEventParameters.md) |  | [optional] 
**priority** | **str** | The request priority this request should be processed at. For internal users: | [optional] 
**request_id** | **str** | Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. Must have no more than 36 characters and contain only alphanumeric characters and hyphens. | [optional] 
**resource_name** | **str** | This field is only required when using Admin Access. The resource name of target, or the parent resource name. For example: \&quot;projects/*/locations/*/integrations/*\&quot; | [optional] 
**scheduled_time** | **str** | Optional. Time in milliseconds since epoch when the given event would be scheduled. | [optional] 
**test_mode** | **bool** | Optional. Sets test mode in {@link enterprise/crm/eventbus/event_message.proto}. | [optional] 
**trigger_id** | **str** | Matched against all {@link TriggerConfig}s across all workflows. i.e. TriggerConfig.trigger_id.equals(trigger_id) Required. | [optional] 
**workflow_name** | **str** | Optional. If provided, the workflow_name is used to filter all the matched workflows having same trigger_id+client_id. A combination of trigger_id, client_id and workflow_name identifies a unique workflow. | [optional] 

## Example

```python
from openapi_client.models.google_internal_cloud_crm_eventbus_v3_post_to_queue_with_trigger_id_request import GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest from a JSON string
google_internal_cloud_crm_eventbus_v3_post_to_queue_with_trigger_id_request_instance = GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest.to_json())

# convert the object into a dict
google_internal_cloud_crm_eventbus_v3_post_to_queue_with_trigger_id_request_dict = google_internal_cloud_crm_eventbus_v3_post_to_queue_with_trigger_id_request_instance.to_dict()
# create an instance of GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest from a dict
google_internal_cloud_crm_eventbus_v3_post_to_queue_with_trigger_id_request_from_dict = GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest.from_dict(google_internal_cloud_crm_eventbus_v3_post_to_queue_with_trigger_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


