# GoogleCloudIntegrationsV1alphaSuccessPolicy

Policy that dictates the behavior for the task after it completes successfully.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**final_state** | **str** | State to which the execution snapshot status will be set if the task succeeds. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_success_policy import GoogleCloudIntegrationsV1alphaSuccessPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaSuccessPolicy from a JSON string
google_cloud_integrations_v1alpha_success_policy_instance = GoogleCloudIntegrationsV1alphaSuccessPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaSuccessPolicy.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_success_policy_dict = google_cloud_integrations_v1alpha_success_policy_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaSuccessPolicy from a dict
google_cloud_integrations_v1alpha_success_policy_from_dict = GoogleCloudIntegrationsV1alphaSuccessPolicy.from_dict(google_cloud_integrations_v1alpha_success_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


