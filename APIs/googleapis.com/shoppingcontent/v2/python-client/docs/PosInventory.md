# PosInventory

The absolute quantity of an item available at the given store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_language** | **str** | Required. The two-letter ISO 639-1 language code for the item. | [optional] 
**gtin** | **str** | Global Trade Item Number. | [optional] 
**item_id** | **str** | Required. A unique identifier for the item. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#posInventory&#x60;\&quot; | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**quantity** | **str** | Required. The available quantity of the item. | [optional] 
**store_code** | **str** | Required. The identifier of the merchant&#39;s store. Either a &#x60;storeCode&#x60; inserted via the API or the code of the store in Google My Business. | [optional] 
**target_country** | **str** | Required. The CLDR territory code for the item. | [optional] 
**timestamp** | **str** | Required. The inventory timestamp, in ISO 8601 format. | [optional] 

## Example

```python
from openapi_client.models.pos_inventory import PosInventory

# TODO update the JSON string below
json = "{}"
# create an instance of PosInventory from a JSON string
pos_inventory_instance = PosInventory.from_json(json)
# print the JSON string representation of the object
print(PosInventory.to_json())

# convert the object into a dict
pos_inventory_dict = pos_inventory_instance.to_dict()
# create an instance of PosInventory from a dict
pos_inventory_from_dict = PosInventory.from_dict(pos_inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


