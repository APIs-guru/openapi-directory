# ApplyRecoveryPointProviderSpecificInput

Provider specific input for apply recovery point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.apply_recovery_point_provider_specific_input import ApplyRecoveryPointProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyRecoveryPointProviderSpecificInput from a JSON string
apply_recovery_point_provider_specific_input_instance = ApplyRecoveryPointProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(ApplyRecoveryPointProviderSpecificInput.to_json())

# convert the object into a dict
apply_recovery_point_provider_specific_input_dict = apply_recovery_point_provider_specific_input_instance.to_dict()
# create an instance of ApplyRecoveryPointProviderSpecificInput from a dict
apply_recovery_point_provider_specific_input_from_dict = ApplyRecoveryPointProviderSpecificInput.from_dict(apply_recovery_point_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


