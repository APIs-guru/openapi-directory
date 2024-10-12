# LocationList

List of locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[Location]**](Location.md) | List of locations. | [optional] 

## Example

```python
from openapi_client.models.location_list import LocationList

# TODO update the JSON string below
json = "{}"
# create an instance of LocationList from a JSON string
location_list_instance = LocationList.from_json(json)
# print the JSON string representation of the object
print(LocationList.to_json())

# convert the object into a dict
location_list_dict = location_list_instance.to_dict()
# create an instance of LocationList from a dict
location_list_from_dict = LocationList.from_dict(location_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


