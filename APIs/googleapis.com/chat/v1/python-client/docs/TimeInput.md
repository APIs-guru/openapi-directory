# TimeInput

Time input values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours** | **int** | The hour on a 24-hour clock. | [optional] 
**minutes** | **int** | The number of minutes past the hour. Valid values are 0 to 59. | [optional] 

## Example

```python
from openapi_client.models.time_input import TimeInput

# TODO update the JSON string below
json = "{}"
# create an instance of TimeInput from a JSON string
time_input_instance = TimeInput.from_json(json)
# print the JSON string representation of the object
print(TimeInput.to_json())

# convert the object into a dict
time_input_dict = time_input_instance.to_dict()
# create an instance of TimeInput from a dict
time_input_from_dict = TimeInput.from_dict(time_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


