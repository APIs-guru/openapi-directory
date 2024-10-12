# LegacyDeploymentHistoryResponseHistoryInner

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
from openapi_client.models.legacy_deployment_history_response_history_inner import LegacyDeploymentHistoryResponseHistoryInner

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyDeploymentHistoryResponseHistoryInner from a JSON string
legacy_deployment_history_response_history_inner_instance = LegacyDeploymentHistoryResponseHistoryInner.from_json(json)
# print the JSON string representation of the object
print(LegacyDeploymentHistoryResponseHistoryInner.to_json())

# convert the object into a dict
legacy_deployment_history_response_history_inner_dict = legacy_deployment_history_response_history_inner_instance.to_dict()
# create an instance of LegacyDeploymentHistoryResponseHistoryInner from a dict
legacy_deployment_history_response_history_inner_from_dict = LegacyDeploymentHistoryResponseHistoryInner.from_dict(legacy_deployment_history_response_history_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


