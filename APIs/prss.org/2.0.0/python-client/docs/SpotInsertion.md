# SpotInsertion

A spot insertion for playing a series of spots when a cue is received during a program.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broadcast_service_id** | **int** | The ID of the broadcast service for the spot insertion. | 
**created_date** | **datetime** | The date and time the spot insertion was created. Generated at creation. | [optional] [readonly] 
**cue** | **str** | The cue that triggers the spot insertion. | 
**customer_id** | **int** | The ID of the customer who owns the spot insertion. Set to the logged-in customer at creation. | [optional] [readonly] 
**duration** | **int** | The duration of the spot insertion. | 
**end_date** | **date** | The date the spot insertion ends. The time will be set to midnight Eastern Time. | 
**id** | **int** | The unique ID of the spot insertion. Generated at creation. | [optional] [readonly] 
**program_id** | **int** | The ID of the program for the spot insertion. | 
**spots** | **List[int]** | The ordered list of spot IDs to play. | 
**start_date** | **date** | The date the spot insertion can start. The time will be set to midnight Eastern Time. | 

## Example

```python
from openapi_client.models.spot_insertion import SpotInsertion

# TODO update the JSON string below
json = "{}"
# create an instance of SpotInsertion from a JSON string
spot_insertion_instance = SpotInsertion.from_json(json)
# print the JSON string representation of the object
print(SpotInsertion.to_json())

# convert the object into a dict
spot_insertion_dict = spot_insertion_instance.to_dict()
# create an instance of SpotInsertion from a dict
spot_insertion_from_dict = SpotInsertion.from_dict(spot_insertion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


