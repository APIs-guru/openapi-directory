# PaymentMethodFreq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.payment_method_freq import PaymentMethodFreq

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodFreq from a JSON string
payment_method_freq_instance = PaymentMethodFreq.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodFreq.to_json())

# convert the object into a dict
payment_method_freq_dict = payment_method_freq_instance.to_dict()
# create an instance of PaymentMethodFreq from a dict
payment_method_freq_from_dict = PaymentMethodFreq.from_dict(payment_method_freq_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


