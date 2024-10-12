# GetProductsStatusSelling


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**List[Metadata]**](Metadata.md) |  | 
**seller_items** | [**List[SellerItem]**](SellerItem.md) |  | 

## Example

```python
from openapi_client.models.get_products_status_selling import GetProductsStatusSelling

# TODO update the JSON string below
json = "{}"
# create an instance of GetProductsStatusSelling from a JSON string
get_products_status_selling_instance = GetProductsStatusSelling.from_json(json)
# print the JSON string representation of the object
print(GetProductsStatusSelling.to_json())

# convert the object into a dict
get_products_status_selling_dict = get_products_status_selling_instance.to_dict()
# create an instance of GetProductsStatusSelling from a dict
get_products_status_selling_from_dict = GetProductsStatusSelling.from_dict(get_products_status_selling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


