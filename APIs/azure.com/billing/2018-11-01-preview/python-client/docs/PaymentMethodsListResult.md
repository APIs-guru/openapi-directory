# PaymentMethodsListResult

Result of listing payment methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[PaymentMethod]**](PaymentMethod.md) | The list of payment methods. | [optional] [readonly] 

## Example

```python
from openapi_client.models.payment_methods_list_result import PaymentMethodsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodsListResult from a JSON string
payment_methods_list_result_instance = PaymentMethodsListResult.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodsListResult.to_json())

# convert the object into a dict
payment_methods_list_result_dict = payment_methods_list_result_instance.to_dict()
# create an instance of PaymentMethodsListResult from a dict
payment_methods_list_result_from_dict = PaymentMethodsListResult.from_dict(payment_methods_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


