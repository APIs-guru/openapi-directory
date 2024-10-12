# LocationProperties

location properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_locations** | **List[str]** | A list of location IDs that should be used to ship shipping drives to for jobs created against the current location. If the current location is active, it will be part of the list. If it is temporarily closed due to maintenance, this list may contain other locations.  | [optional] 
**city** | **str** | The city name to use when shipping the drives to the Azure data center.  | [optional] 
**country_or_region** | **str** | The country or region to use when shipping the drives to the Azure data center.  | [optional] 
**phone** | **str** | The phone number for the Azure data center.  | [optional] 
**postal_code** | **str** | The postal code to use when shipping the drives to the Azure data center.  | [optional] 
**recipient_name** | **str** | The recipient name to use when shipping the drives to the Azure data center.  | [optional] 
**state_or_province** | **str** | The state or province to use when shipping the drives to the Azure data center.  | [optional] 
**street_address1** | **str** | The first line of the street address to use when shipping the drives to the Azure data center.  | [optional] 
**street_address2** | **str** | The second line of the street address to use when shipping the drives to the Azure data center.  | [optional] 
**supported_carriers** | **List[str]** | A list of carriers that are supported at this location.  | [optional] 

## Example

```python
from openapi_client.models.location_properties import LocationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LocationProperties from a JSON string
location_properties_instance = LocationProperties.from_json(json)
# print the JSON string representation of the object
print(LocationProperties.to_json())

# convert the object into a dict
location_properties_dict = location_properties_instance.to_dict()
# create an instance of LocationProperties from a dict
location_properties_from_dict = LocationProperties.from_dict(location_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


