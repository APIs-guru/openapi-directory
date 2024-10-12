# ApplyRecoveryPointInput

Input to apply recovery point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplyRecoveryPointInputProperties**](ApplyRecoveryPointInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.apply_recovery_point_input import ApplyRecoveryPointInput

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyRecoveryPointInput from a JSON string
apply_recovery_point_input_instance = ApplyRecoveryPointInput.from_json(json)
# print the JSON string representation of the object
print(ApplyRecoveryPointInput.to_json())

# convert the object into a dict
apply_recovery_point_input_dict = apply_recovery_point_input_instance.to_dict()
# create an instance of ApplyRecoveryPointInput from a dict
apply_recovery_point_input_from_dict = ApplyRecoveryPointInput.from_dict(apply_recovery_point_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


