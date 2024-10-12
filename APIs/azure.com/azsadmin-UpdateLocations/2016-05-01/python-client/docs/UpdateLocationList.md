# UpdateLocationList

The list of update locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to get the next page of update locations. | [optional] 
**value** | [**List[UpdateLocation]**](UpdateLocation.md) | The list of update locations. | [optional] 

## Example

```python
from openapi_client.models.update_location_list import UpdateLocationList

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateLocationList from a JSON string
update_location_list_instance = UpdateLocationList.from_json(json)
# print the JSON string representation of the object
print(UpdateLocationList.to_json())

# convert the object into a dict
update_location_list_dict = update_location_list_instance.to_dict()
# create an instance of UpdateLocationList from a dict
update_location_list_from_dict = UpdateLocationList.from_dict(update_location_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


