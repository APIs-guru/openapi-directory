# AutoUpgradeOptions

AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_upgrade_start_time** | **str** | [Output only] This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. | [optional] 
**description** | **str** | [Output only] This field is set when upgrades are about to commence with the description of the upgrade. | [optional] 

## Example

```python
from openapi_client.models.auto_upgrade_options import AutoUpgradeOptions

# TODO update the JSON string below
json = "{}"
# create an instance of AutoUpgradeOptions from a JSON string
auto_upgrade_options_instance = AutoUpgradeOptions.from_json(json)
# print the JSON string representation of the object
print(AutoUpgradeOptions.to_json())

# convert the object into a dict
auto_upgrade_options_dict = auto_upgrade_options_instance.to_dict()
# create an instance of AutoUpgradeOptions from a dict
auto_upgrade_options_from_dict = AutoUpgradeOptions.from_dict(auto_upgrade_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


