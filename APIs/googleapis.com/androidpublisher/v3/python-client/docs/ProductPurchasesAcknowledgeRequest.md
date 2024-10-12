# ProductPurchasesAcknowledgeRequest

Request for the product.purchases.acknowledge API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_payload** | **str** | Payload to attach to the purchase. | [optional] 

## Example

```python
from openapi_client.models.product_purchases_acknowledge_request import ProductPurchasesAcknowledgeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPurchasesAcknowledgeRequest from a JSON string
product_purchases_acknowledge_request_instance = ProductPurchasesAcknowledgeRequest.from_json(json)
# print the JSON string representation of the object
print(ProductPurchasesAcknowledgeRequest.to_json())

# convert the object into a dict
product_purchases_acknowledge_request_dict = product_purchases_acknowledge_request_instance.to_dict()
# create an instance of ProductPurchasesAcknowledgeRequest from a dict
product_purchases_acknowledge_request_from_dict = ProductPurchasesAcknowledgeRequest.from_dict(product_purchases_acknowledge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


