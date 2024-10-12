# ShipToRegion

This type is used provide details about included and excluded shipping regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region_id** | **str** | The unique identifier of the shipping region. The value returned here is dependent on the corresponding regionType value. The regionId value for a region does not vary based on the eBay marketplace. However, the corresponding regionName value for a region is a localized, text-based description of the shipping region. If the regionType value is WORLDWIDE, the regionId value will also be WORLDWIDE. If the regionType value is WORLD_REGION, the regionId value will be one of the following: AFRICA, AMERICAS, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EUROPEAN_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, SOUTH_AMERICA, SOUTHEAST_ASIA or CHANNEL_ISLANDS. If the regionType value is COUNTRY, the regionId value will be the two-letter code for the country, as defined in the ISO 3166 standard. If the regionType value is STATE_OR_PROVINCE, the regionId value will either be the two-letter code for US states and DC (as defined on this Social Security Administration page), or the two-letter code for Canadian provinces (as defined by this Canada Post page). If the regionType value is COUNTRY_REGION, the regionId value may be one of following: _AH (if a seller is not willing to ship to Alaska/Hawaii), _PR (if the seller is not willing to ship to US Protectorates), _AP (if seller is not willing to ship to a US Army or Fleet Post Office), and PO_BOX (if the seller is not willing to ship to a Post Office Box). | [optional] 
**region_name** | **str** | A localized text string that indicates the name of the shipping region. The value returned here is dependent on the corresponding regionType value. If the regionType value is WORLDWIDE, the regionName value will show Worldwide. If the regionType value is WORLD_REGION, the regionName value will be a localized text string for one of the following large geographical regions: Africa, Americas, Asia, Australia, Central America and Caribbean, Europe, European Union, Greater China, Middle East, North America, Oceania, South America, Southeast Asia, or Channel Islands. If the regionType value is COUNTRY, the regionName value will be a localized text string for any country in the world. If the regionType value is STATE_OR_PROVINCE, the regionName value will be a localized text string for any US state or Canadian province. If the regionType value is COUNTRY_REGION, the regionName value may be a localized version of one of the following: Alaska/Hawaii, US Protectorates, APO/FPO (Army or Fleet Post Office), or PO BOX. | [optional] 
**region_type** | **str** | An enumeration value that indicates the level or type of shipping region. Valid Values: COUNTRY_REGION - Indicates the region is a domestic region or special location within a country. STATE_OR_PROVINCE - Indicates the region is a state or province within a country, such as California or New York in the US, or Ontario or Alberta in Canada. COUNTRY - Indicates the region is a single country. WORLD_REGION - Indicates the region is a world region, such as Africa, the Middle East, or Southeast Asia. WORLDWIDE - Indicates the region is the entire world. This value is only applicable for included shiping regions, and not excluded shipping regions. For more detail on the actual regionName/regionId values that will be returned based on the regionType value, see the regionId and/or regionName field descriptions. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:RegionTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.ship_to_region import ShipToRegion

# TODO update the JSON string below
json = "{}"
# create an instance of ShipToRegion from a JSON string
ship_to_region_instance = ShipToRegion.from_json(json)
# print the JSON string representation of the object
print(ShipToRegion.to_json())

# convert the object into a dict
ship_to_region_dict = ship_to_region_instance.to_dict()
# create an instance of ShipToRegion from a dict
ship_to_region_from_dict = ShipToRegion.from_dict(ship_to_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


