# ManagementPolicyAction

Actions are applied to the filtered blobs when the execution condition is met.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_blob** | [**ManagementPolicyBaseBlob**](ManagementPolicyBaseBlob.md) |  | [optional] 
**snapshot** | [**ManagementPolicySnapShot**](ManagementPolicySnapShot.md) |  | [optional] 

## Example

```python
from openapi_client.models.management_policy_action import ManagementPolicyAction

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPolicyAction from a JSON string
management_policy_action_instance = ManagementPolicyAction.from_json(json)
# print the JSON string representation of the object
print(ManagementPolicyAction.to_json())

# convert the object into a dict
management_policy_action_dict = management_policy_action_instance.to_dict()
# create an instance of ManagementPolicyAction from a dict
management_policy_action_from_dict = ManagementPolicyAction.from_dict(management_policy_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


