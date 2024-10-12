# CrashGroupPlace


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** | Count of places. | [optional] 
**place_name** | **str** | Place name. | [optional] 

## Example

```python
from openapi_client.models.crash_group_place import CrashGroupPlace

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupPlace from a JSON string
crash_group_place_instance = CrashGroupPlace.from_json(json)
# print the JSON string representation of the object
print(CrashGroupPlace.to_json())

# convert the object into a dict
crash_group_place_dict = crash_group_place_instance.to_dict()
# create an instance of CrashGroupPlace from a dict
crash_group_place_from_dict = CrashGroupPlace.from_dict(crash_group_place_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


