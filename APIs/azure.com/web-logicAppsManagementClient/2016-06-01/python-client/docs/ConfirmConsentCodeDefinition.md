# ConfirmConsentCodeDefinition

Confirm consent code request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code that was returned during consent flow | [optional] 
**object_id** | **str** | AAD object ID. This is userId | [optional] 
**tenant_id** | **str** | Tenant Id | [optional] 

## Example

```python
from openapi_client.models.confirm_consent_code_definition import ConfirmConsentCodeDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ConfirmConsentCodeDefinition from a JSON string
confirm_consent_code_definition_instance = ConfirmConsentCodeDefinition.from_json(json)
# print the JSON string representation of the object
print(ConfirmConsentCodeDefinition.to_json())

# convert the object into a dict
confirm_consent_code_definition_dict = confirm_consent_code_definition_instance.to_dict()
# create an instance of ConfirmConsentCodeDefinition from a dict
confirm_consent_code_definition_from_dict = ConfirmConsentCodeDefinition.from_dict(confirm_consent_code_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


