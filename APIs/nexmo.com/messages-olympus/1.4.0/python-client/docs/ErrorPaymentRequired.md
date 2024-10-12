# ErrorPaymentRequired


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_payment_required import ErrorPaymentRequired

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorPaymentRequired from a JSON string
error_payment_required_instance = ErrorPaymentRequired.from_json(json)
# print the JSON string representation of the object
print(ErrorPaymentRequired.to_json())

# convert the object into a dict
error_payment_required_dict = error_payment_required_instance.to_dict()
# create an instance of ErrorPaymentRequired from a dict
error_payment_required_from_dict = ErrorPaymentRequired.from_dict(error_payment_required_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


