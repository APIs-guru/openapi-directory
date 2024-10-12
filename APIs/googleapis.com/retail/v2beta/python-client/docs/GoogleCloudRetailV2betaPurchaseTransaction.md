# GoogleCloudRetailV2betaPurchaseTransaction

A transaction represents the entire purchase transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **float** | All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit &#x3D; revenue - tax - cost | [optional] 
**currency_code** | **str** | Required. Currency code. Use three-character ISO-4217 code. | [optional] 
**id** | **str** | The transaction ID with a length limit of 128 characters. | [optional] 
**revenue** | **float** | Required. Total non-zero revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. | [optional] 
**tax** | **float** | All the taxes associated with the transaction. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_purchase_transaction import GoogleCloudRetailV2betaPurchaseTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaPurchaseTransaction from a JSON string
google_cloud_retail_v2beta_purchase_transaction_instance = GoogleCloudRetailV2betaPurchaseTransaction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaPurchaseTransaction.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_purchase_transaction_dict = google_cloud_retail_v2beta_purchase_transaction_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaPurchaseTransaction from a dict
google_cloud_retail_v2beta_purchase_transaction_from_dict = GoogleCloudRetailV2betaPurchaseTransaction.from_dict(google_cloud_retail_v2beta_purchase_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


