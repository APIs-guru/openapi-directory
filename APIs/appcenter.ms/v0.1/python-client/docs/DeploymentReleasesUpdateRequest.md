# DeploymentReleasesUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**is_disabled** | **bool** |  | [optional] 
**is_mandatory** | **bool** |  | [optional] 
**rollout** | **int** |  | [optional] 
**target_binary_range** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deployment_releases_update_request import DeploymentReleasesUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentReleasesUpdateRequest from a JSON string
deployment_releases_update_request_instance = DeploymentReleasesUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(DeploymentReleasesUpdateRequest.to_json())

# convert the object into a dict
deployment_releases_update_request_dict = deployment_releases_update_request_instance.to_dict()
# create an instance of DeploymentReleasesUpdateRequest from a dict
deployment_releases_update_request_from_dict = DeploymentReleasesUpdateRequest.from_dict(deployment_releases_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


