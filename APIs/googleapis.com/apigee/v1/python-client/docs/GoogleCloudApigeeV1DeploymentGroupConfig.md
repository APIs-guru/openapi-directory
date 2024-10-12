# GoogleCloudApigeeV1DeploymentGroupConfig

DeploymentGroupConfig represents a deployment group that should be present in a particular environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_group_type** | **str** | Type of the deployment group, which will be either Standard or Extensible. | [optional] 
**name** | **str** | Name of the deployment group in the following format: &#x60;organizations/{org}/environments/{env}/deploymentGroups/{group}&#x60;. | [optional] 
**revision_id** | **str** | Revision number which can be used by the runtime to detect if the deployment group has changed between two versions. | [optional] 
**uid** | **str** | Unique ID. The ID will only change if the deployment group is deleted and recreated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_deployment_group_config import GoogleCloudApigeeV1DeploymentGroupConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeploymentGroupConfig from a JSON string
google_cloud_apigee_v1_deployment_group_config_instance = GoogleCloudApigeeV1DeploymentGroupConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeploymentGroupConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_deployment_group_config_dict = google_cloud_apigee_v1_deployment_group_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeploymentGroupConfig from a dict
google_cloud_apigee_v1_deployment_group_config_from_dict = GoogleCloudApigeeV1DeploymentGroupConfig.from_dict(google_cloud_apigee_v1_deployment_group_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


