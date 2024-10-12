# GoogleCloudApigeeV1ApiSecurityRuntimeConfig

Response for GetApiSecurityRuntimeConfig[EnvironmentService.GetApiSecurityRuntimeConfig].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **List[str]** | A list of up to 5 Cloud Storage Blobs that contain SecurityActions. | [optional] 
**name** | **str** | Name of the environment API Security Runtime configuration resource. Format: &#x60;organizations/{org}/environments/{env}/apiSecurityRuntimeConfig&#x60; | [optional] 
**revision_id** | **str** | Revision ID of the API Security Runtime configuration. The higher the value, the more recently the configuration was deployed. | [optional] 
**uid** | **str** | Unique ID for the API Security Runtime configuration. The ID will only change if the environment is deleted and recreated. | [optional] 
**update_time** | **str** | Time that the API Security Runtime configuration was updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_security_runtime_config import GoogleCloudApigeeV1ApiSecurityRuntimeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ApiSecurityRuntimeConfig from a JSON string
google_cloud_apigee_v1_api_security_runtime_config_instance = GoogleCloudApigeeV1ApiSecurityRuntimeConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ApiSecurityRuntimeConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_security_runtime_config_dict = google_cloud_apigee_v1_api_security_runtime_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ApiSecurityRuntimeConfig from a dict
google_cloud_apigee_v1_api_security_runtime_config_from_dict = GoogleCloudApigeeV1ApiSecurityRuntimeConfig.from_dict(google_cloud_apigee_v1_api_security_runtime_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


