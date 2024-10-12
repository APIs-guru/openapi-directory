# SwitchProtectionJobDetails

This class represents details for switch protection job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_replication_protected_item_id** | **str** | ARM Id of the new replication protected item. | [optional] 

## Example

```python
from openapi_client.models.switch_protection_job_details import SwitchProtectionJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchProtectionJobDetails from a JSON string
switch_protection_job_details_instance = SwitchProtectionJobDetails.from_json(json)
# print the JSON string representation of the object
print(SwitchProtectionJobDetails.to_json())

# convert the object into a dict
switch_protection_job_details_dict = switch_protection_job_details_instance.to_dict()
# create an instance of SwitchProtectionJobDetails from a dict
switch_protection_job_details_from_dict = SwitchProtectionJobDetails.from_dict(switch_protection_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


