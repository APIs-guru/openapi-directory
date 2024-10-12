# ApplyRecoveryPointInputProperties

Input properties to apply recovery point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_details** | [**ApplyRecoveryPointProviderSpecificInput**](ApplyRecoveryPointProviderSpecificInput.md) |  | [optional] 
**recovery_point_id** | **str** | The recovery point Id. | [optional] 

## Example

```python
from openapi_client.models.apply_recovery_point_input_properties import ApplyRecoveryPointInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyRecoveryPointInputProperties from a JSON string
apply_recovery_point_input_properties_instance = ApplyRecoveryPointInputProperties.from_json(json)
# print the JSON string representation of the object
print(ApplyRecoveryPointInputProperties.to_json())

# convert the object into a dict
apply_recovery_point_input_properties_dict = apply_recovery_point_input_properties_instance.to_dict()
# create an instance of ApplyRecoveryPointInputProperties from a dict
apply_recovery_point_input_properties_from_dict = ApplyRecoveryPointInputProperties.from_dict(apply_recovery_point_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


