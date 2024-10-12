# ValidateSubscriptionTransferEligibilityResult

Result of the transfer eligibility validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | [**ValidateSubscriptionTransferEligibilityError**](ValidateSubscriptionTransferEligibilityError.md) |  | [optional] 
**is_transfer_eligible** | **bool** | Specifies whether the transfer is eligible or not. | [optional] [readonly] 

## Example

```python
from openapi_client.models.validate_subscription_transfer_eligibility_result import ValidateSubscriptionTransferEligibilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateSubscriptionTransferEligibilityResult from a JSON string
validate_subscription_transfer_eligibility_result_instance = ValidateSubscriptionTransferEligibilityResult.from_json(json)
# print the JSON string representation of the object
print(ValidateSubscriptionTransferEligibilityResult.to_json())

# convert the object into a dict
validate_subscription_transfer_eligibility_result_dict = validate_subscription_transfer_eligibility_result_instance.to_dict()
# create an instance of ValidateSubscriptionTransferEligibilityResult from a dict
validate_subscription_transfer_eligibility_result_from_dict = ValidateSubscriptionTransferEligibilityResult.from_dict(validate_subscription_transfer_eligibility_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


