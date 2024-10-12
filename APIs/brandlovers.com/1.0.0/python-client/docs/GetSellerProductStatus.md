# GetSellerProductStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) |  | [optional] 
**price** | [**ProductPrice**](ProductPrice.md) |  | 
**sku_seller_id** | **str** | Unique Product Id (SKU) in the seller system. | 
**status** | **str** | Product status in the marketplace | 
**stock** | **int** | Number of products availble for sale from the seller. Each new successfull order will automatically reduce the number of products available. | 

## Example

```python
from openapi_client.models.get_seller_product_status import GetSellerProductStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GetSellerProductStatus from a JSON string
get_seller_product_status_instance = GetSellerProductStatus.from_json(json)
# print the JSON string representation of the object
print(GetSellerProductStatus.to_json())

# convert the object into a dict
get_seller_product_status_dict = get_seller_product_status_instance.to_dict()
# create an instance of GetSellerProductStatus from a dict
get_seller_product_status_from_dict = GetSellerProductStatus.from_dict(get_seller_product_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


