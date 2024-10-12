# ProductId

The Content API ID of the product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | The Content API ID of the product, in the form &#x60;channel:contentLanguage:targetCountry:offerId&#x60;. | [optional] 

## Example

```python
from openapi_client.models.product_id import ProductId

# TODO update the JSON string below
json = "{}"
# create an instance of ProductId from a JSON string
product_id_instance = ProductId.from_json(json)
# print the JSON string representation of the object
print(ProductId.to_json())

# convert the object into a dict
product_id_dict = product_id_instance.to_dict()
# create an instance of ProductId from a dict
product_id_from_dict = ProductId.from_dict(product_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


