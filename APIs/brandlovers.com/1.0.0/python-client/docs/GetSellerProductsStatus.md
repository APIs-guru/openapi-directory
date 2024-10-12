# GetSellerProductsStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**List[Metadata]**](Metadata.md) | Response payload | [optional] 
**skus** | [**List[GetSellerProductStatus]**](GetSellerProductStatus.md) | Status of the products from the seller | [optional] 

## Example

```python
from openapi_client.models.get_seller_products_status import GetSellerProductsStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GetSellerProductsStatus from a JSON string
get_seller_products_status_instance = GetSellerProductsStatus.from_json(json)
# print the JSON string representation of the object
print(GetSellerProductsStatus.to_json())

# convert the object into a dict
get_seller_products_status_dict = get_seller_products_status_instance.to_dict()
# create an instance of GetSellerProductsStatus from a dict
get_seller_products_status_from_dict = GetSellerProductsStatus.from_dict(get_seller_products_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


