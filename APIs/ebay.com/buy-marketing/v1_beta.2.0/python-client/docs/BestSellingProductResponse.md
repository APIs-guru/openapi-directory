# BestSellingProductResponse

The type that defines the fields for the best selling product information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchandised_products** | [**List[MerchandisedProduct]**](MerchandisedProduct.md) | An array of containers for the products. | [optional] 
**warnings** | [**List[Error]**](Error.md) | The container with all the warnings for the input request. | [optional] 

## Example

```python
from openapi_client.models.best_selling_product_response import BestSellingProductResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BestSellingProductResponse from a JSON string
best_selling_product_response_instance = BestSellingProductResponse.from_json(json)
# print the JSON string representation of the object
print(BestSellingProductResponse.to_json())

# convert the object into a dict
best_selling_product_response_dict = best_selling_product_response_instance.to_dict()
# create an instance of BestSellingProductResponse from a dict
best_selling_product_response_from_dict = BestSellingProductResponse.from_dict(best_selling_product_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


