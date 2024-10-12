# LocationKey

Alternate/surrogate key references for a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_no_place_id** | **bool** | Output only. A value of true indicates that an unset place ID is deliberate, which is different from no association being made yet. | [optional] 
**place_id** | **str** | If this location has been verified and is connected to/appears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. If this location is unverified, this field may be populated if the location has been associated with a place that appears on Google Maps. This field can be set during Create calls, but not for Update. The additional &#x60;explicit_no_place_id&#x60; bool qualifies whether an unset place ID is deliberate or not. | [optional] 
**plus_page_id** | **str** | Output only. If this location has a Google+ page associated with it, this is populated with the Google+ page ID for this location. | [optional] 
**request_id** | **str** | Output only. The &#x60;request_id&#x60; used to create this location. May be empty if this location was created outside of the Google My Business API or Business Profile Locations. | [optional] 

## Example

```python
from openapi_client.models.location_key import LocationKey

# TODO update the JSON string below
json = "{}"
# create an instance of LocationKey from a JSON string
location_key_instance = LocationKey.from_json(json)
# print the JSON string representation of the object
print(LocationKey.to_json())

# convert the object into a dict
location_key_dict = location_key_instance.to_dict()
# create an instance of LocationKey from a dict
location_key_from_dict = LocationKey.from_dict(location_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


