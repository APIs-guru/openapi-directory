# PaymentMeansDEPRECATED

DEPRECATED - Use the new payment_means_array array.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iban** | **str** | The IBAN to which to transfer. | [optional] 
**id** | **str** | An id to mention in the transfer. | [optional] 

## Example

```python
from openapi_client.models.payment_means_deprecated import PaymentMeansDEPRECATED

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMeansDEPRECATED from a JSON string
payment_means_deprecated_instance = PaymentMeansDEPRECATED.from_json(json)
# print the JSON string representation of the object
print(PaymentMeansDEPRECATED.to_json())

# convert the object into a dict
payment_means_deprecated_dict = payment_means_deprecated_instance.to_dict()
# create an instance of PaymentMeansDEPRECATED from a dict
payment_means_deprecated_from_dict = PaymentMeansDEPRECATED.from_dict(payment_means_deprecated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


