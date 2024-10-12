# DriveTimeBreak


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | Specifies the duration of the break in seconds. | 
**initial_driving_time** | **int** | Specifies the initial (current) driving time of a driver to allow dynamic adaptations in seconds. | [optional] 
**max_driving_time** | **int** | Specifies the max driving time (in a row) without break in seconds. | 
**possible_split** | **List[int]** | Array specifying how a break duration (in seconds) can be split into several smaller breaks | [optional] 

## Example

```python
from openapi_client.models.drive_time_break import DriveTimeBreak

# TODO update the JSON string below
json = "{}"
# create an instance of DriveTimeBreak from a JSON string
drive_time_break_instance = DriveTimeBreak.from_json(json)
# print the JSON string representation of the object
print(DriveTimeBreak.to_json())

# convert the object into a dict
drive_time_break_dict = drive_time_break_instance.to_dict()
# create an instance of DriveTimeBreak from a dict
drive_time_break_from_dict = DriveTimeBreak.from_dict(drive_time_break_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


