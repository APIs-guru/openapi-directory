# UpgradeNote

An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be a Upgrade Note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distributions** | [**List[UpgradeDistribution]**](UpgradeDistribution.md) | Metadata about the upgrade for each specific operating system. | [optional] 
**package** | **str** | Required - The package this Upgrade is for. | [optional] 
**version** | [**Version**](Version.md) |  | [optional] 

## Example

```python
from openapi_client.models.upgrade_note import UpgradeNote

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeNote from a JSON string
upgrade_note_instance = UpgradeNote.from_json(json)
# print the JSON string representation of the object
print(UpgradeNote.to_json())

# convert the object into a dict
upgrade_note_dict = upgrade_note_instance.to_dict()
# create an instance of UpgradeNote from a dict
upgrade_note_from_dict = UpgradeNote.from_dict(upgrade_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


