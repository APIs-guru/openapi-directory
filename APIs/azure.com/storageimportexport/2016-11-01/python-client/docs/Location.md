# Location

Provides information about an Azure data center location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Specifies the resource identifier of the location.  | [optional] 
**name** | **str** | Specifies the name of the location. Use List Locations to get all supported locations.  | [optional] 
**properties** | [**LocationProperties**](LocationProperties.md) |  | [optional] 
**type** | **str** | Specifies the type of the location.  | [optional] 

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


