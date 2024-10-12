# GoogleCloudIntegrationsV1alphaLiftSuspensionRequest

Request for lift Suspension

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suspension_result** | **str** | User passed in suspension result and will be used to control workflow execution branching behavior by setting up corresponnding edge condition with suspension result. For example, if you want to lift the suspension, you can pass \&quot;Approved\&quot;, or if you want to reject the suspension and terminate workfloe execution, you can pass \&quot;Rejected\&quot; and terminate the workflow execution with configuring the edge condition. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_lift_suspension_request import GoogleCloudIntegrationsV1alphaLiftSuspensionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaLiftSuspensionRequest from a JSON string
google_cloud_integrations_v1alpha_lift_suspension_request_instance = GoogleCloudIntegrationsV1alphaLiftSuspensionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaLiftSuspensionRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_lift_suspension_request_dict = google_cloud_integrations_v1alpha_lift_suspension_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaLiftSuspensionRequest from a dict
google_cloud_integrations_v1alpha_lift_suspension_request_from_dict = GoogleCloudIntegrationsV1alphaLiftSuspensionRequest.from_dict(google_cloud_integrations_v1alpha_lift_suspension_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


