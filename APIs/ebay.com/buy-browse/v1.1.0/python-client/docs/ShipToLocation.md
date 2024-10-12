# ShipToLocation

The type that defines the fields for the country and postal code of where an item is to be shipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The two-letter ISO 3166 standard of the country for where the item is to be shipped. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**postal_code** | **str** | The zip code (postal code) for where the item is to be shipped. | [optional] 

## Example

```python
from openapi_client.models.ship_to_location import ShipToLocation

# TODO update the JSON string below
json = "{}"
# create an instance of ShipToLocation from a JSON string
ship_to_location_instance = ShipToLocation.from_json(json)
# print the JSON string representation of the object
print(ShipToLocation.to_json())

# convert the object into a dict
ship_to_location_dict = ship_to_location_instance.to_dict()
# create an instance of ShipToLocation from a dict
ship_to_location_from_dict = ShipToLocation.from_dict(ship_to_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


