# ProductPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | List price, also known as MSRP (Manufacturer Suggest Retail Price) or the recommended retail price (RRP). All prices must be provided in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567 | 
**offer** | **int** | Product price. This is what will be offered to the customer. All prices must be provided in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567 | 

## Example

```python
from openapi_client.models.product_price import ProductPrice

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPrice from a JSON string
product_price_instance = ProductPrice.from_json(json)
# print the JSON string representation of the object
print(ProductPrice.to_json())

# convert the object into a dict
product_price_dict = product_price_instance.to_dict()
# create an instance of ProductPrice from a dict
product_price_from_dict = ProductPrice.from_dict(product_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


