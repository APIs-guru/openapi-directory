# ConditionContext

The IAM conditions context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_time** | **str** | The hypothetical access timestamp to evaluate IAM conditions. Note that this value must not be earlier than the current time; otherwise, an INVALID_ARGUMENT error will be returned. | [optional] 

## Example

```python
from openapi_client.models.condition_context import ConditionContext

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionContext from a JSON string
condition_context_instance = ConditionContext.from_json(json)
# print the JSON string representation of the object
print(ConditionContext.to_json())

# convert the object into a dict
condition_context_dict = condition_context_instance.to_dict()
# create an instance of ConditionContext from a dict
condition_context_from_dict = ConditionContext.from_dict(condition_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


