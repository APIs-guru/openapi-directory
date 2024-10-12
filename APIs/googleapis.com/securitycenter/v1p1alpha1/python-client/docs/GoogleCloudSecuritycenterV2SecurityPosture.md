# GoogleCloudSecuritycenterV2SecurityPosture

Represents a posture that is deployed on Google Cloud by the Security Command Center Posture Management service. A posture contains one or more policy sets. A policy set is a group of policies that enforce a set of security rules on Google Cloud.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_policy** | **str** | The name of the updated policy, for example, &#x60;projects/{project_id}/policies/{constraint_name}&#x60;. | [optional] 
**name** | **str** | Name of the posture, for example, &#x60;CIS-Posture&#x60;. | [optional] 
**policy** | **str** | The ID of the updated policy, for example, &#x60;compute-policy-1&#x60;. | [optional] 
**policy_drift_details** | [**List[GoogleCloudSecuritycenterV2PolicyDriftDetails]**](GoogleCloudSecuritycenterV2PolicyDriftDetails.md) | The details about a change in an updated policy that violates the deployed posture. | [optional] 
**policy_set** | **str** | The name of the updated policy set, for example, &#x60;cis-policyset&#x60;. | [optional] 
**posture_deployment** | **str** | The name of the posture deployment, for example, &#x60;organizations/{org_id}/posturedeployments/{posture_deployment_id}&#x60;. | [optional] 
**posture_deployment_resource** | **str** | The project, folder, or organization on which the posture is deployed, for example, &#x60;projects/{project_number}&#x60;. | [optional] 
**revision_id** | **str** | The version of the posture, for example, &#x60;c7cfa2a8&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_security_posture import GoogleCloudSecuritycenterV2SecurityPosture

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2SecurityPosture from a JSON string
google_cloud_securitycenter_v2_security_posture_instance = GoogleCloudSecuritycenterV2SecurityPosture.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2SecurityPosture.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_security_posture_dict = google_cloud_securitycenter_v2_security_posture_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2SecurityPosture from a dict
google_cloud_securitycenter_v2_security_posture_from_dict = GoogleCloudSecuritycenterV2SecurityPosture.from_dict(google_cloud_securitycenter_v2_security_posture_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


