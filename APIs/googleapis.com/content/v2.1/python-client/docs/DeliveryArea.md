# DeliveryArea

A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Required. The country that the product can be delivered to. Submit a [unicode CLDR region](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) such as &#x60;US&#x60; or &#x60;CH&#x60;. | [optional] 
**postal_code_range** | [**DeliveryAreaPostalCodeRange**](DeliveryAreaPostalCodeRange.md) |  | [optional] 
**region_code** | **str** | A state, territory, or prefecture. This is supported for the United States, Australia, and Japan. Provide a subdivision code from the ISO 3166-2 code tables ([US](https://en.wikipedia.org/wiki/ISO_3166-2:US), [AU](https://en.wikipedia.org/wiki/ISO_3166-2:AU), or [JP](https://en.wikipedia.org/wiki/ISO_3166-2:JP)) without country prefix (for example, &#x60;\&quot;NY\&quot;&#x60;, &#x60;\&quot;NSW\&quot;&#x60;, &#x60;\&quot;03\&quot;&#x60;). | [optional] 

## Example

```python
from openapi_client.models.delivery_area import DeliveryArea

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryArea from a JSON string
delivery_area_instance = DeliveryArea.from_json(json)
# print the JSON string representation of the object
print(DeliveryArea.to_json())

# convert the object into a dict
delivery_area_dict = delivery_area_instance.to_dict()
# create an instance of DeliveryArea from a dict
delivery_area_from_dict = DeliveryArea.from_dict(delivery_area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


