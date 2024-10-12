# RegionPostalCodeAreaPostalCodeRange

A range of postal codes that defines the region area.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin** | **str** | Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: \&quot;94108\&quot;, \&quot;9410*\&quot;, \&quot;9*\&quot;. | [optional] 
**end** | **str** | Optional. A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin. | [optional] 

## Example

```python
from openapi_client.models.region_postal_code_area_postal_code_range import RegionPostalCodeAreaPostalCodeRange

# TODO update the JSON string below
json = "{}"
# create an instance of RegionPostalCodeAreaPostalCodeRange from a JSON string
region_postal_code_area_postal_code_range_instance = RegionPostalCodeAreaPostalCodeRange.from_json(json)
# print the JSON string representation of the object
print(RegionPostalCodeAreaPostalCodeRange.to_json())

# convert the object into a dict
region_postal_code_area_postal_code_range_dict = region_postal_code_area_postal_code_range_instance.to_dict()
# create an instance of RegionPostalCodeAreaPostalCodeRange from a dict
region_postal_code_area_postal_code_range_from_dict = RegionPostalCodeAreaPostalCodeRange.from_dict(region_postal_code_area_postal_code_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


