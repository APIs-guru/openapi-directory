# AutomaticOSUpgradeProperties

Describes automatic OS upgrade properties on the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automatic_os_upgrade_supported** | **bool** | Specifies whether automatic OS upgrade is supported on the image. | 

## Example

```python
from openapi_client.models.automatic_os_upgrade_properties import AutomaticOSUpgradeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AutomaticOSUpgradeProperties from a JSON string
automatic_os_upgrade_properties_instance = AutomaticOSUpgradeProperties.from_json(json)
# print the JSON string representation of the object
print(AutomaticOSUpgradeProperties.to_json())

# convert the object into a dict
automatic_os_upgrade_properties_dict = automatic_os_upgrade_properties_instance.to_dict()
# create an instance of AutomaticOSUpgradeProperties from a dict
automatic_os_upgrade_properties_from_dict = AutomaticOSUpgradeProperties.from_dict(automatic_os_upgrade_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


