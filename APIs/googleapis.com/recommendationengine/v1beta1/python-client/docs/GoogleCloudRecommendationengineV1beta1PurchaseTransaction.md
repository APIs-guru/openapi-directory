# GoogleCloudRecommendationengineV1beta1PurchaseTransaction

A transaction represents the entire purchase transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**costs** | **Dict[str, float]** | Optional. All the costs associated with the product. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs. Total product cost such that profit &#x3D; revenue - (sum(taxes) + sum(costs)) If product_cost is not set, then profit &#x3D; revenue - tax - shipping - sum(CatalogItem.costs). If CatalogItem.cost is not specified for one of the items, CatalogItem.cost based profit *cannot* be calculated for this Transaction. | [optional] 
**currency_code** | **str** | Required. Currency code. Use three-character ISO-4217 code. This field is not required if the event type is &#x60;refund&#x60;. | [optional] 
**id** | **str** | Optional. The transaction ID with a length limit of 128 bytes. | [optional] 
**revenue** | **float** | Required. Total revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. This field is not required if the event type is &#x60;refund&#x60;. | [optional] 
**taxes** | **Dict[str, float]** | Optional. All the taxes associated with the transaction. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_purchase_transaction import GoogleCloudRecommendationengineV1beta1PurchaseTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1PurchaseTransaction from a JSON string
google_cloud_recommendationengine_v1beta1_purchase_transaction_instance = GoogleCloudRecommendationengineV1beta1PurchaseTransaction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1PurchaseTransaction.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_purchase_transaction_dict = google_cloud_recommendationengine_v1beta1_purchase_transaction_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1PurchaseTransaction from a dict
google_cloud_recommendationengine_v1beta1_purchase_transaction_from_dict = GoogleCloudRecommendationengineV1beta1PurchaseTransaction.from_dict(google_cloud_recommendationengine_v1beta1_purchase_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


