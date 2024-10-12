# APILocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**city_url** | **str** | SchoolDigger URL for schools in this city | [optional] 
**html** | **str** | HTML formatted address | [optional] 
**lat_long** | [**APILatLong**](APILatLong.md) |  | [optional] 
**state** | **str** |  | [optional] 
**state_full** | **str** | Full state name (WA &#x3D; Washington) | [optional] 
**street** | **str** |  | [optional] 
**zip** | **str** |  | [optional] 
**zip4** | **str** |  | [optional] 
**zip_url** | **str** | SchoolDigger URL for schools in this zip code | [optional] 

## Example

```python
from openapi_client.models.api_location import APILocation

# TODO update the JSON string below
json = "{}"
# create an instance of APILocation from a JSON string
api_location_instance = APILocation.from_json(json)
# print the JSON string representation of the object
print(APILocation.to_json())

# convert the object into a dict
api_location_dict = api_location_instance.to_dict()
# create an instance of APILocation from a dict
api_location_from_dict = APILocation.from_dict(api_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


