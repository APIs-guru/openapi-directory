# GoogleCloudRecaptchaenterpriseV1TransactionData

Transaction data associated with a payment protected by reCAPTCHA Enterprise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**GoogleCloudRecaptchaenterpriseV1TransactionDataAddress**](GoogleCloudRecaptchaenterpriseV1TransactionDataAddress.md) |  | [optional] 
**card_bin** | **str** | Optional. The Bank Identification Number - generally the first 6 or 8 digits of the card. | [optional] 
**card_last_four** | **str** | Optional. The last four digits of the card. | [optional] 
**currency_code** | **str** | Optional. The currency code in ISO-4217 format. | [optional] 
**gateway_info** | [**GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo**](GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo.md) |  | [optional] 
**items** | [**List[GoogleCloudRecaptchaenterpriseV1TransactionDataItem]**](GoogleCloudRecaptchaenterpriseV1TransactionDataItem.md) | Optional. Items purchased in this transaction. | [optional] 
**merchants** | [**List[GoogleCloudRecaptchaenterpriseV1TransactionDataUser]**](GoogleCloudRecaptchaenterpriseV1TransactionDataUser.md) | Optional. Information about the user or users fulfilling the transaction. | [optional] 
**payment_method** | **str** | Optional. The payment method for the transaction. The allowed values are: * credit-card * debit-card * gift-card * processor-{name} (If a third-party is used, for example, processor-paypal) * custom-{name} (If an alternative method is used, for example, custom-crypto) | [optional] 
**shipping_address** | [**GoogleCloudRecaptchaenterpriseV1TransactionDataAddress**](GoogleCloudRecaptchaenterpriseV1TransactionDataAddress.md) |  | [optional] 
**shipping_value** | **float** | Optional. The value of shipping in the specified currency. 0 for free or no shipping. | [optional] 
**transaction_id** | **str** | Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id. | [optional] 
**user** | [**GoogleCloudRecaptchaenterpriseV1TransactionDataUser**](GoogleCloudRecaptchaenterpriseV1TransactionDataUser.md) |  | [optional] 
**value** | **float** | Optional. The decimal value of the transaction in the specified currency. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_transaction_data import GoogleCloudRecaptchaenterpriseV1TransactionData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionData from a JSON string
google_cloud_recaptchaenterprise_v1_transaction_data_instance = GoogleCloudRecaptchaenterpriseV1TransactionData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1TransactionData.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_transaction_data_dict = google_cloud_recaptchaenterprise_v1_transaction_data_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionData from a dict
google_cloud_recaptchaenterprise_v1_transaction_data_from_dict = GoogleCloudRecaptchaenterpriseV1TransactionData.from_dict(google_cloud_recaptchaenterprise_v1_transaction_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


