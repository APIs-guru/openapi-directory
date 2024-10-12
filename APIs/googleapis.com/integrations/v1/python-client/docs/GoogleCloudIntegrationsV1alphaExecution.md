# GoogleCloudIntegrationsV1alphaExecution

The Execution resource contains detailed information of an individual integration execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Created time of the execution. | [optional] [readonly] 
**direct_sub_executions** | [**List[GoogleCloudIntegrationsV1alphaExecution]**](GoogleCloudIntegrationsV1alphaExecution.md) | Direct sub executions of the following Execution. | [optional] 
**event_execution_details** | [**EnterpriseCrmEventbusProtoEventExecutionDetails**](EnterpriseCrmEventbusProtoEventExecutionDetails.md) |  | [optional] 
**execution_details** | [**GoogleCloudIntegrationsV1alphaExecutionDetails**](GoogleCloudIntegrationsV1alphaExecutionDetails.md) |  | [optional] 
**execution_method** | **str** | The ways user posts this event. | [optional] 
**name** | **str** | Auto-generated primary key. | [optional] 
**request_parameters** | [**Dict[str, GoogleCloudIntegrationsV1alphaValueType]**](GoogleCloudIntegrationsV1alphaValueType.md) | Event parameters come in as part of the request. | [optional] 
**request_params** | [**List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoParameterEntry.md) | Event parameters come in as part of the request. | [optional] 
**response_parameters** | [**Dict[str, GoogleCloudIntegrationsV1alphaValueType]**](GoogleCloudIntegrationsV1alphaValueType.md) | Event parameters returned as part of the response. | [optional] 
**response_params** | [**List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoParameterEntry.md) | Event parameters come out as part of the response. | [optional] 
**trigger_id** | **str** | The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks. | [optional] 
**update_time** | **str** | Output only. Last modified time of the execution. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_execution import GoogleCloudIntegrationsV1alphaExecution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaExecution from a JSON string
google_cloud_integrations_v1alpha_execution_instance = GoogleCloudIntegrationsV1alphaExecution.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaExecution.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_execution_dict = google_cloud_integrations_v1alpha_execution_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaExecution from a dict
google_cloud_integrations_v1alpha_execution_from_dict = GoogleCloudIntegrationsV1alphaExecution.from_dict(google_cloud_integrations_v1alpha_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


