# RollbackAttempt

RollbackAttempt represents an action of rolling back a Cloud Deploy 'Target'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_phase** | **str** | Output only. The phase to which the rollout will be rolled back to. | [optional] [readonly] 
**rollout_id** | **str** | Output only. ID of the rollback &#x60;Rollout&#x60; to create. | [optional] [readonly] 
**state** | **str** | Output only. Valid state of this rollback action. | [optional] [readonly] 
**state_desc** | **str** | Output only. Description of the state of the Rollback. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rollback_attempt import RollbackAttempt

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackAttempt from a JSON string
rollback_attempt_instance = RollbackAttempt.from_json(json)
# print the JSON string representation of the object
print(RollbackAttempt.to_json())

# convert the object into a dict
rollback_attempt_dict = rollback_attempt_instance.to_dict()
# create an instance of RollbackAttempt from a dict
rollback_attempt_from_dict = RollbackAttempt.from_dict(rollback_attempt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


