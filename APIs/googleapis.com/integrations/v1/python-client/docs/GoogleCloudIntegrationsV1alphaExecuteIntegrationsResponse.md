# GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse

The response for executing an integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_parameters** | [**EnterpriseCrmFrontendsEventbusProtoEventParameters**](EnterpriseCrmFrontendsEventbusProtoEventParameters.md) |  | [optional] 
**execution_failed** | **bool** | Is true if any execution in the integration failed. False otherwise. | [optional] 
**execution_id** | **str** | The id of the execution corresponding to this run of integration. | [optional] 
**output_parameters** | **Dict[str, object]** | OUTPUT parameters in format of Map. Where Key is the name of the parameter. Note: Name of the system generated parameters are wrapped by backtick(&#x60;) to distinguish them from the user defined parameters. | [optional] 
**parameter_entries** | [**List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoParameterEntry.md) | Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_execute_integrations_response import GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse from a JSON string
google_cloud_integrations_v1alpha_execute_integrations_response_instance = GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_execute_integrations_response_dict = google_cloud_integrations_v1alpha_execute_integrations_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse from a dict
google_cloud_integrations_v1alpha_execute_integrations_response_from_dict = GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse.from_dict(google_cloud_integrations_v1alpha_execute_integrations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


