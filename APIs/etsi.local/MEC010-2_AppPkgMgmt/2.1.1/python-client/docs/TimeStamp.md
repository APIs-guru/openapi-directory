# TimeStamp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nano_seconds** | **int** | The nanoseconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC. | 
**seconds** | **int** | The seconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC. | 

## Example

```python
from openapi_client.models.time_stamp import TimeStamp

# TODO update the JSON string below
json = "{}"
# create an instance of TimeStamp from a JSON string
time_stamp_instance = TimeStamp.from_json(json)
# print the JSON string representation of the object
print(TimeStamp.to_json())

# convert the object into a dict
time_stamp_dict = time_stamp_instance.to_dict()
# create an instance of TimeStamp from a dict
time_stamp_from_dict = TimeStamp.from_dict(time_stamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


