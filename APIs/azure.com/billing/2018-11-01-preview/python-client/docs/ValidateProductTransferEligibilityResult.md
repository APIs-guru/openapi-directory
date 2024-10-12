# ValidateProductTransferEligibilityResult

Result of the product transfer eligibility validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | [**ValidateProductTransferEligibilityError**](ValidateProductTransferEligibilityError.md) |  | [optional] 
**is_transfer_eligible** | **bool** | Specifies whether the transfer is eligible or not. | [optional] [readonly] 

## Example

```python
from openapi_client.models.validate_product_transfer_eligibility_result import ValidateProductTransferEligibilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateProductTransferEligibilityResult from a JSON string
validate_product_transfer_eligibility_result_instance = ValidateProductTransferEligibilityResult.from_json(json)
# print the JSON string representation of the object
print(ValidateProductTransferEligibilityResult.to_json())

# convert the object into a dict
validate_product_transfer_eligibility_result_dict = validate_product_transfer_eligibility_result_instance.to_dict()
# create an instance of ValidateProductTransferEligibilityResult from a dict
validate_product_transfer_eligibility_result_from_dict = ValidateProductTransferEligibilityResult.from_dict(validate_product_transfer_eligibility_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


