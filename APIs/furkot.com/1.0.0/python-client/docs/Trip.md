# Trip


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin** | **datetime** | begin of the trip in its local timezone as YYYY-MM-DDThh:mm | [optional] 
**description** | **str** | description of the trip (truncated to 200 characters) | [optional] 
**end** | **datetime** | end of the trip in its local timezone as YYYY-MM-DDThh:mm | [optional] 
**id** | **str** | Unique ID of the trip | [optional] 
**name** | **str** | name of the trip | [optional] 

## Example

```python
from openapi_client.models.trip import Trip

# TODO update the JSON string below
json = "{}"
# create an instance of Trip from a JSON string
trip_instance = Trip.from_json(json)
# print the JSON string representation of the object
print(Trip.to_json())

# convert the object into a dict
trip_dict = trip_instance.to_dict()
# create an instance of Trip from a dict
trip_from_dict = Trip.from_dict(trip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


