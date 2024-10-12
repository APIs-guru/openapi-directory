# ProgressCounter

ProgressCounter provides counters to describe an operation's progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure** | **str** | The number of units that failed in the operation. | [optional] 
**pending** | **str** | The number of units that are pending in the operation. | [optional] 
**secondary_failure** | **str** | The number of secondary units that failed in the operation. | [optional] 
**secondary_success** | **str** | The number of secondary units that succeeded in the operation. | [optional] 
**success** | **str** | The number of units that succeeded in the operation. | [optional] 

## Example

```python
from openapi_client.models.progress_counter import ProgressCounter

# TODO update the JSON string below
json = "{}"
# create an instance of ProgressCounter from a JSON string
progress_counter_instance = ProgressCounter.from_json(json)
# print the JSON string representation of the object
print(ProgressCounter.to_json())

# convert the object into a dict
progress_counter_dict = progress_counter_instance.to_dict()
# create an instance of ProgressCounter from a dict
progress_counter_from_dict = ProgressCounter.from_dict(progress_counter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


