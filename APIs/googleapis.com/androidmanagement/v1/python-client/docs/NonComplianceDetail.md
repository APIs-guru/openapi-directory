# NonComplianceDetail

Provides detail about non-compliance with a policy setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **object** | If the policy setting could not be applied, the current value of the setting on the device. | [optional] 
**field_path** | **str** | For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a subfield name. 2) For array-typed fields, the field name is followed by the array index enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url | [optional] 
**installation_failure_reason** | **str** | If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can&#39;t be installed or updated. | [optional] 
**non_compliance_reason** | **str** | The reason the device is not in compliance with the setting. | [optional] 
**package_name** | **str** | The package name indicating which app is out of compliance, if applicable. | [optional] 
**setting_name** | **str** | The name of the policy setting. This is the JSON field name of a top-level Policy field. | [optional] 
**specific_non_compliance_context** | [**SpecificNonComplianceContext**](SpecificNonComplianceContext.md) |  | [optional] 
**specific_non_compliance_reason** | **str** | The policy-specific reason the device is not in compliance with the setting. | [optional] 

## Example

```python
from openapi_client.models.non_compliance_detail import NonComplianceDetail

# TODO update the JSON string below
json = "{}"
# create an instance of NonComplianceDetail from a JSON string
non_compliance_detail_instance = NonComplianceDetail.from_json(json)
# print the JSON string representation of the object
print(NonComplianceDetail.to_json())

# convert the object into a dict
non_compliance_detail_dict = non_compliance_detail_instance.to_dict()
# create an instance of NonComplianceDetail from a dict
non_compliance_detail_from_dict = NonComplianceDetail.from_dict(non_compliance_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


