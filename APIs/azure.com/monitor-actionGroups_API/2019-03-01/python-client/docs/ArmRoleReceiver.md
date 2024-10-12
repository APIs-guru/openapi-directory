# ArmRoleReceiver

An arm role receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the arm role receiver. Names must be unique across all receivers within an action group. | 
**role_id** | **str** | The arm role id. | 
**use_common_alert_schema** | **bool** | Indicates whether to use common alert schema. | 

## Example

```python
from openapi_client.models.arm_role_receiver import ArmRoleReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of ArmRoleReceiver from a JSON string
arm_role_receiver_instance = ArmRoleReceiver.from_json(json)
# print the JSON string representation of the object
print(ArmRoleReceiver.to_json())

# convert the object into a dict
arm_role_receiver_dict = arm_role_receiver_instance.to_dict()
# create an instance of ArmRoleReceiver from a dict
arm_role_receiver_from_dict = ArmRoleReceiver.from_dict(arm_role_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


