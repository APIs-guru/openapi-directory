# UnlockActionParameters

Parameters for bootstrap action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration in TimeSpan format(Define which ISO format) | [optional] 

## Example

```python
from openapi_client.models.unlock_action_parameters import UnlockActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UnlockActionParameters from a JSON string
unlock_action_parameters_instance = UnlockActionParameters.from_json(json)
# print the JSON string representation of the object
print(UnlockActionParameters.to_json())

# convert the object into a dict
unlock_action_parameters_dict = unlock_action_parameters_instance.to_dict()
# create an instance of UnlockActionParameters from a dict
unlock_action_parameters_from_dict = UnlockActionParameters.from_dict(unlock_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


