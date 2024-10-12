# AdditionalMerchantData34

Additional merchant data of recipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_facilitator_id** | **int** | This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9],Length: 1-11 | 
**sub_merchant_id** | **str** | The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction, Type :Alphanumeric [a-zA-Z 0-9] , Maximum- Length : 1-15 | 

## Example

```python
from openapi_client.models.additional_merchant_data34 import AdditionalMerchantData34

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalMerchantData34 from a JSON string
additional_merchant_data34_instance = AdditionalMerchantData34.from_json(json)
# print the JSON string representation of the object
print(AdditionalMerchantData34.to_json())

# convert the object into a dict
additional_merchant_data34_dict = additional_merchant_data34_instance.to_dict()
# create an instance of AdditionalMerchantData34 from a dict
additional_merchant_data34_from_dict = AdditionalMerchantData34.from_dict(additional_merchant_data34_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


