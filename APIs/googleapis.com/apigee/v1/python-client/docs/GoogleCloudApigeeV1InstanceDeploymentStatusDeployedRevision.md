# GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision

Revisions deployed in the MPs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **int** | Percentage of MP replicas reporting this revision. | [optional] 
**revision** | **str** | API proxy revision reported as deployed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_instance_deployment_status_deployed_revision import GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision from a JSON string
google_cloud_apigee_v1_instance_deployment_status_deployed_revision_instance = GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision.to_json())

# convert the object into a dict
google_cloud_apigee_v1_instance_deployment_status_deployed_revision_dict = google_cloud_apigee_v1_instance_deployment_status_deployed_revision_instance.to_dict()
# create an instance of GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision from a dict
google_cloud_apigee_v1_instance_deployment_status_deployed_revision_from_dict = GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision.from_dict(google_cloud_apigee_v1_instance_deployment_status_deployed_revision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


