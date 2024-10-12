# UpgradeInsight

This insight is a recommendation to upgrade a given library to the specified version, in order to avoid dependencies on non-SDK APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_name** | **str** | The name of the package to be upgraded. | [optional] 
**upgrade_to_version** | **str** | The suggested version to upgrade to. Optional: In case we are not sure which version solves this problem | [optional] 

## Example

```python
from openapi_client.models.upgrade_insight import UpgradeInsight

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeInsight from a JSON string
upgrade_insight_instance = UpgradeInsight.from_json(json)
# print the JSON string representation of the object
print(UpgradeInsight.to_json())

# convert the object into a dict
upgrade_insight_dict = upgrade_insight_instance.to_dict()
# create an instance of UpgradeInsight from a dict
upgrade_insight_from_dict = UpgradeInsight.from_dict(upgrade_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


