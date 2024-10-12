# AutomaticTuningOptions

Automatic tuning properties for individual advisors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_state** | **str** | Automatic tuning option actual state. | [optional] [readonly] 
**desired_state** | **str** | Automatic tuning option desired state. | [optional] 
**reason_code** | **int** | Reason code if desired and actual state are different. | [optional] [readonly] 
**reason_desc** | **str** | Reason description if desired and actual state are different. | [optional] [readonly] 

## Example

```python
from openapi_client.models.automatic_tuning_options import AutomaticTuningOptions

# TODO update the JSON string below
json = "{}"
# create an instance of AutomaticTuningOptions from a JSON string
automatic_tuning_options_instance = AutomaticTuningOptions.from_json(json)
# print the JSON string representation of the object
print(AutomaticTuningOptions.to_json())

# convert the object into a dict
automatic_tuning_options_dict = automatic_tuning_options_instance.to_dict()
# create an instance of AutomaticTuningOptions from a dict
automatic_tuning_options_from_dict = AutomaticTuningOptions.from_dict(automatic_tuning_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


