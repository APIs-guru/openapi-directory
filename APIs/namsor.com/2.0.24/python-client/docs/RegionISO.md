# RegionISO

List of countries and regions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_fips** | **str** |  | [optional] 
**country_iso2** | **str** |  | [optional] 
**country_iso3** | **str** |  | [optional] 
**country_name** | **str** |  | [optional] 
**country_num_code** | **str** |  | [optional] 
**region** | **str** |  | [optional] 
**subregion** | **str** |  | [optional] 
**topregion** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.region_iso import RegionISO

# TODO update the JSON string below
json = "{}"
# create an instance of RegionISO from a JSON string
region_iso_instance = RegionISO.from_json(json)
# print the JSON string representation of the object
print(RegionISO.to_json())

# convert the object into a dict
region_iso_dict = region_iso_instance.to_dict()
# create an instance of RegionISO from a dict
region_iso_from_dict = RegionISO.from_dict(region_iso_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


