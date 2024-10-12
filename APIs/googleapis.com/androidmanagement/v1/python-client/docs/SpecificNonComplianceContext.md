# SpecificNonComplianceContext

Additional context for SpecificNonComplianceReason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onc_wifi_context** | [**OncWifiContext**](OncWifiContext.md) |  | [optional] 
**password_policies_context** | [**PasswordPoliciesContext**](PasswordPoliciesContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.specific_non_compliance_context import SpecificNonComplianceContext

# TODO update the JSON string below
json = "{}"
# create an instance of SpecificNonComplianceContext from a JSON string
specific_non_compliance_context_instance = SpecificNonComplianceContext.from_json(json)
# print the JSON string representation of the object
print(SpecificNonComplianceContext.to_json())

# convert the object into a dict
specific_non_compliance_context_dict = specific_non_compliance_context_instance.to_dict()
# create an instance of SpecificNonComplianceContext from a dict
specific_non_compliance_context_from_dict = SpecificNonComplianceContext.from_dict(specific_non_compliance_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


