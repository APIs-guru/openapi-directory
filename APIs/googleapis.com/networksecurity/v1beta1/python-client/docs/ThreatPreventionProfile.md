# ThreatPreventionProfile

ThreatPreventionProfile defines an action for specific threat signatures or severity levels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**severity_overrides** | [**List[SeverityOverride]**](SeverityOverride.md) | Optional. Configuration for overriding threats actions by severity match. | [optional] 
**threat_overrides** | [**List[ThreatOverride]**](ThreatOverride.md) | Optional. Configuration for overriding threats actions by threat_id match. If a threat is matched both by configuration provided in severity_overrides and threat_overrides, the threat_overrides action is applied. | [optional] 

## Example

```python
from openapi_client.models.threat_prevention_profile import ThreatPreventionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ThreatPreventionProfile from a JSON string
threat_prevention_profile_instance = ThreatPreventionProfile.from_json(json)
# print the JSON string representation of the object
print(ThreatPreventionProfile.to_json())

# convert the object into a dict
threat_prevention_profile_dict = threat_prevention_profile_instance.to_dict()
# create an instance of ThreatPreventionProfile from a dict
threat_prevention_profile_from_dict = ThreatPreventionProfile.from_dict(threat_prevention_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


