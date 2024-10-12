# AdvancedThreatProtectionSetting

The Advanced Threat Protection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AdvancedThreatProtectionProperties**](AdvancedThreatProtectionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.advanced_threat_protection_setting import AdvancedThreatProtectionSetting

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedThreatProtectionSetting from a JSON string
advanced_threat_protection_setting_instance = AdvancedThreatProtectionSetting.from_json(json)
# print the JSON string representation of the object
print(AdvancedThreatProtectionSetting.to_json())

# convert the object into a dict
advanced_threat_protection_setting_dict = advanced_threat_protection_setting_instance.to_dict()
# create an instance of AdvancedThreatProtectionSetting from a dict
advanced_threat_protection_setting_from_dict = AdvancedThreatProtectionSetting.from_dict(advanced_threat_protection_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


