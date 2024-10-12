# RecoveryPointProperties

Recovery point properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_details** | [**ProviderSpecificRecoveryPointDetails**](ProviderSpecificRecoveryPointDetails.md) |  | [optional] 
**recovery_point_time** | **datetime** | The recovery point time. | [optional] 
**recovery_point_type** | **str** | The recovery point type: ApplicationConsistent, CrashConsistent. | [optional] 

## Example

```python
from openapi_client.models.recovery_point_properties import RecoveryPointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPointProperties from a JSON string
recovery_point_properties_instance = RecoveryPointProperties.from_json(json)
# print the JSON string representation of the object
print(RecoveryPointProperties.to_json())

# convert the object into a dict
recovery_point_properties_dict = recovery_point_properties_instance.to_dict()
# create an instance of RecoveryPointProperties from a dict
recovery_point_properties_from_dict = RecoveryPointProperties.from_dict(recovery_point_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


