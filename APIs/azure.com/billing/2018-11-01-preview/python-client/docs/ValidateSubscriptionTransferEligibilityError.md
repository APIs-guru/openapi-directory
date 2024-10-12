# ValidateSubscriptionTransferEligibilityError

Error details of the transfer eligibility validation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**SubscriptionTransferValidationErrorCode**](SubscriptionTransferValidationErrorCode.md) |  | [optional] 
**details** | **str** | Detailed error message explaining the error. | [optional] 
**message** | **str** | The error message. | [optional] 

## Example

```python
from openapi_client.models.validate_subscription_transfer_eligibility_error import ValidateSubscriptionTransferEligibilityError

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateSubscriptionTransferEligibilityError from a JSON string
validate_subscription_transfer_eligibility_error_instance = ValidateSubscriptionTransferEligibilityError.from_json(json)
# print the JSON string representation of the object
print(ValidateSubscriptionTransferEligibilityError.to_json())

# convert the object into a dict
validate_subscription_transfer_eligibility_error_dict = validate_subscription_transfer_eligibility_error_instance.to_dict()
# create an instance of ValidateSubscriptionTransferEligibilityError from a dict
validate_subscription_transfer_eligibility_error_from_dict = ValidateSubscriptionTransferEligibilityError.from_dict(validate_subscription_transfer_eligibility_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


