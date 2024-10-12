# GeoIPObj


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area_code** | **str** | Area Code | [optional] 
**charset** | **str** | Character encoding | [optional] 
**city** | **str** | City Name | [optional] 
**continent_code** | **str** | Country Abbreviation | [optional] 
**country_code** | **str** | Country Code (Short) | [optional] 
**country_code3** | **str** | Country Code (Long) | [optional] 
**dma_code** | **str** | Longitude | [optional] 
**ip** | **str** | IP Address | [optional] 
**latitude** | **str** | State Abbreviation | [optional] 
**longitude** | **str** | City Name | [optional] 
**metro_code** | **str** | Longitude | [optional] 
**offset** | **str** | UTC Offset (deprecated) | [optional] 
**organization** | **str** | Organization Name | [optional] 
**postal_code** | **str** | Postal Code | [optional] 
**region** | **str** | Latitude | [optional] 
**timezone** | **str** | Local IANA time zone | [optional] 

## Example

```python
from openapi_client.models.geo_ip_obj import GeoIPObj

# TODO update the JSON string below
json = "{}"
# create an instance of GeoIPObj from a JSON string
geo_ip_obj_instance = GeoIPObj.from_json(json)
# print the JSON string representation of the object
print(GeoIPObj.to_json())

# convert the object into a dict
geo_ip_obj_dict = geo_ip_obj_instance.to_dict()
# create an instance of GeoIPObj from a dict
geo_ip_obj_from_dict = GeoIPObj.from_dict(geo_ip_obj_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


