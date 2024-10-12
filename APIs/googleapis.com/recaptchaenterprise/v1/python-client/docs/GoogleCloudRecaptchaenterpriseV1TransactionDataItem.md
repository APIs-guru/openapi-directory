# GoogleCloudRecaptchaenterpriseV1TransactionDataItem

Line items being purchased in this transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_account_id** | **str** | Optional. When a merchant is specified, its corresponding account_id. Necessary to populate marketplace-style transactions. | [optional] 
**name** | **str** | Optional. The full name of the item. | [optional] 
**quantity** | **str** | Optional. The quantity of this item that is being purchased. | [optional] 
**value** | **float** | Optional. The value per item that the user is paying, in the transaction currency, after discounts. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_transaction_data_item import GoogleCloudRecaptchaenterpriseV1TransactionDataItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionDataItem from a JSON string
google_cloud_recaptchaenterprise_v1_transaction_data_item_instance = GoogleCloudRecaptchaenterpriseV1TransactionDataItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1TransactionDataItem.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_transaction_data_item_dict = google_cloud_recaptchaenterprise_v1_transaction_data_item_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionDataItem from a dict
google_cloud_recaptchaenterprise_v1_transaction_data_item_from_dict = GoogleCloudRecaptchaenterpriseV1TransactionDataItem.from_dict(google_cloud_recaptchaenterprise_v1_transaction_data_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


