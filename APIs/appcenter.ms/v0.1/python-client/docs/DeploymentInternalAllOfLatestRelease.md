# DeploymentInternalAllOfLatestRelease


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**is_disabled** | **bool** |  | [optional] 
**is_mandatory** | **bool** |  | [optional] 
**rollout** | **int** |  | [optional] 
**target_binary_range** | **str** |  | [optional] 
**blob_url** | **str** |  | [optional] 
**diff_package_map** | [**Dict[str, CodePushDeploymentsList200ResponseInnerLatestReleaseAllOfDiffPackageMapValue]**](CodePushDeploymentsList200ResponseInnerLatestReleaseAllOfDiffPackageMapValue.md) |  | [optional] 
**label** | **str** |  | [optional] 
**original_deployment** | **str** | Set on &#39;Promote&#39; | [optional] 
**original_label** | **str** | Set on &#39;Promote&#39; and &#39;Rollback&#39; | [optional] 
**package_hash** | **str** |  | [optional] 
**release_method** | **str** | The release method is unknown if unspecified | [optional] 
**released_by** | **str** |  | [optional] 
**size** | **float** |  | [optional] 
**upload_time** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.deployment_internal_all_of_latest_release import DeploymentInternalAllOfLatestRelease

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentInternalAllOfLatestRelease from a JSON string
deployment_internal_all_of_latest_release_instance = DeploymentInternalAllOfLatestRelease.from_json(json)
# print the JSON string representation of the object
print(DeploymentInternalAllOfLatestRelease.to_json())

# convert the object into a dict
deployment_internal_all_of_latest_release_dict = deployment_internal_all_of_latest_release_instance.to_dict()
# create an instance of DeploymentInternalAllOfLatestRelease from a dict
deployment_internal_all_of_latest_release_from_dict = DeploymentInternalAllOfLatestRelease.from_dict(deployment_internal_all_of_latest_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


