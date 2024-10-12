# LifecyclePolicy

LifecyclePolicy describes how to deal with task failures based on different conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found. | [optional] 
**action_condition** | [**ActionCondition**](ActionCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.lifecycle_policy import LifecyclePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of LifecyclePolicy from a JSON string
lifecycle_policy_instance = LifecyclePolicy.from_json(json)
# print the JSON string representation of the object
print(LifecyclePolicy.to_json())

# convert the object into a dict
lifecycle_policy_dict = lifecycle_policy_instance.to_dict()
# create an instance of LifecyclePolicy from a dict
lifecycle_policy_from_dict = LifecyclePolicy.from_dict(lifecycle_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


