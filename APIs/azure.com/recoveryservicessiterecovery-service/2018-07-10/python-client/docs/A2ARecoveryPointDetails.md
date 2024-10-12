# A2ARecoveryPointDetails

A2A provider specific recovery point details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disks** | **List[str]** | List of disk ids representing a recovery point. | [optional] 
**recovery_point_sync_type** | **str** | A value indicating whether the recovery point is multi VM consistent. | [optional] 

## Example

```python
from openapi_client.models.a2_a_recovery_point_details import A2ARecoveryPointDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2ARecoveryPointDetails from a JSON string
a2_a_recovery_point_details_instance = A2ARecoveryPointDetails.from_json(json)
# print the JSON string representation of the object
print(A2ARecoveryPointDetails.to_json())

# convert the object into a dict
a2_a_recovery_point_details_dict = a2_a_recovery_point_details_instance.to_dict()
# create an instance of A2ARecoveryPointDetails from a dict
a2_a_recovery_point_details_from_dict = A2ARecoveryPointDetails.from_dict(a2_a_recovery_point_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


