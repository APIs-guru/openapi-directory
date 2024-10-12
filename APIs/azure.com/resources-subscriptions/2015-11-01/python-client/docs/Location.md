# Location

Location information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Gets or sets the display name of the location | [optional] 
**id** | **str** | Gets or sets the ID of the resource (/subscriptions/SubscriptionId). | [optional] 
**latitude** | **str** | Gets or sets the latitude of the location | [optional] 
**longitude** | **str** | Gets or sets the longitude of the location | [optional] 
**name** | **str** | Gets or sets the location name | [optional] 
**subscription_id** | **str** | Gets or sets the subscription Id. | [optional] 

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


