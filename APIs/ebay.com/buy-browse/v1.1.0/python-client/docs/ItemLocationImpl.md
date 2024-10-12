# ItemLocationImpl

The type that defines the fields for the location of an item, such as information typically used for an address, including postal code, county, state/province, street address, city, and country (2-digit ISO code).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | The first line of the street address. | [optional] 
**address_line2** | **str** | The second line of the street address. This field may contain such values as an apartment or suite number. | [optional] 
**city** | **str** | The city in which the item is located. Restriction: This field is populated in the search method response only when fieldgroups &#x3D; EXTENDED. | [optional] 
**country** | **str** | The two-letter ISO 3166 standard code that indicates the country in which the item is located. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**county** | **str** | The county in which the item is located. | [optional] 
**postal_code** | **str** | The postal code (or zip code in US) where the item is located. Sellers set a postal code (or zip code in US) for items when they are listed. The postal code is used for calculating proximity searches. It is anonymized when returned in itemLocation.postalCode via the API. | [optional] 
**state_or_province** | **str** | The state or province in which the item is located. | [optional] 

## Example

```python
from openapi_client.models.item_location_impl import ItemLocationImpl

# TODO update the JSON string below
json = "{}"
# create an instance of ItemLocationImpl from a JSON string
item_location_impl_instance = ItemLocationImpl.from_json(json)
# print the JSON string representation of the object
print(ItemLocationImpl.to_json())

# convert the object into a dict
item_location_impl_dict = item_location_impl_instance.to_dict()
# create an instance of ItemLocationImpl from a dict
item_location_impl_from_dict = ItemLocationImpl.from_dict(item_location_impl_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


