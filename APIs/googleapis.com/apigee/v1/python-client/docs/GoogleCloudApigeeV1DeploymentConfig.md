# GoogleCloudApigeeV1DeploymentConfig

NEXT ID: 11

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, str]** | Additional key-value metadata for the deployment. | [optional] 
**base_path** | **str** | Base path where the application will be hosted. Defaults to \&quot;/\&quot;. | [optional] 
**deployment_groups** | **List[str]** | The list of deployment groups in which this proxy should be deployed. Not currently populated for shared flows. | [optional] 
**endpoints** | **Dict[str, str]** | A mapping from basepaths to proxy endpoint names in this proxy. Not populated for shared flows. | [optional] 
**location** | **str** | Location of the API proxy bundle as a URI. | [optional] 
**name** | **str** | Name of the API or shared flow revision to be deployed in the following format: &#x60;organizations/{org}/apis/{api}/revisions/{rev}&#x60; or &#x60;organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}&#x60; | [optional] 
**proxy_uid** | **str** | Unique ID of the API proxy revision. | [optional] 
**service_account** | **str** | The service account identity associated with this deployment. If non-empty, will be in the following format: &#x60;projects/-/serviceAccounts/{account_email}&#x60; | [optional] 
**uid** | **str** | Unique ID. The ID will only change if the deployment is deleted and recreated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_deployment_config import GoogleCloudApigeeV1DeploymentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeploymentConfig from a JSON string
google_cloud_apigee_v1_deployment_config_instance = GoogleCloudApigeeV1DeploymentConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeploymentConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_deployment_config_dict = google_cloud_apigee_v1_deployment_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeploymentConfig from a dict
google_cloud_apigee_v1_deployment_config_from_dict = GoogleCloudApigeeV1DeploymentConfig.from_dict(google_cloud_apigee_v1_deployment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


