# RegionPostalCodeArea

A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postal_codes** | [**List[RegionPostalCodeAreaPostalCodeRange]**](RegionPostalCodeAreaPostalCodeRange.md) | Required. A range of postal codes. | [optional] 
**region_code** | **str** | Required. CLDR territory code or the country the postal code group applies to. | [optional] 

## Example

```python
from openapi_client.models.region_postal_code_area import RegionPostalCodeArea

# TODO update the JSON string below
json = "{}"
# create an instance of RegionPostalCodeArea from a JSON string
region_postal_code_area_instance = RegionPostalCodeArea.from_json(json)
# print the JSON string representation of the object
print(RegionPostalCodeArea.to_json())

# convert the object into a dict
region_postal_code_area_dict = region_postal_code_area_instance.to_dict()
# create an instance of RegionPostalCodeArea from a dict
region_postal_code_area_from_dict = RegionPostalCodeArea.from_dict(region_postal_code_area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


