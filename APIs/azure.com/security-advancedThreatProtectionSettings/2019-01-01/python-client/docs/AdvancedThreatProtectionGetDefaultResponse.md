# AdvancedThreatProtectionGetDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AdvancedThreatProtectionGetDefaultResponseError**](AdvancedThreatProtectionGetDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.advanced_threat_protection_get_default_response import AdvancedThreatProtectionGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedThreatProtectionGetDefaultResponse from a JSON string
advanced_threat_protection_get_default_response_instance = AdvancedThreatProtectionGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AdvancedThreatProtectionGetDefaultResponse.to_json())

# convert the object into a dict
advanced_threat_protection_get_default_response_dict = advanced_threat_protection_get_default_response_instance.to_dict()
# create an instance of AdvancedThreatProtectionGetDefaultResponse from a dict
advanced_threat_protection_get_default_response_from_dict = AdvancedThreatProtectionGetDefaultResponse.from_dict(advanced_threat_protection_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


