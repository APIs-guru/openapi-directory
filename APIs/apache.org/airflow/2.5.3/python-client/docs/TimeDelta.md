# TimeDelta

Time delta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**days** | **int** |  | 
**microseconds** | **int** |  | 
**seconds** | **int** |  | 

## Example

```python
from openapi_client.models.time_delta import TimeDelta

# TODO update the JSON string below
json = "{}"
# create an instance of TimeDelta from a JSON string
time_delta_instance = TimeDelta.from_json(json)
# print the JSON string representation of the object
print(TimeDelta.to_json())

# convert the object into a dict
time_delta_dict = time_delta_instance.to_dict()
# create an instance of TimeDelta from a dict
time_delta_from_dict = TimeDelta.from_dict(time_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


