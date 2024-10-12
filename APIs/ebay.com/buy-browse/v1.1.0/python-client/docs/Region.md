# Region

This type is used to provide region details for a tax jurisdiction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region_name** | **str** | A localized text string that indicates the name of the region. Taxes are generally charged at the state/province level or at the country level in the case of VAT tax. | [optional] 
**region_type** | **str** | An enumeration value that indicates the type of region for the tax jurisdiction. Valid Values: STATE_OR_PROVINCE - Indicates the region is a state or province within a country, such as California or New York in the US, or Ontario or Alberta in Canada. COUNTRY - Indicates the region is a single country. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:RegionTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.region import Region

# TODO update the JSON string below
json = "{}"
# create an instance of Region from a JSON string
region_instance = Region.from_json(json)
# print the JSON string representation of the object
print(Region.to_json())

# convert the object into a dict
region_dict = region_instance.to_dict()
# create an instance of Region from a dict
region_from_dict = Region.from_dict(region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


