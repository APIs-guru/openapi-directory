# GoogleCloudIntegrationsV1alphaResolveSuspensionRequest

Request for [Suspensions.ResolveSuspensions].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suspension** | [**GoogleCloudIntegrationsV1alphaSuspension**](GoogleCloudIntegrationsV1alphaSuspension.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_resolve_suspension_request import GoogleCloudIntegrationsV1alphaResolveSuspensionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaResolveSuspensionRequest from a JSON string
google_cloud_integrations_v1alpha_resolve_suspension_request_instance = GoogleCloudIntegrationsV1alphaResolveSuspensionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaResolveSuspensionRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_resolve_suspension_request_dict = google_cloud_integrations_v1alpha_resolve_suspension_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaResolveSuspensionRequest from a dict
google_cloud_integrations_v1alpha_resolve_suspension_request_from_dict = GoogleCloudIntegrationsV1alphaResolveSuspensionRequest.from_dict(google_cloud_integrations_v1alpha_resolve_suspension_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


