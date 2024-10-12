# PasswordRequirements

Requirements for the password used to unlock a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_failed_passwords_for_wipe** | **int** | Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction. | [optional] 
**password_expiration_timeout** | **str** | Password expiration timeout. | [optional] 
**password_history_length** | **int** | The length of the password history. After setting this field, the user won&#39;t be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction. | [optional] 
**password_minimum_length** | **int** | The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX. | [optional] 
**password_minimum_letters** | **int** | Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX. | [optional] 
**password_minimum_lower_case** | **int** | Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX. | [optional] 
**password_minimum_non_letter** | **int** | Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX. | [optional] 
**password_minimum_numeric** | **int** | Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX. | [optional] 
**password_minimum_symbols** | **int** | Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX. | [optional] 
**password_minimum_upper_case** | **int** | Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX. | [optional] 
**password_quality** | **str** | The required password quality. | [optional] 
**password_scope** | **str** | The scope that the password requirement applies to. | [optional] 
**require_password_unlock** | **str** | The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile. | [optional] 
**unified_lock_settings** | **str** | Controls whether a unified lock is allowed for the device and the work profile, on devices running Android 9 and above with a work profile. This can be set only if password_scope is set to SCOPE_PROFILE, the policy will be rejected otherwise. If user has not set a separate work lock and this field is set to REQUIRE_SEPARATE_WORK_LOCK, a NonComplianceDetail is reported with nonComplianceReason set to USER_ACTION. | [optional] 

## Example

```python
from openapi_client.models.password_requirements import PasswordRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordRequirements from a JSON string
password_requirements_instance = PasswordRequirements.from_json(json)
# print the JSON string representation of the object
print(PasswordRequirements.to_json())

# convert the object into a dict
password_requirements_dict = password_requirements_instance.to_dict()
# create an instance of PasswordRequirements from a dict
password_requirements_from_dict = PasswordRequirements.from_dict(password_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


