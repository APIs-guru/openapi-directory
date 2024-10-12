# A2APolicyDetails

A2A specific policy details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_consistent_frequency_in_minutes** | **int** | The app consistent snapshot frequency in minutes. | [optional] 
**crash_consistent_frequency_in_minutes** | **int** | The crash consistent snapshot frequency in minutes. | [optional] 
**multi_vm_sync_status** | **str** | A value indicating whether multi-VM sync has to be enabled. | [optional] 
**recovery_point_history** | **int** | The duration in minutes until which the recovery points need to be stored. | [optional] 
**recovery_point_threshold_in_minutes** | **int** | The recovery point threshold in minutes. | [optional] 

## Example

```python
from openapi_client.models.a2_a_policy_details import A2APolicyDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2APolicyDetails from a JSON string
a2_a_policy_details_instance = A2APolicyDetails.from_json(json)
# print the JSON string representation of the object
print(A2APolicyDetails.to_json())

# convert the object into a dict
a2_a_policy_details_dict = a2_a_policy_details_instance.to_dict()
# create an instance of A2APolicyDetails from a dict
a2_a_policy_details_from_dict = A2APolicyDetails.from_dict(a2_a_policy_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


