# GoogleCloudDiscoveryengineV1betaTransactionInfo

A transaction represents the entire purchase transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **float** | All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit &#x3D; value - tax - cost | [optional] 
**currency** | **str** | Required. Currency code. Use three-character ISO-4217 code. | [optional] 
**discount_value** | **float** | The total discount(s) value applied to this transaction. This figure should be excluded from TransactionInfo.value For example, if a user paid TransactionInfo.value amount, then nominal (pre-discount) value of the transaction is the sum of TransactionInfo.value and TransactionInfo.discount_value This means that profit is calculated the same way, regardless of the discount value, and that TransactionInfo.discount_value can be larger than TransactionInfo.value: * Profit &#x3D; value - tax - cost | [optional] 
**tax** | **float** | All the taxes associated with the transaction. | [optional] 
**transaction_id** | **str** | The transaction ID with a length limit of 128 characters. | [optional] 
**value** | **float** | Required. Total non-zero value associated with the transaction. This value may include shipping, tax, or other adjustments to the total value that you want to include. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_transaction_info import GoogleCloudDiscoveryengineV1betaTransactionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaTransactionInfo from a JSON string
google_cloud_discoveryengine_v1beta_transaction_info_instance = GoogleCloudDiscoveryengineV1betaTransactionInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaTransactionInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_transaction_info_dict = google_cloud_discoveryengine_v1beta_transaction_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaTransactionInfo from a dict
google_cloud_discoveryengine_v1beta_transaction_info_from_dict = GoogleCloudDiscoveryengineV1betaTransactionInfo.from_dict(google_cloud_discoveryengine_v1beta_transaction_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


