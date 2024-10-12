# GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest

The request for executing an integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**do_not_propagate_error** | **bool** | Optional. Flag to determine how to should propagate errors. If this flag is set to be true, it will not throw an exception. Instead, it will return a {@link ExecuteIntegrationsResponse} with an execution id and error messages as PostWithTriggerIdExecutionException in {@link EventParameters}. The flag is set to be false by default. | [optional] 
**execution_id** | **str** | Optional. The id of the ON_HOLD execution to be resumed. | [optional] 
**input_parameters** | [**Dict[str, GoogleCloudIntegrationsV1alphaValueType]**](GoogleCloudIntegrationsV1alphaValueType.md) | Optional. Input parameters used by integration execution. | [optional] 
**parameter_entries** | [**List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoParameterEntry.md) | Optional. Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution. | [optional] 
**parameters** | [**EnterpriseCrmFrontendsEventbusProtoEventParameters**](EnterpriseCrmFrontendsEventbusProtoEventParameters.md) |  | [optional] 
**request_id** | **str** | Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. | [optional] 
**trigger_id** | **str** | Required. Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id). The trigger_id is in the format of &#x60;api_trigger/TRIGGER_NAME&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_execute_integrations_request import GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest from a JSON string
google_cloud_integrations_v1alpha_execute_integrations_request_instance = GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_execute_integrations_request_dict = google_cloud_integrations_v1alpha_execute_integrations_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest from a dict
google_cloud_integrations_v1alpha_execute_integrations_request_from_dict = GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest.from_dict(google_cloud_integrations_v1alpha_execute_integrations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


