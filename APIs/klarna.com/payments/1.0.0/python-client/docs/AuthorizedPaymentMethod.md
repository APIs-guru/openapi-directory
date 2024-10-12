# AuthorizedPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_days** | **int** |  | [optional] 
**number_of_installments** | **int** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.authorized_payment_method import AuthorizedPaymentMethod

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizedPaymentMethod from a JSON string
authorized_payment_method_instance = AuthorizedPaymentMethod.from_json(json)
# print the JSON string representation of the object
print(AuthorizedPaymentMethod.to_json())

# convert the object into a dict
authorized_payment_method_dict = authorized_payment_method_instance.to_dict()
# create an instance of AuthorizedPaymentMethod from a dict
authorized_payment_method_from_dict = AuthorizedPaymentMethod.from_dict(authorized_payment_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


