# GoogleCloudIntegrationsV1alphaCancelExecutionResponse

Response for cancelling an execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_canceled** | **bool** | True if cancellation performed successfully | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_cancel_execution_response import GoogleCloudIntegrationsV1alphaCancelExecutionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaCancelExecutionResponse from a JSON string
google_cloud_integrations_v1alpha_cancel_execution_response_instance = GoogleCloudIntegrationsV1alphaCancelExecutionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaCancelExecutionResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_cancel_execution_response_dict = google_cloud_integrations_v1alpha_cancel_execution_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaCancelExecutionResponse from a dict
google_cloud_integrations_v1alpha_cancel_execution_response_from_dict = GoogleCloudIntegrationsV1alphaCancelExecutionResponse.from_dict(google_cloud_integrations_v1alpha_cancel_execution_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


