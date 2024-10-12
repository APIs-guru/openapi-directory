# PolicyTrackedResource

Policy tracked resource record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | [**TrackedResourceModificationDetails**](TrackedResourceModificationDetails.md) |  | [optional] 
**last_modified_by** | [**TrackedResourceModificationDetails**](TrackedResourceModificationDetails.md) |  | [optional] 
**last_update_utc** | **datetime** | Timestamp of the last update to the tracked resource. | [optional] [readonly] 
**policy_details** | [**PolicyDetails**](PolicyDetails.md) |  | [optional] 
**tracked_resource_id** | **str** | The ID of the policy tracked resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_tracked_resource import PolicyTrackedResource

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyTrackedResource from a JSON string
policy_tracked_resource_instance = PolicyTrackedResource.from_json(json)
# print the JSON string representation of the object
print(PolicyTrackedResource.to_json())

# convert the object into a dict
policy_tracked_resource_dict = policy_tracked_resource_instance.to_dict()
# create an instance of PolicyTrackedResource from a dict
policy_tracked_resource_from_dict = PolicyTrackedResource.from_dict(policy_tracked_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


