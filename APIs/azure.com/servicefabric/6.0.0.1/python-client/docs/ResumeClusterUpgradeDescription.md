# ResumeClusterUpgradeDescription

Describes the parameters for resuming a cluster upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upgrade_domain** | **str** | The next upgrade domain for this cluster upgrade. | 

## Example

```python
from openapi_client.models.resume_cluster_upgrade_description import ResumeClusterUpgradeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ResumeClusterUpgradeDescription from a JSON string
resume_cluster_upgrade_description_instance = ResumeClusterUpgradeDescription.from_json(json)
# print the JSON string representation of the object
print(ResumeClusterUpgradeDescription.to_json())

# convert the object into a dict
resume_cluster_upgrade_description_dict = resume_cluster_upgrade_description_instance.to_dict()
# create an instance of ResumeClusterUpgradeDescription from a dict
resume_cluster_upgrade_description_from_dict = ResumeClusterUpgradeDescription.from_dict(resume_cluster_upgrade_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


