# ThreatOverride

Defines what action to take for a specific threat_id match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Required. Threat action override. For some threat types, only a subset of actions applies. | [optional] 
**threat_id** | **str** | Required. Vendor-specific ID of a threat to override. | [optional] 
**type** | **str** | Output only. Type of the threat (read only). | [optional] [readonly] 

## Example

```python
from openapi_client.models.threat_override import ThreatOverride

# TODO update the JSON string below
json = "{}"
# create an instance of ThreatOverride from a JSON string
threat_override_instance = ThreatOverride.from_json(json)
# print the JSON string representation of the object
print(ThreatOverride.to_json())

# convert the object into a dict
threat_override_dict = threat_override_instance.to_dict()
# create an instance of ThreatOverride from a dict
threat_override_from_dict = ThreatOverride.from_dict(threat_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


