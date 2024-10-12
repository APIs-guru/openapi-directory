# GoogleCloudIntegrationsV1alphaTestIntegrationsResponse

The response for testing an integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_parameters** | [**EnterpriseCrmFrontendsEventbusProtoEventParameters**](EnterpriseCrmFrontendsEventbusProtoEventParameters.md) |  | [optional] 
**execution_failed** | **bool** | Is true if any execution in the integration failed. False otherwise. | [optional] 
**execution_id** | **str** | The id of the execution corresponding to this run of integration. | [optional] 
**parameter_entries** | [**List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoParameterEntry.md) | Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution. | [optional] 
**parameters** | [**Dict[str, GoogleCloudIntegrationsV1alphaValueType]**](GoogleCloudIntegrationsV1alphaValueType.md) | Optional. Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_test_integrations_response import GoogleCloudIntegrationsV1alphaTestIntegrationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaTestIntegrationsResponse from a JSON string
google_cloud_integrations_v1alpha_test_integrations_response_instance = GoogleCloudIntegrationsV1alphaTestIntegrationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaTestIntegrationsResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_test_integrations_response_dict = google_cloud_integrations_v1alpha_test_integrations_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaTestIntegrationsResponse from a dict
google_cloud_integrations_v1alpha_test_integrations_response_from_dict = GoogleCloudIntegrationsV1alphaTestIntegrationsResponse.from_dict(google_cloud_integrations_v1alpha_test_integrations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


