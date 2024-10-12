# BillbeeInterfacesBillbeeAPIModelSoldProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billbee_id** | **int** | The Billbee internal id of the linked product | [optional] 
**country_of_origin** | **str** | The country where this article was made | [optional] 
**ean** | **str** | The EAN / GTIN of this product | [optional] 
**id** | **str** | The id of this product in the external system | [optional] 
**images** | [**List[BillbeeInterfacesBillbeeAPIModelProductImage]**](BillbeeInterfacesBillbeeAPIModelProductImage.md) | The images of this product | [optional] 
**is_digital** | **bool** | True if the product is a digital good (download etc.), false if not | [optional] 
**old_id** | **str** | This is for migration scenarios when the internal id of a product changes  I.E. Etsy when switching to the new inventory management, the ids for variants will change. | [optional] 
**platform_data** | **str** | Optional platform specific Data as serialized JSON Object for the product | [optional] 
**sku** | **str** | The SKU of this product | [optional] 
**sku_or_id** | **str** | The SKU of this product or the id if the SKU is empty | [optional] [readonly] 
**taric_code** | **str** | The TARIC code | [optional] 
**title** | **str** | The name of this product | [optional] 
**type** | **int** | Indicates whether the article is 1 &#x3D; normal or 2 &#x3D; BOM | [optional] 
**weight** | **int** | Weight of one item in gram | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_sold_product import BillbeeInterfacesBillbeeAPIModelSoldProduct

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelSoldProduct from a JSON string
billbee_interfaces_billbee_api_model_sold_product_instance = BillbeeInterfacesBillbeeAPIModelSoldProduct.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelSoldProduct.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_sold_product_dict = billbee_interfaces_billbee_api_model_sold_product_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelSoldProduct from a dict
billbee_interfaces_billbee_api_model_sold_product_from_dict = BillbeeInterfacesBillbeeAPIModelSoldProduct.from_dict(billbee_interfaces_billbee_api_model_sold_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


