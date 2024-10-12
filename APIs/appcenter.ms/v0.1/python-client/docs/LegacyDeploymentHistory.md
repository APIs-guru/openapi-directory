# LegacyDeploymentHistory

Information about a specific release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_of** | [**LegacyCodePushReleaseResponsePackage**](LegacyCodePushReleaseResponsePackage.md) |  | [optional] 
**description** | **str** | The description of the release. | [optional] 
**original_deployment** | **str** | The original deployment of the release, if it&#39;s ever been promoted. | [optional] 
**original_label** | **str** | The original label of the release, if it&#39;s ever been updated. | [optional] 
**package_hash** | **str** | The package&#39;s hash value (internal use). | [optional] 

## Example

```python
from openapi_client.models.legacy_deployment_history import LegacyDeploymentHistory

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyDeploymentHistory from a JSON string
legacy_deployment_history_instance = LegacyDeploymentHistory.from_json(json)
# print the JSON string representation of the object
print(LegacyDeploymentHistory.to_json())

# convert the object into a dict
legacy_deployment_history_dict = legacy_deployment_history_instance.to_dict()
# create an instance of LegacyDeploymentHistory from a dict
legacy_deployment_history_from_dict = LegacyDeploymentHistory.from_dict(legacy_deployment_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


