# UpgradeOccurrence

An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution** | [**UpgradeDistribution**](UpgradeDistribution.md) |  | [optional] 
**package** | **str** | Required - The package this Upgrade is for. | [optional] 
**parsed_version** | [**Version**](Version.md) |  | [optional] 

## Example

```python
from openapi_client.models.upgrade_occurrence import UpgradeOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeOccurrence from a JSON string
upgrade_occurrence_instance = UpgradeOccurrence.from_json(json)
# print the JSON string representation of the object
print(UpgradeOccurrence.to_json())

# convert the object into a dict
upgrade_occurrence_dict = upgrade_occurrence_instance.to_dict()
# create an instance of UpgradeOccurrence from a dict
upgrade_occurrence_from_dict = UpgradeOccurrence.from_dict(upgrade_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


