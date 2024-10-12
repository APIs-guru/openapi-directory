# Location

Location information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the location. | [optional] [readonly] 
**id** | **str** | The fully qualified ID of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus. | [optional] [readonly] 
**metadata** | [**LocationMetadata**](LocationMetadata.md) |  | [optional] 
**name** | **str** | The location name. | [optional] [readonly] 
**regional_display_name** | **str** | The display name of the location and its region. | [optional] [readonly] 
**subscription_id** | **str** | The subscription ID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.location import Location

# TODO update the JSON string below
json = "{}"
# create an instance of Location from a JSON string
location_instance = Location.from_json(json)
# print the JSON string representation of the object
print(Location.to_json())

# convert the object into a dict
location_dict = location_instance.to_dict()
# create an instance of Location from a dict
location_from_dict = Location.from_dict(location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


