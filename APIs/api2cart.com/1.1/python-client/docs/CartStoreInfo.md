# CartStoreInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**additional_fields** | **object** |  | [optional] 
**carrier_info** | [**List[Carrier]**](Carrier.md) |  | [optional] 
**channels** | [**List[CartChannel]**](CartChannel.md) |  | [optional] 
**country** | **str** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**default_warehouse_id** | **str** |  | [optional] 
**dimension_unit** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**multi_store_url** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**prices_include_tax** | **bool** |  | [optional] 
**root_category_id** | **str** |  | [optional] 
**store_currencies** | [**List[Currency]**](Currency.md) |  | [optional] 
**store_id** | **str** |  | [optional] 
**store_languages** | [**List[Language]**](Language.md) |  | [optional] 
**store_owner_info** | [**Info**](Info.md) |  | [optional] 
**timezone** | **str** |  | [optional] 
**weight_unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_store_info import CartStoreInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CartStoreInfo from a JSON string
cart_store_info_instance = CartStoreInfo.from_json(json)
# print the JSON string representation of the object
print(CartStoreInfo.to_json())

# convert the object into a dict
cart_store_info_dict = cart_store_info_instance.to_dict()
# create an instance of CartStoreInfo from a dict
cart_store_info_from_dict = CartStoreInfo.from_dict(cart_store_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


