# TargetEligibilityErrorMessage

The error/warning message due to which the device is ineligible as a failover target device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The localized error message stating the reason why the device is not eligible as a target device. | [optional] 
**resolution** | **str** | The localized resolution message for the error. | [optional] 
**result_code** | **str** | The result code for the error, due to which the device does not qualify as a failover target device. | [optional] 

## Example

```python
from openapi_client.models.target_eligibility_error_message import TargetEligibilityErrorMessage

# TODO update the JSON string below
json = "{}"
# create an instance of TargetEligibilityErrorMessage from a JSON string
target_eligibility_error_message_instance = TargetEligibilityErrorMessage.from_json(json)
# print the JSON string representation of the object
print(TargetEligibilityErrorMessage.to_json())

# convert the object into a dict
target_eligibility_error_message_dict = target_eligibility_error_message_instance.to_dict()
# create an instance of TargetEligibilityErrorMessage from a dict
target_eligibility_error_message_from_dict = TargetEligibilityErrorMessage.from_dict(target_eligibility_error_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


