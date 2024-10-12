# MitreAttack

MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_tactics** | **List[str]** | Additional MITRE ATT&amp;CK tactics related to this finding, if any. | [optional] 
**additional_techniques** | **List[str]** | Additional MITRE ATT&amp;CK techniques related to this finding, if any, along with any of their respective parent techniques. | [optional] 
**primary_tactic** | **str** | The MITRE ATT&amp;CK tactic most closely represented by this finding, if any. | [optional] 
**primary_techniques** | **List[str]** | The MITRE ATT&amp;CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&amp;CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. &#x60;SCANNING_IP_BLOCKS&#x60;), both the sub-technique and its parent technique(s) will be listed (e.g. &#x60;SCANNING_IP_BLOCKS&#x60;, &#x60;ACTIVE_SCANNING&#x60;). | [optional] 
**version** | **str** | The MITRE ATT&amp;CK version referenced by the above fields. E.g. \&quot;8\&quot;. | [optional] 

## Example

```python
from openapi_client.models.mitre_attack import MitreAttack

# TODO update the JSON string below
json = "{}"
# create an instance of MitreAttack from a JSON string
mitre_attack_instance = MitreAttack.from_json(json)
# print the JSON string representation of the object
print(MitreAttack.to_json())

# convert the object into a dict
mitre_attack_dict = mitre_attack_instance.to_dict()
# create an instance of MitreAttack from a dict
mitre_attack_from_dict = MitreAttack.from_dict(mitre_attack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


