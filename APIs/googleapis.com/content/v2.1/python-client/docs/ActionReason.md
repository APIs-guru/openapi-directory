# ActionReason

A single reason why the action is not available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**Action**](Action.md) |  | [optional] 
**detail** | **str** | Detailed explanation of the reason. Should be displayed as a hint if present. | [optional] 
**message** | **str** | Messages summarizing the reason, why the action is not available. For example: \&quot;Review requested on Jan 03. Review requests can take a few days to complete.\&quot; | [optional] 

## Example

```python
from openapi_client.models.action_reason import ActionReason

# TODO update the JSON string below
json = "{}"
# create an instance of ActionReason from a JSON string
action_reason_instance = ActionReason.from_json(json)
# print the JSON string representation of the object
print(ActionReason.to_json())

# convert the object into a dict
action_reason_dict = action_reason_instance.to_dict()
# create an instance of ActionReason from a dict
action_reason_from_dict = ActionReason.from_dict(action_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


