# ManagementPolicySnapShot

Management policy action for snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**DateAfterCreation**](DateAfterCreation.md) |  | [optional] 

## Example

```python
from openapi_client.models.management_policy_snap_shot import ManagementPolicySnapShot

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPolicySnapShot from a JSON string
management_policy_snap_shot_instance = ManagementPolicySnapShot.from_json(json)
# print the JSON string representation of the object
print(ManagementPolicySnapShot.to_json())

# convert the object into a dict
management_policy_snap_shot_dict = management_policy_snap_shot_instance.to_dict()
# create an instance of ManagementPolicySnapShot from a dict
management_policy_snap_shot_from_dict = ManagementPolicySnapShot.from_dict(management_policy_snap_shot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


