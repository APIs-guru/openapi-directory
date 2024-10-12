# ManagementSettings

Defines renewal, billing, and transfer settings for a `Registration`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preferred_renewal_method** | **str** | Optional. The desired renewal method for this &#x60;Registration&#x60;. The actual &#x60;renewal_method&#x60; is automatically updated to reflect this choice. If unset or equal to &#x60;RENEWAL_METHOD_UNSPECIFIED&#x60;, the actual &#x60;renewalMethod&#x60; is treated as if it were set to &#x60;AUTOMATIC_RENEWAL&#x60;. You cannot use &#x60;RENEWAL_DISABLED&#x60; during resource creation, and you can update the renewal status only when the &#x60;Registration&#x60; resource has state &#x60;ACTIVE&#x60; or &#x60;SUSPENDED&#x60;. When &#x60;preferred_renewal_method&#x60; is set to &#x60;AUTOMATIC_RENEWAL&#x60;, the actual &#x60;renewal_method&#x60; can be set to &#x60;RENEWAL_DISABLED&#x60; in case of problems with the billing account or reported domain abuse. In such cases, check the &#x60;issues&#x60; field on the &#x60;Registration&#x60;. After the problem is resolved, the &#x60;renewal_method&#x60; is automatically updated to &#x60;preferred_renewal_method&#x60; in a few hours. | [optional] 
**renewal_method** | **str** | Output only. The actual renewal method for this &#x60;Registration&#x60;. When &#x60;preferred_renewal_method&#x60; is set to &#x60;AUTOMATIC_RENEWAL&#x60;, the actual &#x60;renewal_method&#x60; can be equal to &#x60;RENEWAL_DISABLED&#x60;—for example, when there are problems with the billing account or reported domain abuse. In such cases, check the &#x60;issues&#x60; field on the &#x60;Registration&#x60;. After the problem is resolved, the &#x60;renewal_method&#x60; is automatically updated to &#x60;preferred_renewal_method&#x60; in a few hours. | [optional] [readonly] 
**transfer_lock_state** | **str** | Controls whether the domain can be transferred to another registrar. | [optional] 

## Example

```python
from openapi_client.models.management_settings import ManagementSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementSettings from a JSON string
management_settings_instance = ManagementSettings.from_json(json)
# print the JSON string representation of the object
print(ManagementSettings.to_json())

# convert the object into a dict
management_settings_dict = management_settings_instance.to_dict()
# create an instance of ManagementSettings from a dict
management_settings_from_dict = ManagementSettings.from_dict(management_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


