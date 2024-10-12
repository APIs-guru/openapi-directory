# ComplianceRule

A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_level_condition** | [**ApiLevelCondition**](ApiLevelCondition.md) |  | [optional] 
**disable_apps** | **bool** | If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed. | [optional] 
**non_compliance_detail_condition** | [**NonComplianceDetailCondition**](NonComplianceDetailCondition.md) |  | [optional] 
**package_names_to_disable** | **List[str]** | If set, the rule includes a mitigating action to disable apps specified in the list, but app data is preserved. | [optional] 

## Example

```python
from openapi_client.models.compliance_rule import ComplianceRule

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceRule from a JSON string
compliance_rule_instance = ComplianceRule.from_json(json)
# print the JSON string representation of the object
print(ComplianceRule.to_json())

# convert the object into a dict
compliance_rule_dict = compliance_rule_instance.to_dict()
# create an instance of ComplianceRule from a dict
compliance_rule_from_dict = ComplianceRule.from_dict(compliance_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


