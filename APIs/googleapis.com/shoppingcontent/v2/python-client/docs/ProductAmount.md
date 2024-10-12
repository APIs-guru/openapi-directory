# ProductAmount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price_amount** | [**Price**](Price.md) |  | [optional] 
**remitted_tax_amount** | [**Price**](Price.md) |  | [optional] 
**tax_amount** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_amount import ProductAmount

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAmount from a JSON string
product_amount_instance = ProductAmount.from_json(json)
# print the JSON string representation of the object
print(ProductAmount.to_json())

# convert the object into a dict
product_amount_dict = product_amount_instance.to_dict()
# create an instance of ProductAmount from a dict
product_amount_from_dict = ProductAmount.from_dict(product_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


