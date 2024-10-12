# PriceList

A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | [**List[Label]**](Label.md) | Required. Language-tagged labels for the price list. | [optional] 
**price_list_id** | **str** | Required. ID for the price list. Price list, section, and item IDs cannot be duplicated within this Location. | [optional] 
**sections** | [**List[Section]**](Section.md) | Required. Sections for this price list. Each price list must contain at least one section. | [optional] 
**source_url** | **str** | Optional source URL of where the price list was retrieved from. For example, this could be the URL of the page that was automatically scraped to populate the menu information. | [optional] 

## Example

```python
from openapi_client.models.price_list import PriceList

# TODO update the JSON string below
json = "{}"
# create an instance of PriceList from a JSON string
price_list_instance = PriceList.from_json(json)
# print the JSON string representation of the object
print(PriceList.to_json())

# convert the object into a dict
price_list_dict = price_list_instance.to_dict()
# create an instance of PriceList from a dict
price_list_from_dict = PriceList.from_dict(price_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


