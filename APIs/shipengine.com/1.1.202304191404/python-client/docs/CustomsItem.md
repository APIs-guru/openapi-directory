# CustomsItem

The customs declaration for a single item in the shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_of_origin** | **str** | The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated  | [optional] 
**customs_item_id** | **str** | A string that uniquely identifies the customs item | [readonly] 
**description** | **str** | A description of the item | [optional] 
**harmonized_tariff_code** | **str** | The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item. | [optional] 
**quantity** | **int** | The quantity of this item in the shipment. | [optional] [default to 0]
**sku** | **str** | The SKU (Stock Keeping Unit) of the customs item | [optional] 
**sku_description** | **str** | Description of the Custom Item&#39;s SKU | [optional] 
**unit_of_measure** | **str** |  | [optional] 
**value** | [**MonetaryValue**](MonetaryValue.md) | The declared customs value of each item | [optional] 
**weight** | [**Weight**](Weight.md) | The item weight | [optional] 

## Example

```python
from openapi_client.models.customs_item import CustomsItem

# TODO update the JSON string below
json = "{}"
# create an instance of CustomsItem from a JSON string
customs_item_instance = CustomsItem.from_json(json)
# print the JSON string representation of the object
print(CustomsItem.to_json())

# convert the object into a dict
customs_item_dict = customs_item_instance.to_dict()
# create an instance of CustomsItem from a dict
customs_item_from_dict = CustomsItem.from_dict(customs_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


