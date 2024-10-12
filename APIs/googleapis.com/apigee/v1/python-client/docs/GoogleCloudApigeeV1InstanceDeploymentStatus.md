# GoogleCloudApigeeV1InstanceDeploymentStatus

The status of a deployment as reported by a single instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_revisions** | [**List[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision]**](GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision.md) | Revisions currently deployed in MPs. | [optional] 
**deployed_routes** | [**List[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute]**](GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute.md) | Current routes deployed in the ingress routing table. A route which is missing will appear in &#x60;missing_routes&#x60;. | [optional] 
**instance** | **str** | ID of the instance reporting the status. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_instance_deployment_status import GoogleCloudApigeeV1InstanceDeploymentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1InstanceDeploymentStatus from a JSON string
google_cloud_apigee_v1_instance_deployment_status_instance = GoogleCloudApigeeV1InstanceDeploymentStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1InstanceDeploymentStatus.to_json())

# convert the object into a dict
google_cloud_apigee_v1_instance_deployment_status_dict = google_cloud_apigee_v1_instance_deployment_status_instance.to_dict()
# create an instance of GoogleCloudApigeeV1InstanceDeploymentStatus from a dict
google_cloud_apigee_v1_instance_deployment_status_from_dict = GoogleCloudApigeeV1InstanceDeploymentStatus.from_dict(google_cloud_apigee_v1_instance_deployment_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


