# AdvancedThreatProtectionProperties

The Advanced Threat Protection settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | Indicates whether Advanced Threat Protection is enabled. | [optional] 

## Example

```python
from openapi_client.models.advanced_threat_protection_properties import AdvancedThreatProtectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedThreatProtectionProperties from a JSON string
advanced_threat_protection_properties_instance = AdvancedThreatProtectionProperties.from_json(json)
# print the JSON string representation of the object
print(AdvancedThreatProtectionProperties.to_json())

# convert the object into a dict
advanced_threat_protection_properties_dict = advanced_threat_protection_properties_instance.to_dict()
# create an instance of AdvancedThreatProtectionProperties from a dict
advanced_threat_protection_properties_from_dict = AdvancedThreatProtectionProperties.from_dict(advanced_threat_protection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


