# UpgradeDistribution

The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification** | **str** | The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v&#x3D;vs.85) | [optional] 
**cpe_uri** | **str** | Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/. | [optional] 
**cve** | **List[str]** | The cve tied to this Upgrade. | [optional] 
**severity** | **str** | The severity as specified by the upstream operating system. | [optional] 

## Example

```python
from openapi_client.models.upgrade_distribution import UpgradeDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeDistribution from a JSON string
upgrade_distribution_instance = UpgradeDistribution.from_json(json)
# print the JSON string representation of the object
print(UpgradeDistribution.to_json())

# convert the object into a dict
upgrade_distribution_dict = upgrade_distribution_instance.to_dict()
# create an instance of UpgradeDistribution from a dict
upgrade_distribution_from_dict = UpgradeDistribution.from_dict(upgrade_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


