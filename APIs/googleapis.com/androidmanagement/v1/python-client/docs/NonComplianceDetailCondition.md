# NonComplianceDetailCondition

A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**non_compliance_reason** | **str** | The reason the device is not in compliance with the setting. If not set, then this condition matches any reason. | [optional] 
**package_name** | **str** | The package name of the app that&#39;s out of compliance. If not set, then this condition matches any package name. | [optional] 
**setting_name** | **str** | The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name. | [optional] 

## Example

```python
from openapi_client.models.non_compliance_detail_condition import NonComplianceDetailCondition

# TODO update the JSON string below
json = "{}"
# create an instance of NonComplianceDetailCondition from a JSON string
non_compliance_detail_condition_instance = NonComplianceDetailCondition.from_json(json)
# print the JSON string representation of the object
print(NonComplianceDetailCondition.to_json())

# convert the object into a dict
non_compliance_detail_condition_dict = non_compliance_detail_condition_instance.to_dict()
# create an instance of NonComplianceDetailCondition from a dict
non_compliance_detail_condition_from_dict = NonComplianceDetailCondition.from_dict(non_compliance_detail_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


