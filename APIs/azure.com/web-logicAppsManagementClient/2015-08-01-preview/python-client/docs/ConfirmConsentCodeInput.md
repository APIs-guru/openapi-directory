# ConfirmConsentCodeInput

Confirm Consent Code Input payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.confirm_consent_code_input import ConfirmConsentCodeInput

# TODO update the JSON string below
json = "{}"
# create an instance of ConfirmConsentCodeInput from a JSON string
confirm_consent_code_input_instance = ConfirmConsentCodeInput.from_json(json)
# print the JSON string representation of the object
print(ConfirmConsentCodeInput.to_json())

# convert the object into a dict
confirm_consent_code_input_dict = confirm_consent_code_input_instance.to_dict()
# create an instance of ConfirmConsentCodeInput from a dict
confirm_consent_code_input_from_dict = ConfirmConsentCodeInput.from_dict(confirm_consent_code_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


