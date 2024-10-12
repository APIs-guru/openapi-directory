# ValidateProductTransferEligibilityError

Error details of the product transfer eligibility validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**ProductTransferValidationErrorCode**](ProductTransferValidationErrorCode.md) |  | [optional] 
**details** | **str** | Detailed error message explaining the error. | [optional] 
**message** | **str** | The error message. | [optional] 

## Example

```python
from openapi_client.models.validate_product_transfer_eligibility_error import ValidateProductTransferEligibilityError

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateProductTransferEligibilityError from a JSON string
validate_product_transfer_eligibility_error_instance = ValidateProductTransferEligibilityError.from_json(json)
# print the JSON string representation of the object
print(ValidateProductTransferEligibilityError.to_json())

# convert the object into a dict
validate_product_transfer_eligibility_error_dict = validate_product_transfer_eligibility_error_instance.to_dict()
# create an instance of ValidateProductTransferEligibilityError from a dict
validate_product_transfer_eligibility_error_from_dict = ValidateProductTransferEligibilityError.from_dict(validate_product_transfer_eligibility_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


